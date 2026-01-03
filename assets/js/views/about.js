export default async function About() {
  return `
  <section class="pagehead">
    <div class="container">
      <div class="kicker">O nama</div>
      <h1>Gradimo povjerenje kroz pouzdan transport i kvalitetna vozila.</h1>
      <p class="lead muted">
        Ovdje ubaciš svoju priču: kada je firma osnovana, gdje radite, šta vas izdvaja.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container grid grid--3">
      <div class="card card--soft">
        <h3>Misija</h3>
        <p>Omogućiti klijentima sigurnu i brzu logistiku uz transparentne uslove.</p>
      </div>
      <div class="card card--soft">
        <h3>Vizija</h3>
        <p>Biti prepoznatljiv regionalni partner za transport i prodaju komercijalnih vozila.</p>
      </div>
      <div class="card card--soft">
        <h3>Vrijednosti</h3>
        <p>Odgovornost, tačnost, kvalitet usluge i dugoročna saradnja.</p>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container split">
      <div>
        <h2>Naš tim i vozni park</h2>
        <p class="muted">
          Opiši tim, certifikate, broj vozila, tipove (šleperi, hladnjače, kiperi),
          iskustvo vozača i sigurnosne procedure.
        </p>
        <div class="checks">
          <div class="check">Redovno održavanje i kontrola</div>
          <div class="check">Praćenje pošiljke (po potrebi)</div>
          <div class="check">Fleksibilnost za specifične zahtjeve</div>
        </div>
      </div>

      <div class="panel">
        <h3>Brojke (primjeri)</h3>
        <div class="kv"><span>Godina osnivanja</span><strong>2014</strong></div>
        <div class="kv"><span>Vozila</span><strong>12</strong></div>
        <div class="kv"><span>Mjesečne isporuke</span><strong>40+</strong></div>
        <p class="muted tiny">* Izmijeni brojke kako odgovara.</p>
      </div>
    </div>
  </section>
  `;
}
