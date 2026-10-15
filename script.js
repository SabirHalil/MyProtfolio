// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", String(open));
}

hamburger.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Theme toggle (initial theme is set inline in <head> to avoid a flash)
const root = document.documentElement;

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// Header border on scroll
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Active nav link
const links = [...navLinks.querySelectorAll("a")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
links.forEach((l) => {
  const section = document.querySelector(l.getAttribute("href"));
  if (section) sectionObserver.observe(section);
});

document.getElementById("year").textContent = new Date().getFullYear();

// Language switcher — English source text is captured from the page itself
const i18nEls = [...document.querySelectorAll("[data-i18n]")];
const english = new Map(i18nEls.map((el) => [el, el.innerHTML]));
const englishTitle = document.title;
const langButtons = document.querySelectorAll(".lang-switch button");

function setLang(lang) {
  const dict = TRANSLATIONS[lang] || {};
  i18nEls.forEach((el) => {
    el.innerHTML = dict[el.dataset.i18n] ?? english.get(el);
  });
  document.title = dict["meta.title"] ?? englishTitle;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

langButtons.forEach((b) =>
  b.addEventListener("click", () => {
    setLang(b.dataset.lang);
    try {
      localStorage.setItem("lang", b.dataset.lang);
    } catch (e) {}
  })
);

setLang(root.lang);
