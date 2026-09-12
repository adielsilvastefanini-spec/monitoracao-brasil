// Renderização da Matriz de Escalonamento
function fn12_renderizarEscalonamento(filtroEmpresa = "TODAS", termoBusca = "") {
  var $tbody = $('#tbodyEscalonamento');
  if ($tbody.length === 0) {
    $tbody = $('.modal.show table tbody, #modalEscalonamento table tbody');
  }
  if ($tbody.length === 0) return;

  $tbody.html('<tr><td colspan="9" class="text-center"><i class="fas fa-spinner fa-spin"></i> Carregando escalonamentos...</td></tr>');

  firebase.database().ref("escalonamento").once("value").then(function(snapshot) {
    $tbody.empty();
    var dadosFirebase = snapshot.val();

    if (!dadosFirebase) {
      $tbody.html('<tr><td colspan="9" class="text-center">Nenhum registro encontrado.</td></tr>');
      return;
    }

    termoBusca = termoBusca.toLowerCase().trim();
    var todasAsLinhas = [];

    // Desmembra empresas e seus respectivos múltiplos níveis
    Object.keys(dadosFirebase).forEach(function(key) {
      var item = dadosFirebase[key];
      var empresa = item.empresa || key || "-";

      if (filtroEmpresa !== "TODAS" && empresa.toUpperCase() !== filtroEmpresa.toUpperCase()) {
        return;
      }

      var listaNiveis = Array.isArray(item.niveis) ? item.niveis : (item.niveis ? Object.values(item.niveis) : [item]);

      listaNiveis.forEach(function(c, index) {
        var nivel = c.nivel || c.cargo || "-";
        var gestor = c.gestor || "-";
        var cargo = c.cargo || "-";
        var atendimento = c.atendimento || c.time || "-";
        var telefone = c.telefone || c.contato || "-";
        var celular = c.celular || "-";
        var email = c.email || "-";

        if (termoBusca) {
          var textoBusca = (empresa + nivel + gestor + cargo + atendimento + telefone + celular + email).toLowerCase();
          if (!textoBusca.includes(termoBusca)) return;
        }

        todasAsLinhas.push({
          empresa: empresa,
          index: index,
          nivel: nivel,
          gestor: gestor,
          cargo: cargo,
          atendimento: atendimento,
          telefone: telefone,
          celular: celular,
          email: email
        });
      });
    });

    // Ordenação por Empresa (A-Z) e Nível (0, 1, 2...)
    todasAsLinhas.sort(function(a, b) {
      if (a.empresa === b.empresa) {
        return a.nivel.localeCompare(b.nivel, undefined, { numeric: true, sensitivity: 'base' });
      }
      return a.empresa.localeCompare(b.empresa);
    });

    // Montagem das linhas mantendo compatibilidade com as 9 colunas do index.html
    todasAsLinhas.forEach(function(reg) {
      var isUrl = reg.email.startsWith("http://") || reg.email.startsWith("https://");
      var linkEmail = isUrl 
        ? `<a href="${reg.email}" target="_blank" class="badge bg-primary text-decoration-none">Abrir Portal</a>` 
        : (reg.email !== '-' ? `<a href="mailto:${reg.email}">${reg.email}</a>` : '-');

      var linhaHtml = `
        <tr>
          <td><b>${reg.empresa}</b></td>
          <td class="text-center"><span class="badge-nivel badge-nivel-1">${reg.nivel}</span></td>
          <td>${reg.gestor}</td>
          <td>${reg.cargo}</td>
          <td>${reg.atendimento}</td>
          <td>${reg.telefone}</td>
          <td>${reg.celular}</td>
          <td>${linkEmail}</td>
          <td class="text-center">
            <button class="btn btn-sm btn-outline-danger py-0 px-1" onclick="excluirContatoEscalonamento('${reg.empresa}', ${reg.index})" title="Excluir">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      `;
      $tbody.append(linhaHtml);
    });

    if (todasAsLinhas.length === 0) {
      $tbody.html('<tr><td colspan="9" class="text-center">Nenhum registro encontrado para os filtros selecionados.</td></tr>');
    }
  }).catch(function(err) {
    console.error("Erro ao renderizar:", err);
    $tbody.html('<tr><td colspan="9" class="text-center text-danger">Erro ao carregar dados do Firebase.</td></tr>');
  });
}

// Abertura do formulário de cadastro
function abrirModalFormEscalonamento() {
  $('#formEscalonamento')[0].reset();
  $('#esc_empresa_origem').val('');
  $('#esc_index').val('');
  $('#tituloFormEscalonamento').text('Cadastrar Novo Contato');
  
  // Utiliza a API do Bootstrap 5 para abrir o modal sem conflitos
  var modalEl = document.getElementById('modalFormEscalonamento');
  var modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
  modalInstance.show();
}

// Evento de exclusão de contato
function excluirContatoEscalonamento(empresa, index) {
  if (!confirm(`Deseja remover este registro da empresa ${empresa}?`)) return;

  firebase.database().ref("escalonamento/" + empresa).once("value").then(function(snapshot) {
    var dadosEmpresa = snapshot.val();
    if (dadosEmpresa && Array.isArray(dadosEmpresa.niveis)) {
      dadosEmpresa.niveis.splice(index, 1);
      return firebase.database().ref("escalonamento/" + empresa).set(dadosEmpresa);
    }
  }).then(function() {
    fn12_renderizarEscalonamento();
  }).catch(function(err) {
    console.error("Erro ao excluir:", err);
  });
}

// Evento de salvamento (Salva o novo registro na lista da empresa)
$(document).on('submit', '#formEscalonamento', function(e) {
  e.preventDefault();

  var empresa = $('#esc_empresa').val();
  var novoRegistro = {
    nivel: $('#esc_nivel').val(),
    gestor: $('#esc_gestor').val() || "-",
    cargo: $('#esc_cargo').val() || "-",
    atendimento: $('#esc_atendimento').val() || "-",
    telefone: $('#esc_telefone').val() || "-",
    celular: $('#esc_celular').val() || "-",
    email: $('#esc_email').val() || "-"
  };

  firebase.database().ref("escalonamento/" + empresa).once("value").then(function(snapshot) {
    var dadosEmpresa = snapshot.val() || { empresa: empresa, niveis: [] };
    var listaNiveis = Array.isArray(dadosEmpresa.niveis) ? dadosEmpresa.niveis : [];

    listaNiveis.push(novoRegistro);

    return firebase.database().ref("escalonamento/" + empresa).set({
      empresa: empresa,
      niveis: listaNiveis
    });
  }).then(function() {
    var modalEl = document.getElementById('modalFormEscalonamento');
    var modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();

    fn12_renderizarEscalonamento();
  }).catch(function(err) {
    console.error("Erro ao salvar:", err);
    alert("Erro ao salvar contato no Firebase.");
  });
});