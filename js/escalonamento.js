// ==========================================
// MÓDULO DE ESCALONAMENTO
// ==========================================

const dadosEscalonamento = [
  { emp: "EBT", nivel: "0", gestor: "Chamado", cargo: "Portal", time: "24h", tel: "0800 721 1021", cel: "N/A", email: "https://embratel.com.br/embratelonline/" },
  { emp: "EBT", nivel: "Plantão", gestor: "Chamado", cargo: "CRN", time: "24h", tel: "(11) 2121-2880", cel: "N/A", email: "caspo@embratel.com.br, CHAMADO@claroatendimento.com.br" },
  { emp: "EBT", nivel: "1", gestor: "Jefferson Tadeu", cargo: "Analista", time: "08h ás 17h", tel: "(11) 2121-2898", cel: "(11) 98949-6265", email: "jeferson.santana@claro.com.br" },
  { emp: "EBT", nivel: "2", gestor: "Adriano Nascimento", cargo: "Gestor Técnico", time: "06h ás 20h", tel: "(11) 2121-7146", cel: "(11) 99202-8125", email: "adriano.nascimento@claro.com.br" },
  { emp: "EBT", nivel: "3", gestor: "José E. Neves Silva", cargo: "Ger. Operacional", time: "N/A", tel: "(11) 2121-2134", cel: "(11) 99259-6352", email: "jose.nevessilva@claro.com.br" },

  { emp: "Oi", nivel: "Plantão", gestor: "Chamado", cargo: "Portal", time: "24h", tel: "0800 031 8031 / 0800-282-1231", cel: "N/A", email: "https://portaloisolucoes.oi.com.br/login" },
  { emp: "Oi", nivel: "1", gestor: "N/A", cargo: "Gestor Técnico", time: "24h", tel: "N/A", cel: "N/A", email: "N/A" },
  { emp: "Oi", nivel: "2", gestor: "Helbert V D Santos", cargo: "Sup.Técnico", time: "24h", tel: "N/A", cel: "(11) 98050-0277", email: "helbert.santos@oi.net.br" },
  { emp: "Oi", nivel: "3", gestor: "Danilo M Oliveira", cargo: "Ger. Operações", time: "24h", tel: "N/A", cel: "(11) 96953-7738", email: "danilo.mendes@oi.net.br" },
  { emp: "Oi", nivel: "4", gestor: "Helio Magatti", cargo: "Diretor. Nac. Operações", time: "24h", tel: "N/A", cel: "(11) 98050-0075", email: "helio.magatti@oi.net.br" },

  { emp: "Vivo", nivel: "0", gestor: "Chamado", cargo: "Dados e Voz", time: "24h", tel: "0800 015 1551", cel: "N/A", email: "relacionamentoempresas.br@vivo.com.br" },
  { emp: "Vivo", nivel: "0", gestor: "Chamado", cargo: "GI", time: "24h", tel: "0800 0112499", cel: "N/A", email: "plantaoempresas@vivo.com.br (Após as 18:00 e fins de semana)" },
  { emp: "Vivo", nivel: "1", gestor: "Ana Paula Gilio", cargo: "Gestor Técnico", time: "24h", tel: "N/A", cel: "(11) 97504-1171", email: "ana.gilio@telefonica.com" },
  { emp: "Vivo", nivel: "2", gestor: "Daniela Reboreda", cargo: "Gerente CS", time: "24h", tel: "N/A", cel: "(11) 99934-1065", email: "daniela.reboreda@telefonica.com" },
  { emp: "Vivo", nivel: "3", gestor: "Douglas Santana", cargo: "Gerente SE CS", time: "24h", tel: "N/A", cel: "(11) 99551-6968", email: "douglas.santana@telefonica.com" },

  { emp: "Cirion", nivel: "0", gestor: "Chamado", cargo: "Central de Serviços", time: "24h", tel: "0800 887 3333", cel: "(11) 3957-2288", email: "https://portal.ciriontechnologies.com/portal/#/login?fromOldUrl=true&path=portal%2F" },
  { emp: "Cirion", nivel: "1", gestor: "Chamado", cargo: "Central de Serviços", time: "24h", tel: "11 3957-2005", cel: "11 3957-2415", email: "N/A" },
  { emp: "Cirion", nivel: "1", gestor: "N/A", cargo: "Mesa de Ajuda", time: "24h", tel: "(11) 3958-0051", cel: "N/A", email: "ms.scalation.tier2@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "1", gestor: "Cristóbal Gonzalez", cargo: "Suporte Dedicado", time: "24h", tel: "56 2 2422 5941", cel: "N/A", email: "cristóbal.gonzalez.ext@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "1", gestor: "Samuel Parraguez", cargo: "Suporte Dedicado", time: "24h", tel: "57 2 2422 5914", cel: "N/A", email: "samuel.parraguez.ext@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "2", gestor: "N/A", cargo: "Supervisor", time: "90min - 4h", tel: "(11) 3957-2299", cel: "N/A", email: "ms.escalation@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "2", gestor: "Evandro Oliveira", cargo: "Supervisor", time: "8h as 17h", tel: "N/A", cel: "(11) 99649-9685", email: "Evandro.oliveira@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "2", gestor: "Rafael Rangel", cargo: "Supervisor", time: "14h as 23h", tel: "N/A", cel: "(11) 99633-6619", email: "Rafael.deandrade@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "2", gestor: "Tech Lead", cargo: "Supervisor", time: "23h as 8h", tel: "N/A", cel: "N/A", email: "dl-nm-brasil@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "3", gestor: "Eduardo Silva", cargo: "Coordenador", time: "2h a 8h", tel: "(11) 3957-2243", cel: "(11) 97133-3863", email: "eduardo.silva@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "4", gestor: "Pâmela Spadrezani", cargo: "Manager", time: "4h a 12h", tel: "(11) 3957-2243", cel: "(11) 97124-7730", email: "pamela.spadrezani@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "5", gestor: "Juan Quitian", cargo: "Executive Manager", time: "8h a 18h", tel: "52 55 8897-3814", cel: "57 300 8359-695", email: "juan.quitian@ciriontechnologies.com" },
  { emp: "Cirion", nivel: "6", gestor: "Claudia Secco", cargo: "Diretor", time: "12h a 24h", tel: "(11) 3957-2213", cel: "(11) 93351-6699", email: "claudia.secco@ciriontechnologies.com" },

  { emp: "SITA", nivel: "1", gestor: "Network Support", cargo: "Service Desk", time: "24h", tel: "0800 881 0040", cel: "N/A", email: "network.support@sita.aero" },
  { emp: "SITA", nivel: "2", gestor: "Service Desk", cargo: "Supervisor", time: "24h", tel: "1 514 282 2838", cel: "N/A", email: "sjo.supervisor@sita.aero" },
  { emp: "SITA", nivel: "3", gestor: "Wendel Arcosy", cargo: "TCSS", time: "24h", tel: "(11) 5538-4821", cel: "(21) 96722-0546", email: "wendel.arcosy@sita.aero" },
  { emp: "SITA", nivel: "3", gestor: "Marcos Rodrigues", cargo: "TCSS", time: "24h", tel: "N/A", cel: "N/A", email: "marco.rodrigues@sita.aero" },
  { emp: "SITA", nivel: "4", gestor: "Sirley Mendes", cargo: "CSM", time: "8x5", tel: "N/A", cel: "(11) 99547-4838", email: "sirley.mendes@sita.aero" },
  { emp: "SITA", nivel: "5", gestor: "Miguel Saraiva", cargo: "AC", time: "8x5", tel: "N/A", cel: "(56) 98768-0941", email: "miguel.saraiva@sita.aero" },
  { emp: "SITA", nivel: "6", gestor: "Rackel Valadares", cargo: "ROD", time: "N/A", tel: "N/A", cel: "(11) 95697-7477", email: "rackel.valadares@sita.aero" }
];

function fn12_renderizarEscalonamento(filtroEmpresa = "TODAS", termoBusca = "") {
  var $tbody = $('#tbodyEscalonamento');
  $tbody.empty();

  var termo = termoBusca.toLowerCase();

  dadosEscalonamento.forEach(function(item) {
    if (filtroEmpresa !== "TODAS" && item.emp !== filtroEmpresa) {
      return;
    }

    var textoLinha = `${item.emp} ${item.nivel} ${item.gestor} ${item.cargo} ${item.time} ${item.tel} ${item.cel} ${item.email}`.toLowerCase();
    if (termo && textoLinha.indexOf(termo) === -1) {
      return;
    }

    var badgeClass = "badge-nivel-0";
    var n = item.nivel.toLowerCase();
    if (n === "plantão" || n === "plantao") badgeClass = "badge-nivel-plantao";
    else if (n === "1") badgeClass = "badge-nivel-1";
    else if (n === "2") badgeClass = "badge-nivel-2";
    else if (n === "3") badgeClass = "badge-nivel-3";
    else if (n === "4") badgeClass = "badge-nivel-4";
    else if (n === "5") badgeClass = "badge-nivel-5";
    else if (n === "6") badgeClass = "badge-nivel-6";

    var emailHTML = item.email;
    if (item.email.startsWith("http")) {
      emailHTML = `<a href="${item.email}" target="_blank" class="text-decoration-none fw-bold">🌐 Acessar Portal</a>`;
    } else if (item.email.includes("@")) {
      var emails = item.email.split(',');
      emailHTML = emails.map(e => `<a href="mailto:${e.trim()}" class="text-decoration-none">${e.trim()}</a>`).join('<br>');
    }

    var rowHTML = `<tr>
      <td><b>${item.emp}</b></td>
      <td class="text-center"><span class="badge-nivel ${badgeClass}">${item.nivel}</span></td>
      <td class="fw-semibold">${item.gestor}</td>
      <td>${item.cargo}</td>
      <td><small class="text-muted">${item.time}</small></td>
      <td>${item.tel}</td>
      <td>${item.cel}</td>
      <td>${emailHTML}</td>
    </tr>`;

    $tbody.append(rowHTML);
  });

  if ($tbody.find('tr').length === 0) {
    $tbody.append('<tr><td colspan="8" class="text-center text-muted py-3">Nenhum registro encontrado.</td></tr>');
  }
}

// Eventos acionados após o DOM estar pronto
$(document).ready(function() {
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
