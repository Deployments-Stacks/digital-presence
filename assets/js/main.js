(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const header = document.querySelector(".site-header");
  const heroVisual = document.querySelector(".hero-visual");
  const hero = document.getElementById("top");
  const navLinks = [...document.querySelectorAll(".nav a, .nav-mobile a")];
  const sections = ["services", "stack", "experience", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  let ticking = false;

  const updateScrollUi = () => {
    const y = window.scrollY;
    header?.classList.toggle("is-scrolled", y > 12);

    if (heroVisual && hero) {
      const range = Math.max(hero.offsetHeight * 0.65, 1);
      const progress = Math.min(Math.max(y / range, 0), 1);
      heroVisual.style.setProperty("--hero-fade", String(1 - progress * 0.92));
      heroVisual.style.setProperty("--hero-shift", `${progress * -48}px`);
    }

    const marker = y + window.innerHeight * 0.35;
    let activeId = null;
    for (const section of sections) {
      if (section.offsetTop <= marker) activeId = section.id;
    }

    const doc = document.documentElement;
    const nearBottom = y + window.innerHeight >= doc.scrollHeight - 120;
    if (nearBottom) activeId = "contact";

    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("is-active", activeId !== null && href === `#${activeId}`);
    });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateScrollUi();
      ticking = false;
    });
  };

  updateScrollUi();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("nav-mobile");

  const closeMobile = () => {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  };

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    const nextOpen = !open;
    toggle.setAttribute("aria-expanded", String(nextOpen));
    mobileNav.hidden = open;
    if (window.SiteI18n?.t) {
      toggle.setAttribute(
        "aria-label",
        window.SiteI18n.t(nextOpen ? "nav.close" : "nav.open")
      );
    }
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobile);
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const terminalLines = [
    [{ text: "# current.status", className: "t-dim" }],
    [
      { text: "role", className: "t-key" },
      { text: "=" },
      { text: '"Cloud & DevOps Engineer"', className: "t-accent" },
    ],
    [
      { text: "focus", className: "t-key" },
      { text: "=" },
      { text: '"IaC · CI/CD · Automation"', className: "t-accent" },
    ],
    [
      { text: "cloud", className: "t-key" },
      { text: "=" },
      { text: '"AWS (+ GCP)"', className: "t-accent" },
    ],
    [
      { text: "iac", className: "t-key" },
      { text: "=" },
      { text: '"Terraform"', className: "t-accent" },
    ],
    [
      { text: "runtime", className: "t-key" },
      { text: "=" },
      { text: '"Docker · Linux · Python"', className: "t-accent" },
    ],
    [
      { text: "delivery", className: "t-key" },
      { text: "=" },
      { text: '"pipelines · deploys · APIs"', className: "t-accent" },
    ],
    [
      { text: "certs", className: "t-key" },
      { text: "=" },
      { text: '"SAA-C03 · CLF-C02"', className: "t-warn" },
    ],
    [
      { text: "open_to", className: "t-key" },
      { text: "=" },
      { text: '"connect | consulting | collab"', className: "t-ok" },
    ],
    [{ text: "# ready.", className: "t-dim" }],
  ];

  const renderLineHtml = (segments) =>
    segments
      .map((segment) => {
        const safe = segment.text
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;");
        return segment.className
          ? `<span class="${segment.className}">${safe}</span>`
          : safe;
      })
      .join("");

  const typeTerminal = async () => {
    const terminal = document.getElementById("hero-terminal");
    const output = terminal?.querySelector(".t-output");
    const cursor = terminal?.querySelector(".t-cursor");
    if (!terminal || !output || !cursor) return;

    const fullHtml = terminalLines.map(renderLineHtml).join("\n");

    if (reduceMotion) {
      output.innerHTML = fullHtml;
      return;
    }

    cursor.classList.add("is-typing");
    output.innerHTML = "";

    await new Promise((resolve) => setTimeout(resolve, 700));

    for (let lineIndex = 0; lineIndex < terminalLines.length; lineIndex += 1) {
      const segments = terminalLines[lineIndex];
      const plain = segments.map((segment) => segment.text).join("");

      for (let charIndex = 1; charIndex <= plain.length; charIndex += 1) {
        let remaining = charIndex;
        const partial = [];

        for (const segment of segments) {
          if (remaining <= 0) break;
          const take = Math.min(segment.text.length, remaining);
          partial.push({
            text: segment.text.slice(0, take),
            className: segment.className,
          });
          remaining -= take;
        }

        const completed = terminalLines.slice(0, lineIndex).map(renderLineHtml);
        completed.push(renderLineHtml(partial));
        output.innerHTML = completed.join("\n");

        const pause = plain[charIndex - 1] === " " ? 18 : 22 + Math.random() * 18;
        await new Promise((resolve) => setTimeout(resolve, pause));
      }

      await new Promise((resolve) => setTimeout(resolve, 90));
    }

    output.innerHTML = fullHtml;
    cursor.classList.remove("is-typing");
  };

  typeTerminal();

  if (reduceMotion) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
