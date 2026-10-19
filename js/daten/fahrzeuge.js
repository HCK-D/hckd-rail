/* RailBase – Fahrzeugdaten. Neue Züge hier eintragen. */
'use strict';

/* =====================================================================
   DATEN
   Neue Fahrzeuge oder Bilder aus dem PDF hier eintragen.
   bilder: [{ src: 'bilder/re-460-1.jpg', titel: 'Re 460 in Zürich HB' }, …]
   nummern: Loknummern für die Suche, z. B. [[460000, 460118]] für 460 000–460 118 oder [[11101, 11349]] für alte Nummern
   ===================================================================== */
const KATS = [
  { id: 'personenverkehr', code: 'P', name: 'Personenverkehr', text: 'Fernverkehr, Regionalverkehr und S-Bahn: Hochgeschwindigkeits- und Doppelstockzüge, Triebzüge und Lokomotiven.', rep: 'rabe-501', bild: 'bilder/rabe-502-c2.jpg', bildPos: 'center 55%' },
  { id: 'cargo', code: 'G', name: 'Cargo', text: 'Lokomotiven für den Güterverkehr im Inland und über die Alpen, inklusive Mehrsystemloks für den Verkehr ins Ausland.', rep: 're-482', bild: 'bilder/re620-2.jpg', bildPos: 'center 60%' },
  { id: 'infrastruktur', code: 'I', name: 'Infrastruktur', text: 'Fahrzeuge für Bau, Unterhalt und Logistik am Netz: Bauzuglokomotiven und Baudienstfahrzeuge.', rep: 'aem-940', gruppen: ['Lokomotiven und Traktoren', 'Schotter- und Kippwagen', 'Schienentransport', 'Werkstatt- und Mannschaftswagen'], bild: 'bilder/aem-940-c1.jpg', bildPos: 'center 62%' },
  { id: 'rangier', code: 'R', name: 'Rangierfahrzeuge', text: 'Lokomotiven und Traktoren für das Rangieren in Bahnhöfen, Abstellanlagen und Anschlussgleisen.', rep: 'eem-923', bild: 'bilder/ee-922-c3.jpg', bildPos: 'center 60%' },
  { id: 'dienst', code: 'D', name: 'Dienst- und Spezialfahrzeuge', text: 'Lösch- und Rettungszüge, Schneeräumung, Messfahrzeuge, Krane und Fahrleitungsfahrzeuge.', rep: 'xrotm', bild: 'bilder/lrz-18-c1.jpg', bildPos: 'center 65%' },
  { id: 'historisch', code: 'H', name: 'Historische Fahrzeuge', text: 'Klassiker von SBB, BLS und TPF, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique oder in Museen erhalten.', rep: 'h-ce68ii', bild: 'bilder/h-ce68ii-c1.jpg', bildPos: 'center 60%' }
];

