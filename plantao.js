// Carregamento do Modal de Plantão com isolamento total de erros
$(document).ready(function() {
  $(document).on('show.bs.modal', '#modalPlantao', function () {
    fn_carregarPlantaoAtual();
  });
});

function fn_carregarPlantaoAtual() {
  try {
    var escalaAtual = {
      periodo: "22/07 a 29/07",
      plantao1: { nome: "Carlos Silva", contato: "Ramal 4001 / Teams" },
      especialista: { nome: "Roberto Alves", contato: "Ramal 4099 / (11) 99999-0000" }
    };

    if ($('#plantao-periodo-atual').length) $('#plantao-periodo-atual').text(escalaAtual.periodo);
    if ($('#plantao-n1-a').length) $('#plantao-n1-a').text(escalaAtual.plantao1.nome);
    if ($('#contato-n1-a').length) $('#contato-n1-a').text(escalaAtual.plantao1.contato);

    if ($('#plantao-n2').length) $('#plantao-n2').text(escalaAtual.especialista.nome);
    if ($('#contato-n2').length) $('#contato-n2').text(escalaAtual.especialista.contato);
    
  } catch (erro) {
    console.warn("Aviso no modulo Plantao:", erro);
  }
}