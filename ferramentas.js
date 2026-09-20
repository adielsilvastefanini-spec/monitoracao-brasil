// Array inicial com os dados fornecidos
const dadosFerramentasIniciais = [
  { 
    nome: "CASTLE ROCK", 
    link: "", 
    usuario: "monitora", 
    senha: "monitora15", 
    detalhes: "IP: 10.130.144.35 BR\nIP: 10.130.144.34 BR\nIP: 10.80.34.57 CL" 
  },
  { nome: "PRTG", link: "https://10.8.16.127/public/login.htm?loginurl=%2Fmap.htm%3Fid%3D28549%26tabid%3D1&errorid=0", usuario: "latam", senha: "Latam@123", detalhes: "" },
  { nome: "PORTAL OI", link: "https://portaloisolucoes.oi.com.br/login", usuario: "monitora.infra@latam.com", senha: "Monitora21", detalhes: "" },
  { nome: "VMANAGER", link: "https://vmanage-2128301.sdwan.cisco.com/", usuario: "latam", senha: "8R~WJj%Q`u8%Rm#)", detalhes: "" },
  { nome: "PORTAL CIRION", link: "https://portal.ciriontechnologies.com/portal/#/login", usuario: "monitora.infra@latam.com", senha: "Monitoracaolatam@2026", detalhes: "" },
  { nome: "COMPASS / STARLINK EMPRESARIAL", link: "https://compass.speedcast.com/login", usuario: "outsourcing.gcnetworks@latam.com", senha: "Gcnetworks@latam2024", detalhes: "" },
  { nome: "STARLINK RESIDENCIAL", link: "https://starlink.com/account/service-line/AST-2159163-63746-51?selectedDevice=ut01000000-00000000-0077d250&page=0&limit=5", usuario: "monitora.infra@latam.com", senha: "??", detalhes: "" },
  { nome: "PORTAL EMBRATEL", link: "https://webebt01.embratel.com.br/ClaroEmpresasOnLine/index", usuario: "Individual", senha: "Individual", detalhes: "" },
  { nome: "GRAFANA", link: "https://monobs.grafana.net/d/bdiygg3z4nvnka/paises-general?from=now-5m&to=now&timezone=browser&refresh=5s&orgId=1", usuario: "Individual", senha: "Individual", detalhes: "" },
  { nome: "PORTAL SITA", link: "https://connectgo.sita.aero/login", usuario: "Individual", senha: "Individual", detalhes: "" },
  { nome: "MERAKI", link: "https://n1.meraki.com/login/dashboard_login/latamairlines?eid=A9FuBd&sso=true", usuario: "Individual", senha: "Individual", detalhes: "" },
  { nome: "OPCON", link: "https://latamairlines.atlassian.net/servicedesk/customer/portal/534/group/832?groupId=832&visitedUserSeg=true", usuario: "Individual", senha: "Individual", detalhes: "" },
  { nome: "BITACORA", link: "https://portalteleco.appslatam.com/#/azure-login", usuario: "Individual", senha: "Individual", detalhes: "" },
  { nome: "JIRA - CHAMADOS", link: "https://projectmanagement.appslatam.com/servicedesk/customer/portal/7/group/72", usuario: "Individual", senha: "Individual", detalhes: "" },
  { nome: "JIRA - TELECOMUNICAÇÕES", link: "https://projectmanagement.appslatam.com/secure/Dashboard.jspa?selectPageId=34710", usuario: "Individual", senha: "Individual", detalhes: "" },
  { nome: "SIGA", link: "https://siga-latam.com/fc/flight-control", usuario: "Individual", senha: "Individual", detalhes: "" }
];

let modoExclusaoAtivo = false;

// Obtém dados do localStorage ou inicializa
function obterFerramentas() {
  const dadosSalvos = localStorage.getItem("ferramentas_latam");
  if (dadosSalvos) {
    return JSON.parse(dadosSalvos);
  }
  localStorage.setItem("ferramentas_latam", JSON.stringify(dadosFerramentasIniciais));
  return dadosFerramentasIniciais;
}

