/* --------------------------------------------------------------------------
   MÓDULO DE ESCALA DE SUPORTE DA OPERAÇÃO (plantao.js)
   -------------------------------------------------------------------------- */

// ITEM 1: Exibe a data atual (DD/MM/AAAA) no badge da janela
function atualizarDataAtualPlantao() {
  var hoje = new Date();
  var dia = String(hoje.getDate()).padStart(2, '0');
  var mes = String(hoje.getMonth() + 1).padStart(2, '0');
  var ano = hoje.getFullYear();
  var dataFormatada = dia + '/' + mes + '/' + ano;

  $('#badgeDataAtual').text(dataFormatada);
}

// ITEM 3: Salva os novos nomes e telefones/contatos e atualiza a tela
function salvarAlteracoesPlantao() {
  var supNome = $('#inputSuporteNome').val().trim();
  var supContato = $('#inputSuporteContato').val().trim();
  var espNome = $('#inputEspecialistaNome').val().trim();
  var espContato = $('#inputEspecialistaContato').val().trim();

  if (supNome) $('#lblSuporteNome').text(supNome);
  if (supContato) $('#lblSuporteContato').text(supContato);
  if (espNome) $('#lblEspecialistaNome').text(espNome);
  if (espContato) $('#lblEspecialistaContato').text(espContato);

  // Armazena no localStorage para preservar os dados atualizados
  var dadosPlantao = {
    suporteNome: $('#lblSuporteNome').text(),
    suporteContato: $('#lblSuporteContato').text(),
    especialistaNome: $('#lblEspecialistaNome').text(),
    especialistaContato: $('#lblEspecialistaContato').text()
  };
  localStorage.setItem('dadosPlantaoSuporte', JSON.stringify(dadosPlantao));

  // Fecha o formulário de edição e exibe confirmação
  $('#areaResponsavelCollapse').collapse('hide');
  alert('Escala do Suporte da Operação atualizada com sucesso!');
}

// Recarrega os dados do suporte e data atual sempre que o modal é aberto ou a página carrega
function carregarDadosPlantao() {
  atualizarDataAtualPlantao();

  var salvos = localStorage.getItem('dadosPlantaoSuporte');
  if (salvos) {
    var dados = JSON.parse(salvos);
    if (dados.suporteNome) $('#lblSuporteNome').text(dados.suporteNome);
    if (dados.suporteContato) $('#lblSuporteContato').text(dados.suporteContato);
    if (dados.especialistaNome) $('#lblEspecialistaNome').text(dados.especialistaNome);
    if (dados.especialistaContato) $('#lblEspecialistaContato').text(dados.especialistaContato);
  }
}

// Inicializa automaticamente ao carregar o script
$(document).ready(function() {
  carregarDadosPlantao();
  
  // Atualiza a data sempre que o modal for exibido
  $('#modalPlantao').on('show.bs.modal', function() {
    atualizarDataAtualPlantao();
  });
});