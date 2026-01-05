export default async function Sales() {
  setTimeout(initSales, 0);

  return `
  <section class="pagehead">
    <div class="container">
      <div class="kicker">Prodaja</div>
      <h1>Provjerena vozila spremna za posao.</h1>
      <p class="lead muted">Trenutno u prodaji:</p>
    </div>
  </section>

  <section class="section prodaja">
    <div class="container">

      <!-- Admin add form (sakriven dok ne provjerimo session) -->
      <div id="adminAddWrap" style="display:none; margin-bottom:18px;">
        <div class="card" style="padding:16px;">
          <h3 style="margin:0 0 10px;">Dodaj vozilo</h3>

          <form id="addVehicleForm" class="admin__form">
            <label class="field">
              <span>Naslov</span>
              <input name="title" required />
            </label>

            <label class="field">
              <span>Godina</span>
              <input name="year" type="number" min="1900" max="2100" />
            </label>

            <label class="field">
              <span>Euro norma</span>
              <input name="euro_norm" placeholder="npr. 6" />
            </label>

            <label class="field" style="display:flex; gap:10px; align-items:center;">
              <input name="automatic" type="checkbox" />
              <span>Automatik</span>
            </label>

            <label class="field">
              <span>Opis</span>
              <textarea name="description" rows="5" required></textarea>
            </label>

            <label class="field">
              <span>Slika</span>
              <input name="image" type="file" accept="image/*" required />
            </label>

            <button class="btn btn--primary" type="submit">Dodaj vozilo</button>
            <p id="addVehicleMsg" class="muted" style="margin-top:10px;"></p>
          </form>
        </div>

        <hr style="margin:18px 0; opacity:.2;" />
      </div>

      <div id="salesGrid" class="grid grid--3"></div>
      <p id="salesStatus" class="muted" style="margin-top:14px;"></p>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container split">
      <div>
        <h2>Pomoć pri kupovini</h2>
        <p class="muted">
          Nudimo savjetovanje, pregled vozila, pripremu dokumentacije i opcije finansiranja (ako nudiš).
        </p>
        <div class="checks">
          <div class="check">Provjera stanja i historije</div>
          <div class="check">Dokumentacija i prijenos</div>
          <div class="check">Dogovor oko isporuke</div>
        </div>
      </div>

      <div class="panel" style="margin-bottom:0px; margin-top: auto;">
        <h3>Trebate određeni model?</h3>
        <p class="muted">Pošalji nam budžet, godište i namjenu — predložićemo opcije.</p>
        <a class="btn btn--primary btn--full" href="/#/contact" data-link>Pošalji upit</a>
      </div>
    </div>
  </section>
  `;
}

/* =========================
   VIEW HELPERS
========================= */

function vehicleCard(v, isAdmin) {
  const title = escapeHtml(v.title || "");
  const metaParts = [];
  if (v.year) metaParts.push(String(v.year));
  if (v.euro_norm) metaParts.push(`Euro ${escapeHtml(v.euro_norm)}`);
  if (v.automatic) metaParts.push("Automat");
  const meta = metaParts.join(" • ");

  const img = v.image_url || "assets/img/vehicles/placeholder.jpg";
  const desc = escapeHtml(v.description || "");
  const price = v.price || "Kontakt za cijenu";

  return `
    <article class="card vehicle" data-id="${v.id}">
      <div class="vehicle__img">
        <img src="${img}" alt="${title}">
      </div>

      <div class="vehicle__body">
        <h3>${title}</h3>
        <p class="muted">${meta}</p>
        <p class="vehicle__desc">${desc}</p>

        <div class="vehicle__bottom" style="gap:10px;">
          <span class="price">${escapeHtml(price)}</span>
          <div style="display:flex; gap:8px; align-items:center;">
            <a class="btn btn--ghost" href="/#/contact" data-link>Upit</a>
            ${
              isAdmin
                ? `<button class="btn btn--ghost" type="button" data-admin-delete="${v.id}">Obriši</button>`
                : ``
            }
          </div>
        </div>
      </div>
    </article>
  `;
}

// mali helper da ne ubaciš slučajno HTML kroz bazu
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================
   DATA LOAD + ADMIN ACTIONS
========================= */

