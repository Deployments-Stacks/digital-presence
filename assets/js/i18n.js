(() => {
  const CV = {
    "pt-BR": {
      href: "assets/cv/guilherme-silva-pt-br.pdf",
      label: "Baixar currículo",
      filename: "guilherme-silva-pt-br.pdf",
    },
    en: {
      href: "assets/cv/guilherme-silva-en.pdf",
      label: "Download resume",
      filename: "guilherme-silva-en.pdf",
    },
  };

  const messages = {
    "pt-BR": {
      "meta.description":
        "Guilherme Silva — engenheiro Cloud & DevOps. IaC, CI/CD e automação. 2x AWS Certified. Aberto a conectar ou falar sobre serviços.",
      "meta.ogDescription":
        "Infraestrutura versionada, reproduzível e pronta para escalar.",
      "skip": "Ir ao conteúdo",
      "nav.aria": "Principal",
      "nav.services": "Serviços",
      "nav.stack": "Stack",
      "nav.experience": "Experiência",
      "nav.contact": "Contato",
      "nav.open": "Abrir menu",
      "nav.close": "Fechar menu",
      "lang.aria": "Idioma",
      "lang.toEn": "Mudar para inglês",
      "lang.toPt": "Mudar para português",
      "hero.headline": "Infra versionada.<br />Entrega previsível.",
      "hero.lede":
        "Engenheiro Cloud & DevOps · 2x AWS Certified. Aberto a conectar — e a apoiar times com cloud, IaC, CI/CD e automação.",
      "hero.ctaConnect": "Conectar",
      "hero.ctaServices": "Serviços",
      "about.eyebrow": "sobre",
      "about.title": "Aberto a conectar",
      "about.badges": "Destaques",
      "about.badgeRole": "Perfil DevOps",
      "about.badgeFocus": "Foco IaC | CI/CD | Automação",
      "about.lede":
        "Trabalho com <strong>AWS</strong>, <strong>Terraform</strong>, <strong>Docker</strong>, <strong>Linux</strong> e <strong>Python</strong> — pipelines de CI/CD, automação de deploys e integração de serviços. Objetivo simples: infra <em>versionada</em>, <em>reproduzível</em> e pronta para escalar.",
      "about.mission":
        "<code>missão</code> → automatizar · simplificar · construir infra pronta para escalar",
      "services.eyebrow": "serviços",
      "services.title": "Onde posso ajudar",
      "services.lede":
        "Para times e pessoas da bolha tech que precisam de nuvem estável, entrega contínua ou alguém para conversar sobre arquitetura.",
      "services.cloud": "Soluções AWS com disponibilidade e eficiência de custo",
      "services.iac": "Terraform, infraestrutura como código e ambientes reproduzíveis",
      "services.cicd": "Pipelines + Docker para entrega contínua",
      "services.automation":
        "Menos trabalho manual, mais fluxo previsível e integração via API",
      "services.linux": "Servidores e ambientes Linux estáveis e bem operados",
      "services.api": "Integração de serviços e automações via API",
      "services.enablement": "Documentação, transição de conhecimento e apoio às squads",
      "stack.eyebrow": "competências",
      "stack.title": "Stack do dia a dia",
      "stack.lede": "Stack diário e ferramentas — cloud, entrega e automação.",
      "stack.languages": "Linguagens & Web",
      "stack.automation": "Automação & IA",
      "exp.eyebrow": "experiência",
      "exp.title": "Engenheiro Cloud & DevOps",
      "exp.meta": "jul/2022 – atual",
      "exp.b1":
        "Serviços de nuvem <strong>Amazon Web Services (AWS)</strong> e vivência em <strong>GCP</strong>",
      "exp.b2": "Gerenciamento de servidores e ambientes <strong>Linux</strong>",
      "exp.b3":
        "Automação de deploy com <strong>CI/CD</strong>, <strong>Docker</strong>, <strong>Terraform</strong> e <strong>Shell Script</strong>",
      "exp.b4":
        "Integração de serviços via <strong>API</strong>, versionamento com <strong>Git</strong>, documentação e suporte às squads",
      "exp.background":
        "Formação: ADS @ UNIP · Cloud @ Escola da Nuvem · AWS re/Start Graduate",
      "certs.eyebrow": "credenciais",
      "certs.title": "Certificações",
      "contact.eyebrow": "contato",
      "contact.title": "Vamos conversar",
      "contact.lede":
        "Networking na bolha tech, colaboração ou um projeto de cloud, IaC, CI/CD e automação — me chama.",
      "contact.connect": "Troca de ideias, networking e comunidades",
      "contact.consulting": "Cloud, Terraform, pipelines e automação",
      "contact.collab": "Integração de serviços, APIs e entrega contínua",
      "contact.channels": "canais",
      "contact.email": "E-mail",
      "contact.cvLabel": "Currículo",
      "contact.status": "<code>status</code> → aberto a conectar",
      "footer.copy": "Guilherme Silva · Cloud & DevOps",
    },
    en: {
      "meta.description":
        "Guilherme Silva — Cloud & DevOps Engineer. IaC, CI/CD, and automation. 2x AWS Certified. Open to connect or discuss services.",
      "meta.ogDescription":
        "Versioned, reproducible infrastructure ready to scale.",
      "skip": "Skip to content",
      "nav.aria": "Primary",
      "nav.services": "Services",
      "nav.stack": "Stack",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.aria": "Language",
      "lang.toEn": "Switch to English",
      "lang.toPt": "Switch to Portuguese",
      "hero.headline": "Versioned infrastructure.<br />Predictable delivery.",
      "hero.lede":
        "Cloud & DevOps Engineer · 2x AWS Certified. Open to connect — and to help teams with cloud, IaC, CI/CD, and automation.",
      "hero.ctaConnect": "Connect",
      "hero.ctaServices": "Services",
      "about.eyebrow": "about",
      "about.title": "Open to connect",
      "about.badges": "Highlights",
      "about.badgeRole": "DevOps role",
      "about.badgeFocus": "Focus: IaC | CI/CD | Automation",
      "about.lede":
        "I work with <strong>AWS</strong>, <strong>Terraform</strong>, <strong>Docker</strong>, <strong>Linux</strong>, and <strong>Python</strong> — CI/CD pipelines, deploy automation, and service integration. Simple goal: <em>versioned</em>, <em>reproducible</em> infrastructure ready to scale.",
      "about.mission":
        "<code>mission</code> → automate · simplify · build infra ready to scale",
      "services.eyebrow": "services",
      "services.title": "Where I can help",
      "services.lede":
        "For tech teams and people who need reliable cloud, continuous delivery, or someone to talk through architecture.",
      "services.cloud": "AWS solutions focused on availability and cost efficiency",
      "services.iac": "Terraform, infrastructure as code, and reproducible environments",
      "services.cicd": "Pipelines + Docker for continuous delivery",
      "services.automation":
        "Less manual toil, more predictable workflows, and API-driven integration",
      "services.linux": "Stable, well-operated Linux servers and environments",
      "services.api": "Service integration and automation through APIs",
      "services.enablement": "Documentation, knowledge handoff, and support for teams",
      "stack.eyebrow": "skills",
      "stack.title": "Day-to-day stack",
      "stack.lede": "Daily stack and tools — cloud, delivery, and automation.",
      "stack.languages": "Languages & Web",
      "stack.automation": "Automation & AI",
      "exp.eyebrow": "experience",
      "exp.title": "Cloud & DevOps Engineer",
      "exp.meta": "Jul 2022 – present",
      "exp.b1":
        "Cloud services on <strong>Amazon Web Services (AWS)</strong>, with hands-on <strong>GCP</strong> experience",
      "exp.b2": "Linux server and environment management",
      "exp.b3":
        "Deploy automation with <strong>CI/CD</strong>, <strong>Docker</strong>, <strong>Terraform</strong>, and <strong>Shell Script</strong>",
      "exp.b4":
        "Service integration via <strong>API</strong>, <strong>Git</strong> versioning, documentation, and support for teams",
      "exp.background":
        "Background: ADS @ UNIP · Cloud @ Escola da Nuvem · AWS re/Start Graduate",
      "certs.eyebrow": "credentials",
      "certs.title": "Certifications",
      "contact.eyebrow": "contact",
      "contact.title": "Let's talk",
      "contact.lede":
        "Tech networking, collaboration, or a cloud, IaC, CI/CD, and automation project — get in touch.",
      "contact.connect": "Idea exchange, networking, and communities",
      "contact.consulting": "Cloud, Terraform, pipelines, and automation",
      "contact.collab": "Service integration, APIs, and continuous delivery",
      "contact.channels": "channels",
      "contact.email": "Email",
      "contact.cvLabel": "Resume",
      "contact.status": "<code>status</code> → open to connect",
      "footer.copy": "Guilherme Silva · Cloud & DevOps",
    },
  };

  const STORAGE_KEY = "gs-lang";

  const normalize = (value) => (value === "en" ? "en" : "pt-BR");

  const getInitialLang = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt-BR") return stored;
    return navigator.language?.toLowerCase().startsWith("en") ? "en" : "pt-BR";
  };

  let currentLang = getInitialLang();

  const t = (key) => messages[currentLang]?.[key] ?? messages["pt-BR"][key] ?? key;

  const applyCv = () => {
    const cv = CV[currentLang];
    const link = document.getElementById("cv-download");
    if (!link || !cv) return;
    link.href = cv.href;
    link.setAttribute("download", cv.filename);
    link.textContent = cv.label;
  };

  const applyText = () => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(key));
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t("meta.ogDescription"));

    applyCv();
  };

  const syncToggle = () => {
    const buttons = document.querySelectorAll("[data-lang-option]");
    buttons.forEach((btn) => {
      const lang = btn.getAttribute("data-lang-option");
      const active = lang === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    const group = document.querySelector(".lang-switch");
    if (group) {
      group.setAttribute("aria-label", t("lang.aria"));
    }

    const menuToggle = document.querySelector(".nav-toggle");
    if (menuToggle) {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-label", open ? t("nav.close") : t("nav.open"));
    }
  };

  const setLanguage = (lang) => {
    currentLang = normalize(lang);
    localStorage.setItem(STORAGE_KEY, currentLang);
    document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";
    applyText();
    syncToggle();
    document.dispatchEvent(
      new CustomEvent("languagechange", { detail: { lang: currentLang } })
    );
  };

  const bindToggle = () => {
    document.querySelectorAll("[data-lang-option]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang-option");
        if (!lang || lang === currentLang) return;
        setLanguage(lang);
      });
    });
  };

  const boot = () => {
    bindToggle();
    setLanguage(currentLang);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.SiteI18n = { setLanguage, getLanguage: () => currentLang, t };
})();
