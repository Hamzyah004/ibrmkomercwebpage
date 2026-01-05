export default function AdminPanel() {
  setTimeout(initAdminPanel, 0);

  return `
    <section class="section">
      <div class="container admin">
        <div class="admin__card">
          <h1 class="admin__title">Admin panel</h1>
          <p class="admin__hint">Uspješno ste prijavljeni.</p>

          <button id="adminLogoutBtn" class="btn btn--danger">
            Odjava
          </button>
        </div>
      </div>
    </section>
  `;
}

async function initAdminPanel() {
  const btn = document.getElementById("adminLogoutBtn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    await window.supabaseClient.auth.signOut();
    location.hash = "#/admin";
  });
}