async function initSales() {
  const grid = document.getElementById("salesGrid");
  const status = document.getElementById("salesStatus");
  if (!grid || !status) return;

  // Provjeri da li je admin (ulogovan)
  const { data: sessData } = await window.supabaseClient.auth.getSession();
  const isAdmin = !!sessData.session;

  // Ako je admin, pokaži formu
  const adminWrap = document.getElementById("adminAddWrap");
  if (adminWrap && isAdmin) adminWrap.style.display = "block";

  // Učitaj i renderuj
  await loadAndRenderVehicles(isAdmin);

  // Bind: add form (korak 10)
  if (isAdmin) setupAdminAddVehicle(isAdmin);

  // Bind: delete (korak 11) - delegate
  if (isAdmin) setupAdminDelete(isAdmin);
}

async function loadAndRenderVehicles(isAdmin) {
  const grid = document.getElementById("salesGrid");
  const status = document.getElementById("salesStatus");
  if (!grid || !status) return;

  status.textContent = "Učitavanje vozila...";
  grid.innerHTML = "";

  const { data, error } = await window.supabaseClient
    .from("vehicles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    status.textContent = "Greška pri učitavanju vozila.";
    console.error(error);
    return;
  }

  if (!data || data.length === 0) {
    status.textContent = "Trenutno nema vozila u prodaji.";
    return;
  }

  status.textContent = "";
  grid.innerHTML = data.map((v) => vehicleCard(v, isAdmin)).join("");
}

/* ====== KORAK 10: ADD + UPLOAD ====== */
function setupAdminAddVehicle(isAdmin) {
  const form = document.getElementById("addVehicleForm");
  const msg = document.getElementById("addVehicleMsg");
  if (!form) return;

  if (form.dataset.bound === "1") return;
  form.dataset.bound = "1";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (msg) msg.textContent = "Dodavanje...";

    try {
      const fd = new FormData(form);

      const title = String(fd.get("title") || "").trim();
      const yearRaw = String(fd.get("year") || "").trim();
      const year = yearRaw ? Number(yearRaw) : null;
      const euro_norm = String(fd.get("euro_norm") || "").trim() || null;
      const automatic = fd.get("automatic") === "on";
      const description = String(fd.get("description") || "").trim();
      const file = fd.get("image");

      if (!title || !description || !(file instanceof File) || !file.name) {
        throw new Error("Popuni sva obavezna polja i dodaj sliku.");
      }

      // 1) upload slike u bucket "vehicles"
      const safeName = file.name.replaceAll(" ", "_");
      const filePath = `${Date.now()}_${safeName}`;

      const { error: upErr } = await window.supabaseClient
        .storage
        .from("vehicles")
        .upload(filePath, file);

      if (upErr) throw upErr;

      // 2) public URL slike
      const { data: pub } = window.supabaseClient
        .storage
        .from("vehicles")
        .getPublicUrl(filePath);

      const image_url = pub.publicUrl;

      // 3) insert u tabelu
      const vehicle = { title, year, euro_norm, automatic, description, image_url };

      const { error } = await window.supabaseClient
        .from("vehicles")
        .insert(vehicle);

      if (error) throw error;

      if (msg) msg.textContent = "Vozilo dodano ✅";
      form.reset();

      // refresh liste
      await loadAndRenderVehicles(isAdmin);
    } catch (err) {
      console.error(err);
      if (msg) msg.textContent = `Greška: ${err.message || "Neuspješno dodavanje."}`;
    }
  });
}

/* ====== KORAK 11: DELETE ====== */
function setupAdminDelete(isAdmin) {
  const grid = document.getElementById("salesGrid");
  if (!grid) return;

  if (grid.dataset.boundDelete === "1") return;
  grid.dataset.boundDelete = "1";

  grid.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-admin-delete]");
    if (!btn) return;

    const id = btn.getAttribute("data-admin-delete");
    if (!id) return;

    const ok = confirm("Obrisati ovo vozilo?");
    if (!ok) return;

    try {
      const { error } = await window.supabaseClient
        .from("vehicles")
        .delete()
        .eq("id", id);

      if (error) throw error;

      await loadAndRenderVehicles(isAdmin);
    } catch (err) {
      console.error(err);
      alert("Greška pri brisanju vozila.");
    }
  });
}
