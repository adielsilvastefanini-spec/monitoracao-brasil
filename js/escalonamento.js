function fn12_renderizarEscalonamento(filtroEmpresa = "TODAS", termoBusca = "") {
  var $container = $('#conteudoEscalonamento');
  if ($container.length === 0) return;

  $container.empty();

  // Base de dados dos contatos de escalonamento
  var dadosEscalonamento = [
    {
      empresa: "CIRION",
      niveis: [
        { nivel: "N1 - Suporte/Abertura", contato: "0800 880 2111 / 0800 701 2111", email: "atendimento.br@cirionglobal.com" },
        { nivel: "N2 - Supervisor", contato: "(11) 3958-0000", email: "supervisor.noc@cirionglobal.com" },
        { nivel: "N3 - Gerência", contato: "(11) 3958-0001", email: "gerencia.noc@cirionglobal.com" }
      ]
    },
    {
      empresa: "OI",
      niveis: [
        { nivel: "N1 - Service Desk", contato: "0800 031 8031", email: "atendimento.corp@oi.net.br" },
        { nivel: "N2 - Escalation", contato: "0800 031 8032", email: "escalonamento.oi@oi.net.br" }
      ]
    },
    {
      empresa: "VIVO",
      niveis: [
        { nivel: "N1 - Central B2B", contato: "0800 15 1500 / *8486", email: "atendimento.b2b@vivo.com.br" },
        { nivel: "N2 - Gerência Operacional", contato: "0800 15 1501", email: "gerencia.b2b@vivo.com.br" }
      ]
    },
    {
      empresa: "CLARO / EMBRATEL",
      niveis: [
        { nivel: "N1 - Atendimento Central", contato: "0800 721 1010", email: "suporte.embratel@claro.com.br" },
        { nivel: "N2 - Supervisor de Turno", contato: "0800 721 1011", email: "supervisao.embratel@claro.com.br" }
      ]
    }
  ];

  termoBusca = termoBusca.toLowerCase().trim();

  dadosEscalonamento.forEach(function(item) {
    if (filtroEmpresa !== "TODAS" && item.empresa !== filtroEmpresa) {
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
}

// Inicializador quando o arquivo carregar
$(document).ready(function() {
  console.log("Módulo de Escalonamento pronto para renderização.");
});
