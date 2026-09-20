// CONFIGURAÇÃO DO EMAILJS (Substitua pelas suas chaves reais)
const EMAILJS_PUBLIC_KEY = "SUA_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "SEU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "SEU_TEMPLATE_ID";

const SENHA_PRIMEIRO_ACESSO = "Latam@2026"; 

// Lista padrão de analistas da equipe
const ANALISTAS_PADRAO = [
  "ADIEL",
  "BRUNO",
  "FRANCISCO",
  "MATHEUS",
  "RODRIGO",
  "VALDEQUE",
  "WENDELL"
];

// Inicializa o EmailJS
if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== "SUA_PUBLIC_KEY") {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const dadosFerramentasIniciais = [
  { nome: "CASTLE ROCK", link: "", usuario: "monitora", senha: "monitora15", detalhes: "IP: 10.130.144.35 BR\nIP: 10.130.144.34 BR\nIP: 10.80.34.57 CL" },
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
let statusAuthLocal = "LOGIN"; 
let codigoGeradoTemp = null;
let usuarioEmRecuperacao = null;
let analistaSelecionadoTemp = "";

function obterFerramentas() {
  const dadosSalvos = localStorage.getItem("ferramentas_latam");
  if (dadosSalvos) return JSON.parse(dadosSalvos);
  localStorage.setItem("ferramentas_latam", JSON.stringify(dadosFerramentasIniciais));
  return dadosFerramentasIniciais;
}

function obterUsuariosCadastrados() {
  const users = localStorage.getItem("ferramentas_usuarios");
  return users ? JSON.parse(users) : [];
}

function salvarUsuario(nome, email, senha) {
  const users = obterUsuariosCadastrados();
  const index = users.findIndex(u => u.nome.toUpperCase() === nome.toUpperCase());
  if (index !== -1) {
    users[index] = { nome, email, senha };
  } else {
    users.push({ nome, email, senha });
  }
  localStorage.setItem("ferramentas_usuarios", JSON.stringify(users));
}

function atualizarSenhaUsuario(nome, novaSenha) {
  const users = obterUsuariosCadastrados();
  const index = users.findIndex(u => u.nome.toUpperCase() === nome.toUpperCase());
  if (index !== -1) {
    users[index].senha = novaSenha;
    localStorage.setItem("ferramentas_usuarios", JSON.stringify(users));
  }
}

function verificarAutenticacao() {
  return sessionStorage.getItem("ferramentas_autenticado") === "true";
}

function mudarStatusAuth(novoStatus) {
  statusAuthLocal = novoStatus;
  renderizarFerramentas();
}

function autenticarOuTrocarForm(event) {
  if (event) event.preventDefault();
  
  const msgErro = document.getElementById("erro-senha-ferramentas");
  if (msgErro) msgErro.classList.add("d-none");

  if (statusAuthLocal === "LOGIN") {
    const selectNome = document.getElementById("auth-nome-select");
    const nomeInput = selectNome ? selectNome.value.trim().toUpperCase() : "";
    const senhaInput = document.getElementById("auth-senha-input") ? document.getElementById("auth-senha-input").value : "";

    if (!nomeInput) {
      if (msgErro) {
        msgErro.classList.remove("d-none");
        msgErro.innerText = "Por favor, selecione o seu nome de analista.";
      }
      return;
    }

    if (senhaInput === SENHA_PRIMEIRO_ACESSO) {
      analistaSelecionadoTemp = nomeInput;
      statusAuthLocal = "CADASTRO";
      renderizarFerramentas();
      return;
    }

    const usuarios = obterUsuariosCadastrados();
    const usuarioEncontrado = usuarios.find(u => u.nome.toUpperCase() === nomeInput && u.senha === senhaInput);

    if (usuarioEncontrado) {
      sessionStorage.setItem("ferramentas_autenticado", "true");
      sessionStorage.setItem("ferramentas_analista_ativo", usuarioEncontrado.nome);
      renderizarFerramentas();
    } else {
      if (msgErro) {
        msgErro.classList.remove("d-none");
        msgErro.innerText = "Senha incorreta! Se é o seu 1º acesso, use a senha padrão 'Latam@2026'.";
      }
    }

  } else if (statusAuthLocal === "CADASTRO") {
    const nome = analistaSelecionadoTemp;
    const novoEmail = document.getElementById("novo-email-input").value.trim();
    const novaSenha = document.getElementById("nova-senha-input").value;
    const confirmaSenha = document.getElementById("confirma-senha-input").value;

    if (!novoEmail || !novaSenha) {
      if (msgErro) {
        msgErro.classList.remove("d-none");
        msgErro.innerText = "Preencha todos os campos!";
      }
      return;
    }

    if (novaSenha !== confirmaSenha) {
      if (msgErro) {
        msgErro.classList.remove("d-none");
        msgErro.innerText = "As senhas não coincidem!";
      }
      return;
    }

    if (novaSenha === SENHA_PRIMEIRO_ACESSO) {
      if (msgErro) {
        msgErro.classList.remove("d-none");
        msgErro.innerText = "A sua nova senha deve ser diferente da senha temporária!";
      }
      return;
    }

    salvarUsuario(nome, novoEmail, novaSenha);
    sessionStorage.setItem("ferramentas_autenticado", "true");
    sessionStorage.setItem("ferramentas_analista_ativo", nome);
    statusAuthLocal = "LOGIN";
    renderizarFerramentas();
  }
}

function enviarCodigoEmail(event) {
  event.preventDefault();
  const selectNome = document.getElementById("rec-nome-select");
  const nome = selectNome ? selectNome.value.trim().toUpperCase() : "";
  const email = document.getElementById("rec-email-input").value.trim();
  const msgErro = document.getElementById("erro-senha-ferramentas");

  const usuarios = obterUsuariosCadastrados();
  const user = usuarios.find(u => u.nome.toUpperCase() === nome && u.email && u.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    if (msgErro) {
      msgErro.classList.remove("d-none");
      msgErro.innerText = "Analista ou E-mail não coincidem com o registro!";
    }
    return;
  }

  codigoGeradoTemp = Math.floor(100000 + Math.random() * 900000).toString();
  usuarioEmRecuperacao = user;

  const templateParams = {
    to_name: user.nome,
    to_email: user.email,
    code: codigoGeradoTemp
  };

  if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== "SUA_PUBLIC_KEY") {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        mudarStatusAuth("RECUPERAR_CODIGO");
      }, () => {
        if (msgErro) {
          msgErro.classList.remove("d-none");
          msgErro.innerText = "Erro ao enviar e-mail. Verifique as chaves do EmailJS.";
        }
      });
  } else {
    alert(`[Simulação] Código enviado para ${user.email}: ${codigoGeradoTemp}`);
    mudarStatusAuth("RECUPERAR_CODIGO");
  }
}

