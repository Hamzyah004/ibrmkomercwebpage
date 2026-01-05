import { renderLayout } from "./components/layout.js";

import Home from "./views/home.js";
import About from "./views/about.js";
import Transport from "./views/transport.js";
import Sales from "./views/sales.js";
import Contact from "./views/contact.js";
import AdminLogin from "./views/admin.js";
import AdminPanel from "./views/adminpanel.js";
import NotFound from "./views/notfound.js";

const routes = {
  "/": Home,
  "/about": About,
  "/transport": Transport,
  "/sales": Sales,
  "/contact": Contact,
  "/admin": AdminLogin,
  "/admin/panel": AdminPanel,
};

function pathToView(path) {
  return routes[path] || NotFound;
}

function setActiveNav() {
  const route = window.location.hash.replace("#", "") || "/";
  const currentHref = "/#" + route;

  document.querySelectorAll(".nav__links [data-link]").forEach((a) => {
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
  if (p === "/index.html") return "/";
  if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
  return p;
};

function getRoute() {
  return normalizePath(window.location.hash.replace("#", "") || "/");
}

function initScrollTopButton() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

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

  onScroll();
}

function initVehicleModal() {
  const modal = document.getElementById("vehicleModal");
  const content = document.getElementById("vehicleModalContent");
  if (!modal || !content) return;

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

  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".vehicle");
    if (!card) return;
    if (e.target.closest("a, button")) return;
    open(card.outerHTML);
  });
}

/* =========================
   ADMIN INIT (Supabase Auth)
========================= */

function initAdminLogin() {
  const form = document.getElementById("adminLoginForm");
  if (!form) return;
  if (form.dataset.bound === "1") return;
  form.dataset.bound = "1";

  const err = document.getElementById("adminLoginError");

  // Ako je već ulogovan, preskoči login
  window.supabaseClient.auth.getSession().then(({ data }) => {
    if (data.session) window.location.hash = "#/admin/panel";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const username = String(fd.get("username") || "").trim();
    const password = String(fd.get("password") || "");

    // username -> email (Supabase Auth radi s emailom)
    const email = `${username}@ibemkomerc.local`;

    if (err) err.style.display = "none";

    const { error } = await window.supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (err) {
        err.textContent = "Pogrešan username ili password.";
        err.style.display = "block";
      }
      return;
    }

    window.location.hash = "#/admin/panel";
  });
}

function initAdminPanel() {
  const btn = document.getElementById("adminLogoutBtn");
  if (!btn) return;
  if (btn.dataset.bound === "1") return;
  btn.dataset.bound = "1";

  btn.addEventListener("click", async () => {
    await window.supabaseClient.auth.signOut();
    window.location.hash = "#/admin";
  });
}

/* =========================
   ROUTER
========================= */

async function router() {
  const pathname = getRoute();

  // Admin guard: blokira /admin/panel ako nema Supabase session
  if (pathname.startsWith("/admin") && pathname !== "/admin") {
    const { data } = await window.supabaseClient.auth.getSession();
    if (!data.session) {
      window.location.hash = "#/admin";
      return;
    }
  }

  const view = pathToView(pathname);

  const html = renderLayout(await view());
  document.getElementById("app").innerHTML = html;

  setActiveNav();
  initScrollTopButton();
  initVehicleModal();

  if (pathname === "/admin") initAdminLogin();
  if (pathname === "/admin/panel") initAdminPanel();

  // SPA links
  document.querySelectorAll("[data-link]").forEach((link) => {
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

    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Contact form demo
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Hvala! Poruka je poslana (demo). Poveži sa backendom ili form servisom."
      );
      contactForm.reset();
    });
  }

  window.scrollTo(0, 0);
}

/* =========================
   SUPABASE CLIENT (PASTE YOUR KEYS)
========================= */

const SUPABASE_URL = "https://mydyghfcjzadehvppcyq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZHlnaGZjanphZGVodnBwY3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2MjAzNTcsImV4cCI6MjA4MzE5NjM1N30.WDyTA7460ysB8WM1Lx7o9cCce6rfXSxMlveJVW_hjPs";

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* =========================
   BOOT
========================= */

window.addEventListener("hashchange", router);
window.addEventListener("popstate", router);
router();
