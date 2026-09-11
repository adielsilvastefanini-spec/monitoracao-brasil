function fn12_renderizarEscalonamento(filtroEmpresa = "TODAS", termoBusca = "") {
  var $container = $('#conteudoEscalonamento');
  if ($container.length === 0) return;

  $container.html('<div class="text-center p-3"><i class="fas fa-spinner fa-spin"></i> Carregando contatos...</div>');

  firebase.database().ref("escalonamento").once("value").then(function(snapshot) {
    $container.empty();
    var dadosFirebase = snapshot.val();

    if (!dadosFirebase) {
      $container.html('<div class="alert alert-warning text-center">Nenhum registro encontrado no banco de dados.</div>');
      return;
    }

    termoBusca = termoBusca.toLowerCase().trim();

    // Itera pelas empresas retornadas pelo Firebase (ex: CIRION, OI, VIVO, EBT)
    Object.keys(dadosFirebase).forEach(function(key) {
      var item = dadosFirebase[key];
      var nomeEmpresa = item.empresa || key;

      // Filtro por Empresa
      if (filtroEmpresa !== "TODAS" && nomeEmpresa.toUpperCase() !== filtroEmpresa.toUpperCase()) {
        return;
      }

      // Garante a leitura do array/objeto de níveis dentro da empresa
      var listaNiveis = Array.isArray(item.niveis) ? item.niveis : (item.niveis ? Object.values(item.niveis) : []);

      // Se o nó gravado for registro simples (sem array de níveis)
      if (listaNiveis.length === 0 && (item.nivel || item.contato || item.telefone)) {
        listaNiveis.push({
          nivel: item.nivel || item.cargo || "N/A",
          contato: item.contato || item.telefone || "N/A",
          email: item.email || "N/A"
        });
      }

      // Filtro por Busca de Texto
      var niveisFiltrados = listaNiveis.filter(function(n) {
        if (!termoBusca) return true;
        return (n.nivel && n.nivel.toLowerCase().includes(termoBusca)) ||
               (n.contato && n.contato.toLowerCase().includes(termoBusca)) ||
               (n.email && n.email.toLowerCase().includes(termoBusca)) ||
               nomeEmpresa.toLowerCase().includes(termoBusca);
      });

      if (niveisFiltrados.length === 0) return;

      var htmlCard = `
        <div class="card mb-3 shadow-sm border-0">
          <div class="card-header bg-dark text-white font-weight-bold d-flex justify-content-between align-items-center">
            <span><i class="fas fa-building mr-2"></i> ${nomeEmpresa}</span>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-hover table-striped mb-0 text-sm">
                <thead class="thead-light">
                  <tr>
                    <th style="width: 30%;">Nível / Cargo</th>
                    <th style="width: 35%;">Contato / Telefone</th>
                    <th style="width: 35%;">E-mail</th>
                  </tr>
                </thead>
                <tbody>
      `;

      niveisFiltrados.forEach(function(n) {
        htmlCard += `
          <tr>
            <td class="align-middle"><b>${n.nivel || '-'}</b></td>
            <td class="align-middle">${n.contato || '-'}</td>
            <td class="align-middle">${n.email ? `<a href="mailto:${n.email}">${n.email}</a>` : '-'}</td>
          </tr>
        `;
      });

      htmlCard += `
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;

      $container.append(htmlCard);
    });

    if ($container.is(':empty')) {
      $container.html('<div class="alert alert-warning text-center">Nenhum contato encontrado para os filtros selecionados.</div>');
    }
  }).catch(function(error) {
    console.error("Erro ao carregar escalonamento:", error);
    $container.html('<div class="alert alert-danger text-center">Erro ao carregar dados do Firebase.</div>');
  });
}

// Dispara a renderização automaticamente quando a Modal for aberta
$(document).on('shown.bs.modal', '#modalEscalonamento', function () {
  fn12_renderizarEscalonamento();
});

$(document).ready(function() {
  console.log("Módulo de Escalonamento pronto para renderização.");
});