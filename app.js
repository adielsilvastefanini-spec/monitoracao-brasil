/* ==========================================================================
   APP.JS - SISTEMA DE MONITORIA E PASSAGEM DE TURNO
   Padrão: Local-First (Renderização Instantânea + Sincronização Silenciosa)
   ========================================================================== */

/* ==========================================================================
   APP.JS - SISTEMA DE MONITORIA E PASSAGEM DE TURNO
   Padrão: Local-First (Renderização Instantânea + Sincronização Silenciosa)
   ========================================================================== */

/* --------------------------------------------------------------------------
   00. DADOS PADRÃO DE BACKUP (SEUS DADOS REAIS TRATADOS)
   -------------------------------------------------------------------------- */
var dadosSitiosPadrao = {
  "AJU": {
    "ATO": ["AENA", "CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "BEL": {
    "ATO": ["SOCICAM", "CIRION BRASIL", "EMBRATEL", "OI"],
    "MNT": ["SOCICAM", "LATAM BRASIL", "VIVO", "CIRION BRASIL", "OI"]
  },
  "BHZ": {
    "Contact Center": ["OI", "AeC", "TELEFONICA BRASIL", "CIRION BRASIL"]
  },
  "BNU": {
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "BPS": {
    "ATO": ["SOCICAM", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "OI"],
    "MNT": ["SOCICAM", "CLARO", "CIRION BRASIL", "OI"]
  },
  "BSB": {
    "ATO": ["INFRAMERICA", "CIRION BRASIL", "EMBRATEL", "OI", "SITA"],
    "Loja": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "BVB": {
    "ATO": ["VINCI", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "OI"]
  },
  "BYO": {
    "ATO": ["GOVERNO", "CLARO", "CIRION BRASIL"]
  },
  "CAC": {
    "ATO": ["TRANSITAR", "VIVO", "CIRION BRASIL", "OI"]
  },
  "CGB": {
    "ATO": ["SOCICAM", "CIRION BRASIL", "OI", "EMBRATEL"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"],
    "MNT": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "CGH": {
    "ATO": ["AENA", "TELEFONICA BRASIL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "OI", "EMBRATEL"]
  },
  "CGR": {
    "ATO": ["AENA", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "CLV": {
    "ATO": ["SOCICAM", "CIRION BRASIL", "OI"]
  },
  "CNF": {
    "ATO": ["BH AIRPORTS", "CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "CPV": {
    "ATO": ["AENA", "VIVO", "CIRION BRASIL"]
  },
  "CWB": {
    "ATO": ["CCR", "CIRION BRASIL", "OI", "EMBRATEL"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"],
    "Volvo": ["VIVO", "CIRION BRASIL", "OI"]
  },
  "CXJ": {
    "ATO": ["PREFEITURA", "CLARO", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "DOU": {
    "ATO": ["INFRAERO", "CLARO", "CIRION BRASIL"]
  },
  "FEN": {
    "ATO": ["DIX", "CLARO", "CIRION BRASIL", "LATAM"]
  },
  "FLN": {
    "ATO": ["ZURICH", "CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "FOR": {
    "ATO": ["FRAPORT", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM"],
    "DOM EXP": ["VIVO", "CIRION BRASIL", "OI"],
    "DOM IMP": ["CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "GIG": {
    "ATO": ["RIOGALEÃO", "CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "GRU": {
    "ATO": ["GRUAIRPORT", "LATAM", "SITA", "TELEFONICA BRASIL", "OI"],
    "CML": ["LATAM", "TELEFONICA BRASIL", "OI"]
  },
  "GYN": {
    "ATO": ["CCR", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Mega": ["VIVO", "CIRION BRASIL", "OI"]
  },
  "IGU": {
    "ATO": ["CCR", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "OI"]
  },
  "IMP": {
    "ATO": ["CCR", "VIVO", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"],
    "MNT": ["CCR", "VIVO", "CIRION BRASIL", "OI"]
  },
  "IOS": {
    "ATO": ["SOCICAM", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"],
    "MNT": ["SOCICAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "IZA": {
    "ATO": ["LATAM", "CIRION", "CLARO"]
  },
  "JDO": {
    "ATO": ["AENA", "CLARO", "CIRION BRASIL", "OI"]
  },
  "JJD": {
    "ATO": ["INFRAERO", "VIVO", "CIRION BRASIL"]
  },
  "JJG": {
    "ATO": ["RDL", "VIVO", "CIRION BRASIL", "OI"]
  },
  "JOI": {
    "ATO": ["CCR"],
    "ATO/Teca": ["CLARO", "CIRION BRASIL", "OI"]
  },
  "JPA": {
    "ATO": ["AENA", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "LDB": {
    "ATO": ["CCR", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "MAB": {
    "ATO": ["AENA"],
    "MNT": ["LATAM", "VIVO", "CIRION BRASIL", "OI"],
    "ATO/Teca": ["VIVO", "CIRION BRASIL", "OI"]
  },
  "MAO": {
    "ATO": ["VINCI", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "MCP": {
    "ATO": ["SOCICAM", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"],
    "MNT": ["SOCICAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "MCZ": {
    "ATO": ["AENA", "CIRION BRASIL", "OI", "EMBRATEL"],
    "Teca": ["LATAM", "CIRION BRASIL", "OI", "EMBRATEL"]
  },
  "MGF": {
    "ATO": ["SBMG S/A"],
    "ATO/Teca": ["VIVO", "CIRION BRASIL", "OI"]
  },
  "MOC": {
    "ATO": ["AENA", "TIM", "CIRION BRASIL", "OI"]
  },
  "NAT": {
    "ATO": ["ZURICH"],
    "ATO/Teca": ["CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "NVT": {
    "ATO": ["CCR", "CIRION BRASIL", "OI", "EMBRATEL"],
    "Teca": ["LATAM", "CIRION BRASIL", "OI", "EMBRATEL"]
  },
  "OPS": {
    "ATO": ["SOCICAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "PET": {
    "ATO": ["CCR", "CLARO", "CIRION BRASIL", "OI"]
  },
  "PFB": {
    "ATO": ["INFRAERO", "CLARO", "CIRION BRASIL", "OI"]
  },
  "PHB": {
    "ATO": ["SBPB", "VIVO", "CIRION BRASIL"]
  },
  "PLU": {
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "PMW": {
    "ATO": ["CCR"],
    "P.A Teca": ["LATAM"],
    "ATO/Teca": ["CLARO", "CIRION BRASIL", "OI"],
    "Kenerson": ["VIVO", "CIRION BRASIL", "OI"]
  },
  "PNZ": {
    "ATO": ["CCR", "CLARO", "CIRION BRASIL", "OI"]
  },
  "POA": {
    "ATO": ["LATAM", "FRAPORT", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "FRAPORT", "VIVO", "CIRION BRASIL", "TIM"],
    "MNT": ["LATAM", "FRAPORT", "CIRION BRASIL", "OI"]
  },
  "POP": {
    "TELEFONICA BRASIL": ["TELEFÔNICA", "OI", "LATAM BRASIL", "CIRION"],
    "CIRION BRASIL": ["CIRION", "LATAM BRASIL", "TELEFÔNICA", "OI"]
  },
  "PVH": {
    "ATO": ["VINCI", "VIVO", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "QSB": {
    "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "QSC": {
    "MNT": ["LATAM"],
    "Lonado": ["CIRION BRASIL", "VIVO"],
    "MRO": ["TELEFONICA BRASIL"],
    "Museu": ["VIVO", "LATAM BRASIL", "CIRION BRASIL"]
  },
  "RAO": {
    "ATO": ["VOA", "VIVO", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "RBR": {
    "ATO": ["VINCI", "CLARO", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "REC": {
    "ATO": ["AENA", "CIRION BRASIL", "OI", "EMBRATEL"],
    "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "SAO": {
    "ACADEMIA ÁTICA": ["LATAM", "TELEFONICA BRASIL", "OI"],
    "HANGAR 2": ["LATAM", "TELEFONICA BRASIL", "OI"],
    "EZ TOWER": ["LATAM", "OI", "CIRION", "EMBRATEL"],
    "DHL": ["VIVO", "CIRION BRASIL", "OI"],
    "Contact Center": ["TELEFONICA BRASIL", "CIRION"],
    "OSASCO": ["OI", "KONECTA", "TELEFONICA BRASIL", "CIRION BRASIL"]
  },
  "SDU": {
    "ATO": ["INFRAERO", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "OI"]
  },
  "SJK": {
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "SJP": {
    "ATO": ["ASP", "VIVO", "CIRION BRASIL", "OI"],
    "Teca": ["ASP", "VIVO", "CIRION BRASIL", "OI"]
  },
  "SLZ": {
    "ATO": ["CCR", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "SSA": {
    "ATO": ["VINCI", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Contact Center": ["CIRION BRASIL", "OI", "TELEFONICA BRASIL", "KONECTA"]
  },
  "STM": {
    "ATO": ["AENA", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"],
    "MNT": ["AENA", "VIVO", "CIRION BRASIL", "OI"]
  },
  "THE": {
    "ATO": ["CCR"],
    "ATO/Teca": ["CIRION BRASIL", "EMBRATEL", "OI"]
  },
  "UBA": {
    "ATO": ["AENA", "VIVO", "CIRION BRASIL"]
  },
  "UDI": {
    "ATO": ["AENA", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "OI"]
  },
  "UNA": {
    "ATO": ["SOCICAM", "CLARO", "CIRION BRASIL", "OI"]
  },
  "VCP": {
    "ABSA": ["LATAM", "CIRION BRASIL", "EMBRATEL"],
    "ATO": ["VIRACOPOS", "TIM", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "CIRION BRASIL", "EMBRATEL"]
  },
  "VDC": {
    "ATO": ["SOCICAM", "CLARO", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "CLARO", "CIRION BRASIL", "OI"]
  },
  "VIX": {
    "ATO": ["ZURICH", "CIRION BRASIL", "EMBRATEL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  },
  "XAP": {
    "ATO": ["SOCICAM", "CIRION BRASIL", "OI"],
    "Teca": ["LATAM", "VIVO", "CIRION BRASIL", "OI"]
  }
};
// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC2nYXXvsZJq54tatPVVDTyecGP8VgUR3w",
  authDomain: "passagem-de-turno-6eea4.firebaseapp.com",
  databaseURL: "https://passagem-de-turno-6eea4-default-rtdb.firebaseio.com",
  projectId: "passagem-de-turno-6eea4",
  storageBucket: "passagem-de-turno-6eea4.firebasestorage.app",
  messagingSenderId: "399308087796",
  appId: "1:399308087796:web:18afe529724399c2e059a1",
  measurementId: "G-BM3ZY4GRXW"
};

// Inicializa o Firebase e o Banco em Nuvem
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

var dadosEscalonamentoPadrao = {
  "CIRION": {
    "empresa": "CIRION",
    "niveis": [
      { "atendimento": "24h", "cargo": "Central de Serviços", "email": "https://portal.ciriontechnologies.com/", "gestor": "Chamado", "nivel": "0", "telefone": "0800 887 3333 / (11) 3957-2288" },
      { "atendimento": "24h", "cargo": "Central de Serviços", "email": "-", "gestor": "Chamado", "nivel": "1", "telefone": "11 3957-2005 / 11 3957-2415" },
      { "atendimento": "24h", "cargo": "Mesa de Ajuda", "email": "ms.scalation.tier2@ciriontechnologies.com", "gestor": "-", "nivel": "1", "telefone": "(11) 3958-0051" },
      { "atendimento": "24h", "cargo": "Suporte Dedicado", "email": "cristóbal.gonzalez.ext@ciriontechnologies.com", "gestor": "Cristóbal Gonzalez", "nivel": "1", "telefone": "56 2 2422 5941" },
      { "atendimento": "24h", "cargo": "Suporte Dedicado", "email": "samuel.parraguez.ext@ciriontechnologies.com", "gestor": "Samuel Parraguez", "nivel": "1", "telefone": "57 2 2422 5914" },
      { "atendimento": "90min - 4h", "cargo": "Supervisor", "email": "ms.escalation@ciriontechnologies.com", "gestor": "-", "nivel": "2", "telefone": "(11) 3957-2299" },
      { "atendimento": "8h as 17h", "cargo": "Supervisor", "celular": "(11) 99649-9685", "email": "Evandro.oliveira@ciriontechnologies.com", "gestor": "Evandro Oliveira", "nivel": "2", "telefone": "-" },
      { "atendimento": "14h as 23h", "cargo": "Supervisor", "celular": "(11) 99633-6619", "email": "Rafael.deandrade@ciriontechnologies.com", "gestor": "Rafael Rangel", "nivel": "2", "telefone": "-" },
      { "atendimento": "23h as 8h", "cargo": "Supervisor", "email": "dl-nm-brasil@ciriontechnologies.com", "gestor": "Tech Lead", "nivel": "2", "telefone": "-" },
      { "atendimento": "2h a 8h", "cargo": "Coordenador", "celular": "(11) 97133-3863", "email": "eduardo.silva@ciriontechnologies.com", "gestor": "Eduardo Silva", "nivel": "3", "telefone": "(11) 3957-2243" },
      { "atendimento": "4h a 12h", "cargo": "Manager", "celular": "(11) 97124-7730", "email": "pamela.spadrezani@ciriontechnologies.com", "gestor": "Pâmela Spadrezani", "nivel": "4", "telefone": "(11) 3957-2243" },
      { "atendimento": "8h a 18h", "cargo": "Executive Manager", "celular": "57 300 8359-695", "email": "juan.quitian@ciriontechnologies.com", "gestor": "Juan Quitian", "nivel": "5", "telefone": "52 55 8897-3814" },
      { "atendimento": "12h a 24h", "cargo": "Diretor", "celular": "(11) 93351-6699", "email": "claudia.secco@ciriontechnologies.com", "gestor": "Claudia Secco", "nivel": "6", "telefone": "(11) 3957-2213" }
    ]
  },
  "EBT": {
    "empresa": "EBT",
    "niveis": [
      { "atendimento": "24h", "cargo": "Portal", "email": "https://embratel.com.br/embratelonline/", "gestor": "Chamado", "nivel": "0", "telefone": "0800 721 1021" },
      { "atendimento": "24h", "cargo": "CRN", "email": "caspo@embratel.com.br / CHAMADO@claroatendimento.com.br", "gestor": "Chamado", "nivel": "Plantão", "telefone": "(11) 2121-2880" },
      { "atendimento": "08h ás 17h", "cargo": "Analista", "celular": "(11) 98949-6265", "email": "jeferson.santana@claro.com.br", "gestor": "Jefferson Tadeu", "nivel": "1", "telefone": "(11) 2121-2898" },
      { "atendimento": "06h ás 20h", "cargo": "Gestor Técnico", "celular": "(11) 99202-8125", "email": "adriano.nascimento@claro.com.br", "gestor": "Adriano Nascimento", "nivel": "2", "telefone": "(11) 2121-7146" },
      { "atendimento": "-", "cargo": "Ger. Operacional", "celular": "(11) 99259-6352", "email": "jose.nevessilva@claro.com.br", "gestor": "José E. Neves Silva", "nivel": "3", "telefone": "(11) 2121-2134" }
    ]
  },
  "OI": {
    "empresa": "OI",
    "niveis": [
      { "atendimento": "24h", "cargo": "Portal", "email": "https://portaloisolucoes.oi.com.br/login", "gestor": "Chamado", "nivel": "Plantão", "telefone": "0800 031 8031 / 0800-282-1231" },
      { "atendimento": "24h", "cargo": "Gestor Técnico", "email": "-", "gestor": "-", "nivel": "1", "telefone": "-" },
      { "atendimento": "24h", "cargo": "Sup.Técnico", "celular": "(11) 98050-0277", "email": "helbert.santos@oi.net.br", "gestor": "Helbert V D Santos", "nivel": "2", "telefone": "-" },
      { "atendimento": "24h", "cargo": "Ger. Operações", "celular": "(11) 96953-7738", "email": "danilo.mendes@oi.net.br", "gestor": "Danilo M Oliveira", "nivel": "3", "telefone": "-" },
      { "atendimento": "24h", "cargo": "Diretor. Nac. Operações", "celular": "(11) 98050-0075", "email": "helio.magatti@oi.net.br", "gestor": "Helio Magatti", "nivel": "4", "telefone": "-" }
    ]
  },
  "SITA": {
    "empresa": "SITA",
    "niveis": [
      { "atendimento": "24h", "cargo": "Service Desk", "email": "network.support@sita.aero", "gestor": "Network Support", "nivel": "1", "telefone": "0800 881 0040" },
      { "atendimento": "24h", "cargo": "Supervisor", "email": "sjo.supervisor@sita.aero", "gestor": "Service Desk", "nivel": "2", "telefone": "1 514 282 2838" },
      { "atendimento": "24h", "cargo": "TCSS", "celular": "(21) 96722-0546", "email": "wendel.arcosy@sita.aero", "gestor": "Wendel Arcosy", "nivel": "3", "telefone": "(11) 5538-4821" },
      { "atendimento": "24h", "cargo": "TCSS", "email": "marco.rodrigues@sita.aero", "gestor": "Marcos Rodrigues", "nivel": "3", "telefone": "-" },
      { "atendimento": "8x5", "cargo": "CSM", "celular": "(11) 99547-4838", "email": "sirley.mendes@sita.aero", "gestor": "Sirley Mendes", "nivel": "4", "telefone": "-" },
      { "atendimento": "8x5", "cargo": "AC", "celular": "(56) 98768-0941", "email": "miguel.saraiva@sita.aero", "gestor": "Miguel Saraiva", "nivel": "5", "telefone": "-" },
      { "atendimento": "-", "cargo": "ROD", "celular": "(11) 95697-7477", "email": "rackel.valadares@sita.aero", "gestor": "Rackel Valadares", "nivel": "6", "telefone": "-" }
    ]
  },
  "VIVO": {
    "empresa": "VIVO",
    "niveis": [
      { "atendimento": "24h", "cargo": "Dados e Voz", "email": "relacionamentoempresas.br@vivo.com.br", "gestor": "Chamado", "nivel": "0", "telefone": "0800 015 1551" },
      { "atendimento": "24h", "cargo": "GI", "email": "plantaoempresas@vivo.com.br (Após 18h e fds)", "gestor": "Chamado", "nivel": "0", "telefone": "0800 0112499" },
      { "atendimento": "24h", "cargo": "Gestor Técnico", "celular": "(11) 97504-1171", "email": "ana.gilio@telefonica.com", "gestor": "Ana Paula Gilio", "nivel": "1", "telefone": "-" },
      { "atendimento": "24h", "cargo": "Gerente CS", "celular": "(11) 99934-1065", "email": "daniela.reboreda@telefonica.com", "gestor": "Daniela Reboreda", "nivel": "2", "telefone": "-" },
      { "atendimento": "24h", "cargo": "Gerente SE CS", "celular": "(11) 99551-6968", "email": "douglas.santana@telefonica.com", "gestor": "Douglas Santana", "nivel": "3", "telefone": "-" }
    ]
  }
};

// Carregamento síncrono inicial do Cache Local ou Fallback
var dadosSitios = JSON.parse(localStorage.getItem('dadosSitios')) || dadosSitiosPadrao;
var dadosEscalonamento = JSON.parse(localStorage.getItem('escalonamento_local')) || dadosEscalonamentoPadrao;
var timerSalvarInput = null;
/* --------------------------------------------------------------------------
   01. INICIALIZAÇÃO DA APLICAÇÃO (LOCAL-FIRST)
   -------------------------------------------------------------------------- */
$(document).ready(function() {
  
  // STEP 1: Monta a interface imediatamente sem esperar por rede ou Firebase
  fn_inicializarInterfaceLocal();

  // STEP 2: Tenta sincronizar com o Firebase de forma assíncrona em segundo plano
  setTimeout(fn_sincronizarFirebaseBackground, 150);

  // STEP 3: Configura escutas de eventos no DOM
  fn_configurarEventosDOM();
});

function fn_ordenarIncidentes(lista) {
  return lista.sort(function(a, b) {
    var statusA = (a.status || '').toLowerCase().trim();
    var statusB = (b.status || '').toLowerCase().trim();
    
    var dataFimA = (a.data2 || '').trim();
    var dataFimB = (b.data2 || '').trim();

    // Considera normalizado/fechado se tiver Data Fim preenchida OU status correspondente
    var ehNormalizadoA = dataFimA !== '' || statusA.includes('norma') || statusA.includes('fech') || statusA.includes('ok');
    var ehNormalizadoB = dataFimB !== '' || statusB.includes('norma') || statusB.includes('fech') || statusB.includes('ok');

    if (ehNormalizadoA && !ehNormalizadoB) return 1;  // Joga A (normalizado) para baixo
    if (!ehNormalizadoA && ehNormalizadoB) return -1; // Mantém B em cima (pendente)
    return 0;
  });
}

function fn_inicializarInterfaceLocal() {
  fn09_atualizarDropdownsExistentes();
  if (typeof dadosEscalonamento !== 'undefined') {
    fn12_renderizarTabelaEscalonamento(dadosEscalonamento);
  }

  // Ouve o nó "passagens" em tempo real
  db.ref('passagens').on('value', function(snapshot) {
    // Evita recriar a tabela se o operador estiver digitando em algum campo
    if ($(document.activeElement).is('input, select')) {
      return;
    }

    var incidentesSalvos = snapshot.val() || [];
    var $tbody = $('#incidentes tbody');
    $tbody.empty();

    // Converte objeto ou array vindo do Firebase
    var lista = [];
    if (Array.isArray(incidentesSalvos)) {
      lista = incidentesSalvos;
    } else if (typeof incidentesSalvos === 'object') {
      lista = Object.values(incidentesSalvos);
    }

    if (lista.length > 0) {
      lista.forEach(function(item) {
        if (!item) return;
        var $tr = fn08_criarLinhaTabela(item.id || Date.now().toString());

        $tr.find('.select-sitio').val(item.sitio || '');
        fn04_carregarTiposPorSitio($tr, item.sitio);

        $tr.find('.select-tipo').val(item.tipo || '');
        fn05_carregarParceirosPorTipo($tr, item.sitio, item.tipo);

        $tr.find('.input-data1').val(item.data1 || '');
        $tr.find('.input-hora1').val(item.hora1 || '');
        $tr.find('.input-data2').val(item.data2 || '');
        $tr.find('.input-hora2').val(item.hora2 || '');
        $tr.find('.select-falha').val(item.falha || '');
        $tr.find('.select-opcom').val(item.opcom || '');
        $tr.find('.select-impacto').val(item.impacto || '');
        $tr.find('.select-parceiro').val(item.parceiro || '');
        $tr.find('.select-causa').val(item.causa || '');
        $tr.find('.input-ticket').val(item.ticket || '');
        $tr.find('.input-status').val(item.status || '');

        // Aplica as regras visuais na linha (ex: aplica classe verde caso normalizado)
        fn03_avaliarStatusLinha($tr);
      });

      // ORDENAÇÃO NO DOM: Move visualmente as linhas verdes/normalizadas para o final
      $tbody.find('tr').sort(function(a, b) {
        var $a = $(a);
        var $b = $(b);

        var dataFimA = ($a.find('.input-data2').val() || '').trim();
        var dataFimB = ($b.find('.input-data2').val() || '').trim();
        
        var statusA = ($a.find('.input-status').val() || '').toLowerCase();
        var statusB = ($b.find('.input-status').val() || '').toLowerCase();

        // Checa se a linha tem a classe de sucesso ou data de término preenchida
        var ehNormalizadoA = dataFimA !== '' || statusA.includes('norma') || $a.hasClass('table-success') || $a.find('.select-sitio').hasClass('bg-success');
        var ehNormalizadoB = dataFimB !== '' || statusB.includes('norma') || $b.hasClass('table-success') || $b.find('.select-sitio').hasClass('bg-success');

        if (ehNormalizadoA && !ehNormalizadoB) return 1;
        if (!ehNormalizadoA && ehNormalizadoB) return -1;
        return 0;
      }).appendTo($tbody);

    } else {
      fn08_criarLinhaTabela(Date.now().toString());
    }
  });

  if (typeof fn_carregarEscalaPlantao === 'function') fn_carregarEscalaPlantao();
  if (typeof fn_carregarLinksProcessos === 'function') fn_carregarLinksProcessos();
}

/* --------------------------------------------------------------------------
   02. SINCRONIZAÇÃO SILENCIOSA EM SEGUNDO PLANO
   -------------------------------------------------------------------------- */
function fn_sincronizarFirebaseBackground() {
  // Verifica existência do Firebase sem interromper a execução do script
  if (typeof firebase === 'undefined' || typeof database === 'undefined') {
    return;
  }

  // Sincronizar Sítios
  try {
    database.ref('config/dadosSitios').once('value').then(function(snapshot) {
      if (snapshot.exists()) {
        dadosSitios = snapshot.val();
        localStorage.setItem('dadosSitios', JSON.stringify(dadosSitios));
        fn09_atualizarDropdownsExistentes();
      }
    }).catch(function() {
      console.warn("Modo Offline: Usando sítios do cache local.");
    });
  } catch (e) {
    console.warn("Firebase indisponível para sítios.");
  }

  // Sincronizar Escalonamento
  try {
    database.ref('escalonamento').once('value').then(function(snapshot) {
      if (snapshot.exists()) {
        dadosEscalonamento = snapshot.val();
        localStorage.setItem('escalonamento_local', JSON.stringify(dadosEscalonamento));
        fn12_renderizarTabelaEscalonamento(dadosEscalonamento);
      }
    }).catch(function() {
      console.warn("Modo Offline: Usando escalonamento do cache local.");
    });
  } catch (e) {
    console.warn("Firebase indisponível para escalonamento.");
  }
}

/* --------------------------------------------------------------------------
   03. RENDERIZAÇÃO E REGRAS DE NEGÓCIO DA TABELA DE INCIDENTES
   -------------------------------------------------------------------------- */
function fn01_getOptionsSitio() {
  var options = '<option value="">Selecione...</option>';
  Object.keys(dadosSitios).sort().forEach(function(codigo) {
    options += `<option value="${codigo}">${codigo}</option>`;
  });
  return options;
}

function fn08_criarLinhaTabela(id) {
  var $tbody = $('#incidentes tbody');
  var trHTML = `
    <tr data-id="${id}">
      <td class="text-center align-middle"><input type="checkbox" class="check-item"></td>
      <td class="col-sitio align-middle">
        <select class="form-select form-select-sm select-sitio">${fn01_getOptionsSitio()}</select>
      </td>
      <td class="align-middle">
        <select class="form-select form-select-sm select-tipo"><option value="">Selecione...</option></select>
      </td>
      <td class="align-middle"><input type="date" class="form-control form-control-sm input-data1"></td>
      <td class="align-middle"><input type="time" class="form-control form-control-sm input-hora1"></td>
      <td class="align-middle"><input type="date" class="form-control form-control-sm input-data2"></td>
      <td class="align-middle"><input type="time" class="form-control form-control-sm input-hora2"></td>
      <td class="align-middle">
        <select class="form-select form-select-sm select-falha">
          <option value="">Selecione...</option>
          <option value="ISOLADO">Isolado</option>
          <option value="PRIMÁRIO">Primário</option>
          <option value="SECUNDÁRIO">Secundário</option>
          <option value="TELEFONIA">Telefonia</option>
          <option value="SETORES">Setores</option>
          <option value="REDE INTERNA">Rede Interna</option>
        </select>
      </td>
      <td class="align-middle">
        <select class="form-select form-select-sm select-opcom">
          <option value="">Selecione...</option>
          <option value="N/A">N/A</option>
          <option value="OP-1">OP-1</option>
          <option value="OP-2">OP-2</option>
          <option value="OP-3">OP-3</option>
        </select>
      </td>
      <td class="align-middle">
        <select class="form-select form-select-sm select-impacto">
          <option value="">Selecione...</option>
          <option value="N/A">N/A</option>
          <option value="SIM">Sim</option>
          <option value="NÃO">Não</option>
        </select>
      </td>
      <td class="align-middle">
        <select class="form-select form-select-sm select-parceiro"><option value="">Selecione...</option></select>
      </td>
      <td class="align-middle">
        <select class="form-select form-select-sm select-causa">
          <option value="">Selecione...</option>
          <option value="PENDENTE">Pendente</option>
          <option value="ENERGIA">Energia</option>
          <option value="ROMPIMENTO DE FIBRA">Rompimento de Fibra</option>
          <option value="INTERMITÊNCIA">Intermitência</option>
          <option value="ATIVIDADE">Atividade</option>
          <option value="COMUTADO ROTA">Comutado Rota</option>
          <option value="MASSIVA">Massiva</option>
          <option value="CONFIGURAÇÃO">Configuração</option>
          <option value="ESTAÇÃO DA OPERADORA">Estação da Operadora</option>
          <option value="BACK BONE">Back Bone</option>
        </select>
      </td>
      <td class="align-middle"><input type="text" class="form-control form-control-sm input-ticket" placeholder="Ticket/Chamado"></td>
      <td class="align-middle"><input type="text" class="form-control form-control-sm input-status" placeholder="Observações/Status"></td>
    </tr>
  `;

  var $tr = $(trHTML);
  $tbody.append($tr);
  return $tr;
}

function fn02_reordenarTabela() {
  var $tbody = $('#incidentes tbody');
  var $linhas = $tbody.find('tr').get();

  $linhas.sort(function(a, b) {
    var $tdA = $(a).find('td.col-sitio');
    var $tdB = $(b).find('td.col-sitio');

    var getPrioridade = function($td) {
      if ($td.hasClass('sitio-laranja')) return 1;
      if ($td.hasClass('sitio-cinza')) return 2;
      if ($td.hasClass('sitio-verde')) return 3;
      return 4;
    };

    var pA = getPrioridade($tdA);
    var pB = getPrioridade($tdB);

    if (pA !== pB) return pA - pB;

    var dataA = $(a).find('.input-data1').val() + ' ' + $(a).find('.input-hora1').val();
    var dataB = $(b).find('.input-data1').val() + ' ' + $(b).find('.input-hora1').val();
    return dataB.localeCompare(dataA);
  });

  $.each($linhas, function(index, row) {
    $tbody.append(row);
  });
}

function fn03_avaliarStatusLinha($tr) {
  var data1 = $tr.find('.input-data1').val();
  var hora1 = $tr.find('.input-hora1').val();
  var data2 = $tr.find('.input-data2').val();
  var hora2 = $tr.find('.input-hora2').val();
  var causa = $tr.find('.select-causa').val();

  var $tdSitio = $tr.find('td.col-sitio');
  $tdSitio.removeClass('sitio-laranja sitio-cinza sitio-verde');

  // Se tiver data e hora de término preenchidas, fica verde (normalizado/concluído)
  if (data1 && hora1 && data2 && hora2) {
    $tdSitio.addClass('sitio-verde');
    return;
  }

  // Se a Causa for ATIVIDADE, fica cinza
  if (causa === 'ATIVIDADE') {
    $tdSitio.addClass('sitio-cinza');
    return;
  }

  // Regra padrão para incidentes com data/hora de início
  if (data1 && hora1) {
    var inicio = new Date(`${data1}T${hora1}:00`);
    var agora = new Date();

    if (inicio > agora) {
      $tdSitio.addClass('sitio-cinza');
    } else {
      $tdSitio.addClass('sitio-laranja');
    }
  }
}

function fn04_carregarTiposPorSitio($tr, codigoSitio) {
  var $selectTipo = $tr.find('.select-tipo');
  $selectTipo.empty().append('<option value="">Selecione...</option>');

  if (codigoSitio && dadosSitios[codigoSitio]) {
    Object.keys(dadosSitios[codigoSitio]).forEach(function(tipo) {
      $selectTipo.append(`<option value="${tipo}">${tipo}</option>`);
    });
  }
}

function fn05_carregarParceirosPorTipo($tr, codigoSitio, tipo) {
  var $selectParceiro = $tr.find('.select-parceiro');
  $selectParceiro.empty().append('<option value="">Selecione...</option>');

  if (codigoSitio && tipo && dadosSitios[codigoSitio] && dadosSitios[codigoSitio][tipo]) {
    dadosSitios[codigoSitio][tipo].forEach(function(parceiro) {
      $selectParceiro.append(`<option value="${parceiro}">${parceiro}</option>`);
    });
  }
}

function fn09_atualizarDropdownsExistentes() {
  $('#incidentes tbody tr').each(function() {
    var $tr = $(this);
    var $selectSitio = $tr.find('.select-sitio');
    var valorAtual = $selectSitio.val();

    $selectSitio.html(fn01_getOptionsSitio());
    if (valorAtual) $selectSitio.val(valorAtual);
  });
}

function fn06_salvarDadosStorage() {
  var incidentes = [];
  $('#incidentes tbody tr').each(function() {
    var $tr = $(this);
    var id = $tr.attr('data-id');
    if (!id) return;

    incidentes.push({
      id: id,
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
    });
  });

  // Salva diretamente na nó "passagens" do seu Firebase
  db.ref('passagens').set(incidentes);
}

function fn10_removerTipoSitio(codigo, tipo) {
  if (dadosSitios[codigo] && dadosSitios[codigo][tipo]) {
    delete dadosSitios[codigo][tipo];

    try {
      if (typeof database !== 'undefined') {
        database.ref('config/dadosSitios/' + codigo + '/' + tipo).remove();
      }
    } catch(e) {}

    localStorage.setItem('dadosSitios', JSON.stringify(dadosSitios));
    fn09_atualizarDropdownsExistentes();
    alert(`Tipo ${tipo} removido do sítio ${codigo}.`);
  }
}

/* --------------------------------------------------------------------------
   04. MÓDULOS DE CHECKPOINT & ESCALONAMENTO
   -------------------------------------------------------------------------- */
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
  var modalInstance = bootstrap.Modal.getInstance(modalElem) || new bootstrap.Modal(modalElem);
  modalInstance.show();
}

function fn12_renderizarTabelaEscalonamento(dados, filtroEmpresa, termoBusca) {
  var $tbody = $('#tbodyEscalonamento');
  if ($tbody.length === 0) return;
  $tbody.empty();

  if (!dados || Object.keys(dados).length === 0) {
    $tbody.html('<tr><td colspan="5" class="text-center text-muted p-3">Nenhum registro de escalonamento encontrado.</td></tr>');
    return;
  }

  Object.keys(dados).forEach(function(key) {
    var itemEmpresa = dados[key];
    var emp = itemEmpresa.empresa || key;

    if (filtroEmpresa && filtroEmpresa !== "TODAS" && emp.toUpperCase() !== filtroEmpresa.toUpperCase()) return;

    // Se for formato de níveis em array (seus dados reais)
    if (itemEmpresa.niveis && Array.isArray(itemEmpresa.niveis)) {
      itemEmpresa.niveis.forEach(function(n) {
        var nome = n.gestor || '-';
        var cargo = `Nível ${n.nivel} - ${n.cargo || ''}`.trim();
        var contato = [n.telefone, n.celular].filter(Boolean).filter(c => c !== '-').join(' / ') || '-';
        var obs = [n.email, n.atendimento ? `Horário: ${n.atendimento}` : ''].filter(Boolean).filter(o => o !== '-').join(' | ') || '-';

        if (termoBusca) {
          var termo = termoBusca.toLowerCase();
          var fullText = `${emp} ${nome} ${cargo} ${contato} ${obs}`.toLowerCase();
          if (fullText.indexOf(termo) === -1) return;
        }

        var tr = `<tr>
          <td><b>${emp}</b></td>
          <td>${nome}</td>
          <td>${cargo}</td>
          <td>${contato}</td>
          <td><small>${obs}</small></td>
        </tr>`;
        $tbody.append(tr);
      });
    } else {
      // Suporte ao formato simples antigo
      var nome = itemEmpresa.nome || '-';
      var cargo = itemEmpresa.cargo || '-';
      var contato = itemEmpresa.contato || '-';
      var obs = itemEmpresa.obs || '-';

      if (termoBusca) {
        var termo = termoBusca.toLowerCase();
        var fullText = `${emp} ${nome} ${cargo} ${contato} ${obs}`.toLowerCase();
        if (fullText.indexOf(termo) === -1) return;
      }

      var tr = `<tr>
        <td><b>${emp}</b></td>
        <td>${nome}</td>
        <td>${cargo}</td>
        <td>${contato}</td>
        <td>${obs}</td>
      </tr>`;
      $tbody.append(tr);
    }
  });
}

function fn_carregarEscalaPlantao() {
  var $div = $('#containerEscalaPlantao');
  if ($div.length === 0) return;

  var plantaoHTML = `
    <div class="card p-3 shadow-sm mb-3">
      <h6 class="fw-bold text-primary mb-2"><i class="fas fa-user-clock me-2"></i>Escala do Plantão</h6>
      <div class="row g-2 text-center" style="font-size: 13px;">
        <div class="col"><div class="p-2 border rounded bg-light"><b>Plantão 1:</b> Francisco</div></div>
        <div class="col"><div class="p-2 border rounded bg-light"><b>Plantão 2:</b> Rodrigo</div></div>
        <div class="col"><div class="p-2 border rounded bg-light"><b>Plantão 3:</b> Matheus</div></div>
        <div class="col"><div class="p-2 border rounded bg-light"><b>Sobreaviso:</b> Bruno / Wendel</div></div>
      </div>
    </div>
  `;
  $div.html(plantaoHTML);
}

function fn_carregarLinksProcessos() {
  var $div = $('#containerLinksProcessos');
  if ($div.length === 0) return;

  var linksHTML = `
    <div class="card p-3 shadow-sm mb-3">
      <h6 class="fw-bold text-dark mb-2"><i class="fas fa-folder-open me-2"></i>Processos & Procedimentos Quick Links</h6>
      <div class="d-flex flex-wrap gap-2">
        <a href="#" class="btn btn-sm btn-outline-secondary"><i class="fas fa-book me-1"></i> POP Acionamento Link</a>
        <a href="#" class="btn btn-sm btn-outline-secondary"><i class="fas fa-book me-1"></i> POP Falha de Energia</a>
        <a href="#" class="btn btn-sm btn-outline-secondary"><i class="fas fa-book me-1"></i> POP Roteadores / SD-WAN</a>
        <a href="#" class="btn btn-sm btn-outline-secondary"><i class="fas fa-phone-alt me-1"></i> Contatos Operadoras</a>
      </div>
    </div>
  `;
  $div.html(linksHTML);
}

/* --------------------------------------------------------------------------
   05. PASSAGEM DE TURNO & RELATÓRIOS (WHATSAPP / PDF)
   -------------------------------------------------------------------------- */
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
  
  var hoje = new Date().toISOString().split('T')[0];

  $('#incidentes tbody tr').each(function() {
    var $row = $(this);
    var $tdSitio = $row.find('td').eq(1);
    var isChecked = $row.find('input[type="checkbox"]').is(':checked');

    var item = {
      sitio: obterValorCampo($row, '.select-sitio, select[name="sitio"]'),
      tipo: obterValorCampo($row, '.select-tipo, select[name="tipo"]'),
      dataIni: obterValorCampo($row, 'input[name="data_inicio"], input[name="data_1"], .input-data1'),
      horaIni: obterValorCampo($row, 'input[name="hora_inicio"], input[name="h_inicio"], .input-hora1'),
      dataFim: obterValorCampo($row, 'input[name="data_fim"], input[name="data_2"], .input-data2'),
      horaFim: obterValorCampo($row, 'input[name="hora_fim"], input[name="h_fim"], .input-hora2'),
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
      if (item.dataIni === hoje || item.dataFim === hoje || isChecked) {
        atividadesCinza.push(item);
      }
    } else if ($tdSitio.hasClass('sitio-verde')) {
      if (item.dataFim === hoje || isChecked) {
        normalizadosVerde.push(item);
      }
    }
  });

  var turno = $('#selectTurno').val() || 'Turno 1';
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

/* --------------------------------------------------------------------------
   06. CONFIGURAÇÃO DE EVENTOS DOM (JQUERY)
   -------------------------------------------------------------------------- */
function fn_configurarEventosDOM() {

  $('#btnNovoItem').on('click', function() {
    var novoId = Date.now().toString();
    var $tr = fn08_criarLinhaTabela(novoId);
    fn02_reordenarTabela();
    fn06_salvarDadosStorage();
    $tr.find('.select-sitio').focus();
  });

  $('#incidentes').on('input', 'input', function() {
    var $tr = $(this).closest('tr');
    fn03_avaliarStatusLinha($tr);
    
    clearTimeout(timerSalvarInput);
    timerSalvarInput = setTimeout(function() {
      fn06_salvarDadosStorage();
    }, 1000);
  });

  $('#incidentes').on('change', '.select-causa', function() {
    var $tr = $(this).closest('tr');
    fn03_avaliarStatusLinha($tr);
    fn02_reordenarTabela();
    fn06_salvarDadosStorage();
  });

  $('#incidentes').on('change blur', '.input-data2, .input-hora2', function() {
    var $tr = $(this).closest('tr');
    var data2Val = $tr.find('.input-data2').val();
    var hora2Val = $tr.find('.input-hora2').val();

    if (data2Val && hora2Val) {
      var dataHoraFim = new Date(`${data2Val}T${hora2Val}:00`);
      var agora = new Date();

      if (dataHoraFim > agora) {
        alert('Atenção: A Data e Hora de término não podem ser no futuro!');
        $tr.find('.input-hora2').val('');
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
      alert('Por favor, preencha o Sítio, o Tipo e os Parceiros.');
      return;
    }

    var novosParceiros = parceirosStr.split(',').map(s => s.trim()).filter(s => s !== '');

    if (!dadosSitios[codigo]) dadosSitios[codigo] = {};
    if (!dadosSitios[codigo][tipo]) dadosSitios[codigo][tipo] = [];

    novosParceiros.forEach(function(p) {
      if (!dadosSitios[codigo][tipo].includes(p)) dadosSitios[codigo][tipo].push(p);
    });

    localStorage.setItem('dadosSitios', JSON.stringify(dadosSitios));
    fn09_atualizarDropdownsExistentes();

    try {
      if (typeof database !== 'undefined') {
        database.ref('config/dadosSitios/' + codigo + '/' + tipo).set(dadosSitios[codigo][tipo]);
      }
    } catch(e) {}

    $('#formNovoSitio')[0].reset();
    var modalElem = document.getElementById('modalNovoSitio');
    var modalInstance = bootstrap.Modal.getInstance(modalElem) || new bootstrap.Modal(modalElem);
    modalInstance.hide();

    alert(`Dados do sítio "${codigo}" gravados com sucesso!`);
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
            alert('Erro ao copiar para a área de transferência: ' + err.message);
          });
        } catch (err) {
          alert('Navegador não suporta a cópia direta de imagem.');
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
    alert('Dados salvos no navegador com sucesso!');
  });

  $('#btnEscalonamento').on('click', function() {
    fn12_renderizarTabelaEscalonamento(dadosEscalonamento);
    var modalElem = document.getElementById('modalEscalonamento');
    if (modalElem) {
      var modalInstance = bootstrap.Modal.getInstance(modalElem) || new bootstrap.Modal(modalElem);
      modalInstance.show();
    }
  });

  $('#filtrosEmpresaEscalonamento button').on('click', function() {
    $('#filtrosEmpresaEscalonamento button').removeClass('active');
    $(this).addClass('active');
    var emp = $(this).attr('data-emp');
    var termo = $('#inputSearchEscalonamento').val();
    fn12_renderizarTabelaEscalonamento(dadosEscalonamento, emp, termo);
  });

  $('#inputSearchEscalonamento').on('keyup search', function() {
    var emp = $('#filtrosEmpresaEscalonamento button.active').attr('data-emp') || "TODAS";
    fn12_renderizarTabelaEscalonamento(dadosEscalonamento, emp, $(this).val());
  });

  // Eventos de Passagem de Turno
  $(document).on('click', '#btnEmail', function() {
    if ($('#containerControlesTurno').length === 0) {
      var controlesHTML = `
        <div id="containerControlesTurno" class="card p-3 mb-3 border-secondary-subtle bg-light">
          <div class="row g-3">
            <div class="col-md-3">
              <label class="form-label fw-bold mb-1" style="font-size:11px;">TURNO:</label>
              <select id="selectTurno" class="form-select form-select-sm">
                <option value="Turno 1">Turno 1</option>
                <option value="Turno 2">Turno 2</option>
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
                  <input class="form-check-input check-ferramenta" type="checkbox" id="checkCastleRock">
                  <label class="form-check-label fw-bold" for="checkCastleRock" style="font-size:11px; cursor:pointer;">
                    <i class="fas fa-chess-rook text-primary me-1"></i> CastleRock <span id="stCastleRock" class="ms-1 text-danger">❌</span>
                  </label>
                </div>
                <div class="form-check form-check-inline m-0">
                  <input class="form-check-input check-ferramenta" type="checkbox" id="checkGrafana">
                  <label class="form-check-label fw-bold" for="checkGrafana" style="font-size:11px; cursor:pointer;">
                    <i class="fas fa-chart-line text-warning me-1"></i> Grafana <span id="stGrafana" class="ms-1 text-danger">❌</span>
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
            alert("Erro ao copiar imagem diretamente.");
          }).finally(function() {
            $btn.html(textoOriginal).prop('disabled', false);
          });
        } else {
          alert("Seu navegador não suporta a cópia direta de imagens.");
          $btn.html(textoOriginal).prop('disabled', false);
        }
      }, 'image/png');
    }).catch(function() {
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

  // Módulos em Construção (Processos, Ferramentas, Estrutura, Plantão)
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
  // Salva automaticamente no Firebase ao alterar qualquer input ou select da tabela
$('#incidentes').on('change input', 'input, select', function() {
  fn06_salvarDadosStorage();
});

}