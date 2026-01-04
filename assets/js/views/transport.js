export default async function Transport() {
  return `
  <section class="pagehead">
    <div class="container">
      <div class="kicker">Transport</div>
      <h1>Logistička rješenja za domaći i međunarodni transport.</h1>
      <p class="lead muted">
        IBEM KOMERC d.o.o. je firma koja se bavi prevozom robe dugi niz godina na području: Italije, Španije, Portugala, Francuske, Madjarske, 
        Rumunije, Bugarske i Turske. Uža specijalnost nam je zbirni transport iz Španije, Portugala i Turske. Od dana nastanka pa do danas, 
        zadovoljni klijenti su dokaz našeg uspješnog poslovanja. Za razliku od drugih kompanija mi se možemo pohvaliti iskrenošću, poštenjem te 
        profesionalnosti svih uposlenika. Pored kasko osiguranja vaše robe, koju prevozimo, naši kamioni su euro 6 norme, što dodatno povećava sigurnost robe.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container grid grid--3">
      <div class="feature feature--icon">
        <div class="icon">🚚</div>
        <h3>Generalni teret</h3>
        <p>Paletna roba, industrijski materijal i standardne pošiljke.</p>
      </div>
      <div class="feature feature--icon">
        <div class="icon">🧊</div>
        <h3>Hladnjača</h3>
        <p>Transport sa kontrolom temperature (po dogovoru).</p>
      </div>
      <div class="feature feature--icon">
        <div class="icon">🏗️</div>
        <h3>Građevinski materijal</h3>
        <p>Kiper i specijalni prevoz za gradilišta i projekte.</p>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section__head">
        <h2>Kako radimo</h2>
        <p class="muted">Standardizovan proces koji smanjuje rizik i štedi vrijeme.</p>
      </div>

      <div class="timeline">
        <div class="tl">
          <h3>Planiranje</h3>
          <p>Definišemo relaciju, termin, vrstu tereta i potrebnu opremu.</p>
        </div>
        <div class="tl">
          <h3>Dokumentacija</h3>
          <p>Priprema papira, carina (po potrebi) i komunikacija sa klijentom.</p>
        </div>
        <div class="tl">
          <h3>Prevoz i isporuka</h3>
          <p>Siguran transport uz izvještaj i potvrdu isporuke.</p>
        </div>
      </div>

      <div class="row">
        <a class="btn btn--primary" href="/#/contact" data-link>Zatraži ponudu</a>
        <a class="btn btn--ghost" href="/#/sales" data-link>Pogledaj vozila</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="faq">
        <h2>FAQ</h2>

        <details>
          <summary>Da li radite EU transport?</summary>
          <p>Da, prema dogovoru. Navedite relaciju i termin pa ćemo poslati ponudu.</p>
        </details>

        <details>
          <summary>Da li nudite osiguranje pošiljke?</summary>
          <p>Može se ugovoriti u zavisnosti od tereta i uslova transporta.</p>
        </details>

        <details>
          <summary>Kako dobijam ponudu?</summary>
          <p>Pošaljite informacije kroz kontakt formu ili telefonom, odgovor u roku 24h.</p>
        </details>
      </div>
    </div>
  </section>
  `;
}
