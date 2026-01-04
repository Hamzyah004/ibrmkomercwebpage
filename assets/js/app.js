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

async function router() {
  const pathname = getRoute();
  const view = pathToView(pathname);

  // Layout + view content
  const html = renderLayout(await view());
  document.getElementById("app").innerHTML = html;

  setActiveNav();


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
}

window.addEventListener("hashchange", router);
window.addEventListener("popstate", router);
router();
