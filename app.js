    const firebaseConfig = {
      apiKey: "AIzaSyC2nYXXvsZJq54tatPVVDTyecGP8VgUR3w",
      authDomain: "passagem-de-turno-6eea4.firebaseapp.com",
      databaseURL: "https://passagem-de-turno-6eea4-default-rtdb.firebaseio.com",
      projectId: "passagem-de-turno-6eea4",
      storageBucket: "passagem-de-turno-6eea4.firebasestorage.app",
      messagingSenderId: "399308087796",
      appId: "1:399308087796:web:18afe529724399c2e059a1"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();

    const dadosSitiosBase = {
      "AJU": { "ATO": ["AENA", "CIRION BRASIL", "EMBRATEL", "OI"] },
      "BEL": { "ATO": ["SOCICAM", "CIRION BRASIL", "EMBRATEL", "OI"], "MNT": ["SOCICAM", "LATAM BRASIL", "VIVO", "CIRION BRASIL", "OI"] },
      "BHZ": { "Contact Center": ["OI", "AeC", "TELEFONICA BRASIL", "CIRION BRASIL"] },
      "BNU": { "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "BPS": { "ATO": ["SOCICAM", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "OI"], "MNT": ["SOCICAM", "CLARO", "CIRION BRASIL", "OI"] },
      "BSB": { "ATO": ["INFRAMERICA", "CIRION BRASIL", "EMBRATEL", "OI", "SITA"], "Loja": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "BVB": { "ATO": ["VINCI", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "OI"] },
      "BYO": { "ATO": ["GOVERNO", "CLARO", "CIRION BRASIL"] },
      "CAC": { "ATO": ["TRANSITAR", "VIVO", "CIRION BRASIL", "OI"] },
      "CGB": { "ATO": ["SOCICAM", "CIRION BRASIL", "OI", "EMBRATEL"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"], "MNT": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "CGH": { "ATO": ["AENA", "TELEFONICA BRASIL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "OI", "EMBRATEL"] },
      "CGR": { "ATO": ["AENA", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"] },
      "CLV": { "ATO": ["SOCICAM", "CIRION BRASIL", "OI"] },
      "CNF": { "ATO": ["BH AIRPORTS", "CIRION BRASIL", "EMBRATEL", "OI"] },
      "CPV": { "ATO": ["AENA", "VIVO", "CIRION BRASIL"] },
      "CWB": { "ATO": ["CCR", "CIRION BRASIL", "OI", "EMBRATEL"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"], "Volvo": ["VIVO", "CIRION BRASIL", "OI"] },
      "CXJ": { "ATO": ["PREFEITURA", "CLARO", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "DOU": { "ATO": ["INFRAERO", "CLARO", "CIRION BRASIL"] },
      "FEN": { "ATO": ["DIX", "CLARO", "CIRION BRASIL", "LATAM"] },
      "FLN": { "ATO": ["ZURICH", "CIRION BRASIL", "EMBRATEL", "OI"] },
      "FOR": { "ATO": ["FRAPORT", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM"], "DOM EXP": ["VIVO", "CIRION BRASIL", "OI"], "DOM IMP": ["CIRION BRASIL", "EMBRATEL", "OI"] },
      "GIG": { "ATO": ["RIOGALEÃO", "CIRION BRASIL", "EMBRATEL", "OI"] },
      "GRU": { "ATO": ["GRUAIRPORT", "LATAM", "SITA", "TELEFONICA BRASIL", "OI"], "CML": ["LATAM", "TELEFONICA BRASIL", "OI"] },
      "GYN": { "ATO": ["CCR", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"], "Mega": ["VIVO", "CIRION BRASIL", "OI"] },
      "IGU": { "ATO": ["CCR", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "OI"] },
      "IMP": { "ATO": ["VIVO", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"], "MNT": ["CCR", "VIVO", "CIRION BRASIL", "OI"] },
      "IOS": { "ATO": ["SOCICAM", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"], "MNT": ["SOCICAM", "VIVO", "CIRION BRASIL", "OI"] },
      "IZA": { "ATO": ["LATAM", "CIRION", "CLARO"] },
      "JDO": { "ATO": ["AENA", "CLARO", "CIRION BRASIL", "OI"] },
      "JJD": { "ATO": ["INFRAERO", "VIVO", "CIRION BRASIL"] },
      "JJG": { "ATO": ["RDL", "VIVO", "CIRION BRASIL", "OI"] },
      "JOI": { "ATO": ["CCR"], "ATO/Teca": ["CLARO", "CIRION BRASIL", "OI"] },
      "JPA": { "ATO": ["AENA", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "LDB": { "ATO": ["CCR", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "MAB": { "ATO": ["AENA"], "MNT": ["LATAM", "VIVO", "CIRION BRASIL", "OI"], "ATO/Teca": ["VIVO", "CIRION BRASIL", "OI"] },
      "MAO": { "ATO": ["VINCI", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"] },
      "MCP": { "ATO": ["SOCICAM", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"], "MNT": ["SOCICAM", "VIVO", "CIRION BRASIL", "OI"] },
      "MCZ": { "ATO": ["AENA", "CIRION BRASIL", "OI", "EMBRATEL"], "Teca": ["LATAM", "CIRION BRASIL", "OI", "EMBRATEL"] },
      "MGF": { "ATO": ["SBMG S/A"], "ATO/Teca": ["VIVO", "CIRION BRASIL", "OI"] },
      "MOC": { "ATO": ["AENA", "TIM", "CIRION BRASIL", "OI"] },
      "NAT": { "ATO": ["ZURICH"], "ATO/Teca": ["CIRION BRASIL", "EMBRATEL", "OI"] },
      "NVT": { "ATO": ["CCR", "CIRION BRASIL", "OI", "EMBRATEL"], "Teca": ["LATAM", "CIRION BRASIL", "OI", "EMBRATEL"] },
      "OPS": { "ATO": ["SOCICAM", "VIVO", "CIRION BRASIL", "OI"] },
      "PET": { "ATO": ["CCR", "CLARO", "CIRION BRASIL", "OI"] },
      "PFB": { "ATO": ["INFRAERO", "CLARO", "CIRION BRASIL", "OI"] },
      "PHB": { "ATO": ["SBPB", "VIVO", "CIRION BRASIL"] },
      "PLU": { "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "PMW": { "ATO": ["CCR"], "P.A Teca": ["LATAM"], "ATO/Teca": ["CLARO", "CIRION BRASIL", "OI"] },
      "PNZ": { "ATO": ["CCR", "CLARO", "CIRION BRASIL", "OI"] },
      "POA": { "ATO": ["LATAM", "FRAPORT", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "FRAPORT", "VIVO", "CIRION BRASIL", "TIM"], "MNT": ["LATAM", "FRAPORT", "CIRION BRASIL", "OI"] },
      "POP": { "TELEFONICA BRASIL": ["TELEFÔNICA", "OI", "LATAM BRASIL", "CIRION"], "CIRION BRASIL": ["CIRION", "LATAM BRASIL", "TELEFÔNICA", "OI"] },
      "PVH": { "ATO": ["VINCI", "VIVO", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "QSB": { "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"] },
      "QSC": { "MNT": ["LATAM"], "Lonado": ["CIRION BRASIL", "VIVO"], "MRO": ["TELEFONICA BRASIL"], "Museu": ["VIVO", "LATAM BRASIL", "CIRION BRASIL"] },
      "RAO": { "ATO": ["VOA", "VIVO", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "RBR": { "ATO": ["VINCI", "CLARO", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "REC": { "ATO": ["AENA", "CIRION BRASIL", "OI", "EMBRATEL"], "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"] },
      "SAO": { "ACADEMIA ÁTICA": ["LATAM", "TELEFONICA BRASIL", "OI"], "HANGAR 2": ["LATAM", "TELEFONICA BRASIL", "OI"], "EZ TOWER": ["LATAM", "OI", "CIRION", "EMBRATEL"], "DHL": ["VIVO", "CIRION BRASIL", "OI"], "Contact Center": ["TELEFONICA BRASIL", "CIRION"], "OSASCO": ["OI", "KONECTA", "TELEFONICA BRASIL", "CIRION BRASIL"] },
      "SDU": { "ATO": ["INFRAERO", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "OI"] },
      "SJK": { "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "SJP": { "ATO": ["ASP", "VIVO", "CIRION BRASIL", "OI"], "Teca": ["ASP", "VIVO", "CIRION BRASIL", "OI"] },
      "SLZ": { "ATO": ["CCR", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "SSA": { "ATO": ["VINCI", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"], "Contact Center": ["CIRION BRASIL", "OI", "TELEFONICA BRASIL", "KONECTA"] },
      "STM": { "ATO": ["AENA", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"], "MNT": ["AENA", "VIVO", "CIRION BRASIL", "OI"] },
      "THE": { "ATO": ["CCR"], "ATO/Teca": ["CIRION BRASIL", "EMBRATEL", "OI"] },
      "UBA": { "ATO": ["AENA", "VIVO", "CIRION BRASIL"] },
      "UDI": { "ATO": ["AENA", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "OI"] },
      "UNA": { "ATO": ["SOCICAM", "CLARO", "CIRION BRASIL", "OI"] },
      "VCP": { "ABSA": ["LATAM", "CIRION BRASIL", "EMBRATEL"], "ATO": ["VIRACOPOS", "TIM", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL"] },
      "VDC": { "ATO": ["SOCICAM", "CLARO", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "CLARO", "CIRION BRASIL", "OI"] },
      "VIX": { "ATO": ["ZURICH", "CIRION BRASIL", "EMBRATEL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] },
      "XAP": { "ATO": ["SOCICAM", "CIRION BRASIL", "OI"], "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"] }
    };

    let dadosSitios = {};
    let dadosCarregados = false;
    let timerSalvarInput = null;

    function fn01_getOptionsSitio() {
      let options = '<option value="">Selecione...</option>';
      let chavesOrdenadas = Object.keys(dadosSitios).sort();
      for (let sitio of chavesOrdenadas) {
        options += `<option value="${sitio}">${sitio}</option>`;
      }
      return options;
    }

    function fn02_reordenarTabela() {
      var $tbody = $('#incidentes tbody');
      var $linhas = $tbody.find('tr').get();

      function getGrupoFinalizacao($tr) {
        var $tdSitio = $tr.find('td.col-sitio');
        return $tdSitio.hasClass('sitio-verde') ? 2 : 1;
      }

      $linhas.sort(function(a, b) {
        var grupoA = getGrupoFinalizacao($(a));
        var grupoB = getGrupoFinalizacao($(b));

        if (grupoA !== grupoB) {
          return grupoA - grupoB;
        }

        var idA = parseInt($(a).attr('data-id') || 0);
        var idB = parseInt($(b).attr('data-id') || 0);
        return idB - idA;
      });

      $.each($linhas, function(idx, item) {
        $tbody.append(item);
      });
    }

    function fn03_avaliarStatusLinha($tr) {
      var $tdSitio = $tr.find('td.col-sitio');
      var sitioVal = $tr.find('.select-sitio').val();
      var tipoVal = $tr.find('.select-tipo').val();
      var data1Val = $tr.find('.input-data1').val();
      var hora1Val = $tr.find('.input-hora1').val();
      var data2Val = $tr.find('.input-data2').val();
      var hora2Val = $tr.find('.input-hora2').val();
      var falhaVal = $tr.find('.select-falha').val();
      var opcomVal = $tr.find('.select-opcom').val();
      var impactoVal = $tr.find('.select-impacto').val();
      var parceiroVal = $tr.find('.select-parceiro').val();
      var causaVal = $tr.find('.select-causa').val();
      var statusVal = $tr.find('.input-status').val().trim();

      $tdSitio.removeClass('sitio-laranja sitio-verde sitio-cinza');
      $tr.removeClass('linha-concluida linha-atividade');

      if (!sitioVal) return;

      var principalPreenchido = sitioVal && tipoVal && data1Val && hora1Val && data2Val && hora2Val && falhaVal && opcomVal && impactoVal && parceiroVal && causaVal;

      if (causaVal === "Atividade") {
        $tdSitio.addClass('sitio-cinza');
        $tr.addClass('linha-atividade');
      } else if (principalPreenchido && statusVal !== "") {
        $tdSitio.addClass('sitio-verde');
        $tr.addClass('linha-concluida');
      } else {
        $tdSitio.addClass('sitio-laranja');
      }
    }

    function fn04_carregarTiposPorSitio($tr, sitioSelecionado) {
      var $selectTipo = $tr.find('.select-tipo');
      var $selectParceiro = $tr.find('.select-parceiro');
      var valTipoAtual = $selectTipo.val();

      $selectTipo.empty();

      if (sitioSelecionado && dadosSitios[sitioSelecionado]) {
        $selectTipo.append('<option value="">Selecione...</option>');
        for (let tipo in dadosSitios[sitioSelecionado]) {
          $selectTipo.append(`<option value="${tipo}">${tipo}</option>`);
        }
        $selectTipo.prop('disabled', false);
        if (valTipoAtual) $selectTipo.val(valTipoAtual);
      } else {
        $selectTipo.append('<option value="">Select Sítio...</option>').prop('disabled', true);
        $selectParceiro.empty().append('<option value="">Select Tipo...</option>').prop('disabled', true);
      }
    }

    function fn05_carregarParceirosPorTipo($tr, sitioSelecionado, tipoSelecionado) {
      var $selectParceiro = $tr.find('.select-parceiro');
      var valParceiroAtual = $selectParceiro.val();

      $selectParceiro.empty();

      if (sitioSelecionado && tipoSelecionado && dadosSitios[sitioSelecionado][tipoSelecionado]) {
        $selectParceiro.append('<option value="">Selecione...</option>');
        dadosSitios[sitioSelecionado][tipoSelecionado].forEach(function(parceiro) {
          $selectParceiro.append(`<option value="${parceiro}">${parceiro}</option>`);
        });
        $selectParceiro.prop('disabled', false);
        if (valParceiroAtual) $selectParceiro.val(valParceiroAtual);
      } else {
        $selectParceiro.append('<option value="">Select Tipo...</option>').prop('disabled', true);
      }
    }

    function fn06_salvarDadosStorage() {
      if (!dadosCarregados) return;

      var dados = [];
      $('#incidentes tbody tr').each(function() {
        var $tr = $(this);
        var item = {
          id: $tr.attr('data-id') || Date.now().toString(),
          sitio: $tr.find('.select-sitio').val() || '',
          tipo: $tr.find('.select-tipo').val() || '',
          data1: $tr.find('.input-data1').val() || '',
          hora1: $tr.find('.input-hora1').val() || '',
          data2: $tr.find('.input-data2').val() || '',
          hora2: $tr.find('.input-hora2').val() || '',
          falha: $tr.find('.select-falha').val() || '',
          opcom: $tr.find('.select-opcom').val() || '',
          impacto: $tr.find('.select-impacto').val() || '',
          parceiro: $tr.find('.select-parceiro').val() || '',
          causa: $tr.find('.select-causa').val() || '',
          ticket: $tr.find('.input-ticket').val() || '',
          status: $tr.find('.input-status').val() || ''
        };
        dados.push(item);
      });

      database.ref('passagens').set(dados);
    }

    function fn07_preencherCamposLinha($tr, dados) {
      if (!dados) return;

      if (dados.sitio) {
        $tr.find('.select-sitio').val(dados.sitio);
        fn04_carregarTiposPorSitio($tr, dados.sitio);
      }
      if (dados.tipo) {
        $tr.find('.select-tipo').val(dados.tipo);
        fn05_carregarParceirosPorTipo($tr, dados.sitio, dados.tipo);
      }
      if (dados.parceiro) {
        $tr.find('.select-parceiro').val(dados.parceiro);
      }

      $tr.find('.input-data1').val(dados.data1 || '');
      $tr.find('.input-hora1').val(dados.hora1 || '');
      $tr.find('.input-data2').val(dados.data2 || '');
      $tr.find('.input-hora2').val(dados.hora2 || '');
      $tr.find('.select-falha').val(dados.falha || '');
      $tr.find('.select-opcom').val(dados.opcom || 'N/A');
      $tr.find('.select-impacto').val(dados.impacto || 'N/A');
      $tr.find('.select-causa').val(dados.causa || 'Pendente');
      $tr.find('.input-ticket').val(dados.ticket || '');
      $tr.find('.input-status').val(dados.status || '');

      fn03_avaliarStatusLinha($tr);
    }

    function fn08_criarLinhaTabela(id, dados = null) {
      var $tr = $(`<tr data-id="${id}">
        <td><input type="checkbox" class="check-item"></td>
        <td class="col-sitio">
          <select class="select-tabela-sm select-sitio">
            ${fn01_getOptionsSitio()}
          </select>
        </td>
        <td>
          <select class="select-tabela-sm select-tipo" disabled>
            <option value="">Select Sítio...</option>
          </select>
        </td>
        <td><input type="date" class="input-tabela-sm input-data input-data1"></td>
        <td><input type="time" class="input-tabela-sm input-hora input-hora1"></td>
        <td><input type="date" class="input-tabela-sm input-data input-data2"></td>
        <td><input type="time" class="input-tabela-sm input-hora input-hora2"></td>
        <td>
          <select class="select-tabela-sm select-falha">
            <option value="">Selecione...</option>
            <option value="Isolado">Isolado</option>
            <option value="Primário">Primário</option>
            <option value="Secundário">Secundário</option>
            <option value="Setores">Setores</option>
            <option value="Telefonia">Telefonia</option>
            <option value="Normalizado">Normalizado</option>
            <option value="Intermitência">Intermitência</option>
          </select>
        </td>
        <td>
          <select class="select-tabela-sm select-opcom">
            <option value="N/A">N/A</option>
            <option value="OP-1">OP-1</option>
            <option value="OP-2">OP-2</option>
            <option value="OP-3">OP-3</option>
          </select>
        </td>
        <td>
          <select class="select-tabela-sm select-impacto">
            <option value="N/A">N/A</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </td>
        <td>
          <select class="select-tabela-sm select-parceiro" disabled>
            <option value="">Select Tipo...</option>
          </select>
        </td>
        <td>
          <select class="select-tabela-sm select-causa">
            <option value="Pendente">Pendente</option>
            <option value="Energia">Energia</option>
            <option value="Fusão de Fibra">Fusão de Fibra</option>
            <option value="Massiva">Massiva</option>
            <option value="Atividade">Atividade</option>
            <option value="Rota Comutada">Rota Comutada</option>
            <option value="Falha SW">Falha SW</option>
          </select>
        </td>
        <td>
          <input type="text" class="input-tabela-sm input-ticket" placeholder="Nº Chamado" maxlength="12">
        </td>
        <td>
          <input type="text" class="input-tabela-sm input-status" placeholder="Descreva as últimas ações relativas ao incidente...">
        </td>
      </tr>`);

      $('#incidentes tbody').prepend($tr);

      if (dados) {
        fn07_preencherCamposLinha($tr, dados);
      }
      return $tr;
    }

    function fn09_inicializarDados() {
      database.ref('config/dadosSitios').once('value').then(function(snapshot) {
        var dadosCustom = snapshot.val();
        dadosSitios = $.extend(true, {}, dadosSitiosBase, dadosCustom || {});
        return database.ref('passagens').once('value');
      }).then(function(snapshot) {
        var dados = snapshot.val();
        $('#incidentes tbody').empty();

        if (dados) {
          var lista = Array.isArray(dados) ? dados : Object.values(dados);
          lista.forEach(function(item) {
            if (item && item.id) {
              fn08_criarLinhaTabela(item.id, item);
            }
          });
          fn02_reordenarTabela();
        }

        dadosCarregados = true;
      }).catch(function(error) {
        console.error("Erro na inicialização:", error);
      });
    }

    function fn10_removerTipoSitio(codigoSitio, tipoRemover) {
      if (dadosSitios[codigoSitio] && dadosSitios[codigoSitio][tipoRemover]) {
        delete dadosSitios[codigoSitio][tipoRemover];
        
        database.ref('config/dadosSitios/' + codigoSitio + '/' + tipoRemover).remove()
          .then(() => {
            alert(`O tipo "${tipoRemover}" do sítio "${codigoSitio}" foi excluído com sucesso!`);
            location.reload();
          })
          .catch((err) => {
            alert("Erro ao remover no banco de dados: " + err.message);
          });
      } else {
        alert(`O tipo "${tipoRemover}" não foi encontrado dentro de "${codigoSitio}".`);
      }
    }

    function fn11_gerarCheckPoint() {
      var $tbodyCP = $('#tbodyCheckPoint');
      $tbodyCP.empty();

      var hoje = new Date().toISOString().split('T')[0];
      var totalItens = 0;

      $('#incidentes tbody tr').each(function() {
        var $tr = $(this);
        var $tdSitio = $tr.find('td.col-sitio');

        var ehPendente = $tdSitio.hasClass('sitio-laranja');
        var ehAtividade = $tdSitio.hasClass('sitio-cinza');
        var data1 = $tr.find('.input-data1').val();

        if (ehPendente || (ehAtividade && data1 === hoje)) {
          totalItens++;

          var formatarDataBR = function(d) {
            if (!d) return '';
            var p = d.split('-');
            return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : d;
          };

          var sitio = $tr.find('.select-sitio').val() || '';
          var tipo = $tr.find('.select-tipo').val() || '';
          var d1Formatted = formatarDataBR(data1);
          var h1 = $tr.find('.input-hora1').val() || '';
          var d2Formatted = formatarDataBR($tr.find('.input-data2').val());
          var h2 = $tr.find('.input-hora2').val() || '';
          var falha = $tr.find('.select-falha').val() || '';
          var opcom = $tr.find('.select-opcom').val() || '';
          var impacto = $tr.find('.select-impacto').val() || '';
          var parceiro = $tr.find('.select-parceiro').val() || '';
          var causa = $tr.find('.select-causa').val() || '';
          var ticket = $tr.find('.input-ticket').val() || '';
          var status = $tr.find('.input-status').val() || '';

          var classeAtividade = ehAtividade ? ' cp-row-atividade' : '';

          var trHTML = `<tr>
            <td class="${classeAtividade}"><b>${sitio}</b></td>
            <td class="${classeAtividade}">${tipo}</td>
            <td class="${classeAtividade}">${d1Formatted}</td>
            <td class="${classeAtividade}">${h1}</td>
            <td class="${classeAtividade}">${d2Formatted}</td>
            <td class="${classeAtividade}">${h2}</td>
            <td class="${classeAtividade}">${falha}</td>
            <td class="${classeAtividade}">${opcom}</td>
            <td class="${classeAtividade}">${impacto}</td>
            <td class="${classeAtividade}">${parceiro}</td>
            <td class="${classeAtividade}">${causa}</td>
            <td class="cp-col-ticket${classeAtividade}">${ticket}</td>
            <td class="cp-col-status${classeAtividade}">${status}</td>
          </tr>`;

          $tbodyCP.append(trHTML);
        }
      });

      if (totalItens === 0) {
        alert("Não existem pendências ou atividades registradas para a data de hoje.");
        return;
      }

      var modalElem = document.getElementById('modalCheckPoint');
      var modalInstance = new bootstrap.Modal(modalElem);
      modalInstance.show();
    }

    $(document).ready(function() {

      fn09_inicializarDados();

      $('#btnNovoItem').on('click', function() {
        var novoId = Date.now().toString();
        var $tr = fn08_criarLinhaTabela(novoId);
        fn02_reordenarTabela();
        fn06_salvarDadosStorage();
        $tr.find('.select-sitio').focus();
      });

      /* 1. DIGITAÇÃO FLUIDA (COM DEBOUNCE PARA NÃO PERDER FOCO DO TECLADO) */
      $('#incidentes').on('input', 'input', function() {
        var $tr = $(this).closest('tr');
        fn03_avaliarStatusLinha($tr);
        
        clearTimeout(timerSalvarInput);
        timerSalvarInput = setTimeout(function() {
          fn06_salvarDadosStorage();
        }, 1000);
      });

      /* 2. REORDENA A TABELA SOMENTE QUANDO MUDAR SELECT OU SAIR DO CAMPO */
      $('#incidentes').on('change', 'select, input', function() {
        var $tr = $(this).closest('tr');
        fn03_avaliarStatusLinha($tr);
        fn02_reordenarTabela();
        fn06_salvarDadosStorage();
      });

      $('#incidentes').on('change', '.select-sitio', function() {
        var $tr = $(this).closest('tr');
        fn04_carregarTiposPorSitio($tr, $(this).val());
      });

      $('#incidentes').on('change', '.select-tipo', function() {
        var $tr = $(this).closest('tr');
        var sitio = $tr.find('.select-sitio').val();
        fn05_carregarParceirosPorTipo($tr, sitio, $(this).val());
      });

      $('#btnSalvarNovoSitio').on('click', function() {
        var codigo = $('#inputNovoSitio').val().trim().toUpperCase();
        var tipo = $('#inputNovoTipo').val().trim();
        var parceirosStr = $('#inputNovosParceiros').val().trim();

        if (!codigo || !tipo || !parceirosStr) {
          alert('Por favor, preencha o Sítio, o Tipo e os Parceiros para salvar.');
          return;
        }

        var novosParceiros = parceirosStr.split(',').map(s => s.trim()).filter(s => s !== '');

        if (!dadosSitios[codigo]) {
          dadosSitios[codigo] = {};
        }

        if (!dadosSitios[codigo][tipo]) {
          dadosSitios[codigo][tipo] = [];
        }

        let inseridos = 0;
        novosParceiros.forEach(function(p) {
          if (!dadosSitios[codigo][tipo].includes(p)) {
            dadosSitios[codigo][tipo].push(p);
            inseridos++;
          }
        });

        if (inseridos === 0) {
          alert(`Todos os parceiros informados já existem para o tipo "${tipo}" no sítio "${codigo}".`);
          return;
        }

        var $btn = $(this);
        $btn.prop('disabled', true).text('Salvando...');

        database.ref('config/dadosSitios/' + codigo + '/' + tipo).set(dadosSitios[codigo][tipo])
          .then(function() {
            $('.select-sitio').each(function() {
              var valAtual = $(this).val();
              $(this).html(fn01_getOptionsSitio());
              if (valAtual) $(this).val(valAtual);
            });

            $('#formNovoSitio')[0].reset();
            var modalElem = document.getElementById('modalNovoSitio');
            var modalInstance = bootstrap.Modal.getInstance(modalElem) || new bootstrap.Modal(modalElem);
            modalInstance.hide();

            alert(`Dados do sítio "${codigo}" (${tipo}) gravados com sucesso!`);
          })
          .catch(function(err) {
            alert('Erro ao salvar no banco: ' + err.message);
          })
          .finally(function() {
            $btn.prop('disabled', false).text('Salvar Dados');
          });
      });

      $('#btnExcluirTipoModal').on('click', function() {
        var codigo = $('#inputNovoSitio').val().trim().toUpperCase();
        var tipo = $('#inputNovoTipo').val().trim();

        if (!codigo || !tipo) {
          alert('Preencha o Código do Sítio e o Tipo que você deseja excluir.');
          return;
        }

        if (confirm(`Tem certeza que deseja apagar o tipo "${tipo}" do sítio "${codigo}"?`)) {
          fn10_removerTipoSitio(codigo, tipo);
        }
      });

      $('#btnCheckPoint').on('click', function() {
        fn11_gerarCheckPoint();
      });

      $('#btnCopiarImagemCP').on('click', function() {
        var $btn = $(this);
        $btn.prop('disabled', true).text('Gerando...');

        var container = document.getElementById('containerCheckPointExport');

        html2canvas(container, {
          scale: 2,
          useCORS: true
        }).then(function(canvas) {
          canvas.toBlob(function(blob) {
            try {
              var item = new ClipboardItem({ 'image/png': blob });
              navigator.clipboard.write([item]).then(function() {
                var modalElem = document.getElementById('modalCheckPoint');
                var modalInstance = bootstrap.Modal.getInstance(modalElem);
                if (modalInstance) modalInstance.hide();

                alert('Imagem do Check-Point copiada! Cole (Ctrl+V) no WhatsApp.');
              }).catch(function(err) {
                alert('Erro ao copiar para o Clipboard: ' + err.message);
              });
            } catch (err) {
              alert('Navegador não suporta a cópia direta de imagem. Tente no Chrome/Edge.');
            } finally {
              $btn.prop('disabled', false).text('Copiar Imagem');
            }
          }, 'image/png');
        });
      });

      $('#inputCustomSearch').on('keyup', function() {
        var termo = $(this).val().toLowerCase();
        $('#incidentes tbody tr').each(function() {
          var texto = $(this).text().toLowerCase();
          var inputs = $(this).find('input, select').map(function() { return $(this).val(); }).get().join(' ').toLowerCase();
          
          if ((texto + ' ' + inputs).indexOf(termo) !== -1) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });

      $('#checkAll').on('change', function() {
        $('.check-item').prop('checked', this.checked);
      });
function fn11_gerarCheckPoint() {
      var $tbodyCP = $('#tbodyCheckPoint');
      $tbodyCP.empty();

      var hoje = new Date().toISOString().split('T')[0];
      var totalItens = 0;

      $('#incidentes tbody tr').each(function() {
        var $tr = $(this);
        var $tdSitio = $tr.find('td.col-sitio');

        var ehPendente = $tdSitio.hasClass('sitio-laranja');
        var ehAtividade = $tdSitio.hasClass('sitio-cinza');
        var data1 = $tr.find('.input-data1').val();

        if (ehPendente || (ehAtividade && data1 === hoje)) {
          totalItens++;

          var formatarDataBR = function(d) {
            if (!d) return '';
            var p = d.split('-');
            return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : d;
          };

          var sitio = $tr.find('.select-sitio').val() || '';
          var tipo = $tr.find('.select-tipo').val() || '';
          var d1Formatted = formatarDataBR(data1);
          var h1 = $tr.find('.input-hora1').val() || '';
          var d2Formatted = formatarDataBR($tr.find('.input-data2').val());
          var h2 = $tr.find('.input-hora2').val() || '';
          var falha = $tr.find('.select-falha').val() || '';
          var opcom = $tr.find('.select-opcom').val() || '';
          var impacto = $tr.find('.select-impacto').val() || '';
          var parceiro = $tr.find('.select-parceiro').val() || '';
          var causa = $tr.find('.select-causa').val() || '';
          var ticket = $tr.find('.input-ticket').val() || '';
          var status = $tr.find('.input-status').val() || '';

          var classeAtividade = ehAtividade ? ' cp-row-atividade' : '';

          var trHTML = `<tr>
            <td class="${classeAtividade}"><b>${sitio}</b></td>
            <td class="${classeAtividade}">${tipo}</td>
            <td class="${classeAtividade}">${d1Formatted}</td>
            <td class="${classeAtividade}">${h1}</td>
            <td class="${classeAtividade}">${d2Formatted}</td>
            <td class="${classeAtividade}">${h2}</td>
            <td class="${classeAtividade}">${falha}</td>
            <td class="${classeAtividade}">${opcom}</td>
            <td class="${classeAtividade}">${impacto}</td>
            <td class="${classeAtividade}">${parceiro}</td>
            <td class="${classeAtividade}">${causa}</td>
            <td class="cp-col-ticket${classeAtividade}">${ticket}</td>
            <td class="cp-col-status${classeAtividade}">${status}</td>
          </tr>`;

          $tbodyCP.append(trHTML);
        }
      });

      if (totalItens === 0) {
        alert("Não existem pendências ou atividades registradas para a data de hoje.");
        return;
      }

      var modalElem = document.getElementById('modalCheckPoint');
      var modalInstance = new bootstrap.Modal(modalElem);
      modalInstance.show();
    }

    $(document).ready(function() {

      fn09_inicializarDados();

      $('#btnNovoItem').on('click', function() {
        var novoId = Date.now().toString();
        var $tr = fn08_criarLinhaTabela(novoId);
        fn02_reordenarTabela();
        fn06_salvarDadosStorage();
        $tr.find('.select-sitio').focus();
      });

      /* 1. DIGITAÇÃO FLUIDA (COM DEBOUNCE) */
      $('#incidentes').on('input', 'input', function() {
        var $tr = $(this).closest('tr');
        fn03_avaliarStatusLinha($tr);
        
        clearTimeout(timerSalvarInput);
        timerSalvarInput = setTimeout(function() {
          fn06_salvarDadosStorage();
        }, 1000);
      });

      /* 2. REORDENA A TABELA AO MUDAR SELECT OU SAIR DO CAMPO */
      $('#incidentes').on('change', 'select, input', function() {
        var $tr = $(this).closest('tr');
        fn03_avaliarStatusLinha($tr);
        fn02_reordenarTabela();
        fn06_salvarDadosStorage();
      });

      /* 3. VALIDAÇÃO DE DATA E HORA FIM NO FUTURO */
      $('#incidentes').on('change blur', '.input-data2, .input-hora2', function() {
        var $tr = $(this).closest('tr');
        var data2Val = $tr.find('.input-data2').val();
        var hora2Val = $tr.find('.input-hora2').val();

        if (data2Val && hora2Val) {
          var dataHoraFim = new Date(`${data2Val}T${hora2Val}:00`);
          var agora = new Date();

          if (dataHoraFim > agora) {
            alert('Atenção: A Data e Hora de término não podem ser no futuro!');
            $tr.find('.input-hora2').val(''); // Reseta a hora para correção
            fn03_avaliarStatusLinha($tr);
          }
        }
      });

      $('#incidentes').on('change', '.select-sitio', function() {
        var $tr = $(this).closest('tr');
        fn04_carregarTiposPorSitio($tr, $(this).val());
      });

      $('#incidentes').on('change', '.select-tipo', function() {
        var $tr = $(this).closest('tr');
        var sitio = $tr.find('.select-sitio').val();
        fn05_carregarParceirosPorTipo($tr, sitio, $(this).val());
      });

      $('#btnSalvarNovoSitio').on('click', function() {
        var codigo = $('#inputNovoSitio').val().trim().toUpperCase();
        var tipo = $('#inputNovoTipo').val().trim();
        var parceirosStr = $('#inputNovosParceiros').val().trim();

        if (!codigo || !tipo || !parceirosStr) {
          alert('Por favor, preencha o Sítio, o Tipo e os Parceiros para salvar.');
          return;
        }

        var novosParceiros = parceirosStr.split(',').map(s => s.trim()).filter(s => s !== '');

        if (!dadosSitios[codigo]) {
          dadosSitios[codigo] = {};
        }

        if (!dadosSitios[codigo][tipo]) {
          dadosSitios[codigo][tipo] = [];
        }

        let inseridos = 0;
        novosParceiros.forEach(function(p) {
          if (!dadosSitios[codigo][tipo].includes(p)) {
            dadosSitios[codigo][tipo].push(p);
            inseridos++;
          }
        });

        if (inseridos === 0) {
          alert(`Todos os parceiros informados já existem para o tipo "${tipo}" no sítio "${codigo}".`);
          return;
        }

        var $btn = $(this);
        $btn.prop('disabled', true).text('Salvando...');

        database.ref('config/dadosSitios/' + codigo + '/' + tipo).set(dadosSitios[codigo][tipo])
          .then(function() {
            $('.select-sitio').each(function() {
              var valAtual = $(this).val();
              $(this).html(fn01_getOptionsSitio());
              if (valAtual) $(this).val(valAtual);
            });

            $('#formNovoSitio')[0].reset();
            var modalElem = document.getElementById('modalNovoSitio');
            var modalInstance = bootstrap.Modal.getInstance(modalElem) || new bootstrap.Modal(modalElem);
            modalInstance.hide();

            alert(`Dados do sítio "${codigo}" (${tipo}) gravados com sucesso!`);
          })
          .catch(function(err) {
            alert('Erro ao salvar no banco: ' + err.message);
          })
          .finally(function() {
            $btn.prop('disabled', false).text('Salvar Dados');
          });
      });

      $('#btnExcluirTipoModal').on('click', function() {
        var codigo = $('#inputNovoSitio').val().trim().toUpperCase();
        var tipo = $('#inputNovoTipo').val().trim();

        if (!codigo || !tipo) {
          alert('Preencha o Código do Sítio e o Tipo que você deseja excluir.');
          return;
        }

        if (confirm(`Tem certeza que deseja apagar o tipo "${tipo}" do sítio "${codigo}"?`)) {
          fn10_removerTipoSitio(codigo, tipo);
        }
      });

      $('#btnCheckPoint').on('click', function() {
        fn11_gerarCheckPoint();
      });

      $('#btnCopiarImagemCP').on('click', function() {
        var $btn = $(this);
        $btn.prop('disabled', true).text('Gerando...');

        var container = document.getElementById('containerCheckPointExport');

        html2canvas(container, {
          scale: 2,
          useCORS: true
        }).then(function(canvas) {
          canvas.toBlob(function(blob) {
            try {
              var item = new ClipboardItem({ 'image/png': blob });
              navigator.clipboard.write([item]).then(function() {
                var modalElem = document.getElementById('modalCheckPoint');
                var modalInstance = bootstrap.Modal.getInstance(modalElem);
                if (modalInstance) modalInstance.hide();

                alert('Imagem do Check-Point copiada! Cole (Ctrl+V) no WhatsApp.');
              }).catch(function(err) {
                alert('Erro ao copiar para o Clipboard: ' + err.message);
              });
            } catch (err) {
              alert('Navegador não suporta a cópia direta de imagem. Tente no Chrome/Edge.');
            } finally {
              $btn.prop('disabled', false).text('Copiar Imagem');
            }
          }, 'image/png');
        });
      });

      $('#inputCustomSearch').on('keyup', function() {
        var termo = $(this).val().toLowerCase();
        $('#incidentes tbody tr').each(function() {
          var texto = $(this).text().toLowerCase();
          var inputs = $(this).find('input, select').map(function() { return $(this).val(); }).get().join(' ').toLowerCase();
          
          if ((texto + ' ' + inputs).indexOf(termo) !== -1) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });

      $('#checkAll').on('change', function() {
        $('.check-item').prop('checked', this.checked);
      });

      $('#btnExcluirSelecionado').on('click', function() {
        var $selecionados = $('.check-item:checked');
        if ($selecionados.length === 0) {
          alert('Selecione ao menos um registro para excluir.');
          return;
        }
        if (confirm('Deseja excluir a(s) linha(s) selecionada(s)?')) {
          $selecionados.closest('tr').remove();
          $('#checkAll').prop('checked', false);
          fn06_salvarDadosStorage();
        }
      });

      $('#btnSalvarTudo').on('click', function() {
        fn06_salvarDadosStorage();
        alert('Dados salvos no Firebase com sucesso!');
      });

      /* EVENTOS DO ESCALONAMENTO */
      $('#btnEscalonamento').on('click', function() {
        fn12_renderizarEscalonamento();
        var modalElem = document.getElementById('modalEscalonamento');
        var modalInstance = new bootstrap.Modal(modalElem);
        modalInstance.show();
      });

      $('#filtrosEmpresaEscalonamento button').on('click', function() {
        $('#filtrosEmpresaEscalonamento button').removeClass('active');
        $(this).addClass('active');
        var emp = $(this).attr('data-emp');
        var termo = $('#inputSearchEscalonamento').val();
        fn12_renderizarEscalonamento(emp, termo);
      });

      $('#inputSearchEscalonamento').on('keyup search', function() {
        var emp = $('#filtrosEmpresaEscalonamento button.active').attr('data-emp') || "TODAS";
        fn12_renderizarEscalonamento(emp, $(this).val());
      });

    }); // FIM DO $(document).ready

    /* EVENTOS GLOBAIS DE DELEGAÇÃO DE DOM */
    $(document).on('click', '#btnEmail', function() {
      // Injeta os controles de Turno, Analistas e Ferramentas na modal caso ainda não existam
      if ($('#containerControlesTurno').length === 0) {
        var controlesHTML = `
          <div id="containerControlesTurno" class="card p-3 mb-3 border-secondary-subtle bg-light">
            <div class="row g-3">
              <div class="col-md-3">
                <label class="form-label fw-bold mb-1" style="font-size:11px;">TURNO (12H):</label>
                <select id="selectTurno" class="form-select form-select-sm">
                  <option value="Turno 1 (07h00 - 19h00)">Turno 1 (07h00 - 19h00)</option>
                  <option value="Turno 2 (19h00 - 07h00)">Turno 2 (19h00 - 07h00)</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label fw-bold mb-1" style="font-size:11px;">ANALISTA SAINDO:</label>
                <select id="selectAnalistaSaindo" class="form-select form-select-sm">
                  <option value="Francisco">Francisco</option>
                  <option value="Rodrigo">Rodrigo</option>
                  <option value="Matheus">Matheus</option>
                  <option value="Bruno">Bruno</option>
                  <option value="Wendel">Wendel</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label fw-bold mb-1" style="font-size:11px;">ANALISTA ENTRANDO:</label>
                <select id="selectAnalistaEntrando" class="form-select form-select-sm">
                  <option value="Rodrigo">Rodrigo</option>
                  <option value="Francisco">Francisco</option>
                  <option value="Matheus">Matheus</option>
                  <option value="Bruno">Bruno</option>
                  <option value="Wendel">Wendel</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label fw-bold mb-1" style="font-size:11px;">VALIDAÇÃO DE FERRAMENTAS:</label>
                <div class="d-flex flex-column gap-1">
                  <div class="form-check form-check-inline m-0">
                    <input class="form-check-input check-ferramenta" type="checkbox" id="checkCastleRock" checked>
                    <label class="form-check-label fw-bold" for="checkCastleRock" style="font-size:11px; cursor:pointer;">
                      <i class="fas fa-chess-rook text-primary me-1"></i> CastleRock <span id="stCastleRock" class="ms-1 text-success">✔️</span>
                    </label>
                  </div>
                  <div class="form-check form-check-inline m-0">
                    <input class="form-check-input check-ferramenta" type="checkbox" id="checkGrafana" checked>
                    <label class="form-check-label fw-bold" for="checkGrafana" style="font-size:11px; cursor:pointer;">
                      <i class="fas fa-chart-line text-warning me-1"></i> Grafana <span id="stGrafana" class="ms-1 text-success">✔️</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        $('#emailCorpoContainer').before(controlesHTML);
      }

      gerarRelatorioWhatsApp();
      
      var modalEl = document.getElementById('modalEmail');
      var modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modalInstance.show();
    });

    // Atualiza status (V ou X) e regenera o relatório dinamicamente ao mudar opções
    $(document).on('change', '#selectTurno, #selectAnalistaSaindo, #selectAnalistaEntrando, .check-ferramenta', function() {
      var crChecked = $('#checkCastleRock').is(':checked');
      var grChecked = $('#checkGrafana').is(':checked');

      $('#stCastleRock').html(crChecked ? '✔️' : '❌').attr('class', crChecked ? 'ms-1 text-success' : 'ms-1 text-danger');
      $('#stGrafana').html(grChecked ? '✔️' : '❌').attr('class', grChecked ? 'ms-1 text-success' : 'ms-1 text-danger');

      gerarRelatorioWhatsApp();
    });

    $(document).on('click', '#btnAtualizarPrevia', function() {
      gerarRelatorioWhatsApp();
    });

    function obterValorCampo($row, seletor) {
      var $elem = $row.find(seletor);
      if ($elem.length === 0) return '-';
      var val = $elem.val();
      return (val !== null && val !== undefined && val.trim() !== '') ? val.trim() : '-';
    }

    function gerarRelatorioWhatsApp() {
      var incidentesLaranja = [];
      var atividadesCinza = [];
      var normalizadosVerde = [];

      $('#incidentes tbody tr').each(function() {
        var $row = $(this);
        var $tdSitio = $row.find('td').eq(1);
        var isChecked = $row.find('input[type="checkbox"]').is(':checked');

        var item = {
          sitio: obterValorCampo($row, '.select-sitio, select[name="sitio"]'),
          tipo: obterValorCampo($row, '.select-tipo, select[name="tipo"]'),
          dataIni: obterValorCampo($row, 'input[name="data_inicio"], input[name="data_1"], .input-data:first'),
          horaIni: obterValorCampo($row, 'input[name="hora_inicio"], input[name="h_inicio"], .input-hora:first'),
          dataFim: obterValorCampo($row, 'input[name="data_fim"], input[name="data_2"], .input-data:last'),
          horaFim: obterValorCampo($row, 'input[name="hora_fim"], input[name="h_fim"], .input-hora:last'),
          falha: obterValorCampo($row, '.select-falha, select[name="falha"]'),
          opcom: obterValorCampo($row, '.select-opcom, select[name="opcom"]'),
          impacto: obterValorCampo($row, '.select-impacto, select[name="impacto"]'),
          parceiro: obterValorCampo($row, '.select-parceiro, select[name="parceiro"]'),
          ticket: obterValorCampo($row, 'input[name="ticket"], .input-ticket'),
          status: obterValorCampo($row, 'input[name="status"], .input-status')
        };

        if ($tdSitio.hasClass('sitio-laranja')) {
          incidentesLaranja.push(item);
        } else if ($tdSitio.hasClass('sitio-cinza')) {
          atividadesCinza.push(item);
        } else if ($tdSitio.hasClass('sitio-verde') && isChecked) {
          normalizadosVerde.push(item);
        }
      });

      var turno = $('#selectTurno').val() || 'Turno 1 (07h00 - 19h00)';
      var saindo = $('#selectAnalistaSaindo').val() || 'Francisco';
      var entrando = $('#selectAnalistaEntrando').val() || 'Rodrigo';

      var crOk = $('#checkCastleRock').is(':checked');
      var grOk = $('#checkGrafana').is(':checked');

      var castleRockIcon = crOk ? '<b style="color: #16a34a;">[✔️ CastleRock Validado]</b>' : '<b style="color: #dc2626;">[❌ CastleRock Pendente]</b>';
      var grafanaIcon = grOk ? '<b style="color: #16a34a;">[✔️ Grafana Validado]</b>' : '<b style="color: #dc2626;">[❌ Grafana Pendente]</b>';

      var pontoAtencaoTexto = $('#inputPontoAtencao').val() ? $('#inputPontoAtencao').val().trim() : 'Nenhum ponto de atenção crítico registrado para o turno.';

      var html = `
        <div style="font-family: Arial, sans-serif; font-size: 12px; color: #1e293b;">
          <h3 style="color: #1b0088; border-bottom: 2px solid #1b0088; padding-bottom: 4px; margin-top: 0;">Relatório de Passagem de Turno - Monitoração Brasil</h3>
          
          <!-- INFORMAÇÕES DE TURNO, ANALISTAS E FERRAMENTAS -->
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 8px; border-radius: 4px; margin-bottom: 12px; font-size: 11px;">
            <table style="width: 100%; font-size: 11px;">
              <tr>
                <td><b>Turno:</b> ${turno}</td>
                <td><b>Saindo:</b> ${saindo}</td>
                <td><b>Entrando:</b> ${entrando}</td>
              </tr>
              <tr>
                <td colspan="3" style="padding-top: 5px; border-top: 1px dashed #cbd5e1; margin-top: 5px;">
                  <b>Status das Ferramentas:</b> ${castleRockIcon} &nbsp;|&nbsp; ${grafanaIcon}
                </td>
              </tr>
            </table>
          </div>

          <h4 style="color: #c2410c; background-color: #ffedd5; padding: 6px; border-left: 4px solid #f97316; margin-bottom: 6px;">1 - Incidentes em Aberto</h4>
          ${gerarTabelaIncidentes(incidentesLaranja)}

          <h4 style="color: #374151; background-color: #f3f4f6; padding: 6px; border-left: 4px solid #6b7280; margin-bottom: 6px; margin-top: 15px;">2 - Atividades Programadas</h4>
          ${gerarTabelaAtividadesENormalizados(atividadesCinza)}

          <h4 style="color: #854d0e; background-color: #fef9c3; padding: 6px; border-left: 4px solid #eab308; margin-bottom: 6px; margin-top: 15px;">3 - Pontos de Atenção</h4>
          <div style="background-color: #fffbeb; border: 1px solid #fde68a; padding: 10px; border-radius: 4px; font-size: 12px; white-space: pre-line;">
            ${pontoAtencaoTexto}
          </div>

          <h4 style="color: #15803d; background-color: #dcfce7; padding: 6px; border-left: 4px solid #22c55e; margin-bottom: 6px; margin-top: 15px;">4 - Incidentes Normalizados</h4>
          ${gerarTabelaAtividadesENormalizados(normalizadosVerde)}
        </div>
      `;

      $('#emailCorpoContainer').html(html);
    }

    function gerarTabelaIncidentes(lista) {
      if (lista.length === 0) return `<p style="font-style: italic; color: #94a3b8; font-size: 11px; margin: 4px 0;">Nenhum incidente em aberto.</p>`;

      var htmlTable = `
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; font-size: 11px; font-family: Arial, sans-serif; border-color: #cbd5e1;">
          <thead>
            <tr style="background-color: #2563eb; color: #ffffff; text-align: center;">
              <th>Sítio</th>
              <th>Tipo</th>
              <th>Início</th>
              <th>Falha</th>
              <th>Opcom</th>
              <th>Impacto</th>
              <th>Parceiro</th>
              <th>Ticket</th>
              <th>Status / Observações</th>
            </tr>
          </thead>
          <tbody>
      `;

      lista.forEach(function(item) {
        var inicio = `${item.dataIni} ${item.horaIni}`.replace('- -', '-').trim();
        htmlTable += `
          <tr>
            <td style="text-align: center;"><b>${item.sitio}</b></td>
            <td style="text-align: center;">${item.tipo}</td>
            <td style="text-align: center;">${inicio}</td>
            <td style="text-align: center;">${item.falha}</td>
            <td style="text-align: center;">${item.opcom}</td>
            <td style="text-align: center;">${item.impacto}</td>
            <td style="text-align: center;">${item.parceiro}</td>
            <td style="text-align: center;"><b>${item.ticket}</b></td>
            <td>${item.status}</td>
          </tr>
        `;
      });

      return htmlTable + `</tbody></table>`;
    }

    function gerarTabelaAtividadesENormalizados(lista) {
      if (lista.length === 0) return `<p style="font-style: italic; color: #94a3b8; font-size: 11px; margin: 4px 0;">Nenhum registro nesta categoria.</p>`;

      var htmlTable = `
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; font-size: 11px; font-family: Arial, sans-serif; border-color: #cbd5e1;">
          <thead>
            <tr style="background-color: #475569; color: #ffffff; text-align: center;">
              <th>Sítio</th>
              <th>Tipo</th>
              <th>Início</th>
              <th>Fim</th>
              <th>Falha</th>
              <th>Impacto</th>
              <th>Parceiro</th>
              <th>Ticket</th>
              <th>Status / Observações</th>
            </tr>
          </thead>
          <tbody>
      `;

      lista.forEach(function(item) {
        var inicio = `${item.dataIni} ${item.horaIni}`.replace('- -', '-').trim();
        var fim = `${item.dataFim} ${item.horaFim}`.replace('- -', '-').trim();

        htmlTable += `
          <tr>
            <td style="text-align: center;"><b>${item.sitio}</b></td>
            <td style="text-align: center;">${item.tipo}</td>
            <td style="text-align: center;">${inicio}</td>
            <td style="text-align: center;">${fim}</td>
            <td style="text-align: center;">${item.falha}</td>
            <td style="text-align: center;">${item.impacto}</td>
            <td style="text-align: center;">${item.parceiro}</td>
            <td style="text-align: center;"><b>${item.ticket}</b></td>
            <td>${item.status}</td>
          </tr>
        `;
      });

      return htmlTable + `</tbody></table>`;
    }

    $(document).on('click', '#btnCopiarImagemWhatsApp', function() {
      var $btn = $(this);
      var textoOriginal = $btn.html();
      
      var hoje = new Date();
      var dataFormatada = hoje.toLocaleDateString('pt-BR');

      if ($('#dataRelatorioHeader').length === 0) {
        $('#emailCorpoContainer').prepend(
          '<div id="dataRelatorioHeader" class="text-end text-muted fw-bold mb-2" style="font-size: 13px;">' +
            '<i class="far fa-calendar-alt me-1"></i> Data: ' + dataFormatada +
          '</div>'
        );
      } else {
        $('#dataRelatorioHeader').html('<i class="far fa-calendar-alt me-1"></i> Data: ' + dataFormatada);
      }

      $btn.html('<i class="fas fa-spinner fa-spin me-1"></i> Gerando Imagem...').prop('disabled', true);

      var element = document.getElementById('emailCorpoContainer');

      html2canvas(element, { 
        scale: 2,
        backgroundColor: "#ffffff"
      }).then(function(canvas) {
        canvas.toBlob(function(blob) {
          if (navigator.clipboard && window.ClipboardItem) {
            var item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]).then(function() {
              alert("Imagem de Troca de Turno copiada com sucesso! Vá ao WhatsApp e pressione Ctrl+V.");
            }).catch(function(err) {
              console.error("Erro ao copiar imagem: ", err);
              alert("Não foi possível copiar a imagem automaticamente. Utilize a opção de Baixar PDF.");
            }).finally(function() {
              $btn.html(textoOriginal).prop('disabled', false);
            });
          } else {
            alert("Seu navegador não suporta a cópia direta de imagens. Tente utilizar o recurso via PDF.");
            $btn.html(textoOriginal).prop('disabled', false);
          }
        }, 'image/png');
      }).catch(function(err) {
        console.error("Erro no html2canvas: ", err);
        alert("Houve um problema ao renderizar a imagem.");
        $btn.html(textoOriginal).prop('disabled', false);
      });
    });

    $(document).on('click', '#btnGerarPDFWhatsApp', function() {
      var element = document.getElementById('emailCorpoContainer');
      var { jsPDF } = window.jspdf;

      html2canvas(element, { scale: 2 }).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jsPDF('p', 'mm', 'a4');
        
        var imgWidth = 190;
        var pageHeight = 295;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;
        var position = 10;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('Relatorio_Passagem_Turno.pdf');
      });
    });

    $(document).on('click', '#btnProcessos, #btnPlantao, #btnFerramentas, #btnEstrutura', function(e) {
      e.preventDefault();

      var nomeModulo = $(this).text().trim();

      $('#modalEmDesenvolvimento').remove();
      $('.modal-backdrop').remove();

      var htmlModal = `
        <div class="modal fade" id="modalEmDesenvolvimento" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header bg-dark text-white py-2">
                <h5 class="modal-title fs-6">${nomeModulo}</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-4 text-center">
                <i class="fas fa-tools text-warning mb-3" style="font-size: 2rem;"></i>
                <h5 class="text-muted fw-bold mb-0">Bloco em desenvolvimento</h5>
              </div>
              <div class="modal-footer py-2 justify-content-end">
                <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>
      `;

      $('body').append(htmlModal);

      var $modalEl = $('#modalEmDesenvolvimento');
      var modalInstance = new bootstrap.Modal($modalEl[0]);

      $modalEl.on('hidden.bs.modal', function () {
        $modalEl.remove();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open').css('overflow', 'auto');
      });

      modalInstance.show();
    });