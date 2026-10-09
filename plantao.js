/* --------------------------------------------------------------------------
   MÓDULO DE ESCALA DE SUPORTE DA OPERAÇÃO (plantao.js) - COM FIREBASE
   -------------------------------------------------------------------------- */

// 1. Exibe a data atual (DD/MM/AAAA) no badge
function atualizarDataAtualPlantao() {
  var hoje = new Date();
  var dia = String(hoje.getDate()).padStart(2, '0');
  var mes = String(hoje.getMonth() + 1).padStart(2, '0');
  var ano = hoje.getFullYear();
  var dataFormatada = dia + '/' + mes + '/' + ano;

  $('#badgeDataAtual').text(dataFormatada);
}

// 2. Ouve alterações em TEMPO REAL no Firebase Realtime Database
function escutarDadosPlantaoFirebase() {
  atualizarDataAtualPlantao();

  // Garante que o Firebase está inicializado
  if (typeof firebase !== 'undefined' && firebase.database) {
    var plantaoRef = firebase.database().ref('configuracoes/suporte_operacao');

    // Listener '.on()' aciona sempre que qualquer usuário/navegador altera o banco
    plantaoRef.on('value', function(snapshot) {
      var dados = snapshot.val();
      if (dados) {
        if (dados.suporteNome) $('#lblSuporteNome').text(dados.suporteNome);
        if (dados.suporteContato) $('#lblSuporteContato').text(dados.suporteContato);
        if (dados.especialistaNome) $('#lblEspecialistaNome').text(dados.especialistaNome);
        if (dados.especialistaContato) $('#lblEspecialistaContato').text(dados.especialistaContato);

        // Preenche também o formulário da Área do Responsável
        if (dados.suporteNome) $('#inputSuporteNome').val(dados.suporteNome);
        if (dados.suporteContato) $('#inputSuporteContato').val(dados.suporteContato);
        if (dados.especialistaNome) $('#inputEspecialistaNome').val(dados.especialistaNome);
        if (dados.especialistaContato) $('#inputEspecialistaContato').val(dados.especialistaContato);
      }
    }, function(error) {
      console.error("Erro ao ler dados do plantão no Firebase:", error);
    });
  } else {
    console.warn("Firebase não carregado nesta página.");
  }
}

// 3. Salva os novos dados diretamente no Firebase
function salvarAlteracoesPlantao() {
  var supNome = $('#inputSuporteNome').val().trim();
  var supContato = $('#inputSuporteContato').val().trim();
  var espNome = $('#inputEspecialistaNome').val().trim();
  var espContato = $('#inputEspecialistaContato').val().trim();

  var dadosPlantao = {
    suporteNome: supNome || $('#lblSuporteNome').text(),
    suporteContato: supContato || $('#lblSuporteContato').text(),
    especialistaNome: espNome || $('#lblEspecialistaNome').text(),
    especialistaContato: espContato || $('#lblEspecialistaContato').text(),
    ultimaAtualizacao: firebase.database.ServerValue.TIMESTAMP
  };

  // Grava no nó 'configuracoes/suporte_operacao' do Firebase
  firebase.database().ref('configuracoes/suporte_operacao').set(dadosPlantao)
    .then(function() {
      if ($.fn.collapse) {
        $('#areaResponsavelCollapse').collapse('hide');
      }
      alert('Escala do Suporte da Operação atualizada e sincronizada com sucesso!');
    })
    .catch(function(error) {
      console.error("Erro ao salvar no Firebase:", error);
      alert('Erro ao salvar no Firebase: ' + error.message);
    });
}

// 4. Inicialização do script
$(document).ready(function() {
  // Inicia o listener em tempo real
  escutarDadosPlantaoFirebase();

  // Garante atualização da data e leitura ao abrir o modal
  $(document).on('show.bs.modal', '#modalPlantao', function() {
    atualizarDataAtualPlantao();
  });
});