function fn12_renderizarEscalonamento(filtroEmpresa = "TODAS", termoBusca = "") {
  // Procura o tbody da tabela dentro do modal
  var $tbody = $('#matrizEscalonamento tbody');
  
  // Se não achar por ID, tenta buscar por qualquer tbody dentro da modal ativa
  if ($tbody.length === 0) {
    $tbody = $('.modal.show table tbody, #modalEscalonamento table tbody');
  }

  if ($tbody.length === 0) return;

  $tbody.html('<tr><td colspan="7" class="text-center"><i class="fas fa-spinner fa-spin"></i> Carregando dados...</td></tr>');

  firebase.database().ref("escalonamento").once("value").then(function(snapshot) {
    $tbody.empty();
    var dadosFirebase = snapshot.val();

    if (!dadosFirebase) {
      $tbody.html('<tr><td colspan="7" class="text-center">Nenhum registro encontrado.</td></tr>');
      return;
    }

    termoBusca = termoBusca.toLowerCase().trim();

    Object.keys(dadosFirebase).forEach(function(key) {
      var item = dadosFirebase[key];
      var empresa = item.empresa || key || "-";

      // Filtro por Empresa
      if (filtroEmpresa !== "TODAS" && empresa.toUpperCase() !== filtroEmpresa.toUpperCase()) {
        return;
      }

      // Suporte tanto para nó estruturado por empresa quanto para lista simples de registros
      var listaContatos = Array.isArray(item.niveis) ? item.niveis : (item.niveis ? Object.values(item.niveis) : [item]);

      listaContatos.forEach(function(c) {
        var nivel = c.nivel || c.cargo || "-";
        var gestor = c.gestor || "-";
        var cargo = c.cargo || "-";
        var atendimento = c.atendimento || c.time || "-";
        var telefone = c.telefone || c.contato || "-";
        var email = c.email || "-";

        // Aplica filtro de busca por texto
        if (termoBusca) {
          var textoLinha = (empresa + nivel + gestor + cargo + atendimento + telefone + email).toLowerCase();
          if (!textoLinha.includes(termoBusca)) return;
        }

        var linhaHtml = `
          <tr>
            <td><b>${empresa}</b></td>
            <td>${nivel}</td>
            <td>${gestor}</td>
            <td>${cargo}</td>
            <td>${atendimento}</td>
            <td>${telefone}</td>
            <td>${email !== '-' ? `<a href="mailto:${email}">${email}</a>` : '-'}</td>
          </tr>
        `;

        $tbody.append(linhaHtml);
      });
    });

    if ($tbody.is(':empty')) {
      $tbody.html('<tr><td colspan="7" class="text-center">Nenhum contato encontrado para os filtros selecionados.</td></tr>');
    }
  }).catch(function(error) {
    console.error("Erro ao carregar escalonamento:", error);
    $tbody.html('<tr><td colspan="7" class="text-center text-danger">Erro ao carregar dados do Firebase.</td></tr>');
  });
}

// Escuta a abertura de qualquer modal na página para disparar a renderização
$(document).on('shown.bs.modal', function () {
  fn12_renderizarEscalonamento();
});

// Vincula o campo de busca em tempo real
$(document).on('input', 'input[placeholder*="Buscar"]', function() {
  var termo = $(this).val();
  fn12_renderizarEscalonamento("TODAS", termo);
});

// Vincula os botões de filtro de Empresa (EBT, Oi, Vivo, Cirion, SITA, Todas)
$(document).on('click', '.modal-body button, .modal button', function() {
  var textoBotao = $(this).text().trim().toUpperCase();
  if (["TODAS", "EBT", "OI", "VIVO", "CIRION", "SITA"].includes(textoBotao)) {
    fn12_renderizarEscalonamento(textoBotao);
  }
});

$(document).ready(function() {
  console.log("Módulo de Escalonamento pronto para renderização.");
});