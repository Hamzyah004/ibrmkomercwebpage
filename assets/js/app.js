import { renderLayout } from "./components/layout.js";

import Home from "./views/home.js";
import About from "./views/about.js";
import Transport from "./views/transport.js";
import Sales from "./views/sales.js";
import Contact from "./views/contact.js";
import NotFound from "./views/notfound.js";

const routes = {
  "/": Home,
  "/about": About,
  "/transport": Transport,
  "/sales": Sales,
  "/contact": Contact
};

function pathToView(path) {
  return routes[path] || NotFound;
}

function setActiveNav() {
  const route = (window.location.hash.replace("#", "") || "/"); // npr "/about"
  const currentHref = "/#" + route; // npr "/#/about" ili "/#/"

  document.querySelectorAll(".nav__links [data-link]").forEach(a => {
    const href = a.getAttribute("href");
    const isActive = href === currentHref;
    a.classList.toggle("active", isActive);
  });
}

function navigateTo(url) {
  history.pushState(null, "", url);
  router();
}

const normalizePath = (p) => {
  // ako je /index.html, tretiraj kao /
  if (p === "/index.html") return "/";
  // ukloni trailing slash (osim za root)
  if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
  return p;
};

function getRoute() {
  return normalizePath(window.location.hash.replace("#", "") || "/");
}

function initScrollTopButton() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  // spriječi duplo vezanje na svaku navigaciju
  if (btn.dataset.bound === "1") return;
  btn.dataset.bound = "1";

  const onScroll = () => {
    if (window.scrollY > 300) btn.classList.add("show");
    else btn.classList.remove("show");
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  onScroll(); // set initial state
}

function initVehicleModal() {
  const modal = document.getElementById("vehicleModal");
  const content = document.getElementById("vehicleModalContent");
  if (!modal || !content) return;

  // Ne veži više puta
  if (modal.dataset.bound === "1") return;
  modal.dataset.bound = "1";

  const open = (html) => {
    content.innerHTML = html;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    content.innerHTML = "";
    document.body.style.overflow = "";
  };

  // Close on X or backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) close();
  });

  // Close on ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  // Delegate: klik na vehicle card otvara modal
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".vehicle");
    if (!card) return;

    // Ako klikne na link/dugme unutar kartice, NE otvaraj modal
    if (e.target.closest("a, button")) return;

    open(card.outerHTML);
  });
}



async function router() {
  const pathname = getRoute();
  const view = pathToView(pathname);

  // Layout + view content
  const html = renderLayout(await view());
  document.getElementById("app").innerHTML = html;

  setActiveNav();

  initScrollTopButton();

  initVehicleModal();


  // SPA links
  document.querySelectorAll("[data-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(link.getAttribute("href"));
    });
  });

  // Mobile nav toggle
  const btn = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });

    // close menu after click
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }));
  }

  // Simple form handler (demo)
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Hvala! Poruka je poslana (demo). Poveži sa backendom ili form servisom.");
      contactForm.reset();
    });
  }
  window.scrollTo(0, 0);
}




window.addEventListener("hashchange", router);
window.addEventListener("popstate", router);
router();
