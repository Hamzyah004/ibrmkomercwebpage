export default function AdminLogin() {
  // HTML
  setTimeout(initAdminLogin, 0);

  return `
    <section class="section">
      <div class="container admin">
        <div class="admin__card">
          <h1 class="admin__title">Admin prijava</h1>
          <p class="admin__hint">Unesite pristupne podatke za upravljanje sadržajem.</p>

          <form id="adminLoginForm" class="admin__form">
            <label class="field">
              <span>Username</span>
              <input name="username" type="text" autocomplete="username" required />
            </label>

            <label class="field">
              <span>Password</span>
              <input name="password" type="password" autocomplete="current-password" required />
            </label>

            <button class="btn btn--primary" type="submit">Prijavi se</button>
            <p id="adminLoginError" class="admin__error" style="display:none;"></p>
          </form>
        </div>
      </div>
    </section>
  `;
}

/* =========================
   INIT LOGIN (Supabase)
========================= */
async function initAdminLogin() {
  const form = document.getElementById("adminLoginForm");
  if (!form) return;

  const errorEl = document.getElementById("adminLoginError");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value;

    // username → fake email (kao što smo dogovorili)
    const email = `${username}@ibemkomerc.local`;

    errorEl.style.display = "none";

    const { error } =
      await window.supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      errorEl.textContent = "Pogrešan username ili lozinka";
      errorEl.style.display = "block";
      return;
    }

    // uspješan login
    location.hash = "#/admin/panel";
  });
}
