export default async function Sales() {
  return `
  <section class="pagehead">
    <div class="container">
      <div class="kicker">Prodaja</div>
      <h1>Provjerena komercijalna vozila spremna za posao.</h1>
      <p class="lead muted">
        Ovdje ubaciš realne modele, slike i cijene. Ovo su demo kartice.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container grid grid--3">
      ${vehicleCard("MAN TGX 18.500", "2018 • Euro 6 • Automat", "Kontakt za cijenu", "Odlično stanje, servisna historija, spreman za registraciju.")}
      ${vehicleCard("Mercedes Actros 1845", "2017 • Euro 6 • Retarder", "Kontakt za cijenu", "Pouzdan za duge relacije, čist i uredan, moguć pregled.")}
      ${vehicleCard("Volvo FH 460", "2019 • Euro 6 • I-Shift", "Kontakt za cijenu", "Top oprema, uvoz, kompletna dokumentacija.")}
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
          <div class="check">Provjera stanja i istorije</div>
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

function vehicleCard(title, meta, price, desc) {
  return `
    <article class="card vehicle">
      <div class="vehicle__img" aria-hidden="true"></div>
      <div class="vehicle__body">
        <h3>${title}</h3>
        <p class="muted">${meta}</p>
        <p>${desc}</p>
        <div class="vehicle__bottom">
          <span class="price">${price}</span>
          <a class="btn btn--ghost" href="/#/contact" data-link>Upit</a>
        </div>
      </div>
    </article>
  `;
}
