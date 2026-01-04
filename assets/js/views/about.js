export default async function About() {
  return `
  <section class="pagehead">
    <div class="container">
      <div class="kicker">O nama</div>
      <h1>Gradimo povjerenje kroz pouzdan transport i kvalitetna vozila.</h1>
      <div class="container hero__grid">
        <p class="lead muted">
          Želite siguran i pouzdan prevoz robe?<br><br>
          Na pravom ste mjestu!<br><br>
          IBEM KOMERC d.o.o. je privatna firma osnovana 2002. godine, sa sjedištem u Kalesiji. Bavimo se medjunarodnim transportom robe kako u mnoge europske zemlje 
          tako i izvan njenih granica. Trenutno posjedujemo 10 aktivnih šlepera, sa standard i mega prikolicama. Svi kamioni su euro 6 norme, 
          a sva priključna vozila su mladja od 5 godina. O sigurnosti vaše robe, ne morate brinuti jer je ista kasko osigurana.<br><br>
          Pored transporta robe, u našem vlasništvu se nalazi benzinska pumpa, na kojoj se toči najkvalitetnije IsoMax gorivo i spadamo u velike Hifa partnere.
          Takodjer se bavimo prodajom svih motornih i priključnih vozila.
        </p>
        <div class="hero__media">
          <img
            src="assets/img/hero-truck.jpg"
            alt="Vozni park i transport"
            loading="eager"
          />
        </div>
      </div>
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

<div class="container banzinskacontainer">
  <h1 style="margin-top: 36px; margin-bottom: 54px;">Benzinska pumpa</h1>
  <div class="container hero__grid">
    <div class="hero__media">
      <img
        src="assets/img/hero-truck.jpg"
        alt="Vozni park i transport"
        loading="eager"
      />
    </div>
    <p class="lead muted aboutdiv">
      Naša firma posjeduje benzinsku pumpu, koja je se može pohvaliti sa najkvalitetnijim IsoMax gorivom i dugogodišnjom suradnjom sa Hifa oil-om, 
      te spadamo u njihove velike partnere. U sastavu pumpe se nalazi market u kojem se možete odmoriti i osvježiti, a na usluzi će Vam biti naši prijatni uposlenici.
    </p>
  </div>
</div>

  <section class="section section--alt">
    <div class="container split">
      <div>
        <h2 class="nastim">Naš tim i vozni park</h2>
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

      <div class="panel panelbrojke">
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
