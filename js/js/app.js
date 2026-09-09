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
    });
