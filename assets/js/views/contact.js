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

        <button class="btn btn--primary btn--full" type="submit" style="margin-top: 18px; border: none;">Pošalji</button>
      </form>

      <aside class="contact__info">
        <div class="card card--soft">
          <h2>Kontakt podaci</h2>
          <p class="muted">Telefon: 035 617 346</p>
          <p class="muted">Email: ibemkomerc@gmail.com</p>
          <p class="muted">Adresa: Miljanovci Kalesija, BiH</p>
          <div class="row">
            <a class="btn btn--ghost" href="tel:+38735617346">Pozovi</a>
            <a class="btn btn--ghost" href="mailto:ibemkomerc@gmail.com">Email</a>
          </div>
        </div>

        <div class="card map">
          <h2>Lokacija</h2>
          <div class="map__placeholder">
            <div class="map-embed">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2847.6760262086214!2d18.839515!3d44.460314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDI3JzM3LjEiTiAxOMKwNTAnMjIuMyJF!5e0!3m2!1sen!2sba!4v1767530875651!5m2!1sen!2sba" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
  `;
}
