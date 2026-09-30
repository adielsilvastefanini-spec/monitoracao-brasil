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

// Carrega e aplica os dados salvos nos elementos da tela de QUALQUER página
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

      // Atualiza também os campos de input do formulário para manter coerência
      if (dados.suporteNome) $('#inputSuporteNome').val(dados.suporteNome);
      if (dados.suporteContato) $('#inputSuporteContato').val(dados.suporteContato);
      if (dados.especialistaNome) $('#inputEspecialistaNome').val(dados.especialistaNome);
      if (dados.especialistaContato) $('#inputEspecialistaContato').val(dados.especialistaContato);

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
    especialistaContato: $('#lblEspecialistaContato').text(),
    ultimaAtualizacao: new Date().getTime() // Força atualização de timestamp
  };

  // Salva no localStorage
  localStorage.setItem('dadosPlantaoSuporte', JSON.stringify(dadosPlantao));

  // Fecha o formulário de edição
  if ($.fn.collapse) {
    $('#areaResponsavelCollapse').collapse('hide');
  }
  
  alert('Escala do Suporte da Operação atualizada com sucesso!');
}

// Inicialização e Sincronização Global
$(document).ready(function() {
  // 1. Carrega os dados na abertura da página
  carregarDadosPlantao();

  // 2. Recarrega os dados SEMPRE que o modal for aberto em qualquer página
  $(document).on('show.bs.modal', '#modalPlantao', function() {
    carregarDadosPlantao();
  });

  // 3. Sincronização via evento nativo de Storage (entre abas)
  window.addEventListener('storage', function(event) {
    if (event.key === 'dadosPlantaoSuporte') {
      carregarDadosPlantao();
    }
  });

  // 4. Verificação contínua (Polling a cada 2 segundos) para garantir atualização em páginas secundárias
  setInterval(function() {
    carregarDadosPlantao();
  }, 2000);
});