function validarCodigoERedefinir(event) {
  event.preventDefault();
  const codigoInput = document.getElementById("codigo-input").value.trim();
  const novaSenha = document.getElementById("rec-nova-senha-input").value;
  const msgErro = document.getElementById("erro-senha-ferramentas");

  if (codigoInput !== codigoGeradoTemp) {
    if (msgErro) {
      msgErro.classList.remove("d-none");
      msgErro.innerText = "Código de verificação incorreto!";
    }
    return;
  }

  atualizarSenhaUsuario(usuarioEmRecuperacao.nome, novaSenha);
  sessionStorage.setItem("ferramentas_autenticado", "true");
  sessionStorage.setItem("ferramentas_analista_ativo", usuarioEmRecuperacao.nome);
  codigoGeradoTemp = null;
  usuarioEmRecuperacao = null;
  statusAuthLocal = "LOGIN";
  renderizarFerramentas();
}

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

function alternarModoExclusao() {
  modoExclusaoAtivo = !modoExclusaoAtivo;
  const btn = document.getElementById("btn-modo-exclusao");
  if (btn) {
    btn.className = modoExclusaoAtivo ? "btn btn-sm btn-danger" : "btn btn-sm btn-outline-light";
    btn.innerHTML = modoExclusaoAtivo ? "✕ Sair da Exclusão" : "⚙️ Efetuar Exclusão";
  }
  renderizarFerramentas();
}

