export default async function Sales() {
  return `
  <section class="pagehead">
    <div class="container">
      <div class="kicker">Prodaja</div>
      <h1>Provjerena vozila spremna za posao.</h1>
      <p class="lead muted">
        Trenutno u prodaji:
      </p>
    </div>
  </section>

  <section class="section prodaja">
    <div class="container grid grid--3">
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto2.jpeg",
        "MERCEDES ACTROS 1848 MEGA",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 1848 2016GOD MEGA GIGA SPACE KABINA RETARDER DISTANCER ALU FELGE STAND KLIMA SPUR ASISTENCIJA FULL OPREMA JAKO DOBRO STANJE KAMION U POSLU BEZ IKAKVOG ULAGANJA 875 000 ORGINALNIH KILOMETARA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto3.jpeg",
        "TANDEM PRIKOLICA",
        "2014",
        "Kontakt za cijenu",
        "NA PRODAJU KOTSCHENREUTHER 2014. GOD PROIZVODNJE TROSTRANI ROLO POCINCANA SASIJA NOVA CERADA UVOZ NJEMACKA JAKO DOBRO STANJE"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto4.jpeg",
        "PRIKOLICA KRONE",
        "2016",
        "Kontakt za cijenu",
        "NA PRODAJU KRONE PRIKOLICA 2016 GODINA TROSTRANI ROLO GUME 385 55 22,5 TEZINA PRAZNE PRIKOLICE 4550KG DUZINA 7,7M SIRINA 2,5M VISINA 2,8M JAKO DOBRO STANJE UVOZ NJEMACKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto5.jpeg",
        "MERCEDES 1846 SA SLEPOM",
        "2017 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ANTOS 1846 2017GOD SA 600 000km SVA OPREMA RETARDER KLIMA FRIZIDER POLUSPAVACA KABINA SA KREVETOM ORGINALNI KIPER ALU FELGE DOBRE GUME SLEPA FLIEGL 2017 GODINA 28 KUBIKA PODIZNA OSOVINA ALU FELGE JAKO DOBRE GUME TEZINA KAMIONA SA SLEPOM 12 200kg KOMPLET U JAKO DOBROM STANJU BEZ ULAGANJA PRODAJA ISKLJUCIVO U KOMPLETU"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto6.jpeg",
        "ACTROS 1840",
        "2018 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "ACTROS 1840 2018GOD UVOZ NJEMACKA 639 000 ORGINALNIH KILOMETARA KAMION POSJEDUJE GORNJI I DONJI PUFER SVA OPREMA JAKO DOBRO STANJE RETARDER, FRIZIDER, DISTANCER, LANE ASSIST... DUZINA SANDUKA 7.40M SIRINA 2.5M VISINA 3.0M NOVA CERADA, GUME JAKO DOBRE"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto7.jpeg",
        "VOLKSWAGEN TIGUAN 2.0 DSG 4MOTION R LINE",
        "2012 • Euro 5 • Automat",
        "Kontakt za cijenu",
        "VW TIGUAN 2.0 TDI DSG 4MOTION 2012GOD R LINE, JAKO BOGATAT PAKET OPREME, KOMPLET FABRICKI R LINE MF KOZNI VOLAN SA F1 SALTANJEM, AUTOMATSKI MJENJAC, POGON NA SVA 4 TOCKA, PARKING SENZORI NAPRIJED/NAZAD, KAMERA ZA PARKIRANJE, LANE ASSIST, PREPOZNAVANJE ZNAKOVA, ADAPTIVNI TEMPOMAT, 19 FELGE SA SKORO NOVIM GUMAMA, PARK ASSIST, PANORAMA, CRNO NEBO, MODOVI VOZNJE SPORT/COMFORT/NORMAL, ALKANTARA SJEDISTA I JOS MNOGO TOGA... 210 000 ORGINALNIH KILOMETARA SA SERVISNOM KNJIGOM GARANCIJA NA PREDJENU KILOMETRAZU. AUTO U PERFEKTNOM STANJU, SVAKI VID PROVJERE DOZVOLJEN BEZ DODATNOG ULAGANJA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      ${vehicleCard(
        "assets/img/vehicles/auto1.jpeg",
        "MERCEDES ACTROS 2542 SA PRIKOLICOM",
        "2016 • Euro 6 • Automat",
        "Kontakt za cijenu",
        "MERCEDES ACTROS 2542 TANDEM 2016GOD TROSTRANI ROLO, PODIZNI KROV DUZINA SANDUKA 7,2 2,5 3,0 VISINA KAMION U JAKO DOBROM STANJU SA SVOM OPREMOM PRIKOLICA 2016GOD DUZINA 8.2 SIRINA 2.5 VISINA 3 METRA PODIZNI KROV PODIZNA OSOVINA ALU FELGE TROSTRANI ROLO SA DOBRIM GUMAMA KAMION SA PRIKOLICOM 120 KUBIKA"
      )}
      
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

function vehicleCard(img, title, meta, price, desc, extraClass = "") {
  return `
    <article class="card vehicle ${extraClass}">
      <div class="vehicle__img">
        <img src="${img}" alt="${title}">
      </div>

      <div class="vehicle__body">
        <h3>${title}</h3>
        <p class="muted">${meta}</p>
        <p class="vehicle__desc">${desc}</p>

        <div class="vehicle__bottom">
          <span class="price">${price}</span>
          <a class="btn btn--ghost" href="/#/contact" data-link>Upit</a>
        </div>
      </div>
    </article>
  `;
}
