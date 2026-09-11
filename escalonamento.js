function fn12_renderizarEscalonamento(filtroEmpresa = "TODAS", termoBusca = "") {
  var $container = $('#conteudoEscalonamento');
  if ($container.length === 0) return;

  $container.html('<div class="text-center p-3"><i class="fas fa-spinner fa-spin"></i> Carregando dados...</div>');

  // Consulta os dados em tempo real no Firebase Realtime Database
  firebase.database().ref("escalonamento").once("value").then(function(snapshot) {
    $container.empty();
    var dadosFirebase = snapshot.val();

    if (!dadosFirebase) {
      $container.html('<div class="alert alert-warning text-center">Nenhum registro encontrado no banco de dados.</div>');
      return;
    }

    // Normaliza o nó do Firebase para o formato esperado
    var listaEmpresas = [];
    
    // Se o Firebase retornou um objeto com sub-chaves
    Object.keys(dadosFirebase).forEach(function(key) {
      var item = dadosFirebase[key];
      // Mapeia registros individuais para o formato de exibição
      listaEmpresas.push({
        empresa: item.empresa || "OUTROS",
        niveis: [
          { 
            nivel: item.nivel || item.cargo || "N/A", 
            contato: item.telefone || item.contato || "N/A", 
            email: item.email || "N/A" 
          }
        ]
      });
    });

    termoBusca = termoBusca.toLowerCase().trim();

    listaEmpresas.forEach(function(item) {
      // Normalização para comparar EBT / CLARO / EMBRATEL se necessário
      var empresaUpper = item.empresa.toUpperCase();
      if (filtroEmpresa !== "TODAS" && !empresaUpper.includes(filtroEmpresa.toUpperCase())) {
        return;
      }

      var niveisFiltrados = item.niveis.filter(function(n) {
        if (!termoBusca) return true;
        return n.nivel.toLowerCase().includes(termoBusca) ||
               n.contato.toLowerCase().includes(termoBusca) ||
               n.email.toLowerCase().includes(termoBusca) ||
               item.empresa.toLowerCase().includes(termoBusca);
      });

      if (niveisFiltrados.length === 0) return;

      var htmlCard = `
        <div class="card mb-3 shadow-sm border-0">
          <div class="card-header bg-dark text-white font-weight-bold d-flex justify-content-between align-items-center">
            <span><i class="fas fa-building mr-2"></i> ${item.empresa}</span>
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
            <td class="align-middle"><b>${n.nivel}</b></td>
            <td class="align-middle">${n.contato}</td>
            <td class="align-middle"><a href="mailto:${n.email}">${n.email}</a></td>
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

// Inicialização e escuta da Modal
$(document).ready(function() {
  console.log("Módulo de Escalonamento pronto para renderização.");
  
  // Chama a renderização assim que o script carrega
  fn12_renderizarEscalonamento();
});