// Exibe/Oculta o formulário de cadastro no topo do modal
function alternarFormularioAdd() {
  const painel = document.getElementById("painel-add-ferramenta");
  const btn = document.getElementById("btn-toggle-add");
  if (!painel) return;

  const estaOculto = painel.classList.contains("d-none");
  if (estaOculto) {
    painel.classList.remove("d-none");
    btn.className = "btn btn-sm btn-success";
    btn.innerHTML = "➖ Fechar Cadastro";
  } else {
    painel.classList.add("d-none");
    btn.className = "btn btn-sm btn-outline-success";
    btn.innerHTML = "➕ Adicionar Item";
  }
}

// Alterna o modo de exclusão
function alternarModoExclusao() {
  modoExclusaoAtivo = !modoExclusaoAtivo;
  const btn = document.getElementById("btn-modo-exclusao");
  if (btn) {
    btn.className = modoExclusaoAtivo ? "btn btn-sm btn-danger" : "btn btn-sm btn-outline-light";
    btn.innerHTML = modoExclusaoAtivo ? "✕ Sair da Exclusão" : "⚙️ Efetuar Exclusão";
  }
  renderizarFerramentas();
}

// Renderiza os cards dentro do Modal
function renderizarFerramentas() {
  const lista = obterFerramentas();
  const container = document.getElementById("lista-ferramentas");
  if (!container) return;

  container.innerHTML = "";

  lista.forEach((item, index) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const linkHtml = item.link 
      ? `<a href="${item.link}" target="_blank" class="btn btn-sm btn-outline-primary w-100 mt-2">Acessar Portal ↗</a>` 
      : `<span class="badge bg-secondary w-100 py-2 mt-2">Sem link direto</span>`;

    let detalhesHtml = "";
    if (item.detalhes) {
      const detalhesFormatados = item.detalhes.replace(/\|/g, "<br>").replace(/\n/g, "<br>");
      detalhesHtml = `<div class="small text-muted mb-2 bg-light p-2 rounded border" style="line-height: 1.4;">${detalhesFormatados}</div>`;
    }

    const btnExcluirHtml = modoExclusaoAtivo 
      ? `<button onclick="excluirFerramenta(${index})" class="btn btn-sm btn-danger px-2 py-0 fw-bold" title="Excluir Ferramenta">Apagar ✕</button>` 
      : "";

    col.innerHTML = `
      <div class="card h-100 shadow-sm border ${modoExclusaoAtivo ? 'border-danger' : 'border-0'} bg-light">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="card-title fw-bold text-dark m-0">${item.nome}</h6>
              ${btnExcluirHtml}
            </div>
            ${detalhesHtml}
            <div class="small mb-1">
              <strong>Usuário:</strong> <code class="user-select-all">${item.usuario}</code>
            </div>
            <div class="small">
              <strong>Senha:</strong> <code class="user-select-all">${item.senha}</code>
            </div>
          </div>
          <div>
            ${linkHtml}
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

// Adiciona nova ferramenta
function adicionarFerramenta(event) {
  event.preventDefault();
  
  const nome = document.getElementById("tool-nome").value.trim();
  const link = document.getElementById("tool-link").value.trim();
  const usuario = document.getElementById("tool-usuario").value.trim() || "Individual";
  const senha = document.getElementById("tool-senha").value.trim() || "Individual";
  const detalhes = document.getElementById("tool-detalhes").value.trim();

  if (!nome) return;

  const lista = obterFerramentas();
  lista.push({ nome, link, usuario, senha, detalhes });

  localStorage.setItem("ferramentas_latam", JSON.stringify(lista));
  
  document.getElementById("form-add-ferramenta").reset();
  alternarFormularioAdd();
  renderizarFerramentas();
}

// Exclui ferramenta da lista
function excluirFerramenta(index) {
  const lista = obterFerramentas();
  const item = lista[index];
  
  if (confirm(`Tem certeza que deseja excluir "${item.nome}"?`)) {
    lista.splice(index, 1);
    localStorage.setItem("ferramentas_latam", JSON.stringify(lista));
    renderizarFerramentas();
  }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderizarFerramentas();
  
  const form = document.getElementById("form-add-ferramenta");
  if (form) {
    form.addEventListener("submit", adicionarFerramenta);
  }
});