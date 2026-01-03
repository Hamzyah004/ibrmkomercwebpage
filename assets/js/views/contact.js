export default async function Contact() {
  return `
  <section class="pagehead">
    <div class="container">
      <div class="kicker">Kontakt</div>
      <h1>Pošaljite upit — odgovaramo brzo.</h1>
      <p class="lead muted">
        Popunite formu ili nas kontaktirajte direktno. (Tekst i podatke zamijeni.)
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container contact">
      <form class="card form" data-contact-form>
        <h2>Kontakt forma</h2>
        <div class="grid grid--2">
          <label>
            Ime i prezime
            <input type="text" placeholder="Npr. Mujo Mujić" required>
          </label>
          <label>
            Telefon
            <input type="tel" placeholder="+387 6X XXX XXX">
          </label>
        </div>

        <label>
          Email
          <input type="email" placeholder="email@domena.com" required>
        </label>

        <label>
          Tema
          <select>
            <option>Transport – ponuda</option>
            <option>Prodaja kamiona – upit</option>
            <option>Partnerstvo / saradnja</option>
            <option>Ostalo</option>
          </select>
        </label>

        <label>
          Poruka
          <textarea rows="6" placeholder="Napišite relaciju, tip tereta, termin ili zahtjev za vozilo..."></textarea>
        </label>

        <button class="btn btn--primary btn--full" type="submit">Pošalji</button>
        <p class="muted tiny">* Ovo je demo submit. Poveži kasnije sa backendom ili form servisom.</p>
      </form>

      <aside class="contact__info">
        <div class="card card--soft">
          <h2>Kontakt podaci</h2>
          <p class="muted">Telefon: +387 61 123 456</p>
          <p class="muted">Email: info@vasa-firma.ba</p>
          <p class="muted">Adresa: Sarajevo, BiH</p>
          <div class="row">
            <a class="btn btn--ghost" href="tel:+38761123456">Pozovi</a>
            <a class="btn btn--ghost" href="mailto:info@vasa-firma.ba">Email</a>
          </div>
        </div>

        <div class="card map">
          <h2>Lokacija</h2>
          <div class="map__placeholder">
            <p class="muted">Ovdje ubaci Google Maps embed (iframe) kad budeš htio.</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
  `;
}
