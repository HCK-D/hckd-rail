/* HCKD RAIL – Fahrzeugdaten. Neue Züge hier eintragen. */
'use strict';

/* =====================================================================
   DATEN
   Neue Fahrzeuge oder Bilder aus dem PDF hier eintragen.
   bilder: [{ src: 'bilder/re-460-1.jpg', titel: 'Re 460 in Zürich HB' }, …]
   nummern: Loknummern für die Suche, z. B. [[460000, 460118]] für 460 000–460 118 oder [[11101, 11349]] für alte Nummern
   ===================================================================== */
const KATS = [
  { id: 'personenverkehr', code: 'P', name: 'SBB Personenverkehr', text: 'Fernverkehr, Regionalverkehr und S-Bahn: Hochgeschwindigkeits- und Doppelstockzüge, Triebzüge und Lokomotiven.', rep: 'rabe-501', bild: 'bilder/rabe-502-c2.jpg', bildPos: 'center 55%' },
  { id: 'cargo', code: 'G', name: 'SBB Cargo', text: 'Lokomotiven für den Güterverkehr im Inland und über die Alpen, inklusive Mehrsystemloks für den Verkehr ins Ausland.', rep: 're-482', bild: 'bilder/re620-2.jpg', bildPos: 'center 60%' },
  { id: 'infrastruktur', code: 'I', name: 'SBB Infrastruktur', text: 'Fahrzeuge für Bau, Unterhalt und Logistik am Netz: Bauzuglokomotiven und Baudienstfahrzeuge.', rep: 'aem-940', gruppen: ['Lokomotiven und Traktoren', 'Wagen und Bauzüge'], bild: 'bilder/aem-940-c1.jpg', bildPos: 'center 62%' },
  { id: 'rangier', code: 'R', name: 'Rangierfahrzeuge', text: 'Lokomotiven und Traktoren für das Rangieren in Bahnhöfen, Abstellanlagen und Anschlussgleisen.', rep: 'eem-923', bild: 'bilder/ee-922-c3.jpg', bildPos: 'center 60%' },
  { id: 'dienst', code: 'D', name: 'Dienst- und Spezialfahrzeuge', text: 'Lösch- und Rettungszüge, Schneeräumung, Messfahrzeuge, Krane und Fahrleitungsfahrzeuge.', rep: 'xrotm', bild: 'bilder/lrz-18-c1.jpg', bildPos: 'center 65%' },
  { id: 'historisch', code: 'H', name: 'Historische Fahrzeuge', text: 'Klassiker der SBB, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic oder in Museen erhalten.', rep: 'h-ce68ii', bild: 'bilder/h-ce68ii-c1.jpg', bildPos: 'center 60%' }
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
    daten: { 'Baureihe': 'RABDe 502 (IC200), RABe 502 (IR200, IR100)', 'Hersteller': 'Bombardier Transportation, heute Alstom', 'Spurweite': 'Normalspur, 1435 mm', 'Höchstgeschwindigkeit': '200 km/h', 'Antrieb': 'Permanentmagnet-Synchronmotoren', 'Länge': '200,6 m (IC200, IR200), 101,0 m (IR100)', 'Sitzplätze': '606 (IC200), 682 (IR200), 330 (IR100)', 'Leistung': '7500 kW max. (IR100: 3750 kW)', 'Anzahl': '62 Züge (23 Intercity, 39 Interregio)', 'In Betrieb seit': '2018, ganze Flotte geliefert 2022' },
    specOrder: ['Baureihe', 'Hersteller', 'Spurweite', 'Höchstgeschwindigkeit', 'Antrieb', 'Länge', 'Sitzplätze', 'Leistung', 'Anzahl', 'In Betrieb seit'],
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
    daten: { 'Hersteller': 'Stadler', 'Betreiber': 'SBB Personenverkehr', 'Bauart': 'Doppelstock-Triebzug', 'Zugbildung': '6 Wagen (Regio-Dosto), 4 Wagen (IR-Dosto)', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Höchstgeschwindigkeit': '160 km/h', 'Länge': '150,0 m (Regio-Dosto), 100,0 m (IR-Dosto)', 'Sitzplätze': '535 (Regio-Dosto), 317 (IR-Dosto)', 'Niederflureinstieg': 'ja', 'Anzahl': '93 Züge (69 Regio-Dosto, 24 IR-Dosto)', 'In Betrieb seit': '2012', 'Einsatz': 'S-Bahn Zürich, RegioExpress, InterRegio' },
    specOrder: ['Hersteller', 'Betreiber', 'Bauart', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Höchstgeschwindigkeit', 'Länge', 'Sitzplätze', 'Niederflureinstieg', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    abschnitte: [
      { titel: 'Ausführungen im Vergleich', tabelle: { kopf: ['Merkmal', 'Regio-Dosto', 'IR-Dosto'], zeilen: [
        ['Fahrzeuge', '69', '24'],
        ['Wagen je Zug', '6', '4'],
        ['Länge', '150,0 m', '100,0 m'],
        ['Sitzplätze', '535 (120 / 415)', '317'],
        ['Geschwindigkeit', '160 km/h', '160 km/h'],
        ['Niederflureinstieg', 'ja', 'ja'],
        ['Verkehr', 'S-Bahn / RE', 'IR / RE']] },
        hinweis: 'Die Aufteilung 120 / 415 bezeichnet die Plätze der 1. und 2. Klasse im Regio-Dosto. Für die IR-Ausführung nennt die SBB 317 Plätze insgesamt.' },
      { titel: 'Einsatz', p: ['Regio-Dosto fahren vor allem auf Linien der Zürcher S-Bahn und als RE Wettingen–Olten–Luzern.', 'IR-Dosto verkehren im interregionalen Verkehr der Deutsch- und Westschweiz, unter anderem im Raum Zürich, im Mittelland, in der Nordschweiz und auf der Achse nach Chur. Die IR-Ausführung kann mit dem neueren RABe 512 gekuppelt werden.'] },
      { titel: 'Ausstattung und Erneuerung', liste: ['Breite Tiefeinstiege', 'Rollstuhlplätze', 'Rollstuhlgängiges WC', 'Flächen für Kinderwagen und Velos'],
        p: ['Die IR-Dosto wurden 2020–2024 für den Fernverkehr aufgewertet, unter anderem mit Steckdosen und 2+1-Bestuhlung in der 1. Klasse.', 'Die SBB erneuert die Regio-Dosto schrittweise; der erste erneuerte Zug verkehrt seit September 2026.'] }
    ],
    quellen: ['SBB – Regio-Dosto: 69 sechsteilige Züge', 'SBB – IR-Dosto: 24 vierteilige Züge', 'SBB News – Erneuerung der Zürcher S-Bahn-Flotten, Oktober 2026'],
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
    daten: { 'Hersteller': 'Siemens', 'Betreiber': 'SBB Personenverkehr', 'Bauart': 'Doppelstocktriebzug', 'Zugbildung': '4 Wagen', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Länge': '100,0 m', 'Höchstgeschwindigkeit': '140 km/h', 'Sitzplätze': '360', 'Niederflureinstieg': 'ja', 'Anzahl': '61 Züge', 'In Betrieb seit': '2006', 'Beschaffungszeit': '2006–2009', 'Einsatz': 'S-Bahn Zürich' },
    specOrder: ['Hersteller', 'Betreiber', 'Bauart', 'Zugbildung', 'Spurweite', 'Stromsystem', 'Länge', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Niederflureinstieg', 'Anzahl', 'In Betrieb seit', 'Beschaffungszeit', 'Einsatz'],
    abschnitte: [
      { titel: 'Einsatz und Fahrgasträume', liste: ['Durchgehender Tiefeinstieg', 'Multifunktionsbereiche für Velo und Kinderwagen', 'Vorrangsitze', 'Rollstuhlplätze', 'Rollstuhlgängiges WC'],
        p: ['Die DTZ können auf dem gesamten Netz der Zürcher S-Bahn eingesetzt werden.'] },
      { titel: 'Modernisierung', p: ['Die SBB erneuert die Flotte seit 2025, voraussichtlich bis etwa 2030. Dazu gehören eine neue Lackierung, besserer Mobilfunkempfang durch angepasste Fensterscheiben sowie Arbeiten an Beleuchtung, Innenraum und technischen Komponenten.', 'Die Erneuerung soll die Nutzungsdauer auf 32 Jahre verlängern.'] }
    ],
    quellen: ['SBB – DTZ: Kenndaten, Einsatz und Ausstattung', 'SBB News – Erneuerung der DTZ und Regio-Dosto, Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', dd: true, farbe: W1, akzent: RED, tuer: '#4B545C', panto: true }, bilder: [
      { src: 'bilder/rabe-514-c1.jpg', titel: 'RABe 514 «DTZ» unterwegs', foto: 'Samson Ng . D201@EAL', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RABe_514_DTZ_EMU_(54904500242).jpg' },
      { src: 'bilder/rabe-514-c2.jpg', titel: 'Treppe zum Mittelstock im erneuerten DTZ', foto: 'E235JREMU', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:LR25_RABe_514,_Treppenhaus_Mittelstock.jpg' },
      { src: 'bilder/rabe-514-c3.jpg', titel: 'RABe 514 054 als S8 in Zürich Enge', foto: 'S5A-0043', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:(CHE-Zurich)_SBB_CFF_FFS_514054_S8_@_Zurich_Enge_2023-11-21.jpg' },
      { src: 'bilder/rabe-514-c4.jpg', titel: 'RABe 514 015 im neuen ZVV-Design 2023', foto: 'SchmalspurDVZO', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:%22ZVV-Livery_2023_%22_RABe_514_015.jpg' },
      { src: 'bilder/rabe-514-c5.jpg', titel: 'DTZ als S15 auf dem Seedamm in Rapperswil', foto: 'Roland zh', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bahnhof_Rapperswil_-_S15_-_Seedamm_2011-11-18_15-40-26.jpg' }
    ] },
  { id: 'rabe-523', kat: 'personenverkehr', name: 'RABe 523', beiname: 'FLIRT', typ: 'Elektrischer Regionaltriebzug von Stadler', vorlaeufig: false,
    text: ['Der vierteilige RABe 523 war der erste FLIRT für die SBB. Er wurde für die Stadtbahn Zug entwickelt und ging 2004 in den Fahrgasteinsatz.', 'Die Baureihe gehört zur grösseren FLIRT-Familie, die in mehreren Ausführungen verkehrt.'],
    kennzahlen: [['2004', 'erster Einsatz'], ['4', 'Wagenteile des Grundtyps'], ['160 km/h', 'FLIRT-Höchstwert laut SBB'], ['Stadler', 'Hersteller']],
    daten: { 'Bauart': 'Elektrotriebzug', 'Fahrzeugfamilie': 'FLIRT', 'Grundtyp': '4 Wagen', 'Einstieg': 'niederflurig', 'Hersteller': 'Stadler', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Höchstgeschwindigkeit': '160 km/h (FLIRT-Familie laut SBB)', 'Erste Region': 'Stadtbahn Zug', 'Einsatz': 'Regionalverkehr, S-Bahn', 'In Betrieb seit': '2004', 'SBB-FLIRT': 'mehrere Ausführungen' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Grundtyp', 'Einstieg', 'Hersteller', 'Spurweite', 'Stromsystem', 'Höchstgeschwindigkeit', 'Erste Region', 'Einsatz', 'In Betrieb seit', 'SBB-FLIRT'],
    specNote: 'Die SBB nennt für ihre 209 Regional-FLIRT insgesamt 160 km/h, 75–105 m Länge und 156–236 Sitzplätze. Diese Spannen beschreiben die ganze FLIRT-Familie und sind keine einheitlichen Daten für jeden RABe 523.',
    abschnitte: [
      { titel: 'Regionaler Einsatz und Ausstattung', liste: ['Niederflureinstieg', 'Rollstuhlplätze', 'Rollstuhlgängige Toiletten', 'Abstellflächen für Velos und Kinderwagen'],
        p: ['FLIRT fahren laut SBB als S-Bahn unter anderem in den Kantonen Aargau, Solothurn, Luzern, Basel, Neuenburg, Freiburg und Waadt. Die Ausstattung gehört zur ganzen Familie; Details unterscheiden sich nach Ausführung.'] },
      { titel: 'Stückzahl richtig einordnen', p: ['Die veröffentlichte Zahl von 209 umfasst sämtliche im Regionalverkehr eingesetzten FLIRT der SBB, darunter weitere Baureihen und Ausführungen. Die SBB-Fahrzeugübersicht weist keine separate aktuelle Stückzahl nur für den RABe 523 aus.', 'Deshalb wird hier bewusst keine Stückzahl für den RABe 523 aus der Familienzahl abgeleitet.'] }
    ],
    quellen: ['SBB – FLIRT: Familienflotte, technische Spannbreiten und Einsatz', 'Stadler – Mitteilung zur FLIRT-Entwicklung, S. 2 (RABe 523 ab 2004)'],
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
    kennzahlen: [['119', 'SBB-Lokomotiven'], ['230 km/h', 'Höchstgeschwindigkeit'], ['18,5 m', 'Länge'], ['6100 kW', 'Dauerleistung'], ['1992', 'erster SBB-Einsatz']],
    daten: { 'Fahrzeugart': 'Elektrische Universallokomotive', 'Betreiber': 'SBB', 'Achsanordnung': "Bo'Bo'", 'Stromsystem': '15 kV, 16,7 Hz AC', 'Spurweite': 'Normalspur, 1435 mm', 'Höchstgeschwindigkeit': '230 km/h (im Betrieb max. 200 km/h)', 'Leistung': '6100 kW Dauerleistung', 'Anfahrzugkraft': '300 kN', 'Länge': '18,5 m', 'Gewicht': '84 t Dienstgewicht', 'Hersteller': 'SLM / ABB', 'In Betrieb seit': '1992 (erster SBB-Einsatz)', 'Anzahl': '119 Lokomotiven', 'Status': 'im Einsatz (Refit modernisiert)' },
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
  { id: 'rabe-503', kat: 'personenverkehr', name: 'RABe 503', beiname: 'Astoro', typ: 'Elektrischer Neigezug (ETR 610)',
    text: ['Der RABe 503, beim Hersteller ETR 610 genannt, ist ein elektrischer Neigezug aus der Pendolino-Familie von Alstom.', 'Die SBB setzt ihn vor allem im Verkehr zwischen der Schweiz und Italien ein.'],
    daten: { 'Hersteller': 'Alstom (Pendolino-Familie)', 'Höchstgeschwindigkeit': '250 km/h', 'Neigetechnik': 'ja', 'Antrieb': 'elektrisch, Mehrsystem', 'Einsatz': 'Fernverkehr Schweiz–Italien' },
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
  { id: 'rabe-512', kat: 'personenverkehr', name: 'RABe 512', beiname: 'KISS', typ: 'Doppelstock-Triebzug',
    text: ['Neuere Doppelstock-Triebzüge von Stadler aus der KISS-Familie.', 'Die IR-Ausführung des RABe 511 kann mit dem RABe 512 gekuppelt werden.'],
    daten: { 'Hersteller': 'Stadler', 'Antrieb': 'elektrisch', 'Einsatz': 'Regional- und Interregioverkehr' },
    art: { typ: 'triebzug', nase: 'kurz', dd: true, farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-512-c1.jpg', titel: 'IR-Dosto RABe 512 in Zürich HB', foto: 'Borknorg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:IR-DostoRABe512.jpg' },
      { src: 'bilder/rabe-512-c2.jpg', titel: 'RABe 512 IR-Dosto unterwegs', foto: 'Samson Ng . D201@EAL', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RABe_512_IR-Dosto_EMU_(54948662392).jpg' },
      { src: 'bilder/rabe-512-c3.jpg', titel: 'RABe 512 IR-Dosto', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_IR-Dosto_-_RABe_512_(52078516652).jpg' },
      { src: 'bilder/rabe-512-c4.jpg', titel: 'Oberstock 2. Klasse im RABe 512', foto: 'E235JREMU', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:LR25_RABe_512_Oberstock_2.Klasse.jpg' },
      { src: 'bilder/rabe-512-c5.jpg', titel: 'Front des RABe 512', foto: 'Kecko from Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_IR-Dosto_-_RABe_512_(52079557611).jpg' }
    ] },
  { id: 'rabe-520', kat: 'personenverkehr', name: 'RABe 520', beiname: 'GTW', typ: 'Gelenktriebwagen',
    text: ['Niederfluriger Gelenktriebwagen (GTW) von Stadler für den Regionalverkehr.'],
    daten: { 'Hersteller': 'Stadler', 'Antrieb': 'elektrisch', 'Einsatz': 'Regionalverkehr, u. a. im Seetal' },
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-520-c1.jpg', titel: 'RABe 520 «GTW» in Beinwil am See', foto: 'Smiley.toerist', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Beinwil_am_See_station.jpg' },
      { src: 'bilder/rabe-520-c2.jpg', titel: 'RABe 520 im Seetal bei Seengen', foto: 'Ray Swi-hymn from Sijhih-Taipei, Taiwan', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:20170710_SeengenHwy_5743_(36762966812).jpg' },
      { src: 'bilder/rabe-520-c3.jpg', titel: 'RABe 520 der Seetalbahn in Lenzburg, 2003', foto: 'Roland Zumbuehl', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2003-Lenzburg-Seetalbahn.jpg' },
      { src: 'bilder/rabe-520-c4.jpg', titel: 'RABe 520 am Bahnübergang in Beinwil am See', foto: 'Smiley.toerist', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Beinwil_am_See_crossing.jpg' },
      { src: 'bilder/rabe-520-c5.jpg', titel: 'RABe 520 als S28 bei Hunzenschwil', foto: 'TracksOnWax', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_S28_Hunzenschwil_Suhr.JPG' }
    ] },
  { id: 'rabe-521', kat: 'personenverkehr', name: 'RABe 521', beiname: 'FLIRT', typ: 'Niederflur-Triebzug',
    text: ['FLIRT-Triebzug von Stadler, eingesetzt bei der S-Bahn Basel.'],
    daten: { 'Hersteller': 'Stadler', 'Antrieb': 'elektrisch', 'Einsatz': 'S-Bahn Basel' },
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-521-c1.jpg', titel: 'RABe 521 «FLIRT»', foto: 'Samson Ng . D201@EAL', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RABe_521_Flirt_EMU_(54920974686).jpg' },
      { src: 'bilder/rabe-521-c2.jpg', titel: 'RABe 521 als S3 nach Olten in Porrentruy', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Porrentruy_railway_station_with_S3_to_Olten.jpg' },
      { src: 'bilder/rabe-521-c3.jpg', titel: 'FLIRT auf der Gäubahnbrücke in Olten', foto: 'Julian Ryf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:G%C3%A4ubahnsteg_und_G%C3%A4ubahnbr%C3%BCcke_Olten_160924.jpg' },
      { src: 'bilder/rabe-521-c4.jpg', titel: 'FLIRT auf der Aarebrücke bei Olten', foto: 'Julian Ryf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Aarebr%C3%BCcken_bei_Olten_200728.jpg' },
      { src: 'bilder/rabe-521-c5.jpg', titel: 'Innenraum des RABe 521 «Express-Hase»', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:%22Express-Hase%22_des_%22Seehas%22,_Innenansicht_SBB_RABe_521_(2025).jpg' }
    ] },
  { id: 'rabe-522', kat: 'personenverkehr', name: 'RABe 522', beiname: 'FLIRT', typ: 'Mehrsystem-Niederflur-Triebzug',
    text: ['FLIRT-Triebzug von Stadler mit Mehrsystemausrüstung für den grenzüberschreitenden Regionalverkehr nach Frankreich.'],
    daten: { 'Hersteller': 'Stadler', 'Antrieb': 'elektrisch, Mehrsystem', 'Einsatz': 'Regionalverkehr Schweiz–Frankreich' },
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: RED, tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-522-c1.jpg', titel: 'RABe 522 209 in Delle', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:02.02.19_Delle_SBB_522209_and_SNCF_Z27731_32_(40065407663).jpg' },
      { src: 'bilder/rabe-522-c2.jpg', titel: 'RABe 522 in Noiraigue', foto: 'Hansueli Krapf', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2024-07-29_12-20-53_RABe_522_Noiraigue_756.0.jpg' },
      { src: 'bilder/rabe-522-c3.jpg', titel: 'RABe 522 221 im Léman-Express-Design in Annemasse', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:06.06.23_Annemasse_522221_(52969184458).jpg' },
      { src: 'bilder/rabe-522-c4.jpg', titel: 'RABe 522 231 in Genève', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:06.06.23_Gen%C3%A8ve_522231_(52969184413).jpg' },
      { src: 'bilder/rabe-522-c5.jpg', titel: 'RABe 522 213 in Genève-Cornavin', foto: 'SmoIchopper', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:522213_-_Gen%C3%A8ve-Cornavin.jpg' }
    ] },
  { id: 'rabe-524', kat: 'personenverkehr', name: 'RABe 524', beiname: 'FLIRT TILO', typ: 'Mehrsystem-Niederflur-Triebzug',
    text: ['FLIRT-Triebzug von Stadler für TILO, den Regionalverkehr im Tessin und in der Lombardei.'],
    daten: { 'Hersteller': 'Stadler', 'Antrieb': 'elektrisch, Mehrsystem', 'Einsatz': 'TILO, Tessin–Lombardei' },
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: '#1F6FB2', tuer: RED, panto: true }, bilder: [
      { src: 'bilder/rabe-524-c1.jpg', titel: 'RABe 524 008 in Milano Centrale', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:16_FFS_RABe_524_008_Milano_Cle_110917.jpg' },
      { src: 'bilder/rabe-524-c2.jpg', titel: 'RABe 524 303 im neuen TILO-Design in Milano Centrale', foto: 'The Nikon User', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:524_303_Milano_Centrale.jpg' },
      { src: 'bilder/rabe-524-c3.jpg', titel: 'RABe 524 in Capolago-Riva San Vitale', foto: 'Andrzej Otrębski', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Capolago-Riva_S_Vitale_ETR_524.jpg' },
      { src: 'bilder/rabe-524-c5.jpg', titel: 'RABe 524 in Milano Cadorna', foto: 'Airon90', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETR_524_a_Milano_Cadorna.jpg' }
    ] },
  { id: 'ic2000', kat: 'personenverkehr', name: 'IC2000', beiname: 'Doppelstockwagen', typ: 'Doppelstock-Reisezugwagen',
    text: ['Doppelstöckige Reisezugwagen für den Fernverkehr. Sie fahren meist mit einer Re 460 und einem Steuerwagen als Pendelzug.'],
    daten: { 'Fahrzeugart': 'Reisezugwagen ohne eigenen Antrieb', 'In Betrieb seit': '1997', 'Einsatz': 'InterCity, InterRegio' },
    art: { typ: 'wagen', dd: true, farbe: W1, akzent: RED }, bilder: [
      { src: 'bilder/ic2000-c1.jpg', titel: 'IC2000-Pendelzug in der Landschaft', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20080330Y222a.jpg' },
      { src: 'bilder/ic2000-c3.jpg', titel: 'Re 460 mit IC2000-Doppelstockwagen', foto: 'User:Filzstift', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Re460.jpg' },
      { src: 'bilder/ic2000-c4.jpg', titel: 'Re 460 vor IC2000-Doppelstockwagen', foto: 'Samson Ng . D201@EAL', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Re_460_Electric_Locomotive_-_54781721266.jpg' },
      { src: 'bilder/ic2000-c5.jpg', titel: 'Übergang zwischen einstöckigem Wagen und IC2000-Doppelstockwagen', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:L03_328_Kupplung_einst%C3%B6ckiger_und_Doppelstockwagen.jpg' },
      { src: 'bilder/ic2000-c6.jpg', titel: 'IC2000-Steuerwagen in Romanshorn', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:I09_310_Bf_Romanshorn,_Bt_IC_2000.jpg' }
    ] },
  { id: 'ew-iv', kat: 'personenverkehr', name: 'EW IV', beiname: 'Einheitswagen IV', typ: 'Reisezugwagen',
    text: ['Einstöckige Reisezugwagen für InterCity und InterRegio, oft mit einer Re 460 als Pendelzug unterwegs.'],
    daten: { 'Fahrzeugart': 'Reisezugwagen ohne eigenen Antrieb', 'Einsatz': 'InterCity, InterRegio' },
    art: { typ: 'wagen', farbe: W1, akzent: RED }, bilder: [
      { src: 'bilder/ew-iv-c1.jpg', titel: 'EW-IV-Steuerwagen in Bellinzona', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:10_IC_Bt_Bellinzona_S_Paolo_170417.jpg' },
      { src: 'bilder/ew-iv-c2.jpg', titel: 'InterRegio mit EW IV in Zürich HB', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:3_IR_2441_Zue-Chi_Zuerich_HB_101216.jpg' },
      { src: 'bilder/ew-iv-c3.jpg', titel: 'Gotthard-Weekender mit EW IV in Brugg', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:3_IR_Gotthard-Weekender_Brugg_220418.jpg' },
      { src: 'bilder/ew-iv-c5.jpg', titel: 'Innenraum 1. Klasse im EW IV', foto: 'Abaddon1337', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:A_50_85_10-75_198-7_IR_1741_Gen%C3%A8ve-A%C3%A9roport_-_Brig_corridor.jpg' }
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
      { src: 'bilder/re420-3.jpg', titel: 'Re 420 von WRS mit Holzzug' },
      { src: 'bilder/slides/slide-07.jpg', titel: 'Re 420 von SBB Cargo mit Güterzug (Foto: hpgruesen / Pixabay)' },
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
      { src: 'bilder/re620-4.jpg', titel: 'Re 620 mit Kesselwagenzug' },
      { src: 'bilder/re620-5.jpg', titel: 'Re 620 mit Bauzug, im Vordergrund Kühe' },
      { src: 'bilder/re620-3.jpg', titel: 'Re 620 in Cargo-Farben im Bahnhof' },
      { src: 'bilder/slides/slide-12.jpg', titel: 'Re 620 mit Kesselwagenzug (Foto: music4life / Pixabay)' }
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

  { id: 're-421', kat: 'cargo', name: 'Re 421', beiname: 'Re 4/4 II für Deutschland', typ: 'Vierachsige Universallokomotive',
    text: ['Die Re 421 entstand durch den Umbau von Re 4/4 II (Re 420) für den Einsatz in Deutschland.'],
    daten: { 'Basis': 'Re 420 (Re 4/4 II)', 'Achsfolge': 'Bo′Bo′', 'Antrieb': 'elektrisch', 'Einsatz': 'Güterverkehr Schweiz–Deutschland' },
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: CRED, akzent: '#F3F4F2', panto: true }, bilder: [
      { src: 'bilder/re-421-c1.jpg', titel: 'Re 421 374 in Thun', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:1_FFS_Re_421_374-0_Thun_120818.jpg' },
      { src: 'bilder/re-421-c2.jpg', titel: 'Re 421 395 in Pirna', foto: 'Pedalito', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:421_395-5_Pirna.jpg' },
      { src: 'bilder/re-421-c3.jpg', titel: 'Re 421 377 mit Autozug in Donauwörth', foto: 'HintenRum', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Re_4-4_II_421_377-3,_Auto-G%C3%BCterzug_-_(DE)_Donauw%C3%B6rth_-_01.05.2014_(14327900154).jpg' },
      { src: 'bilder/re-421-c4.jpg', titel: 'Re 421 383 in Lindau Hbf', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:26.05.17_Lindau_Hbf_421.383_(34952955682).jpg' },
      { src: 'bilder/re-421-c5.jpg', titel: 'Re 421 in Dresden', foto: 'Bybbisch94', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20150419.Dresden,_7.Loktreffen.-012.jpg' }
    ] },
  // ---------- SBB Infrastruktur ----------
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
    daten: { 'Hersteller': 'Stadler Winterthur und Partner', 'Bauart': 'zweiachsiger Dieseltraktor', 'Spurweite': 'Normalspur, 1435 mm', 'Länge': '11,22 m', 'Gewicht': '30 t Dienstmasse, höchstens 37 t', 'Antrieb': 'hydrostatisch, MTU-Dieselmotor', 'Leistung': '550 kW', 'Anfahrzugkraft': 'ca. 81 kN', 'Höchstgeschwindigkeit': '80 km/h', 'Zuladung': '7 t; Korbversion 0,5 t', 'Arbeitsmodus': 'bis 20 km/h, Kranfahrten bis 4 km/h', 'Anzahl': '125 bestellt (1997, 2000, 2005)', 'Einsatz': 'Gleis-, Fahrleitungs- und Signalunterhalt' },
    specOrder: ['Hersteller', 'Bauart', 'Spurweite', 'Länge', 'Gewicht', 'Antrieb', 'Leistung', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Zuladung', 'Arbeitsmodus', 'Anzahl', 'Einsatz'],
    specNote: 'Herstellerdatenblatt und eine Vorstudie von DLR und SBB beschreiben die verschiedenen Ausführungen.',
    abschnitte: [
      { titel: 'Serien und Einsatz', p: ['Die SBB bestellte 1997 und 2000 je 50 Fahrzeuge sowie 2005 weitere 25. Stadler meldete die Auslieferung der letzten 25 im Jahr 2007.', 'Die Traktoren dienen im Gleis-, Fahrleitungs- und Signalunterhalt, transportieren Material und können Bauzüge bewegen oder rangieren.'] },
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
      { src: 'bilder/am-841-c4.jpg', titel: 'Am 841 017', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2012_09_02_Am_841_017_7.JPG' }
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
    daten: { 'Umbau': 'ORTICS, im SBB Industriewerk Biel', 'Ursprungsbaureihe': 'Tm IV', 'Achsfolge': 'B', 'Spurweite': 'Normalspur, 1435 mm', 'Antrieb': 'dieselhydraulisch, Caterpillar-Motor', 'Leistung': '280 kW', 'Länge': '7,67 m über Puffer', 'Gewicht': 'rund 30 t', 'Anfahrzugkraft': '90 kN', 'Höchstgeschwindigkeit': '60 km/h aus eigener Kraft, 90 km/h geschleppt', 'Steuerung': 'Funkfern- und Vielfachsteuerung', 'Zugbeeinflussung': 'ETM-S', 'Anzahl': '15 (Tmf 232 301–315)', 'In Betrieb seit': '2013 (Umbauauftrag)', 'Einsatz': 'Bau- und Rangierdienst' },
    specOrder: ['Umbau', 'Ursprungsbaureihe', 'Achsfolge', 'Spurweite', 'Antrieb', 'Leistung', 'Länge', 'Gewicht', 'Anfahrzugkraft', 'Höchstgeschwindigkeit', 'Steuerung', 'Zugbeeinflussung', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
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

  { id: 'schotterwagen', kat: 'infrastruktur', gruppe: 'Wagen und Bauzüge', name: 'Schotterwagen', beiname: '', typ: 'Selbstentladewagen für Schotter',
    text: ['Güterwagen, die Schotter zur Baustelle bringen und ihn gezielt neben oder zwischen den Schienen abladen.'],
    daten: { 'Fahrzeugart': 'Güterwagen ohne eigenen Antrieb', 'Einsatz': 'Gleisbau und Gleisunterhalt' },
    art: { typ: 'wagen', var: 'schotter', farbe: YEL }, bilder: [] },
  { id: 'schienenwagen', kat: 'infrastruktur', gruppe: 'Wagen und Bauzüge', name: 'Schienentransportwagen', beiname: '', typ: 'Flachwagen für lange Schienen',
    text: ['Flachwagen mit Gestellen, auf denen lange Schienen zur Baustelle gebracht werden.'],
    daten: { 'Fahrzeugart': 'Güterwagen ohne eigenen Antrieb', 'Einsatz': 'Schienenwechsel, Gleisbau' },
    art: { typ: 'wagen', var: 'flach', farbe: YEL }, bilder: [] },
  { id: 'mannschaftswagen', kat: 'infrastruktur', gruppe: 'Wagen und Bauzüge', name: 'Mannschaftswagen', beiname: '', typ: 'Aufenthaltswagen für Bautrupps',
    text: ['Wagen mit Aufenthaltsraum, Werkstatt oder Lager für die Mitarbeitenden auf grossen Baustellen. Auch die Kirow-Krane fahren mit einem Mannschaftswagen.'],
    daten: { 'Fahrzeugart': 'Dienstwagen ohne eigenen Antrieb', 'Einsatz': 'Baustellen im ganzen Netz' },
    art: { typ: 'wagen', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
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
      { src: 'bilder/lrz-18-c1.jpg', titel: 'LRZ 18 «Bern» bei Einigen', foto: 'Nelso Silva from Porto, Portugal', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_LRZ_18_%22Bern%22_(52557604099).jpg' }
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
      { titel: 'Leistungsprofil', p: ['Die vierteilige Formation bietet mehr Löschmittel, Atemluft und Rettungskapazität als frühere Generationen. Mehrere angetriebene Fahrzeuge sorgen für hohe Zugkraft und Redundanz.'] }
    ],
    quellen: ['SBB Infrastruktur – Übersicht und Datenblatt LRZ 14', 'SBB – Faktenblatt Lösch- und Rettungszug 2014, technische Daten', 'SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrzeuggruppe LRZ'],
    art: { typ: 'spezial', var: 'loesch', farbe: YEL, akzent: CRED }, bilder: [
      { src: 'bilder/lrz-14-c1.jpg', titel: 'Neuer LRZ 14 beim Erhaltungs- und Interventionszentrum Erstfeld', foto: 'Kecko from Rural area, Eastern Switzerland', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_-_EIZ_Erstfeld_(23518335636).jpg' },
      { src: 'bilder/lrz-14-c2.jpg', titel: 'LRZ 14 «Uri» im Bahnhof Erstfeld', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_L%C3%B6sch-_und_Rettunszug_LRZ-14_%22Uri%22_im_Bahnhof_Erstfeld_(2015).jpg' }
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
      { src: 'bilder/lrz-08-c1.jpg', titel: 'LRZ 08 (TES 08 Olten) in Renens', foto: 'flybyeigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_CFF_FFS_LRZ_XTmas_008-4_(20525784048).jpg' }
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
    art: { typ: 'spezial', var: 'loesch', farbe: YEL, akzent: CRED }, bilder: [] },
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
      { src: 'bilder/diagnose-c1.jpg', titel: 'Messtriebwagen XTmass 99 85 9160 001 von MerMec in Lausanne', foto: 'NAC', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_XTmass_99_85_9_160_001-5_Lausanne_050809.jpg' }
    ] },
  { id: 'kirow-krc-1100', kat: 'dienst', name: 'Kirow KRC 1100', beiname: 'Multi Tasker', typ: 'Schwerer Eisenbahndrehkran für Intervention und Bau', vorlaeufig: false,
    text: ['Der SBB-Kran der Kirow-1100er-Klasse gehört zur neuen Grosskrangeneration.', 'Er ersetzte zusammen mit dem Multi Tasker 1200 die beiden älteren KRC 800.'],
    kennzahlen: [['1', 'SBB-Kran dieser Klasse'], ['2019', 'Ersatzprogramm abgeschlossen'], ['125 t', 'maximale Tragfähigkeit'], ['16°', 'Schwenken bei freiem Nachbargleis']],
    daten: { 'Hersteller': 'Kirow Leipzig', 'Typ': 'Multi Tasker KRC 1100', 'Bauart': 'Eisenbahndrehkran', 'Maximale Tragfähigkeit': '125 t', 'Schwenkwinkel': 'bis 16° bei freiem Nachbargleis', 'Eigenmasse': 'nicht verlässlich publiziert', 'Transport': 'mit Schutzwagen, Gegengewicht darauf abgelegt', 'Netz': 'SBB-Normalspurnetz', 'Betreiber': 'SBB Infrastruktur', 'Vorgänger': 'einer der zwei KRC 800', 'Anzahl': '1', 'In Betrieb seit': '2019 (Ersatzprogramm 2016–2019)', 'Einsatz': 'Bergung, Hilfsbrücken, schwere Bauarbeiten' },
    specOrder: ['Hersteller', 'Typ', 'Bauart', 'Maximale Tragfähigkeit', 'Schwenkwinkel', 'Eigenmasse', 'Transport', 'Netz', 'Betreiber', 'Vorgänger', 'Anzahl', 'In Betrieb seit', 'Einsatz'],
    specNote: '125 t ist die maximale Tragfähigkeit und nicht die Masse des Krans. Eine belastbare SBB-spezifische Eigenmasse wurde nicht veröffentlicht.',
    abschnitte: [
      { titel: 'Beschaffung', p: ['Die SBB entschied sich im Dezember 2017 für den KRC 1100. Kirow beschreibt den Ersatz der zwei KRC 800 durch zwei neue Grosskrane zwischen 2016 und 2019; einer davon gehört zur 1100er-Klasse.'] },
      { titel: 'Arbeiten neben befahrenen Gleisen', p: ['Das angeschrägte Gegengewicht erlaubt laut Hersteller eine Drehung bis 16 Grad, während das Lichtraumprofil des Nachbargleises frei bleibt. In Transportstellung liegt das Gegengewicht auf einem Schutzwagen.'] },
      { titel: 'Leistungsangabe', p: ['Die maximale Tragfähigkeit gilt nur unter definierten Bedingungen. Die zulässige Last sinkt mit der Ausladung und hängt von Abstützung und Gleislage ab.'] }
    ],
    quellen: ['Kirow – Chronik 2019: Ersatz der SBB-KRC-800 durch 1100er und 1200er', 'Kirow – Kirow Chronicle 01/2018, «Neuer Eisenbahnkran für die Schweizer Bundesbahn», S. 15'],
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
    text: ['Der Kirow KRC 250 ist ein Eisenbahndrehkran für Bau- und Unterhaltsarbeiten.', 'Öffentlich zugängliche SBB-Unterlagen nennen technische Daten, veröffentlichen aber keine belastbare Gesamtstückzahl oder ein eindeutiges Beschaffungsjahr.'],
    kennzahlen: [['169 t', 'Masse der Kranformation'], ['47 m', 'Länge der Formation'], ['80 km/h', 'Höchstgeschwindigkeit'], ['–', 'Stückzahl nicht publiziert']],
    daten: { 'Hersteller': 'Kirow Leipzig', 'Typ': 'KRC 250', 'Formation': 'Kran mit Schutz- bzw. Gegengewichtswagen und Mannschaftswagen', 'Gewicht': 'rund 169 t (ganze Formation)', 'Länge': 'rund 47 m (ganze Formation)', 'Höchstgeschwindigkeit': '80 km/h', 'Antrieb': 'hydraulischer Kranantrieb, kein eigener Fahrantrieb', 'Tragfähigkeit': 'ausladungsabhängig', 'Betreiber': 'SBB Infrastruktur', 'Anzahl': 'öffentlich nicht dokumentiert' },
    specOrder: ['Hersteller', 'Typ', 'Formation', 'Gewicht', 'Länge', 'Höchstgeschwindigkeit', 'Antrieb', 'Tragfähigkeit', 'Betreiber', 'Anzahl'],
    specNote: 'Eine Zahl ohne verlässliche Primärquelle wird bewusst nicht angegeben. Kranmasse und Traglast sind verschiedene Werte.',
    abschnitte: [
      { titel: 'Aufgabe', p: ['Der KRC 250 hebt Gleisjoche, Weichenbauteile und weitere schwere Lasten. Schutz- und Gegengewichtswagen gehören zur betrieblichen Formation; der Mannschaftswagen bietet Arbeits- und Aufenthaltsräume.'] },
      { titel: 'Datenlage', p: ['Der SBB-Fahrtypenkatalog belegt Bauart, Formation und Fahrdaten. Eine aktuelle Flottenzahl oder ein Beschaffungsjahr ist dort nicht ausgewiesen.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5090, S. 276', 'Kirow – Multi Tasker Produktbroschüre, Einsatzfelder von Eisenbahnkranen'],
    art: { typ: 'spezial', var: 'kran', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
  { id: 'kirow-krc-100', kat: 'dienst', name: 'Kirow KRC 100', beiname: 'Multi Tasker', typ: 'Kompakter Eisenbahndrehkran für Bau und Intervention', vorlaeufig: false,
    text: ['Der Kirow KRC 100 ist ein kompakter Eisenbahndrehkran der SBB. Zwölf Fahrzeuge wurden 2006 und 2007 geliefert.', 'Sein kleiner Heckradius und das feste Gegengewicht erlauben Arbeiten mit geringem Einfluss auf benachbarte Gleise.'],
    kennzahlen: [['12', 'Krane geliefert'], ['2006–2007', 'Ablieferung'], ['70 t', 'Dienstmasse des Krans'], ['120 km/h', 'zulässig geschleppt']],
    daten: { 'Hersteller': 'Kirow Leipzig', 'Typ': 'Multi Tasker KRC 100', 'Wagengattung': 'XTmaas', 'Fahrzeugnummern': '99 85 92 19 000–011', 'Länge': '11,0 m über Puffer', 'Gewicht': '70 t Dienstmasse', 'Tragfähigkeit': 'bis etwa 20 t, ausladungsabhängig', 'Höchstgeschwindigkeit': '120 km/h geschleppt', 'Gegengewicht': 'fest', 'Betreiber': 'SBB Infrastruktur', 'Anzahl': '12', 'In Betrieb seit': '2006–2007 (Dez. 2006 bis Okt. 2007)', 'Einsatz': 'Gleisbau, Masten setzen, Intervention' },
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
    daten: { 'Hersteller': 'Bendini', 'Wagengattung': 'XTms', 'Basistyp': 'Baumaschine', 'Kranklasse': '30 tm', 'Länge': '8,1 m', 'Gewicht': '38 t', 'Höchstgeschwindigkeit': '100 km/h', 'Eigener Fahrantrieb': 'nein', 'Fahrzeugart': 'Güterwagen', 'Betreiber': 'SBB Infrastruktur', 'Einsatz': 'Unterhalt und Montage', 'Katalogstatus 2026': 'aktiv' },
    specOrder: ['Hersteller', 'Wagengattung', 'Basistyp', 'Kranklasse', 'Länge', 'Gewicht', 'Höchstgeschwindigkeit', 'Eigener Fahrantrieb', 'Fahrzeugart', 'Betreiber', 'Einsatz', 'Katalogstatus 2026'],
    specNote: 'Die 30-tm-Angabe bezeichnet die im SBB-Katalog verwendete Kranklasse; sie ist nicht mit der Fahrzeugmasse von 38 t gleichzusetzen.',
    abschnitte: [
      { titel: 'Rolle in der Kranflotte', p: ['Mit nur 8,1 Metern Länge ist der Bendini deutlich kompakter als die schweren Kirow-Verbände.', 'Er eignet sich für lokale Montage- und Hebearbeiten, bei denen kein grosser Schwerkran nötig ist.'] },
      { titel: 'Geplante Ablösung', p: ['In der Beschaffungsplanung von SBB Infrastruktur erscheint ein Projekt für Krane mittlerer Lasten ausdrücklich als Ersatz des Bendini und weiterer älterer Krane.', 'Der Fahrtypenkatalog 2026 weist den Bendini dennoch weiterhin als aktiv aus.'] }
    ],
    quellen: ['SBB Infrastruktur – Fahrtypenkatalog 2026, Fahrtyp 5011, S. 197', 'SBB Infrastruktur – Flottenmanagement Schienenfahrzeuge, Präsentation vom 4. Juni 2025, S. 20'],
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
    art: { typ: 'spezial', var: 'montage', farbe: YEL, akzent: '#2E3338' }, bilder: [] },
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
  { id: 'h-ce68iii', kat: 'historisch', name: 'Ce 6/8 III', beiname: 'Krokodil', typ: 'Elektrische Güterzuglokomotive (historisch)',
    text: ['Die zweite Krokodil-Bauart der SBB, äusserlich ähnlich wie die Ce 6/8 II, aber mit anderer Technik.'],
    daten: { 'Achsfolge': '(1′C)(C1′)', 'Antrieb': 'elektrisch, Stangenantrieb', 'In Betrieb seit': '1926', 'Einsatz': 'Güterzüge' },
    art: { typ: 'lok', form: 'kantig', farbe: '#5B4A2F', panto: true }, bilder: [
      { src: 'bilder/h-ce68iii-c1.jpg', titel: 'Ce 6/8 III 14305', foto: 'nzsteam', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ce_6_8_III_14305_2019-10-19_01.jpg' },
      { src: 'bilder/h-ce68iii-c2.jpg', titel: 'Ce 6/8 III bei einer Fahrt von SBB Historic', foto: 'GoodRJ', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:CH_SBB_Historische_Fahrzeuge-2.jpg' },
      { src: 'bilder/h-ce68iii-c3.jpg', titel: 'Ce 6/8 III 14305 von der Seite', foto: 'nzsteam', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ce_6_8_III_14305_2019-10-19.jpg' },
      { src: 'bilder/h-ce68iii-c4.jpg', titel: 'Ce 6/8 III 14305 zu Besuch in Malmö (2015)', foto: 'Philaweb', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Crocodile_14305_in_Malm%C3%B6_2015.jpg' },
      { src: 'bilder/h-ce68iii-c5.jpg', titel: 'Fabrikschild der Ce 6/8 III 14305', foto: 'Joachim Seyferth', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Detailansicht_mit_Fabrikschild_der_Schweizer_SBB-Lokomotive_Ce_6-8_III_14305.jpg' }
    ] },
  { id: 'h-ae66', kat: 'historisch', name: 'Ae 6/6', beiname: 'Kantonslok', typ: 'Elektrische Gebirgslokomotive (historisch)',
    text: ['Die Ae 6/6 wurde für schwere Züge am Gotthard gebaut. Viele Loks trugen das Wappen eines Kantons oder einer Stadt, daher der Name «Kantonslok».'],
    daten: { 'Achsfolge': 'Co′Co′', 'Antrieb': 'elektrisch', 'Höchstgeschwindigkeit': '125 km/h', 'Anzahl': '120', 'In Betrieb seit': '1952', 'Einsatz': 'Gotthard, schwere Reise- und Güterzüge' },
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
  { id: 'h-ae36i', kat: 'historisch', name: 'Ae 3/6 I', beiname: '', typ: 'Elektrische Schnellzuglokomotive (historisch)',
    text: ['Frühe elektrische Schnellzuglok der SBB aus der Zeit der ersten grossen Elektrifizierung.'],
    daten: { 'Antrieb': 'elektrisch, Buchli-Antrieb', 'In Betrieb seit': '1921', 'Einsatz': 'Schnellzüge im Flachland' },
    art: { typ: 'lok', form: 'kantig', farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-ae36i-c1.jpg', titel: 'Ae 3/6 I 10700', foto: 'Mrangel44', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Ae_3-6_I_10700.jpg' },
      { src: 'bilder/h-ae36i-c2.jpg', titel: 'Ae 3/6 I mit Buchli-Antrieb', foto: 'David Gubler', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'http://creativecommons.org/licenses/by-sa/3.0/', quelle: 'https://commons.wikimedia.org/wiki/File:Ae_3-6-I_buchli.jpg' },
      { src: 'bilder/h-ae36i-c3.jpg', titel: 'Ae 3/6 I 10650 in Brugg (2012)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:E-Lok_SBB_Ae_3-6_I_Nr._10650_(Brugg,_2012).jpg' },
      { src: 'bilder/h-ae36i-c4.jpg', titel: 'Ae 3/6 I 10712 in Biel/Bienne (1988)', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:05.08.88_Biel_Bienne_SBB_Ae_3_6%C2%B9_10712_(54325862482).jpg' },
      { src: 'bilder/h-ae36i-c5.jpg', titel: 'Ae 3/6 I 10638', foto: 'Unknown authorUnknown author', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ae_3-6_I_10638.jpg' }
    ] },
  { id: 'h-ae814', kat: 'historisch', name: 'Ae 8/14', beiname: 'Landi-Lok', typ: 'Elektrische Doppellokomotive (historisch)',
    text: ['Die Ae 8/14 sind riesige Doppellokomotiven für den Gotthard. Es entstanden nur drei Stück; die Nummer 11852 wurde an der Landesausstellung 1939 gezeigt und heisst deshalb «Landi-Lok».'],
    daten: { 'Antrieb': 'elektrisch', 'Anzahl': '3 (11801, 11851, 11852)', 'In Betrieb seit': '1931', 'Einsatz': 'Gotthard' },
    art: { typ: 'lok', form: 'kantig', achsen: 6, farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-ae814-c1.jpg', titel: 'Ae 8/14 11801 in Biasca', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:11_FFS_Ae_8-14_11801_Biasca_170417.jpg' },
      { src: 'bilder/h-ae814-c2.jpg', titel: 'Ae 8/14 11852 «Landi-Lok» im Verkehrshaus', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:C2.06a_Lokomotive_Ae_8-14_11852.jpg' },
      { src: 'bilder/h-ae814-c3.jpg', titel: 'Fabrikneue Ae 8/14 11851 auf der Kerstelenbachbrücke, 1932', foto: 'Unknown authorUnknown author', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Fabrikneue_SBB_Ae_8_14_11851_auf_der_Kerstelenbachbr%C3%BCcke,_1932.jpg' },
      { src: 'bilder/h-ae814-c4.jpg', titel: 'Ae 8/14 11801 bei einer Sonderfahrt', foto: 'Peter Alder', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ae_8_14_11801_Rail_Top.jpg' },
      { src: 'bilder/h-ae814-c5.jpg', titel: 'Ae 8/14 11801 in Bellinzona', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Ae_8-14_Nr._11801_in_Bellinzona.jpg' }
    ] },
  { id: 'h-be46', kat: 'historisch', name: 'Be 4/6', beiname: '', typ: 'Frühe elektrische Lokomotive (historisch)',
    text: ['Eine der ersten elektrischen Streckenlokomotiven der SBB für die Gotthardlinie.'],
    daten: { 'Antrieb': 'elektrisch, Stangenantrieb', 'In Betrieb seit': '1920', 'Einsatz': 'Gotthard' },
    art: { typ: 'lok', form: 'kantig', farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-be46-c1.jpg', titel: 'Be 4/6 12320 neben dem RAe TEE II 1053', foto: 'Fabien Perissinotto', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Be_4-6_12320_and_RAe_TEE_II_1053.JPG' },
      { src: 'bilder/h-be46-c2.jpg', titel: 'Be 4/6 von SBB Historic zwischen Rämismühle-Zell und Rikon', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Historic_Be_4-6_zwischen_R%C3%A4mism%C3%BChle-Zell_und_Rikon.jpg' },
      { src: 'bilder/h-be46-c3.jpg', titel: 'Be 4/6 12320', foto: 'St.Hinni', lizenz: 'CC BY 2.5', lizenzUrl: 'https://creativecommons.org/licenses/by/2.5', quelle: 'https://commons.wikimedia.org/wiki/File:SBB-Be4-6-12320a.jpg' },
      { src: 'bilder/h-be46-c4.jpg', titel: 'Be 4/6 bei Rämismühle', foto: 'SchmalspurDVZO', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Be_4-6_Rehbock_R%C3%A4mism%C3%BChle.jpg' },
      { src: 'bilder/h-be46-c5.jpg', titel: 'Be 4/6 12339', foto: 'Davide Oliva', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Be_4_6_12339.jpg' }
    ] },
  { id: 'h-re44i', kat: 'historisch', name: 'Re 4/4 I', beiname: '', typ: 'Leichte elektrische Schnellzuglokomotive (historisch)',
    text: ['Die Re 4/4 I war eine leichte, schnelle Lok für Schnell- und Pendelzüge. Später zog sie oft Regionalzüge.'],
    daten: { 'Achsfolge': 'Bo′Bo′', 'Antrieb': 'elektrisch', 'Höchstgeschwindigkeit': '125 km/h', 'Anzahl': '50', 'In Betrieb seit': '1946' },
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: '#3E5A3B', panto: true }, bilder: [
      { src: 'bilder/h-re44i-c1.jpg', titel: 'Re 4/4 I 10029 in Stein am Rhein (1991)', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:10.02.91_Stein_am_Rhein_SBB_Re4_4%C2%B9_10029_(5943276027).jpg' },
      { src: 'bilder/h-re44i-c2.jpg', titel: 'Re 4/4 I 10019', foto: 'MPW57 at de.wikipedia', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:4_I_10019.jpg' },
      { src: 'bilder/h-re44i-c3.jpg', titel: 'Re 4/4 I (als Re 410 009) bei Zürich, 2015', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Classic_Rail_Re_410_009_bei_Z%C3%BCrich_(2015).jpg' },
      { src: 'bilder/h-re44i-c4.jpg', titel: 'Re 4/4 I 10019 in Basel Badischer Bahnhof', foto: 'Fabien Perissinotto', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CBB_Re_4-4_I_10019_-_Basel_Badischer_Bahnhof,_27th_May_2012.JPG' },
      { src: 'bilder/h-re44i-c5.jpg', titel: 'Re 4/4 I 10032 in České Velenice', foto: 'Bernhard Graf ÖMT', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:2023-05-28_Cesk%C3%A9_Velenice_SBB_Re_4%274_10032.jpg' }
    ] },
  { id: 'h-tee', kat: 'historisch', name: 'RAe TEE II', beiname: 'Gottardo', typ: 'Vierstrom-Triebzug für den TEE-Verkehr (historisch)',
    text: ['Elegante Triebzüge für den internationalen Trans-Europ-Express, unter anderem als «Gottardo» zwischen Basel/Zürich und Mailand. Sie fuhren unter vier Stromsystemen.'],
    daten: { 'Antrieb': 'elektrisch, vier Stromsysteme', 'Anzahl': '5', 'In Betrieb seit': '1961', 'Einsatz': 'Trans-Europ-Express' },
    art: { typ: 'triebzug', nase: 'lang', farbe: '#C9C2B0', akzent: '#7A1F1F', tuer: '#7A1F1F', panto: true }, bilder: [
      { src: 'bilder/h-tee-c1.jpg', titel: 'RAe TEE II am Bahnsteig', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2007_0606_125GOT_SBB_00043.jpg' },
      { src: 'bilder/h-tee-c2.jpg', titel: 'RAe TEE II in Zürich HB, 1963', foto: 'Heinz Baumann', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_Com_C12-127-001-003_FFS_RAe_TEE_II_Zuerich_HB_1963.jpg' },
      { src: 'bilder/h-tee-c3.jpg', titel: 'Front des RAe TEE II', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2007_0606_125GOT_SBB_00115.jpg' },
      { src: 'bilder/h-tee-c4.jpg', titel: 'RAe TEE II unterwegs', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2007_0606_125GOT_SBB_00089.jpg' },
      { src: 'bilder/h-tee-c5.jpg', titel: 'RAe TEE II in Zürich HB, 1963', foto: 'Heinz Baumann', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_Com_C12-127-001-006_FFS_RAe_TEE_II_Zuerich_HB_1963.jpg' }
    ] },
  { id: 'h-roterpfeil', kat: 'historisch', name: 'RCe 2/4', beiname: 'Roter Pfeil', typ: 'Leichttriebwagen (historisch)',
    text: ['Die «Roten Pfeile» waren schnelle Leichttriebwagen der 1930er-Jahre, später beliebt für Ausflugs- und Extrafahrten.'],
    daten: { 'Antrieb': 'elektrisch', 'In Betrieb seit': '1935', 'Einsatz': 'Schnelle Verbindungen, später Ausflugsfahrten' },
    art: { typ: 'triebzug', nase: 'lang', farbe: RED, akzent: '#F3F4F2', tuer: '#8E1A1F', panto: true }, bilder: [
      { src: 'bilder/h-roterpfeil-c2.jpg', titel: 'Roter Pfeil RCe 2/4 203', foto: 'Martin Sauter', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_RCe_2-4_203_Roter_Pfeil_02.jpg' }
    ] },
  { id: 'h-a35', kat: 'historisch', name: 'A 3/5', beiname: '', typ: 'Dampf-Schnellzuglokomotive (historisch)',
    text: ['Schnellzug-Dampflokomotive aus der Anfangszeit der SBB.'],
    daten: { 'Antrieb': 'Dampf', 'Einsatz': 'Schnellzüge' },
    art: { typ: 'lok', form: 'kantig', farbe: '#1C1F22', panto: false }, bilder: [
      { src: 'bilder/h-a35-c1.jpg', titel: 'A 3/5 705 neben der Ae 3/6 I 10694 in Arnex-sur-Orbe, 1967', foto: 'Hans-Peter Bärtschi', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:ETH-BIB_SIK_01-003226_FFS_A_3-5_705_Ae_3-6_I_10694_Arnex-sur-Orbe_230967.jpg' }
    ] },
  { id: 'h-c56', kat: 'historisch', name: 'C 5/6', beiname: 'Elefant', typ: 'Dampf-Güterzuglokomotive (historisch)',
    text: ['Die «Elefanten» waren die stärksten Dampflokomotiven der SBB und zogen schwere Güterzüge am Gotthard.'],
    daten: { 'Antrieb': 'Dampf', 'In Betrieb seit': '1913', 'Einsatz': 'Güterzüge am Gotthard' },
    art: { typ: 'lok', form: 'kantig', farbe: '#1C1F22', panto: false }, bilder: [
      { src: 'bilder/h-c56-c1.jpg', titel: 'C 5/6 2958 im Locorama', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:C_5-6_2958_Locorama.jpg' },
      { src: 'bilder/h-c56-c2.jpg', titel: 'C 5/6 2965 von 1916', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:1916_2-10-0_Erstfeld_No_2965.jpg' },
      { src: 'bilder/h-c56-c3.jpg', titel: 'C 5/6 2965, gebaut von SLM', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:2965_SLM_2-10-0.jpg' },
      { src: 'bilder/h-c56-c4.jpg', titel: 'C 5/6 «Elefant» im Detail', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2007_0606_125GOT_SBB_00023.jpg' },
      { src: 'bilder/h-c56-c5.jpg', titel: 'Schilder der C 5/6 2965 «Erstfeld»', foto: 'kitmasterbloke', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:2965_Erstfeld_plates.jpg' }
    ] },
  { id: 'h-eb35', kat: 'historisch', name: 'Eb 3/5', beiname: 'Habersack', typ: 'Dampf-Tenderlokomotive (historisch)',
    text: ['Tenderlokomotive für Personenzüge im Regionalverkehr, wegen ihrer Form «Habersack» genannt.'],
    daten: { 'Antrieb': 'Dampf', 'Einsatz': 'Personenzüge im Regionalverkehr' },
    art: { typ: 'lok', form: 'kantig', kurz: true, farbe: '#1C1F22', panto: false }, bilder: [
      { src: 'bilder/h-eb35-c1.jpg', titel: 'Eb 3/5 in Bremgarten West', foto: 'Bobo11', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bremgarten_West_SBB_Eb_3-5_P6A7389.JPG' },
      { src: 'bilder/h-eb35-c2.jpg', titel: 'Eb 3/5 5810 (2018)', foto: 'Markus Eigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_Eb_3_5_5810_2018-09-09.jpg' },
      { src: 'bilder/h-eb35-c3.jpg', titel: 'Eb 3/5 5885', foto: 'Unknown authorUnknown author', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:5885Eb35SBBCFFFFSi.jpg' },
      { src: 'bilder/h-eb35-c4.jpg', titel: 'Eb 3/5 «Habersack»', foto: 'user:bobo11', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB-Eb3-5-U163278.JPG' },
      { src: 'bilder/h-eb35-c5.jpg', titel: 'Eb 3/5 im Fahrzeugporträt', foto: 'Unknown authorUnknown author', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:BT-Eb-3-5Nr9.jpg' }
    ] },
  { id: 'h-mirage', kat: 'historisch', name: 'RABDe 12/12', beiname: 'Mirage', typ: 'Elektrischer Triebzug (historisch)',
    text: ['Die «Mirage» war ein dreiteiliger Triebzug für den Vorortsverkehr am rechten Zürichseeufer.'],
    daten: { 'Antrieb': 'elektrisch', 'Einsatz': 'Vorortsverkehr Zürich' },
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#3E5A3B', akzent: '#C9C2B0', tuer: '#2E3338', panto: true }, bilder: [
      { src: 'bilder/h-mirage-c1.jpg', titel: 'RABDe 12/12 «Mirage» in Rot', foto: 'Peter Alder', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Swiss_Rail_SBB_RABDe_12_12_Mirage.jpg' },
      { src: 'bilder/h-mirage-c2.jpg', titel: 'RABDe 12/12 «Mirage» im Jahr 1983', foto: 'ETH-Bibliothek Zürich, Bildarchiv / Fotograf: Comet Photo AG (Zürich) / Com_LC1943-001-021 / CC BY-SA 4.0', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_multiple_unit_RABDe_12-12_in_1983_(Com_LC1943-001-021).jpg' },
      { src: 'bilder/h-mirage-c3.jpg', titel: '«Mirage» in der späteren NPZ-Farbe', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Mirage-Portrait.jpg' },
      { src: 'bilder/h-mirage-c4.jpg', titel: '«Mirage» als RABDe 510', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:SBB_RABDe_510.jpg' },
      { src: 'bilder/h-mirage-c5.jpg', titel: 'Zwei «Mirage» an der Goldküste am Zürichsee', foto: 'Kabelleger / David Gubler (http://www.bahnbilder.ch)', lizenz: 'Public domain', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Mirages_an_der_Goldk%C3%BCste.jpg' }
    ] },
  { id: 'h-rbe540', kat: 'historisch', name: 'RBe 540', beiname: 'RBe 4/4', typ: 'Elektrischer Triebwagen (historisch)',
    text: ['Vierachsiger Triebwagen, der mit Steuerwagen als Pendelzug im Regionalverkehr fuhr.'],
    daten: { 'Achsfolge': 'Bo′Bo′', 'Antrieb': 'elektrisch', 'Einsatz': 'Regionalverkehr, Pendelzüge' },
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#3E5A3B', akzent: '#C9C2B0', tuer: '#2E3338', panto: true }, bilder: [
      { src: 'bilder/h-rbe540-c1.jpg', titel: 'RBe 540 007', foto: 'Lord Koxinga', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:2012_08_16_RBe_540_007.jpg' },
      { src: 'bilder/h-rbe540-c2.jpg', titel: 'RBe 540 060 in Chur', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_RBe_540_060-1_Chur_120513_IC10792_Ch-Zue.jpg' },
      { src: 'bilder/h-rbe540-c3.jpg', titel: 'RBe 4/4 in grüner Farbe bei Tägerwilen', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'http://creativecommons.org/publicdomain/zero/1.0/deed.en', quelle: 'https://commons.wikimedia.org/wiki/File:DSF_RBe_4-4_T%C3%A4gerwilen.jpg' },
      { src: 'bilder/h-rbe540-c4.jpg', titel: 'RBe 540 neben einer Re 4/4 II in Winterthur', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Bahnhof_Winterthur_mit_SBB_RBe_540_%26_Re_4-4_II_(2010).jpg' },
      { src: 'bilder/h-rbe540-c5.jpg', titel: 'RBe 540 020 in Zürich HB', foto: 'NAC', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:FFS_RBe_540020-5_ZuerichHB_211214.jpg' }
    ] }
];
