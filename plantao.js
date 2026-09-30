/* --------------------------------------------------------------------------
   MÓDULO DE ESCALA DE SUPORTE DA OPERAÇÃO (plantao.js)
   -------------------------------------------------------------------------- */

// Exibe a data atual (DD/MM/AAAA) no badge
function atualizarDataAtualPlantao() {
  var hoje = new Date();
  var dia = String(hoje.getDate()).padStart(2, '0');
  var mes = String(hoje.getMonth() + 1).padStart(2, '0');
  var ano = hoje.getFullYear();
  var dataFormatada = dia + '/' + mes + '/' + ano;

  $('#badgeDataAtual').text(dataFormatada);
}

// Carrega e aplica os dados salvos nos elementos da tela
function carregarDadosPlantao() {
  atualizarDataAtualPlantao();

  var salvos = localStorage.getItem('dadosPlantaoSuporte');
  if (salvos) {
    try {
      var dados = JSON.parse(salvos);
      if (dados.suporteNome) $('#lblSuporteNome').text(dados.suporteNome);
      if (dados.suporteContato) $('#lblSuporteContato').text(dados.suporteContato);
      if (dados.especialistaNome) $('#lblEspecialistaNome').text(dados.especialistaNome);
      if (dados.especialistaContato) $('#lblEspecialistaContato').text(dados.especialistaContato);
    } catch (e) {
      console.error("Erro ao carregar dados do plantão:", e);
    }
  }
}

// Salva as alterações feitas na Área do Responsável
function salvarAlteracoesPlantao() {
  var supNome = $('#inputSuporteNome').val().trim();
  var supContato = $('#inputSuporteContato').val().trim();
  var espNome = $('#inputEspecialistaNome').val().trim();
  var espContato = $('#inputEspecialistaContato').val().trim();

  if (supNome) $('#lblSuporteNome').text(supNome);
  if (supContato) $('#lblSuporteContato').text(supContato);
  if (espNome) $('#lblEspecialistaNome').text(espNome);
  if (espContato) $('#lblEspecialistaContato').text(espContato);

  var dadosPlantao = {
    suporteNome: $('#lblSuporteNome').text(),
    suporteContato: $('#lblSuporteContato').text(),
    especialistaNome: $('#lblEspecialistaNome').text(),
    especialistaContato: $('#lblEspecialistaContato').text()
  };

  // Salva no localStorage (dispara o evento 'storage' para as outras abas/páginas)
  localStorage.setItem('dadosPlantaoSuporte', JSON.stringify(dadosPlantao));

  // Fecha o formulário de edição
  $('#areaResponsavelCollapse').collapse('hide');
  alert('Escala do Suporte da Operação atualizada com sucesso!');
}

// Eventos e Inicialização
$(document).ready(function() {
  // 1. Carrega os dados assim que a página abre
  carregarDadosPlantao();

  // 2. Recarrega os dados SEMPRE que o modal for aberto nesta página
  $(document).on('show.bs.modal', '#modalPlantao', function() {
    carregarDadosPlantao();
  });

  // 3. SINCRONIZAÇÃO EM TEMPO REAL: Escuta alterações feitas em OUTRAS abas/páginas abertas
  window.addEventListener('storage', function(event) {
    if (event.key === 'dadosPlantaoSuporte') {
      carregarDadosPlantao();
    }
  });
});