const W1 = '#F3F4F2', RED = '#D71920', CRED = '#C8102E', YEL = '#E8B400', ORA = '#E0661B';
const ZUEGE = [
  // ---------- SBB Personenverkehr ----------
  { id: 'rabe-501', kat: 'personenverkehr', name: 'RABe 501', beiname: 'Giruno', typ: 'Elektrischer Hochgeschwindigkeitszug', vorlaeufig: false,
    text: ['Der Giruno ist ein elfteiliger Mehrsystemtriebzug von Stadler für den nationalen und internationalen Fernverkehr.', 'Er verbindet die Schweiz mit Italien und Deutschland und ist für eine Höchstgeschwindigkeit von 250 km/h ausgelegt.'],
    kennzahlen: [['41', 'Züge in der SBB-Flotte'], ['405', 'Sitzplätze'], ['250 km/h', 'Höchstgeschwindigkeit'], ['2019', 'erster SBB-Einsatz']],
    daten: { 'Hersteller': 'Stadler', 'Betreiber': 'SBB Personenverkehr', 'Zugbildung': '11 Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC · 25 kV 50 Hz AC · 3 kV DC', 'Höchstgeschwindigkeit': '250 km/h', 'Länge': '202,0 m über Kupplung', 'Gewicht': '381 t leer', 'Leistung': '6000 kW max. am Rad', 'Anfahrzugkraft': '300 kN', 'Sitzplätze': '405 (117 in der 1. Klasse, 288 in der 2. Klasse)', 'Restaurant': '17 Plätze zusätzlich', 'Niederflureinstieg': 'ja', 'Anzahl': '41 Züge', 'In Betrieb seit': '2019' },
    specOrder: ['Hersteller', 'Betreiber', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Höchstgeschwindigkeit', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Sitzplätze', 'Restaurant', 'Niederflureinstieg', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Technik und Sitzplatzaufteilung nach Stadler, Leergewicht nach SBB Infrastruktur.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die SBB bestellte 2014 zunächst 29 Züge bei Stadler. Die erste Serie wurde 2019 bis 2021 in Betrieb gesetzt. Nach Folgeaufträgen wuchs die Flotte auf 41 Züge.', 'Die SBB kündigte die Ablieferung des letzten bestellten Fahrzeugs für Dezember 2025 an; ihre aktuelle Fahrzeugübersicht führt alle 41 Züge.'] },
      { titel: 'Einsatz und Technik', p: ['Zu den Einsatzachsen gehört Zürich–Mailand durch den Gotthard-Basistunnel. Im Fahrplan 2026 kommen Giruno auch zwischen Basel und Hamburg zum Einsatz. Der Hersteller nennt Zulassungen für die Schweiz, Deutschland, Italien und Österreich.', 'Vier Traktionsstromrichter versorgen vier Motordrehgestelle; zwei Züge können in Doppeltraktion verkehren.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['WLAN', 'Steckdosen', 'Familienzone', 'Ruhezone', 'Businesszone', 'Veloabstellplätze', 'Rollstuhlgängige Toiletten in beiden Klassen', 'Bordrestaurant'],
        p: ['Die Einstiege sind für Perronhöhen von 55 und 76 cm ausgelegt. An passenden Perrons können Rollstuhlfahrende selbstständig einsteigen und das Bordrestaurant erreichen.'] }
    ],
    quellen: ['SBB – Giruno mit Flottenangaben, Einsatz und Ausstattung', 'Stadler – Datenblatt SMILE für die SBB, S. 1–2', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 6044, S. 361', 'SBB – Angebotsausbau Schweiz–Deutschland, 5. Dezember 2025'],
    art: { typ: 'triebzug', nase: 'lang', farbe: W1, akzent: RED, tuer: '#7B848C', panto: true }, bilder: [
      { src: 'bilder/rabe-501-c1.jpg', titel: 'RABe 501 «Giruno» bei der Durchfahrt', foto: 'Silesia711', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_RABe501.jpg' },
      { src: 'bilder/rabe-501-c2.jpg', titel: 'Giruno von Stadler im Bahnhof', foto: 'Kecko from Rural area of Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Giruno_by_Stadler_(47086627004).jpg' },
      { src: 'bilder/rabe-501-c3.jpg', titel: 'Giruno in Basel', foto: 'Gefyrotes', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Giruno_train_Basel_2019-05-13_3.jpg' },
      { src: 'bilder/rabe-501-c4.jpg', titel: 'Zwei Giruno nebeneinander', foto: 'Kecko from Rural area of Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Giruno_by_Stadler_(46959789505).jpg' },
      { src: 'bilder/rabe-501-c5.jpg', titel: 'Giruno mit Restaurantwagen in der Halle', foto: 'Kecko from Rural area of Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Giruno_by_Stadler_(32931943417).jpg' }
    ] },
  { id: 'rabde-500', kat: 'personenverkehr', name: 'RABDe 500', beiname: 'ICN', typ: 'InterCity-Neigezug', vorlaeufig: false,
    text: ['Der ICN ist ein siebenteiliger elektrischer Neigezug für den Schweizer Fernverkehr. Seine Neigetechnik ermöglicht auf dafür geeigneten kurvenreichen Strecken höhere Kurvengeschwindigkeiten.', 'Ein Schwerpunkt seines Einsatzes ist die Jurasüdfusslinie.'],
    nummern: [[500000, 500043]],
    kennzahlen: [['44', 'Züge in der SBB-Flotte'], ['471', 'Sitzplätze laut SBB'], ['200 km/h', 'Höchstgeschwindigkeit'], ['1999', 'erster Einsatz laut SBB']],
    daten: { 'Baureihe': 'RABDe 500', 'Betreiber': 'SBB Personenverkehr', 'Zugbildung': '7 Wagen', 'Fahrzeugnummern': '500 000–500 043', 'Spurweite': 'Normalspur, 1435 mm', 'Höchstgeschwindigkeit': '200 km/h', 'Länge': '188,8 m', 'Leistung': '5200 kW max.', 'Gewicht': '368 t leer', 'Anfahrzugkraft': '210 kN', 'Neigetechnik': 'aktive Wagenkastenneigung', 'Niederflureinstieg': 'nein', 'Sitzplätze': '471', 'Anzahl': '44 Züge (erste Serie 24, zweite Serie 20)', 'In Betrieb seit': '1999', 'Hersteller': 'Serie 1: Adtranz und FIAT-SIG; Serie 2: Bombardier/Alstom' },
    specOrder: ['Baureihe', 'Betreiber', 'Zugbildung', 'Fahrzeugnummern', 'Spurweite', 'Höchstgeschwindigkeit', 'Länge', 'Leistung', 'Gewicht', 'Anfahrzugkraft', 'Neigetechnik', 'Niederflureinstieg', 'Sitzplätze', 'Anzahl', 'In Betrieb seit', 'Hersteller'],
    specNote: 'Technische Werte nach SBB Infrastruktur. Die SBB-Fahrzeugseite rundet die Länge auf 190 m und nennt 471 Sitzplätze sowie 1999 als ersten Einsatz.',
    abschnitte: [
      { titel: 'Hersteller und Serien', p: ['Die erste Serie mit den Endnummern 000 bis 023 entstand bei Adtranz und FIAT-SIG. Die zweite Serie mit den Nummern 024 bis 043 lief unter dem Konsortium Bombardier/Alstom; ihre Auslieferung begann 2003.', 'Alstom lieferte aus Neuhausen unter anderem die Drehgestelle und die Neigetechnik.'] },
      { titel: 'Einsatz und Ausstattung', liste: ['Restaurant', 'Familienzone', 'Ruhezone', 'Businesszone', 'Velo- und Gepäckbereiche', 'Rollstuhlplätze', 'Rollstuhlgängiges WC'],
        p: ['Zu den Hauptachsen zählen Basel–Biel–Lausanne und Romanshorn–St. Gallen–Zürich–Biel–Genève. Weitere Einsätze führen ins Tessin.', 'Rollstuhlplätze und ein rollstuhlgängiges WC sind vorhanden; der Einstieg ist jedoch nicht niederflurig.'] },
      { titel: 'Modernisierung', p: ['Seit 2021 erneuert die SBB die ICN im Werk Yverdon. Der erste komplett modernisierte Zug wurde am 24. Oktober 2024 vorgestellt. Neben Sitzen, Beleuchtung, Tischen und Kundeninformation werden auch technische Komponenten überarbeitet.', 'Die aktuelle SBB-Fahrzeugseite nennt 2034 als Abschlussjahr; Ziel sind rund 20 weitere Einsatzjahre.'] }
    ],
    quellen: ['SBB – ICN mit Flottenangaben, Herstellern, Einsatz und Modernisierungszeitraum', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 6022, S. 339', 'SBB – Präsentation des ersten komplett modernisierten ICN, 24. Oktober 2024', 'Alstom – Auslieferung der zweiten ICN-Serie, Mitteilung vom 23. Juni 2003'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: RED, tuer: '#6E7780', panto: true },
    bilder: [
      { src: 'bilder/icn-2.jpg', titel: 'ICN im Sommer vor den Bergen' },
      { src: 'bilder/icn-1.jpg', titel: 'ICN in der Wintersonne' },
      { src: 'bilder/rabde-500-c1.jpg', titel: 'RABDe 500 021 in Rotkreuz', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:1_FFS_RABDe_500_021-1_Rotkreuz_120415.jpg' },
      { src: 'bilder/rabde-500-c2.jpg', titel: 'ICN unterwegs', foto: 'Markus Eigenheer from Genève, Schweiz', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bombardier_Alstom_ICN_RABDe_500_(46362508734).jpg' },
      { src: 'bilder/rabde-500-c3.jpg', titel: 'ICN auf der Aarebrücke in Solothurn', foto: 'Julian Ryf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Aarebr%C3%BCcke_Solothurn_220320.jpg' }
    ] },
  { id: 'rabe-502', kat: 'personenverkehr', name: 'RABe 502', beiname: 'FV-Dosto', typ: 'Twindexx Swiss Express, Doppelstock-Fernverkehrszug', vorlaeufig: false,
    text: ['Der Twindexx Swiss Express ist der Fernverkehrs-Doppelstocktriebzug der SBB. Die SBB bezeichnet ihn als FV-Dosto.', 'Drei Ausführungen bieten unterschiedlich viel Platz und können je nach Nachfrage miteinander gekuppelt werden: der IC200 als RABDe 502 sowie IR200 und IR100 als RABe 502.'],
    kennzahlen: [['62', 'Züge in der SBB-Flotte'], ['200 km/h', 'Höchstgeschwindigkeit'], ['2018', 'erster SBB-Einsatz'], ['3', 'Ausführungen']],
    daten: { 'Baureihe': 'RABDe 502 (IC200), RABe 502 (IR200, IR100)', 'Hersteller': 'Bombardier Transportation, heute Alstom', 'Spurweite': 'Normalspur, 1435 mm', 'Höchstgeschwindigkeit': '200 km/h', 'Antrieb': 'Permanentmagnet-Synchronmotoren', 'Länge': '200,6 m (IC200, IR200), 101,0 m (IR100)', 'Sitzplätze': '606 (IC200), 682 (IR200), 330 (IR100)', 'Leistung': '7500 kW max. (IR100: 3750 kW)', 'Gewicht': '237,1–467,4 t leer, je nach Ausführung', 'Anzahl': '62 Züge (23 Intercity, 39 Interregio)', 'In Betrieb seit': '2018, ganze Flotte geliefert 2022' },
    specOrder: ['Baureihe', 'Hersteller', 'Spurweite', 'Höchstgeschwindigkeit', 'Antrieb', 'Länge', 'Sitzplätze', 'Leistung', 'Gewicht', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Leergewichte laut SBB: IR100 237,1 t, IR200 463,2 t, IC200 467,4 t.',
    abschnitte: [
      { titel: 'Technische Daten der drei Ausführungen', tabelle: { kopf: ['Merkmal', 'IC200', 'IR200', 'IR100'], zeilen: [
        ['Baureihe', 'RABDe 502', 'RABe 502', 'RABe 502'],
        ['Wagen je Zug', '8', '8', '4'],
        ['Länge', '200,6 m', '200,6 m', '101,0 m'],
        ['Sitzplätze', '606', '682', '330'],
        ['Maximale Leistung', '7500 kW', '7500 kW', '3750 kW'],
        ['Leergewicht', '467,4 t', '463,2 t', '237,1 t'],
        ['Anfahrzugkraft', '482,24 kN', '482,24 kN', '241,12 kN'],
        ['Restaurant', 'ja', 'nein', 'nein']] },
        hinweis: 'Sitzplätze und Ausstattung nach SBB, technische Werte nach SBB Infrastruktur. Die Gewichte gelten für leere Fahrzeuge.' },
      { titel: 'Hersteller und Beschaffung', p: ['Hersteller war Bombardier Transportation, heute Teil von Alstom. Aus der ursprünglichen Beschaffung von 59 Zügen wurden durch eine Vereinbarung von 2014 insgesamt 62 Fahrzeuge: 23 Intercity- und 39 Interregio-Züge.', 'Die Flotte war 2022 vollständig ausgeliefert. Der Antrieb verwendet Permanentmagnet-Synchronmotoren.'] },
      { titel: 'Einsatz und Ausstattung', liste: ['Niederflureinstiege', 'Steckdosen', 'Rollstuhlplätze', 'Rollstuhlgängiges WC', 'Restaurant (IC-Ausführung)', 'Familienwagen (IC-Ausführung)'],
        p: ['Ein wichtiger Einsatzkorridor ist St. Gallen–Zürich–Bern–Lausanne–Genève. Weitere Einsätze führen unter anderem über Basel–Zürich, Zürich–Chur und Luzern–Zürich.'] },
      { titel: 'Weiterentwicklung', p: ['Die SBB hat den Umbau der Drehgestelle der gesamten Flotte beschlossen. Dabei wird die Wankkompensation entfernt und die Federung angepasst.', 'Laut Mitteilung vom Dezember 2025 soll der Serienumbau nach der Betriebsbewilligung Ende 2026 beginnen und bis Anfang der 2030er-Jahre dauern.'] }
    ],
    quellen: ['SBB – FV-Dosto mit Flottenangaben, Ausstattung und Einsatzstrecken', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtypen 6041 bis 6043, S. 358–360', 'Alstom – Twindexx Swiss Express für die SBB', 'SBB – Umbau der FV-Dosto, Mitteilung vom 5. Dezember 2025'],
    art: { typ: 'triebzug', nase: 'mittel', dd: true, farbe: W1, akzent: RED, tuer: RED, panto: true },
    bilder: [
      { src: 'bilder/fvdosto-1.jpg', titel: 'FV-Dosto im Fernverkehr vor Bergkulisse' },
      { src: 'bilder/rabe-502-c1.jpg', titel: 'RABDe 502 006 «Olten» in Zürich HB', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_RABDe_502_006_%22Olten%22_in_Z%C3%BCrich_HB_(2022).jpg' },
      { src: 'bilder/rabe-502-c2.jpg', titel: 'RABe 502 402 «Biel/Bienne» vor den Bergen', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_RABe_502_402_%22Biel_Bienne%22_(52111202180).jpg' },
      { src: 'bilder/rabe-502-c3.jpg', titel: 'RABe 502 214 bei Tecknau', foto: 'Alex Noble', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:20240701_SBB_502214_Tecknau.jpg' },
      { src: 'bilder/rabe-502-c4.jpg', titel: 'RABe 502 404 am See', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_RABe_502_404_(52786196986).jpg' }
    ] },
  { id: 'rabe-511', kat: 'personenverkehr', name: 'RABe 511', beiname: 'KISS', typ: 'Doppelstock-Triebzug, Regio-Dosto und IR-Dosto', vorlaeufig: false,
    text: ['Die Baureihe RABe 511 von Stadler (Typ KISS) umfasst zwei Doppelstockausführungen: 69 sechsteilige Regio-Dosto und 24 vierteilige IR-Dosto.', 'Die SBB führt die beiden Ausführungen getrennt, weil Länge, Kapazität und Einsatz voneinander abweichen.'],
    kennzahlen: [['93', 'Züge beider Ausführungen'], ['160 km/h', 'Höchstgeschwindigkeit'], ['2012', 'erster Einsatz'], ['Stadler', 'Hersteller']],
    daten: { 'Hersteller': 'Stadler', 'Betreiber': 'SBB Personenverkehr', 'Bauart': 'Doppelstock-Triebzug', 'Zugbildung': '6 Wagen (Regio-Dosto), 4 Wagen (IR-Dosto)', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Höchstgeschwindigkeit': '160 km/h', 'Länge': '150,0 m (Regio-Dosto), 100,0 m (IR-Dosto)', 'Leistung': '6000 kW (beide Ausführungen)', 'Gewicht': '210–292 t, je nach Ausführung', 'Sitzplätze': '535 (Regio-Dosto), 317 (IR-Dosto)', 'Niederflureinstieg': 'ja', 'Anzahl': '93 Züge (69 Regio-Dosto, 24 IR-Dosto)', 'In Betrieb seit': '2012', 'Einsatz': 'S-Bahn Zürich, RegioExpress, InterRegio' },
    specOrder: ['Hersteller', 'Betreiber', 'Bauart', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Höchstgeschwindigkeit', 'Länge', 'Leistung', 'Gewicht', 'Sitzplätze', 'Niederflureinstieg', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Gewicht laut SBB: 210 t für den vierteiligen IR-Dosto, 292 t für den sechsteiligen Regio-Dosto.',
    abschnitte: [
      { titel: 'Ausführungen im Vergleich', tabelle: { kopf: ['Merkmal', 'Regio-Dosto', 'IR-Dosto'], zeilen: [
        ['Fahrzeuge', '69', '24'],
        ['Wagen je Zug', '6', '4'],
        ['Länge', '150,0 m', '100,0 m'],
        ['Sitzplätze', '535 (120 / 415)', '317'],
        ['Geschwindigkeit', '160 km/h', '160 km/h'],
        ['Leistung', '6000 kW', '6000 kW'],
        ['Gewicht', '292 t', '210 t'],
        ['Niederflureinstieg', 'ja', 'ja'],
        ['Verkehr', 'S-Bahn / RE', 'IR / RE']] },
        hinweis: 'Die Aufteilung 120 / 415 bezeichnet die Plätze der 1. und 2. Klasse im Regio-Dosto. Für die IR-Ausführung nennt die SBB 317 Plätze insgesamt.' },
      { titel: 'Einsatz', p: ['Regio-Dosto fahren vor allem auf Linien der Zürcher S-Bahn und als RE Wettingen–Olten–Luzern.', 'IR-Dosto verkehren im interregionalen Verkehr der Deutsch- und Westschweiz, unter anderem im Raum Zürich, im Mittelland, in der Nordschweiz und auf der Achse nach Chur. Die IR-Ausführung kann mit dem neueren RABe 512 gekuppelt werden.'] },
      { titel: 'Ausstattung und Erneuerung', liste: ['Breite Tiefeinstiege', 'Rollstuhlplätze', 'Rollstuhlgängiges WC', 'Flächen für Kinderwagen und Velos'],
        p: ['Die IR-Dosto wurden 2020–2024 für den Fernverkehr aufgewertet, unter anderem mit Steckdosen und 2+1-Bestuhlung in der 1. Klasse.', 'Die SBB erneuert die Regio-Dosto schrittweise; der erste erneuerte Zug verkehrt seit September 2026.'] }
    ],
    quellen: ['SBB – Regio-Dosto: 69 sechsteilige Züge', 'SBB – IR-Dosto: 24 vierteilige Züge', 'SBB News – Erneuerung der Zürcher S-Bahn-Flotten, Oktober 2026', 'SBB – Regio-Dosto RABe 511 mit Flottenangaben (Leistung und Gewicht)'],
    art: { typ: 'triebzug', nase: 'kurz', dd: true, farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-511-c1.jpg', titel: 'Regio-Dosto als S15 der Zürcher S-Bahn in Jona', foto: 'GleisReis', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:S15_ZVV_Jona.jpg' },
      { src: 'bilder/rabe-511-c2.jpg', titel: 'RABe 511 112 in Genève-Cornavin', foto: 'SmoIchopper', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:511112_-_Gen%C3%A8ve-Cornavin.jpg' },
      { src: 'bilder/rabe-511-c3.jpg', titel: 'RABe 511 026 in Genève', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:06.06.23_Gen%C3%A8ve_511026_(52968872439).jpg' },
      { src: 'bilder/rabe-511-c4.jpg', titel: 'RABe 511 in Sevelen', foto: 'Kecko', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:2019-09-27_Sevelen_-_Station_SBB_-_48814416066.jpg' },
      { src: 'bilder/rabe-511-c5.jpg', titel: 'RABe 511 018 in Zürich HB', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:25_FFS_RABe_511_018_Zuerich_HB_120415.jpg' }
    ] },
  { id: 'rabe-514', kat: 'personenverkehr', name: 'RABe 514', beiname: 'DTZ', typ: 'Doppelstocktriebzug der Zürcher S-Bahn', vorlaeufig: false,
    text: ['Der RABe 514 ist der doppelstöckige Triebwagenzug (DTZ) der zweiten Generation der Zürcher S-Bahn. Siemens lieferte 61 vierteilige Züge.', 'Tiefeinstiege mit Spaltüberbrückung erleichtern den Zugang.'],
    kennzahlen: [['61', 'Züge'], ['360', 'Sitzplätze je Zug'], ['140 km/h', 'Höchstgeschwindigkeit'], ['2006', 'erster SBB-Einsatz']],
    daten: { 'Hersteller': 'Siemens', 'Betreiber': 'SBB Personenverkehr', 'Bauart': 'Doppelstocktriebzug', 'Zugbildung': '4 Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Länge': '100,0 m', 'Leistung': '3200 kW', 'Gewicht': '223 t leer', 'Höchstgeschwindigkeit': '140 km/h', 'Sitzplätze': '360', 'Niederflureinstieg': 'ja', 'Anzahl': '61 Züge', 'In Betrieb seit': '2006', 'Beschaffungszeit': '2006–2009', 'Einsatz': 'S-Bahn Zürich' },
    specOrder: ['Hersteller', 'Betreiber', 'Bauart', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Länge', 'Leistung', 'Gewicht', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Niederflureinstieg', 'Anzahl', 'In Betrieb seit', 'Beschaffungszeit', 'Einsatz'],
    abschnitte: [
      { titel: 'Einsatz und Fahrgasträume', liste: ['Durchgehender Tiefeinstieg', 'Multifunktionsbereiche für Velo und Kinderwagen', 'Vorrangsitze', 'Rollstuhlplätze', 'Rollstuhlgängiges WC'],
        p: ['Die DTZ können auf dem gesamten Netz der Zürcher S-Bahn eingesetzt werden.'] },
      { titel: 'Modernisierung', p: ['Die SBB erneuert die Flotte seit 2025, voraussichtlich bis etwa 2030. Dazu gehören eine neue Lackierung, besserer Mobilfunkempfang durch angepasste Fensterscheiben sowie Arbeiten an Beleuchtung, Innenraum und technischen Komponenten.', 'Die Erneuerung soll die Nutzungsdauer auf 32 Jahre verlängern.'] }
    ],
    quellen: ['SBB – DTZ: Kenndaten, Einsatz und Ausstattung', 'SBB News – Erneuerung der DTZ und Regio-Dosto, Oktober 2026', 'SBB Infrastruktur – Fahrtypenkatalog 2026, technische Daten RABe 514'],
    art: { typ: 'triebzug', nase: 'kurz', dd: true, farbe: W1, akzent: RED, tuer: '#4B545C', panto: true }, bilder: [
      { src: 'bilder/rabe-514-c1.jpg', titel: 'RABe 514 «DTZ» unterwegs', foto: 'Samson Ng . D201@EAL', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RABe_514_DTZ_EMU_(54904500242).jpg' },
      { src: 'bilder/rabe-514-c2.jpg', titel: 'Treppe zum Mittelstock im erneuerten DTZ', foto: 'E235JREMU', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:LR25_RABe_514,_Treppenhaus_Mittelstock.jpg' },
      { src: 'bilder/rabe-514-c3.jpg', titel: 'RABe 514 054 als S8 in Zürich Enge', foto: 'S5A-0043', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:(CHE-Zurich)_SBB_CFF_FFS_514054_S8_@_Zurich_Enge_2023-11-21.jpg' },
      { src: 'bilder/rabe-514-c4.jpg', titel: 'RABe 514 015 im neuen ZVV-Design 2023', foto: 'SchmalspurDVZO', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:%22ZVV-Livery_2023_%22_RABe_514_015.jpg' },
      { src: 'bilder/rabe-514-c5.jpg', titel: 'DTZ als S15 auf dem Seedamm in Rapperswil', foto: 'Roland zh', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bahnhof_Rapperswil_-_S15_-_Seedamm_2011-11-18_15-40-26.jpg' }
    ] },
  { id: 'rabe-523', kat: 'personenverkehr', name: 'RABe 523', beiname: 'FLIRT', typ: 'Elektrischer Regionaltriebzug von Stadler', vorlaeufig: false,
    text: ['Der vierteilige RABe 523 war der erste FLIRT für die SBB. Er wurde für die Stadtbahn Zug entwickelt und ging 2004 in den Fahrgasteinsatz.', 'Die Baureihe gehört zur grösseren FLIRT-Familie, die in mehreren Ausführungen verkehrt.'],
    kennzahlen: [['2004', 'erster Einsatz'], ['98*', 'Fahrzeuge gemäss Nummernreihen'], ['2656 kW', 'Leistung'], ['74,08 m', 'Länge']],
    daten: { 'Bauart': 'Elektrotriebzug', 'Fahrzeugfamilie': 'FLIRT', 'Grundtyp': '4 Wagen', 'Einstieg': 'niederflurig', 'Hersteller': 'Stadler', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Länge': '74,08 m', 'Gewicht': '120 t', 'Leistung': '2656 kW', 'Höchstgeschwindigkeit': '160 km/h (FLIRT-Familie laut SBB)', 'Erste Region': 'Stadtbahn Zug', 'Einsatz': 'Regionalverkehr, S-Bahn', 'Anzahl': '98* (gemäss Nummernreihen)', 'In Betrieb seit': '2004' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Grundtyp', 'Einstieg', 'Hersteller', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Erste Region', 'Einsatz', 'Anzahl', 'In Betrieb seit'],
    specNote: '* Die 98 ergeben sich aus den veröffentlichten Nummernreihen 001–073, 101–114 und 501–511; eine separat bestätigte aktuelle SBB-Bestandsmeldung gibt es nicht. Die 160 km/h nennt die SBB für die ganze Regional-FLIRT-Familie.',
    abschnitte: [
      { titel: 'Regionaler Einsatz und Ausstattung', liste: ['Niederflureinstieg', 'Rollstuhlplätze', 'Rollstuhlgängige Toiletten', 'Abstellflächen für Velos und Kinderwagen'],
        p: ['FLIRT fahren laut SBB als S-Bahn unter anderem in den Kantonen Aargau, Solothurn, Luzern, Basel, Neuenburg, Freiburg und Waadt. Die Ausstattung gehört zur ganzen Familie; Details unterscheiden sich nach Ausführung.'] },
      { titel: 'Stückzahl richtig einordnen', p: ['Die veröffentlichte Zahl von 209 umfasst sämtliche im Regionalverkehr eingesetzten FLIRT der SBB, darunter weitere Baureihen und Ausführungen.', 'Für den RABe 523 allein ergeben die veröffentlichten Nummernreihen 001–073, 101–114 und 501–511 zusammen 98 Fahrzeuge. Das ist eine Herleitung aus den Nummern, keine offizielle aktuelle Bestandsmeldung der SBB.'] }
    ],
    quellen: ['SBB – FLIRT: Familienflotte, technische Spannbreiten und Einsatz', 'Stadler – Mitteilung zur FLIRT-Entwicklung, S. 2 (RABe 523 ab 2004)', 'SBB Infrastruktur – Fahrtypenkatalog 2026, technische Daten RABe 523', 'SBB – FLIRT-Familie der SBB, Nummernreihen'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-523-c1.jpg', titel: 'RABe 523 001 in Muttenz', foto: 'The Nikon User', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:523_001_Muttenz.jpg' },
      { src: 'bilder/rabe-523-c2.jpg', titel: 'RABe 523 019', foto: 'Alex Noble', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:20221007_SBB_523019.jpg' },
      { src: 'bilder/rabe-523-c3.jpg', titel: 'RABe 523 024 in Montreux', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L03_630_Hp_Montreux_SBB,_RABe_523_024.jpg' },
      { src: 'bilder/rabe-523-c4.jpg', titel: 'RABe 523 018 in Yverdon-les-Bains', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:03.02.19_Yverdon-les-Bains_SBB_RABe_523018_(46978162592).jpg' },
      { src: 'bilder/rabe-523-c5.jpg', titel: 'RABe 523 038', foto: 'Alex Noble', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:20230605_SBB_523038.jpg' }
    ] },
  { id: 'rbde-560', kat: 'personenverkehr', name: 'RBDe 560', beiname: 'Domino', typ: 'Regionaler Pendelzug', vorlaeufig: false,
    text: ['Der Domino ist ein elektrischer Pendelzug für den Regional- und S-Bahn-Verkehr. Er kombiniert modernisierte NPZ-Trieb- und Steuerwagen mit einem neuen INOVA-Niederflurwagen.', 'Die Bezeichnung RBDe 560 gehört zum motorisierten Endwagen und bezeichnet nicht den ganzen Zug.'],
    kennzahlen: [['86', 'SBB-Züge'], ['140 km/h', 'Höchstgeschwindigkeit'], ['75 m', 'Länge'], ['172', 'Sitzplätze'], ['2009', 'erster SBB-Einsatz']],
    daten: { 'Fahrzeugart': 'elektrischer Pendelzug', 'Betreiber': 'SBB', 'Zugbildung': 'RBDe 560 + B INOVA + ABt', 'Stromsystem': '15 kV, 16,7 Hz AC', 'Spurweite': 'Normalspur, 1435 mm', 'Höchstgeschwindigkeit': '140 km/h', 'Leistung': '1700 kW am RBDe 560', 'Anfahrzugkraft': '182 kN', 'Länge': '75 m', 'Gewicht': 'ca. 146 t leer', 'Sitzplätze': '172', 'Niederflur': 'im Mittelwagen', 'Anzahl': '86 Züge', 'In Betrieb seit': '2009 (erster SBB-Einsatz)', 'Hersteller': 'Schindler Waggon, SWA, SIG, ABB und Bombardier (je nach Wagen)', 'Status': 'im Einsatz' },
    specOrder: ['Fahrzeugart', 'Betreiber', 'Zugbildung', 'Stromsystem', 'Spurweite', 'Höchstgeschwindigkeit', 'Leistung', 'Anfahrzugkraft', 'Länge', 'Gewicht', 'Sitzplätze', 'Niederflur', 'Anzahl', 'In Betrieb seit', 'Hersteller', 'Status'],
    specNote: 'Flotten-, Kapazitäts- und Einsatzdaten nach SBB. Technische Werte nach SBB Infrastruktur. Das Leergewicht ist die Summe der drei Wagen.',
    abschnitte: [
      { titel: 'Fahrzeugteile', tabelle: { kopf: ['Fahrzeug', 'Funktion', 'Länge', 'Leergewicht', 'Antrieb'], zeilen: [
        ['RBDe 560', 'motorisierter Endwagen', '25,0 m', '72,0 t', '1700 kW / 182 kN'],
        ['B INOVA', 'Niederflur-Zwischenwagen', '24,4 m', '36,0 t', 'ohne eigenen Antrieb'],
        ['ABt', 'Steuerwagen mit 1. und 2. Klasse', '25,0 m', '38,0 t', 'ohne eigenen Antrieb']] } },
      { titel: 'Fahrzeugkonzept und Baujahre', p: [
        'Für den Domino gibt es kein einzelnes Baujahr für den ganzen Zug. Die Grundfahrzeuge stammen aus der NPZ-Familie; bei den TPF-Kompositionen werden dafür die Jahre 1984 bis 1996 genannt. Die grosse Renovierung der TPF-Züge erfolgte 2009 bis 2011.',
        'Bei der SBB ging der erste Domino 2009 in Betrieb. Bombardier lieferte die neuen INOVA-Mittelwagen; die übrigen Hersteller unterscheiden sich je nach Trieb- oder Steuerwagen.'] },
      { titel: 'Ausstattung', liste: ['Verbesserter Mobilfunkempfang', 'Vorrangsitze', 'Rollstuhlplätze', 'Rollstuhlgängige Toilette', 'Steckdosen in der 1. Klasse', 'Velo- und Kinderwagenplätze', 'Gepäckablageflächen', 'Multifunktionszone im Mittelwagen'],
        p: ['Zugänglichkeit: Der stufenlose Einstieg befindet sich im INOVA-Mittelwagen. Trieb- und Steuerwagen sind nicht durchgehend niederflurig.'] },
      { titel: 'Einsatz bei der SBB', p: ['Die SBB setzt den Domino hauptsächlich auf einzelnen S-Bahn-Linien in den Kantonen Aargau, Luzern, Neuenburg und Waadt ein. Die genaue Linienzuordnung kann sich mit dem Fahrplan und der Fahrzeugdisposition ändern.'] },
      { titel: 'Weitere Betreiber', tabelle: { kopf: ['Betreiber', 'Bestand', 'Länge', 'Sitzplätze', 'Besonderheiten'], zeilen: [
        ['TPF', '14', '75 m', '184 (24 1. Kl. + 160 2. Kl.)', '1650 kW; 140 km/h; RBDe 235–247 und 269'],
        ['RegionAlps', '16', '74,5 m', '188 (12 1. Kl. + 176 2. Kl.)', '100 Stehplätze; 140 km/h; St-Gingolph–Brig']] },
        hinweis: 'Bestands- und Kapazitätswerte nach TPF und RegionAlps. Die Werte anderer Betreiber lassen sich nicht ungeprüft auf SBB-Züge übertragen; besonders Leistung und Kapazität unterscheiden sich.' },
      { titel: 'Ablösung', p: [
        'Die SBB beschafft 198 FLIRT Evo, um Domino-Züge und FLIRT der ersten Generation schrittweise zu ersetzen. Der Einsatz bei der SBB beginnt 2028; die regionale Einführung ist bis 2033 vorgesehen.',
        'RegionAlps hat 27 FLIRT Evo angekündigt, welche Domino und NINA bis 2031 ersetzen sollen.'] }
    ],
    quellen: ['SBB – Domino Fahrzeugseite', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Seiten 89, 129 und 148', 'TPF – Kompositionen Domino 3', 'RegionAlps – Die Domino Züge', 'RegionAlps – Medienmitteilung vom 22. September 2025', 'SBB – FLIRT Evo Fahrzeugseite'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: RED, tuer: RED, panto: true },
    bilder: [
      { src: 'bilder/domino-1.jpg', titel: 'Domino zwischen Reben und Dorf am See' },
      { src: 'bilder/domino-2.jpg', titel: 'Domino im Herbstlicht' },
      { src: 'bilder/domino-3.jpg', titel: 'Zwei Domino in Doppeltraktion über dem See' },
      { src: 'bilder/domino-4.jpg', titel: 'Domino in den Rebterrassen' },
      { src: 'bilder/domino-5.jpg', titel: 'Domino am Seeufer' },
      { src: 'bilder/domino-6.jpg', titel: 'Domino in Doppeltraktion in den Rebbergen' }
    ] },
  { id: 're-460', kat: 'personenverkehr', name: 'Re 460', beiname: 'Lok 2000', typ: 'Elektrische Universallokomotive', vorlaeufig: false,
    text: ['Die Re 460, oft «Lok 2000» genannt, ist eine vierachsige Hochleistungs-Universallokomotive der SBB für den schnellen Personenverkehr.', 'Sie bildet das Rückgrat des Fernverkehrs in der Schweiz und zieht unter anderem die zweistöckigen IC2000-Züge sowie InterCity-Kompositionen mit Einheitswagen.'],
    nummern: [[460000, 460118]],
    kennzahlen: [['119', 'SBB-Lokomotiven'], ['200 km/h', 'im Betrieb · gebaut für 230 km/h'], ['18,5 m', 'Länge'], ['6100 kW', 'Dauerleistung'], ['1992', 'erster SBB-Einsatz']],
    daten: { 'Fahrzeugart': 'Elektrische Universallokomotive', 'Betreiber': 'SBB', 'Achsanordnung': "Bo'Bo'", 'Stromsystem': '15 kV, 16,7 Hz AC', 'Spurweite': 'Normalspur, 1435 mm', 'Höchstgeschwindigkeit': '200 km/h im Betrieb, gebaut für 230 km/h', 'Leistung': '6100 kW Dauerleistung', 'Anfahrzugkraft': '300 kN', 'Länge': '18,5 m', 'Gewicht': '84 t Dienstgewicht', 'Hersteller': 'SLM / ABB', 'In Betrieb seit': '1992 (erster SBB-Einsatz)', 'Anzahl': '119 Lokomotiven', 'Status': 'im Einsatz (Refit modernisiert)' },
    specOrder: ['Fahrzeugart', 'Betreiber', 'Achsanordnung', 'Stromsystem', 'Spurweite', 'Höchstgeschwindigkeit', 'Leistung', 'Anfahrzugkraft', 'Länge', 'Gewicht', 'Hersteller', 'In Betrieb seit', 'Anzahl', 'Status'],
    abschnitte: [
      { titel: 'Fahrzeugkomponenten und Baugruppen', tabelle: { kopf: ['Fahrzeugteil', 'Funktion', 'Länge', 'Dienstgewicht', 'Antrieb'], zeilen: [
        ['Re 460', 'Elektrische Universallokomotive', '18,5 m', '84,0 t', '6100 kW / 300 kN']] } },
      { titel: 'Fahrzeugkonzept und Baujahre', p: [
        'Die Re 460 wurde Anfang der 1990er-Jahre im Rahmen des Projekts «Bahn 2000» entwickelt, um den Schnellverkehr auf den Schweizer Hauptlinien zu modernisieren. Von 1992 bis 1996 wurden insgesamt 119 Exemplare an die SBB geliefert.',
        'Das markante Design stammt vom italienischen Designstudio Pininfarina.'] },
      { titel: 'Modernisierung (Refit-Programm)', p: [
        'Zwischen 2017 und 2022 durchliefen alle 119 Lokomotiven im SBB-Werk Yverdon-les-Bains ein umfassendes Refit-Programm. Dabei wurden unter anderem neue Stromrichter verbaut, die den Energieverbrauch senken, sowie die Druckluftanlage, die Verkabelung und die Führersitze erneuert.'] },
      { titel: 'Ausstattung und Merkmale', liste: [
        'Drehstrom-Antriebstechnik, Umrichter mit GTO, modernisiert auf IGBT',
        'Aerodynamischer Lokkasten aus Stahl mit GFK-Fronten',
        'Druckgeschützter Führerstand für Tunnelfahrten, z. B. Mattstetten–Rothrist und Lötschberg-Basistunnel',
        'Vielfachsteuerung für den Wendezugbetrieb mit Steuerwagen (Bt, IC2000)',
        'Energiesparende Rekuperationsbremse'] },
      { titel: 'Einsatz bei der SBB', p: ['Die Re 460 zieht und schiebt vor allem InterCity- (IC) und InterRegio-Züge (IR) im gesamten Schweizer Normalspurnetz. Häufig fährt sie mit IC2000-Doppelstockwagen oder Einheitswagen IV (EW IV).'] },
      { titel: 'Weitere Betreiber und verwandte Typen', tabelle: { kopf: ['Betreiber / Typ', 'Bestand', 'Leistung', 'Höchstgeschwindigkeit', 'Besonderheiten'], zeilen: [
        ['BLS (Re 465)', '18', '7000 kW', '230 km/h', 'Stärkere Variante der Lok 2000 für Güter- und Personenverkehr'],
        ['VR (Sr2)', '46', '6000 kW', '210 km/h', 'Breitspur-Variante (1524 mm) für Finnland'],
        ['NSB (El 18)', '22', '5880 kW', '200 km/h', 'Variante für Norwegen, für nordische Bedingungen']] } },
      { titel: 'Zukunft und Ausblick', p: ['Dank des Refit-Programms sind die Lokomotiven technisch fit für weitere rund 20 Einsatzjahre. Sie bleiben voraussichtlich bis in die 2040er-Jahre das Rückgrat des lokbespannten SBB-Fernverkehrs.'] }
    ],
    quellen: ['SBB Fernverkehr – Re 460 Lokomotive', 'SBB Infrastruktur – Fahrtypenkatalog', 'SLM / ABB – Technische Dokumentation Re 460', 'BLS – Re 465 Übersicht'],
    art: { typ: 'lok', form: 'rund', farbe: RED, panto: true },
    bilder: [
      { src: 'bilder/re460-1.jpg', titel: 'Re 460 mit Einheitswagen im Frühling' },
      { src: 'bilder/re460-2.jpg', titel: 'Re 460 mit IC2000-Doppelstockwagen über dem See' },
      { src: 'bilder/re460-3.jpg', titel: 'Re 460 mit IC2000 zwischen Feld und Wald' },
      { src: 'bilder/re460-4.jpg', titel: 'Re 460 mit IC2000 im Sommer' },
      { src: 'bilder/re460-5.jpg', titel: 'Re 460 mit Einheitswagen am frühen Morgen' },
      { src: 'bilder/re460-6.jpg', titel: 'Re 460 «Swisstainable» mit IC2000' },
      { src: 'bilder/re460-7.jpg', titel: 'Re 460 «Swisstainable» mit Nachtzugwagen' }
    ] },

  // ---------- Neu angelegt, Katalogblatt folgt ----------
  { id: 'rabe-503', kat: 'personenverkehr', name: 'RABe 503', beiname: 'Astoro', typ: 'Mehrsystem-Neigezug für den internationalen Verkehr', vorlaeufig: false,
    text: ['Der Astoro ist ein siebenteiliger elektrischer Mehrsystem-Neigezug aus der Pendolino-Familie von Alstom (ETR 610).', 'Die SBB setzt ihn im EuroCity-Verkehr zwischen Deutschland, der Schweiz und Italien ein.'],
    kennzahlen: [['19', 'Züge in der SBB-Flotte'], ['200 km/h', 'in der Schweiz · gebaut für 250 km/h'], ['2009', 'erster SBB-Einsatz'], ['187,4 m', 'Länge']],
    daten: { 'Hersteller': 'Alstom (Pendolino-Familie, ETR 610)', 'Zugbildung': '7 Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV und 25 kV AC, 3 kV DC', 'Länge': '187,4 m', 'Gewicht': '418 t leer (FOS), 466 t beladen', 'Leistung': '5500 kW', 'Anfahrzugkraft': '226 kN', 'Höchstgeschwindigkeit': '250 km/h (Fahrzeug), 200 km/h im Schweizer Fahrtyp', 'Neigetechnik': 'aktiv', 'Sitzplätze': '402', 'Niederflureinstieg': 'nein', 'Anzahl': '19', 'In Betrieb seit': '2009', 'Einsatz': 'EuroCity Deutschland–Schweiz–Italien' },
    specOrder: ['Hersteller', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Neigetechnik', 'Sitzplätze', 'Niederflureinstieg', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Die SBB nennt 250 km/h als Höchstgeschwindigkeit des Fahrzeugs; im Fahrtypenkatalog ist für den Schweizer Fahrtyp 200 km/h hinterlegt.',
    abschnitte: [
      { titel: 'Beschaffung und Einsatz', p: ['Zur SBB-Flotte gehören 19 Astoro: sieben aus der ersten Beschaffung und zwölf später gelieferte Fahrzeuge.', 'Sie verkehren auf der internationalen Nord-Süd-Achse, unter anderem via Gotthard nach Milano, und auf Verbindungen in Richtung Deutschland.'] },
      { titel: 'Erneuerung', p: ['Seit 2024 erneuert die SBB die ganze Flotte im Werk Bellinzona. Innenraum, Fahrgastinformation und technische Komponenten werden überarbeitet; das Programm soll voraussichtlich bis Ende 2027 dauern.'] }
    ],
    quellen: ['SBB – Astoro: Flottengrösse, Sitzplätze und Kenndaten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 6013, S. 332', 'SBB News – Erneuerung der Astoro-Flotte bis Ende 2027'],
    art: { typ: 'triebzug', nase: 'lang', farbe: W1, akzent: RED, tuer: '#7B848C', panto: true }, bilder: [
      { src: 'bilder/rabe-503-c1.jpg', titel: 'RABe 503 «Astoro» in Brig', foto: 'Hoff1980', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETR_610_Brig.JPG' },
      { src: 'bilder/rabe-503-c2.jpg', titel: 'RABe 503 «Astoro» am Perron', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:I08_500_RABe_503.jpg' },
      { src: 'bilder/rabe-503-c3.jpg', titel: 'ETR 610 013 bei St-Saphorin am Genfersee', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_ETR_610_013_St-Saphorin_170112.jpg' },
      { src: 'bilder/rabe-503-c4.jpg', titel: 'ETR 610 «Astoro» unterwegs', foto: 'Markus Eigenheer from Genève', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETR_610_(11981310285).jpg' },
      { src: 'bilder/rabe-503-c5.jpg', titel: 'ETR 610 006 als EC 50 in Domodossola', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETR_610_006_Domodossola_30-10-2010_EC50.jpg' }
    ] },
  { id: 're-450', kat: 'personenverkehr', name: 'Re 450', beiname: 'DPZ', typ: 'Lokomotive der Doppelstock-Pendelzüge',
    text: ['Die Re 450 zieht und schiebt die doppelstöckigen Pendelzüge (DPZ) der Zürcher S-Bahn.', 'Die Pendelzüge bestehen aus der Lok, Doppelstockwagen und einem Steuerwagen.'],
    daten: { 'Hersteller': 'SLM / ABB', 'Achsfolge': 'Bo′Bo′', 'Höchstgeschwindigkeit': '130 km/h', 'Anzahl': '115', 'In Betrieb seit': '1989', 'Einsatz': 'S-Bahn Zürich' },
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: W1, akzent: RED, panto: true }, bilder: [
      { src: 'bilder/re-450-c1.jpg', titel: 'Re 450 021 mit S24 in Zürich HB', foto: 'S5A-0043', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:(CHE-Zurich)_SBB_CFF_FFS_450021_S24_@_Zurich_HB_2023-11-20.jpg' },
      { src: 'bilder/re-450-c2.jpg', titel: 'Re 450 059 in Zürich HB', foto: 'S5A-0043', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:(CHE-Zurich)_SBB_CFF_FFS_450059_S24_@_Zurich_HB_2023-11-22.jpg' },
      { src: 'bilder/re-450-c3.jpg', titel: 'Re 450 033 in Turgi, 1993', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:07.07.93_Turgi_SBB_450.033_(14273158940).jpg' },
      { src: 'bilder/re-450-c4.jpg', titel: 'Re 450 022 in Niederweningen, 1991', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:10.02.91_Niederweningen_SBB_450.022_(5943830670).jpg' },
      { src: 'bilder/re-450-c5.jpg', titel: 'Re 450 mit der S5 auf dem Seedamm in Rapperswil', foto: 'Roland zh', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bahnhof_Rapperswil_-_ZVV_S5_-_Seedamm_(Gleis_4)_2011-11-16_15-52-49_(SX230HS).JPG' }
    ] },
  { id: 'rabe-512', kat: 'personenverkehr', name: 'RABe 512', beiname: 'IR-Dosto', typ: 'Sechsteiliger Interregio-Doppelstocktriebzug (Stadler KISS)', vorlaeufig: false,
    nummern: [[512001, 512060]],
    text: ['Der RABe 512 ist ein sechsteiliger Doppelstocktriebzug aus der Stadler-KISS-Familie.', 'Er verbindet die bewährte Plattform des RABe 511 mit einer auf den InterRegio-Verkehr zugeschnittenen Innenausstattung.'],
    kennzahlen: [['60', 'bestellte Züge'], ['466', 'Sitzplätze'], ['160 km/h', 'Höchstgeschwindigkeit'], ['2023', 'erster Einsatz']],
    daten: { 'Hersteller': 'Stadler', 'Plattform': 'Stadler KISS', 'Zugbildung': '6 Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '151,88 m', 'Gewicht': '299 t leer, 382 t beladen', 'Leistung': '6000 kW', 'Anfahrzugkraft': '400 kN', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '466', 'Niederflureinstieg': 'ja', 'Nummern': '512 001–060', 'Anzahl': '60 bestellt', 'In Betrieb seit': 'Juli 2023', 'Einsatz': 'InterRegio, RegioExpress' },
    specOrder: ['Hersteller', 'Plattform', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Niederflureinstieg', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    abschnitte: [
      { titel: 'Beschaffung', p: ['Die SBB bestellte 2021 insgesamt 60 neue IR-Dosto. Der erste kommerzielle Einsatz begann im Juli 2023; die vollständige Auslieferung soll bis Ende 2026 abgeschlossen sein.'] },
      { titel: 'Einsatz und Komfort', p: ['Die Züge sind für InterRegio- und RegioExpress-Leistungen in der Region Zürich, im Mittelland und in der Westschweiz vorgesehen.', 'Niederflureinstiege, Rollstuhlplätze, Mehrzweckbereiche, Steckdosen und moderne Fahrgastinformation verbessern Zugänglichkeit und Reisekomfort. Doppeltraktion mit aufgewerteten RABe 511 ist möglich.'] }
    ],
    quellen: ['SBB – Neuer IR-Dosto: 60 Züge, Einsatz seit Juli 2023', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 6072, S. 389', 'Wikipedia – SBB RABe 512: Technik, Nummerierung und Beschaffung'],
    art: { typ: 'triebzug', nase: 'kurz', dd: true, farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-512-c1.jpg', titel: 'IR-Dosto RABe 512 in Zürich HB', foto: 'Borknorg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:IR-DostoRABe512.jpg' },
      { src: 'bilder/rabe-512-c2.jpg', titel: 'RABe 512 IR-Dosto unterwegs', foto: 'Samson Ng . D201@EAL', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RABe_512_IR-Dosto_EMU_(54948662392).jpg' },
      { src: 'bilder/rabe-512-c3.jpg', titel: 'RABe 512 IR-Dosto', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_IR-Dosto_-_RABe_512_(52078516652).jpg' },
      { src: 'bilder/rabe-512-c4.jpg', titel: 'Oberstock 2. Klasse im RABe 512', foto: 'E235JREMU', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:LR25_RABe_512_Oberstock_2.Klasse.jpg' },
      { src: 'bilder/rabe-512-c5.jpg', titel: 'Front des RABe 512', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_IR-Dosto_-_RABe_512_(52079557611).jpg' }
    ] },
  { id: 'rabe-520', kat: 'personenverkehr', name: 'RABe 520', beiname: 'GTW', typ: 'Schmaler Stadler GTW für die Seetalbahn', vorlaeufig: false,
    nummern: [[520000, 520016]],
    text: ['Der RABe 520 ist ein speziell für das schmale Lichtraumprofil der Seetalbahn entwickelter elektrischer Gelenktriebwagen.', 'Sein mittiges Antriebsmodul und der nur rund 2,65 Meter breite Wagenkasten unterscheiden ihn deutlich von den übrigen SBB-Regionalzügen.'],
    kennzahlen: [['17', 'ursprünglich beschaffte Züge'], ['115 km/h', 'Höchstgeschwindigkeit'], ['2002/03', 'Baujahre'], ['53,5 m', 'Länge']],
    daten: { 'Hersteller': 'Stadler', 'Fahrzeugtyp': 'GTW 2/8', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '53,5 m', 'Breite': 'ca. 2,65 m (Seetalprofil)', 'Gewicht': '78 t leer (FOS), 105 t beladen', 'Leistung': '760 kW', 'Anfahrzugkraft': '77 kN', 'Höchstgeschwindigkeit': '115 km/h', 'Niederflureinstieg': 'ja', 'Nummern': '520 000–016', 'Anzahl': '17 beschafft', 'In Betrieb seit': '2002', 'Einsatz': 'Seetalbahn Luzern–Lenzburg' },
    specOrder: ['Hersteller', 'Fahrzeugtyp', 'Spurweite', 'Stromsystem', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Niederflureinstieg', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Zwei Einheiten gingen später an Thurbo; die Zahl 17 bezeichnet die ursprüngliche Beschaffung und nicht zwingend den heutigen SBB-Bestand.',
    abschnitte: [
      { titel: 'Beschaffung und Besonderheiten', p: ['Die SBB beschaffte 17 Fahrzeuge mit den Nummern 520 000–016. Die schmale Bauweise vergrössert den Sicherheitsabstand zur parallel verlaufenden Strasse.', 'Ein Teil der Türen war ursprünglich für die niedrigen Seetalperrons ausgelegt; bei der Modernisierung 2018–2021 kam ein Einstieg für 55-cm-Standardperrons dazu.'] },
      { titel: 'Einsatz', p: ['Haupteinsatzgebiet ist die Seetalbahn Luzern–Lenzburg. Die Fahrzeuge fuhren zeitweise auch auf weiteren Linien ab Luzern und Lenzburg.'] }
    ],
    quellen: ['Wikipedia – SBB RABe 520: Bestand, Technik, Einsatz und Modernisierung', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 6027, S. 344'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-520-c1.jpg', titel: 'RABe 520 «GTW» in Beinwil am See', foto: 'Smiley.toerist', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Beinwil_am_See_station.jpg' },
      { src: 'bilder/rabe-520-c2.jpg', titel: 'RABe 520 im Seetal bei Seengen', foto: 'Ray Swi-hymn from Sijhih-Taipei, Taiwan', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:20170710_SeengenHwy_5743_(36762966812).jpg' },
      { src: 'bilder/rabe-520-c3.jpg', titel: 'RABe 520 der Seetalbahn in Lenzburg, 2003', foto: 'Roland Zumbuehl', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2003-Lenzburg-Seetalbahn.jpg' },
      { src: 'bilder/rabe-520-c4.jpg', titel: 'RABe 520 am Bahnübergang in Beinwil am See', foto: 'Smiley.toerist', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Beinwil_am_See_crossing.jpg' },
      { src: 'bilder/rabe-520-c5.jpg', titel: 'RABe 520 als S28 bei Hunzenschwil', foto: 'TracksOnWax', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_S28_Hunzenschwil_Suhr.JPG' }
    ] },
  { id: 'rabe-521', kat: 'personenverkehr', name: 'RABe 521', beiname: 'FLIRT', typ: 'Einsystem-FLIRT mit Zulassung für die Schweiz und Deutschland', vorlaeufig: false,
    nummern: [[521001, 521030], [521201, 521209]],
    text: ['Der RABe 521 ist ein vierteiliger FLIRT für grenzüberschreitende Regionalverbindungen zwischen der Nordwestschweiz und Deutschland.', 'Er bildet einen wichtigen Teil der Regio-S-Bahn Basel und fährt auch im Seehas-Verkehr.'],
    kennzahlen: [['39', 'Züge'], ['160 km/h', 'Höchstgeschwindigkeit'], ['2004', 'erster Einsatz'], ['74,08 m', 'Länge']],
    daten: { 'Hersteller': 'Stadler', 'Zugbildung': '4 Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '74,08 m', 'Gewicht': '120 t leer, 152 t beladen', 'Leistung': '2656 kW (FOS-Fahrtypwert)', 'Anfahrzugkraft': '200 kN', 'Höchstgeschwindigkeit': '160 km/h', 'Niederflureinstieg': 'ja', 'Nummern': '521 001–030 und 201–209', 'Anzahl': '39', 'In Betrieb seit': '2004', 'Einsatz': 'S-Bahn Basel, Seehas, Schweiz–Deutschland' },
    specOrder: ['Hersteller', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Niederflureinstieg', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Der SBB-Fahrtypenkatalog fasst unter diesem Fahrtyp auch technisch ähnliche vierteilige FLIRT-Varianten zusammen; die Leistung ist deshalb als Fahrtypwert angegeben.',
    abschnitte: [
      { titel: 'Beschaffung und Flotte', p: ['Die Baureihe umfasst 30 Fahrzeuge mit den Nummern 521 001–030 und neun weitere Einheiten 521 201–209, zusammen 39 Züge. Die ersten Fahrzeuge gingen 2004 in Betrieb.', 'Stadler entwickelte die FLIRT-Grundplattform ursprünglich für die SBB.'] },
      { titel: 'Einsatz', p: ['Die RABe 521 verkehren hauptsächlich auf Linien der trinationalen S-Bahn Basel sowie auf grenzüberschreitenden Leistungen nach Deutschland.', 'Automatische Kupplungen erlauben Mehrfachtraktion mit kompatiblen FLIRT; Niederflureinstiege und Mehrzweckbereiche helfen beim schnellen Fahrgastwechsel.'] }
    ],
    quellen: ['SBB – FLIRT: Fahrzeugfamilie, Grunddaten und Einsatzregionen', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 6028, S. 345', 'Wikipedia – RABe 521: Bestand, Nummern und Einsatz'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-521-c1.jpg', titel: 'RABe 521 «FLIRT»', foto: 'Samson Ng . D201@EAL', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RABe_521_Flirt_EMU_(54920974686).jpg' },
      { src: 'bilder/rabe-521-c2.jpg', titel: 'RABe 521 als S3 nach Olten in Porrentruy', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Porrentruy_railway_station_with_S3_to_Olten.jpg' },
      { src: 'bilder/rabe-521-c3.jpg', titel: 'FLIRT auf der Gäubahnbrücke in Olten', foto: 'Julian Ryf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:G%C3%A4ubahnsteg_und_G%C3%A4ubahnbr%C3%BCcke_Olten_160924.jpg' },
      { src: 'bilder/rabe-521-c4.jpg', titel: 'FLIRT auf der Aarebrücke bei Olten', foto: 'Julian Ryf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Aarebr%C3%BCcken_bei_Olten_200728.jpg' },
      { src: 'bilder/rabe-521-c5.jpg', titel: 'Innenraum des RABe 521 «Express-Hase»', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:%22Express-Hase%22_des_%22Seehas%22,_Innenansicht_SBB_RABe_521_(2025).jpg' }
    ] },
  { id: 'rabe-522', kat: 'personenverkehr', name: 'RABe 522', beiname: 'FLIRT', typ: 'Zweisystem-FLIRT für Frankreich', vorlaeufig: false,
    nummern: [[522201, 522232]],
    text: ['Der RABe 522 ist ein vierteiliger Zweisystem-FLIRT für Verbindungen zwischen der Schweiz und Frankreich.', 'Die Fahrzeuge sind auf das französische 25-kV-Netz abgestimmt und fahren vor allem im Raum Genève und im Raum Basel.'],
    kennzahlen: [['32', 'Züge der Serie 201–232'], ['160 km/h', 'Höchstgeschwindigkeit'], ['2011', 'Einsatz der heutigen Serie ab'], ['75,0 m', 'Länge']],
    daten: { 'Hersteller': 'Stadler', 'Zugbildung': '4 Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz und 25 kV 50 Hz AC', 'Länge': '75,0 m', 'Gewicht': '135 t leer, 167 t beladen', 'Leistung': '2600 kW', 'Anfahrzugkraft': '200 kN', 'Höchstgeschwindigkeit': '160 km/h', 'Niederflureinstieg': 'ja', 'Nummern': '522 201–232', 'Anzahl': '32', 'In Betrieb seit': '2011', 'Einsatz': 'Léman Express, Regionalverkehr Basel' },
    specOrder: ['Hersteller', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Niederflureinstieg', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    abschnitte: [
      { titel: 'Seriengeschichte', p: ['Eine erste Serie mit zwölf Fahrzeugen trug die Nummern 522 001–012. Weil diese Züge zunächst keine französische Zulassung erhielten, wurden sie später zu RABe 523 umgebaut.', 'Die heutige Baureihe umfasst 32 neuere Fahrzeuge mit den Nummern 522 201–232.'] },
      { titel: 'Einsatz und Ausstattung', p: ['Die RABe 522 verkehren unter anderem im Léman-Express-Netz und auf grenznahen Regionalverbindungen im Raum Basel.', 'Wie andere FLIRT haben sie einen verteilten elektrischen Antrieb, breite Niederflureinstiege, Mehrzweckbereiche und automatische Kupplungen für Mehrfachtraktion.'] }
    ],
    quellen: ['SBB – FLIRT: Fahrzeugfamilie, Grunddaten und Einsatzregionen', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 6029, S. 346', 'Wikipedia – RABe 522: Serien, Bestand und Einsatz'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-522-c1.jpg', titel: 'RABe 522 209 in Delle', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:02.02.19_Delle_SBB_522209_and_SNCF_Z27731_32_(40065407663).jpg' },
      { src: 'bilder/rabe-522-c2.jpg', titel: 'RABe 522 in Noiraigue', foto: 'Hansueli Krapf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2024-07-29_12-20-53_RABe_522_Noiraigue_756.0.jpg' },
      { src: 'bilder/rabe-522-c3.jpg', titel: 'RABe 522 221 im Léman-Express-Design in Annemasse', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:06.06.23_Annemasse_522221_(52969184458).jpg' },
      { src: 'bilder/rabe-522-c4.jpg', titel: 'RABe 522 231 in Genève', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:06.06.23_Gen%C3%A8ve_522231_(52969184413).jpg' },
      { src: 'bilder/rabe-522-c5.jpg', titel: 'RABe 522 213 in Genève-Cornavin', foto: 'SmoIchopper', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:522213_-_Gen%C3%A8ve-Cornavin.jpg' }
    ] },
  { id: 'rabe-524', kat: 'personenverkehr', name: 'RABe 524', beiname: 'FLIRT TILO', typ: 'Mehrsystem-FLIRT für TILO', vorlaeufig: false,
    text: ['Die RABe 524 sind vier- und sechsteilige FLIRT-Triebzüge für den grenzüberschreitenden Regionalverkehr zwischen dem Tessin und der Lombardei.', 'Sie können unter dem Schweizer Wechselstrom- und dem italienischen Gleichstromsystem verkehren.'],
    kennzahlen: [['53', 'Züge bei TILO'], ['160 km/h', 'Höchstgeschwindigkeit'], ['2007', 'erster Einsatz'], ['4 / 6', 'Wagen je Zug']],
    daten: { 'Hersteller': 'Stadler', 'Betreiber': 'TILO / SBB', 'Zugbildung': '4 oder 6 Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC und 3 kV DC', 'Länge': '74,1 m (4-teilig), 106,3 m (6-teilig), 104,9 m (FLIRT TSI)', 'Gewicht': '133 t (4-teilig), 174 t (6-teilig), 179 t (FLIRT TSI)', 'Leistung': '2600 kW', 'Anfahrzugkraft': '200 kN', 'Höchstgeschwindigkeit': '160 km/h', 'Anzahl': '53 (23 vierteilig, 17 sechsteilig, 13 FLIRT TSI)', 'In Betrieb seit': '2007 (gebaut 2006–2021)', 'Einsatz': 'TILO, Tessin–Lombardei' },
    specOrder: ['Hersteller', 'Betreiber', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Länge und Leergewicht je Variante nach dem SBB-Fahrtypenkatalog. FLIRT TSI bezeichnet die neuere, TSI-konforme sechsteilige Ausführung (RABe 524.3).',
    abschnitte: [
      { titel: 'Varianten', tabelle: { kopf: ['Variante', 'Anzahl', 'Länge', 'Leergewicht'], zeilen: [
        ['RABe 524, vierteilig', '23', '74,1 m', '133 t'],
        ['RABe 524, sechsteilig', '17', '106,3 m', '174 t'],
        ['RABe 524.3, FLIRT TSI', '13', '104,9 m', '179 t']] } },
      { titel: 'Beschaffung und Einsatz', p: ['Die heute eingesetzten Fahrzeuge wurden zwischen 2006 und 2021 gebaut; die ersten Züge gingen 2007 in Betrieb. Die Mehrsystemtechnik erlaubt direkte Verbindungen über die Landesgrenze ohne Lok- oder Fahrzeugwechsel.', 'Die Baureihe prägt das TILO-Netz im Tessin und in der Lombardei. Je nach Linie werden vier- oder sechsteilige Fahrzeuge eingesetzt; die neueren FLIRT TSI wurden besonders für den Ausbau des grenzüberschreitenden Angebots beschafft.'] }
    ],
    quellen: ['TILO – Daten und Fakten: Flotte mit 53 RABe 524', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtypen 6030, 6031 und 6064', 'Wikipedia – SBB RABe 524: Baujahre, Varianten und Inbetriebnahme'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: '#1F6FB2', tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-524-c1.jpg', titel: 'RABe 524 008 in Milano Centrale', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:16_FFS_RABe_524_008_Milano_Cle_110917.jpg' },
      { src: 'bilder/rabe-524-c2.jpg', titel: 'RABe 524 303 im neuen TILO-Design in Milano Centrale', foto: 'The Nikon User', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:524_303_Milano_Centrale.jpg' },
      { src: 'bilder/rabe-524-c3.jpg', titel: 'RABe 524 in Capolago-Riva San Vitale', foto: 'Andrzej Otrębski', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Capolago-Riva_S_Vitale_ETR_524.jpg' },
      { src: 'bilder/rabe-524-c5.jpg', titel: 'RABe 524 in Milano Cadorna', foto: 'Airon90', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETR_524_a_Milano_Cadorna.jpg' },
      { src: 'bilder/rabe-524-c6.jpg', titel: 'RABe 524 012 als S20 in Locarno', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_RABe_524_012_Locarno_250515_S20_25640.jpg' },
      { src: 'bilder/rabe-524-c7.jpg', titel: 'RABe 524 014 mit Werbung für «Rete Tre» in Maccagno', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_RABe_524_014_Maccagno_020312_copia.jpg' }
    ] },
  { id: 'ic2000', kat: 'personenverkehr', name: 'IC2000', beiname: 'Doppelstockwagen', typ: 'Doppelstock-Pendelzug des Fernverkehrs', vorlaeufig: false,
    text: ['Der IC2000 ist eine Familie doppelstöckiger Reisezug- und Steuerwagen.', 'Die Wagen bilden mit der Re 460 leistungsfähige Pendelzüge für den InterCity- und InterRegio-Verkehr; nach der umfassenden Erneuerung heissen sie auch IC2020.'],
    kennzahlen: [['341', 'Wagen'], ['200 km/h', 'Höchstgeschwindigkeit'], ['1997', 'erster Einsatz'], ['26,8 m', 'Länge je Wagen']],
    daten: { 'Fahrzeugart': 'Doppelstock-Reisezugwagen', 'Hersteller': 'Schindler-Konsortium (Schindler Waggon, FIAT-SIG, ABB/Adtranz)', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '26,8 m je Wagen', 'Gewicht': '47 t leer (FOS-Typ), 60 t beladen', 'Höchstgeschwindigkeit': '200 km/h', 'Sitzplätze': 'bis 86 je Wagen (1. Klasse), bis 126 je Wagen (2. Klasse)', 'Niederflureinstieg': 'ja', 'Wagenübergang': 'im Oberdeck', 'Antrieb': 'keiner, mit Re 460', 'Anzahl': '341 Wagen', 'In Betrieb seit': '1997', 'Einsatz': 'InterCity, InterRegio' },
    specOrder: ['Fahrzeugart', 'Hersteller', 'Spurweite', 'Länge', 'Gewicht', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Niederflureinstieg', 'Wagenübergang', 'Antrieb', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    abschnitte: [
      { titel: 'Beschaffung und Konstruktion', p: ['Die 341 Wagen wurden ab 1997 in mehreren Serien geliefert. Die Wagenkästen entstanden bei Schindler Waggon, die Drehgestelle bei FIAT-SIG und die elektrische Ausrüstung bei ABB/Adtranz.', 'Zur Familie gehören Wagen der 1. und 2. Klasse, Service-, Speise- und Steuerwagen.'] },
      { titel: 'Modernisierung und Einsatz', p: ['Die SBB modernisierte die komplette Flotte im Programm IC2020. Erneuert wurden unter anderem Innenraum, Beleuchtung, Fahrgastinformation, Steckdosen und Mobilfunkdurchlässigkeit.', 'Die Kompositionen verkehren auf wichtigen Ost-West- und Nord-Süd-Achsen und lassen sich je nach Nachfrage unterschiedlich lang bilden.'] }
    ],
    quellen: ['SBB – IC2000: Flottengrösse, Ausstattung und Kenndaten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtypen 3004/3005, S. 131–132', 'Wikipedia – IC2000: Bau, Varianten und Liefergeschichte'],
    art: { typ: 'wagen', dd: true, farbe: W1, akzent: RED }, bilder: [
      { src: 'bilder/ic2000-c1.jpg', titel: 'IC2000-Pendelzug in der Landschaft', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20080330Y222a.jpg' },
      { src: 'bilder/ic2000-c3.jpg', titel: 'Re 460 mit IC2000-Doppelstockwagen', foto: 'User:Filzstift', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Re460.jpg' },
      { src: 'bilder/ic2000-c4.jpg', titel: 'Re 460 vor IC2000-Doppelstockwagen', foto: 'Samson Ng . D201@EAL', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Re_460_Electric_Locomotive_-_54781721266.jpg' },
      { src: 'bilder/ic2000-c5.jpg', titel: 'Übergang zwischen einstöckigem Wagen und IC2000-Doppelstockwagen', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L03_328_Kupplung_einst%C3%B6ckiger_und_Doppelstockwagen.jpg' },
      { src: 'bilder/ic2000-c6.jpg', titel: 'IC2000-Steuerwagen in Romanshorn', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:I09_310_Bf_Romanshorn,_Bt_IC_2000.jpg' }
    ] },
  { id: 'ew-iv', kat: 'personenverkehr', name: 'EW IV', beiname: 'Einheitswagen IV', typ: 'Klimatisierter Fernverkehrswagen', vorlaeufig: false,
    text: ['Der Einheitswagen IV, kurz EW IV, ist die letzte Schweizer Einheitswagen-Bauart.', 'Die lokbespannten Wagen wurden für den InterCity-Verkehr entwickelt und verkehren heute in Pendelzügen sowie zusammen mit passenden EuroCity-Wagen.'],
    kennzahlen: [['496', 'ursprünglich für die SBB'], ['200 km/h', 'Höchstgeschwindigkeit'], ['1981', 'erster Einsatz'], ['26,4 m', 'Länge je Wagen']],
    daten: { 'Fahrzeugart': 'Reisezugwagen', 'Hersteller': 'SIG, SWS, SWP, SWA', 'Betreiber': 'SBB Personenverkehr', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '26,4 m je Wagen', 'Gewicht': '45 t leer (FOS-Typ), 50 t beladen', 'Steuerwagen': 'IC Bt EW IV, 48 t leer', 'Höchstgeschwindigkeit': '200 km/h', 'Niederflureinstieg': 'nein', 'Antrieb': 'keiner, mit separater Lokomotive', 'Anzahl': '540 gebaut, davon 496 für die SBB', 'In Betrieb seit': '1981', 'Einsatz': 'EuroCity, InterCity, InterRegio' },
    specOrder: ['Fahrzeugart', 'Hersteller', 'Betreiber', 'Spurweite', 'Länge', 'Gewicht', 'Steuerwagen', 'Höchstgeschwindigkeit', 'Niederflureinstieg', 'Antrieb', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Die Zahl 496 ist ein historischer Wert und keine heutige Bestandszahl: Verkäufe, Umbauten und Ausrangierungen haben die Flotte verkleinert.',
    abschnitte: [
      { titel: 'Beschaffung und Modernisierung', p: ['1981 wurden zunächst 40 klimatisierte Wagen der 1. Klasse geliefert; ab 1983 folgten Wagen der 2. Klasse und Speisewagen. Insgesamt entstanden 540 EW IV, davon 496 für die SBB.', 'Zwischen 2019 und 2025 setzte die SBB mehr als 250 EW-IV- und EuroCity-Wagen instand; die Modernisierung der Steuerwagen läuft laut SBB bis Ende 2027.'] },
      { titel: 'Einsatz', p: ['Die Wagen verkehren als EC-, IC- und IR-Kompositionen, meist mit einer Re 460. Typische Einsatzachsen führen unter anderem von Genève nach Brig, von Basel nach Lugano sowie von Zürich über Olten nach Bern.'] }
    ],
    quellen: ['SBB – Einheitswagen IV / Eurocity: Eigenschaften, Einsatz und Modernisierung', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtypen 3013 und 3016, S. 140 und 142', 'Wikipedia – Einheitswagen IV: Beschaffungs- und Entwicklungsgeschichte'],
    art: { typ: 'wagen', farbe: W1, akzent: RED }, bilder: [
      { src: 'bilder/ew-iv-c1.jpg', titel: 'EW-IV-Steuerwagen in Bellinzona', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:10_IC_Bt_Bellinzona_S_Paolo_170417.jpg' },
      { src: 'bilder/ew-iv-c2.jpg', titel: 'InterRegio mit EW IV in Zürich HB', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:3_IR_2441_Zue-Chi_Zuerich_HB_101216.jpg' },
      { src: 'bilder/ew-iv-c3.jpg', titel: 'Gotthard-Weekender mit EW IV in Brugg', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:3_IR_Gotthard-Weekender_Brugg_220418.jpg' },
      { src: 'bilder/ew-iv-c5.jpg', titel: 'Innenraum 1. Klasse im EW IV', foto: 'Abaddon1337', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:A_50_85_10-75_198-7_IR_1741_Gen%C3%A8ve-A%C3%A9roport_-_Brig_corridor.jpg' },
      { src: 'bilder/ew-iv-c6.jpg', titel: 'EW-IV-Wagen 2. Klasse in Montreux', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20050506S053_B4-418.jpg' }
    ] },

  // ---------- SBB Cargo ----------
  { id: 're-482', kat: 'cargo', name: 'Re 482', beiname: 'TRAXX', typ: 'Elektrische Güterzuglokomotive', vorlaeufig: false,
    text: ['Die Re 482 ist eine elektrische Güterzuglokomotive der Bombardier-TRAXX-Familie.', 'Sie wurde für Verkehre in der Schweiz und in Deutschland beschafft; ein Teil der zweiten Serie besitzt zusätzliche Ausrüstung für Österreich.'],
    kennzahlen: [['50', '35 Re 482.1 und 15 Re 482.2'], ['5600 kW', 'maximale Leistung'], ['140 km/h', 'Höchstgeschwindigkeit'], ['2002', 'Beginn der Ablieferung']],
    daten: { 'Hersteller': 'Bombardier Transportation', 'Plattform': 'TRAXX F140 AC', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz und 25 kV 50 Hz', 'Länge': '18,9 m', 'Gewicht': '84 t leer', 'Leistung': '5600 kW', 'Anfahrzugkraft': '300 kN', 'Höchstgeschwindigkeit': '140 km/h', 'Baureihen': 'Re 482.1 und Re 482.2', 'Anzahl': '50 (35 + 15)', 'In Betrieb seit': '2002', 'Einsatz': 'Güterverkehr Schweiz, Deutschland, teils Österreich' },
    specOrder: ['Hersteller', 'Plattform', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Baureihen', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Die 50 Fahrzeuge stammen aus der historischen SBB-Cargo-Flottenübersicht; daraus folgt kein aktueller Einzelbestand im Jahr 2026.',
    abschnitte: [
      { titel: 'Beschaffung und Einsatz', p: ['SBB Cargo führte die Re 482 ab 2002 ein. Die Lokomotiven übernahmen internationale Güterzüge in Richtung Deutschland und teilweise Österreich sowie Einsätze im Schweizer Güterverkehr.'] },
      { titel: 'Zwei Serien', p: ['Die Flottenübersicht unterscheidet 35 Re 482.1 und 15 Re 482.2. Technisch gehören beide zur TRAXX-Familie; Ausrüstung und Länderpakete unterscheiden sich je nach Serie.'] }
    ],
    quellen: ['SBB Cargo – Flottenbroschüre mit zwei Serien und technischen Eckdaten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Re 482, S. 77', 'SBB Cargo – Flottenstrategie und internationaler Einsatz'],
    art: { typ: 'lok', form: 'kantig', farbe: CRED, akzent: '#3A4047', panto: true }, bilder: [
      { src: 'bilder/re-482-c1.jpg', titel: 'Re 482 023 von SBB Cargo mit Güterzug bei Erbach (Rheingau)', foto: 'Joachim Seyferth', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:482_023_der_SBB_Cargo_mit_G%C3%BCterzug_zwischen_Erbach_(Rh)_und_Hattenheim.jpg' },
      { src: 'bilder/re-482-c2.jpg', titel: 'Re 482 mit Güterzug vor einer Eisenbahnbrücke', foto: 'Smiley.toerist', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Eisenbahnbr%C3%BCcke_approach_2023_5.jpg' },
      { src: 'bilder/re-482-c3.jpg', titel: 'Re 482 005 von SBB Cargo in Eschweiler', foto: 'InterCityImpress', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:482_005_-_SBB_Cargo_--_Eschweiler_-_M%C3%A4rz_2014_(13758340673).jpg' },
      { src: 'bilder/re-482-c4.jpg', titel: 'Re 482 007 in Köln-Kalk Nord', foto: 'Rolf Heinrich, Köln', lizenz: 'CC BY 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:482_007-2_K%C3%B6ln-Kalk_Nord_2016-01-09-02.jpg' },
      { src: 'bilder/re-482-c5.jpg', titel: 'Re 482 005', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:185.0DB_(SBB_482_005_A_W).jpg' }
    ] },
  { id: 're-484', kat: 'cargo', name: 'Re 484', beiname: 'TRAXX MS', typ: 'Elektrische Zweistromlokomotive', vorlaeufig: false,
    text: ['Die Re 484 ist eine elektrische Zweistromlokomotive für den Güterverkehr zwischen der Schweiz und Italien.', 'Bombardier entwickelte sie auf Basis der TRAXX-Plattform.'],
    kennzahlen: [['21', 'Lokomotiven beschafft'], ['5600 kW', 'maximale Leistung'], ['140 km/h', 'Höchstgeschwindigkeit'], ['2004–2006', 'Ablieferung']],
    daten: { 'Hersteller': 'Bombardier Transportation', 'Plattform': 'TRAXX F140 MS', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV AC und 3 kV DC', 'Länge': '18,9 m', 'Gewicht': '86 t leer', 'Leistung': '5600 kW', 'Anfahrzugkraft': '300 kN', 'Höchstgeschwindigkeit': '140 km/h', 'Anzahl': '21', 'In Betrieb seit': '2004–2006 (Ablieferung)', 'Einsatz': 'Schweiz und Italien' },
    specOrder: ['Hersteller', 'Plattform', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Der SBB-Fahrtypenkatalog verwendet 86 t; ältere Literatur nennt teils 85,4 t. Hier gilt der offizielle Wert von 2026.',
    abschnitte: [
      { titel: 'Beschaffung und Einsatz', p: ['SBB Cargo beschaffte 21 Re 484 für den internationalen Güterverkehr Schweiz–Italien. Später wurden Fahrzeuge auch im Schweizer Binnenverkehr eingesetzt.'] },
      { titel: 'Mehrsystemtechnik', p: ['Die Lokomotive fährt unter dem Schweizer Wechselstromsystem und dem italienischen Gleichstromsystem. Die länderspezifische Zugbeeinflussung ermöglicht grenzüberschreitende Fahrten ohne Lokwechsel.'] }
    ],
    quellen: ['SBB Cargo – Flottenbroschüre mit Stückzahl und Hauptdaten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Re 484, S. 78', 'SBB News – Einsatz von elf Re 484 im Schweizer Güterverkehr'],
    art: { typ: 'lok', form: 'kantig', farbe: CRED, akzent: '#8A939B', panto: true }, bilder: [
      { src: 'bilder/re-484-c1.jpg', titel: 'Re 484 006 von SBB Cargo in Steinen', foto: 'Alex Noble', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:20240704_SBB_Cargo_484006_Steinen.jpg' },
      { src: 'bilder/re-484-c2.jpg', titel: 'Re 484 018 von SBB Cargo', foto: 'Alex Noble', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:20221006_SBB_Cargo_484018.jpg' },
      { src: 'bilder/re-484-c3.jpg', titel: 'Re 484 012 mit Werbung in Singen (Hohentwiel)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_CFF_Cargo_Re_484_012_in_Singen_(Hohentwiel).jpg' },
      { src: 'bilder/re-484-c4.jpg', titel: 'Re 484 003', foto: 'Markus Eigenheer from Genève, Schweiz', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:484_003_(Flickr_24803289866).jpg' },
      { src: 'bilder/re-484-c5.jpg', titel: 'Re 484 020 mit EuroCity in Zürich HB', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_Re_484_020_Zuerich_HB_151011_EC15.jpg' }
    ] },
  { id: 're-420', kat: 'cargo', name: 'Re 420', beiname: 'Re 4/4 II', typ: 'Vierachsige Universallokomotive', vorlaeufig: false,
    text: ['Die Re 420, früher Re 4/4 II, zählt zu den prägenden Schweizer Elektrolokomotiven. Sie beförderte schnelle Reisezüge, Güterzüge und Pendelzüge.', 'Die Baureihe entstand über viele Jahre in mehreren Baulosen; deshalb unterscheiden sich etwa Frontform und Länge einzelner Serien.'],
    nummern: [[11101, 11349], [11371, 11397]],
    kennzahlen: [['276', 'für die SBB gebaut'], ['4700 kW', 'max. Leistung'], ['140 km/h', 'Höchstgeschwindigkeit'], ['1964–1985', 'Inbetriebsetzungen']],
    daten: { 'Achsfolge': "Bo′Bo′, 4 Triebachsen", 'Stromsystem': '15 kV, 16,7 Hz AC', 'Länge': 'ca. 14,8–15,5 m über Puffer *', 'Gewicht': 'ca. 80–85 t Dienstgewicht *', 'Anfahrzugkraft': '255 kN', 'Leistung': '4650 kW Stundenleistung am Rad **', 'Höchstgeschwindigkeit': '140 km/h', 'Elektrische Bremse': 'Rekuperation', 'In Betrieb seit': '1964 (letzte Serie 1985)', 'Anzahl': '276 Re 4/4 II (SBB-Bauzahl)', 'Hersteller': 'Mechanik SLM Winterthur; Elektrik BBC, MFO und SAAS', 'Spurweite': 'Normalspur, 1435 mm' },
    specOrder: ['Achsfolge', 'Stromsystem', 'Spurweite', 'Länge', 'Gewicht', 'Anfahrzugkraft', 'Leistung', 'Höchstgeschwindigkeit', 'Elektrische Bremse', 'In Betrieb seit', 'Anzahl', 'Hersteller'],
    specNote: '* Je nach Baulos und Umbau. ** Wert für die bei SBB Historic beschriebene Lok 11108; SBB Infrastruktur weist für den Fahrtyp Re 420 4700 kW als maximale Leistung aus.',
    abschnitte: [
      { titel: 'Entstehung und Technik', p: ['1964 erhielt die SBB sechs Prototypen. Es folgten mehrere Serien mit Anpassungen an Führerstand, Stromabnehmern und Fahrzeugkasten. SLM verantwortete den mechanischen Teil; die Elektrik stammte von BBC, MFO und SAAS.', 'Die vier Fahrmotoren werden über einen Stufenschalter gesteuert. Die Vielfachsteuerung erlaubt auch den Betrieb mit einer Re 6/6 als «Re 10/10».'] },
      { titel: 'Einsatz und Varianten', p: ['Die Re 4/4 II wurde im Personen- und Güterverkehr eingesetzt, darunter vor Schnellzügen im Flachland sowie auf den Zufahrten zu Gotthard und Simplon. Ein Teil gelangte zu SBB Cargo.', 'Die Variante Re 421 entstand durch Umbauten für Deutschland; 30 Lokomotiven wurden 2011–2016 als «LION» für Verstärkungszüge der Zürcher S-Bahn modernisiert. SBB Cargo nennt die Re 420 weiterhin im Schweizer Mietangebot.'],
        hinweis: 'Stückzahl: SBB Historic nennt 276 für die SBB beschaffte Re 4/4 II, ein älteres Cargo-Magazin 277 abgelieferte Lokomotiven. Diese Seite folgt SBB Historic; beide Zahlen sind keine aktuelle Flottenstärke.' }
    ],
    quellen: ['SBB Historic – Fahrzeugarchiv Re 4/4 II 11108; Serie, Varianten und Technik', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 1051 (Re 420), S. 67', 'SBB Cargo – Vermietung von Rollmaterial, Angebot Re 420', 'SBB Cargo – Cargo-Magazin 2/2015, S. 15; abweichende historische Stückzahl'],
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: CRED, panto: true },
    bilder: [
      { src: 'bilder/re420-1.jpg', titel: '«Re 10/10»: Re 620 mit Re 420 vor einem Güterzug' },
      { src: 'bilder/re420-2.jpg', titel: 'Re 420 331-1 im Herbst' },
      { src: 'bilder/re420-3.jpg', titel: 'Re 420 von WRS mit Holzzug', foto: 'Quentin Rossier' },
      { src: 'bilder/slides/slide-07.jpg', titel: 'Re 420 von SBB Cargo mit Güterzug' },
      { src: 'bilder/re420-4.jpg', titel: 'Re 420 mit gelben Güterwagen in den Reben am See' },
      { src: 'bilder/re420-5.jpg', titel: 'Re 420 mit Güterzug zwischen Reben und Feldern' },
      { src: 'bilder/re420-6.jpg', titel: 'Re 420 in blauer Lackierung mit Kesselwagen im Rangierbahnhof' }
    ] },
  { id: 're-620', kat: 'cargo', name: 'Re 620', beiname: 'Re 6/6', typ: 'Sechsachsige Streckenlokomotive', vorlaeufig: false,
    text: ['Die Re 620, früher Re 6/6, wurde für schwere Reise- und Güterzüge auf den Gotthard- und Simplonstrecken entwickelt.', 'Ihre drei zweiachsigen Drehgestelle verbinden hohe Zugkraft mit der Zulassung für die höheren Kurvengeschwindigkeiten der Zugreihe R.'],
    nummern: [[620001, 620089], [11601, 11689]],
    kennzahlen: [['89', 'gebaute Lokomotiven'], ['7832 kW', 'Stundenleistung am Rad'], ['140 km/h', 'Höchstgeschwindigkeit'], ['1972–1980', 'Bauzeit']],
    daten: { 'Achsfolge': "Bo′Bo′Bo′, 6 Triebachsen", 'Stromsystem': '15 kV, 16,7 Hz AC', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '19,31 m über Puffer', 'Gewicht': '120 t Dienstgewicht', 'Anfahrzugkraft': '398 kN', 'Leistung': '7244 kW Dauerleistung am Rad (7832 kW Stundenleistung)', 'Höchstgeschwindigkeit': '140 km/h', 'Elektrische Bremse': 'Rekuperation', 'In Betrieb seit': '1972; Serie 1975–1980', 'Anzahl': '89 (11601–11689)', 'Hersteller': 'Mechanik SLM Winterthur; Elektrik und Montage BBC, teils SAAS' },
    specOrder: ['Achsfolge', 'Stromsystem', 'Spurweite', 'Länge', 'Gewicht', 'Anfahrzugkraft', 'Leistung', 'Höchstgeschwindigkeit', 'Elektrische Bremse', 'In Betrieb seit', 'Anzahl', 'Hersteller'],
    abschnitte: [
      { titel: 'Entstehung und Technik', p: ['Vier Prototypen erschienen 1972; danach folgten 85 Serienlokomotiven. SLM baute Kasten und Fahrgestell, BBC lieferte die elektrische Ausrüstung.', 'Die Endmontage erfolgte überwiegend bei BBC in Oerlikon, bei den Nummern 11635–11654 durch SAAS in Genf. Die ersten beiden Prototypen besassen einen zweiteiligen Kasten, die übrigen Fahrzeuge einen einteiligen.'] },
      { titel: 'Einsatz und Weiterentwicklung', p: ['Die Lokomotiven fuhren zunächst schwere Personen- und Güterzüge. In Vielfachsteuerung mit einer Re 4/4 II oder III bildeten sie für schwere Güterzüge die als «Re 10/10» bekannte Kombination. Nach der SBB-Divisionalisierung wurden die Re 6/6 SBB Cargo zugeteilt.', 'SBB Cargo führt die Re 620 weiterhin in seinem Mietangebot für die Schweiz; der tatsächliche Bestand verändert sich durch Ausrangierungen.', 'Ab 2007 erhielten 63 Lokomotiven ETCS Level 2. SBB Historic nennt den Beginn der altersbedingten Ausrangierungen im Februar 2021.'],
        hinweis: 'Die Zahl 89 bezeichnet die historisch gebaute Serie und nicht den heutigen betriebsfähigen Bestand.' }
    ],
    quellen: ['SBB Historic – Fahrzeugarchiv Re 6/6 11666; Serie, Hersteller und Technik', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 1064 (Re 620), S. 80', 'SBB Cargo – Vermietung von Rollmaterial, Angebot Re 620'],
    art: { typ: 'lok', form: 'kantig', achsen: 6, farbe: CRED, panto: true },
    bilder: [
      { src: 'bilder/re620-2.jpg', titel: 'Re 620 in Cargo-Farben mit Kesselwagen am See' },
      { src: 'bilder/re620-1.jpg', titel: '«Re 10/10»: Re 620 mit Re 420 vor einem Güterzug' },
      { src: 'bilder/re620-6.jpg', titel: 'Re 620 in Cargo-Farben mit Silowagen' },
      { src: 'bilder/re620-4.jpg', titel: 'Re 620 mit Kesselwagenzug', foto: 'Quentin Rossier' },
      { src: 'bilder/re620-5.jpg', titel: 'Re 620 mit Bauzug, im Vordergrund Kühe' },
      { src: 'bilder/re620-3.jpg', titel: 'Re 620 in Cargo-Farben im Bahnhof' },
      { src: 'bilder/slides/slide-12.jpg', titel: 'Re 620 mit Kesselwagenzug' }
    ] },
  { id: 're-474', kat: 'cargo', name: 'Re 474', beiname: 'ES 64 F4', typ: 'Elektrische Zweisystemlokomotive', vorlaeufig: false,
    nummern: [[474001, 474018]],
    text: ['Die Re 474 ist eine elektrische Zweisystemlokomotive der Siemens-Familie ES64F4 (Eurosprinter).', 'SBB Cargo beschaffte sie für grenzüberschreitende Güterzüge zwischen der Schweiz und Italien.'],
    kennzahlen: [['12', 'von SBB Cargo übernommen'], ['6400 kW', 'maximale Leistung'], ['140 km/h', 'Höchstgeschwindigkeit'], ['2005', 'Einsatzbeginn bei SBB Cargo']],
    daten: { 'Hersteller': 'Siemens', 'Plattform': 'Eurosprinter ES64F4', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV AC und 3 kV DC', 'Länge': '19,58 m', 'Gewicht': '87 t leer', 'Leistung': '6400 kW', 'Anfahrzugkraft': '300 kN', 'Höchstgeschwindigkeit': '140 km/h', 'Fahrzeugnummern': 'Re 474 001–018, davon 12 übernommen', 'Anzahl': '12', 'In Betrieb seit': '2005', 'Einsatz': 'Güterverkehr Schweiz–Italien' },
    specOrder: ['Hersteller', 'Plattform', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Die Nummernreihe hat Lücken, weil SBB Cargo von der ursprünglich vorgesehenen Serie nur zwölf Lokomotiven übernahm.',
    abschnitte: [
      { titel: 'Beschaffung und Einsatz', p: ['Die Lokomotiven fuhren ab 2005 im Güterverkehr Schweiz–Italien. Die Zahl 12 bezeichnet die damalige SBB-Cargo-Flotte und ist keine gesicherte Bestandszahl für Oktober 2026.'] },
      { titel: 'Technik', p: ['Die Re 474 verbindet das Schweizer Wechselstromnetz mit dem italienischen 3-kV-Gleichstromnetz. Mehrsystemausrüstung und nationale Zugsicherungen ermöglichten den durchgehenden Einsatz über die Grenze.'] }
    ],
    quellen: ['SBB Cargo – Flottenbroschüre mit Stückzahl und Hauptdaten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Re 474, S. 75'],
    art: { typ: 'lok', form: 'kantig', farbe: CRED, akzent: '#D9DDE1', panto: true }, bilder: [
      { src: 'bilder/re-474-c2.jpg', titel: 'Re 474 bei Jestetten auf der Strecke nach Neuhausen', foto: 'Kabelleger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Re_474_Jestetten_-_Neuhausen_Rheinfall.jpg' },
      { src: 'bilder/re-474-c3.jpg', titel: 'Re 474 014 in Domodossola', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_Re_474_014_Domodossola_150609.jpg' },
      { src: 'bilder/re-474-c4.jpg', titel: 'Re 474 013', foto: 'Manfred Kopka', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Re_474_013.jpg' },
      { src: 'bilder/re-474-c5.jpg', titel: 'Re 474 mit Güterzug in Gravellona Toce', foto: 'Gabriele Fontana', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Gravellona_Toce_(VB)_-_stazione_ferroviaria_-_treno_TEC_43609_Domodossola-Novara_Boschetto_-_SR_E_474.012_-_31-03-2011.jpg' }
    ] },
  { id: 're-193', kat: 'cargo', name: 'Re 193', beiname: 'Vectron', typ: 'Gemietete Siemens Vectron AC für den Binnengüterverkehr', vorlaeufig: false,
    text: ['SBB Cargo setzt seit Ende 2024 Siemens-Vectron-Lokomotiven der Baureihe 193 ein.', 'Die 35 Fahrzeuge sind für acht Jahre gemietet und überbrücken die Zeit bis zur Ablieferung der neuen eigenen Streckenlokomotiven.'],
    kennzahlen: [['35', 'gemietete Lokomotiven'], ['8 Jahre', 'Miet- und Instandhaltungsvertrag'], ['120 km/h', 'Zulassung in der Schweiz'], ['2024', 'Auslieferung und Betriebsstart']],
    daten: { 'Hersteller': 'Siemens Mobility', 'Plattform': 'Vectron AC', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Leistung': 'bis 6400 kW', 'Länge': 'rund 19,0 m', 'Gewicht': 'rund 90 t, je nach Ausstattung', 'Höchstgeschwindigkeit': '120 km/h in der Schweiz', 'Zugsicherung': 'ETCS BL3 und nationale Systeme', 'Eigentümer': 'LokRoll 3 AG', 'Betreiber': 'SBB Cargo AG', 'Anzahl': '35 gemietet', 'In Betrieb seit': '2024' },
    specOrder: ['Hersteller', 'Plattform', 'Achsfolge', 'Spurweite', 'Leistung', 'Länge', 'Gewicht', 'Höchstgeschwindigkeit', 'Zugsicherung', 'Eigentümer', 'Betreiber', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die Lokomotiven gehören nicht der SBB. Stückzahl und Mietdauer beziehen sich auf den Vertrag für SBB Cargo Schweiz.',
    abschnitte: [
      { titel: 'Beschaffung und Einsatz', p: ['Die ersten fünf Fahrzeuge trafen 2024 in Muttenz ein. Hauptaufgabe ist der Schweizer Binnengüterverkehr; Zulassungen bestehen auch für grenzüberschreitende Einsätze.', 'Rund 550 Lokführerinnen und Lokführer wurden geschult.'] },
      { titel: 'Abgrenzung', p: ['Diese Seite behandelt die 35 Vectron AC von SBB Cargo Schweiz. Die Mehrsystem-Vectron von SBB Cargo International gehören zu anderen Beschaffungs- und Leasingverträgen.'] }
    ],
    quellen: ['SBB Cargo – Einführung der 35 BR 193 und Schweizer Höchstgeschwindigkeit', 'Siemens Mobility – Bestellung, Vermietung und Auslieferung 2024', 'Siemens Mobility – Vectron-Mehrsystemlokomotiven für SBB Cargo International'],
    art: { typ: 'lok', form: 'kantig', farbe: CRED, akzent: '#F3F4F2', panto: true }, bilder: [] },

  { id: 're-421', kat: 'cargo', name: 'Re 421', beiname: 'Re 4/4 II für Deutschland', typ: 'Elektrische Universallokomotive für den grenzüberschreitenden Verkehr', vorlaeufig: false,
    nummern: [[421371, 421397]],
    text: ['Die Re 421 ist die für Einsätze in Deutschland umgebaute Variante der SBB Re 4/4 II.', 'Zwischen 2002 und 2004 entstanden 26 Lokomotiven aus der letzten Bauserie; sie erhielten die neue Bezeichnung Re 421 und den rot-blauen Cargo-Anstrich.'],
    kennzahlen: [['26', 'Lokomotiven umgebaut'], ['4700 kW', 'Maximalleistung'], ['140 km/h', 'Höchstgeschwindigkeit'], ['255 kN', 'Anfahrzugkraft']],
    daten: { 'Hersteller': 'SLM, BBC, MFO, SAAS', 'Bauart': 'elektrische Universallokomotive', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '15,4 m', 'Gewicht': '84 t (Wert im Fahrtypenkatalog)', 'Leistung': '4700 kW', 'Anfahrzugkraft': '255 kN', 'Höchstgeschwindigkeit': '140 km/h', 'Nummern': '421 371–397 (ohne 382)', 'Anzahl': '26', 'In Betrieb seit': '2002 (Umbau 2002–2004)', 'Einsatz': 'Güterverkehr Schweiz–Deutschland' },
    specOrder: ['Hersteller', 'Bauart', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Der SBB-Fahrtypenkatalog 2026 führt die Re 421 als Alias des aktiven Fahrtyps 1051 Re 420. Die 84 t sind ein Fahrdynamikwert für diesen zusammengefassten Fahrtyp.',
    abschnitte: [
      { titel: 'Umbau für Deutschland', p: ['Als Basis dienten die Re 4/4 II 11371 bis 11397; die nach einem Brand ausgeschiedene 11382 war nicht Teil des Programms.', 'Für die deutsche Zulassung erhielten die Lokomotiven die nötigen Anpassungen und Ausrüstungen sowie die neue Nummernreihe 421 371 bis 421 397.'] },
      { titel: 'Einsatz und Katalogstatus', p: ['Die Re 421 verbindet die robuste Technik der Re 4/4 II mit grenzüberschreitender Einsatzfähigkeit und war vor allem für Güterzüge nach Deutschland vorgesehen.', 'Im SBB-Fahrtypenkatalog 2026 bleibt sie als Alias des aktiven Re-420-Fahrtyps hinterlegt.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 1051 Re 420 mit Alias Re 421, S. 67', 'Archiv SBB Historic – Fahrzeugdossier Re 4/4 II 11108, Angaben zur Fahrzeugfamilie und zum Umbau Re 421, Stand Oktober 2025'],
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: CRED, akzent: '#F3F4F2', panto: true }, bilder: [
      { src: 'bilder/re-421-c1.jpg', titel: 'Re 421 374 in Thun', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:1_FFS_Re_421_374-0_Thun_120818.jpg' },
      { src: 'bilder/re-421-c2.jpg', titel: 'Re 421 395 in Pirna', foto: 'Pedalito', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:421_395-5_Pirna.jpg' },
      { src: 'bilder/re-421-c3.jpg', titel: 'Re 421 377 mit Autozug in Donauwörth', foto: 'HintenRum', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Re_4-4_II_421_377-3,_Auto-G%C3%BCterzug_-_(DE)_Donauw%C3%B6rth_-_01.05.2014_(14327900154).jpg' },
      { src: 'bilder/re-421-c4.jpg', titel: 'Re 421 383 in Lindau Hbf', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:26.05.17_Lindau_Hbf_421.383_(34952955682).jpg' },
      { src: 'bilder/re-421-c5.jpg', titel: 'Re 421 in Dresden', foto: 'Bybbisch94', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20150419.Dresden,_7.Loktreffen.-012.jpg' }
    ] },
  { id: 'aem-940', kat: 'infrastruktur', name: 'Aem 940', beiname: 'Prima H4', typ: 'Zweikraftlokomotive', vorlaeufig: false,
    text: ['Die Aem 940 ist eine vierachsige Zweikraftlokomotive von Alstom für SBB Infrastruktur. Sie fährt elektrisch unter der Fahrleitung und auf nicht elektrifizierten Gleisen mit zwei Dieselgeneratoren.', 'So eignet sie sich für Bauzüge und schwere Rangierarbeiten.'],
    kennzahlen: [['47', 'Lokomotiven bestellt'], ['120 km/h', 'Höchstgeschwindigkeit'], ['2000 kW', 'elektrische Leistung'], ['2018', 'Start der Erprobung']],
    daten: { 'Hersteller': 'Alstom', 'Plattform': 'Prima H4', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '18,75 m über Puffer', 'Gewicht': '84 t; 90 t mit Ballast', 'Stromsystem': '15 kV, 16,7 Hz', 'Antrieb': 'elektrisch, mit zwei Dieselgeneratoren', 'Leistung': '2000 kW elektrisch, 900 kW mit Diesel', 'Höchstgeschwindigkeit': '120 km/h', 'Anfahrzugkraft': '300 kN', 'Tankinhalt': '3000 l', 'Mehrfachtraktion': 'bis zu 4 Loks', 'Anzahl': '47 bestellt', 'In Betrieb seit': '2018 (Erprobung), Serie ab 2019' },
    specOrder: ['Hersteller', 'Plattform', 'Achsfolge', 'Spurweite', 'Länge', 'Gewicht', 'Stromsystem', 'Antrieb', 'Leistung', 'Höchstgeschwindigkeit', 'Anfahrzugkraft', 'Tankinhalt', 'Mehrfachtraktion', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Technische Werte nach der Alstom-Präsentation von 2016. Elektrische und Diesel-Leistung gelten für unterschiedliche Betriebsarten.',
    abschnitte: [
      { titel: 'Beschaffung und Einsatz', p: ['Die SBB bestellte 47 Lokomotiven für SBB Infrastruktur. Die ersten fünf wurden ab 2018 erprobt; für Herbst 2019 war der Start der Serienauslieferung vorgesehen.', 'Die SBB nennt die Rangierbahnhöfe Limmattal und Lausanne Triage sowie Bauzüge für Unterhalt und Ausbau in der ganzen Schweiz als Einsatzfelder.'] },
      { titel: 'Zweikraftantrieb und Steuerung', p: ['Unter der Fahrleitung nutzt die Lok den elektrischen Antrieb. Ohne Fahrdraht erzeugen zwei kleinere Dieselmotoren die Energie für die elektrischen Fahrmotoren.', 'Die SBB beschreibt den Einsatz von ETCS Level 2 und einen besonderen Fernsteuermodus am Ablaufberg Limmattal, bei dem die Lokführerin oder der Lokführer im Führerstand bleibt.'] }
    ],
    quellen: ['SBB News – Vorstellung der Aem 940 und der 47 bestellten Fahrzeuge, 2018', 'Alstom – Präsentation zur SBB Aem 940, S. 12 und 26, 2016'],
    art: { typ: 'lok', form: 'kantig', farbe: YEL, akzent: '#2E3338', panto: true }, bilder: [
      { src: 'bilder/aem-940-c1.jpg', titel: 'Aem 940 020', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Alstom_H4_(Aem_940_020_A_W).jpg' },
      { src: 'bilder/aem-940-c2.jpg', titel: 'Aem 940 023', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Aem_940_023_(53756058710).jpg' },
      { src: 'bilder/aem-940-c3.jpg', titel: 'Aem 940 018 in Biasca', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2-Kraft-(Rangier-)Lokomotive_SBB_Aem_940_018_in._Biasca_(2026).jpg' },
      { src: 'bilder/aem-940-c4.jpg', titel: 'Aem 940 001', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Alstom_H4_(Aem_940_001_B_W).jpg' },
      { src: 'bilder/aem-940-c5.jpg', titel: 'Aem 940 004', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Alstom_H4_(Aem_940_004_A_W).jpg' }
    ] },
  { id: 'am-843', kat: 'infrastruktur', name: 'Am 843', beiname: 'G 1700', typ: 'Dieselhydraulische Lokomotive für Rangier- und Streckendienst', vorlaeufig: false,
    text: ['Die Am 843 ist eine vierachsige dieselhydraulische Lokomotive von Vossloh. Sie wurde für schwere Rangierarbeiten und Fahrten auf der Strecke beschafft.', 'SBB Cargo, SBB Infrastruktur und der Personenverkehr nutzten die Baureihe in verschiedenen Aufgaben.'],
    kennzahlen: [['59', 'ursprünglich für SBB Cargo bestellt'], ['1500 kW', 'Dieselmotorleistung'], ['100 km/h', 'Streckengeschwindigkeit'], ['2004', 'bei SBB Cargo eingeführt']],
    daten: { 'Hersteller': 'Vossloh Locomotives', 'Antrieb': 'dieselhydraulisch', 'Achsfolge': 'B′B′', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,2 m', 'Gewicht': '80 t Dienstgewicht', 'Leistung': '1500 kW', 'Höchstgeschwindigkeit': '100 km/h', 'Rangiergang': 'bis 40 km/h', 'Streckengang': 'bis 100 km/h', 'Anzahl': '59 für SBB Cargo bestellt', 'In Betrieb seit': '2004 (SBB Cargo)' },
    specOrder: ['Hersteller', 'Antrieb', 'Achsfolge', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Rangiergang', 'Streckengang', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die zwei Getriebegänge sind auf hohe Zugkraft bei niedriger Rangiergeschwindigkeit und auf Fahrten mit bis zu 100 km/h auf der Strecke ausgelegt.',
    abschnitte: [
      { titel: 'Beschaffung und Einsatz', p: ['SBB Cargo bestellte 59 Am 843 bei Vossloh in Kiel und stellte die ersten Lokomotiven 2004 vor. Diese Zahl bezeichnet die damalige Cargo-Beschaffung, nicht die ganze SBB-Baureihe oder einen aktuellen Bestand.', 'Cargo setzt die Am 843 insbesondere im Rangier- und Zustelldienst ein. Bei SBB Infrastruktur gehören Rangier- und Bauzugaufgaben zu den Einsätzen.'] },
      { titel: 'Technik und Entwicklung', p: ['Die Loks von SBB Cargo wurden mit Dieselpartikelfiltern ausgerüstet.', 'Im Oktober 2025 kündigte SBB Cargo die Beschaffung neuer hybrider Rangierlokomotiven als künftigen Ersatz der Am 843 an. Ein aktueller Bestand der ganzen Baureihe wird auf den verwendeten SBB-Seiten nicht gesondert angegeben.'] }
    ],
    quellen: ['SBB Cargo – Cargo Magazin 2/2004 zur Bestellung von 59 Am 843 und Partikelfilter', 'SBB Cargo – Rollmaterialvermietung mit Masse, Länge und Leistung', 'Vossloh – Herstellerdatenblatt Am 843, archivierte Kopie', 'SBB Cargo – Geplante Nachfolge für die Am 843, Oktober 2025'],
    art: { typ: 'haube', farbe: CRED, akzent: '#3A4047' }, bilder: [
      { src: 'bilder/am-843-c1.jpg', titel: 'Am 843 084 von SBB Cargo in Steinen', foto: 'Alex Noble', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:20240704_SBB_Cargo_843084_Steinen.jpg' },
      { src: 'bilder/am-843-c2.jpg', titel: 'Am 843 092', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:J41_608_Bk_Jacobsthal,_Am_843_092.jpg' },
      { src: 'bilder/am-843-c3.jpg', titel: 'Am 843 in Basel', foto: 'Smiley.toerist', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Basel_SBB_2023_9.jpg' },
      { src: 'bilder/am-843-c4.jpg', titel: 'Am 843 076 von SBB Cargo', foto: 'Alex Noble', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:20221003_SBB_Cargo_843076.jpg' },
      { src: 'bilder/am-843-c5.jpg', titel: 'Am 843 075', foto: 'Wazzalex', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:843075_coss.JPG' }
    ] },
  { id: 'tm-234', kat: 'infrastruktur', name: 'Tm 234', beiname: 'Ameise', typ: 'Baudiensttraktor', vorlaeufig: false,
    text: ['Der Tm 234 «Ameise» ist ein zweiachsiger Dieseltraktor für den Bau und Unterhalt der Bahnanlagen. Je nach Ausführung besitzt er eine Ladebrücke mit Ladekran oder eine Arbeitsbühne.', 'Diese Seite behandelt die ältere «Ameise», nicht den späteren Windhoff Tm 234-4.'],
    kennzahlen: [['125', 'in drei Serien bestellt'], ['550 kW', 'Dieselmotorleistung'], ['80 km/h', 'Streckengeschwindigkeit'], ['124', 'SBB-Bestand im Jahr 2019']],
    daten: { 'Hersteller': 'Stadler Winterthur und Partner', 'Bauart': 'zweiachsiger Dieseltraktor', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '11,22 m', 'Gewicht': '30 t Dienstmasse, höchstens 37 t', 'Antrieb': 'hydrostatisch, MTU-Dieselmotor', 'Leistung': '550 kW', 'Anfahrzugkraft': 'ca. 81 kN', 'Höchstgeschwindigkeit': '80 km/h', 'Zuladung': '7 t; Korbversion 0,5 t', 'Arbeitsmodus': 'bis 20 km/h, Kranfahrten bis 4 km/h', 'Anzahl': '125 bestellt (1997, 2000, 2005)', 'In Betrieb seit': '1999 (erste Serie 1997 bestellt)', 'Einsatz': 'Gleis-, Fahrleitungs- und Signalunterhalt' },
    specOrder: ['Hersteller', 'Bauart', 'Spurweite', 'Länge', 'Gewicht', 'Antrieb', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Zuladung', 'Arbeitsmodus', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Herstellerdatenblatt und eine Vorstudie von DLR und SBB beschreiben die verschiedenen Ausführungen.',
    abschnitte: [
      { titel: 'Serien und Einsatz', p: ['Die SBB bestellte 1997 und 2000 je 50 Fahrzeuge sowie 2005 weitere 25. Ablieferung und Inbetriebnahme der ersten Serie begannen 1999. Stadler meldete die Auslieferung der letzten 25 im Jahr 2007.', 'Die Traktoren dienen im Gleis-, Fahrleitungs- und Signalunterhalt, transportieren Material und können Bauzüge bewegen oder rangieren.'] },
      { titel: 'Bestand und Abgrenzung', p: ['SBB Infrastruktur nannte 2019 einen Bestand von 124 älteren Tm 234 «Ameise». Das ist ein historischer Stand und keine Angabe zur Flotte im Oktober 2026.', 'Der ebenfalls als Tm 234-4 bezeichnete neuere Baudiensttraktor stammt von Windhoff und gehört zu einer anderen Beschaffung.'] }
    ],
    quellen: ['Stadler – Datenblatt Tm 234 «Ameise», archivierte Herstellerbroschüre', 'DLR und SBB – Vorstudie SBB, Abschnitt 2.3.1, S. 12–13', 'SBB News – Neue Baudiensttraktoren und Bestand der «Ameise», 2019', 'Stadler – Medienmitteilung zum Geschäftsjahr 2007 mit Tm-234-Auslieferung'],
    art: { typ: 'rangier', farbe: YEL, panto: false, kran: true }, bilder: [
      { src: 'bilder/tm-234-c1.jpg', titel: 'Tm 234 109 «Ameise»', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Tm_234_(234_109_A_W).jpg' },
      { src: 'bilder/tm-234-c2.jpg', titel: 'Tm 234 004 in Neuhausen SH', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bautraktor_SBB_CFF_Tm_234_004_in_Neuhausen_SH_(2014).jpg' },
      { src: 'bilder/tm-234-c3.jpg', titel: 'Tm 234 139 in Winterthur', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Tm_234_139_in_Winterthur,_2013.jpg' },
      { src: 'bilder/tm-234-c4.jpg', titel: 'Tm 234 «Ameise» mit Ladekran', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2012_05_28_ROK_P1000127_Tm_234.JPG' },
      { src: 'bilder/tm-234-c5.jpg', titel: 'Tm 234 090', foto: 'Fabian Grunder (FabiBerg)', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Tm_234_090-9.JPG' }
    ] },
  { id: 'am-841', kat: 'infrastruktur', name: 'Am 841', beiname: 'GA-DE 900', typ: 'Dieselelektrische Lok für Bauzüge und leichten Streckendienst', vorlaeufig: false,
    nummern: [[841000, 841039]],
    text: ['Die Am 841 ist eine vierachsige dieselelektrische Lokomotive von GEC Alsthom.', 'Sie wurde für schwere Bauzüge, Rangieraufgaben und leichte Güterzüge auf der Strecke beschafft.'],
    kennzahlen: [['40', 'ursprünglich beschafft'], ['920 kW', 'Dieselmotorleistung'], ['80 km/h', 'Höchstgeschwindigkeit'], ['1996–1997', 'Baujahre der SBB-Serie']],
    daten: { 'Hersteller': 'GEC Alsthom', 'Typ': 'GA-DE 900/AS', 'Antrieb': 'dieselelektrisch', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '14,16 m', 'Gewicht': '73 t Dienstmasse', 'Leistung': '920 kW', 'Anfahrzugkraft': '195 kN', 'Höchstgeschwindigkeit': '80 km/h', 'Fahrzeugnummern': '841 000–039', 'Anzahl': '40 beschafft (30 + 10)', 'In Betrieb seit': '1996–1997 (Baujahre)' },
    specOrder: ['Hersteller', 'Typ', 'Antrieb', 'Achsfolge', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Fahrzeugnummern', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die Fahrdynamikwerte folgen dem SBB-Fahrtypenkatalog 2026; historische Quellen nennen je nach Ausrüstungsstand leicht abweichende Massen.',
    abschnitte: [
      { titel: 'Beschaffung und Einsatz', p: ['Die SBB bestellte zunächst 30 Lokomotiven und ergänzte den Auftrag um zehn weitere Fahrzeuge.', 'Die Serie deckte eine Lücke zwischen kleinen Rangiertraktoren und schweren Diesellokomotiven und war besonders für Bau- und Zustelldienste vorgesehen.'] },
      { titel: 'Modernisierung und Zukunft', p: ['Ein Entwicklungsprogramm rüstet fünf Am 841 zu Aeam 841 mit Stromabnehmer, Batterie und Dieselmotor um. Die Unterlagen nennen dafür den Zeitraum 2024 bis 2026.', 'Parallel führt SBB Infrastruktur einen Ersatz der älteren Am 841 und Am 842 als Flottenprojekt.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 1008 Am 841, S. 26', 'Müller Technologie – Technische Daten Am 841/Aeam 841: 40 Fahrzeuge, Baujahre 1996–1997', 'Bundesamt für Verkehr – Schlussbericht ESöV2050 zum Tribrid-Refit Aeam 841', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation vom 4. Juni 2025, S. 20'],
    art: { typ: 'haube', farbe: ORA, akzent: '#2E3338' }, bilder: [
      { src: 'bilder/am-841-c1.jpg', titel: 'Am 841', foto: 'GoodRJ', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:CH_SBB_AM_841.JPG' },
      { src: 'bilder/am-841-c2.jpg', titel: 'Am 841 014', foto: 'Markus Eigenheer from Genève, Schweiz', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_CFF_FFS_Am_841_014-4_(46362495484).jpg' },
      { src: 'bilder/am-841-c3.jpg', titel: 'Drei Am 841 in Frauenfeld', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:3_SBB_Am_841_Rangierloks_in_Frauenfeld.jpg' },
      { src: 'bilder/am-841-c4.jpg', titel: 'Am 841 017', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2012_09_02_Am_841_017_7.JPG' },
      { src: 'bilder/am-841-c5.jpg', titel: 'Am 841 002 in Küsnacht ZH', foto: 'Der Messer', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Am_841_K%C3%BCsnacht_ZH.jpg' }
    ] },
  { id: 'am-842', kat: 'infrastruktur', name: 'Am 842', beiname: 'MaK G 1204 BB', typ: 'Dieselhydraulische Lok für schweren Rangier- und leichten Streckendienst', vorlaeufig: false,
    nummern: [[842000, 842001], [842011, 842013]],
    text: ['Die Bezeichnung Am 842 wurde bei der SBB für verschiedene vierachsige Diesellokomotiven verwendet.', 'Diese Seite behandelt den im SBB-Fahrtypenkatalog 2026 als aktiv geführten Typ MaK G 1204 BB.'],
    kennzahlen: [['2', '1993 von Sersa übernommen'], ['1120 kW', 'Dieselmotorleistung'], ['80 km/h', 'Höchstgeschwindigkeit'], ['12,5 m', 'Länge über Puffer']],
    daten: { 'Hersteller': 'MaK, Kiel', 'Typ': 'G 1204 BB', 'Antrieb': 'dieselhydraulisch', 'Motor': 'MTU 12V 396 TC13', 'Achsfolge': 'B′B′', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '12,50 m', 'Gewicht': '80 t Dienstmasse bei der SBB', 'Leistung': '1120 kW', 'Anfahrzugkraft': '255 kN', 'Höchstgeschwindigkeit': '80 km/h', 'Anzahl': '2 (Am 842 000 und 001)', 'In Betrieb seit': '1993 bei der SBB' },
    specOrder: ['Hersteller', 'Typ', 'Antrieb', 'Motor', 'Achsfolge', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die Werte 80 t und 255 kN sind die im SBB-Fahrtypenkatalog hinterlegten Parameter für den aktiven Fahrtyp.',
    abschnitte: [
      { titel: 'Übernahme und Einsatz', p: ['Zwei MaK G 1204 BB gelangten 1993 von Sersa zur SBB und wurden als Am 842 000 und 001 eingereiht.', 'Die leistungsstarken Rangierlokomotiven eignen sich für schwere Verschubaufgaben sowie kürzere Streckenfahrten.'] },
      { titel: 'Abgrenzung der Baureihe', p: ['Später trugen auch drei Vossloh G 1000 BB von SBB Cargo die Nummern Am 842 011 bis 013. Deren technische Daten unterscheiden sich vom MaK-Typ; Angaben zur Am 842 gehören deshalb immer zur jeweiligen Nummerngruppe.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 1009 Am 842, S. 27', 'MaK – Typenblatt G 1204 BB mit Abmessungen, Motor und Leistungsübertragung', '9-mm.ch – Baureihenübersicht der bei der SBB als Am 842 geführten Bauarten'],
    art: { typ: 'haube', farbe: CRED, akzent: '#3A4047', mittig: true }, bilder: [] },
  { id: 'tmf-232', kat: 'infrastruktur', name: 'Tmf 232', beiname: 'Tm IV Refit', typ: 'Modernisierter Baudiensttraktor mit Funkfernsteuerung', vorlaeufig: false,
    nummern: [[232301, 232315]],
    text: ['Der Tmf 232 entstand durch die Modernisierung von Tm-IV-Baudiensttraktoren. SBB Infrastruktur beauftragte 2013 den Umbau von 15 Fahrzeugen.', 'Das «f» in der Bezeichnung steht für die Funkfernsteuerung.'],
    kennzahlen: [['15', 'Fahrzeuge im Umbauauftrag'], ['2013', 'Auftrag zur Modernisierung'], ['280 kW', 'Dieselleistung'], ['60 km/h', 'Höchstgeschwindigkeit aus eigener Kraft']],
    daten: { 'Umbau': 'ORTICS, im SBB Industriewerk Biel', 'Ursprungsbaureihe': 'Tm IV', 'Achsfolge': 'B', 'Spurweite': 'Normalspur, 1435 mm', 'Antrieb': 'dieselhydraulisch, Caterpillar-Motor', 'Leistung': '280 kW', 'Länge': '7,67 m über Puffer', 'Gewicht': 'rund 30 t', 'Anfahrzugkraft': '90 kN', 'Höchstgeschwindigkeit': '60 km/h aus eigener Kraft, 90 km/h geschleppt', 'Steuerung': 'Funkfern- und Vielfachsteuerung', 'Zugbeeinflussung': 'ETM-S', 'Anzahl': '15 (Tmf 232 301–315)', 'Umbauauftrag': '2013 (erster Einsatz nach dem Umbau nicht belegt)', 'Einsatz': 'Bau- und Rangierdienst' },
    specOrder: ['Umbau', 'Ursprungsbaureihe', 'Achsfolge', 'Spurweite', 'Antrieb', 'Leistung', 'Länge', 'Gewicht', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Steuerung', 'Zugbeeinflussung', 'Anzahl', 'Umbauauftrag', 'Einsatz'],
    specNote: '2013 ist das belegte Auftragsjahr der Modernisierung, nicht das ursprüngliche Baujahr der Tm-IV-Spenderfahrzeuge.',
    abschnitte: [
      { titel: 'Modernisierung', p: ['ORTICS erhielt 2013 von SBB Infrastruktur den Auftrag, 15 Tm IV zu modernisieren. Rahmen, Aufbauten, Radsätze und Fahrantrieb blieben weitgehend erhalten; Motor, Steuerungs- und Sicherheitstechnik wurden erneuert und eine Funkfernsteuerung eingebaut.'] },
      { titel: 'Einsatz', p: ['Der Tmf 232 bewegt Bauzüge, rangiert Fahrzeuge und unterstützt Arbeiten auf Baustellen. Für hohe Zugkraft gibt es einen Rangiergang bis 30 km/h, für Streckenfahrten einen Gang bis 60 km/h.', 'Die höhere Schleppgeschwindigkeit von 90 km/h gilt ohne eigenen Antrieb im Zugverband.'] }
    ],
    quellen: ['ORTICS – Modernisierung von 15 Tm IV zu Tmf 232, Auftrag 2013', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Tmf 232', 'SBB Infrastruktur – Betriebsvorschriften Verkehre Infrastruktur I-34000, Abschnitt Tmf 232', 'SBB Cargo – Bedienerhandbuch Tm 232 / Tmf 232, Ausgabe 12/2013'],
    art: { typ: 'rangier', farbe: YEL, panto: false, klein: true }, bilder: [] },
  { id: 'tm-234-4', kat: 'infrastruktur', name: 'Tm 234-4', beiname: 'DART', typ: 'Baudiensttraktor von Windhoff', vorlaeufig: false,
    text: ['Der Tm 234-4 ist ein zweiachsiger Baudiensttraktor mit Ladeplattform und Kran. DART steht für Diesel-Arbeits- und Rangier-Traktor.', 'SBB Infrastruktur beschaffte ihn für Unterhalt, Materialtransport, Rangierarbeiten sowie Einsätze an Gleis-, Signal- und Kabelanlagen.'],
    kennzahlen: [['35', 'Fahrzeuge im SBB-Projekt'], ['651 kW', 'installierte Gesamtleistung'], ['100 km/h', 'Höchstgeschwindigkeit'], ['14,24 m', 'Länge über Puffer']],
    daten: { 'Hersteller': 'Windhoff', 'Achsfolge': 'B', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '14,24 m über Puffer', 'Gewicht': 'ca. 37,3 t Dienstmasse', 'Leistung': '651 kW installiert (522 kW Hauptmotor + 129 kW Arbeitsmotor)', 'Motor': 'Caterpillar C18 und C4.4', 'Antrieb': 'hydrodynamisch und hydrostatisch', 'Anfahrzugkraft': 'ca. 100–105 kN', 'Höchstgeschwindigkeit': '100 km/h', 'Ladeplattform': 'bis 3200 kg', 'Ladekran': 'Palfinger PR220 HPLS, bis 11 m Reichweite', 'Tankinhalt': '760 l', 'Anzahl': '35 vorgesehen', 'In Betrieb seit': '2019 (Vorserie)' },
    specOrder: ['Hersteller', 'Achsfolge', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Motor', 'Antrieb', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Ladeplattform', 'Ladekran', 'Tankinhalt', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die installierte Leistung umfasst Haupt- und Arbeitsmotor; der SBB-Fahrtyp führt für die Fahrdynamik eine geringere Maximalleistung.',
    abschnitte: [
      { titel: 'Beschaffung und Ablösung', p: ['Die SBB vergab den Auftrag 2015. Ab 2019 wurden zunächst fünf Vorserienfahrzeuge erprobt; insgesamt waren 35 Traktoren als Ersatz für 51 ältere Tm 232 vorgesehen.'] },
      { titel: 'Arbeits- und Fahrbetrieb', p: ['Der Hauptmotor treibt den schnellen hydrodynamischen Fahrstrang, der zusätzliche Arbeitsmotor versorgt die hydraulischen Nebenbetriebe.', 'Die Kombination aus Kran, Ladefläche und 100-km/h-Zulassung ermöglicht Material- und Bauzugeinsätze ohne separates Arbeitsfahrzeug.'] }
    ],
    quellen: ['SBB News – Neue Baudiensttraktoren für SBB Infrastruktur, 1. April 2019', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 1109, S. 123', 'Windhoff – Windhoff News 01/2024, technische Daten Tm 234-4', 'Railvolution – SBB Class Tm 234-4: The Next Chapter, Abnahme und Fahrzeugdaten'],
    art: { typ: 'rangier', farbe: YEL, panto: false, kran: true }, bilder: [
      { src: 'bilder/tm-234-4-c1.jpg', titel: 'Baudiensttraktor von Windhoff mit Ladekran', foto: 'Chris.urs-o', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Windhoff.jpg' },
      { src: 'bilder/tm-234-4-c2.jpg', titel: 'Baudiensttraktor von Windhoff, andere Seite', foto: 'Chris.urs-o', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Windhoff_2.jpg' },
      { src: 'bilder/tm-234-4-c3.jpg', titel: 'Tm 234 413 mit Ladekran in Weinfelden', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bautraktor_SBB_Tm_234_413_in_Weinfelden.jpg' },
      { src: 'bilder/tm-234-4-c4.jpg', titel: 'Tm 234 413 in Weinfelden, von der Kranseite', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bautraktor_SBB_Tm_234_413-3_in_Weinfelden.jpg' },
      { src: 'bilder/tm-234-4-c5.jpg', titel: 'Tm 234 435 in Kreuzlingen', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bautraktor_SBB_Tm_234_435_(Kreuzlingen,_2023).jpg' }
    ] },

  // ---------- Infrastruktur: Schotter- und Kippwagen ----------
  { id: 'fans-u', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Fans-u', beiname: '', typ: 'Vierachsiger Schottertransportwagen mit seitlicher Entladung', vorlaeufig: false,
    text: ['Der Fans-u ist ein vierachsiger Spezialwagen für Schotter, Aushub und weitere Gleisbaustoffe.', 'Seine beiden Mulden können seitlich entleert werden; die hydraulische Arbeitsausrüstung wird extern mit Energie versorgt.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['12,74 m', 'Länge'], ['29,0 t', 'Leergewicht'], ['80 t', 'max. Gesamtgewicht']],
    daten: { 'Fahrtyp': '5106', 'Fahrzeugart': 'Güterwagen, Basistyp Baumaschine', 'Achsen': '4, auf 2 Drehgestellen', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '12,74 m', 'Gewicht': '29,0 t leer, 80 t beladen', 'Nutzlast': 'rechnerisch bis ca. 51,0 t', 'Behältervolumen': 'ca. 40 m³', 'Entladung': 'seitlich, hydraulisch', 'Arbeitsenergie': 'externe Versorgung', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Schotter und Aushub' },
    specOrder: ['Fahrtyp', 'Fahrzeugart', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Behältervolumen', 'Entladung', 'Arbeitsenergie', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: 'Die Nutzlast ergibt sich aus dem aktuellen SBB-Gesamt- und Leergewicht; ältere Schulungsunterlagen nennen abweichende Werte.',
    abschnitte: [
      { titel: 'Aufgabe im Gleisbau', p: ['Der Wagen übernimmt den Abtransport von Aushub und Altmaterial sowie die Versorgung von Baustellen mit Schüttgut. Die seitliche Entleerung erlaubt einen gezielten Materialumschlag neben dem Gleis.'] },
      { titel: 'Betrieb und Sicherheit', p: ['Beim Entladen muss der Wagen gegen Kippen gesichert und der Arbeitsbereich freigehalten werden. Hydraulik, Energieversorgung und Verriegelungen sind vor jeder Arbeitsfahrt nach den örtlichen Vorgaben zu prüfen.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Fans-u', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5106 Fans-u, S. 292', 'SBB Infrastruktur – Anhang A zu I-40036, Förder- und Transportwagen'],
    art: { typ: 'wagen', var: 'schotter', farbe: YEL }, bilder: [] },
  { id: 'xans-37', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xans 37', beiname: 'Faccnpps', typ: 'Vierachsiger Schotterwagen mit Schwerkraftentladung', vorlaeufig: false,
    text: ['Der Xans 37 ist ein vierachsiger Schotterwagen für Transport und dosiertes Einschottern.', 'Die Entladung erfolgt über bodennahe Schieber durch Schwerkraft.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['14,0 m', 'Länge'], ['23,9 t', 'Leergewicht'], ['88 t', 'max. Gesamtgewicht']],
    daten: { 'Fahrtyp': '5107', 'UIC-Bezeichnung': 'Faccnpps', 'Achsen': '4, auf 2 Drehgestellen', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '14,0 m', 'Gewicht': '23,9 t leer, 88 t beladen', 'Nutzlast': 'rechnerisch bis ca. 64,1 t', 'Volumen': 'ca. 45 m³', 'Entladung': 'Schwerkraft, dosiertes Ballastieren', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Schottertransport' },
    specOrder: ['Fahrtyp', 'UIC-Bezeichnung', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Volumen', 'Entladung', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: 'Der Fahrtypenkatalog nennt 87,5 t für die Fahrdynamik und rundet das zulässige Gesamtgewicht auf 88 t.',
    abschnitte: [
      { titel: 'Einsatz', p: ['Der Xans 37 transportiert Neuschotter und verteilt ihn im Baustellenbetrieb über seine Auslauföffnungen. Damit eignet er sich für Neubau, Erneuerung und Nachschotterung.'] },
      { titel: 'Beladung und Verschub', p: ['Vor Zug- oder Rangierfahrten müssen sämtliche Klappen vollständig geschlossen und verriegelt sein. Die Schulungsunterlage verlangt Fahrten mit leerem oder vollständig beladenem Wagen und warnt vor Teilfüllungen.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xans 37', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5107 Xans 37 (Faccnpps), S. 293', 'SBB Infrastruktur – Anhang A zu I-40036, Neuschotterwagen'],
    art: { typ: 'wagen', var: 'schotter', farbe: YEL }, bilder: [] },
  { id: 'xans-74', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xans 74', beiname: '', typ: 'Vierachsiger Schotterwagen für Ballast und PSS-Material', vorlaeufig: false,
    text: ['Der Xans 74 ist ein vierachsiger Schüttgutwagen für Ballast und Material der Planumsschutzschicht (PSS).', 'Je nach Ausrüstung unterstützt ein Förderband die seitlich versetzte Ablage des Materials.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['15,0 m', 'Länge'], ['26,0 t', 'Leergewicht'], ['80 t', 'max. Gesamtgewicht']],
    daten: { 'Fahrtyp': '5109', 'Fahrzeugart': 'Güterwagen', 'Achsen': '4, auf 2 Drehgestellen', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,0 m', 'Gewicht': '26,0 t leer, 80 t beladen', 'Nutzlast': 'rechnerisch bis ca. 54,0 t', 'Volumen': 'ca. 40 m³', 'Entladung': 'Schwerkraft', 'Förderband': 'seitliche Ablage bis ca. 4,5 m ab Gleisachse', 'Abdeckung': 'zweiteilig möglich', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Ballast und PSS' },
    specOrder: ['Fahrtyp', 'Fahrzeugart', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Volumen', 'Entladung', 'Förderband', 'Abdeckung', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: 'Die Schulungsfolie nennt für ältere Ausführungen andere Massen; hier gelten die Werte des SBB-Fahrtypenkatalogs 2026.',
    abschnitte: [
      { titel: 'PSS und Ballast', p: ['Neben normalem Schotter kann der Wagen feuchteempfindliches PSS-Material transportieren. Abdeckungen helfen, den geforderten Feuchtegehalt während der Überführung zu erhalten.'] },
      { titel: 'Förderbandbetrieb', p: ['Für den Bandbetrieb braucht es eine externe Energieversorgung oder eine Generatoreinheit. Vor dem Einschalten sind Schwenkbereich, Nachbargleis und Staubentwicklung zu kontrollieren.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xans 74', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5109 Xans 74, S. 295', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation 04.06.2025, S. 20'],
    art: { typ: 'wagen', var: 'schotter', farbe: YEL }, bilder: [
      { src: 'bilder/xans-74-c1.jpg', titel: 'Xans 74 von SBB Infrastruktur, 2021', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:XANS_74_-_Hopper_Wagon_SBBI_(51234285938).jpg' },
      { src: 'bilder/xans-74-c2.jpg', titel: 'Mittlerer Trichter des Xans 74 über dem Förderband', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:XANS_74_-_Hopper_Wagon_SBBI_(51233371237).jpg' },
      { src: 'bilder/xans-74-c3.jpg', titel: 'Ausschwenkbares Förderband unter dem Xans 74', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:XANS_74_-_Hopper_Wagon_SBBI_(51233371477).jpg' }
    ] },
  { id: 'xas-53', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xas 53', beiname: '', typ: 'Muldentransportwagen mit seitlichen Laufschienen', vorlaeufig: false,
    text: ['Der Xas 53 transportiert austauschbare Mulden für Schotter, Siebrückstände und PSS-Material.', 'Seitliche Laufschienen erlauben es, die Behälter im Verbund mit Gleisbaumaschinen zu verschieben.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['19,9 m', 'Länge'], ['31,0 t', 'Leergewicht'], ['7', 'Mulden je Wagen']],
    daten: { 'Fahrtyp': '5113', 'Fahrzeugart': 'Muldentransportwagen', 'Achsen': '4, auf 2 Drehgestellen', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '19,9 m', 'Gewicht': '31,0 t leer, 78 t beladen', 'Nutzlast': 'keine offizielle Angabe (78 t − 31 t ergibt rund 47 t)', 'Behälter': '7 Mulden zu je ca. 4 m³', 'Ausrüstung': 'seitliche Laufschienen, Planen möglich', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Sieb- und Bauzüge' },
    specOrder: ['Fahrtyp', 'Fahrzeugart', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Behälter', 'Ausrüstung', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: 'Der Fahrtypenkatalog nennt 77,6 t Fahrdynamikgewicht. Die Flottenplanung sieht einen Ersatz der Xans/Xas-52/53-Familie vor.',
    abschnitte: [
      { titel: 'Muldenlogistik', p: ['Die Mulden können innerhalb einer Arbeitskette verschoben, befüllt und an geeigneter Stelle entleert werden. Das beschleunigt die laufende Materialabfuhr bei Schotterreinigung und Gleisumbau.'] },
      { titel: 'Ladungssicherung', p: ['Hände und Füsse sind von den Laufschienen fernzuhalten. Für feuchteempfindliches PSS können die Mulden abgedeckt werden; vor jeder Fahrt müssen Behälter und Planen korrekt gesichert sein.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xas 53', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5113 Xas 53, S. 299', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation 04.06.2025, S. 20'],
    art: { typ: 'wagen', var: 'mulde', farbe: YEL }, bilder: [
      { src: 'bilder/xas-53-c1.jpg', titel: 'Xas 80 85 98 53 420-0 von SBB Infrastruktur in Effretikon', foto: 'User:Beroesz', lizenz: 'CC BY-SA 2.5 hu', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.5/hu/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:Effretikon_CH-SBBI_Xas_8085_9853_420-0_teherkocsi_2016-09-16.JPG' }
    ] },
  { id: 'xas-62', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xas 62', beiname: '', typ: 'Vierachsiger Altschotter-Kippwagen ohne Förderband', vorlaeufig: false,
    text: ['Der Xas 62 nimmt Altschotter, Aushub, Kies und Sand auf.', 'Der Wagenkasten wird elektrohydraulisch gekippt, sodass das Material durch Schwerkraft herausfällt.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['15,04 m', 'Länge'], ['30,0 t', 'Leergewicht'], ['80 t', 'max. Gesamtgewicht']],
    daten: { 'Fahrtyp': '5111', 'Ausführung': 'ohne Förderband', 'Achsen': '4, auf 2 Drehgestellen', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,04 m', 'Gewicht': '30,0 t leer, 80 t beladen', 'Nutzlast': 'rechnerisch bis ca. 50,0 t', 'Volumen': 'ca. 51 m³', 'Entladung': 'Kippkasten, elektrohydraulisch', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Altschotter und Aushub' },
    specOrder: ['Fahrtyp', 'Ausführung', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Volumen', 'Entladung', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: 'Der Fahrtypenkatalog trennt klar zwischen dieser Ausführung und dem Xas 62 mit Förderband.',
    abschnitte: [
      { titel: 'Materialabfuhr', p: ['Der Xas 62 dient vor allem der Entsorgung von Material aus Gleiserneuerung und Unterbausanierung. Das Kippen beschleunigt die Entladung an geeigneten Ablagestellen.'] },
      { titel: 'Arbeitsbetrieb', p: ['Während des Kippens sind Standsicherheit, Fahrleitung, Nachbargleis und seitlicher Freiraum zu überwachen. Aufstieg und Aufenthalt auf dem Wagen während Bewegungen sind untersagt.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xas 62', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5111 Xas 62, S. 297', 'SBB Infrastruktur – Anhang A zu I-40036, Altschotterwagen'],
    art: { typ: 'wagen', var: 'kipp', farbe: YEL }, bilder: [] },
  { id: 'xas-62-fb', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xas 62', beiname: 'mit Förderband', typ: 'Altschotter-Kippwagen mit zusätzlichem Förderband', vorlaeufig: false,
    text: ['Die Förderband-Ausführung des Xas 62 verbindet den kippbaren Wagenkasten mit einem Band für kontrollierten Materialabtrag.', 'Sie wird als eigener aktiver Fahrtyp geführt.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['15,04 m', 'Länge'], ['30,5 t', 'Leergewicht'], ['80 t', 'max. Gesamtgewicht']],
    daten: { 'Fahrtyp': '5075', 'Ausführung': 'mit Förderband (FB)', 'Achsen': '4, auf 2 Drehgestellen', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,04 m', 'Gewicht': '30,5 t leer, 80 t beladen', 'Nutzlast': 'rechnerisch bis ca. 49,5 t', 'Entladung': 'Kippkasten und Förderband', 'Arbeitsantrieb': 'elektrohydraulisch', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Materialabfuhr' },
    specOrder: ['Fahrtyp', 'Ausführung', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Entladung', 'Arbeitsantrieb', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: '«FB» steht für die Ausführung mit Förderband; gegenüber dem Wagen ohne Band steigt das Leergewicht um rund 0,5 t.',
    abschnitte: [
      { titel: 'Gezielter Materialfluss', p: ['Das Förderband erweitert die reine Kippentladung. Material kann kontrolliert an nachfolgende Einheiten oder seitlich an eine bestimmte Stelle übergeben werden.'] },
      { titel: 'Sicherheitsbereich', p: ['Band, Kippkasten und Hydraulik dürfen nur im freigegebenen Arbeitsbereich betrieben werden. Quetschstellen, Absturzgefahr und die Nähe zur Fahrleitung sind besonders zu beachten.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xas 62', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5075 Xas 62 mit FB, S. 261', 'SBB Infrastruktur – Anhang A zu I-40036, Altschotterwagen'],
    art: { typ: 'wagen', var: 'kipp', band: true, farbe: YEL }, bilder: [] },
  { id: 'xas-73', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xas 73', beiname: 'Talbot', typ: 'Schotterwagen für Erst- und Zweitstopfung', vorlaeufig: false,
    text: ['Der Xas 73 ist ein vierachsiger Talbot-Schotterwagen mit Schwerkraftentladung.', 'Er wird besonders beim ersten und zweiten Stopfgang eingesetzt, um Schotter gezielt zu verteilen.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['15,04 m', 'Länge'], ['22,5 t', 'Leergewicht'], ['200', 'Wagen für Lebensverlängerung geplant']],
    daten: { 'Fahrtyp': '5110', 'Bauart': 'Talbot-Schotterwagen', 'Achsen': '4, auf 2 Drehgestellen', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,04 m', 'Gewicht': '22,5 t leer, 80 t beladen', 'Nutzlast': 'rechnerisch bis ca. 57,5 t', 'Volumen': 'ca. 31 m³', 'Behälter': '4 Halbkammern', 'Bedienung': '4 Handräder', 'Entladung': 'Schwerkraft', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Ballastieren' },
    specOrder: ['Fahrtyp', 'Bauart', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Volumen', 'Behälter', 'Bedienung', 'Entladung', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: 'Laut Flottenpräsentation 2025 plant die SBB die Lebensverlängerung von 200 vierachsigen Xas-73-Talbotwagen.',
    abschnitte: [
      { titel: 'Dosierte Entladung', p: ['Vier Handräder steuern die einzelnen Ausläufe. So kann Schotter abschnittsweise und passend zur Lage im Gleis verteilt werden.'] },
      { titel: 'Flottenperspektive', p: ['Der Typ bleibt im Fahrtypenkatalog 2026 aktiv. Für die grosse Bestandsflotte ist ein Refit vorgesehen, damit die Wagen für weitere Bauperioden verfügbar bleiben.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xas 73', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5110 Xas 73, S. 296', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation 04.06.2025, S. 20'],
    art: { typ: 'wagen', var: 'schotter', farbe: YEL }, bilder: [] },
  { id: 'xns-39', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xns 39', beiname: 'Fccnpps', typ: 'Zweiachsiger Schotterwagen mit Handbetätigung', vorlaeufig: false,
    text: ['Der Xns 39 ist ein kompakter zweiachsiger Schotterwagen.', 'Seine Auslaufschieber werden über Hebelstangen von Hand betätigt und ermöglichen das Einschottern direkt im Gleis.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['10,0 m', 'Länge'], ['13,1 t', 'Leergewicht'], ['45 t', 'max. Gesamtgewicht']],
    daten: { 'Fahrtyp': '5108', 'UIC-Bezeichnung': 'Fccnpps', 'Achsen': '2', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '10,0 m', 'Gewicht': '13,1 t leer, 45 t beladen', 'Nutzlast': 'rechnerisch bis ca. 31,9 t', 'Volumen': 'ca. 22 m³', 'Entladung': 'Schwerkraft', 'Bedienung': 'Schieber von Hand, über Hebelstangen', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Einschottern' },
    specOrder: ['Fahrtyp', 'UIC-Bezeichnung', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Volumen', 'Entladung', 'Bedienung', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: 'Die französische Schulungsfolie schreibt einmal «Xas 39»; Inhaltsverzeichnis und Fahrtypenkatalog bestätigen die Bezeichnung Xns 39.',
    abschnitte: [
      { titel: 'Kompakter Ballastwagen', p: ['Mit zwei Achsen und zehn Metern Länge eignet sich der Xns 39 für kleinere Schottermengen und kurze Baustellenabschnitte. Der einfache mechanische Aufbau kommt ohne zusätzliche Energiequelle aus.'] },
      { titel: 'Sicherer Transport', p: ['Vor jeder Fahrt sind die von Hand bedienten Schieber zu schliessen und zu sichern. Beim Entladen dürfen sich keine Personen im Auslauf- oder Gefahrenbereich aufhalten.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xns 39', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5108 Xns 39 (Fccnpps), S. 294', 'SBB Infrastruktur – Anhang A zu I-40036, Neuschotterwagen'],
    art: { typ: 'wagen', var: 'schotter', zweiachs: true, farbe: YEL }, bilder: [] },
  { id: 'xns-60', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xns 60', beiname: '', typ: 'Zweiachsiger Schotterkippwagen für Ballast und Siebrückstände', vorlaeufig: false,
    text: ['Der Xns 60 ist ein zweiachsiger Kippwagen für Schotter, Siebrückstände und ähnliches Schüttgut.', 'Die Entladung erfolgt durch Kippen und Schwerkraft.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['10,94 m', 'Länge'], ['17,0 t', 'Leergewicht'], ['42 t', 'max. Gesamtgewicht']],
    daten: { 'Fahrtyp': '5112', 'Fahrzeugart': 'Güterwagen mit Kippbehälter', 'Achsen': '2', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '10,94 m', 'Gewicht': '17,0 t leer, 42 t beladen', 'Nutzlast': 'rechnerisch bis ca. 25,0 t', 'Volumen': 'ca. 17,5 m³', 'Entladung': 'Kippen, Schwerkraft', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Schotter und Siebrückstände' },
    specOrder: ['Fahrtyp', 'Fahrzeugart', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Volumen', 'Entladung', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status', 'Einsatz'],
    specNote: 'Die Schulungspräsentation nennt 17 t Nutzlast; aus den aktuellen SBB-Massen ergeben sich rechnerisch bis etwa 25 t.',
    abschnitte: [
      { titel: 'Einfacher Kippwagen', p: ['Der kompakte Wagen kann mit Baggern beladen werden und eignet sich für kleinere Materialmengen. Die Schwerkraftentladung macht zusätzliche Fördertechnik überflüssig.'] },
      { titel: 'Kippvorgang', p: ['Vor dem Kippen sind Untergrund, seitlicher Freiraum und die Lage des Schüttguts zu prüfen. Während der Wagen bewegt wird, darf sich niemand auf dem Aufbau aufhalten.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xns 60', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5112 Xns 60, S. 298', 'SBB Infrastruktur – Anhang A zu I-40036, Altschotterwagen'],
    art: { typ: 'wagen', var: 'kipp', zweiachs: true, farbe: YEL }, bilder: [] },
  { id: 'xs-72', kat: 'infrastruktur', gruppe: 'Schotter- und Kippwagen', name: 'Xs 72', beiname: '', typ: 'Älterer zweiachsiger Ballastwagen mit Handrädern', vorlaeufig: false,
    text: ['Der Xs 72 ist ein zweiachsiger Ballastwagen mit handbetätigten Auslaufklappen.', 'Er erscheint in der SBB-Ausbildungsunterlage von 2022, jedoch nicht mehr als eigener aktiver Typ im Fahrtypenkatalog 2026.'],
    kennzahlen: [['10,24 m', 'Länge'], ['13,0 t', 'Leergewicht'], ['25,0 t', 'Nutzlast laut Folie'], ['15 m³', 'Volumen']],
    daten: { 'Bezeichnung': 'Xs 72', 'Achsen': '2', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '10,24 m', 'Gewicht': '13,0 t leer, rechnerisch ca. 38 t beladen', 'Nutzlast': '25,0 t laut Folie', 'Volumen': '15 m³', 'Entladung': 'Schwerkraft', 'Bedienung': 'Handräder', 'Eigener Fahrantrieb': 'nein', 'Status': 'Bestandstyp, kein eigener Fahrtyp 2026', 'Datenstand': '15.09.2022', 'Einsatz': 'Schottertransport, Ballastieren' },
    specOrder: ['Bezeichnung', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Volumen', 'Entladung', 'Bedienung', 'Eigener Fahrantrieb', 'Status', 'Datenstand', 'Einsatz'],
    specNote: 'Weil es 2026 keinen eigenen Fahrtyp gibt, stammen die Werte bewusst aus der Schulungsfolie von 2022.',
    abschnitte: [
      { titel: 'Funktionsprinzip', p: ['Die Auslaufklappen werden über Handräder geöffnet und geschlossen. So kann Schotter ohne externe Energiequelle verteilt werden.'] },
      { titel: 'Einordnung', p: ['Das Fehlen im aktuellen Fahrtypenkatalog heisst nicht zwingend, dass kein Einzelwagen mehr existiert. Der Typ wird aber nicht als eigener aktiver Fahrtyp für die Trassenbestellung geführt.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xs 72', 'SBB Infrastruktur – Fahrtypenkatalog 2026, aktive Schotterwagen-Fahrtypen 5106–5113'],
    art: { typ: 'wagen', var: 'schotter', zweiachs: true, farbe: YEL }, bilder: [] },
  // ---------- Infrastruktur: Schienentransport ----------
  { id: 'silad-1-3', kat: 'infrastruktur', gruppe: 'Schienentransport', name: 'SILAD 1–3', beiname: 'Robel', typ: 'Schienenladeeinheit mit Materialwagen', vorlaeufig: false,
    text: ['SILAD 1–3 sind aktive SBB-Schienenladeeinheiten für den Transport und Umschlag langer Schienen.', 'Der offizielle Fahrtyp umfasst Ladeeinheit und Materialwagen; im Arbeitszug kommen weitere Transportwagen dazu.'],
    kennzahlen: [['90 km/h', 'Höchstgeschwindigkeit'], ['44,0 m', 'Länge des Fahrtyps'], ['80 t', 'Leer- und Fahrdynamikgewicht'], ['120 m', 'max. Schienenlänge']],
    daten: { 'Fahrtyp': '5031', 'Hersteller': 'Robel', 'Fahrzeugart': 'Güterzug, Basistyp Baumaschine', 'Formation': 'Ladeeinheit und Materialwagen, mehrteilig', 'Transportwagen': 'u. a. Xas 60', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '44,0 m (Fahrtyp)', 'Gewicht': '80 t (Fahrtyp)', 'Schienenlänge': 'bis 120 m', 'Kapazität': 'bis 30 Schienen laut Folie', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '90 km/h', 'Status': 'aktiv (Fahrtypenkatalog 2026)' },
    specOrder: ['Fahrtyp', 'Hersteller', 'Fahrzeugart', 'Formation', 'Transportwagen', 'Spurweite', 'Länge', 'Gewicht', 'Schienenlänge', 'Kapazität', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Status'],
    specNote: 'Die 44 m und 80 t gelten für den im Fahrtypenkatalog definierten Fahrtyp, nicht für den ganzen langen Schienentransportzug.',
    abschnitte: [
      { titel: 'Langschienentransport', p: ['Die Schulungsunterlage beschreibt eine Transporteinheit mit sechs Wagen und Schienen bis 120 Meter. Die SILAD-Ladeeinheit hilft beim sicheren Be- und Entladen auf der Baustelle.'] },
      { titel: 'Flottenentwicklung', p: ['Die SBB führt SILAD 1–3 weiterhin aktiv. Die Flottenplanung sieht zudem ein grosses Programm mit 90 SILAD-Transporteinheiten und vier Ladern vor.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xas 60 / SILAD', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5031 SILAD 1–3 mit Wagen, S. 217', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation 04.06.2025, S. 20'],
    art: { typ: 'wagen', var: 'flach', portal: true, farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'silad-4', kat: 'infrastruktur', gruppe: 'Schienentransport', name: 'SILAD 4', beiname: '', typ: 'Schienenladeeinheit für Bau- und Erneuerungsarbeiten', vorlaeufig: false,
    text: ['SILAD 4 ist eine eigenständig erfasste Schienenladeeinheit der SBB.', 'Sie arbeitet mit den zugehörigen Transportwagen beim Auf- und Abladen langer Schienen.'],
    kennzahlen: [['100 km/h', 'Höchstgeschwindigkeit'], ['29,0 m', 'Länge'], ['58 t', 'Leergewicht'], ['aktiv', 'Status 2026']],
    daten: { 'Fahrtyp': '5071', 'Fahrzeugart': 'Güterzug, Basistyp Baumaschine', 'Beschreibung': 'Schienenladeeinheit', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '29,0 m', 'Gewicht': '58 t (Gesamt- und Fahrdynamikgewicht)', 'Anfahrzugkraft': '0 kN', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '100 km/h', 'Transport': 'im Arbeitsverband', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Schienen auf- und abladen' },
    specOrder: ['Fahrtyp', 'Fahrzeugart', 'Beschreibung', 'Spurweite', 'Länge', 'Gewicht', 'Anfahrzugkraft', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Transport', 'Status', 'Einsatz'],
    specNote: 'Der Fahrtypenkatalog veröffentlicht nur die für die Trasse wichtigen Eckwerte; Arbeitsdaten stehen in separaten Betriebsunterlagen.',
    abschnitte: [
      { titel: 'Arbeitsverband', p: ['SILAD 4 ist kein selbstfahrendes Triebfahrzeug. Für Überführungen und Bewegungen auf der Baustelle wird die Einheit in einen gezogenen Verband eingestellt.'] },
      { titel: 'Schienenlogistik', p: ['SILAD-Systeme verringern schwere Handarbeit beim Heben und sorgen für einen geordneten Materialfluss zwischen Lagerplatz, Transportzug und Einbaustelle.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Abschnitt Schienen', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5071 SILAD 4, S. 257', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation 04.06.2025, S. 20'],
    art: { typ: 'wagen', var: 'flach', portal: true, farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'silad-reserve', kat: 'infrastruktur', gruppe: 'Schienentransport', name: 'SILAD Reserve', beiname: '', typ: 'Kompakte Reserve-Schienenladeeinheit', vorlaeufig: false,
    text: ['Die SILAD-Reserveeinheit steht als Ersatz oder Ergänzung für Schienenladeeinsätze bereit.', 'Sie ist deutlich kürzer und leichter als SILAD 4 und wird als eigener aktiver Fahrtyp geführt.'],
    kennzahlen: [['90 km/h', 'Höchstgeschwindigkeit'], ['14,0 m', 'Länge'], ['18 t', 'Leergewicht'], ['aktiv', 'Status 2026']],
    daten: { 'Fahrtyp': '5072', 'Fahrzeugart': 'Güterzug, Basistyp Baumaschine', 'Beschreibung': 'Reserve-Ladeeinheit', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '14,0 m', 'Gewicht': '18 t (Gesamt- und Fahrdynamikgewicht)', 'Anfahrzugkraft': '0 kN', 'Eigener Fahrantrieb': 'nein', 'Höchstgeschwindigkeit': '90 km/h', 'Transport': 'im Arbeitsverband', 'Status': 'aktiv (Fahrtypenkatalog 2026)', 'Einsatz': 'Reserve und Ergänzung' },
    specOrder: ['Fahrtyp', 'Fahrzeugart', 'Beschreibung', 'Spurweite', 'Länge', 'Gewicht', 'Anfahrzugkraft', 'Eigener Fahrantrieb', 'Höchstgeschwindigkeit', 'Transport', 'Status', 'Einsatz'],
    specNote: '«Reserve» bezeichnet die betriebliche Rolle; der Fahrtypenkatalog führt die Einheit trotzdem als aktiven eigenen Typ.',
    abschnitte: [
      { titel: 'Verfügbarkeit', p: ['Die Reserveeinheit springt bei Unterhalt, Störung oder grossem Bedarf ein und erhöht damit die Verfügbarkeit der Schienenlogistik.'] },
      { titel: 'Betrieb', p: ['Wie die übrigen SILAD-Einheiten hat sie keinen eigenen Fahrantrieb. Überführung, Rangieren und Arbeitsbewegungen erfolgen im dafür zugelassenen Zugverband.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Abschnitt Schienen', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5072 SILAD Reserve, S. 258', 'SBB Infrastruktur – Anhang A zu I-40036, Schienenladeeinheit'],
    art: { typ: 'wagen', var: 'flach', portal: true, zweiachs: true, farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'ste-kurz', kat: 'infrastruktur', gruppe: 'Schienentransport', name: 'STE kurz', beiname: 'Xans 51', typ: 'Schienentransporteinheit mit zwei Kränen für Schienen von 12 bis 36 m', vorlaeufig: false,
    text: ['Die kurze Schienentransporteinheit (STE) basiert laut Schulungsunterlage auf einem vierachsigen Xans-51-Flachwagen.', 'Zwei kleine Krane laden kurze Schienen direkt auf der Baustelle ab.'],
    kennzahlen: [['12–36 m', 'Schienenlänge'], ['29,5 t', 'Leergewicht'], ['50 t', 'Nutzlast laut Folie'], ['2 × 1,5 t', 'Krane']],
    daten: { 'Bezeichnung': 'STE kurz / Xans 51', 'Bauart': 'Flachwagen', 'Achsen': '4', 'Spurweite': 'Normalspur, 1435 mm', 'Gewicht': '29,5 t leer', 'Nutzlast': '50 t laut Folie', 'Krane': '2 Stück, je 1500 kg Traglast', 'Energie': 'Generator an Bord', 'Schienenlänge': '12 bis 36 m', 'Eigener Fahrantrieb': 'nein', 'Status': 'Bestandsangabe 2022, kein eigener Fahrtyp 2026', 'Einsatz': 'Schienen abladen' },
    specOrder: ['Bezeichnung', 'Bauart', 'Achsen', 'Spurweite', 'Gewicht', 'Nutzlast', 'Krane', 'Energie', 'Schienenlänge', 'Eigener Fahrantrieb', 'Status', 'Einsatz'],
    specNote: 'Der Name Xans 51 erscheint nicht als eigener Eintrag im Fahrtypenkatalog 2026; die Werte sind deshalb als Schulungsstand 2022 gekennzeichnet.',
    abschnitte: [
      { titel: 'Kurze Schienen', p: ['Die Einheit deckt Schienenlängen ab, die ohne 120-Meter-Langschienenzug transportiert werden können. Die beiden Krane teilen sich die Last beim Abladen.'] },
      { titel: 'Arbeitsplatzsicherheit', p: ['Während Rangierbewegungen darf niemand aufrecht auf dem Wagen stehen. Kranbereich, Anschlagmittel, Fahrleitung und Nachbargleis sind vor jedem Hub zu sichern.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie STE courte (Xans 51)', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Verzeichnis der aktiven Fahrtypen', 'SBB Infrastruktur – Anhang A zu I-40036, Schienenladeeinheit / Flachwagen'],
    art: { typ: 'wagen', var: 'flach', kran: true, farbe: YEL }, bilder: [] },
  { id: 'ste-lang', kat: 'infrastruktur', gruppe: 'Schienentransport', name: 'STE lang', beiname: 'Xans 51', typ: 'Mehrteilige Schienentransporteinheit für Schienen bis 120 m', vorlaeufig: false,
    text: ['Die lange STE nutzt Xans-51-Wagen mit Kränen für den Transport und das Abladen von Langschienen.', 'Eine betriebliche Einheit besteht laut Präsentation aus sechs Wagen und erreicht 120 Meter Länge.'],
    kennzahlen: [['120 m', 'max. Schienenlänge'], ['6', 'Wagen je Einheit'], ['29,5 t', 'Leergewicht je Kranwagen'], ['2 × 1,5 t', 'Krane je Kranwagen']],
    daten: { 'Bezeichnung': 'STE lang / Xans 51', 'Bauart': 'Flachwagenverband', 'Formation': '6 Wagen', 'Achsen': '4 je Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Gewicht': '29,5 t leer je Kranwagen', 'Nutzlast': '50 t je Kranwagen laut Folie', 'Krane': '2 je Kranwagen, je 1500 kg', 'Energie': 'Generator an Bord', 'Schienenlänge': 'bis 120 m', 'Eigener Fahrantrieb': 'nein', 'Status': 'Bestandsangabe 2022, kein eigener Fahrtyp 2026', 'Einsatz': 'Langschienen abladen' },
    specOrder: ['Bezeichnung', 'Bauart', 'Formation', 'Achsen', 'Spurweite', 'Gewicht', 'Nutzlast', 'Krane', 'Energie', 'Schienenlänge', 'Eigener Fahrantrieb', 'Status', 'Einsatz'],
    specNote: 'Die SILAD-Fahrtypen sind 2026 separat aktiv; STE lang / Xans 51 wird im Katalog nicht als eigener Fahrtyp geführt.',
    abschnitte: [
      { titel: 'Langschienenverband', p: ['Mehrere Wagen tragen die langen, biegsamen Schienen gemeinsam. Die Krane helfen beim kontrollierten Übergang vom Transportverband ins Gleis.'] },
      { titel: 'Betriebsgrenzen', p: ['Die sechs Wagen werden als abgestimmter Verband behandelt. Bei Bewegungen sind Aufenthalt auf den Wagen, Kurvenlauf, Überstände und die Lage der Schienen besonders zu überwachen.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie STE longue (Xans 51)', 'SBB Infrastruktur – Fahrtypenkatalog 2026, SILAD-Fahrtypen 5031, 5071 und 5072', 'SBB Infrastruktur – Anhang A zu I-40036, Schienenladeeinheit / Flachwagen'],
    art: { typ: 'wagen', var: 'flach', kran: true, farbe: YEL }, bilder: [] },
  // ---------- Infrastruktur: Werkstatt- und Mannschaftswagen ----------
  { id: 'xs-45', kat: 'infrastruktur', gruppe: 'Werkstatt- und Mannschaftswagen', name: 'Xs 45', beiname: '', typ: 'Zweiachsiger Werkzeug-, Werkstatt- und Mannschaftswagen', vorlaeufig: false,
    text: ['Der Xs 45 ist ein gedeckter Bauzugwagen für Werkzeug, Ersatzteile und Werkstattausrüstung.', 'Er dient zugleich als geschützter Arbeits- und Unterstützungsraum für Baustellenmannschaften.'],
    kennzahlen: [['2', 'Achsen'], ['15,0 m', 'Länge'], ['16,5 t', 'Leergewicht'], ['22 t', 'Nutzlast laut Folie']],
    daten: { 'Bezeichnung': 'Xs 45', 'Bauart': 'gedeckter Bauzugwagen', 'Achsen': '2', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,0 m', 'Gewicht': '16,5 t leer, rechnerisch ca. 38,5 t beladen', 'Nutzlast': '22 t laut Folie', 'Zugänge': 'seitliche Türen', 'Eigener Fahrantrieb': 'nein', 'Status': 'Bestandstyp, kein eigener Fahrtyp 2026', 'Datenstand': '15.09.2022', 'Einsatz': 'Werkzeug und Werkstatt, Unterstützung der Mannschaft' },
    specOrder: ['Bezeichnung', 'Bauart', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Zugänge', 'Eigener Fahrantrieb', 'Status', 'Datenstand', 'Einsatz'],
    specNote: 'Der Fahrtypenkatalog 2026 führt den Xs 45 nicht separat; die Werte stammen aus der SBB-Schulungsunterlage von 2022.',
    abschnitte: [
      { titel: 'Unterstützung der Baustelle', p: ['Werkzeuge und kleinere Maschinen werden wettergeschützt mitgeführt und direkt am Einsatzort bereitgestellt. Der Wagen ergänzt Triebfahrzeuge und Materialwagen im Bauzug.'] },
      { titel: 'Fahrtstellung', p: ['Vor jeder Bewegung sind Seitentüren, lose Ausrüstung und Arbeitsplätze zu sichern. Personen dürfen sich nur unter den dafür zugelassenen Bedingungen im Wagen aufhalten.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xs 45', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Verzeichnis der aktiven Fahrtypen', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation 04.06.2025, PWFZ-Projekt, S. 20'],
    art: { typ: 'wagen', geschlossen: true, zweiachs: true, farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'xs-48', kat: 'infrastruktur', gruppe: 'Werkstatt- und Mannschaftswagen', name: 'Xs 48', beiname: '', typ: 'Werkstatt- und Mannschaftswagen mit Hubarbeitsbühnen', vorlaeufig: false,
    text: ['Der Xs 48 kombiniert einen gedeckten Werkzeug- und Werkstattwagen mit Hubarbeitsbühnen.', 'Er unterstützt vor allem Arbeiten an Anlagen im Bereich der Fahrleitung.'],
    kennzahlen: [['2', 'Achsen'], ['15,0 m', 'Länge'], ['16,5 t', 'Leergewicht'], ['23 t', 'Nutzlast laut Folie']],
    daten: { 'Bezeichnung': 'Xs 48', 'Bauart': 'gedeckter Arbeitswagen', 'Achsen': '2', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '15,0 m', 'Gewicht': '16,5 t leer, rechnerisch ca. 39,5 t beladen', 'Nutzlast': '23 t laut Folie', 'Ausrüstung': 'Hubarbeitsbühnen', 'Sicherheitsregel': 'Fahrleitung vor dem Anheben ausschalten', 'Eigener Fahrantrieb': 'nein', 'Status': 'Bestandstyp, kein eigener Fahrtyp 2026', 'Datenstand': '15.09.2022', 'Einsatz': 'Werkzeug und Werkstatt, Fahrleitungsarbeiten' },
    specOrder: ['Bezeichnung', 'Bauart', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Ausrüstung', 'Sicherheitsregel', 'Eigener Fahrantrieb', 'Status', 'Datenstand', 'Einsatz'],
    specNote: 'Die Schulungsfolie verlangt ausdrücklich, die Fahrleitung vor dem Anheben der Arbeitsbühnen auszuschalten.',
    abschnitte: [
      { titel: 'Arbeitsbühnen', p: ['Die Bühnen ermöglichen Arbeiten oberhalb des Wagenbodens. So stellt der Wagen Material, Werkstatt und einen erhöhten Arbeitsplatz in einer Einheit bereit.'] },
      { titel: 'Elektrische Sicherheit', p: ['Vor dem Heben muss die Fahrleitung ausgeschaltet, geerdet und gegen Wiedereinschalten gesichert sein. Für die Fahrt sind die Bühnen eingefahren sowie Türen und Ladung verriegelt.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xs 48', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Verzeichnis der aktiven Fahrtypen', 'SBB Infrastruktur – Technischer Netzzugang, Arbeitsgenehmigung für Hubarbeitsbühnen'],
    art: { typ: 'wagen', geschlossen: true, buehne: true, zweiachs: true, farbe: YEL, akzent: '#2E3338' }, bilder: [
      { src: 'bilder/xs-48-c1.jpg', titel: 'Fahrleitungs-Arbeitswagen Xs 40 85 95 48 453-1 bei Bad Ragaz', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_-_Catenary_Construction_Train_(49094462411).jpg' }
    ] },
  { id: 'xs-mannschaftswagen', kat: 'infrastruktur', gruppe: 'Werkstatt- und Mannschaftswagen', name: 'Xs', beiname: 'Mannschaftswagen', typ: 'Zweiachsiger Werkstatt- und Unterstützungswagen', vorlaeufig: false,
    text: ['Der in der Schulungsunterlage schlicht als Xs bezeichnete Wagen transportiert Werkzeug und Werkstattausrüstung.', 'Als Unterstützungswagen im Bauzug bietet er der Mannschaft einen geschützten Arbeitsbereich.'],
    kennzahlen: [['2', 'Achsen'], ['14,0 m', 'Länge'], ['16,5 t', 'Leergewicht'], ['24 t', 'Nutzlast laut Folie']],
    daten: { 'Bezeichnung': 'Xs', 'Bauart': 'gedeckter Bauzugwagen', 'Achsen': '2', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '14,0 m', 'Gewicht': '16,5 t leer, rechnerisch ca. 40,5 t beladen', 'Nutzlast': '24 t laut Folie', 'Zugänge': 'seitliche Türen', 'Eigener Fahrantrieb': 'nein', 'Status': 'Sammelbezeichnung, kein eindeutiger Fahrtyp 2026', 'Datenstand': '15.09.2022', 'Einsatz': 'Werkzeug und Werkstatt, Unterstützung der Mannschaft' },
    specOrder: ['Bezeichnung', 'Bauart', 'Achsen', 'Spurweite', 'Länge', 'Gewicht', 'Nutzlast', 'Zugänge', 'Eigener Fahrantrieb', 'Status', 'Datenstand', 'Einsatz'],
    specNote: '«Xs» ist eine breite Bauartbezeichnung. Ohne Fahrzeugnummer lässt sich der Wagen keinem eindeutigen aktuellen Fahrtyp zuordnen.',
    abschnitte: [
      { titel: 'Mannschaftsunterstützung', p: ['Der Wagen dient vor allem der Logistik und der Arbeit der Bauzugbesatzung. Er ist kein regulärer Personenwagen und darf nur gemäss seiner betrieblichen Zulassung genutzt werden.'] },
      { titel: 'Sicherung', p: ['Werkzeuge, Ersatzteile und lose Gegenstände müssen vor jeder Zugbewegung festgemacht sein. Die Seitentüren bleiben während der Fahrt geschlossen und verriegelt.'] }
    ],
    quellen: ['SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Folie Xs', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Verzeichnis und Erläuterung der Fahrtypen', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation 04.06.2025, PWFZ-Projekt, S. 20'],
    art: { typ: 'wagen', geschlossen: true, zweiachs: true, farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'kirow-mannschaftswagen', kat: 'infrastruktur', gruppe: 'Werkstatt- und Mannschaftswagen', name: 'Kirow-Mannschaftswagen', beiname: '', typ: 'Begleitwagen der Kirow-Kranverbände 250, 800 und 1200', vorlaeufig: false,
    text: ['Der Fahrtypenkatalog 2026 führt Kranverbände Kirow 250, 800 und 1200, jeweils mit einem Mannschaftswagen.', 'Der Begleitwagen unterstützt Personal, Werkzeug und Einsatzlogistik des Eisenbahnkrans. Die beiden KRC 800 der SBB wurden 2016–2019 ersetzt; ein Eintrag im Katalog belegt deshalb keinen aktuellen Bestand.'],
    kennzahlen: [['3', 'Krantypen mit Mannschaftswagen'], ['1', 'Mannschaftswagen je Verband'], ['80 km/h', 'Verbandsgeschwindigkeit'], ['3', 'Fahrtypen im Katalog 2026']],
    daten: { 'Fahrzeugrolle': 'Begleitwagen im Kranverband', 'Spurweite': 'Normalspur, 1435 mm', 'Höchstgeschwindigkeit': '80 km/h (ganzer Verband)', 'Eigener Fahrantrieb': 'nein', 'Einzelfahrdaten': 'nicht separat publiziert', 'Betreiber': 'SBB Infrastruktur', 'Fahrtypen': '5089–5091 (ganze Kranverbände)', 'Status': 'Fahrtypen aktiv im Katalog 2026; KRC 800 bei der SBB 2016–2019 ersetzt' },
    specOrder: ['Fahrzeugrolle', 'Spurweite', 'Höchstgeschwindigkeit', 'Eigener Fahrantrieb', 'Einzelfahrdaten', 'Betreiber', 'Fahrtypen', 'Status'],
    specNote: 'Die SBB veröffentlicht im Fahrtypenkatalog nur Gesamtwerte der untrennbaren Kranverbände, keine separaten Masse des Mannschaftswagens.',
    abschnitte: [
      { titel: 'Zuordnung zu den Kranverbänden', tabelle: { kopf: ['Kran', 'Formation', 'Verband Länge / Gewicht'], zeilen: [
        ['Kirow 250', '1 Schutz- und 1 Mannschaftswagen', '47 m / 169 t'],
        ['Kirow 800', '1 Schutz- und 1 Mannschaftswagen', '48 m / 203 t'],
        ['Kirow 1200', 'Schutz-, Gegenlast- und Mannschaftswagen', '63 m / 279 t']
      ] } },
      { titel: 'Funktion', p: ['Der Mannschaftswagen stellt dem Kranteam Material, Arbeitsmittel und einen Aufenthaltsraum bereit. Seine Ausrüstung ist auf den jeweiligen Kranverband abgestimmt.'] },
      { titel: 'Fester Verband', p: ['Für Trassenbestellung und Überführung wird die komplette Einheit betrachtet. Änderungen an Formation, Beladung oder Bremse dürfen nur nach den freigegebenen Betriebsunterlagen erfolgen.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtypen 5089–5091, S. 275–277', 'SBB Infrastruktur – Technischer Netzzugang, Rollmaterialdaten und Dienstfahrzeuge', 'RailBase – Katalogblätter Kirow 250, 800 und 1200, Quellenstand 17.10.2026'],
    art: { typ: 'wagen', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'pwfz', kat: 'infrastruktur', gruppe: 'Werkstatt- und Mannschaftswagen', name: 'PWFZ', beiname: 'Personal Werkstatt Fahrzeug', typ: 'Geplantes Personal- und Werkstattfahrzeug', vorlaeufig: false,
    text: ['Das Personal- und Werkstattfahrzeug PWFZ ist ein geplantes Flottenprojekt der SBB Infrastruktur.', 'Es soll ältere Xs-Werkstatt- und Mannschaftswagen durch eine einheitliche, moderne Serie ersetzen.'],
    kennzahlen: [['30', 'Fahrzeuge geplant'], ['2', 'erste Projektfahrzeuge'], ['28', 'weitere Serienfahrzeuge'], ['Juni 2025', 'Stand der Planung']],
    daten: { 'Projekt': 'FFM PWFZ', 'Langname': 'Personal Werkstatt Fahrzeug', 'Bestand': 'noch keine Serienflotte', 'Anzahl': '30 geplant (2 + 14 + 14)', 'Einsatz': 'Personal und Werkstatt', 'Vorgänger': 'Xs-Bauzugwagen', 'Technische Daten': 'noch nicht publiziert', 'Status': 'geplante Beschaffung', 'Betreiber': 'SBB Infrastruktur', 'Datenstand': '04.06.2025' },
    specOrder: ['Projekt', 'Langname', 'Bestand', 'Anzahl', 'Einsatz', 'Vorgänger', 'Technische Daten', 'Status', 'Betreiber', 'Datenstand'],
    specNote: 'Öffentlich zugängliche SBB-Unterlagen nennen Stückzahl und Staffelung, aber noch keine verbindlichen Masse oder Leistungsdaten.',
    abschnitte: [
      { titel: 'Ziel des Projekts', p: ['Eine einheitliche PWFZ-Serie soll Werkstatt, Materialtransport und Unterstützung des Personals in einem zeitgemässen Wagenkonzept bündeln.'] },
      { titel: 'Abgrenzung', p: ['Das PWFZ ist noch kein im Fahrtypenkatalog 2026 ausgewiesener Serienfahrtyp. Dieser Eintrag beschreibt den Projektstand und keine bereits zugelassene Fahrzeugserie.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, aktuelles Verzeichnis der Fahrtypen', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation 04.06.2025, S. 20', 'SBB Infrastruktur – Ausbildungspräsentation «Wagon de chantier», 15.09.2022, Xs 45 / Xs 48 / Xs'],
    art: { typ: 'wagen', geschlossen: true, farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  // ---------- Rangierfahrzeuge ----------
  { id: 'ee-922', kat: 'rangier', name: 'Ee 922', beiname: '', typ: 'Elektrische Rangierlok für Personenbahnhöfe', vorlaeufig: false,
    text: ['Die Ee 922 ist eine kompakte elektrische Rangierlokomotive von Stadler.', 'Die SBB beschaffte sie für das Bereitstellen von Personenzügen und das Beistellen zusätzlicher Wagen in grossen Bahnhöfen.'],
    kennzahlen: [['21', 'Lokomotiven bestellt'], ['750 kW', 'maximale Leistung'], ['45 t', 'Leermasse'], ['2009–2010', 'Auslieferung']],
    daten: { 'Hersteller': 'Stadler Winterthur', 'Achsfolge': 'Bo', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz und 25 kV 50 Hz', 'Länge': '8,8 m', 'Gewicht': '45 t leer', 'Leistung': '750 kW', 'Anfahrzugkraft': '120 kN', 'Höchstgeschwindigkeit': '40 km/h', 'Bedienung': 'Funkfernsteuerung', 'Anzahl': '21', 'In Betrieb seit': '2009', 'Einsatz': 'Rangierdienst Personenverkehr' },
    specOrder: ['Hersteller', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Bedienung', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    abschnitte: [
      { titel: 'Beschaffung', p: ['Die SBB bestellte die 21 Lokomotiven im Dezember 2007. Stadler übergab das erste Fahrzeug im Juli 2009; bis Ende 2010 sollten sieben grosse Bahnhöfe ausgerüstet sein.'] },
      { titel: 'Einsatzkonzept', p: ['Die Ee 922 ersetzte ältere Ee 3/3 im Personenverkehr. Ihre Zweifrequenzausrüstung erlaubt auch den Einsatz in Grenzbahnhöfen mit 25-kV-Fahrleitung.'] }
    ],
    quellen: ['Stadler – Übergabe der ersten Ee 922 und Bestellung von 21 Fahrzeugen, 2009', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Ee 922, S. 62'],
    art: { typ: 'rangier', farbe: RED, panto: true }, bilder: [
      { src: 'bilder/ee-922-c1.jpg', titel: 'Ee 922 011', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ee_922_(922_011_A_W).jpg' },
      { src: 'bilder/ee-922-c2.jpg', titel: 'Ee 922 012', foto: 'Albins', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CFF-Ee922-12.jpg' },
      { src: 'bilder/ee-922-c3.jpg', titel: 'Ee 922 021 in Brig', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ee_922_021_in_Brig_VS.jpg' },
      { src: 'bilder/ee-922-c4.jpg', titel: 'Ee 922 006 in Basel', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ee_922-006-2_at_Basle_210910.jpg' },
      { src: 'bilder/ee-922-c5.jpg', titel: 'Ee 922 002 in Romanshorn', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:I09_308_Bf_Romanshorn,_Ee_922_002.jpg' }
    ] },
  { id: 'eem-923', kat: 'rangier', name: 'Eem 923', beiname: 'Butler', typ: 'Zweikraft-Rangierlok von SBB Cargo', vorlaeufig: false,
    text: ['Die Eem 923 ist eine elektrische Kompaktlokomotive mit Diesel-Hilfsantrieb aus der Stadler-Plattform Butler.', 'SBB Cargo setzt sie im Rangier-, Zustell- und leichten Streckendienst ein; ohne Fahrleitung übernimmt der Hilfsdiesel die Energieversorgung.'],
    kennzahlen: [['30', 'Lokomotiven bestellt'], ['1500 kW', 'elektrische Leistung'], ['45 t', 'Leermasse'], ['2012–2013', 'Einführung der Flotte']],
    daten: { 'Hersteller': 'Stadler Winterthur', 'Plattform': 'Butler', 'Achsfolge': 'Bo', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '9,1 m', 'Gewicht': '45 t leer', 'Antrieb': 'elektrisch, mit Diesel-Hilfsantrieb für die letzte Meile', 'Leistung': '1500 kW elektrisch', 'Anfahrzugkraft': '150 kN', 'Höchstgeschwindigkeit': '120 km/h (FOS 2026), bei Einführung 100 km/h', 'Anzahl': '30', 'In Betrieb seit': '2012', 'Einsatz': 'SBB Cargo, Rangier- und Zustelldienst' },
    specOrder: ['Hersteller', 'Plattform', 'Achsfolge', 'Spurweite', 'Länge', 'Gewicht', 'Antrieb', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Die unterschiedliche Höchstgeschwindigkeit stammt aus zwei offiziellen Quellenständen: 100 km/h bei der Einführung und 120 km/h im Fahrtypenkatalog 2026.',
    abschnitte: [
      { titel: 'Beschaffung', p: ['SBB Cargo stellte die erste Lokomotive 2011 vor. Die Auslieferung begann Anfang 2012; ab 2013 sollten alle 30 bestellten Fahrzeuge im Einsatz stehen.'] },
      { titel: 'Betriebsarten', p: ['Unter Fahrleitung fährt die Lok elektrisch. Der Dieselmotor ermöglicht Zustellungen auf Anschlussgleisen ohne Fahrleitung, ohne dafür eine zweite Lok einzusetzen.'] }
    ],
    quellen: ['SBB und Stadler – Premiere der Eem 923 und 30 bestellte Lokomotiven, 2011', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Eem 923, S. 64', 'Stadler – Beginn der Auslieferung im Jahr 2012'],
    art: { typ: 'rangier', farbe: CRED, akzent: '#3A4047', panto: true }, bilder: [
      { src: 'bilder/eem-923-c1.jpg', titel: 'Eem 923 004 von SBB Cargo', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Cargo_Eem_923_004_(52927115332).jpg' },
      { src: 'bilder/eem-923-c2.jpg', titel: 'Eem 923 016', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Eem_923_(923_016_A_W).jpg' },
      { src: 'bilder/eem-923-c3.jpg', titel: 'Eem 923 030', foto: 'Albins', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Eem_923.030-5JPG.jpg' },
      { src: 'bilder/eem-923-c4.jpg', titel: 'Eem 923 «Le Jorat»', foto: 'Von.schweiz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Le_Jorat.jpg' },
      { src: 'bilder/eem-923-c5.jpg', titel: 'Eem 923 in Payerne', foto: 'Lhasarabat', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Payerne_SBB_Em_923.jpg' }
    ] },
  { id: 'bm-44', kat: 'rangier', name: 'Bm 4/4', beiname: '', typ: 'Schwere dieselelektrische Rangierlok (historisch)', vorlaeufig: false,
    nummern: [[18401, 18446]],
    text: ['Die Bm 4/4 war eine schwere dieselelektrische Rangierlokomotive der SBB.', 'Die 46 Maschinen ersetzten Dampflokomotiven im schweren Rangierdienst und konnten unabhängig von der Fahrleitung arbeiten.'],
    kennzahlen: [['46', 'Lokomotiven gebaut'], ['620 kW', 'Leistung im Fahrtypenkatalog'], ['75 km/h', 'Höchstgeschwindigkeit'], ['1960–1970', 'Baujahre']],
    daten: { 'Hersteller': 'SLM und SAAS', 'Achsfolge': 'Bo′Bo′', 'Fahrzeugnummern': '18401–18446', 'Antrieb': 'dieselelektrisch', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '13,15 m', 'Gewicht': '72 t leer', 'Leistung': '620 kW', 'Anfahrzugkraft': '216 kN', 'Höchstgeschwindigkeit': '75 km/h', 'Anzahl': '46', 'In Betrieb seit': '1960', 'Einsatz': 'schwerer Rangierdienst' },
    specOrder: ['Hersteller', 'Achsfolge', 'Fahrzeugnummern', 'Antrieb', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Diese Seite behandelt die reguläre Serie 18401–18446, nicht die davon getrennte Bm 4/4 II.',
    abschnitte: [
      { titel: 'Beschaffung und Aufgabe', p: ['Zwischen 1960 und 1970 entstanden 46 Lokomotiven. Sie übernahmen schwere Rangierarbeiten und ersetzten dabei die letzten für diese Aufgaben verwendeten Dampflokomotiven.'] },
      { titel: 'Historischer Status', p: ['Die Baureihe gehört zur älteren SBB-Diesellokgeneration. Ein Eintrag im Fahrtypenkatalog beschreibt den Fahrtyp für betriebliche Zwecke und belegt keinen aktuellen SBB-Flottenbestand.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Bm 4/4, S. 32', 'Schweizerische Sicherheitsuntersuchungsstelle – Sicherheitsbericht mit Baujahren und Stückzahl der Bm 4/4'],
    art: { typ: 'haube', farbe: CRED, mittig: true }, bilder: [
      { src: 'bilder/bm-44-c1.jpg', titel: 'Bm 4/4 18427', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2013_03_09_Bm_4_4_18427_2_ROK_0563.JPG' },
      { src: 'bilder/bm-44-c2.jpg', titel: 'Bm 4/4 18427 von vorne', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2013_03_09_Bm_4_4_18427_1_ROK_0549.jpg' },
      { src: 'bilder/bm-44-c3.jpg', titel: 'Bm 4/4 mit Tunnelrettungszug in Göschenen', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Bm_4-4_mit_Tunnelrettungszug_in_G%C3%B6schenen_UR_(2014).jpg' },
      { src: 'bilder/bm-44-c4.jpg', titel: 'Bm 4/4 18442', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Bm_4-4_Nr._18442.jpg' }
    ] },
  { id: 'tm-232', kat: 'rangier', name: 'Tm 232', beiname: 'Tm III und Tm IV', typ: 'Modernisierte Dieseltraktoren', vorlaeufig: false,
    nummern: [[232001, 232052], [232101, 232146], [232201, 232234]],
    text: ['Die Bezeichnung Tm 232 umfasst bei der SBB zwei unterschiedliche modernisierte Traktorbaureihen.', 'Technische Daten, Nummern und Baujahre gehören deshalb immer zur Unterserie Tm III oder Tm IV.'],
    kennzahlen: [['2', 'unterschiedliche Ursprungsbaureihen'], ['52', 'Tm III zu 232 001–052'], ['2003–2010', 'Zeitraum der Modernisierungen'], ['51', 'SBB-Infrastruktur-Bestand vor dem Ersatz 2019']],
    daten: { 'Unterserie ex Tm III': 'Tm 232 001–052', 'Unterserie ex Tm IV': 'Tm 232 101–146 und 201–234', 'Achsfolge': 'B', 'Antrieb': 'dieselhydraulisch', 'Spurweite': 'Normalspur, 1435 mm', 'Leistung': 'je nach Unterserie ca. 260–280 kW', 'Höchstgeschwindigkeit': 'je nach Serie 60–80 km/h', 'In Betrieb seit': '2003 (erste Modernisierungen)', 'Einsatz': 'leichter Rangier- und Baudienst', 'Nachfolger bei SBB Infrastruktur': 'Tm 234-4' },
    specOrder: ['Unterserie ex Tm III', 'Unterserie ex Tm IV', 'Achsfolge', 'Antrieb', 'Spurweite', 'Leistung', 'Höchstgeschwindigkeit', 'In Betrieb seit', 'Einsatz', 'Nachfolger bei SBB Infrastruktur'],
    specNote: 'Die Zahl 51 bezeichnet den 2019 genannten Bestand von SBB Infrastruktur vor dem Ersatz durch den Tm 234-4, nicht alle je gebauten Tm 232.',
    abschnitte: [
      { titel: 'Modernisierung', p: ['52 Tm III wurden als Tm 232 001–052 eingereiht. Weitere Fahrzeuge entstanden aus Tm IV; der erste Umbau dieser Gruppe erfolgte 2007.'] },
      { titel: 'Einsatz und Ablösung', p: ['SBB Cargo nutzte Tm 232 im leichten Zustelldienst. SBB Infrastruktur begann 2019, ihre 51 Baudiensttraktoren durch 35 neue Tm 234-4 zu ersetzen.'] }
    ],
    quellen: ['Baureihenübersicht – Abgrenzung der beiden Tm-232-Unterserien', 'SBB News – Ersatz von 51 Tm 232 bei SBB Infrastruktur, 2019', 'SBB Cargo – Tm 232 im leichten Rangierdienst'],
    art: { typ: 'rangier', farbe: ORA, panto: false, klein: true }, bilder: [
      { src: 'bilder/tm-232-c1.jpg', titel: 'Tm IV (Tm 232)', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Tm_IV_232.1_(9660_A_W).jpg' },
      { src: 'bilder/tm-232-c2.jpg', titel: 'Tm 232 211 von SBB Cargo', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Cargo_Tm_232_211.jpg' },
      { src: 'bilder/tm-232-c3.jpg', titel: 'Tm 232 115', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Rangierlok_Tm_232_115-6.jpg' },
      { src: 'bilder/tm-232-c4.jpg', titel: 'Tm 232 129 von SBB Cargo', foto: 'MPW57', lizenz: 'CC BY 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_232_129-7_1.jpg' },
      { src: 'bilder/tm-232-c5.jpg', titel: 'Tm IV 8792 in alter Lackierung', foto: 'Mef.ellingen', lizenz: 'CC BY 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:TM_IV_8792.JPG' }
    ] },
  { id: 'ee-33', kat: 'historisch', name: 'Ee 3/3', beiname: '', typ: 'Elektrische Rangierlok der klassischen SBB-Bauart (historisch)', vorlaeufig: false,
    text: ['Die Ee 3/3 war über Jahrzehnte die klassische elektrische Rangierlokomotive der SBB.', 'Zwischen 1928 und 1966 entstanden mehrere Serien, die trotz technischer Weiterentwicklung das Grundkonzept mit drei gekuppelten Achsen beibehielten.'],
    kennzahlen: [['136', 'Lokomotiven gebaut'], ['500 kW', 'neuere Ausführung'], ['50 km/h', 'neuere Ausführung'], ['1928–1966', 'Baujahre der Serie']],
    daten: { 'Hersteller': 'SLM mit BBC, MFO oder SAAS', 'Achsfolge': 'C', 'Stromsystem': '15 kV 16,7 Hz', 'Antrieb': 'elektrisch, Stangenantrieb', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '9,51 m (neuere Serie)', 'Gewicht': '45 t leer (neuere Serie)', 'Leistung': '500 kW (neuere Serie)', 'Anfahrzugkraft': '118 kN', 'Höchstgeschwindigkeit': 'je nach Serie, zuletzt 50 km/h', 'Anzahl': '136', 'In Betrieb seit': '1928', 'Einsatz': 'leichter und mittlerer Rangierdienst', 'Status': 'letzte SBB-Lok 2020 ausgemustert' },
    specOrder: ['Hersteller', 'Achsfolge', 'Stromsystem', 'Antrieb', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit', 'Einsatz', 'Status'],
    specNote: 'Leistung, Masse und Länge gelten für die im Fahrtypenkatalog 2026 beschriebene neuere Ausführung; ältere Serien weichen ab.',
    abschnitte: [
      { titel: 'Serien und Einsatz', p: ['Die SBB liess insgesamt 136 Ee 3/3 bauen. Die Lokomotiven rangierten Personen- und Güterwagen in Bahnhöfen und Depotanlagen.', 'Die letzte aktive Maschine der SBB wurde 2020 ausgemustert.'] },
      { titel: 'Abgrenzung', p: ['Zweifrequenz- und Viersystemvarianten tragen die Bezeichnungen Ee 3/3 II beziehungsweise Ee 3/3 IV und gehören technisch zu eigenen Unterbaureihen.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Ee 3/3, S. 60', 'Baureihenübersicht – Baujahre, Stückzahl und Serienabgrenzung'],
    art: { typ: 'rangier', farbe: '#3E5A3B', panto: true, achsen: 3 }, bilder: [
      { src: 'bilder/ee-33-c1.jpg', titel: 'Ee 3/3 16408', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ee_3-3_I_d_(16408_C_W).jpg' },
      { src: 'bilder/ee-33-c2.jpg', titel: 'Ee 3/3 16408 von der Seite', foto: 'Joachim Lutz', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ee_3-3_I_d_(16408_A_W).jpg' },
      { src: 'bilder/ee-33-c3.jpg', titel: 'Ee 3/3 16451', foto: 'Kequet', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ee_3-3_16451.jpg' },
      { src: 'bilder/ee-33-c4.jpg', titel: 'Ee 3/3 16404 in Gossau SG', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Elektr._Rangierlok_SBB_Ee_3-3_Nr._16404_in_Gossau_SG.jpg' },
      { src: 'bilder/ee-33-c5.jpg', titel: 'Ee 3/3 16383, gebaut 1942', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20170602Y043_16383%3DSLM3800-1942.JPG' }
    ] },

  // ---------- Dienst- und Spezialfahrzeuge ----------
  { id: 'lrz-18', kat: 'dienst', name: 'LRZ 18', beiname: 'Lösch- und Rettungszug', typ: 'Lösch- und Rettungszug der Generation 2018', vorlaeufig: false,
    text: ['Die Generation LRZ 18 umfasst sechs moderne, selbstfahrende Lösch- und Rettungszüge. Die SBB bestellte sie in zwei Losen zu je drei Garnituren; alle waren bis Ende 2018 ausgeliefert.', 'Je nach Standort besteht die Formation aus Tanklöschwagen, Gerätefahrzeug und einem oder zwei Rettungsfahrzeugen.'],
    kennzahlen: [['6', 'Garnituren'], ['2018', 'vollständige Ablieferung'], ['6 × 390 kW', 'Antrieb der vierteiligen Version'], ['100 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Hersteller': 'Windhoff / Dräger (Löschanlage Vogt)', 'Basisfahrzeug': 'Windhoff MPV', 'Ausführungen': '3- oder 4-teilig', 'Höchstgeschwindigkeit': '100 km/h', 'Länge': '83,22 m (vierteilig)', 'Gewicht': 'rund 326 t (vierteilig)', 'Leistung': '6 × 390 kW (vierteilig)', 'Wasser': '45 000 l', 'Pumpenleistung': 'bis 6000 l/min bei 10 bar', 'Rettungskapazität': 'bis 60 Personen je Rettungsfahrzeug', 'Schleppleistung': 'bis 1600 t im Tunnel', 'Autonomer Betrieb': 'ca. 4–5 Stunden', 'Zugsicherung': 'ETCS', 'Anzahl': '6 Garnituren (2 Lose zu je 3)', 'In Betrieb seit': '2018' },
    specOrder: ['Hersteller', 'Basisfahrzeug', 'Ausführungen', 'Höchstgeschwindigkeit', 'Länge', 'Gewicht', 'Leistung', 'Wasser', 'Pumpenleistung', 'Rettungskapazität', 'Schleppleistung', 'Autonomer Betrieb', 'Zugsicherung', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Länge, Masse und Leistung gelten für den vierteiligen LRZ 18; dreiteilige Züge sind entsprechend kürzer und leichter.',
    abschnitte: [
      { titel: 'Beschaffung in zwei Losen', p: ['Nach der ersten Bestellung von drei Zügen für Genf, Melide und Brig löste die SBB 2016 eine Option über drei weitere Garnituren für Zürich, Winterthur und Bern aus.', 'Damit umfasst die Generation sechs Züge; die Ablieferung war Ende 2018 abgeschlossen.'] },
      { titel: 'Tunnelrettung und Brandbekämpfung', p: ['Unabhängige Atemluft versorgt Führerstände und Rettungsräume. Jeder Rettungswagen nimmt in seinem geschützten Raum bis zu rund 60 Personen auf; der Zug kann im Tunnel bis zu 1600 Tonnen abschleppen.', 'Der Löschaufbau bietet 45 000 Liter Wasser und Pumpen bis 6000 Liter pro Minute.'] }
    ],
    quellen: ['SBB Infrastruktur – Übersicht Lösch- und Rettungszüge', 'SBB / Windhoff – Bestellung und Bestand von insgesamt sechs LRZ 18', 'Windhoff – Drei neue LRZ 18 für die SBB, 14. September 2016', 'Vogt Schweiz – Löschanlage LRZ 18, vierteilige Formation und technische Daten'],
    art: { typ: 'spezial', var: 'loesch', farbe: YEL, akzent: CRED }, bilder: [
      { src: 'bilder/lrz-18-c1.jpg', titel: 'LRZ 18 «Bern» bei Einigen', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_LRZ_18_%22Bern%22_(52557604099).jpg' },
      { src: 'bilder/lrz-18-c2.jpg', titel: 'LRZ 18 in Genève', foto: 'MHM55', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CFF-train_de_sauvetage_TES_18_(Gen%C3%A8ve)-01.jpg' },
      { src: 'bilder/lrz-18-c3.jpg', titel: 'Rettungsfahrzeug des LRZ 18 in Genève', foto: 'MHM55', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CFF-train_de_sauvetage_TES_18_(Gen%C3%A8ve)-02.jpg' },
      { src: 'bilder/lrz-18-c4.jpg', titel: 'LRZ 18 in Genève, Seitenansicht', foto: 'MHM55', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CFF-train_de_sauvetage_TES_18_(Gen%C3%A8ve)-05.jpg' },
      { src: 'bilder/lrz-18-c5.jpg', titel: 'Hilfsgerätefahrzeug Xtmas 99 85 9177 015 an der Innotrans 2018', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:J33_791_Windhoff_Xtmas_99_85_9177_015.jpg' }
    ] },
  { id: 'lrz-14', kat: 'dienst', name: 'LRZ 14', beiname: 'Lösch- und Rettungszug', typ: 'Vierteiliger Lösch- und Rettungszug für lange Tunnel', vorlaeufig: false,
    text: ['Der LRZ 14 ist eine leistungsfähigere vierteilige Weiterentwicklung für lange Bahntunnel. Er hat ein zweites Rettungsfahrzeug.', 'Zwei Garnituren wurden im Zusammenhang mit dem Ausbau des Interventionskonzepts für die Gotthardachse beschafft.'],
    kennzahlen: [['2', 'Garnituren'], ['2014–2016', 'Bau und Inbetriebnahme'], ['6 × 390 kW', 'installierte Antriebsleistung'], ['100 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Hersteller': 'Windhoff / Dräger', 'Formation': 'Tanklöschwagen + Gerätefahrzeug + 2 Rettungsfahrzeuge', 'Tanklöschwagen': '17,04 m / 90 t', 'Gerätefahrzeug': '22,06 m / 80 t', 'Rettungsfahrzeuge': 'je 22,06 m / 78 t', 'Gewicht': 'rund 326 t', 'Leistung': '6 × 390 kW', 'Höchstgeschwindigkeit': '100 km/h', 'Wasser': '45 000 l', 'Schaumextrakt': '1500 l', 'Atemluft': 'rund 1,98 Mio. l', 'Anhängelast': '940 t bei 27 ‰', 'Anzahl': '2 Garnituren', 'In Betrieb seit': '2014–2016', 'Einsatz': 'Gotthardachse und Tunnelnetz' },
    specOrder: ['Hersteller', 'Formation', 'Tanklöschwagen', 'Gerätefahrzeug', 'Rettungsfahrzeuge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Wasser', 'Schaumextrakt', 'Atemluft', 'Anhängelast', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Die Bezeichnung LRZ 14 benennt die Generation. Die Inbetriebnahme erfolgte gestaffelt bis zur Eröffnung des Gotthard-Basistunnels.',
    abschnitte: [
      { titel: 'Beschaffung', p: ['Die zwei Garnituren wurden ab 2012 beschafft und vor der Inbetriebnahme des Gotthard-Basistunnels einsatzbereit gemacht.'] },
      { titel: 'Zwei Rettungseinheiten', p: ['Jedes Rettungsfahrzeug bietet etwa 60 Personen Platz oder 40 Personen und sechs Liegen. Die druckgeschützten Räume, Schleusen und medizinischen Anschlüsse erlauben Evakuierungen aus verrauchten Tunnelabschnitten.'] },
      { titel: 'Leistungsprofil', p: ['Mit dem zweiten Rettungsfahrzeug bietet die vierteilige Formation mehr Rettungskapazität und mehr Atemluft als frühere Generationen. Mehrere angetriebene Fahrzeuge sorgen für hohe Zugkraft und Redundanz.'] }
    ],
    quellen: ['SBB Infrastruktur – Übersicht und Datenblatt LRZ 14', 'SBB – Faktenblatt Lösch- und Rettungszug 2014, technische Daten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrzeuggruppe LRZ'],
    art: { typ: 'spezial', var: 'loesch', farbe: YEL, akzent: CRED }, bilder: [
      { src: 'bilder/lrz-14-c1.jpg', titel: 'Neuer LRZ 14 beim Erhaltungs- und Interventionszentrum Erstfeld', foto: 'Kecko from Rural area, Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_-_EIZ_Erstfeld_(23518335636).jpg' },
      { src: 'bilder/lrz-14-c2.jpg', titel: 'LRZ 14 «Uri» im Bahnhof Erstfeld', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_L%C3%B6sch-_und_Rettunszug_LRZ-14_%22Uri%22_im_Bahnhof_Erstfeld_(2015).jpg' },
      { src: 'bilder/lrz-14-c3.jpg', titel: 'LRZ 14 «Uri» der Betriebswehr Erstfeld', foto: 'Valanagut', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Betriebswehr_SBB_Erstfeld_2.jpg' },
      { src: 'bilder/lrz-14-c4.jpg', titel: 'LRZ 14 in Erstfeld', foto: 'Valanagut', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Esrtsfeld2.jpg' }
    ] },
  { id: 'lrz-08', kat: 'dienst', name: 'LRZ 08', beiname: 'Lösch- und Rettungszug', typ: 'Lösch- und Rettungszug der Generation 2008', vorlaeufig: false,
    text: ['Die SBB beschaffte acht Lösch- und Rettungszüge der Generation LRZ 08 aus Tanklöschwagen, Gerätefahrzeug und Rettungsfahrzeug.', 'Sie wurden für schnelle Interventionen auf dem offenen Netz und in Tunneln ausgelegt.'],
    kennzahlen: [['8', 'Garnituren'], ['2008–2010', 'Ablieferung'], ['4 × 390 kW', 'installierte Antriebsleistung'], ['100 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Hersteller': 'Windhoff / Dräger', 'Formation': 'Tanklöschwagen + Gerätefahrzeug + Rettungsfahrzeug', 'Tanklöschwagen': '17,04 m / 90 t', 'Gerätefahrzeug': '22,06 m / 80 t', 'Rettungsfahrzeug': '22,06 m / 78 t', 'Gewicht': 'rund 248 t', 'Leistung': '4 × 390 kW', 'Höchstgeschwindigkeit': '100 km/h', 'Wasser': '48 000 l', 'Schaumextrakt': '1800 l', 'Atemluft': 'rund 1,44 Mio. l', 'Rettungsplätze': 'ca. 60, oder 40 + 9 Liegen', 'Anhängelast': '730 t bei 27 ‰', 'Anzahl': '8 Garnituren', 'In Betrieb seit': '2008–2010 (Ablieferung)' },
    specOrder: ['Hersteller', 'Formation', 'Tanklöschwagen', 'Gerätefahrzeug', 'Rettungsfahrzeug', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Wasser', 'Schaumextrakt', 'Atemluft', 'Rettungsplätze', 'Anhängelast', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Beschaffung', p: ['Die Generation wurde 2006 bestellt und von 2008 bis 2010 abgeliefert. Acht Garnituren ergänzten das Interventionsnetz der SBB.'] },
      { titel: 'Funktion', p: ['Tanklösch-, Geräte- und Rettungsfahrzeug arbeiten als Einheit. Je zwei 390-kW-Powerpacks im Geräte- und im Rettungsfahrzeug treiben den Zug an.', 'Der druckgeschützte Rettungsraum arbeitet unabhängig von der Aussenluft und erlaubt die Evakuierung von Personen aus verrauchten Bereichen.'] }
    ],
    quellen: ['SBB Infrastruktur – Übersicht und Datenblatt LRZ 08', 'SBB – Faktenblatt Lösch- und Rettungszug 2008, technische Daten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrzeuggruppe LRZ'],
    art: { typ: 'spezial', var: 'loesch', farbe: YEL, akzent: CRED }, bilder: [
      { src: 'bilder/lrz-08-c1.jpg', titel: 'LRZ 08 (TES 08 Olten) in Renens', foto: 'flybyeigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_CFF_FFS_LRZ_XTmas_008-4_(20525784048).jpg' },
      { src: 'bilder/lrz-08-c2.jpg', titel: 'Rettungsfahrzeug XTmas 99 85 9174 004 «Lausanne» in Bern', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:4_FFS_XTmas_99_85_9174_004-3_Bern_290317.jpg' },
      { src: 'bilder/lrz-08-c4.jpg', titel: 'XTmas 99 85 9174 008 «Olten» in Lausanne', foto: 'Akiry', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Gare_de_lausanne_-_novembre_2015.jpg' },
      { src: 'bilder/lrz-08-c5.jpg', titel: 'LRZ 08 in Winterthur', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_L%C3%B6sch-_und_Rettungszug_in_Winterthur-IMG_1070.jpg' }
    ] },
  { id: 'lrz-04', kat: 'dienst', name: 'LRZ 04', beiname: 'Lösch- und Rettungszug', typ: 'Lösch- und Rettungszug der Generation 2004', vorlaeufig: false,
    text: ['Der LRZ 04 war die erste neuere Generation des SBB-Lösch- und Rettungszuges und leitete den Wechsel vom lokbespannten zum selbstfahrenden Zug ein.', 'Die einzelne Garnitur verbindet Löschmittel, Rettungsraum und einen eigenen Antrieb für Einsätze auf Bahnstrecken und in Tunneln.'],
    kennzahlen: [['1', 'Garnitur dieser Generation'], ['2004', 'Inbetriebnahme'], ['4 × 315 kW', 'installierte Antriebsleistung'], ['100 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Hersteller': 'Windhoff / Dräger', 'Basisfahrzeug': 'Windhoff MPV', 'Formation': 'Tanklöschwagen + Gerätefahrzeug + Rettungsfahrzeug', 'Tanklöschwagen': '16,04 m / 90 t', 'Gerätefahrzeug': '21,06 m / 60 t', 'Rettungsfahrzeug': '21,06 m / 60 t', 'Gewicht': 'rund 210 t', 'Leistung': '4 × 315 kW', 'Höchstgeschwindigkeit': '100 km/h', 'Wasser': '52 000 l', 'Schaum': '1600 l + 100 l CAFS', 'Atemluft': 'rund 1,44 Mio. l', 'Anzahl': '1 Garnitur', 'In Betrieb seit': '2004', 'Einsatz': 'Löschen, Retten, Bergen' },
    specOrder: ['Hersteller', 'Basisfahrzeug', 'Formation', 'Tanklöschwagen', 'Gerätefahrzeug', 'Rettungsfahrzeug', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Wasser', 'Schaum', 'Atemluft', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Stückzahl und Jahr beziehen sich auf die eigenständige Generation LRZ 04. Spätere Generationen werden separat gezählt.',
    abschnitte: [
      { titel: 'Aufbau', p: ['Die Fahrzeuge tragen Wasser, Schaum, Rettungs- und Bergematerial. Geräte- und Rettungsfahrzeug haben je zwei Powerpacks; dadurch braucht der Zug keine separate Hilfslokomotive.', 'Der Rettungswagen besitzt einen geschützten, mit Atemluft versorgten Innenraum für Evakuierungen aus verrauchten Tunneln.'] },
      { titel: 'Einsatz', p: ['Der Zug dient Ereignissen auf dem Bahnnetz, besonders in längeren Tunneln und an schwer zugänglichen Streckenabschnitten.'] }
    ],
    quellen: ['SBB Infrastruktur – Übersicht Lösch- und Rettungszüge sowie Datenblätter', 'SBB – Faktenblatt Lösch- und Rettungszug 2004, technische Daten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrzeuggruppe LRZ'],
    art: { typ: 'spezial', var: 'loesch', farbe: YEL, akzent: CRED }, bilder: [
      { src: 'bilder/lrz-04-c1.jpg', titel: 'LRZ 04 in Brig, 2016', foto: 'flybyeigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_CFF_FFS_Infra_XTmas_(24745875640).jpg' },
      { src: 'bilder/lrz-04-c2.jpg', titel: 'LRZ 04 in Hohtenn', foto: 'Smiley.toerist', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Hohtenn_station_2014_1.jpg' },
      { src: 'bilder/lrz-04-c3.jpg', titel: 'LRZ 04 im Bahnhof Hohtenn', foto: 'Smiley.toerist', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Hohtenn_station_2014_2.jpg' }
    ] },
  { id: 'xrotm', kat: 'dienst', name: 'Schneeschleudern', beiname: 'Xrotm', typ: 'Spezialfahrzeuge für die Schneeräumung', vorlaeufig: false,
    text: ['SBB Infrastruktur verwendet mehrere Typen selbstfahrender Schneeschleudern.', 'Die Betriebsvorschrift unterscheidet vier Serien, die je nach Schneemenge, Strecke und Einsatzort unterschiedliche Aufgaben übernehmen.'],
    kennzahlen: [['4', 'Serien in der Vorschrift'], ['17', 'Fahrzeuge nach Nummernbereichen'], ['60–80 km/h', 'Vmax der grossen Typen'], ['95–115', 'betriebliche Fahrzeugnummern']],
    daten: { 'Betreiber': 'SBB Infrastruktur', 'Xrotm 4/4': 'Nr. 95–96, 2 Fahrzeuge, 80 km/h', 'Xrotm 2/3': 'Nr. 97, 1 Fahrzeug, 60 km/h', 'XTm': 'Nr. 102–109, 8 Fahrzeuge, 45 km/h (100 km/h geschleppt)', 'Xrotm ex Tm 232': 'Nr. 110–115, 6 Fahrzeuge, 80 km/h (90 km/h geschleppt)', 'Anzahl': '17 nach Nummernbereichen', 'Einsatz': 'Räumen von Schnee und Verwehungen' },
    specOrder: ['Betreiber', 'Xrotm 4/4', 'Xrotm 2/3', 'XTm', 'Xrotm ex Tm 232', 'Anzahl', 'Einsatz'],
    specNote: 'Die Anzahl ergibt sich aus den in der SBB-Betriebsvorschrift veröffentlichten Nummernbereichen und ist keine separat bestätigte Bestandsmeldung.',
    abschnitte: [
      { titel: 'Einsatz', p: ['Die grossen Xrotm 95, 96 und 97 werden bei starkem Schneefall eingesetzt, unter anderem auf der Gotthard-Panoramastrecke.', 'Die kleineren Xrotm 110–115 eignen sich für Bahnhöfe und weniger stark befahrene Strecken.'] },
      { titel: 'Betrieb', p: ['Schneeschleudern sind Spezialfahrzeuge mit rotierenden Räumaggregaten. Je nach Serie unterscheiden sich eigener Fahrantrieb, Räumleistung, Streckengeschwindigkeit und zulässige Schleppgeschwindigkeit.'] }
    ],
    quellen: ['SBB Infrastruktur – Betriebsvorschriften Verkehre Infrastruktur, Abschnitt 20-26 Schneeschleudern', 'SBB News – Schneeräumung und Einsatz der Typen Xrotm'],
    art: { typ: 'spezial', var: 'schnee', farbe: YEL, akzent: '#2E3338' }, bilder: [
      { src: 'bilder/xrotm-c1.jpg', titel: 'Schneeschleuder Xrotm in Erstfeld', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Xrotm_Schneeschleuder.jpg' },
      { src: 'bilder/xrotm-c2.jpg', titel: 'Schneeschleuder Xrotm Nr. 95 in Erstfeld', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Schneeschleuder_XRot_m_Nr._95_der_SBB.jpg' },
      { src: 'bilder/xrotm-c3.jpg', titel: 'Xrotm 95 im Bahnhof Erstfeld', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_Xrotm_95_Erstfeld_110616.jpg' },
      { src: 'bilder/xrotm-c4.jpg', titel: 'Fahrzeugnummer der Xrotm 95', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_Xrotm_95_Erstfeld_110616_numero.jpg' },
      { src: 'bilder/xrotm-c5.jpg', titel: 'Xrotm 4/4 95 in Erstfeld', foto: 'flybyeigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_CFF_FFS_Infra_Xrotm_99_85_94_91_095-7_(30717464463).jpg' }
    ] },
  { id: 'diagnose', kat: 'dienst', name: 'Diagnosefahrzeug', beiname: 'ROGER 1000', typ: 'Selbstfahrendes Diagnosefahrzeug Mermec Xtmass', vorlaeufig: false,
    text: ['Das selbstfahrende Diagnosefahrzeug Xtmass ROGER 1000 kontrolliert den Zustand der Bahninfrastruktur bei hoher Geschwindigkeit.', 'Messsysteme erfassen Gleis, Fahrleitung und weitere Anlagen, ohne den regulären Betrieb unnötig zu unterbrechen.'],
    kennzahlen: [['160 km/h', 'Höchstgeschwindigkeit'], ['672 kW', 'maximale Leistung'], ['64 t', 'Leermasse'], ['23,9 m', 'Fahrzeuglänge']],
    daten: { 'Hersteller': 'Mermec', 'Bezeichnung': 'Xtmass / ROGER 1000', 'Fahrzeugart': 'selbstfahrendes Diagnosefahrzeug', 'Betreiber': 'SBB Infrastruktur', 'Länge': '23,9 m', 'Gewicht': '64 t leer, höchstens 66 t', 'Leistung': '672 kW', 'Anfahrzugkraft': '71 kN', 'Höchstgeschwindigkeit': '160 km/h', 'Einsatz': 'Gleis- und Fahrleitungsmessung' },
    specOrder: ['Hersteller', 'Bezeichnung', 'Fahrzeugart', 'Betreiber', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Einsatz'],
    abschnitte: [
      { titel: 'Messaufgaben', p: ['ROGER 1000 vereint mehrere Mess- und Diagnosesysteme in einem Fahrzeug. Die hohe Geschwindigkeit ermöglicht Kontrollen auf Hauptstrecken mit geringer Beeinträchtigung des Fahrplans.'] },
      { titel: 'Einsatz über die Schweiz hinaus', p: ['Mermec dokumentiert einen Messeinsatz des SBB-Fahrzeugs auf einer deutschen Hochgeschwindigkeitsstrecke. Das zeigt die Eignung für Messfahrten auf leistungsfähigen Netzen.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp Xtmass 2/4, S. 59', 'Mermec – Produktübersicht ROGER 1000', 'Mermec – Messdienst der SBB auf einer DB-Hochgeschwindigkeitsstrecke'],
    art: { typ: 'spezial', var: 'mess', farbe: W1, akzent: YEL }, bilder: [
      { src: 'bilder/diagnose-c1.jpg', titel: 'Messtriebwagen XTmass 99 85 9160 001 von MerMec in Lausanne', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_XTmass_99_85_9_160_001-5_Lausanne_050809.jpg' },
      { src: 'bilder/diagnose-c2.jpg', titel: 'ROGER 1000 (XTmass 99 85 9160 001) in Lausanne, 2009', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_XTmass_99_85_9_160_001-5_Lausanne_050809_1.jpg' }
    ] },
  { id: 'kirow-krc-1100', kat: 'dienst', name: 'Kirow KRC 1100', beiname: 'Multi Tasker', typ: 'Schwerer Eisenbahndrehkran für Intervention und Bau', vorlaeufig: false,
    text: ['Der SBB-Kran der Kirow-1100er-Klasse gehört zur neuen Grosskrangeneration.', 'Er ersetzte zusammen mit dem Multi Tasker 1200 die beiden älteren KRC 800.'],
    kennzahlen: [['1', 'SBB-Kran dieser Klasse'], ['2019', 'Ersatzprogramm abgeschlossen'], ['125 t', 'maximale Tragfähigkeit'], ['16°', 'Schwenken bei freiem Nachbargleis']],
    daten: { 'Hersteller': 'Kirow Leipzig', 'Typ': 'Multi Tasker KRC 1100', 'Bauart': 'Eisenbahndrehkran', 'Maximale Tragfähigkeit': '125 t', 'Schwenkwinkel': 'bis 16° bei freiem Nachbargleis', 'Eigenmasse': '112 t Transportgewicht (Herstellerdatenblatt)', 'Transport': 'mit Schutzwagen, Gegengewicht darauf abgelegt', 'Netz': 'SBB-Normalspurnetz', 'Betreiber': 'SBB Infrastruktur', 'Vorgänger': 'einer der zwei KRC 800', 'Anzahl': '1', 'In Betrieb seit': '2019 (Ersatzprogramm 2016–2019)', 'Einsatz': 'Bergung, Hilfsbrücken, schwere Bauarbeiten' },
    specOrder: ['Hersteller', 'Typ', 'Bauart', 'Maximale Tragfähigkeit', 'Schwenkwinkel', 'Eigenmasse', 'Transport', 'Netz', 'Betreiber', 'Vorgänger', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: '125 t ist die maximale Tragfähigkeit und nicht die Masse des Krans. Die 112 t Transportgewicht stammen aus dem technischen Datenblatt des KRC 1100 von Kirow, nicht aus einer SBB-Unterlage.',
    abschnitte: [
      { titel: 'Beschaffung', p: ['Die SBB entschied sich im Dezember 2017 für den KRC 1100. Kirow beschreibt den Ersatz der zwei KRC 800 durch zwei neue Grosskrane zwischen 2016 und 2019; einer davon gehört zur 1100er-Klasse.'] },
      { titel: 'Arbeiten neben befahrenen Gleisen', p: ['Das angeschrägte Gegengewicht erlaubt laut Hersteller eine Drehung bis 16 Grad, während das Lichtraumprofil des Nachbargleises frei bleibt. In Transportstellung liegt das Gegengewicht auf einem Schutzwagen.'] },
      { titel: 'Leistungsangabe', p: ['Die maximale Tragfähigkeit gilt nur unter definierten Bedingungen. Die zulässige Last sinkt mit der Ausladung und hängt von Abstützung und Gleislage ab.'] }
    ],
    quellen: ['Kirow – Chronik 2019: Ersatz der SBB-KRC-800 durch 1100er und 1200er', 'Kirow – Kirow Chronicle 01/2018, «Neuer Eisenbahnkran für die Schweizer Bundesbahn», S. 15', 'Kirow – Technisches Datenblatt Multi Tasker KRC 1100'],
    art: { typ: 'spezial', var: 'kran', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'kirow-800', kat: 'dienst', name: 'Kirow KRC 800', beiname: 'Kirow 1', typ: 'Historische Schienenkrane der 1990er-Jahre', vorlaeufig: false,
    text: ['Die SBB erhielt 1996 zwei Kirow-Krane der Leistungsklasse KRC 800.', 'Sie dienten schweren Bergungs- und Bauarbeiten und wurden zwischen 2016 und 2019 durch neue Grosskrane ersetzt.'],
    kennzahlen: [['2', 'Krane geliefert'], ['1996', 'Ablieferung'], ['203 t', 'Masse der Kranformation'], ['80 km/h', 'Höchstgeschwindigkeit']],
    daten: { 'Hersteller': 'Kirow Leipzig', 'Typ': 'KRC 800', 'Formation': 'Kran mit Schutz- und Mannschaftswagen', 'Gewicht': 'rund 203 t (ganze Formation)', 'Länge': 'rund 48 m (ganze Formation)', 'Höchstgeschwindigkeit': '80 km/h', 'Eigener Fahrantrieb': 'nein', 'Anzahl': '2', 'In Betrieb seit': '1996', 'Ablösung': '2016–2019', 'Nachfolger': 'KRC 1100 und Multi Tasker 1200' },
    specOrder: ['Hersteller', 'Typ', 'Formation', 'Gewicht', 'Länge', 'Höchstgeschwindigkeit', 'Eigener Fahrantrieb', 'Anzahl', 'In Betrieb seit', 'Ablösung', 'Nachfolger'],
    abschnitte: [
      { titel: 'Einsatz', p: ['Die beiden Krane wurden für schwere Hebearbeiten bei Bauvorhaben und nach Ereignissen eingesetzt. Ihre Tragfähigkeit richtet sich nach Ausladung, Abstützung und Gleislage.', 'Für Fahrten wurden sie als Güterzugverband mit Schutz- und Mannschaftswagen überführt.'] },
      { titel: 'Ablösung', p: ['Kirow dokumentiert den Ersatz der beiden 1996 gelieferten Krane durch einen Multi Tasker 1200 und einen Kran der 1100er-Klasse zwischen 2016 und 2019.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5089, S. 275', 'Kirow – Chronik 2019: zwei KRC 800 von 1996 und deren Ersatz'],
    art: { typ: 'spezial', var: 'kran', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'kirow-250', kat: 'dienst', name: 'Kirow KRC 250', beiname: '', typ: 'Eisenbahndrehkran für mittelschwere Hebearbeiten', vorlaeufig: false,
    text: ['Der Kirow KRC 250 ist ein Eisenbahndrehkran für Bau- und Unterhaltsarbeiten.', 'Mindestens ein SBB-Kran dieses Typs ist spätestens 2005 belegt; eine genaue Gesamtstückzahl und ein Beschaffungsjahr sind öffentlich nicht verlässlich dokumentiert.'],
    kennzahlen: [['169 t', 'Masse der Kranformation'], ['47 m', 'Länge der Formation'], ['80 km/h', 'Höchstgeschwindigkeit'], ['2005', 'spätestens im SBB-Bestand']],
    daten: { 'Hersteller': 'Kirow Leipzig', 'Typ': 'KRC 250', 'Formation': 'Kran mit Schutz- bzw. Gegengewichtswagen und Mannschaftswagen', 'Gewicht': 'rund 169 t (ganze Formation)', 'Länge': 'rund 47 m (ganze Formation)', 'Höchstgeschwindigkeit': '80 km/h', 'Antrieb': 'hydraulischer Kranantrieb, kein eigener Fahrantrieb', 'Tragfähigkeit': 'ausladungsabhängig', 'Betreiber': 'SBB Infrastruktur', 'Anzahl': 'mindestens 1, Gesamtzahl nicht belegt', 'Im SBB-Bestand': 'spätestens 2005 (Fotobeleg)' },
    specOrder: ['Hersteller', 'Typ', 'Formation', 'Gewicht', 'Länge', 'Höchstgeschwindigkeit', 'Antrieb', 'Tragfähigkeit', 'Betreiber', 'Anzahl', 'Im SBB-Bestand'],
    specNote: 'Anzahl und Jahr sind bewusst nur als Mindeststand angegeben: Ein SBB-KRC-250 ist 2005 bildlich dokumentiert. Kranmasse und Traglast sind verschiedene Werte.',
    abschnitte: [
      { titel: 'Aufgabe', p: ['Der KRC 250 hebt Gleisjoche, Weichenbauteile und weitere schwere Lasten. Schutz- und Gegengewichtswagen gehören zur betrieblichen Formation; der Mannschaftswagen bietet Arbeits- und Aufenthaltsräume.'] },
      { titel: 'Datenlage', p: ['Der SBB-Fahrtypenkatalog belegt Bauart, Formation und Fahrdaten. Eine aktuelle Flottenzahl oder ein Beschaffungsjahr ist dort nicht ausgewiesen.', 'Ein Foto belegt mindestens einen SBB-KRC-250 im Jahr 2005. Mehr lässt sich aus öffentlichen Quellen derzeit nicht sicher sagen.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5090, S. 276', 'Kirow – Multi Tasker Produktbroschüre, Einsatzfelder von Eisenbahnkranen'],
    art: { typ: 'spezial', var: 'kran', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'kirow-krc-100', kat: 'dienst', name: 'Kirow KRC 100', beiname: 'Multi Tasker', typ: 'Kompakter Eisenbahndrehkran für Bau und Intervention', vorlaeufig: false,
    text: ['Der Kirow KRC 100 ist ein kompakter Eisenbahndrehkran der SBB. Zwölf Fahrzeuge wurden 2006 und 2007 geliefert.', 'Sein kleiner Heckradius und das feste Gegengewicht erlauben Arbeiten mit geringem Einfluss auf benachbarte Gleise.'],
    kennzahlen: [['12', 'Krane geliefert'], ['2006–2007', 'Ablieferung'], ['70 t', 'Dienstmasse des Krans'], ['120 km/h', 'zulässig geschleppt']],
    daten: { 'Hersteller': 'Kirow Leipzig', 'Typ': 'Multi Tasker KRC 100', 'Wagengattung': 'XTmaas', 'Fahrzeugnummern': '99 85 92 19 000–011', 'Länge': '11,0 m über Puffer', 'Gewicht': '70 t Dienstmasse', 'Tragfähigkeit': 'ausladungsabhängig, Höchstlast nicht belegt', 'Höchstgeschwindigkeit': '120 km/h geschleppt', 'Gegengewicht': 'fest', 'Betreiber': 'SBB Infrastruktur', 'Anzahl': '12', 'In Betrieb seit': '2006–2007 (Dez. 2006 bis Okt. 2007)', 'Einsatz': 'Gleisbau, Masten setzen, Intervention' },
    specOrder: ['Hersteller', 'Typ', 'Wagengattung', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Tragfähigkeit', 'Höchstgeschwindigkeit', 'Gegengewicht', 'Betreiber', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: 'Tragfähigkeiten von Eisenbahnkranen hängen stark von Ausladung, Abstützung und Gleislage ab.',
    abschnitte: [
      { titel: 'Beschaffung', p: ['Kirow lieferte zwölf KRC 100 zwischen Dezember 2006 und Oktober 2007. Die Serie wurde für dezentrale Bau- und Hilfseinsätze beschafft.'] },
      { titel: 'Einsatz', p: ['Der drehbare Oberwagen erlaubt Arbeiten seitlich und längs zum Gleis, etwa das Setzen von Masten oder Stahlschutzelementen.', 'Für Fahrten wird der Kran mit Schutz- und Begleitwagen als Arbeitszug eingesetzt; einen eigenen Fahrantrieb braucht er nicht.'] }
    ],
    quellen: ['Kirow – Referenz KRC 100 für die SBB, zwölf Lieferungen 2006–2007', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5010, S. 196', 'Kirow – Product Focus Multi Tasker 100'],
    art: { typ: 'spezial', var: 'kran', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'bendini', kat: 'dienst', name: 'Bendini', beiname: 'XTms', typ: 'Kompakter Kranwagen der 30-tm-Klasse', vorlaeufig: false,
    text: ['Der Bendini ist ein kompakter Kranwagen für mittlere und leichtere Hebeaufgaben im Unterhalt der Bahninfrastruktur.', 'Der SBB-Fahrtypenkatalog führt ihn als aktiven, antriebslosen XTms-Kranwagen.'],
    kennzahlen: [['30 tm', 'Kranklasse'], ['100 km/h', 'Transportgeschwindigkeit'], ['38 t', 'Fahrzeugmasse'], ['8,1 m', 'Fahrzeuglänge']],
    daten: { 'Hersteller': 'Bendini', 'Wagengattung': 'XTms', 'Basistyp': 'Baumaschine', 'Kranklasse': '30 tm', 'Länge': '8,1 m', 'Gewicht': '38 t', 'Höchstgeschwindigkeit': '100 km/h', 'Eigener Fahrantrieb': 'nein', 'Fahrzeugart': 'Güterwagen', 'Betreiber': 'SBB Infrastruktur', 'Anzahl': 'mehrere, Gesamtzahl nicht bestätigt', 'Fahrzeugnummern': 'Beispiele von XTm 91551 bis 91596', 'In Betrieb seit': '1980er-Jahre (Unterwagen 1984, 1985 und 1989 belegt)', 'Einsatz': 'Unterhalt und Montage', 'Katalogstatus 2026': 'aktiv' },
    specOrder: ['Hersteller', 'Wagengattung', 'Basistyp', 'Kranklasse', 'Länge', 'Gewicht', 'Höchstgeschwindigkeit', 'Eigener Fahrantrieb', 'Fahrzeugart', 'Betreiber', 'Anzahl', 'Fahrzeugnummern', 'In Betrieb seit', 'Einsatz', 'Katalogstatus 2026'],
    specNote: 'Die 30-tm-Angabe bezeichnet die im SBB-Katalog verwendete Kranklasse; sie ist nicht mit der Fahrzeugmasse von 38 t gleichzusetzen. Anzahl und Jahr sind bewusst nur als Mindeststand bzw. Zeitraum angegeben.',
    abschnitte: [
      { titel: 'Rolle in der Kranflotte', p: ['Mit nur 8,1 Metern Länge ist der Bendini deutlich kompakter als die schweren Kirow-Verbände.', 'Er eignet sich für lokale Montage- und Hebearbeiten, bei denen kein grosser Schwerkran nötig ist.'] },
      { titel: 'Geplante Ablösung', p: ['In der Beschaffungsplanung von SBB Infrastruktur erscheint ein Projekt für Krane mittlerer Lasten ausdrücklich als Ersatz des Bendini und weiterer älterer Krane.', 'Der Fahrtypenkatalog 2026 weist den Bendini dennoch weiterhin als aktiv aus.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5011, S. 197', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation vom 4. Juni 2025, S. 20', 'Rollmaterialverzeichnis Schweiz – SBB-Mutationen 1989 mit Ablieferungen der XTm-Kranwagen'],
    art: { typ: 'spezial', var: 'kran', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'fahrleitung', kat: 'dienst', name: 'Fahrleitungsfahrzeuge', beiname: 'Hubi, Krani, Combi 4A', typ: 'Dienstfahrzeuge für Bau und Unterhalt der Fahrleitung', vorlaeufig: false,
    text: ['Fahrleitungsfahrzeuge bringen Personal, Werkzeuge und Material direkt zur Fahrleitung.', 'SBB Infrastruktur verwendet dafür mehrere Serien und Ausführungen; öffentlich genannte Beispiele sind Hubi, Krani und Combi 4A.'],
    kennzahlen: [['mehrere', 'Serien und Ausführungen'], ['Hubi', 'Fahrzeugbeispiel'], ['Krani', 'Fahrzeugbeispiel'], ['Combi 4A', 'Fahrzeugbeispiel']],
    daten: { 'Betreiber': 'SBB Infrastruktur', 'Fahrzeuggruppe': 'Dienstfahrzeuge Fahrleitung', 'Arbeitsmittel': 'Hubarbeitsbühne', 'Weitere Ausrüstung': 'Kran und Materialplattform', 'Antrieb': 'je nach Serie', 'Höchstgeschwindigkeit': 'je nach Serie', 'Arbeitsort': 'Fahrleitung und Tragwerke', 'Öffentlich genannte Typen': 'Hubi, Krani, Combi 4A', 'Anzahl': 'nicht als Gesamtzahl veröffentlicht', 'Einsatz': 'Montage, Kontrolle und Reparatur' },
    specOrder: ['Betreiber', 'Fahrzeuggruppe', 'Arbeitsmittel', 'Weitere Ausrüstung', 'Antrieb', 'Höchstgeschwindigkeit', 'Arbeitsort', 'Öffentlich genannte Typen', 'Anzahl', 'Einsatz'],
    specNote: 'Fahrleitungsfahrzeug ist keine einzelne Baureihe. Technische Werte und Baujahre müssen einem konkreten Typ oder einer Fahrzeugnummer zugeordnet werden.',
    abschnitte: [
      { titel: 'Aufgaben', p: ['Die Fahrzeuge unterstützen Inspektion, Störungsbehebung und Erneuerung der Fahrleitung. Arbeitsbühnen ermöglichen den Zugang zum Fahrdraht; Krane heben Masten, Ausleger und Material.'] },
      { titel: 'Abgrenzung', p: ['Diese Seite beschreibt die Fahrzeuggruppe. Für ein technisches Einzelporträt braucht es die genaue Serienbezeichnung und Fahrzeugnummer, weil Leistung, Masse, Länge und Baujahr stark variieren.'] }
    ],
    quellen: ['SBB Infrastruktur – Qualitätsstandard Aus- und Weiterbildungen mit den Serienbeispielen Hubi, Krani und Combi 4A'],
    art: { typ: 'spezial', var: 'montage', farbe: YEL, akzent: '#2E3338' }, bilder: [
      { src: 'bilder/fahrleitung-c1.jpg', titel: 'Montagewagen des Combi XTmass 99 85 9236 051 bei Bad Ragaz', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_-_Catenary_Construction_Train_(49094462641).jpg' },
      { src: 'bilder/fahrleitung-c2.jpg', titel: 'Fahrleitungsbauzug Combi zwischen Bad Ragaz und Sargans, 2019', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_-_Catenary_Construction_Train_(49094652767).jpg' },
      { src: 'bilder/fahrleitung-c3.jpg', titel: 'Kranwagen «Krani 3» mit Hubbühne für den Fahrleitungsbau', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Krani_3_-_Catenary_Construction_(50286160263).jpg' }
    ] },
  // ---------- Historische Fahrzeuge (Katalogblatt folgt) ----------
  { id: 'h-ce68ii', kat: 'historisch', name: 'Ce 6/8 II', beiname: 'Krokodil', typ: 'Elektrische Güterzuglokomotive (historisch)',
    text: ['Das «Krokodil» ist die bekannteste Lokomotive der Schweiz. Die Güterzuglok mit Stangenantrieb fuhr vor allem am Gotthard.'],
    daten: { 'Hersteller': 'SLM (Mechanik) und MFO (Elektrik)', 'Achsfolge': '(1′C)(C1′)', 'Antrieb': 'elektrisch, Stangenantrieb', 'Anzahl': '33', 'In Betrieb seit': '1919', 'Einsatz': 'Güterzüge am Gotthard' },
    art: { typ: 'lok', form: 'kantig', farbe: '#5B4A2F', panto: true }, bilder: [
      { src: 'bilder/h-ce68ii-c1.jpg', titel: 'Krokodil Ce 6/8 II 14253 bei Rodi', foto: 'SchmalspurDVZO', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CE_6-8_14253_at_Rodi.jpg' },
      { src: 'bilder/h-ce68ii-c2.jpg', titel: 'Ce 6/8 II 14253 in Göschenen', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_Ce_6-8_II_14253_Goeschenen_221016.jpg' },
      { src: 'bilder/h-ce68ii-c3.jpg', titel: 'Ce 6/8 II 14253 mit Zug', foto: 'nzsteam', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ce_6_8_II_14253_2019-10-19_02.jpg' },
      { src: 'bilder/h-ce68ii-c4.jpg', titel: 'Ce 6/8 II 14282 in grüner Farbe', foto: 'Frank Nowotny', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ellok_14282_SBB.jpg' },
      { src: 'bilder/h-ce68ii-c5.jpg', titel: 'Ce 6/8 II 14253 in Erstfeld', foto: 'Kecko from Rural area, Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Erstfeld_-_Crocodile_Ce_6-8_II_14253_(24414633606).jpg' }
    ] },
  { id: 'h-ce68iii', kat: 'historisch', name: 'Ce 6/8 III', beiname: 'Krokodil', typ: 'Die jüngere Generation des Gotthard-Krokodils (historisch)', vorlaeufig: false,
    nummern: [[14301, 14318], [13301, 13318]],
    text: ['Die Ce 6/8 III ist die weiterentwickelte Bauart der berühmten Schweizer «Krokodil»-Lokomotive.', 'Ihre gegliederten Vorbauten und der Stangenantrieb machten sie zu einem unverwechselbaren Fahrzeug des schweren Güterverkehrs.'],
    kennzahlen: [['18', 'Lokomotiven'], ['1926', 'erste Inbetriebnahme'], ['75 km/h', 'nach Umbau'], ['131 t', 'Dienstmasse']],
    daten: { 'Hersteller': 'SLM, MFO', 'Achsfolge': '(1′C)(C1′)', 'Antrieb': 'Schrägstangen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '20,06 m', 'Gewicht': '131 t Dienstmasse', 'Leistung': '1810 kW Stundenleistung', 'Höchstgeschwindigkeit': '65 km/h, später 75 km/h', 'Nummern': '14301–14318, ab 1956 Be 6/8 III 13301–13318', 'Anzahl': '18', 'In Betrieb seit': '1926 (Baujahre 1926–1927)', 'Ausmusterung': 'Plandienst bis 1977', 'Einsatz': 'schwere Güterzüge' },
    specOrder: ['Hersteller', 'Achsfolge', 'Antrieb', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die Serie war für schwere Güterzüge am Gotthard, auf den Zufahrtslinien und im Flachland vorgesehen.', '1956 wurde die zulässige Höchstgeschwindigkeit auf 75 km/h erhöht; die Bezeichnung änderte sich zu Be 6/8 III. Der Plandienst endete 1977.'] },
      { titel: 'Erhaltung', p: ['Die Ce 6/8 III 14305 ist als historisches Fahrzeug erhalten. Sie steht beispielhaft für die weltbekannte Krokodil-Bauform der SBB.'] }
    ],
    quellen: ['Wikipedia – SBB Ce 6/8 III: Technik und Umzeichnung', 'SBB Archiv – Ce 6/8 III 14305: historisches Fahrzeugporträt'],
    art: { typ: 'lok', form: 'kantig', farbe: '#5B4A2F', panto: true }, bilder: [
      { src: 'bilder/h-ce68iii-c1.jpg', titel: 'Ce 6/8 III 14305', foto: 'nzsteam', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ce_6_8_III_14305_2019-10-19_01.jpg' },
      { src: 'bilder/h-ce68iii-c2.jpg', titel: 'Ce 6/8 III bei einer Fahrt von SBB Historic', foto: 'GoodRJ', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:CH_SBB_Historische_Fahrzeuge-2.jpg' },
      { src: 'bilder/h-ce68iii-c3.jpg', titel: 'Ce 6/8 III 14305 von der Seite', foto: 'nzsteam', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ce_6_8_III_14305_2019-10-19.jpg' },
      { src: 'bilder/h-ce68iii-c4.jpg', titel: 'Ce 6/8 III 14305 zu Besuch in Malmö (2015)', foto: 'Philaweb', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Crocodile_14305_in_Malm%C3%B6_2015.jpg' },
      { src: 'bilder/h-ce68iii-c5.jpg', titel: 'Fabrikschild der Ce 6/8 III 14305', foto: 'Joachim Seyferth', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Detailansicht_mit_Fabrikschild_der_Schweizer_SBB-Lokomotive_Ce_6-8_III_14305.jpg' }
    ] },
  { id: 'h-ae66', kat: 'historisch', name: 'Ae 6/6', beiname: 'Kantonslok', typ: 'Kantonslokomotive und Gotthard-Ikone (historisch)', vorlaeufig: false,
    nummern: [[11401, 11520]],
    text: ['Die Ae 6/6 war über Jahrzehnte das Kraftpaket der SBB am Gotthard.', 'Die ersten 25 Maschinen trugen Kantonswappen und Chromzierleisten; spätere Lokomotiven erhielten die Wappen von Schweizer Städten und Gemeinden.'],
    kennzahlen: [['120', 'Lokomotiven'], ['125 km/h', 'Höchstgeschwindigkeit'], ['1952', 'erste Inbetriebnahme'], ['4300 kW', 'Stundenleistung']],
    daten: { 'Hersteller': 'SLM, BBC, MFO', 'Achsfolge': 'Co′Co′', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '18,40 m', 'Gewicht': '120 t (Prototypen 124 t)', 'Leistung': 'rund 4300 kW Stundenleistung am Rad', 'Anfahrzugkraft': '392 kN', 'Höchstgeschwindigkeit': '125 km/h', 'Nummern': '11401–11520', 'Anzahl': '120', 'In Betrieb seit': '1952 (Serie 1955–1966)', 'Ausmusterung': '2002–2013', 'Einsatz': 'Gotthard, schwere Reise- und Güterzüge' },
    specOrder: ['Hersteller', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Zunächst prägte die Ae 6/6 den Schnell- und Güterverkehr am Gotthard. Mit moderneren Lokomotiven verlagerte sich ihr Einsatz zunehmend in den Güterverkehr und ins Mittelland.'] },
      { titel: 'Erhaltung', p: ['Mehrere Ae 6/6 blieben erhalten. Die Ae 6/6 11421 «Graubünden» gehört zum Bestand von SBB Historic und hält die Epoche der Kantonslokomotiven lebendig.'] }
    ],
    quellen: ['Wikipedia – SBB Ae 6/6: Technik, Wappen und Einsatzgeschichte', 'SBB Archiv – Ae 6/6 11421: historisches Fahrzeugporträt'],
    art: { typ: 'lok', form: 'kantig', achsen: 6, farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-ae66-c1.jpg', titel: 'Ae 6/6 11413 «Schaffhausen»', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:11413_%22Schauffenhausen%22_Ae_6_6_Electric_loco_1952.jpg' },
      { src: 'bilder/h-ae66-c2.jpg', titel: 'Ae 6/6 im Verkehrshaus Luzern', foto: 'Andrew Bossi', lizenz: 'CC BY-SA 2.5', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.5', quelle: 'https://commons.wikimedia.org/wiki/File:6247_-_Luzern_-_Verkehrshaus_-_SBB-CFF-FFS_Ae_6-6.JPG' },
      { src: 'bilder/h-ae66-c3.jpg', titel: 'Ae 6/6 in roter Farbe in Renens', foto: 'Milleuros', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ae_6-6_in_Renens_(front_view).JPG' },
      { src: 'bilder/h-ae66-c4.jpg', titel: 'Ae 6/6 von vorne', foto: 'Kabelleger / David Gubler', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Ae_6-6_Portrait.jpg' },
      { src: 'bilder/h-ae66-c5.jpg', titel: 'Ae 6/6 in Grün mit Chromstreifen', foto: 'Kabelleger / David Gubler', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Ae_6-6_gruen_mit_Chromstreifen.jpg' }
    ] },
  { id: 'h-ae47', kat: 'historisch', name: 'Ae 4/7', beiname: '', typ: 'Elektrische Lokomotive mit Buchli-Antrieb (historisch)',
    text: ['Die Ae 4/7 war jahrzehntelang eine der wichtigsten Streckenloks der SBB, erkennbar am einseitigen Buchli-Antrieb.'],
    daten: { 'Achsfolge': '2′Do1′', 'Antrieb': 'elektrisch, Buchli-Antrieb', 'Anzahl': '127', 'In Betrieb seit': '1927' },
    art: { typ: 'lok', form: 'kantig', farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-ae47-c1.jpg', titel: 'Ae 4/7 11026 in Brugg', foto: 'Olj6810', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:11026_in_Brugg.jpg' },
      { src: 'bilder/h-ae47-c2.jpg', titel: 'Ae 4/7 10997 in Mendrisio', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ae_4-7_10997_Mendrisio_240410.jpg' },
      { src: 'bilder/h-ae47-c3.jpg', titel: 'Ae 4/7 11026 in Bauma', foto: 'Abderitestatos', lizenz: 'CC BY 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:11026Ae47BaumaV.jpg' },
      { src: 'bilder/h-ae47-c4.jpg', titel: 'Ae 4/7 mit Güterzug', foto: 'Kabelleger / David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Ae4-7.jpg' },
      { src: 'bilder/h-ae47-c5.jpg', titel: 'Ae 4/7 bei Salgesch', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ae_4-7_Salgesch.jpg' }
    ] },
  { id: 'h-ae36i', kat: 'historisch', name: 'Ae 3/6 I', beiname: '', typ: 'Buchli-Lokomotive für das elektrifizierte Mittelland (historisch)', vorlaeufig: false,
    nummern: [[10601, 10714]],
    text: ['Die Ae 3/6 I war eine der wichtigsten frühen Elektrolokomotiven der SBB.', 'Der markante Buchli-Einzelachsantrieb und ihre lange Einsatzdauer machten die Serie zu einem Symbol der Elektrifizierung des Mittellands.'],
    kennzahlen: [['114', 'Lokomotiven'], ['110 km/h', 'spätere Höchstgeschwindigkeit'], ['1921', 'erste Inbetriebnahme'], ['73 Jahre', 'Einsatz bis 1994']],
    daten: { 'Hersteller': 'SLM, BBC, MFO, SAAS', 'Achsfolge': '2′Co1′', 'Antrieb': 'Buchli-Einzelachsantrieb', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '14,76 m', 'Gewicht': '92–96 t Dienstmasse', 'Leistung': '1470–1635 kW Stundenleistung', 'Höchstgeschwindigkeit': '100 / 110 km/h', 'Nummern': '10601–10714', 'Anzahl': '114', 'In Betrieb seit': '1921 (Baujahre 1920–1929)', 'Ausmusterung': 'bis 1994', 'Einsatz': 'Personen-, Schnell- und Güterzüge' },
    specOrder: ['Hersteller', 'Achsfolge', 'Antrieb', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die grosse Serie wurde in mehreren Baulosen beschafft und im Personen-, Schnell- und Güterverkehr eingesetzt. Verbesserungen während der Bauzeit führten zu Unterschieden bei Leistung und Geschwindigkeit innerhalb der Flotte.'] },
      { titel: 'Bedeutung und Erhaltung', p: ['Mit Einsätzen von 1921 bis 1994 zählt die Ae 3/6 I zu den langlebigsten SBB-Lokomotivserien. Mehrere Lokomotiven blieben als Museums- und Vereinsfahrzeuge erhalten, darunter die 10700 im Umfeld von SBB Historic.'] }
    ],
    quellen: ['Wikipedia – SBB Ae 3/6 I: Technik, Baulose und Einsatz', 'SBB Archiv – Ae 3/6 I 10700: historisches Fahrzeugporträt'],
    art: { typ: 'lok', form: 'kantig', farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-ae36i-c1.jpg', titel: 'Ae 3/6 I 10700', foto: 'Mrangel44', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ae_3-6_I_10700.jpg' },
      { src: 'bilder/h-ae36i-c2.jpg', titel: 'Ae 3/6 I mit Buchli-Antrieb', foto: 'David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Ae_3-6-I_buchli.jpg' },
      { src: 'bilder/h-ae36i-c3.jpg', titel: 'Ae 3/6 I 10650 in Brugg (2012)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:E-Lok_SBB_Ae_3-6_I_Nr._10650_(Brugg,_2012).jpg' },
      { src: 'bilder/h-ae36i-c4.jpg', titel: 'Ae 3/6 I 10712 in Biel/Bienne (1988)', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:05.08.88_Biel_Bienne_SBB_Ae_3_6%C2%B9_10712_(54325862482).jpg' },
      { src: 'bilder/h-ae36i-c5.jpg', titel: 'Ae 3/6 I 10638', foto: 'Unknown authorUnknown author', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ae_3-6_I_10638.jpg' }
    ] },
  { id: 'h-ae814', kat: 'historisch', name: 'Ae 8/14', beiname: 'Landi-Lok', typ: 'Drei einzigartige Doppellokomotiven für den Gotthard (historisch)', vorlaeufig: false,
    nummern: [[11801, 11801], [11851, 11852]],
    text: ['Die Bezeichnung Ae 8/14 umfasst drei einzeln entwickelte Doppellokomotiven.', 'Sie sollten schwere Gotthardzüge ohne Vorspann- oder Schiebelokomotive befördern und galten bei ihrer Entstehung als aussergewöhnlich leistungsfähig.'],
    kennzahlen: [['3', 'Prototypen'], ['1931', 'erste Inbetriebnahme'], ['bis 110 km/h', 'Höchstgeschwindigkeit'], ['8162 kW', 'maximale Stundenleistung']],
    daten: { 'Hersteller': 'SLM, BBC bzw. MFO', 'Achsfolge': 'je nach Lokomotive verschieden', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': 'rund 34 m', 'Gewicht': '235,7–246 t Dienstmasse', 'Leistung': '5514–8162 kW Stundenleistung', 'Höchstgeschwindigkeit': '100 / 100 / 110 km/h', 'Nummern': '11801, 11851, 11852', 'Anzahl': '3', 'In Betrieb seit': '1931 (Baujahre 1931, 1932, 1938/40)', 'Einsatz': 'schwere Gotthardzüge' },
    specOrder: ['Hersteller', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    abschnitte: [
      { titel: 'Drei unterschiedliche Einzelstücke', p: ['Die 11801, 11851 und 11852 unterschieden sich in Antrieb, Leistung und Aufbau.', 'Die 11852 entstand zur Landesausstellung 1939 und wurde als «Landi-Lok» bekannt. Mit über 8 MW war sie lange die leistungsstärkste Lokomotive der Welt.'] },
      { titel: 'Erhaltung', p: ['Die Ae 8/14 11852 ist bei SBB Historic in Erstfeld erhalten. Sie ist derzeit nicht betriebsfähig, kann aber als historisches Schlüsselstück besichtigt werden.'] }
    ],
    quellen: ['Wikipedia – SBB Ae 8/14: drei Prototypen und technische Varianten', 'SBB Archiv – Ae 8/14 11852: Porträt der Landi-Lok'],
    art: { typ: 'lok', form: 'kantig', achsen: 6, farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-ae814-c1.jpg', titel: 'Ae 8/14 11801 in Biasca', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:11_FFS_Ae_8-14_11801_Biasca_170417.jpg' },
      { src: 'bilder/h-ae814-c2.jpg', titel: 'Ae 8/14 11852 «Landi-Lok» im Verkehrshaus', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:C2.06a_Lokomotive_Ae_8-14_11852.jpg' },
      { src: 'bilder/h-ae814-c3.jpg', titel: 'Fabrikneue Ae 8/14 11851 auf der Kerstelenbachbrücke, 1932', foto: 'Unknown authorUnknown author', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Fabrikneue_SBB_Ae_8_14_11851_auf_der_Kerstelenbachbr%C3%BCcke,_1932.jpg' },
      { src: 'bilder/h-ae814-c4.jpg', titel: 'Ae 8/14 11801 bei einer Sonderfahrt', foto: 'Peter Alder', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ae_8_14_11801_Rail_Top.jpg' },
      { src: 'bilder/h-ae814-c5.jpg', titel: 'Ae 8/14 11801 in Bellinzona', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ae_8-14_Nr._11801_in_Bellinzona.jpg' }
    ] },
  { id: 'h-be46', kat: 'historisch', name: 'Be 4/6', beiname: 'Rehbock', typ: 'Frühe elektrische Gotthardlokomotive (historisch)', vorlaeufig: false,
    nummern: [[12303, 12342]],
    text: ['Die Be 4/6 gehörte zur ersten Generation elektrischer Gotthardlokomotiven.', 'Wegen ihrer markanten Bauform erhielt sie den Übernamen «Rehbock» und führte zunächst schwere Schnellzüge auf der Bergstrecke.'],
    kennzahlen: [['40', 'Lokomotiven'], ['75 km/h', 'Höchstgeschwindigkeit'], ['1920', 'erste Inbetriebnahme'], ['107–110 t', 'Dienstmasse']],
    daten: { 'Hersteller': 'SLM, BBC', 'Achsfolge': '6 Achsen, davon 4 Triebachsen und 2 Laufachsen; Stangenantrieb', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '16,50 m', 'Gewicht': '107–110 t Dienstmasse', 'Leistung': 'bis 1500 kW Stundenleistung', 'Höchstgeschwindigkeit': '75 km/h', 'Nummern': '12303–12342', 'Anzahl': '40', 'In Betrieb seit': '1920 (Baujahre 1920–1923)', 'Ausmusterung': 'bis 1976', 'Einsatz': 'Schnell- und Güterzüge' },
    specOrder: ['Hersteller', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die SBB bestellte die Serie für den elektrischen Betrieb am Gotthard. Mit zunehmender Zugmasse wurden die Maschinen von stärkeren Bauarten verdrängt und später im Mittelland und in untergeordneten Diensten eingesetzt.'] },
      { titel: 'Erhaltung', p: ['Die Be 4/6 12320 gehört zum historischen Fahrzeugbestand. Sie erinnert an die Pionierzeit der elektrischen Zugförderung auf der Gotthardbahn.'] }
    ],
    quellen: ['Wikipedia – SBB Be 4/6: technische Daten und Geschichte', 'SBB Archiv – Be 4/6 12320: historisches Fahrzeugporträt'],
    art: { typ: 'lok', form: 'kantig', farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-be46-c1.jpg', titel: 'Be 4/6 12320 neben dem RAe TEE II 1053', foto: 'Fabien Perissinotto', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Be_4-6_12320_and_RAe_TEE_II_1053.JPG' },
      { src: 'bilder/h-be46-c2.jpg', titel: 'Be 4/6 von SBB Historic zwischen Rämismühle-Zell und Rikon', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Historic_Be_4-6_zwischen_R%C3%A4mism%C3%BChle-Zell_und_Rikon.jpg' },
      { src: 'bilder/h-be46-c3.jpg', titel: 'Be 4/6 12320', foto: 'St.Hinni', lizenz: 'CC BY 2.5', lizenzUrl: 'https://creativecommons.org/licenses/by/2.5', quelle: 'https://commons.wikimedia.org/wiki/File:SBB-Be4-6-12320a.jpg' },
      { src: 'bilder/h-be46-c4.jpg', titel: 'Be 4/6 bei Rämismühle', foto: 'SchmalspurDVZO', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Be_4-6_Rehbock_R%C3%A4mism%C3%BChle.jpg' },
      { src: 'bilder/h-be46-c5.jpg', titel: 'Be 4/6 12339', foto: 'Davide Oliva', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Be_4_6_12339.jpg' }
    ] },
  { id: 'h-re44i', kat: 'historisch', name: 'Re 4/4 I', beiname: '', typ: 'Leichte Schnellzuglokomotive der Nachkriegszeit (historisch)', vorlaeufig: false,
    nummern: [[10001, 10050]],
    text: ['Die Re 4/4 I war die erste Drehgestelllokomotive der SBB.', 'Sie war auf schnelle, leichte Züge abgestimmt und prägte zusammen mit den Leichtstahlwagen den hochwertigen Verkehr im Mittelland.'],
    kennzahlen: [['50', 'Lokomotiven'], ['125 km/h', 'Höchstgeschwindigkeit'], ['1946', 'erste Inbetriebnahme'], ['57 t', 'Dienstmasse']],
    daten: { 'Hersteller': 'SLM, BBC, MFO, SAAS', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '14,7 / 14,9 m (je Serie)', 'Gewicht': '57 t Dienstmasse', 'Leistung': '1850 / 1900 kW Stundenleistung', 'Anfahrzugkraft': '135 kN', 'Höchstgeschwindigkeit': '125 km/h', 'Nummern': '10001–10050 (früher 401–450)', 'Anzahl': '50', 'In Betrieb seit': '1946 (Baujahre 1946–1951)', 'Ausmusterung': '1996–1998', 'Einsatz': 'Schnell- und Pendelzüge, später Regionalzüge' },
    specOrder: ['Hersteller', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die Lokomotiven entstanden in zwei Serien. Ihr geringes Gewicht, die gute Laufruhe und 125 km/h Höchstgeschwindigkeit machten sie ideal für Schnell- und Pendlerzüge.', 'Später wechselten sie in Regional- und Verstärkungsdienste.'] },
      { titel: 'Erhaltung', p: ['Die planmässige Ausmusterung erfolgte 1996 bis 1998. Die Re 4/4 I 10001 ist als historische Lokomotive bei SBB Historic erhalten.'] }
    ],
    quellen: ['Wikipedia – SBB Re 4/4 I: Serien, Technik und Einsatz', 'SBB Archiv – Re 4/4 I 10001: historisches Fahrzeugporträt'],
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-re44i-c1.jpg', titel: 'Re 4/4 I 10029 in Stein am Rhein (1991)', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:10.02.91_Stein_am_Rhein_SBB_Re4_4%C2%B9_10029_(5943276027).jpg' },
      { src: 'bilder/h-re44i-c2.jpg', titel: 'Re 4/4 I 10019', foto: 'MPW57 at de.wikipedia', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:4_I_10019.jpg' },
      { src: 'bilder/h-re44i-c3.jpg', titel: 'Re 4/4 I (als Re 410 009) bei Zürich, 2015', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Classic_Rail_Re_410_009_bei_Z%C3%BCrich_(2015).jpg' },
      { src: 'bilder/h-re44i-c4.jpg', titel: 'Re 4/4 I 10019 in Basel Badischer Bahnhof', foto: 'Fabien Perissinotto', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CBB_Re_4-4_I_10019_-_Basel_Badischer_Bahnhof,_27th_May_2012.JPG' },
      { src: 'bilder/h-re44i-c5.jpg', titel: 'Re 4/4 I 10032 in České Velenice', foto: 'Bernhard Graf ÖMT', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2023-05-28_Cesk%C3%A9_Velenice_SBB_Re_4%274_10032.jpg' }
    ] },
  { id: 'h-tee', kat: 'historisch', name: 'RAe TEE II', beiname: 'Gottardo', typ: 'Vierstrom-Triebzug für den internationalen Spitzenverkehr (historisch)', vorlaeufig: false,
    text: ['Der RAe TEE II verband die Schweiz ohne Lokwechsel mit Deutschland, Frankreich, Italien und den Niederlanden.', 'Seine Vierstromtechnik machte ihn zu einem der technisch anspruchsvollsten europäischen Triebzüge seiner Zeit.'],
    kennzahlen: [['5', 'Triebzüge'], ['140 km/h', 'im Betrieb · technisch 160 km/h'], ['1961', 'erste Inbetriebnahme'], ['4', 'Stromsysteme']],
    daten: { 'Hersteller': 'SIG, MFO', 'Zugbildung': 'sechsteilig (erhaltener Zustand; die ersten vier Züge waren ursprünglich fünfteilig)', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV und 25 kV AC, 1,5 kV und 3 kV DC', 'Länge': '149,76 m', 'Gewicht': 'ca. 309 t Dienstmasse', 'Leistung': 'ca. 2310 kW', 'Höchstgeschwindigkeit': '140 km/h betrieblich, 160 km/h technisch', 'Nummern': '1051–1055', 'Anzahl': '5', 'In Betrieb seit': '1961 (fünfter Zug 1967)', 'Einsatz': 'Trans-Europ-Express, später EuroCity' },
    specOrder: ['Hersteller', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Vier Einheiten wurden 1961 fünfteilig abgeliefert und später um einen Zwischenwagen verlängert; der fünfte Zug folgte 1967. Die eleganten Triebzüge liefen unter anderem als TEE Gottardo, Cisalpin, Edelweiss und Roland.', 'Ab 1988 fuhren sie als graue RABe EC im EuroCity-Verkehr.'] },
      { titel: 'Erhaltung', p: ['Der Zug RAe TEE II 1053 blieb erhalten. SBB Historic versetzte ihn wieder in den rot-beigen TEE-Zustand; seit 2003 fährt er bei historischen Sonderfahrten.'] }
    ],
    quellen: ['Wikipedia – SBB RAe TEE II: Bau, Technik und Einsatzgeschichte', 'SBB Archiv – RAe TEE II 1053: historisches Fahrzeugporträt'],
    art: { typ: 'triebzug', nase: 'lang', farbe: '#C9C2B0', akzent: '#7A1F1F', tuer: '#7A1F1F', panto: true }, bilder: [
      { src: 'bilder/h-tee-c1.jpg', titel: 'RAe TEE II am Bahnsteig', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2007_0606_125GOT_SBB_00043.jpg' },
      { src: 'bilder/h-tee-c2.jpg', titel: 'RAe TEE II in Zürich HB, 1963', foto: 'Heinz Baumann', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_Com_C12-127-001-003_FFS_RAe_TEE_II_Zuerich_HB_1963.jpg' },
      { src: 'bilder/h-tee-c3.jpg', titel: 'Front des RAe TEE II', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2007_0606_125GOT_SBB_00115.jpg' },
      { src: 'bilder/h-tee-c4.jpg', titel: 'RAe TEE II unterwegs', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2007_0606_125GOT_SBB_00089.jpg' },
      { src: 'bilder/h-tee-c5.jpg', titel: 'RAe TEE II in Zürich HB, 1963', foto: 'Heinz Baumann', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_Com_C12-127-001-006_FFS_RAe_TEE_II_Zuerich_HB_1963.jpg' }
    ] },
  { id: 'h-roterpfeil', kat: 'historisch', name: 'RCe 2/4', beiname: 'Roter Pfeil', typ: 'Elektrischer Leichttriebwagen für Ausflugs- und Schnellfahrten (historisch)', vorlaeufig: false,
    text: ['Die sieben elektrischen Roten Pfeile wurden zwischen 1935 und 1938 als CLe 2/4 geliefert und später mehrmals umgezeichnet.', 'Ihre rote Stromlinienform machte sie zu einem der bekanntesten Symbole der modernen SBB der 1930er-Jahre.'],
    kennzahlen: [['7', 'elektrische Grundfahrzeuge'], ['125 km/h', 'Höchstgeschwindigkeit'], ['1935', 'erste Inbetriebnahme'], ['70', 'Sitzplätze']],
    daten: { 'Hersteller': 'SLM, MFO, BBC, SAAS', 'Achsfolge': 'Bo′2′', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz AC', 'Länge': '22,40 m', 'Gewicht': 'ca. 38 t Dienstmasse', 'Leistung': '404 kW Stundenleistung, 315 kW Dauerleistung', 'Höchstgeschwindigkeit': '125 km/h', 'Sitzplätze': '70', 'Nummern': '201–207, später 601–607', 'Anzahl': '7', 'In Betrieb seit': '1935', 'Spätere Bezeichnung': 'RBe 2/4', 'Ausmusterung': '1967–1984', 'Einsatz': 'Ausflugs- und Gesellschaftsfahrten, schnelle Sonderleistungen' },
    specOrder: ['Hersteller', 'Achsfolge', 'Spurweite', 'Stromsystem', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Spätere Bezeichnung', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Bezeichnungen und Umbauten', p: ['Geliefert wurden die Wagen 201 und 202 im Jahr 1935, 203–206 im Jahr 1936 und 207 im Jahr 1938. Später trugen sie unter anderem die Bezeichnung RCe 2/4. Die Wagen 201 und 206 wurden 1952 und 1953 verlängert und für die 1. Klasse umgebaut (RAe 2/4); andere trugen zuletzt die Bezeichnung RBe 2/4.', 'Deshalb unterscheiden sich Bestandsangaben je nach Bezeichnung und Zeitspanne.'] },
      { titel: 'Einsatz und Bedeutung', p: ['Die Roten Pfeile dienten Ausflugsfahrten, Gesellschaftsreisen und schnellen Sonderleistungen. Ihr geringes Gewicht und die aerodynamische Form verkörperten den technischen Aufbruch der Zwischenkriegszeit.'] }
    ],
    quellen: ['Wikipedia – SBB CLe 2/4 und RCe 2/4: Bau, Umbauten und technische Daten', 'SBB Historic – Fahrzeugsammlung und historische Rote Pfeile'],
    art: { typ: 'triebzug', nase: 'lang', farbe: RED, akzent: '#F3F4F2', tuer: '#8E1A1F', panto: true }, bilder: [
      { src: 'bilder/h-roterpfeil-c2.jpg', titel: 'Roter Pfeil RCe 2/4 203', foto: 'Martin Sauter', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_RCe_2-4_203_Roter_Pfeil_02.jpg' }
    ] },
  { id: 'h-a35', kat: 'historisch', name: 'A 3/5', beiname: '', typ: 'Schnellzug-Dampflokomotive der Serie 701–809 (historisch)', vorlaeufig: false,
    text: ['Die Bezeichnung A 3/5 wurde bei der SBB für mehrere Bauarten verwendet.', 'Diese Seite behandelt die bekannte JS/SBB-Serie 701–809, zu der auch die erhaltene A 3/5 705 gehört.'],
    kennzahlen: [['109', 'Lokomotiven der Serie'], ['100 km/h', 'Höchstgeschwindigkeit'], ['1902', 'erste Inbetriebnahme'], ['920 kW', 'indizierte Leistung']],
    daten: { 'Hersteller': 'SLM Winterthur', 'Bauart': '2′C n4v / 2′C h4v', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '18,60 m mit Tender', 'Gewicht': '106–107 t Dienstmasse mit Tender', 'Leistung': '920 kW (indiziert)', 'Anfahrzugkraft': 'ca. 75 kN', 'Höchstgeschwindigkeit': '100 km/h', 'Nummern': '701–809', 'Anzahl': '109', 'In Betrieb seit': '1902 (Baujahre 1902–1909)', 'Ausmusterung': '1926–1964', 'Einsatz': 'Schnellzüge' },
    specOrder: ['Hersteller', 'Bauart', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die Lokomotiven wurden noch von der Jura-Simplon-Bahn bestellt und von der SBB übernommen. 68 Maschinen erhielten Heissdampftechnik.', 'Sie führten hochwertige Schnellzüge, bis stärkere und später elektrische Lokomotiven sie verdrängten.'] },
      { titel: 'Erhaltung', p: ['Die A 3/5 705 blieb betriebsfähig erhalten. Sie wird von der Dampfgruppe Zürich betreut und vertritt den Schnellzugdampf der frühen SBB-Zeit.'] }
    ],
    quellen: ['Wikipedia – JS A 3/5: Serie 701–809 und technische Daten', 'Dampfgruppe Zürich – A 3/5 705: Geschichte der erhaltenen Lokomotive'],
    art: { typ: 'lok', form: 'kantig', farbe: '#1C1F22', panto: false }, bilder: [
      { src: 'bilder/h-a35-c1.jpg', titel: 'A 3/5 705 neben der Ae 3/6 I 10694 in Arnex-sur-Orbe, 1967', foto: 'Hans-Peter Bärtschi', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_SIK_01-003226_FFS_A_3-5_705_Ae_3-6_I_10694_Arnex-sur-Orbe_230967.jpg' }
    ] },
  { id: 'h-c56', kat: 'historisch', name: 'C 5/6', beiname: 'Elefant', typ: 'Dampflokomotive für schwere Gotthardzüge (historisch)', vorlaeufig: false,
    text: ['Die C 5/6 gehörte zu den grössten und leistungsfähigsten Dampflokomotiven der SBB. Sie war zugleich die letzte normalspurige Dampflok-Neubeschaffung.', 'Der Übername «Elefant» verweist auf die mächtige Erscheinung und die hohe Zugkraft.'],
    kennzahlen: [['28', 'Serienlokomotiven'], ['65 km/h', 'Höchstgeschwindigkeit'], ['1913', 'erste Inbetriebnahme'], ['128 t', 'mit Tender']],
    daten: { 'Hersteller': 'SLM Winterthur', 'Bauart': '1′E h4v', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '19,195 m mit Tender', 'Gewicht': '128 t mit Tender', 'Leistung': 'ca. 1190 kW (indiziert)', 'Kesseldruck': '15 bar', 'Höchstgeschwindigkeit': '65 km/h', 'Nummern': '2951–2978', 'Anzahl': '28', 'In Betrieb seit': '1913 (Baujahre 1913–1917)', 'Ausmusterung': 'bis 1968', 'Einsatz': 'schwere Güterzüge' },
    specOrder: ['Hersteller', 'Bauart', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Kesseldruck', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die C 5/6 wurde für den schweren Verkehr am Gotthard entwickelt. Nach der Elektrifizierung wechselte sie ins Mittelland, auf die Strecke Bellinzona–Luino und in Rangierdienste.', 'Die 2969 führte 1968 den letzten offiziellen SBB-Dampfzug.'] },
      { titel: 'Erhaltung', p: ['Mehrere Exemplare blieben erhalten. Die C 5/6 2978, die letzte Lok der Serie, gehört zum historischen SBB-Fahrzeugbestand.'] }
    ],
    quellen: ['Wikipedia – SBB C 5/6: Technik und Einsatz des Elefanten', 'SBB Archiv – C 5/6 2978: historisches Fahrzeugporträt'],
    art: { typ: 'lok', form: 'kantig', farbe: '#1C1F22', panto: false }, bilder: [
      { src: 'bilder/h-c56-c1.jpg', titel: 'C 5/6 2958 im Locorama', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:C_5-6_2958_Locorama.jpg' },
      { src: 'bilder/h-c56-c2.jpg', titel: 'C 5/6 2965 von 1916', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:1916_2-10-0_Erstfeld_No_2965.jpg' },
      { src: 'bilder/h-c56-c3.jpg', titel: 'C 5/6 2965, gebaut von SLM', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:2965_SLM_2-10-0.jpg' },
      { src: 'bilder/h-c56-c4.jpg', titel: 'C 5/6 «Elefant» im Detail', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2007_0606_125GOT_SBB_00023.jpg' },
      { src: 'bilder/h-c56-c5.jpg', titel: 'Schilder der C 5/6 2965 «Erstfeld»', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:2965_Erstfeld_plates.jpg' }
    ] },
  { id: 'h-eb35', kat: 'historisch', name: 'Eb 3/5', beiname: 'Habersack', typ: 'Vielseitige Tenderlokomotive (historisch)', vorlaeufig: false,
    text: ['Die Eb 3/5 war eine kräftige Tenderlokomotive für Personen-, Güter- und Rangierdienste.', 'Ihre gedrungene Form brachte ihr den volkstümlichen Übernamen «Habersack» ein.'],
    kennzahlen: [['34', 'Lokomotiven'], ['75 km/h', 'Höchstgeschwindigkeit'], ['1911', 'erste Inbetriebnahme'], ['74–74,9 t', 'Dienstmasse']],
    daten: { 'Hersteller': 'SLM Winterthur', 'Bauart': '1′C1′ Tenderlokomotive', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '12,74 m über Puffer (Eb 3/5 5819)', 'Gewicht': '57,6–58,8 t leer, 74–74,9 t Dienstmasse', 'Treibraddurchmesser': '1520 mm', 'Kesseldruck': 'rund 12 bar', 'Vorräte': '7,7 m³ Wasser, 2,5 t Kohle', 'Höchstgeschwindigkeit': '75 km/h', 'Nummern': '5801–5834', 'Anzahl': '34', 'In Betrieb seit': '1911 (Baujahre 1911–1916)', 'Ausmusterung': '1953–1965', 'Einsatz': 'Regionalzüge, Nebenbahnen, Stationsdienst' },
    specOrder: ['Hersteller', 'Bauart', 'Spurweite', 'Gewicht', 'Treibraddurchmesser', 'Kesseldruck', 'Vorräte', 'Höchstgeschwindigkeit', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die symmetrische Achsfolge erlaubte gute Fahreigenschaften in beiden Richtungen, ohne dass die Lokomotive gewendet werden musste.', 'Damit eignete sich die Eb 3/5 besonders für Nebenbahnen, Regionalzüge und vielseitige Stationsdienste.'] },
      { titel: 'Erhaltung', p: ['Einzelne Lokomotiven der Serie blieben bei Museums- und historischen Bahnen erhalten. Sie zeigen die letzte Generation universeller SBB-Tenderdampfloks.'] }
    ],
    quellen: ['Wikipedia – SBB Eb 3/5: Bestand, Technik und Einsatz', 'SBB Historic – Sammlung und Archiv der historischen SBB-Fahrzeuge'],
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: '#1C1F22', panto: false }, bilder: [
      { src: 'bilder/h-eb35-c1.jpg', titel: 'Eb 3/5 in Bremgarten West', foto: 'Bobo11', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bremgarten_West_SBB_Eb_3-5_P6A7389.JPG' },
      { src: 'bilder/h-eb35-c2.jpg', titel: 'Eb 3/5 5810 (2018)', foto: 'Markus Eigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Eb_3_5_5810_2018-09-09.jpg' },
      { src: 'bilder/h-eb35-c3.jpg', titel: 'Eb 3/5 5885', foto: 'Unknown authorUnknown author', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:5885Eb35SBBCFFFFSi.jpg' },
      { src: 'bilder/h-eb35-c4.jpg', titel: 'Eb 3/5 «Habersack»', foto: 'user:bobo11', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB-Eb3-5-U163278.JPG' },
      { src: 'bilder/h-eb35-c5.jpg', titel: 'Eb 3/5 im Fahrzeugporträt', foto: 'Unknown authorUnknown author', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:BT-Eb-3-5Nr9.jpg' }
    ] },
  { id: 'h-mirage', kat: 'historisch', name: 'RABDe 12/12', beiname: 'Mirage', typ: 'Goldküstenexpress der Zürcher Vororte (historisch)', vorlaeufig: false,
    text: ['Beim dreiteiligen RABDe 12/12 waren alle zwölf Achsen angetrieben.', 'Die enorme Beschleunigung passte zum dichten Vorortsverkehr am rechten Zürichseeufer und führte zum Übernamen «Mirage».'],
    kennzahlen: [['20', 'Triebzüge'], ['125 km/h', 'Höchstgeschwindigkeit'], ['1967', 'erste Inbetriebnahme'], ['2444 kW', 'Stundenleistung']],
    daten: { 'Hersteller': 'SWP, FFA, BBC, SAAS', 'Zugbildung': 'dreiteilig', 'Achsfolge': 'alle 12 Achsen angetrieben', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '73,30 m', 'Gewicht': 'ca. 170 t leer', 'Leistung': '2444 kW Stundenleistung', 'Anfahrzugkraft': '239 kN', 'Höchstgeschwindigkeit': '125 km/h', 'Sitzplätze': '200', 'Nummern': '1101–1120', 'Anzahl': '20', 'In Betrieb seit': '1967 (Baujahre 1965–1967)', 'Spätere Bezeichnung': 'RABDe 510', 'Ausmusterung': 'bis 2008, zerlegt bis 2010', 'Einsatz': 'Vorortsverkehr am rechten Zürichseeufer' },
    specOrder: ['Hersteller', 'Zugbildung', 'Achsfolge', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Spätere Bezeichnung', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die Züge wurden für den halbstündlichen Vorortsverkehr auf der rechtsufrigen Zürichseebahn beschafft und als «Goldküstenexpress» bekannt. Später fuhren sie auch auf weiteren Regional- und S-Bahn-Linien.'] },
      { titel: 'Modernisierung und Ende', p: ['Nach Umbauten trugen die Fahrzeuge die Bezeichnung RABDe 510. Der reguläre Einsatz endete 2008; bis 2010 wurden die letzten Einheiten zerlegt. Ein vollständiger Zug blieb nicht erhalten.'] }
    ],
    quellen: ['Wikipedia – SBB RABDe 12/12: Technik, Einsatz und Verbleib', 'SBB Historic – Archiv und Sammlung zur Geschichte der SBB'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#3E5A3B', akzent: '#C9C2B0', tuer: '#2E3338', panto: true }, bilder: [
      { src: 'bilder/h-mirage-c1.jpg', titel: 'RABDe 12/12 «Mirage» in Rot', foto: 'Peter Alder', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Swiss_Rail_SBB_RABDe_12_12_Mirage.jpg' },
      { src: 'bilder/h-mirage-c2.jpg', titel: 'RABDe 12/12 «Mirage» im Jahr 1983', foto: 'ETH-Bibliothek Zürich, Bildarchiv / Fotograf: Comet Photo AG (Zürich) / Com_LC1943-001-021 / CC BY-SA 4.0', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_multiple_unit_RABDe_12-12_in_1983_(Com_LC1943-001-021).jpg' },
      { src: 'bilder/h-mirage-c3.jpg', titel: '«Mirage» in der späteren NPZ-Farbe', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Mirage-Portrait.jpg' },
      { src: 'bilder/h-mirage-c4.jpg', titel: '«Mirage» als RABDe 510', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_RABDe_510.jpg' },
      { src: 'bilder/h-mirage-c5.jpg', titel: 'Zwei «Mirage» an der Goldküste am Zürichsee', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Mirages_an_der_Goldk%C3%BCste.jpg' }
    ] },
  { id: 'h-rbe540', kat: 'historisch', name: 'RBe 540', beiname: 'RBe 4/4', typ: 'Modernisierter Hochleistungstriebwagen für Pendelzüge (historisch)', vorlaeufig: false,
    nummern: [[540006, 540079]],
    text: ['Der RBe 540 entstand aus der Modernisierung der RBe 4/4.', 'Die kräftigen Triebwagen führten zunächst Schnellzüge und später vor allem Regional- und S-Bahn-Pendelzüge.'],
    kennzahlen: [['82', 'RBe 4/4 gebaut'], ['125 km/h', 'Höchstgeschwindigkeit'], ['1959', 'erste Prototypen'], ['1988 kW', 'Stundenleistung']],
    daten: { 'Hersteller': 'SIG, BBC, MFO', 'Achsfolge': 'Bo′Bo′', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '23,70 m', 'Gewicht': '68 t, nach Umbau R4 72 t', 'Leistung': '1988 kW Stundenleistung', 'Anfahrzugkraft': '167 kN', 'Höchstgeschwindigkeit': '125 km/h', 'Sitzplätze': '64, nach Umbau R4 60', 'Nummern': 'ursprünglich 1401–1482, als RBe 540 006–079', 'Anzahl': '82 RBe 4/4', 'In Betrieb seit': '1959 (Baujahre 1959–1966)', 'Modernisierung': '1993–1998 (Programm R4)', 'Ausmusterung': 'letzte Planeinsätze 2014', 'Einsatz': 'Schnellzüge, später Regional- und S-Bahn-Pendelzüge' },
    specOrder: ['Hersteller', 'Achsfolge', 'Spurweite', 'Länge', 'Gewicht', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Nummern', 'Anzahl', 'In Betrieb seit', 'Modernisierung', 'Ausmusterung', 'Einsatz'],
    abschnitte: [
      { titel: 'Geschichte und Einsatz', p: ['Die RBe 4/4 waren stark genug, einen Schnellzug zu führen, und boten zugleich einen Fahrgastraum.', 'Beim Umbauprogramm R4 erhielten sie neue Führerstände, Türen und Innenräume sowie die Bezeichnung RBe 540.'] },
      { titel: 'Ausmusterung und Erhaltung', p: ['Die letzten planmässigen Einsätze endeten 2014. Einzelne Fahrzeuge blieben historisch erhalten, darunter die bei der Oensingen-Balsthal-Bahn eingesetzte RBe 540 074.'] }
    ],
    quellen: ['Wikipedia – SBB RBe 4/4 und RBe 540: Bau, Umbau und Einsatz', 'OeBB Historic – RBe 540 074: Fahrzeugdatenblatt'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#3E5A3B', akzent: '#C9C2B0', tuer: '#2E3338', panto: true }, bilder: [
      { src: 'bilder/h-rbe540-c1.jpg', titel: 'RBe 540 007', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2012_08_16_RBe_540_007.jpg' },
      { src: 'bilder/h-rbe540-c2.jpg', titel: 'RBe 540 060 in Chur', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_RBe_540_060-1_Chur_120513_IC10792_Ch-Zue.jpg' },
      { src: 'bilder/h-rbe540-c3.jpg', titel: 'RBe 4/4 in grüner Farbe bei Tägerwilen', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:DSF_RBe_4-4_T%C3%A4gerwilen.jpg' },
      { src: 'bilder/h-rbe540-c4.jpg', titel: 'RBe 540 neben einer Re 4/4 II in Winterthur', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bahnhof_Winterthur_mit_SBB_RBe_540_%26_Re_4-4_II_(2010).jpg' },
      { src: 'bilder/h-rbe540-c5.jpg', titel: 'RBe 540 020 in Zürich HB', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_RBe_540020-5_ZuerichHB_211214.jpg' }
    ] },
];
