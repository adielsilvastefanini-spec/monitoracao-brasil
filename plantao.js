// Carrega os dados visuais assim que o Modal de Plantão for aberto
$(document).ready(function() {
  $('#modalPlantao').on('show.bs.modal', function () {
    fn_carregarPlantaoAtual();
  });
});

function fn_carregarPlantaoAtual() {
  // Dados temporários para teste de layout (na próxima fase ligaremos ao Firebase)
  var escalaAtual = {
    periodo: "22/07 a 29/07",
    n1_a: { nome: "Carlos Silva", contato: "Ramal 4001 / Teams" },
    n1_b: { nome: "Mariana Souza", contato: "Ramal 4002 / Teams" },
    n2:   { nome: "Roberto Alves", contato: "Ramal 4099 / (11) 99999-0000" }
  };

  // Preenche os campos do Modal
  $('#plantao-periodo-atual').text(escalaAtual.periodo);
  $('#plantao-n1-a').text(escalaAtual.n1_a.nome);
  $('#contato-n1-a').text(escalaAtual.n1_a.contato);

  $('#plantao-n1-b').text(escalaAtual.n1_b.nome);
  $('#contato-n1-b').text(escalaAtual.n1_b.contato);

  $('#plantao-n2').text(escalaAtual.n2.nome);
  $('#contato-n2').text(escalaAtual.n2.contato);
}