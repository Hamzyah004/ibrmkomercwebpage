export function renderLayout(content) {
  return `
    <header class="header">
      <div class="container header__inner">
        <a class="brand" href="/" data-link>
          <span class="brand__mark">TK</span>
          <span class="brand__text">
            <strong>Ibem Komerc</strong>
            <small>Prevoz • Prodaja • Benzinska pumpa</small>
          </span>
        </a>

        <nav class="nav">
          <button class="nav__btn" data-menu-btn aria-expanded="false" aria-label="Otvori meni">
            <span></span><span></span><span></span>
          </button>

          <div class="nav__links" data-menu>
            <a href="/#/" data-link>Home</a>
            <a href="/#/about" data-link>O nama</a>
            <a href="/#/transport" data-link>Transport</a>
            <a href="/#/sales" data-link>Prodaja</a>
            <a href="/#/contact" data-link>Kontakt</a>
            <a class="btn btn--primary" href="/#/contact" data-link>Zatraži ponudu</a>
          </div>
        </nav>
      </div>
    </header>

    <main>
      ${content}
    </main>

    <footer class="footer">
      <div class="container footer__grid">
        <div>
          <div class="footer__brand">
            <span class="brand__mark">TK</span>
            <div>
              <strong>Ibem Komerc</strong>
              <p class="muted">Pouzdan partner za logistiku i vozila.</p>
            </div>
          </div>
          <div class="footer__badges">
            <span class="badge">24/7 Podrška</span>
            <span class="badge">EU i TR Transport</span>
            <span class="badge">Dokumentacija</span>
          </div>
        </div>

        <div>
          <h4>Brzi linkovi</h4>
          <a href="/#/about" data-link>O nama</a>
          <a href="/#/transport" data-link>Transport</a>
          <a href="/#/sales" data-link>Prodaja kamiona</a>
          <a href="/#/contact" data-link>Kontakt</a>
        </div>

        <div>
          <h4>Kontakt</h4>
          <p class="muted">Telefon: 035 617-346</p>
          <p class="muted">Email: ibemkomerc@gmail.com</p>
          <p class="muted">Adresa: Miljanovci Kalesija, BiH</p>
        </div>
      </div>

      <div class="container footer__bottom">
        <small class="muted">© ${new Date().getFullYear()} Ibem Komerc. Sva prava zadržana.</small>
      </div>
    </footer>
  `;
}
