/* RailBase – Fahrzeuge der BLS. Gleiche Form wie fahrzeuge.js, mit bahn: 'bls'. */
'use strict';

/* =====================================================================
   BLS
   Grundlage: Datenblätter von HCKD (Oktober 2026), geprüft mit den
   Flottenseiten der BLS und der BLS-Stiftung sowie Wikipedia.
   Nicht übernommen, weil nicht belegt: XTmas 9259, Te 2/2, Tm 234 und
   Tm 2/2 als BLS-Fahrzeuge, Re 456.
   ===================================================================== */
const BLS_GRUEN = '#3E8E41', BLS_DUNKEL = '#1F3B2C', BLS_BRAUN = '#6B4226';
ZUEGE.push(
  // ---------- Personenverkehr ----------
  { id: 'bls-rabe-528', kat: 'personenverkehr', name: 'RABe 528', beiname: 'MIKA', typ: 'Elektrischer Triebzug von Stadler für RegioExpress und S-Bahn', bahn: 'bls', vorlaeufig: false,
    text: ['Der sechsteilige MIKA ist der neuste Triebzug der BLS. Es gibt ihn in einer RegioExpress-Ausführung mit mehr Komfort für längere Fahrten und in einer S-Bahn-Ausführung mit mehr Platz zum Stehen.', 'Die MIKA lösten ab 2021 ältere Züge wie die EW-III-Pendelzüge und die NPZ ab.'],
    kennzahlen: [['67', 'Züge (39 RE, 28 S-Bahn)'], ['160 km/h', 'Höchstgeschwindigkeit'], ['104,9 m', 'Länge'], ['2021', 'erster Einsatz']],
    nummern: [[528101, 528139], [528201, 528228]],
    daten: { 'Bauart': 'Elektrotriebzug, 6 Wagen', 'Hersteller': 'Stadler', 'Betreiber': 'BLS AG', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'RE 101–139, S-Bahn 201–228', 'Länge': '104,9 m', 'Gewicht': '182 t (RE), 183 t (S-Bahn)', 'Leistung': '3500 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '244 (RE), 223 (S-Bahn)', 'Anzahl': '67 Züge', 'In Betrieb seit': '2021' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Sitzplätze ohne Klappsitze: RE 46 in der 1. und 198 in der 2. Klasse, S-Bahn 35 und 188. Die Züge 125–137 gehören der BLS Fernverkehr AG.',
    abschnitte: [
      { titel: 'Zwei Ausführungen', tabelle: { kopf: ['Merkmal', 'RegioExpress', 'S-Bahn'], zeilen: [
        ['Nummern', '101–139', '201–228'], ['Anzahl', '39', '28'], ['In Betrieb gesetzt', '2021–2026', '2022–2025'],
        ['Sitzplätze 1. / 2. Klasse', '46 / 198', '35 / 188'], ['Stehplätze', '149', '241'], ['Veloplätze', '12', '6']] } },
      { titel: 'Einsatz', p: ['Laut BLS fahren die MIKA unter anderem auf den S-Bahn-Linien rund um Bern und Luzern, auf dem RegioExpress Bern–Spiez–Zweisimmen und weiter bis Brig und Domodossola sowie auf dem InterRegio Bern–Neuchâtel–La Chaux-de-Fonds.'] }
    ],
    quellen: ['BLS – Flotte: RABe 528 «MIKA», technische Daten RE und S-Bahn', 'Datenblatt HCKD «RABe 528 MIKA», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: BLS_GRUEN, tuer: BLS_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bls-rabe-528-c1.jpg', titel: 'RABe 528 102 als RegioExpress in Bern', foto: 'Vsler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_MIKA_102_Bern.jpg' },
      { src: 'bilder/bls-rabe-528-c2.jpg', titel: 'RABe 528 201 in der S-Bahn-Ausführung', foto: 'Vsler', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:528_Mika_201.jpg' },
      { src: 'bilder/bls-rabe-528-c3.jpg', titel: 'RABe 528 119 in Domodossola', foto: 'Vsler', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:528_119_Domodossola.jpg' },
      { src: 'bilder/bls-rabe-528-c4.jpg', titel: 'RABe 528 104 im Entlebuch', foto: 'Vsler', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:528_104_entlebuch.jpg' }
    ] },
  { id: 'bls-rabe-515', kat: 'personenverkehr', name: 'RABe 515', beiname: 'MUTZ', typ: 'Doppelstock-Triebzug von Stadler (KISS)', bahn: 'bls', vorlaeufig: false,
    text: ['Der MUTZ ist der Doppelstockzug der BLS und gehört zur KISS-Familie von Stadler. Er fährt vor allem auf den stark genutzten Linien der S-Bahn Bern.', 'Es gibt eine vierteilige und eine längere sechsteilige Ausführung.'],
    kennzahlen: [['39', 'Züge (34 vierteilig, 5 sechsteilig)'], ['160 km/h', 'Höchstgeschwindigkeit'], ['335 / 546', 'Sitzplätze 4- / 6-teilig'], ['2012', 'erster Einsatz']],
    nummern: [[515001, 515039]],
    daten: { 'Bauart': 'Doppelstock-Elektrotriebzug', 'Fahrzeugfamilie': 'KISS', 'Hersteller': 'Stadler', 'Betreiber': 'BLS AG', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '001–034 (4-teilig), 035–039 (6-teilig)', 'Länge': '102,6 m (4-teilig), 151,88 m (6-teilig)', 'Gewicht': '216 t (4-teilig), 301 t (6-teilig)', 'Leistung': '4000 kW (6-teilig: 6000 kW Spitze)', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '335 (4-teilig), 546 (6-teilig)', 'Anzahl': '39 Züge', 'In Betrieb seit': '2012' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Vier- und sechsteilig', tabelle: { kopf: ['Merkmal', 'vierteilig', 'sechsteilig'], zeilen: [
        ['Nummern', '001–034', '035–039'], ['In Betrieb gesetzt', '2012–2017, 032–033 2019/2020', '2020'], ['Länge', '102,6 m', '151,88 m'],
        ['Sitzplätze 1. / 2. Klasse', '61 / 274', '122 / 424'], ['Leistung', '4000 kW', '6000 kW Spitze, 4000 kW Dauer']] } },
      { titel: 'Einsatz', p: ['Laut BLS fahren die MUTZ unter anderem auf den S-Bahn-Linien Freiburg–Bern–Thun und Biel–Bern–Belp sowie als InterRegio Bern–Burgdorf–Olten und Bern–Biel.'] }
    ],
    quellen: ['BLS – Flotte: RABe 515 «MUTZ», technische Daten', 'Datenblätter HCKD «RABe 515 MUTZ» vier- und sechsteilig, Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', dd: true, farbe: W1, akzent: BLS_GRUEN, tuer: BLS_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bls-rabe-515-c1.jpg', titel: 'Vierteiliger RABe 515 003 in Bern', foto: 'Hoff1980', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_RABe_515_003_Bern.JPG' },
      { src: 'bilder/bls-rabe-515-c2.jpg', titel: 'Sechsteiliger RABe 515 039', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_RABe_515_039_(53262122082).jpg' },
      { src: 'bilder/bls-rabe-515-c3.jpg', titel: 'RABe 515 027 bei Allmendingen', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:4_BLS_RABe_515_027_Allmendingen_b_B_200617.jpg' }
    ] },
  { id: 'bls-rabe-535', kat: 'personenverkehr', name: 'RABe 535', beiname: 'Lötschberger', typ: 'Vierteiliger Niederflur-Triebzug', bahn: 'bls', vorlaeufig: false,
    text: ['Der Lötschberger ist ein vierteiliger Niederflur-Triebzug der BLS. Seinen Namen trägt er, weil er auf der Lötschberg-Bergstrecke und im Berner Oberland unterwegs ist.', 'Bis zu vier Züge können zusammen fahren.'],
    kennzahlen: [['25', 'Züge'], ['160 km/h', 'Höchstgeschwindigkeit'], ['142', 'Sitzplätze'], ['2008', 'erster Einsatz']],
    nummern: [[535101, 535125]],
    daten: { 'Bauart': 'Niederflur-Elektrotriebzug, 4 Wagen', 'Hersteller': 'Bombardier Transportation', 'Betreiber': 'BLS AG', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '101–125', 'Länge': '62,7 m', 'Gewicht': '105 t', 'Leistung': '1000 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '142', 'Anzahl': '25 Züge', 'In Betrieb seit': '2008' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Einsatz', p: ['Laut BLS fährt der Lötschberger unter anderem Zweisimmen–Spiez, Spiez–Interlaken Ost und Spiez–Frutigen sowie auf S-Bahn-Linien zwischen Thun, Bern, Burgdorf und Solothurn.'] }],
    quellen: ['BLS – Flotte: RABe 535 «Lötschberger», technische Daten und Linien', 'Datenblatt HCKD «RABe 535 Lötschberger», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: BLS_GRUEN, tuer: BLS_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bls-rabe-535-c1.jpg', titel: 'RABe 535 112 «Lötschberger»', foto: 'Markus Eigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_L%C3%B6tschberger_RABe_535_112.jpg' },
      { src: 'bilder/bls-rabe-535-c2.jpg', titel: 'Lötschberger im Bahnhof Kandersteg', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bahnhof_Kandersteg_mit_%22L%C3%B6tschberger%22_und_Autoverlad_(2015).jpg' },
      { src: 'bilder/bls-rabe-535-c3.jpg', titel: 'RABe 535 122 in Iselle di Trasquera', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2_BLS_RABe_535_122_Iselle_di_Trasquera_081217_RE4266.jpg' }
    ] },
  { id: 'bls-rabe-525', kat: 'personenverkehr', name: 'RABe 525', beiname: 'NINA', typ: 'Niederflur-Nahverkehrstriebzug', bahn: 'bls', vorlaeufig: false,
    text: ['NINA steht für Niederflur-Nahverkehrszug. Die BLS setzt ihn in drei- und vierteiliger Ausführung im Regional- und S-Bahn-Verkehr ein.', 'Bis zu vier Züge lassen sich kuppeln.'],
    kennzahlen: [['36', 'Züge (23 dreiteilig, 13 vierteilig)'], ['140 km/h', 'Höchstgeschwindigkeit'], ['1000 kW', 'Leistung'], ['1998', 'erster Einsatz']],
    nummern: [[525001, 525037]],
    daten: { 'Bauart': 'Niederflur-Elektrotriebzug, 3 oder 4 Wagen', 'Hersteller': 'Vevey Technologies / Bombardier', 'Betreiber': 'BLS AG', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '47,7 m (3-teilig), 61,9 m (4-teilig)', 'Gewicht': '79 t (3-teilig), 96 t (4-teilig)', 'Leistung': '1000 kW', 'Höchstgeschwindigkeit': '140 km/h', 'Sitzplätze': '134 (3-teilig), 179 (4-teilig)', 'Anzahl': '36 Züge', 'In Betrieb seit': '1998' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'In Betrieb gesetzt 1998–2005. Vierteilig sind die Nummern 015–027, dreiteilig 001–014, 028–030 und 032–037.',
    abschnitte: [{ titel: 'Einsatz', p: ['Laut BLS fahren die vierteiligen NINA unter anderem Bern–Kerzers–Neuchâtel, Lyss–Büren an der Aare, Solothurn–Burgdorf–Bern und Domodossola–Brig–Visp.'] }],
    quellen: ['BLS – Flotte: RABe 525 «NINA», technische Daten', 'Datenblatt HCKD «RABe 525 NINA», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: BLS_GRUEN, tuer: BLS_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bls-rabe-525-c1.jpg', titel: 'NINA RABe 525 024 in Thun', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_NINA_24_(RABe_525)_in_Thun_(2012).jpg' },
      { src: 'bilder/bls-rabe-525-c2.jpg', titel: 'Vierteiliger RABe 525 015 in Bern', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:5_BLS_RABe_525_015_Bern_290317.jpg' }
    ] },
  { id: 'bls-re-465', kat: 'personenverkehr', name: 'Re 465', beiname: '', typ: 'Elektrische Universallokomotive der Lok-2000-Familie', bahn: 'bls', vorlaeufig: false,
    text: ['Die Re 465 ist die BLS-Schwester der Re 460 der SBB. Sie zieht Personenzüge, Autoverlad-Züge und Güterzüge.', 'Zwischen 2019 und 2022 wurden alle 18 Loks modernisiert und grün lackiert. Seit Ende 2023 ersetzen sie beim Autoverlad die braunen Re 425.'],
    kennzahlen: [['18', 'Lokomotiven'], ['6400 kW', 'Leistung'], ['160 km/h', 'zugelassene Höchstgeschwindigkeit'], ['1994', 'erster Einsatz']],
    nummern: [[465001, 465018]],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Fahrzeugfamilie': 'Lok 2000', 'Betreiber': 'BLS AG', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '001–018', 'Länge': '18,5 m', 'Gewicht': '84 t', 'Leistung': '6400 kW', 'Höchstgeschwindigkeit': '160 km/h (zugelassen)', 'Anzahl': '18', 'In Betrieb seit': '1994' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Modernisierung und Einsatz', p: ['Die BLS bestellte zuerst acht Loks (001–008), später zehn weitere (009–018) für den Huckepackkorridor. Mit dem Refit 2019–2022 für rund 20 Millionen Franken sind sie bis etwa 2040 einsetzbar.', 'Heute ziehen sie den GoldenPass Express zwischen Interlaken Ost und Zweisimmen, die Autoverlad-Züge am Lötschberg und am Simplon und, oft zusammen mit TRAXX und Vectron, Güterzüge.'] }],
    quellen: ['BLS – Flotte: Re 465, technische Daten, Refit und Einsatz', 'Datenblatt HCKD «Re 465 – Lok 2000», Oktober 2026'],
    art: { typ: 'lok', form: 'rund', farbe: BLS_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bls-re-465-c1.jpg', titel: 'Re 465 014 in Zweisimmen', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L02_531_Bf_Zweisimmen,_RABe_528_203,_Re_465_014.jpg' },
      { src: 'bilder/bls-re-465-c2.jpg', titel: 'Re 465 001 und 007 in Doppeltraktion', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Cargo_Re_465_001_%2B_Re_465_007_(52474493567).jpg' }
    ] },
  // ---------- Cargo ----------
  { id: 'bls-re-475', kat: 'cargo', name: 'Re 475', beiname: 'Vectron', typ: 'Mehrsystem-Elektrolokomotive von Siemens für BLS Cargo', bahn: 'bls', vorlaeufig: false,
    text: ['Die Re 475 ist die Vectron-Lokomotive von BLS Cargo. Sie ist für mehrere Länder zugelassen und fährt Güterzüge durch die Alpen bis nach Deutschland, Italien und in die Niederlande.', 'BLS Cargo hat die Flotte in mehreren Serien erweitert.'],
    kennzahlen: [['50', 'Loks in drei Serien'], ['2016', 'erster Einsatz'], ['6', 'Länder (neuere Serien)'], ['Siemens', 'Hersteller']],
    nummern: [[475401, 475450]],
    daten: { 'Bauart': 'Mehrsystem-Elektrolokomotive Bo’Bo’', 'Fahrzeugfamilie': 'Vectron', 'Hersteller': 'Siemens Mobility', 'Betreiber': 'BLS Cargo', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '401–450', 'Zulassung': 'CH, D, A, I, NL; ab Nr. 416 auch B', 'Anzahl': '50 (in drei Serien)', 'In Betrieb seit': '2016' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Zulassung', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Drei Serien', tabelle: { kopf: ['Nummern', 'Anzahl', 'Lieferung', 'Zulassung'], zeilen: [
      ['401–415', '15', '2016–2018', 'CH, D, A, I, NL'], ['416–440', '25', '2020, 2024–2025', 'CH, D, A, I, NL, B'], ['441–450', '10', 'ab 2026', 'CH, D, A, I, NL, B']] } }],
    quellen: ['Wikipedia – BLS Cargo, Flottentabelle', 'Datenblatt HCKD «Re 475 – Siemens Vectron», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_GRUEN, akzent: BLS_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/bls-re-475-c1.jpg', titel: 'Re 475 401 von BLS Cargo', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Cargo_Re_475_401_(51078382246).jpg' }
    ] },
  { id: 'bls-re-485', kat: 'cargo', name: 'Re 485', beiname: 'TRAXX', typ: 'Elektrische Güterzuglokomotive von Bombardier', bahn: 'bls', vorlaeufig: false,
    text: ['Die Re 485 sind TRAXX-Lokomotiven von BLS Cargo für den Güterverkehr in der Schweiz und nach Deutschland.', 'Sie wurden 2002 bestellt und bis Mitte 2003 geliefert.'],
    kennzahlen: [['20', 'Lokomotiven'], ['140 km/h', 'Höchstgeschwindigkeit'], ['CH, D', 'Zulassung'], ['2002', 'erster Einsatz']],
    nummern: [[485001, 485020]],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Fahrzeugfamilie': 'TRAXX F140 AC', 'Hersteller': 'Bombardier Transportation', 'Betreiber': 'BLS Cargo', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '001–020', 'Höchstgeschwindigkeit': '140 km/h', 'Zulassung': 'Schweiz, Deutschland', 'Anzahl': '20', 'In Betrieb seit': '2002' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Höchstgeschwindigkeit', 'Zulassung', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die 140 km/h stehen für die Bauart TRAXX F140.',
    abschnitte: [],
    quellen: ['Wikipedia – BLS Cargo, Flottentabelle und Geschichte', 'Datenblatt HCKD «Re 485 – TRAXX», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_GRUEN, akzent: BLS_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/bls-re-485-c1.jpg', titel: 'Re 485 005 von BLS Cargo', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Cargo_Re_485_005_(51188248458).jpg' },
      { src: 'bilder/bls-re-485-c2.jpg', titel: 'Re 485 016 mit Güterzug', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Cargo_Re_485_016_(52214976250).jpg' },
      { src: 'bilder/bls-re-485-c3.jpg', titel: 'Re 485 008 bei Allmendingen', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2_BLS_Re_485_008-7_Allmendingen_b_B_200617.jpg' }
    ] },
  { id: 'bls-re-486', kat: 'cargo', name: 'Re 486', beiname: 'TRAXX MS', typ: 'Mehrsystem-Elektrolokomotive von Bombardier', bahn: 'bls', vorlaeufig: false,
    text: ['Die Re 486 sind Mehrsystem-TRAXX von BLS Cargo. Sie dürfen in der Schweiz, in Deutschland, Italien und Österreich fahren.', 'Damit eignen sie sich für den Transitverkehr durch die Alpen, zum Beispiel mit der Rollenden Landstrasse.'],
    kennzahlen: [['10', 'Lokomotiven'], ['140 km/h', 'Höchstgeschwindigkeit'], ['4', 'Länder'], ['2008', 'erster Einsatz']],
    nummern: [[486501, 486510]],
    daten: { 'Bauart': 'Mehrsystem-Elektrolokomotive Bo’Bo’', 'Fahrzeugfamilie': 'TRAXX F140 MS', 'Hersteller': 'Bombardier Transportation', 'Betreiber': 'BLS Cargo', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '501–510', 'Höchstgeschwindigkeit': '140 km/h', 'Zulassung': 'Schweiz, Deutschland, Italien, Österreich', 'Anzahl': '10', 'In Betrieb seit': '2008' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Höchstgeschwindigkeit', 'Zulassung', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die 140 km/h stehen für die Bauart TRAXX F140.',
    abschnitte: [],
    quellen: ['Wikipedia – BLS Cargo, Flottentabelle', 'Datenblatt HCKD «Re 486 – TRAXX MS», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_GRUEN, akzent: BLS_DUNKEL, panto: true },
    bilder: [
      { src: 'bilder/bls-re-486-c1.jpg', titel: 'Re 486 503 mit Rollender Landstrasse in Freiburg im Breisgau', foto: 'Chondriammos', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Cargo_Re_486_503_RoLa_Freiburg_02.jpg' },
      { src: 'bilder/bls-re-486-c2.jpg', titel: 'Re 486 504 von BLS Cargo', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Cargo_Re_486_504_(51342571804).jpg' }
    ] },
  { id: 'bls-re-425', kat: 'historisch', name: 'Re 425', beiname: 'Re 4/4', typ: 'Elektrolokomotive der BLS, bekannt als «die Braunen»', bahn: 'bls', vorlaeufig: false,
    text: ['Die braunen Re 4/4 der BLS, heute Re 425, zogen über Jahrzehnte Schnellzüge zwischen Bern und Brig und Güterzüge von Basel nach Domodossola. Auch der Autoverlad am Lötschberg war lange ihre Aufgabe.', 'Seit Ende 2023 übernehmen beim Autoverlad die Re 465. Bei BLS Cargo stehen weiterhin Re 4/4 im Einsatz; die Re 4/4 165 «Moutier» gehört heute der BLS-Stiftung.'],
    kennzahlen: [['35', 'gebaut 1964–1983'], ['4980 kW', 'Leistung'], ['140 km/h', 'Höchstgeschwindigkeit'], ['1964', 'erster Einsatz']],
    nummern: [[425161, 425195]],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Frühere Bezeichnung': 'Re 4/4', 'Betreiber': 'BLS, heute vor allem BLS Cargo', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,1 m (ab Nr. 174: 15,47 m)', 'Gewicht': '80 t', 'Leistung': '4980 kW', 'Höchstgeschwindigkeit': '140 km/h', 'Anzahl': '35 gebaut', 'In Betrieb seit': '1964' },
    specOrder: ['Bauart', 'Frühere Bezeichnung', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Die Re 4/4 165 «Moutier»', p: ['Die 165 wurde ursprünglich als Ae 4/4 II 265 an die BLS geliefert und trägt das Wappen der Gemeinde Moutier. Seit 2017 gehört sie zu den historischen Fahrzeugen der BLS-Stiftung und steht nicht mehr betriebsfähig im Depot Burgdorf.'] }],
    quellen: ['BLS – Flotte: Re 425, technische Daten', 'BLS-Stiftung – Re 425 165 «Moutier»', 'Wikipedia – BLS Cargo, Flottentabelle (Re 4/4 170–195)', 'Datenblatt HCKD «Re 425», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_BRAUN, akzent: '#E8DCC8', panto: true },
    bilder: [
      { src: 'bilder/bls-re-425-c1.jpg', titel: 'Re 425 192 in Spiez', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Re_425_Nr._192_in_Spiez.jpg' }
    ] },
  // ---------- Infrastruktur, Rangier, Dienst ----------
  { id: 'bls-am-843', kat: 'infrastruktur', name: 'Am 843', beiname: '', typ: 'Dieselhydraulische Lokomotive von BLS Infrastruktur', bahn: 'bls', vorlaeufig: false,
    text: ['Auch BLS Infrastruktur setzt Diesellokomotiven der Baureihe Am 843 ein, zum Beispiel die Am 843 503. Sie ziehen Bauzüge und rangieren unabhängig von der Fahrleitung.', 'Technisch entspricht die Lok der Am 843 der SBB.'],
    kennzahlen: [['843 503', 'fotografiertes Beispiel'], ['Diesel', 'Antrieb'], ['Bauzüge', 'Einsatz'], ['BLS', 'Infrastruktur']],
    daten: { 'Bauart': 'Diesellokomotive', 'Antrieb': 'dieselhydraulisch', 'Betreiber': 'BLS Infrastruktur', 'Spurweite': 'Normalspur, 1435 mm', 'Beispiel': 'Am 843 503', 'Einsatz': 'Bauzüge, Rangieren' },
    specOrder: ['Bauart', 'Antrieb', 'Betreiber', 'Spurweite', 'Beispiel', 'Einsatz'],
    specNote: 'Wie viele Am 843 die BLS besitzt, ist nicht öffentlich belegt. Die technischen Daten der Baureihe stehen bei der Am 843 der SBB.',
    abschnitte: [],
    quellen: ['Wikimedia Commons – Foto der BLS Infra Am 843 503', 'Datenblatt HCKD «Am 843», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: YEL, akzent: '#2E3338' },
    bilder: [
      { src: 'bilder/bls-am-843-c1.jpg', titel: 'Am 843 503 von BLS Infrastruktur', foto: 'flybyeigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Infra_Am_843_503-4_(25015155056).jpg' }
    ] },
  { id: 'bls-rangier', kat: 'rangier', name: 'Rangierfahrzeuge', beiname: 'BLS', typ: 'Rangierloks und Rangiertraktoren der BLS', bahn: 'bls', vorlaeufig: false,
    text: ['Für das Rangieren in Bahnhöfen und Werkstätten nutzt die BLS verschiedene kleine Loks und Traktoren. Einige stammen von Bahnen, die heute zur BLS gehören, etwa der Emmental–Burgdorf–Thun-Bahn.', 'Diese Seite zeigt die Typen, die auf Fotos mit BLS-Anschrift belegt sind.'],
    kennzahlen: [['5', 'Typen auf Fotos belegt'], ['Ee 936', 'grösste Rangierlok'], ['Kandersteg', 'u. a. fotografiert'], ['BLS', 'Betreiber']],
    daten: { 'Bauart': 'Rangierloks und Rangiertraktoren', 'Betreiber': 'BLS AG', 'Spurweite': 'Normalspur, 1435 mm', 'Typen': 'Ee 936, Eea 935, Tem 225, Tm 235, Tea 245', 'Einsatz': 'Rangieren in Bahnhöfen und Werkstätten' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Typen', 'Einsatz'],
    abschnitte: [{ titel: 'Auf Fotos belegt', tabelle: { kopf: ['Typ', 'Beispiel', 'Antrieb', 'Foto'], zeilen: [
      ['Ee 936', '936 132', 'elektrisch', 'Kandersteg 2016'], ['Eea 935', '935 402', 'elektrisch und Batterie', 'Kandersteg 2016'],
      ['Tem 225', '225 041', 'elektrisch und Diesel', 'Burgdorf 2018'], ['Tm 235', '235 091', 'Diesel', 'Spiez 2012'], ['Tea 245', '245 021', 'elektrisch und Batterie', 'ohne Ort']] } },
      { p: ['Wie viele Fahrzeuge jedes Typs die BLS heute besitzt, ist nicht öffentlich belegt. Deshalb nennt RailBase hier nur Beispiele mit Foto.'] }],
    quellen: ['Wikimedia Commons – Fotos der BLS-Rangierfahrzeuge mit Nummern', 'Datenblätter HCKD zu Ee 936, Eea 935, Tem 225, Tm 235 und Tea 245, Oktober 2026'],
    art: { typ: 'rangier', farbe: BLS_GRUEN, akzent: '#2E3338', panto: true },
    bilder: [
      { src: 'bilder/bls-rangier-c1.jpg', titel: 'Ee 936 132 in Kandersteg (2016)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Ee_936132_Kandersteg_Mai2016.JPG' },
      { src: 'bilder/bls-rangier-c2.jpg', titel: 'Eea 935 402 in Kandersteg (2016)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Eea_935402_Kandersteg_Feb2016.JPG' },
      { src: 'bilder/bls-rangier-c3.jpg', titel: 'Tem 225 041 in Burgdorf (2018)', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:1_BLS_Tem_225_041-3_Burgdorf_120818.jpg' },
      { src: 'bilder/bls-rangier-c4.jpg', titel: 'Tm 235 091 in Spiez (2012)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Tm_235_091_in_Spiez_(2012).jpg' },
      { src: 'bilder/bls-rangier-c5.jpg', titel: 'Tea 245 021', foto: 'Alf van Beem', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Tea_245_021-1_pic1.JPG' }
    ] },
  { id: 'bls-lrz', kat: 'dienst', name: 'LRZ', beiname: 'BLS', typ: 'Lösch- und Rettungszüge der BLS', bahn: 'bls', vorlaeufig: false,
    text: ['Auch die BLS hat eigene Lösch- und Rettungszüge. Sie stehen unter anderem beim Interventionszentrum in Frutigen bereit, am Nordportal des Lötschberg-Basistunnels.', 'Die Züge bringen Löschmittel, Rettungskräfte und Atemschutz in lange Tunnel.'],
    kennzahlen: [['Frutigen', 'Interventionszentrum'], ['Lötschberg', 'Basistunnel'], ['Tunnel', 'Haupteinsatz'], ['BLS', 'Betreiber']],
    daten: { 'Bauart': 'Lösch- und Rettungszug', 'Betreiber': 'BLS AG', 'Spurweite': 'Normalspur, 1435 mm', 'Standort': 'u. a. Interventionszentrum Frutigen', 'Einsatz': 'Tunnelrettung, Brandbekämpfung' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Standort', 'Einsatz'],
    specNote: 'Technische Daten und Anzahl der BLS-Züge sind nicht öffentlich belegt.',
    abschnitte: [],
    quellen: ['Wikimedia Commons – Foto «LRZ der BLS vor Interventionszentrum Frutigen»', 'Datenblatt HCKD «LRZ 04», Oktober 2026'],
    art: { typ: 'spezial', var: 'loesch', farbe: YEL, akzent: CRED },
    bilder: [
      { src: 'bilder/bls-lrz-c1.jpg', titel: 'Lösch- und Rettungszug vor dem Interventionszentrum Frutigen', foto: 'Niceman at de.wikipedia', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:LRZ_der_BLS_vor_Interventionszentrum_Frutigen.JPG' }
    ] },
  // ---------- Historische Fahrzeuge ----------
  { id: 'bls-ae-4-4', kat: 'historisch', name: 'Ae 4/4', beiname: 'Ae 415', typ: 'Vierachsige Hochleistungslok der BLS (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die Ae 4/4 der BLS waren die ersten modernen vierachsigen Drehgestell-Lokomotiven mit 1000 PS pro Achse. Sie gelten als Vorläufer aller modernen vierachsigen Hochleistungsloks.', 'Die Ae 415 251 ist fahrtüchtig und kann bei der BLS gemietet werden.'],
    kennzahlen: [['1944', 'erste Lieferung'], ['2945 kW', 'Leistung'], ['125 km/h', 'Höchstgeschwindigkeit'], ['80 t', 'Gewicht']],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Hersteller': 'SLM und BBC', 'Betreiber': 'BLS, heute BLS Historic', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,6 m', 'Gewicht': '80 t', 'Leistung': '2945 kW', 'Höchstgeschwindigkeit': '125 km/h', 'Erhalten': 'Ae 415 251, betriebsfähig', 'In Betrieb seit': '1944' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Erhalten', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Modernisiert', liste: ['Neue Stufenschalter und Drucklufthauptschalter', 'Doppelt so starke elektrische Bremse; dafür wurde ein Stromabnehmer abgebaut', 'Gummifedern statt Blattfedern', 'Seilzug, der die vorlaufenden Achsen stärker belastet und so die Haftung verbessert'] }],
    quellen: ['BLS Historic – Ae 4/4, technische Daten und Geschichte', 'Datenblatt HCKD «Ae 4/4 (Ae 415)», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_BRAUN, akzent: '#E8DCC8', panto: true },
    bilder: [
      { src: 'bilder/bls-ae-4-4-c1.jpg', titel: 'Ae 4/4 251 in Interlaken West (2004)', foto: 'Klaus Kort', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:BLS-Ae44-251-InterlakenWest_2004-06-17.jpg' }
    ] },
  { id: 'bls-ae-6-8', kat: 'historisch', name: 'Ae 6/8', beiname: 'Ae 015', typ: 'Schwere Gebirgslok der Lötschbergbahn (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die Ae 6/8 der Lötschbergbahn wurden von 1926 bis 1943 gebaut und waren damals die stärkste Lokomotive der Welt.', 'Die Ae 6/8 205 war 1939 an der Landesausstellung in Zürich ausgestellt und gehört heute der BLS-Stiftung.'],
    kennzahlen: [['8', 'gebaut 1926–1943'], ['4415 kW', 'Leistung'], ['100 km/h', 'Höchstgeschwindigkeit'], ['120 t', 'Gewicht']],
    daten: { 'Bauart': 'Elektrolokomotive (1’Co)(Co1’)', 'Hersteller': 'Elektrik SAAS; Mechanik Breda (201–204), SLM (205–208)', 'Betreiber': 'BLS, heute BLS-Stiftung', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '20,2 m', 'Gewicht': '120 t', 'Leistung': '4415 kW', 'Höchstgeschwindigkeit': '100 km/h', 'Erhalten': 'Ae 6/8 205', 'In Betrieb seit': '1926' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Erhalten', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Zwei Serien', p: ['Die Nummern 201–204 entstanden 1926–1931 noch als Be 6/8, die 205–208 1939–1943 gleich als Ae 6/8 für 100 km/h. 1939 erhielten auch die ersten vier Loks neue Getriebe für Schnellzüge im Flachland.'] }],
    quellen: ['BLS-Stiftung – Ae 6/8, technische Daten und Geschichte', 'Datenblatt HCKD «Ae 6/8», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_BRAUN, akzent: '#E8DCC8', panto: true },
    bilder: [
      { src: 'bilder/bls-ae-6-8-c1.jpg', titel: 'Ae 6/8 205 bei Ausserberg, 100 Jahre Lötschbergbahn', foto: 'Fabien Perissinotto', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Ae_015_205_with_Swiss_Classic_Train_cars,_100_years_of_the_L%C3%B6tschberg,_Ausserberg.jpg' }
    ] },
  { id: 'bls-ae-8-8', kat: 'historisch', name: 'Ae 8/8', beiname: 'Muni', typ: 'Doppellokomotive für schwere Lötschbergzüge (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die Ae 8/8 besteht im Prinzip aus zwei fest gekuppelten Ae 4/4. Die BLS beschaffte sie ab 1956, weil auf der Lötschbergstrecke immer mehr schwere Züge eine Vorspannlok brauchten.', 'Im Volksmund heisst sie «Muni», also Stier.'],
    kennzahlen: [['6475 kW', 'Leistung'], ['160 t', 'Gewicht'], ['125 km/h', 'Höchstgeschwindigkeit'], ['1959', 'erster Einsatz']],
    daten: { 'Bauart': 'Doppellokomotive Bo’Bo’+Bo’Bo’', 'Betreiber': 'BLS, heute BLS-Stiftung', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '30,2 m', 'Gewicht': '160 t', 'Leistung': '6475 kW', 'Höchstgeschwindigkeit': '125 km/h', 'Erhalten': 'Ae 8/8 273 und 275', 'In Betrieb seit': '1959' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Erhalten', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Heute', p: ['In Dienst gestellt wurden die Ae 8/8 zwischen 1959 und 1966. Eine der letzten Aufgaben der 273 waren Züge mit Aushub aus dem Lötschberg-Basistunnel.', 'Die BLS-Stiftung sammelt Geld, um die 273 wieder fahrfähig zu machen. Die Zukunft der 275 ist wegen ihres Zustands ungewiss.'] }],
    quellen: ['BLS-Stiftung – Ae 8/8 «Muni», technische Daten und Geschichte', 'Datenblatt HCKD «Ae 8/8 – Muni», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_BRAUN, akzent: '#E8DCC8', panto: true },
    bilder: [
      { src: 'bilder/bls-ae-8-8-c1.jpg', titel: 'Ae 8/8 274', foto: 'Peter Alder', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Swiss_Rail_BLS_485_Ae_8_8_274.jpg' }
    ] },
  { id: 'bls-be-5-7', kat: 'historisch', name: 'Be 5/7', beiname: '', typ: 'Erste Elektrolok der Lötschbergbahn (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die Be 5/7 war 1913 die erste Serienlok für die elektrische Lötschbergbahn. Sie war als Universallok für Schnell- und Güterzüge gedacht.', 'Nach der Ankunft der Ae 4/4 fuhr sie vor allem Güterzüge.'],
    kennzahlen: [['13', 'gebaut'], ['1913', 'erster Einsatz'], ['1840 kW', 'Stundenleistung'], ['75 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Elektrolokomotive 1’E1’', 'Hersteller': 'SLM, MFO und BBC', 'Betreiber': 'BLS', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '151–163', 'Länge': '16,0 m', 'Gewicht': '107 t', 'Leistung': '1840 kW (Stundenleistung)', 'Höchstgeschwindigkeit': '75 km/h, spätere Loks 80 km/h', 'Erhalten': 'eine Lok im Verkehrshaus der Schweiz', 'In Betrieb seit': '1913' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Erhalten', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Im Verkehrshaus', p: ['Im Verkehrshaus der Schweiz in Luzern steht seit 1959 die Lok 161 (ursprünglich 155). Sie ist dort als Nummer 151 beschriftet.'] }],
    quellen: ['Wikipedia – BLS Be 5/7', 'Datenblatt HCKD «Be 5/7», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_BRAUN, akzent: '#E8DCC8', panto: true },
    bilder: [
      { src: 'bilder/bls-be-5-7-c1.jpg', titel: 'Be 5/7 mit der Nummer 151', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:2-E-2_Electric_loco_151_of_Lotchberg.jpg' }
    ] },
  { id: 'bls-ce-6-6', kat: 'historisch', name: 'Ce 6/6', beiname: 'Fc 2×3/3', typ: 'Elektrische Versuchs- und Güterzuglok von 1910 (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die Ce 6/6 121 war eine einzelne Elektrolok, die 1910 als F 2×3/3 entstand, später Fc 2×3/3 hiess und zuletzt Ce 6/6.', 'Sie fuhr bis 1968, vor allem Güterzüge auf flacheren Strecken wie Thun–Interlaken.'],
    kennzahlen: [['1', 'Exemplar'], ['1910', 'gebaut'], ['1968', 'abgebrochen'], ['1,7 Mio. km', 'Laufleistung']],
    daten: { 'Bauart': 'Elektrolokomotive mit zwei dreiachsigen Triebgestellen', 'Hersteller': 'MFO und SLM', 'Betreiber': 'BLS', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '121', 'Leistung': '2 × 1000 PS (Stundenleistung)', 'Höchstgeschwindigkeit': '70 km/h, später 60 km/h', 'Verbleib': '1968 abgebrochen, ein Drehgestell im Verkehrshaus', 'In Betrieb seit': '1910' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Leistung', 'Höchstgeschwindigkeit', 'Verbleib', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Lange im Dienst', p: ['Ab 1928 fuhr die Lok bei der Bern–Neuenburg-Bahn Güterzüge. Am 10. Juli 1968 wurde sie nach 57 Jahren abgebrochen. Ein Drehgestell ist im Verkehrshaus Luzern ausgestellt.'] }],
    quellen: ['Wikipedia – BLS Ce 6/6', 'Datenblatt HCKD «Ce 6/6», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_BRAUN, akzent: '#E8DCC8', panto: true },
    bilder: [
      { src: 'bilder/bls-ce-6-6-c1.jpg', titel: 'Fc 2×3/3 121, die spätere Ce 6/6 121', foto: 'Unbekannt', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Fc_2_x_33_121.jpg' }
    ] },
  { id: 'bls-ce-4-6', kat: 'historisch', name: 'Ce 4/6', beiname: 'Dekretsmühle', typ: 'Leichte Elektrolok für Nebenlinien (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Den Übernamen «Dekretsmühle» hat die Ce 4/6, weil die Berner Regierung 1918 die Elektrifizierung der Nebenbahnen per Dekret anordnete, um dem Kohlemangel nach dem Ersten Weltkrieg zu begegnen.', 'Die Ce 4/6 307 der früheren Erlenbach–Zweisimmen-Bahn steht heute im Depot Burgdorf.'],
    kennzahlen: [['17', 'Loks 301–317'], ['1920', 'Baujahr der 307'], ['993 kW', 'Leistung'], ['65 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Elektrolokomotive mit Stangenantrieb', 'Betreiber': 'BLS-Gruppe, heute BLS-Stiftung', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '301–317', 'Länge': '15,6 m', 'Gewicht': '70 t', 'Leistung': '993 kW', 'Höchstgeschwindigkeit': '65 km/h', 'Erhalten': 'Ce 4/6 307, nicht betriebsfähig', 'In Betrieb seit': '1920' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Erhalten', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Leicht gebaut', p: ['Weil die Loks vor allem auf Nebenlinien fahren sollten, durften sie höchstens 12 Tonnen Achsdruck haben. Die 308–317 wurden 1954–1956 zu Ce 4/4 umgebaut.', 'Die 307 ist seit 1999 historisches Fahrzeug der BLS und seit 2023 Eigentum der BLS-Stiftung.'] }],
    quellen: ['BLS-Stiftung – Ce 4/6 307 «Dekretsmühle»', 'Datenblatt HCKD «Ce 4/6 307», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_BRAUN, akzent: '#E8DCC8', panto: true },
    bilder: [
      { src: 'bilder/bls-ce-4-6-c1.jpg', titel: 'Ce 4/6 307 «Dekretsmühle»', foto: 'Bobo11', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:EZB-Ce4-6-307.jpg' }
    ] },
  { id: 'bls-ce-4-4', kat: 'historisch', name: 'Ce 4/4', beiname: '312', typ: 'Aus einer Ce 4/6 umgebaute Elektrolok (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die Ce 4/4 entstanden 1954–1956 aus den Ce 4/6 308–317: Vorbauten und Laufachsen wurden entfernt. So stiegen Haftgewicht und Zugkraft, obwohl die Lok leichter wurde.', 'Die Ce 4/4 312 ist heute ein Museumsstück im Depot Burgdorf.'],
    kennzahlen: [['1920', 'gebaut'], ['1957', 'Umbau der 312'], ['993 kW', 'Leistung'], ['65 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Elektrolokomotive', 'Betreiber': 'BLS-Gruppe, heute BLS-Stiftung', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '312 (früher GBS)', 'Länge': '12,34 m', 'Gewicht': '64 t', 'Leistung': '993 kW', 'Höchstgeschwindigkeit': '65 km/h', 'Erhalten': 'Ce 4/4 312, nicht betriebsfähig', 'In Betrieb seit': '1920' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Erhalten', 'In Betrieb seit'],
    abschnitte: [{ p: ['Die 312 ist seit 2013 mit neu gespritztem Kasten historisches Fahrzeug der BLS und seit 2023 Eigentum der BLS-Stiftung. Sie kann bei Führungen besichtigt werden.'] }],
    quellen: ['BLS-Stiftung – Lokomotive Ce 4/4 312', 'Datenblatt HCKD «Ce 4/4 312», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_BRAUN, akzent: '#E8DCC8', panto: true },
    bilder: [] },
  { id: 'bls-bcfe-4-6', kat: 'historisch', name: 'BCFe 4/6', beiname: 'Blauer Pfeil', typ: 'Leichter Doppeltriebwagen von 1938 (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Der «Blaue Pfeil» von 1938 ist neben dem Roten Pfeil der SBB einer der Klassiker der Schweizer Bahn. Grosse Fenster geben eine fast rundum freie Sicht.', 'Der BCFe 4/6 736 ist fahrtüchtig und kann für Ausflüge gemietet werden.'],
    kennzahlen: [['1938', 'gebaut'], ['136', 'Plätze'], ['110 km/h', 'Höchstgeschwindigkeit'], ['41,5 m', 'Länge']],
    daten: { 'Bauart': 'Elektrischer Doppeltriebwagen', 'Hersteller': 'Sécheron (Elektrik), SIG (Mechanik)', 'Betreiber': 'BLS-Gruppe, heute BLS Historic', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '736 (früher BCFZe 4/6 der BN)', 'Länge': '41,5 m', 'Gewicht': '82 t', 'Leistung': '710 kW', 'Höchstgeschwindigkeit': '110 km/h', 'Sitzplätze': '136', 'In Betrieb seit': '1938' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'In Betrieb seit'],
    abschnitte: [{ titel: 'Geschichte', p: ['1935 führte die BLS einteilige Leichttriebwagen ein. Weil der Versuch gelang, bestellte sie drei Doppeltriebwagen BCFZe 4/6, die im Sommer 1938 kamen. Die 731 war 1939 an der Landesausstellung zu sehen.', 'Jahrzehntelang trugen die drei Züge den Personenverkehr der BLS-Gruppe, bis sie 1983 verkauft wurden. Die 736 der Bern–Neuenburg-Bahn ist erhalten.'] }],
    quellen: ['BLS Historic – BCFe 4/6 «Blauer Pfeil», technische Daten und Geschichte', 'Datenblatt HCKD «BCFe 4/6 – Blauer Pfeil», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'lang', farbe: '#2F5D9A', akzent: '#E8DCC8', tuer: '#1F3F6E', panto: true },
    bilder: [
      { src: 'bilder/bls-bcfe-4-6-c1.jpg', titel: 'BCFe 4/6 736 «Blauer Pfeil»', foto: 'Kecko', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_-_Blauer_Pfeil_(28614402574).jpg' }
    ] },
  { id: 'bls-be-4-4-761', kat: 'historisch', name: 'Be 4/4', beiname: 'Wellensittich', typ: 'Hochleistungs-Triebwagen von 1953 (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Der «Wellensittich» von 1953, heute Be 545 761, gilt als Urvater der Hochleistungs-Triebwagen. Mit 2000 PS konnte er sogar internationale Züge Bern–Paris zwischen Bern und Neuenburg ziehen.', 'Seit 2001 trägt er wieder den Originalanstrich hell- und dunkelgrün und fährt für besondere Fahrten.'],
    kennzahlen: [['1953', 'gebaut'], ['1470 kW', 'Leistung'], ['125 km/h', 'Höchstgeschwindigkeit'], ['56', 'Sitzplätze']],
    daten: { 'Bauart': 'Elektrischer Triebwagen', 'Frühere Bezeichnung': 'Ce 4/4, dann Be 4/4 761', 'Betreiber': 'BN, heute BLS Historic', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '761–763 (erhalten: 761)', 'Länge': '23,7 m', 'Gewicht': '64 t', 'Leistung': '1470 kW', 'Höchstgeschwindigkeit': '125 km/h', 'Sitzplätze': '56', 'In Betrieb seit': '1953' },
    specOrder: ['Bauart', 'Frühere Bezeichnung', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'In Betrieb seit'],
    abschnitte: [{ p: ['Die 761 und 762 kamen 1953 zur Bern–Neuenburg-Bahn, die 763 1956 zur GBS. Die 761 gehört seit 2003 zu den historischen Fahrzeugen der BLS und wurde 2010 innen umfassend renoviert.'] }],
    quellen: ['BLS Historic – Be 545 «Wellensittich», technische Daten und Geschichte', 'Datenblatt HCKD «Be 4/4 (Be 545) – Wellensittich», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#7FB069', akzent: '#2F5A33', tuer: '#2F5A33', panto: true },
    bilder: [
      { src: 'bilder/bls-be-4-4-761-c1.jpg', titel: 'Be 4/4 761 «Wellensittich» in Frutigen', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Wellensittich_BLS-761_Frutigen.jpg' }
    ] },
  { id: 'bls-ce-2-4', kat: 'historisch', name: 'Ce 2/4', beiname: '', typ: 'Leichttriebwagen von 1935 (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['1935 führte die BLS-Gruppe einteilige Leichttriebwagen ein, darunter die Ce 2/4 727 und 787. Weil der Versuch gelang, folgten 1938 die Doppeltriebwagen «Blauer Pfeil».', 'Erhaltene Daten zu diesen Triebwagen sind spärlich.'],
    kennzahlen: [['1935', 'gebaut'], ['727, 787', 'Nummern'], ['1', 'Wagen'], ['BLS', 'Gruppe']],
    daten: { 'Bauart': 'Elektrischer Leichttriebwagen', 'Betreiber': 'BLS-Gruppe', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '727, 787', 'In Betrieb seit': '1935' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – BLS Ce 2/4 (Begriffsklärung mit Nummern und Baujahren)', 'BLS Historic – Geschichte des «Blauen Pfeils»', 'Datenblatt HCKD «Ce 2/4», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: BLS_BRAUN, akzent: '#E8DCC8', tuer: '#4A2E1A', panto: true },
    bilder: [
      { src: 'bilder/bls-ce-2-4-c1.jpg', titel: 'Ce 2/4 787', foto: 'Unbekannt', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Ce_24_787.jpg' }
    ] },
  { id: 'bls-abde-4-8', kat: 'historisch', name: 'ABDe 4/8', beiname: '', typ: 'Elektrischer Doppeltriebwagen für den Regionalverkehr (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die Doppeltriebwagen ABDe 4/8 fuhren ab 1945 im Regionalverkehr der BLS-Gruppe, etwa im Simmental, zwischen Spiez und Interlaken und im Gürbetal. Viele fuhren als Pendelzug mit Steuerwagen.', 'Erhalten ist nur ein Zug: die ehemalige 742, heute bei der Bahnmuseum-Gruppe Kerzers-Kallnach.'],
    kennzahlen: [['13', 'Züge 1945–1964'], ['125 km/h', 'Höchstgeschwindigkeit'], ['1177 kW', 'Leistung spätere Züge'], ['2003', 'letzte ausgemustert']],
    daten: { 'Bauart': 'Elektrischer Doppeltriebwagen', 'Hersteller': 'SIG und SAAS, später auch BBC', 'Betreiber': 'BLS, SEZ, GBS, BN', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '741–755', 'Länge': 'etwa 46,8–47,8 m', 'Leistung': '706 kW (741–743), 1177 kW (spätere)', 'Höchstgeschwindigkeit': '110 km/h, später 125 km/h', 'Erhalten': 'ex 742 bei Kerzers-Kallnach', 'In Betrieb seit': '1945' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Leistung', 'Höchstgeschwindigkeit', 'Erhalten', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – BLS ABDe 4/8', 'Datenblatt HCKD «ABDe 4/8», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: BLS_BRAUN, akzent: '#E8DCC8', tuer: '#4A2E1A', panto: true },
    bilder: [
      { src: 'bilder/bls-abde-4-8-c1.jpg', titel: 'ABDe 4/8 741', foto: 'J.J.Smit', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ABDe_4-8_741.jpg' }
    ] },
  { id: 'bls-rbde-565', kat: 'historisch', name: 'RBDe 565', beiname: 'NPZ', typ: 'Regional-Pendelzug der Privatbahnen (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die RBDe 565 waren die Nahverkehrspendelzüge der BLS. Sie fuhren mit Zwischen- und Steuerwagen im Regional- und S-Bahn-Verkehr.', 'Von 2022 bis 2025 wurden sie durch die neuen MIKA abgelöst.'],
    kennzahlen: [['22', 'Triebwagen'], ['125 km/h', 'Höchstgeschwindigkeit'], ['1650 kW', 'Dauerleistung'], ['1982', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrischer Triebwagen für Pendelzüge', 'Hersteller': 'SIG, SWS, SWP, BBC und ABB', 'Betreiber': 'BLS', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '721–742', 'Leistung': '1650 kW (Dauerleistung)', 'Höchstgeschwindigkeit': '125 km/h', 'Anzahl': '22', 'In Betrieb seit': '1982' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – BLS RBDe 4/4', 'Datenblatt HCKD «RBDe 565 – NPZ», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: BLS_GRUEN, tuer: BLS_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bls-rbde-565-c1.jpg', titel: 'RBDe 565 726 in Laupen (2019)', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:03.02.19_Laupen_BLS_RBDe_565726_(46306167944).jpg' }
    ] },
  { id: 'bls-rbde-566', kat: 'historisch', name: 'RBDe 566 II', beiname: '', typ: 'Regional-Pendelzug aus dem RM-Bestand (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die RBDe 566 II wurden 1984–1985 für die EBT-Gruppe gebaut und kamen mit der Fusion von 2006 zur BLS. Sie fuhren unter anderem Spiez–Frutigen, Brig–Goppenstein, in der S-Bahn Bern und zwischen Thun und Solothurn.', 'Die letzte planmässige Fahrt war am 6. Dezember 2024.'],
    kennzahlen: [['13', 'Triebwagen'], ['1984', 'erster Einsatz'], ['2024', 'letzte Fahrt'], ['230–242', 'Nummern']],
    daten: { 'Bauart': 'Elektrischer Triebwagen für Pendelzüge', 'Betreiber': 'EBT-Gruppe und RM, ab 2006 BLS', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': '230–242', 'Anzahl': '13', 'Verbleib': '566 241 mit Wagen beim Verein Pendelzug Mirage', 'In Betrieb seit': '1984' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'Verbleib', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['Wikipedia – EBT RBDe 4/4 II', 'Datenblatt HCKD «RBDe 566 II», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: BLS_GRUEN, tuer: BLS_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bls-rbde-566-c1.jpg', titel: 'RBDe 566 238 mit AB und ABt (2020)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20200111E050_RBDe566238-AB423-ABt938.jpg' }
    ] },
  { id: 'bls-rabe-526', kat: 'historisch', name: 'RABe 526', beiname: 'GTW', typ: 'Gelenktriebwagen von Stadler aus dem RM-Bestand (früher BLS)', bahn: 'bls', vorlaeufig: false,
    text: ['Die roten GTW der Regionalverkehr Mittelland kamen mit der Fusion zur BLS. 2013 verkaufte die BLS sie an die SBB, die sie im Jura ab Biel einsetzte; 2018 gingen sie an Thurbo.', 'Heute fahren sie nicht mehr bei der BLS.'],
    kennzahlen: [['13', 'Züge'], ['2013', 'an die SBB'], ['2018', 'an Thurbo'], ['Stadler', 'Hersteller']],
    daten: { 'Bauart': 'Elektrischer Gelenktriebwagen', 'Fahrzeugfamilie': 'GTW', 'Hersteller': 'Stadler', 'Betreiber': 'RM, dann BLS, SBB, Thurbo', 'Spurweite': 'Normalspur, 1435 mm', 'Anzahl': '13' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Anzahl'],
    abschnitte: [],
    quellen: ['RailPictures.net – Bildbeschreibung zur Geschichte der RM-GTW', 'Wikimedia Commons – Kategorie «THB ex SBB ex BLS ex RM RABe 526»', 'Datenblatt HCKD «RABe 526 – Stadler GTW», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: CRED, akzent: W1, tuer: '#8E1A1F', panto: true },
    bilder: [
      { src: 'bilder/bls-rabe-526-c1.jpg', titel: 'GTW RABe 526 265 der BLS', foto: 'Spoorjan', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_GTW_265.JPG' }
    ] },
  { id: 'bls-ew-iii', kat: 'historisch', name: 'EW III', beiname: 'Pendelzug', typ: 'Lokbespannter Pendelzug mit Einheitswagen III (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die EW-III-Pendelzüge der BLS waren von 1973 bis Ende 2021 unterwegs, zuletzt vor allem als RegioExpress zwischen Bern und Neuchâtel. Sie machten den neuen MIKA Platz.', 'SBB Historic hat einen EW-III-Zug übernommen und erhält ihn.'],
    kennzahlen: [['1973', 'erster Einsatz'], ['2021', 'ausser Betrieb'], ['165 m', 'Zuglänge'], ['140 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Bauart': 'Pendelzug mit Lok und 6 Wagen', 'Wagen': 'AD/ABS, A, B, B, B, Bt', 'Lokomotive': 'Re 465 (Kambly-Zug: Re 420)', 'Betreiber': 'BLS', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '165 m', 'Gewicht': '263 t', 'Höchstgeschwindigkeit': '140 km/h', 'Sitzplätze': '63 in der 1., 280 in der 2. Klasse', 'In Betrieb seit': '1973' },
    specOrder: ['Bauart', 'Wagen', 'Lokomotive', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Höchstgeschwindigkeit', 'Sitzplätze', 'In Betrieb seit'],
    abschnitte: [],
    quellen: ['BLS – Flotte: EWIII-Pendelzug mit Lokomotive', 'Datenblatt HCKD «EW III – Pendelzug», Oktober 2026'],
    art: { typ: 'wagen', farbe: W1, akzent: BLS_GRUEN },
    bilder: [
      { src: 'bilder/bls-ew-iii-c1.jpg', titel: 'EW-III-Pendelzug der BLS in Malters', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_EW_III_Malters.jpg' }
    ] },
  { id: 'bls-re-420', kat: 'historisch', name: 'Re 420', beiname: 'BLS', typ: 'Re 4/4 II im Dienst der BLS (historisch)', bahn: 'bls', vorlaeufig: false,
    text: ['Die BLS hatte zeitweise eigene Re 420 der bewährten Re-4/4-II-Familie. Die letzten drei zogen die Wagen der GoldenPass Line zwischen Interlaken Ost und Zweisimmen.', 'Heute besitzt die BLS keine Loks dieses Typs mehr.'],
    kennzahlen: [['4700 kW', 'Leistung'], ['140 km/h', 'Höchstgeschwindigkeit'], ['80 t', 'Gewicht'], ['14,8 m', 'Länge']],
    daten: { 'Bauart': 'Elektrolokomotive Bo’Bo’', 'Fahrzeugfamilie': 'Re 4/4 II', 'Betreiber': 'BLS (früher)', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '14,8 m', 'Gewicht': '80 t', 'Leistung': '4700 kW', 'Höchstgeschwindigkeit': '140 km/h' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit'],
    abschnitte: [],
    quellen: ['BLS – Flotte: Re 420', 'Datenblatt HCKD «Re 420 – Re 4/4 II», Oktober 2026'],
    art: { typ: 'lok', form: 'kantig', farbe: BLS_GRUEN, panto: true },
    bilder: [
      { src: 'bilder/bls-re-420-c1.jpg', titel: 'Re 420.5 mit Pendelzug auf der Bietschtalbrücke', foto: 'Kabelleger / David Gubler', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:BLS_Re_420.5_mit_Pendelzug_auf_der_Bietschtalbr%C3%BCcke.jpg' }
    ] }
);
