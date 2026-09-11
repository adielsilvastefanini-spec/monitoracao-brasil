function fn12_renderizarEscalonamento(filtroEmpresa = "TODAS", termoBusca = "") {
  var $tbody = $('#matrizEscalonamento tbody');
  if ($tbody.length === 0) {
    $tbody = $('.modal.show table tbody, #modalEscalonamento table tbody');
  }
  if ($tbody.length === 0) return;

  $tbody.html('<tr><td colspan="7" class="text-center"><i class="fas fa-spinner fa-spin"></i> Carregando escalonamentos...</td></tr>');

  firebase.database().ref("escalonamento").once("value").then(function(snapshot) {
    $tbody.empty();
    var dadosFirebase = snapshot.val();

    if (!dadosFirebase) {
      $tbody.html('<tr><td colspan="7" class="text-center">Nenhum registro encontrado.</td></tr>');
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

      listaNiveis.forEach(function(c) {
        var nivel = c.nivel || c.cargo || "-";
        var gestor = c.gestor || "-";
        var cargo = c.cargo || "-";
        var atendimento = c.atendimento || c.time || "-";
        var telefone = c.telefone || c.contato || "-";
        var email = c.email || "-";

        if (termoBusca) {
          var textoBusca = (empresa + nivel + gestor + cargo + atendimento + telefone + email).toLowerCase();
          if (!textoBusca.includes(termoBusca)) return;
        }

        todasAsLinhas.push({
          empresa: empresa,
          nivel: nivel,
          gestor: gestor,
          cargo: cargo,
          atendimento: atendimento,
          telefone: telefone,
          email: email
        });
      });
    });

    // Ordena os registros: Primeiro por Empresa (A-Z) e depois por Nível (N1, N2, N3)
    todasAsLinhas.sort(function(a, b) {
      if (a.empresa === b.empresa) {
        return a.nivel.localeCompare(b.nivel);
      }
      return a.empresa.localeCompare(b.empresa);
    });

    // Constrói e insere no HTML
    todasAsLinhas.forEach(function(reg) {
      var linhaHtml = `
        <tr>
          <td><b>${reg.empresa}</b></td>
          <td>${reg.nivel}</td>
          <td>${reg.gestor}</td>
          <td>${reg.cargo}</td>
          <td>${reg.atendimento}</td>
          <td>${reg.telefone}</td>
          <td>${reg.email !== '-' ? `<a href="mailto:${reg.email}">${reg.email}</a>` : '-'}</td>
        </tr>
      `;
      $tbody.append(linhaHtml);
    });

    if (todasAsLinhas.length === 0) {
      $tbody.html('<tr><td colspan="7" class="text-center">Nenhum registro encontrado para os filtros selecionados.</td></tr>');
    }
  }).catch(function(err) {
    console.error("Erro ao renderizar:", err);
    $tbody.html('<tr><td colspan="7" class="text-center text-danger">Erro ao carregar dados do Firebase.</td></tr>');
  });
}