function renderizarFerramentas() {
  const container = document.getElementById("lista-ferramentas");
  const btnToggleAdd = document.getElementById("btn-toggle-add");
  const btnModoExclusao = document.getElementById("btn-modo-exclusao");
  
  if (!container) return;

  if (!verificarAutenticacao()) {
    if (btnToggleAdd) btnToggleAdd.classList.add("d-none");
    if (btnModoExclusao) btnModoExclusao.classList.add("d-none");

    const opcoesAnalistas = ANALISTAS_PADRAO.map(a => `<option value="${a}">${a}</option>`).join("");

    if (statusAuthLocal === "LOGIN") {
      container.innerHTML = `
        <div class="col-12 col-md-6 offset-md-3 py-3">
          <div class="card border-0 shadow-sm rounded-3">
            <div class="card-body p-4 text-center">
              <div class="mb-3 text-primary"><i class="fas fa-user-lock fa-3x"></i></div>
              <h5 class="fw-bold text-dark mb-1">Acesso ao Módulo Ferramentas</h5>
              <p class="small text-muted mb-3">Selecione o seu nome e informe a sua senha.</p>
              
              <form onsubmit="autenticarOuTrocarForm(event)">
                <div class="mb-2">
                  <select id="auth-nome-select" class="form-select text-center shadow-none" required>
                    <option value="" disabled selected>-- Selecione o Analista --</option>
                    ${opcoesAnalistas}
                  </select>
                </div>
                <div class="mb-2">
                  <input type="password" id="auth-senha-input" class="form-control text-center shadow-none" placeholder="Senha (ou 'Latam@2026' no 1º acesso)" required>
                  <div id="erro-senha-ferramentas" class="text-danger small mt-2 d-none fw-semibold"></div>
                </div>
                <button type="submit" class="btn btn-primary w-100 fw-semibold mb-2">🔓 Entrar no Painel</button>
              </form>
              <button onclick="mudarStatusAuth('RECUPERAR_EMAIL')" class="btn btn-link btn-sm text-secondary p-0 text-decoration-none small">Esqueceu a senha?</button>
            </div>
          </div>
        </div>
      `;
    } else if (statusAuthLocal === "CADASTRO") {
      container.innerHTML = `
        <div class="col-12 col-md-6 offset-md-3 py-3">
          <div class="card border-0 shadow-sm rounded-3">
            <div class="card-body p-4 text-center">
              <div class="mb-3 text-warning"><i class="fas fa-key fa-3x"></i></div>
              <h5 class="fw-bold text-dark mb-1">Primeiro Acesso: ${analistaSelecionadoTemp}</h5>
              <p class="small text-muted mb-3">Cadastre o seu e-mail corporativo e a sua nova senha pessoal.</p>
              
              <form onsubmit="autenticarOuTrocarForm(event)">
                <div class="mb-2">
                  <input type="email" id="novo-email-input" class="form-control text-center shadow-none" placeholder="Seu E-mail Corporativo" required autofocus>
                </div>
                <div class="mb-2">
                  <input type="password" id="nova-senha-input" class="form-control text-center shadow-none" placeholder="Nova Senha Pessoal" required>
                </div>
                <div class="mb-3">
                  <input type="password" id="confirma-senha-input" class="form-control text-center shadow-none" placeholder="Confirme a Nova Senha" required>
                  <div id="erro-senha-ferramentas" class="text-danger small mt-2 d-none fw-semibold"></div>
                </div>
                <button type="submit" class="btn btn-success w-100 fw-semibold">💾 Salvar e Acessar</button>
              </form>
            </div>
          </div>
        </div>
      `;
    } else if (statusAuthLocal === "RECUPERAR_EMAIL") {
      container.innerHTML = `
        <div class="col-12 col-md-6 offset-md-3 py-3">
          <div class="card border-0 shadow-sm rounded-3">
            <div class="card-body p-4 text-center">
              <div class="mb-3 text-info"><i class="fas fa-envelope fa-3x"></i></div>
              <h5 class="fw-bold text-dark mb-1">Recuperar Senha</h5>
              <p class="small text-muted mb-3">Selecione o seu nome e informe o e-mail cadastrado.</p>
              
              <form onsubmit="enviarCodigoEmail(event)">
                <div class="mb-2">
                  <select id="rec-nome-select" class="form-select text-center shadow-none" required>
                    <option value="" disabled selected>-- Selecione o Analista --</option>
                    ${opcoesAnalistas}
                  </select>
                </div>
                <div class="mb-3">
                  <input type="email" id="rec-email-input" class="form-control text-center shadow-none" placeholder="E-mail Cadastrado" required>
                  <div id="erro-senha-ferramentas" class="text-danger small mt-2 d-none fw-semibold"></div>
                </div>
                <button type="submit" class="btn btn-info text-white w-100 fw-semibold mb-2">📩 Enviar Código de Validação</button>
              </form>
              <button onclick="mudarStatusAuth('LOGIN')" class="btn btn-link btn-sm text-secondary p-0 text-decoration-none small">Voltar ao Login</button>
            </div>
          </div>
        </div>
      `;
    } else if (statusAuthLocal === "RECUPERAR_CODIGO") {
      container.innerHTML = `
        <div class="col-12 col-md-6 offset-md-3 py-3">
          <div class="card border-0 shadow-sm rounded-3">
            <div class="card-body p-4 text-center">
              <div class="mb-3 text-success"><i class="fas fa-shield-alt fa-3x"></i></div>
              <h5 class="fw-bold text-dark mb-1">Código de Segurança</h5>
              <p class="small text-muted mb-3">Insira o código de 6 dígitos e a nova senha pessoal.</p>
              
              <form onsubmit="validarCodigoERedefinir(event)">
                <div class="mb-2">
                  <input type="text" id="codigo-input" class="form-control text-center shadow-none fw-bold" placeholder="Código (6 dígitos)" maxlength="6" required autofocus>
                </div>
                <div class="mb-3">
                  <input type="password" id="rec-nova-senha-input" class="form-control text-center shadow-none" placeholder="Nova Senha Pessoal" required>
                  <div id="erro-senha-ferramentas" class="text-danger small mt-2 d-none fw-semibold"></div>
                </div>
                <button type="submit" class="btn btn-success w-100 fw-semibold mb-2">✅ Redefinir e Entrar</button>
              </form>
            </div>
          </div>
        </div>
      `;
    }
    return;
  }

  if (btnToggleAdd) btnToggleAdd.classList.remove("d-none");
  if (btnModoExclusao) btnModoExclusao.classList.remove("d-none");

  const analistaAtivo = sessionStorage.getItem("ferramentas_analista_ativo") || "Analista";
  const lista = obterFerramentas();
  container.innerHTML = "";

  const bannerUser = document.createElement("div");
  bannerUser.className = "col-12 mb-2 d-flex justify-content-between align-items-center bg-light p-2 rounded border border-light-subtle";
  bannerUser.innerHTML = `
    <small class="text-muted">Conectado como: <strong class="text-primary">${analistaAtivo}</strong></small>
    <button onclick="fazerLogout()" class="btn btn-sm btn-link text-danger p-0 text-decoration-none small">Sair / Bloquear 🔒</button>
  `;
  container.appendChild(bannerUser);

  lista.forEach((item, index) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const linkHtml = item.link 
      ? `<a href="${item.link}" target="_blank" class="btn btn-sm btn-outline-primary w-100 mt-2 fw-semibold">Acessar Portal ↗</a>` 
      : `<span class="badge bg-secondary-subtle text-secondary border border-secondary-subtle w-100 py-2 mt-2">Sem link direto</span>`;

    let detalhesHtml = "";
    if (item.detalhes) {
      const detalhesFormatados = item.detalhes.replace(/\|/g, "<br>").replace(/\n/g, "<br>");
      detalhesHtml = `<div class="small text-muted mb-2 bg-white p-2 rounded border border-light-subtle" style="line-height: 1.4;">${detalhesFormatados}</div>`;
    }

    const btnExcluirHtml = modoExclusaoAtivo 
      ? `<button onclick="excluirFerramenta(${index})" class="btn btn-sm btn-danger px-2 py-0 fw-bold" title="Excluir Ferramenta">Apagar ✕</button>` 
      : "";

    const classeBordaCard = modoExclusaoAtivo ? 'border-danger shadow-sm' : 'border-primary-subtle shadow-sm';

    col.innerHTML = `
      <div class="card h-100 ${classeBordaCard} rounded-3 overflow-hidden" style="background-color: #f8fafc;">
        <div class="px-3 py-2 bg-light border-bottom border-light-subtle d-flex justify-content-between align-items-center">
          <h6 class="card-title fw-bold text-primary-emphasis m-0" style="font-size: 0.9rem;">${item.nome}</h6>
          ${btnExcluirHtml}
        </div>
        <div class="card-body p-3 d-flex flex-column justify-content-between">
          <div>
            ${detalhesHtml}
            <div class="small mb-1 text-secondary">
              <strong class="text-dark">Usuário:</strong> <code class="user-select-all bg-white text-dark px-1 py-0.5 border rounded">${item.usuario}</code>
            </div>
            <div class="small text-secondary">
              <strong class="text-dark">Senha:</strong> <code class="user-select-all bg-white text-dark px-1 py-0.5 border rounded">${item.senha}</code>
            </div>
          </div>
          <div class="pt-2">
            ${linkHtml}
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

function fazerLogout() {
  sessionStorage.removeItem("ferramentas_autenticado");
  sessionStorage.removeItem("ferramentas_analista_ativo");
  statusAuthLocal = "LOGIN";
  renderizarFerramentas();
}

function adicionarFerramenta(event) {
  event.preventDefault();
  if (!verificarAutenticacao()) return;

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

function excluirFerramenta(index) {
  if (!verificarAutenticacao()) return;

  const lista = obterFerramentas();
  const item = lista[index];
  
  if (confirm(`Tem certeza que deseja excluir "${item.nome}"?`)) {
    lista.splice(index, 1);
    localStorage.setItem("ferramentas_latam", JSON.stringify(lista));
    renderizarFerramentas();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarFerramentas();

  const form = document.getElementById("form-add-ferramenta");
  if (form) {
    form.addEventListener("submit", adicionarFerramenta);
  }

  const modalElem = document.getElementById("modalFerramentas");
  if (modalElem) {
    modalElem.addEventListener("show.bs.modal", () => {
      renderizarFerramentas();
    });
  }
});