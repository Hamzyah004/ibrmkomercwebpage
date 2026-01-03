export default async function NotFound() {
  return `
  <section class="pagehead">
    <div class="container">
      <div class="kicker">404</div>
      <h1>Stranica nije pronađena.</h1>
      <p class="lead muted">Link je možda pogrešan ili je stranica premještena.</p>
      <div class="row">
        <a class="btn btn--primary" href="/" data-link>Nazad na Home</a>
        <a class="btn btn--ghost" href="/contact" data-link>Kontakt</a>
      </div>
    </div>
  </section>
  `;
}
