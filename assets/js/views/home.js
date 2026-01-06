export default async function Home() {
  return `
  <section class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <div class="kicker">Pouzdan partner za logistiku i vozila</div>
        <h1>Transport, logistika i prodaja kamiona — sve na jednom mjestu.</h1>
        <p class="lead">
          Siguran prevoz robe u EU i šire, transparentne cijene i profesionalna podrška.
          Također nudimo provjerena vozila spremna za posao.
        </p>

        <div class="hero__cta">
          <a class="btn btn--primary" href="/#/contact" data-link>Zatraži ponudu</a>
          <a class="btn btn--ghost" href="/#/transport" data-link>Pogledaj usluge</a>
        </div>

        <div class="stats">
          <div class="stat">
            <strong>10+ godina</strong>
            <span>iskustva</span>
          </div>
          <div class="stat">
            <strong>500+</strong>
            <span>isporuka godišnje</span>
          </div>
          <div class="stat">
            <strong>24/7</strong>
            <span>podrška</span>
          </div>
        </div>
      </div>
      <div class="hero__media">
        <img
          src="assets/img/hero-truck.jpg"
          alt="Vozni park i transport"
          loading="eager"
          style="object-position: 20% center;"
        />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section__head">
        <h2>Zašto klijenti biraju nas</h2>
        <p class="muted">Jasni procesi, sigurna isporuka, i kvalitetna vozila.</p>
      </div>

      <div class="grid grid--3">
        <div class="feature">
          <h3>Transparentno</h3>
          <p>Ugovor, rokovi i cijena jasno definisani prije polaska.</p>
        </div>
        <div class="feature">
          <h3>Sigurno</h3>
          <p>Praćenje isporuke, osiguranje i odgovorno rukovanje robom.</p>
        </div>
        <div class="feature">
          <h3>Brzo</h3>
          <p>Efikasna logistika i optimizovane rute za uštedu vremena.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container split">
      <div>
        <h2 class="transport__info">Transport koji se prilagođava vašem poslu</h2>
        <p class="muted">
          Prevoz generalnog tereta, paletne robe, građevinskog materijala i specijalnih zahtjeva.
          Fokusirani smo na pouzdanost i dugoročnu saradnju.
        </p>
        <div class="checks">
          <div class="check">EU dokumentacija i carinske procedure</div>
          <div class="check">Dogovoreni termini i izvještaji</div>
          <div class="check">Podrška za stalne klijente</div>
        </div>
        <div class="row">
          <a class="btn btn--primary" href="/#/transport" data-link>Detalji usluge</a>
          <a class="btn btn--ghost" href="/#/sales" data-link>Vozila u ponudi</a>
        </div>
      </div>
      <div class="hero__media">
        <img
          src="assets/img/home-trucks.jpeg"
          alt="Vozni park i transport"
          loading="eager"
          style="object-position: 10% center;"
        />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section__head">
        <h2>Proces saradnje</h2>
        <p class="muted">3 koraka do isporuke ili kupovine vozila.</p>
      </div>

      <div class="steps">
        <div class="step">
          <div class="step__num">1</div>
          <h3>Upit</h3>
          <p>Pošaljite relaciju, vrstu tereta ili zahtjev za vozilo.</p>
        </div>
        <div class="step">
          <div class="step__num">2</div>
          <h3>Ponuda</h3>
          <p>Dobijate jasnu ponudu i dogovaramo termin.</p>
        </div>
        <div class="step">
          <div class="step__num">3</div>
          <h3>Realizacija</h3>
          <p>Prevoz ili isporuka vozila uz kompletnu dokumentaciju.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="container cta__inner">
      <div>
        <h2>Treba vam ponuda danas?</h2>
        <p class="muted">Kontaktirajte nas i dobijte odgovor u roku 24h.</p>
      </div>
      <div class="cta__actions">
        <a class="btn btn--primary" href="/#/contact" data-link>Zatraži ponudu</a>
        <a class="btn btn--ghost" href="/#/about" data-link>Ko smo mi</a>
      </div>
    </div>
  </section>
  `;
}
