/* RailBase – Fahrzeuge von transN (Transports Publics Neuchâtelois). Gleiche Form wie fahrzeuge.js, mit bahn: 'transn'. */
'use strict';

/* =====================================================================
   transN (Transports Publics Neuchâtelois)
   Grundlage: Dossier von HCKD (Oktober 2026), geprüft mit den
   Flottenseiten von transN (Normalspur und Schmalspur), dem
   Netzzustandsbericht 2023 und Wikipedia (CMN, Trogenerbahn, Littorail).
   Korrigiert: Littorail-Züge kamen ab April 2019 nach Neuchâtel; die Linie
   Le Locle–Les Brenets fährt laut Entscheid von Ende 2023 bis mindestens 2031.
   ===================================================================== */
const TRN_ROT = '#D2232A', TRN_GRAU = '#3A4047';
ZUEGE.push(
  // ---------- Personenverkehr ----------
  { id: 'trn-rabe-523', kat: 'personenverkehr', name: 'RABe 523', beiname: 'FLIRT', typ: 'Vierteiliger Stadler FLIRT für Neuchâtel und den Jurabogen', bahn: 'transn', vorlaeufig: false,
    text: ['Die vier FLIRT RABe 523 sind die neuesten Normalspurzüge von transN. Sie fahren auf den Linien Neuchâtel–Buttes und Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Zusammen mit den drei älteren RABe 527 hat transN sieben FLIRT.'],
    kennzahlen: [['4', 'Züge (074–077)'], ['160 km/h', 'Höchstgeschwindigkeit'], ['149', 'Sitzplätze'], ['2017', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrischer Niederflurtriebzug, 4 Wagen', 'Fahrzeugfamilie': 'FLIRT', 'Hersteller': 'Stadler', 'Betreiber': 'transN', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': '523 074–077', 'Länge': '74 m', 'Breite': '2,88 m', 'Gewicht': '127 t leer', 'Leistung': '2600 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '24 in der 1., 125 in der 2. Klasse', 'Anzahl': '4 Züge', 'In Betrieb seit': '2017' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte transN vier vierteilige FLIRT der Baureihe RABe 523 mit den Nummern 523 074–077; transN nennt das Jahr 2017. Zusammen mit den drei RABe 527 hat transN sieben FLIRT im Personenverkehr.'] },
      { titel: 'Einsatz und Technik', p: ['Die Züge fahren auf den transN-Linien R21 Neuchâtel–Buttes und R23 Neuchâtel–La Chaux-de-Fonds–Le Locle. Unterhalten werden sie unter anderem im Depot Fleurier.', 'Ein Zug ist 74 m lang und 2,88 m breit, wiegt 127 t, leistet 2600 kW und fährt bis 160 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['149 Sitzplätze: 24 in der 1. und 125 in der 2. Klasse', 'Niederflureinstiege wie bei allen FLIRT'],
        p: ['Weitere Angaben zur Ausstattung, etwa zu Rollstuhlplätzen oder zum WC, veröffentlicht transN auf der Flottenseite nicht.'] }
    ],
    quellen: ['transN – Flotte: Trains voie normale, FLIRT RABe 523', 'Wikimedia Commons – Fotos RABe 523 074 und 076', 'Dossier HCKD «transN – Alle Züge und Infrastruktur», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: TRN_ROT, tuer: TRN_GRAU, panto: true },
    bilder: [
      { src: 'bilder/trn-rabe-523-c1.jpg', titel: 'RABe 523 074 als RegioExpress nach Le Locle in La Chaux-de-Fonds (2018)', foto: 'JoachimKohler-HB', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Trans_N_Regionalexpress_nach_Le_Locle_in_La_Chaux-de-Fonds.jpg' },
      { src: 'bilder/trn-rabe-523-c2.jpg', titel: 'RABe 523 zwischen Le Crêt-du-Locle und Le Locle (2018)', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:TransN_Flirt.jpg' },
      { src: 'bilder/trn-rabe-523-c3.jpg', titel: 'RABe 523 076 (2019)', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:RABe_523_076.jpg' }
    ] },
  { id: 'trn-rabe-527', kat: 'personenverkehr', name: 'RABe 527', beiname: 'FLIRT', typ: 'Vierteiliger Stadler FLIRT der ersten transN-Serie', bahn: 'transn', vorlaeufig: false,
    text: ['Die drei RABe 527 sind die ältere FLIRT-Serie von transN. Sie kamen 2007 bis 2009 noch zu den Transports Régionaux Neuchâtelois (TRN), die heute zu transN gehören.', 'Sie fahren zusammen mit den neueren RABe 523.'],
    kennzahlen: [['3', 'Züge (331–333)'], ['160 km/h', 'Höchstgeschwindigkeit'], ['184', 'Sitzplätze'], ['2007', 'erster Einsatz']],
    daten: { 'Bauart': 'Elektrischer Niederflurtriebzug, 4 Wagen', 'Fahrzeugfamilie': 'FLIRT', 'Hersteller': 'Stadler', 'Betreiber': 'transN, früher TRN', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': '527 331–333', 'Länge': '74 m', 'Breite': '2,88 m', 'Gewicht': '120 t leer', 'Leistung': '2600 kW', 'Höchstgeschwindigkeit': '160 km/h', 'Sitzplätze': '24 in der 1., 160 in der 2. Klasse', 'Anzahl': '3 Züge', 'In Betrieb seit': '2007' },
    specOrder: ['Bauart', 'Fahrzeugfamilie', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'transN nennt die Jahre 2007–2009. Nicht verwechseln mit den RABe 527 der TPF oder der SBB.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte die drei Züge von 2007 bis 2009, damals für die TRN. Seit dem Zusammenschluss 2012 gehören sie zu transN. Auf Fotos sind die Nummern 527 331–333 belegt.'] },
      { titel: 'Einsatz und Technik', p: ['Die Züge fahren wie die RABe 523 auf den Linien R21 Neuchâtel–Buttes und R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Ein Zug ist 74 m lang und 2,88 m breit, wiegt 120 t, leistet 2600 kW und fährt bis 160 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['184 Sitzplätze: 24 in der 1. und 160 in der 2. Klasse', 'Niederflureinstiege'],
        p: ['Weitere Angaben zur Ausstattung veröffentlicht transN auf der Flottenseite nicht.'] }
    ],
    quellen: ['transN – Flotte: Trains voie normale, FLIRT RABe 527', 'Wikimedia Commons – Fotos RABe 527 331 und 332', 'Dossier HCKD «transN – Alle Züge und Infrastruktur», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'mittel', farbe: W1, akzent: TRN_ROT, tuer: TRN_GRAU, panto: true },
    bilder: [
      { src: 'bilder/trn-rabe-527-c1.jpg', titel: 'RABe 527 331 in Le Locle (2016)', foto: 'flybyeigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:TransN_Flirt_RABe_527_331_-_Le_Locle_(28569273191).jpg' },
      { src: 'bilder/trn-rabe-527-c2.jpg', titel: 'RABe 527 331 in La Chaux-de-Fonds (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20240925E192_RABe94850_527331-8_CH-TRN.jpg' },
      { src: 'bilder/trn-rabe-527-c3.jpg', titel: 'RABe 527 331 in La Chaux-de-Fonds (2016)', foto: 'flybyeigenheer', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:TransN_Flirt_RABe_527_331_-_La_Chaux-de-Fonds_(28541249452).jpg' }
    ] },
  { id: 'trn-be-4-8', kat: 'personenverkehr', name: 'Be 4/8', beiname: 'Littorail', typ: 'Dreiteiliger Stadler-Gelenktriebwagen der Littorail-Linie (ex Trogenerbahn)', bahn: 'transn', vorlaeufig: false,
    text: ['Auf der Littorail-Linie von Neuchâtel nach Boudry fahren fünf dreiteilige Gelenktriebwagen von Stadler. Sie stammen von der Trogenerbahn bei St. Gallen.', 'transN nennt sie «GTW 4/8», historisch heissen sie Be 4/8.'],
    kennzahlen: [['5', 'Züge (031–035)'], ['80 km/h', 'Höchstgeschwindigkeit'], ['259', 'Plätze insgesamt'], ['2019', 'bei transN']],
    daten: { 'Bauart': 'Dreiteiliger Gelenktriebwagen mit Niederflurbereichen', 'Bezeichnung bei transN': 'GTW 4/8', 'Hersteller': 'Stadler', 'Betreiber': 'transN, früher Trogenerbahn und Appenzeller Bahnen', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '600 V Gleichstrom', 'Fahrzeugnummern': '031–035', 'Länge': '36,3 m', 'Breite': '2,40 m', 'Gewicht': '47,3 t leer', 'Leistung': '432 kW', 'Höchstgeschwindigkeit': '80 km/h', 'Sitzplätze': '259 Plätze insgesamt', 'Anzahl': '5 Züge', 'In Betrieb seit': '2004 (bei transN seit 2019)' },
    specOrder: ['Bauart', 'Bezeichnung bei transN', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Die technischen Werte sind die heutigen Angaben von transN; alte Datenblätter der Trogenerbahn weichen teils ab. Die 259 Plätze umfassen Sitz- und Stehplätze.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler baute die fünf Züge für die Trogenerbahn St. Gallen–Trogen: 31 und 32 im Jahr 2004, 33 bis 35 im Jahr 2008. Später fuhren sie bei den Appenzeller Bahnen.', 'transN kaufte die fünf Züge 2018 für rund 8 Millionen Franken. Der erste, die 032, kam am 9. April 2019 nach Neuchâtel.'] },
      { titel: 'Einsatz und Technik', p: ['Die Züge fahren auf der Littorail-Linie R15 von Neuchâtel Place Pury nach Boudry. Dort lösten sie die Triebwagen Be 4/4 501–506 aus den Jahren 1981 und 1988 ab.', 'Ein Zug ist 36,3 m lang, wiegt 47,3 t, leistet 432 kW und fährt bis 80 km/h. Die Fahrleitung führt Gleichstrom mit 600 V.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Dreiteiliger Gelenktriebwagen mit Niederflurbereichen', '259 Plätze insgesamt, Sitz- und Stehplätze zusammen'],
        p: ['Zu Rollstuhlplätzen und weiterer Ausstattung macht transN auf der Flottenseite keine Angaben.'] }
    ],
    quellen: ['transN – Flotte: Trains voie étroite, GTW 4/8', 'Wikipedia – Trogenerbahn, Rollmaterial', 'Wikipedia (fr) – Tramway de Neuchâtel, Littorail', 'Wikimedia Commons – Kategorie «AB Be 4/8 31-35 → TransN Be 4/8»', 'Dossier HCKD «transN – Alle Züge und Infrastruktur», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: TRN_ROT, tuer: TRN_GRAU, panto: true },
    bilder: [
      { src: 'bilder/trn-be-4-8-c1.jpg', titel: 'Be 4/8 033 bei der Einfahrt in Boudry (2021)', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TransN_Be_4_8_033.jpg' },
      { src: 'bilder/trn-be-4-8-c2.jpg', titel: 'Be 4/8 034 in Boudry Littorail (2025)', foto: 'Zwantzig', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Boudry_Littorail_20250209_152624.jpg' },
      { src: 'bilder/trn-be-4-8-c3.jpg', titel: 'Be 4/8 035, ex Trogenerbahn (2021)', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TransN_Be_4_8_035.jpg' },
      { src: 'bilder/trn-be-4-8-c4.jpg', titel: 'Be 4/8 035 in Neuchâtel Place Pury (2025)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20250721E392_035.jpg' }
    ] },
  { id: 'trn-abe-4-8', kat: 'personenverkehr', name: 'ABe 4/8', beiname: '9 und 10', typ: 'Zweiteiliger Stadler-Triebzug für La Chaux-de-Fonds–Les Ponts-de-Martel', bahn: 'transn', vorlaeufig: false,
    text: ['Seit 2024 fahren zwei neue Triebzüge von Stadler zwischen La Chaux-de-Fonds und Les Ponts-de-Martel. Sie tragen die Nummern 9 und 10.', 'Sie lösten die alten Hochflur-Triebwagen ab und bringen einen niederflurigen Einstieg.'],
    kennzahlen: [['2', 'Züge (9, 10)'], ['80 km/h', 'Höchstgeschwindigkeit'], ['237', 'Plätze insgesamt'], ['2024', 'erster Einsatz']],
    daten: { 'Bauart': 'Zweiteiliger elektrischer Triebzug', 'Hersteller': 'Stadler', 'Betreiber': 'transN', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1500 V Gleichstrom', 'Fahrzeugnummern': '9 und 10', 'Länge': '39 m', 'Breite': '2,65 m', 'Gewicht': '67,1 t leer', 'Leistung': '1600 kW', 'Höchstgeschwindigkeit': '80 km/h', 'Sitzplätze': '237 Plätze insgesamt', 'Anzahl': '2 Züge', 'In Betrieb seit': '2024' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Ein frühes Projektblatt nannte 39,30 m und 55 t. Hier gelten die heutigen Werte von transN.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler baute die zwei Züge 9 und 10; sie gingen 2024 in Betrieb. Sie lösten die Triebwagen BDe 4/4 6 und 7 von 1991 und 8 von 1996 ab, die hohe Einstiege hatten.'] },
      { titel: 'Einsatz und Technik', p: ['Die Züge fahren auf der R22 La Chaux-de-Fonds–Les Ponts-de-Martel. Die Fahrleitung führt Gleichstrom mit 1500 V.', 'Ein Zug ist 39 m lang und 2,65 m breit, wiegt 67,1 t, leistet 1600 kW und fährt bis 80 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Niederfluriger Einstieg', '237 Plätze insgesamt, Sitz- und Stehplätze zusammen', 'Zwei Wagenkästen'],
        p: ['Mit dem niederflurigen Einstieg ist die Strecke viel besser zugänglich als mit den alten Hochflur-Triebwagen.'] }
    ],
    quellen: ['transN – Flotte: Trains voie étroite, ABe 4/8', 'Kanton Neuenburg – Neue Züge für La Chaux-de-Fonds–Les Ponts-de-Martel ab 2024', 'Wikipedia – Chemins de fer des Montagnes Neuchâteloises, Rollmaterial', 'Dossier HCKD «transN – Alle Züge und Infrastruktur», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: TRN_ROT, tuer: TRN_GRAU, panto: true },
    bilder: [
      { src: 'bilder/trn-abe-4-8-c1.jpg', titel: 'ABe 4/8 9 (2024)', foto: 'Heitersberg', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TransN_ABe_4_8_09.jpg' },
      { src: 'bilder/trn-abe-4-8-c2.jpg', titel: 'ABe 4/8 10 in La Chaux-de-Fonds (2024)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20240925E187_10.jpg' }
    ] },
  { id: 'trn-bde-4-4', kat: 'personenverkehr', name: 'BDe 4/4', beiname: '3 und 5', typ: 'Triebwagen von 1950 für Le Locle–Les Brenets', bahn: 'transn', vorlaeufig: false,
    text: ['Die zwei Triebwagen von 1950 fahren auf der kurzen Strecke von Le Locle nach Les Brenets. In den 1980er-Jahren wurden sie modernisiert.', 'Die Bahn fährt laut Entscheid von Ende 2023 mindestens bis 2031 weiter.'],
    kennzahlen: [['2', 'Triebwagen (3, 5)'], ['60 km/h', 'Höchstgeschwindigkeit'], ['146', 'Plätze insgesamt'], ['1950', 'gebaut']],
    daten: { 'Bauart': 'Elektrischer Triebwagen mit Gepäckabteil', 'Hersteller': 'Reggiane, TIBB, SAAS', 'Betreiber': 'transN, früher RdB und CMN', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1500 V Gleichstrom', 'Fahrzeugnummern': '3 und 5', 'Länge': '16,6 m', 'Breite': '2,68 m', 'Gewicht': '24 t leer', 'Leistung': '480 kW', 'Höchstgeschwindigkeit': '60 km/h', 'Sitzplätze': '42 Sitzplätze, 146 Plätze insgesamt', 'Anzahl': '2', 'In Betrieb seit': '1950' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Breite', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Reggiane in Italien baute die Triebwagen 1950, mit Ausrüstung von TIBB und SAAS. Ramseier & Jenzer in Biel modernisierte die 3 in den Jahren 1985/86 und die 5 1986/87. transN führt heute diese zwei Triebwagen.'] },
      { titel: 'Einsatz und Technik', p: ['Die Triebwagen fahren auf der R24, der gut 4 km langen Strecke Le Locle–Les Brenets. 2020 planten Kanton und Gemeinden, die Bahn ab 2025 durch einen Bus zu ersetzen; Ende 2023 wurde entschieden, dass die Züge mindestens bis 2031 weiterfahren.', 'Ein Triebwagen ist 16,6 m lang, wiegt 24 t, leistet 480 kW und fährt bis 60 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['146 Plätze insgesamt, Sitz- und Stehplätze zusammen', 'Gepäckabteil (Buchstabe D)', 'Hohe Einstiege mit Stufen'] }
    ],
    quellen: ['transN – Flotte: Trains voie étroite, BDe 4/4', 'Wikipedia – Chemins de fer des Montagnes Neuchâteloises, Rollmaterial', 'Wikipedia (fr) – Ligne du Locle aux Brenets', 'Dossier HCKD «transN – Alle Züge und Infrastruktur», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: W1, akzent: TRN_ROT, tuer: TRN_GRAU, panto: true },
    bilder: [
      { src: 'bilder/trn-bde-4-4-c1.jpg', titel: 'BDe 4/4 5 verlässt den Tunnel Petits-Monts bei Le Locle (2020)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:TransN_BDe_5_Le_Locle_20200620E167.jpg' },
      { src: 'bilder/trn-bde-4-4-c2.jpg', titel: 'BDe 4/4 5 in Les Brenets (2018)', foto: 'Plutowiki', lizenz: 'CC0', lizenzUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', quelle: 'https://commons.wikimedia.org/wiki/File:TransN_BDe_4-4_5.jpg' },
      { src: 'bilder/trn-bde-4-4-c3.jpg', titel: 'BDe 4/4 5 der CMN in Les Brenets (1998)', foto: 'Phil Richards from London, UK', lizenz: 'CC BY-SA 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:10.11.98_Les_Brenets_CMN_5_(32964911200).jpg' }
    ] },
  // ---------- Infrastruktur ----------
  { id: 'trn-tm-44-normal', kat: 'infrastruktur', name: 'Tm 4/4', beiname: '235 077 Normalspur', typ: 'Dieselelektrischer Baudiensttraktor von Stadler', bahn: 'transn', vorlaeufig: false,
    text: ['transN hat zwei moderne Baudiensttraktoren Tm 4/4 von Stadler, einen für die Normalspur und einen für die Meterspur. Dieser hier, der Tm 235 077, arbeitet seit 2023 auf dem Normalspurnetz.', 'Er hat einen Kran und eine Ladefläche für Material.'],
    kennzahlen: [['1', 'Fahrzeug (235 077)'], ['80 km/h', 'Höchstgeschwindigkeit (Bauart)'], ['480 kW', 'Motorleistung (Bauart)'], ['2023', 'erster Einsatz']],
    daten: { 'Bauart': 'Dieselelektrischer Baudiensttraktor mit Kran', 'Hersteller': 'Stadler', 'Betreiber': 'transN', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'Tm 235 077 (98 85 5 235 077-5)', 'Motor': 'Mercedes-Benz OM 473 (Bauart)', 'Länge': '18,0 m (Bauart)', 'Gewicht': '52 t (Bauart)', 'Leistung': '480 kW (Bauart)', 'Höchstgeschwindigkeit': '80 km/h (Bauart)', 'Anzahl': '1', 'In Betrieb seit': '2023' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Motor', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte mit «Bauart» beschreiben die Fahrzeugfamilie nach der Schweizer Eisenbahn-Revue 3/2023. Die Betriebsvorschrift nennt für diesen Traktor 60 t in der Zugtabelle; der Grund für den Unterschied ist nicht geklärt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['transN bestellte im Mai 2021 gemeinsam mit TRAVYS und NStCM vier verwandte Fahrzeuge bei Stadler; je eine Normal- und eine Meterspurmaschine waren für transN bestimmt. Beide kamen 2023.', 'Der Normalspur-Traktor trägt die Nummer 98 85 5 235 077-5, kurz Tm 235 077. Er ist nicht mit dem alten Tm 237 312 zu verwechseln.'] },
      { titel: 'Einsatz und Technik', p: ['Der Traktor dient dem Bau, dem Unterhalt und dem Materialtransport auf dem Normalspurnetz von transN, etwa auf der Strecke Travers–Buttes.', 'Die Bauart ist dieselelektrisch: Ein Mercedes-Benz-Motor OM 473 mit 480 kW liefert Strom für vier Fahrmotoren. Der Traktor ist 18,0 m lang, wiegt 52 t und fährt bis 80 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kran von Palfinger mit bis 17 m Reichweite (Bauart)', 'Ladeplattform für 12 t, Transport von Schienen bis 15 m (Bauart)', 'Funkfernsteuerung (Bauart)', 'Kein Fahrgastraum'] }
    ],
    quellen: ['transN – Geschäftsbericht 2025', 'Schweizer Eisenbahn-Revue 3/2023 – Stadler Tm 4/4', 'Dossier HCKD «transN – Alle Züge und Infrastruktur», Oktober 2026'],
    art: { typ: 'rangier', farbe: YEL, panto: false, kran: true },
    bilder: [] },
  { id: 'trn-tm-44-meter', kat: 'infrastruktur', name: 'Tm 4/4', beiname: '012 Meterspur', typ: 'Dieselelektrischer Baudiensttraktor von Stadler für die Meterspur', bahn: 'transn', vorlaeufig: false,
    text: ['Der meterspurige Tm 4/4 012 ging 2023 bei transN in Betrieb. Er arbeitet im Baudienst auf den Meterspurlinien.', 'Er ist die Schwester des Normalspur-Traktors gleicher Bauart.'],
    kennzahlen: [['1', 'Fahrzeug (012)'], ['80 km/h', 'Höchstgeschwindigkeit (Bauart)'], ['480 kW', 'Motorleistung (Bauart)'], ['2023', 'erster Einsatz']],
    daten: { 'Bauart': 'Dieselelektrischer Baudiensttraktor mit Kran', 'Hersteller': 'Stadler', 'Betreiber': 'transN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Tm 4/4 012 (90 85 8570 012-7)', 'Motor': 'Mercedes-Benz OM 473 (Bauart)', 'Länge': '18,0 m (Bauart)', 'Gewicht': '52 t (Bauart)', 'Leistung': '480 kW (Bauart)', 'Höchstgeschwindigkeit': '80 km/h (Bauart)', 'Anzahl': '1', 'In Betrieb seit': '2023' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Motor', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Werte mit «Bauart» beschreiben die Fahrzeugfamilie nach der Schweizer Eisenbahn-Revue 3/2023.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Stadler lieferte den Traktor; transN nahm ihn 2023 in Betrieb. Er trägt die Nummer 90 85 8570 012-7, kurz Tm 4/4 012.'] },
      { titel: 'Einsatz und Technik', p: ['Er arbeitet im Baudienst auf dem Meterspurnetz von transN, unter anderem auf der R22 La Chaux-de-Fonds–Les Ponts-de-Martel. Er bewegt Schienen, Baumaterial und Schotterwagen.', 'Die Bauart ist dieselelektrisch: Ein Mercedes-Benz-Motor OM 473 mit 480 kW liefert Strom für die Fahrmotoren. Der Traktor ist 18,0 m lang, wiegt 52 t und fährt bis 80 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kran von Palfinger mit bis rund 17 m Reichweite (Bauart)', 'Ladeplattform für 12 t (Bauart)', 'Kein Fahrgastraum'] }
    ],
    quellen: ['transN – Netzzustandsbericht 2023', 'transN – Geschäftsbericht 2025', 'Schweizer Eisenbahn-Revue 3/2023 – Stadler Tm 4/4', 'Dossier HCKD «transN – Alle Züge und Infrastruktur», Oktober 2026'],
    art: { typ: 'rangier', farbe: YEL, panto: false, kran: true },
    bilder: [] },
  // ---------- Historische und Spezialfahrzeuge (Dossier HCKD, 22. Oktober 2026) ----------
  { id: 'trn-tm-2-2-11', kat: 'infrastruktur', name: 'Tm 2/2', beiname: '11', typ: 'Zweiachsiger Diesel-Baudiensttraktor für die Meterspur', bahn: 'transn', vorlaeufig: false,
    text: ['Der Tm 2/2 11 ist ein kleiner Dieseltraktor von 1983 aus dem Bestand der früheren CMN. Er dient dem Bau und Unterhalt auf der Meterspur.', 'Die Fahrzeugtabelle von transN führt ihn 2024 für die Strecke La Chaux-de-Fonds–Les Ponts-de-Martel.'],
    kennzahlen: [['1983', 'gebaut'], ['175 kW', 'Motorleistung'], ['70 km/h', 'Höchstgeschwindigkeit'], ['19 t', 'Gewicht']],
    daten: { 'Bauart': 'Zweiachsiger Dieseltraktor', 'Hersteller': 'RACO (Typ 240 DT 4H)', 'Betreiber': 'transN, früher CMN und TRN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Tm 2/2 11', 'Gewicht': '19 t', 'Leistung': '175 kW', 'Höchstgeschwindigkeit': '70 km/h', 'Anzahl': '1', 'In Betrieb seit': '1983' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: '70 km/h ist die Höchstgeschwindigkeit des Fahrzeugs, nicht die erlaubte Geschwindigkeit bei Bauarbeiten. Ob der Traktor im Oktober 2026 noch einsatzbereit ist, ist nicht separat bestätigt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['RACO baute den Traktor 1983 als Typ 240 DT 4H für die Chemins de fer des Montagnes Neuchâteloises (CMN). Über die TRN kam er zu transN. Ein Foto von 1986 zeigt ihn in Les Ponts-de-Martel.', 'Er gehört zur Generation vor den vierachsigen Stadler-Traktoren; 2023 kam der viel grössere Tm 4/4 012 dazu.'] },
      { titel: 'Einsatz und Technik', p: ['Die Betriebsvorschrift Meterspur von transN (gültig ab 15. Dezember 2024) führt ihn für die Strecke La Chaux-de-Fonds–Les Ponts-de-Martel.', 'Beide Achsen sind angetrieben. Der Dieselmotor leistet 175 kW; der Traktor wiegt 19 t und fährt bis 70 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei angetriebene Achsen', '17 t Bremsgewicht', 'Kein Fahrgastraum'] }
    ],
    quellen: ['transN – Betriebsvorschriften Meterspur, gültig ab 15. Dezember 2024', 'Schweizer Eisenbahn-Revue 3/2023 – Baudienstfahrzeuge', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'rangier', klein: true, farbe: YEL, panto: false },
    bilder: [
      { src: 'bilder/trn-tm-2-2-11-c1.jpg', titel: 'Tm 2/2 11 der CMN in Les Ponts-de-Martel (1986)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Les_Ponts-de-Martel_CMN_Tm_11.jpg' }
    ] },
  { id: 'trn-tm-237-312', kat: 'infrastruktur', name: 'Tm 237', beiname: '312', typ: 'Zweiachsiger Diesel-Baudiensttraktor für die Normalspur', bahn: 'transn', vorlaeufig: false,
    text: ['Der Tm 237 312 ist ein kleiner Dieseltraktor von 1983 aus dem Bestand der RVT im Val-de-Travers. Früher hiess er Tm 2/2 12.', 'Er ist nicht mit dem neuen meterspurigen Tm 4/4 012 zu verwechseln.'],
    kennzahlen: [['1983', 'gebaut'], ['175 kW', 'Motorleistung'], ['19 t', 'Gewicht'], ['10 m', 'Länge']],
    daten: { 'Bauart': 'Zweiachsiger Dieseltraktor', 'Hersteller': 'RACO (Typ 240 DT 4H)', 'Betreiber': 'transN, früher RVT und TRN', 'Spurweite': 'Normalspur, 1435 mm', 'Fahrzeugnummern': 'Tm 237 312, früher Tm 2/2 12', 'Länge': '10 m (laut Zugtabelle)', 'Gewicht': '19 t', 'Leistung': '175 kW', 'Anzahl': '1', 'In Betrieb seit': '1983' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Länge und Gewicht stammen aus der Zugtabelle der transN-Betriebsvorschrift Normalspur vom April 2025. Ob der Traktor nach August 2025 noch eingesetzt wird, ist offen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['RACO baute den Traktor 1983 als Typ 240 DT 4H für den Régional du Val-de-Travers (RVT), wo er Tm 2/2 12 hiess. Über die TRN kam er zu transN und trägt heute die Nummer Tm 237 312.', 'Seit 2023 hat transN mit dem Tm 4/4 235 077 einen viel grösseren, vierachsigen Nachfolger.'] },
      { titel: 'Einsatz und Technik', p: ['Der Traktor wurde für Unterhalts- und Rangierarbeiten im Val-de-Travers genutzt. Ein Foto zeigt ihn 2016 in Fleurier, ein weiteres im August 2025 beim Depot Fleurier. Die Betriebsvorschrift Normalspur vom April 2025 führt ihn noch.', 'Der Dieselmotor leistet 175 kW. Laut Zugtabelle ist der Traktor 10 m lang und wiegt 19 t.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Zwei Achsen', '17 t Bremsgewicht, Bremsverhältnis 89 %', 'Kein Fahrgastraum'] }
    ],
    quellen: ['transN – Betriebsvorschriften Normalspur, gültig ab 1. April 2025', 'Schweizer Eisenbahn-Revue 3/2023 – Baudienstfahrzeuge', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'rangier', klein: true, farbe: YEL, panto: false },
    bilder: [
      { src: 'bilder/trn-tm-237-312-c1.jpg', titel: 'Tm 237 312 in Fleurier (2016)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20160706Y070_Tm237312_Fleurier.jpg' }
    ] },
  { id: 'trn-zweiwege', kat: 'infrastruktur', name: 'Zweiwegefahrzeuge', beiname: 'Dumper 102 und Bagger', typ: 'Schienen-Strassen-Fahrzeuge für den Bahnbau auf der Meterspur', bahn: 'transn', vorlaeufig: false,
    text: ['transN setzt auf den Meterspurstrecken zwei Zweiwegefahrzeuge ein: einen Dumper mit der Nummer 102 und einen Bagger. Beide fahren auf der Strasse und auf der Schiene.', 'Laut Betriebsvorschrift kamen beide 2021 in Betrieb.'],
    kennzahlen: [['2', 'Fahrzeuge'], ['2021', 'in Betrieb'], ['20 km/h', 'Dumper auf der Schiene'], ['16 km/h', 'Bagger auf der Schiene']],
    daten: { 'Bauart': 'Zweiwege-Dumper und Zweiwege-Bagger', 'Betreiber': 'transN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Dumper 102; der Bagger hat in der Tabelle keine Nummer', 'Gewicht': 'Dumper 14,5 t, Bagger 12 t (leer)', 'Höchstgeschwindigkeit': 'Dumper 20 km/h, Bagger 16 km/h (auf der Schiene)', 'Anzahl': '2', 'In Betrieb seit': '2021' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Gewicht', 'Höchstgeschwindigkeit', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Hersteller und Typ nennt die Betriebsvorschrift nicht. 14,5 t und 12 t sind Leergewichte; eine Nutzlast lässt sich daraus nicht ableiten.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Fahrzeugtabelle der Betriebsvorschrift Meterspur (gültig ab 15. Dezember 2024) führt einen «Dumper rail-route» mit der Nummer 102 und eine «Pelle rétro rail-route», also einen Zweiwege-Bagger. Beide kamen 2021 in Betrieb.', 'Hersteller und Baureihe der beiden Fahrzeuge sind dort nicht genannt.'],
        tabelle: { kopf: ['Fahrzeug', 'Leergewicht', 'Auf der Schiene', 'Plätze'], zeilen: [['Dumper 102', '14,5 t', '20 km/h', '2'], ['Bagger', '12 t', '16 km/h', '1']] } },
      { titel: 'Einsatz und Technik', p: ['Beide Fahrzeuge sind für die Meterspurstrecken La Chaux-de-Fonds–Les Ponts-de-Martel und Le Locle–Les Brenets aufgeführt. Der Dumper transportiert Material, der Bagger arbeitet am und neben dem Gleis.', 'Auf der Schiene gelten besondere Betriebsvorschriften. Der Dumper hat 10 t Bremsgewicht und 12 kN Rückhaltekraft, der Bagger 9 t und 10 kN.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Räder für Strasse und Schiene', 'Dumper mit 2 Plätzen, Bagger mit 1 Platz', 'Kein Fahrgastraum'] }
    ],
    quellen: ['transN – Betriebsvorschriften Meterspur, gültig ab 15. Dezember 2024', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'spezial', farbe: YEL, akzent: TRN_GRAU },
    bilder: [] },
  { id: 'trn-ast-21', kat: 'personenverkehr', name: 'ASt', beiname: '21', typ: 'Panorama- und Salonsteuerwagen für Sonderfahrten', bahn: 'transn', vorlaeufig: false,
    text: ['Der ASt 21 ist ein Panorama- und Salonsteuerwagen der Meterspur. Er entstand aus dem CMN-Triebwagen BDe 4/4 1 von 1950 und ging 1999 in Betrieb.', 'Er hat keinen eigenen Antrieb und fährt zusammen mit einem Triebwagen BDe 4/4.'],
    kennzahlen: [['1999', 'Umbau'], ['46', 'Sitzplätze'], ['80 km/h', 'Höchstgeschwindigkeit'], ['18 t', 'Leergewicht']],
    daten: { 'Bauart': 'Steuerwagen mit Salon, ohne eigenen Antrieb', 'Betreiber': 'transN, früher CMN und TRN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'ASt 21, früher BDe 4/4 1', 'Gewicht': '18 t leer', 'Höchstgeschwindigkeit': '80 km/h', 'Sitzplätze': '46', 'Anzahl': '1', 'In Betrieb seit': '1999 (Umbau; Ursprungsfahrzeug von 1950)' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Gewicht', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'In Betrieb seit'],
    specNote: 'Einige ältere Darstellungen nennen 1998 als Umbaujahr; hier gilt 1999 nach der transN-Betriebsvorschrift. Ob der Wagen 2026 betriebsfähig ist, ist nicht separat bestätigt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der Wagen entstand aus dem Triebwagen BDe 4/4 1 der CMN von 1950. Beim Umbau blieben Teile des alten Triebwagens erhalten; laut transN-Betriebsvorschrift ging der ASt 21 1999 in Betrieb.', 'Die Fahrzeugtabelle von transN führt ihn auch 2024 noch.'] },
      { titel: 'Einsatz und Technik', p: ['Der Wagen ist für besondere Reiseangebote gedacht, nicht für den normalen Pendlerverkehr. Als Steuerwagen hat er keinen eigenen Antrieb; er fährt mit einem Triebwagen BDe 4/4.', 'Er wiegt 18 t leer, hat 20 t Bremsgewicht und fährt bis 80 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['46 Sitzplätze', 'Grosse Panoramafenster', 'Salon-Einrichtung statt Pendlerbestuhlung'] }
    ],
    quellen: ['transN – Betriebsvorschriften Meterspur, gültig ab 15. Dezember 2024', 'Rails Romands, Februar 2016, Seite 31', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'wagen', farbe: W1, akzent: TRN_ROT },
    bilder: [
      { src: 'bilder/trn-ast-21-c1.jpg', titel: 'Panorama-Steuerwagen ASt 21', foto: 'C. Beuret', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:CMN_Ast_21.jpg' }
    ] },
  { id: 'trn-be-4-4-1', kat: 'historisch', name: 'Be 4/4 1', beiname: 'Bobo', typ: 'Elektrische Güterzuglok der RVT von 1951 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Die Be 4/4 1 ist eine Einzellok des RVT im Val-de-Travers. Sie zog vor allem Güterzüge und Schülerzüge.', 'Seit dem 1. März 2019 gehört sie dem Verein RVT-Historique.'],
    kennzahlen: [['1951', 'gebaut'], ['703 kW', 'Stundenleistung'], ['75 km/h', 'Höchstgeschwindigkeit'], ['45 t', 'Dienstgewicht']],
    daten: { 'Bauart': 'Elektrische Lokomotive mit vier Fahrmotoren', 'Hersteller': 'Ateliers de Vevey, Sécheron', 'Betreiber': 'RVT, später TRN und transN', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': 'Be 4/4 1 (EVN 91 85 4417 301-9)', 'Länge': '11,15 m über Puffer', 'Gewicht': '45 t', 'Leistung': '703 kW Stundenleistung, 611 kW Dauerleistung (am Rad)', 'Höchstgeschwindigkeit': '75 km/h', 'Anzahl': '1', 'Erhalten': 'RVT-Historique (seit 2019)', 'In Betrieb seit': '1951' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Technische Daten nach dem Datenblatt von RVT-Historique. Die Lok gehört nicht zur heutigen Güterflotte von transN.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Ateliers de Vevey bauten die Lok 1951 mit elektrischer Ausrüstung von Sécheron für den Régional du Val-de-Travers (RVT). Sie blieb ein Einzelstück und trägt den Spitznamen «Bobo».', 'Ihre europäische Fahrzeugnummer lautet 91 85 4417 301-9.'] },
      { titel: 'Einsatz und Technik', p: ['Der RVT setzte sie vor allem vor Güterzügen und vor Schülerzügen auf der Normalspurstrecke im Val-de-Travers ein. Als der reguläre Einsatz zurückging, mietete RVT-Historique die Lok zuerst. Am 1. März 2019 übergab transN sie offiziell an den Verein.', 'Vier Fahrmotoren leisten am Rad 703 kW als Stundenleistung und 611 kW als Dauerleistung. Die Lok ist 11,15 m lang, wiegt 45 t und fährt bis 75 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Vier Fahrmotoren', 'Für 15 kV 16,7 Hz Wechselstrom', 'Heute im Bestand von RVT-Historique'] }
    ],
    quellen: ['RVT-Historique – Fahrzeugbestand und technische Daten', 'RVT-Historique – Vereinsgeschichte', 'Arcinfo – Übergabe der Be 4/4 1 an RVT-Historique', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'haube', mittig: true, farbe: '#3B4A44', akzent: YEL },
    bilder: [
      { src: 'bilder/trn-be-4-4-1-c1.jpg', titel: 'Be 4/4 1 des RVT in Fleurier (1984)', foto: 'Peter Alder', lizenz: 'CC BY-SA 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Swiss_Rail_RVT_Be_4_4.jpg' }
    ] },
  { id: 'trn-abde-2-4-102', kat: 'historisch', name: 'ABDe 2/4 102', beiname: 'L’Étincelante', typ: 'Elektrischer Triebwagen der RVT von 1944 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Der ABDe 2/4 102 entstand für die Elektrifizierung des RVT im Val-de-Travers. Im Regelbetrieb fuhr er bis Dezember 2004.', 'Heute gehört er als «L’Étincelante» zu RVT-Historique und hat eine Bar für Gruppenfahrten.'],
    kennzahlen: [['1944', 'gebaut'], ['412 kW', 'Leistung'], ['70 km/h', 'Höchstgeschwindigkeit'], ['59', 'Sitzplätze']],
    daten: { 'Bauart': 'Elektrischer Triebwagen mit Gepäckabteil', 'Hersteller': 'SWS, BBC', 'Betreiber': 'RVT, später TRN', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': 'BCFe 2/4 102, später ABFe 2/4 und ABDe 2/4 (EVN 94 85 7537 312-1)', 'Länge': '21 m', 'Gewicht': '40 t', 'Leistung': '412 kW', 'Höchstgeschwindigkeit': '70 km/h', 'Sitzplätze': '59, davon 8 in der 1. Klasse', 'Erhalten': 'RVT-Historique', 'In Betrieb seit': 'Januar 1945' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Gebaut 1944, in Betrieb seit Januar 1945. Technische Daten nach RVT-Historique. Ein frei lizenziertes Foto gibt es nur vom Schwesterwagen 101, darum hier keines.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SWS und BBC bauten den Triebwagen 1944 für die Elektrifizierung des RVT; im Januar 1945 ging er in Betrieb. Er hiess zuerst BCFe 2/4 102, dann ABFe 2/4 und schliesslich ABDe 2/4. Seine europäische Fahrzeugnummer zeigt die spätere Nummer 312.', 'Sein Schwesterwagen war der Triebwagen 101.'] },
      { titel: 'Einsatz und Technik', p: ['Der letzte reguläre Einsatz wird mit Dezember 2004 angegeben. RVT-Historique renovierte den Wagen 2006, baute im Gepäckabteil eine Bar ein und gab ihm die ursprünglichen Farben zurück. Heute fährt er für touristische Fahrten und Gruppen.', 'Er ist 21 m lang, wiegt 40 t, leistet 412 kW und fährt bis 70 km/h. Die Räder haben 940 mm Durchmesser.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['59 Sitzplätze, davon 8 in der 1. Klasse', 'Bar im früheren Gepäckabteil (seit 2006)', 'Beschallung und abnehmbare Tische'] }
    ],
    quellen: ['RVT-Historique – Fahrzeugbestand und technische Daten', 'Wikipedia (en) – Travers–Buttes railway line, Rollmaterial', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#8C2A2A', akzent: '#E8DCC8', tuer: '#5A1A1A', panto: true },
    bilder: [] },
  { id: 'trn-rbde-106', kat: 'historisch', name: 'RBDe 4/4', beiname: '106 und ABt 204', typ: 'Normalspur-Pendelzug des RVT von 1985 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Der Triebwagen RBDe 106 und der Steuerwagen ABt 204 bilden einen Pendelzug des RVT. Bei TRN und transN trug der Triebwagen die Nummer 316.', 'Im Juni 2024 übernahm RVT-Historique beide Wagen; seit dem 1. Mai 2025 fahren sie wieder in den RVT-Farben.'],
    kennzahlen: [['1985', 'Triebwagen in Betrieb'], ['2', 'Fahrzeuge'], ['87', 'Sitzplätze im Zug'], ['2025', 'wieder in RVT-Farben']],
    daten: { 'Bauart': 'Elektrischer Triebwagen mit Steuerwagen (Pendelzug)', 'Betreiber': 'RVT, später TRN und transN', 'Spurweite': 'Normalspur, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz', 'Fahrzeugnummern': 'RBDe 106 (später 316), ABt 204', 'Sitzplätze': '87 im Zug: 24 in der 1., 63 in der 2. Klasse', 'Anzahl': '2 Fahrzeuge', 'Erhalten': 'RVT-Historique (seit Juni 2024)', 'In Betrieb seit': '1985 (Triebwagen)' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Sitzplätze', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Die 87 Sitzplätze gelten für den ganzen Zug aus Trieb- und Steuerwagen. Länge, Gewicht und Leistung des Triebwagens sowie das Baujahr des Steuerwagens nennen die geprüften Quellen nicht. Die Fotos von 2006 zeigen den Zug im damaligen TPF-Anstrich.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Der Triebwagen kam 1985 als RBDe 106 zum RVT. Er gehört zu den Pendelzügen, die viele Schweizer Privatbahnen damals beschafften. Bei TRN und transN trug er die Nummer 316.', 'Der Steuerwagen ABt 204 hat erste und zweite Klasse. Mit ihm kann der Zug die Richtung wechseln, ohne dass der Triebwagen umfahren muss.'] },
      { titel: 'Einsatz und Technik', p: ['Von 2004 bis 2013 waren Triebwagen 316 und Steuerwagen 204 an die TPF vermietet und fuhren dort im TPF-Anstrich, zusammen mit TPF-Zwischenwagen. Danach setzte transN den Zug mehrere Jahre nicht mehr im kommerziellen Personenverkehr ein.', 'Im Juni 2024 übernahm RVT-Historique beide Fahrzeuge. Zwischen September 2024 und März 2025 wurde die Aussenlackierung erneuert; die erste Fahrt in den wiederhergestellten RVT-Farben fand am 1. Mai 2025 statt.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['87 Sitzplätze im Zug: 24 in der 1. und 63 in der 2. Klasse', 'Bar und Tische an den Sitzplätzen (nach der Restaurierung)', 'Steuerwagen für den Richtungswechsel ohne Umfahren'] }
    ],
    quellen: ['RVT-Historique – Fahrzeugbestand und technische Daten', 'Wikipedia (en) – Travers–Buttes railway line, Rollmaterial', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#A33A2E', akzent: '#E8DCC8', tuer: '#6B2219', panto: true },
    bilder: [
      { src: 'bilder/trn-rbde-106-c1.jpg', titel: 'RBDe 316 und ABt 204 im TPF-Anstrich in Freiburg (2006)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20060929S34a_316-369-361-204.jpg' },
      { src: 'bilder/trn-rbde-106-c2.jpg', titel: 'ABt 204 und RBDe 316 mit TPF-Zwischenwagen in Freiburg (2006)', foto: 'Markus Giger', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:20060929S02a_316-369-361-204.jpg' }
    ] },
  { id: 'trn-abm-2-5-9', kat: 'historisch', name: 'ABm 2/5', beiname: '9', typ: 'Dieselelektrischer Triebwagen von 1914 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Der ABm 2/5 9 gehört zu den ersten Dieseltriebwagen Europas. Er entstand 1914 für die sächsischen Staatsbahnen und fuhr von 1924 bis 1965 auf dem RVT.', 'Heute gehört er zur Sammlung des Verkehrshauses der Schweiz.'],
    kennzahlen: [['1914', 'gebaut'], ['1924–1965', 'beim RVT'], ['Diesel', 'mit elektrischer Kraftübertragung'], ['Verkehrshaus', 'Sammlung']],
    daten: { 'Bauart': 'Dieselelektrischer Triebwagen', 'Hersteller': 'Waggonfabrik Rastatt, BBC, Sulzer', 'Betreiber': 'Sächsische Staatsbahnen, dann RVT (1924–1965)', 'Spurweite': 'Normalspur, 1435 mm', 'Antrieb': 'Dieselmotor mit Generator, elektrischer Fahrmotor', 'Fahrzeugnummern': 'BCm 2/5, später ABm 2/5 9', 'Anzahl': '1', 'Erhalten': 'Verkehrshaus der Schweiz', 'In Betrieb seit': '1914' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Antrieb', 'Fahrzeugnummern', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Das Baujahr 1914 folgt der historischen Einordnung des Verkehrshauses. Wo der Triebwagen heute steht, ist nicht bestätigt; ein Bericht von 2018 behandelt seine Verlagerung ins Aussenlager.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Waggonfabrik Rastatt baute den Wagen mit elektrischer Ausrüstung von BBC und einem Sulzer-Dieselmotor. Er entstand aus einem gemeinsamen Entwicklungsauftrag der sächsischen und der preussischen Staatsbahnen.', 'Nach dem Ersten Weltkrieg kamen zwei solche Triebwagen in die Schweiz. Erhalten blieb der spätere ABm 2/5 9 des RVT.'] },
      { titel: 'Einsatz und Technik', p: ['Der RVT setzte ihn laut Verkehrshaus von 1924 bis 1965 ein. Solche Triebwagen ersetzten auf schwach ausgelasteten Strecken den aufwendigen Dampfbetrieb.', 'Ein Dieselmotor treibt einen Generator, der den elektrischen Fahrmotor versorgt. Ein Drehgestell ist angetrieben, das andere ist ein Laufdrehgestell.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Abteile der 1. und 2. Klasse (Gattung AB)', 'Ab 1982 in der Dauerausstellung des Verkehrshauses', 'Im Archiv: Sulzer-Beschreibung von 1915'] }
    ],
    quellen: ['Verkehrshaus der Schweiz – Sammlung ABm 2/5 9 und Herstellerunterlagen', 'Verkehrshaus Magazin 34 (2018) – Veteran der Dieseltraktion', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#2E4A3E', akzent: '#C9B98A', tuer: '#1E3229', panto: false },
    bilder: [
      { src: 'bilder/trn-abm-2-5-9-c1.jpg', titel: 'ABm 2/5 9 im Verkehrshaus, Seite mit dem Triebdrehgestell (2009)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:C2.12a_ABm_2-5_9_RVT.jpg' },
      { src: 'bilder/trn-abm-2-5-9-c2.jpg', titel: 'ABm 2/5 9 im Verkehrshaus, Seite mit dem Laufdrehgestell (2009)', foto: 'Falk2', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:C2.07a_ABm_2-5_9_RVT.jpg' }
    ] },
  { id: 'trn-be-2-4', kat: 'historisch', name: 'Be 2/4', beiname: '41–47', typ: 'Überlandtram der TN von 1902 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Die Be 2/4 41 bis 47 waren die grossen Überlandtrams der Tramways de Neuchâtel (TN) auf der Strecke nach Boudry und Cortaillod.', 'Die Nummern 44 und 45 sind beim Tram-Museum Neuchâtel (ANAT) erhalten.'],
    kennzahlen: [['1902', 'in Betrieb'], ['7', 'Triebwagen (41–47)'], ['50 km/h', 'Höchstgeschwindigkeit'], ['1981', 'ausgemustert']],
    daten: { 'Bauart': 'Vierachsiger Tramtriebwagen mit zwei Motoren', 'Hersteller': 'SWS (Schlieren), MFO', 'Betreiber': 'TN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '41–47', 'Länge': '12,5 m', 'Gewicht': '15,3 t', 'Leistung': '72 kW (2 × 36 kW)', 'Höchstgeschwindigkeit': '50 km/h', 'Sitzplätze': '30, dazu 43 Stehplätze', 'Anzahl': '7', 'Erhalten': '44 und 45 beim Tram-Museum Neuchâtel (ANAT)', 'In Betrieb seit': '1902' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Technische Werte nach dem Tram-Museum Neuchâtel. Ältere Bildbeschreibungen nennen 74 kW statt 72 kW. Ob die Wagen heute fahrbereit sind, ist nicht bestätigt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Wagenfabrik Schlieren (SWS) baute die sieben Triebwagen, die elektrische Ausrüstung kam von MFO. Sie gingen 1902 in Betrieb.', 'Die 44 kam 2013 aus der Sammlung der AMTUIR bei Paris nach Neuchâtel zurück; die 45 blieb bei der ANAT erhalten.'] },
      { titel: 'Einsatz und Technik', p: ['Die Wagen fuhren auf der Überlandstrecke Neuchâtel–Boudry und dem früheren Abzweig nach Cortaillod, auch in Mehrfachtraktion mit Anhängern. 1981 wurden sie mit der Umstellung auf das neue Littorail-Material offiziell ausgemustert.', 'Zwei Motoren leisten zusammen 72 kW. Ein Wagen ist 12,5 m lang, wiegt 15,3 t und fährt bis 50 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['30 Sitzplätze und 43 Stehplätze', 'Passende vierachsige Anhänger B4 111–114', 'Heute Museumsfahrzeuge der ANAT'] }
    ],
    quellen: ['Tram-Museum Neuchâtel (ANAT) – Fahrzeuge', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#2F6B4F', akzent: '#EFE6D2', tuer: '#1F4A36', panto: true },
    bilder: [
      { src: 'bilder/trn-be-2-4-c1.jpg', titel: 'Be 2/4 45 im Depot der ANAT in Boudry (2011)', foto: 'Alain Gavillet from Chêne-Bougeries, Suisse', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Nouvelles_des_Trams_de_L_A.N.A.T._(Suisse)_(5875709655).jpg' },
      { src: 'bilder/trn-be-2-4-c2.jpg', titel: 'Be 2/4 44 auf der Linie 5 Richtung Auvernier (1979)', foto: 'Alain Gavillet from Chêne-Bougeries, Suisse', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Trams_de_Neuch%C3%A2tel_(Suisse)_(5032025091).jpg' }
    ] },
  { id: 'trn-be-2-2', kat: 'historisch', name: 'Be 2/2', beiname: '73 und 76', typ: 'Zweiachsige Stadttrams der TN von 1922 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Die zweiachsigen Tramtriebwagen 71 bis 79 fuhren im Stadtnetz der TN. Zwei sind erhalten: die 73 beim Tram-Museum Neuchâtel und die 76 bei der Museumsbahn Blonay–Chamby.', 'Die 73 fährt mit historischen Anhängern als Zug «Le Britchon».'],
    kennzahlen: [['1922', 'gebaut (73 und 76)'], ['102 kW', 'Leistung (73)'], ['35 km/h', 'Höchstgeschwindigkeit'], ['2', 'Wagen erhalten']],
    daten: { 'Bauart': 'Zweiachsiger Tramtriebwagen', 'Hersteller': '73: TN-Werkstätten mit BBC und MFO; 76: SIG, MFO, BBC (laut Blonay–Chamby)', 'Betreiber': 'TN', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '600 V Gleichstrom (76 bei Blonay–Chamby: 1000 V)', 'Fahrzeugnummern': '71–78, später 79; erhalten 73 und 76', 'Länge': '9,2 m (73)', 'Gewicht': '10,9 t', 'Leistung': '102 kW (73), 104 kW (76)', 'Höchstgeschwindigkeit': '35 km/h', 'Sitzplätze': '20, dazu 35 Stehplätze (73)', 'Erhalten': '73 beim Tram-Museum Neuchâtel, 76 bei Blonay–Chamby', 'In Betrieb seit': '1922' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Die Serie entstand 1921 bis 1928; für die 73 und die 76 nennen die Museen 1922. Werte der 73 nach dem Tram-Museum Neuchâtel, Werte der 76 nach Blonay–Chamby, das sie als Ce 2/2 76 führt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Die Serie 71 bis 78 entstand zwischen 1921 und 1928; später kam die 79 dazu. Die 73 baute die TN laut Museum in eigenen Werkstätten, mit elektrischer Ausrüstung von BBC und MFO. Für die 76 nennt Blonay–Chamby SIG, MFO und BBC.'] },
      { titel: 'Einsatz und Technik', p: ['Bis die Linie 3 nach Corcelles im Juli 1976 auf Trolleybus umgestellt wurde, fuhren beide Wagen im regulären Tramverkehr. Die 76 kam am 18. August 1976 zur Museumsbahn Blonay–Chamby; dort wartet sie auf eine Revision.', 'Die 73 fährt seit 1994 als historischer Triebwagen auf der Strecke nach Boudry. Sie ist 9,2 m lang, wiegt 10,9 t und hat zwei Motoren mit je 51 kW.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['73: 20 Sitzplätze und 35 Stehplätze', '76: ursprünglich für 600 V, bei Blonay–Chamby für 1000 V Gleichstrom', 'Zug «Le Britchon»: Triebwagen 73 mit den Anhängern B2i 1 und B2 143'] }
    ],
    quellen: ['Tram-Museum Neuchâtel (ANAT) – Fahrzeuge', 'Blonay–Chamby – Ce 2/2 76', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#2F6B4F', akzent: '#EFE6D2', tuer: '#1F4A36', panto: true },
    bilder: [
      { src: 'bilder/trn-be-2-2-c1.jpg', titel: 'Tram 76 mit Anhänger 143 auf der Linie 3 (1976)', foto: 'Alain Gavillet from Chêne-Bougeries, Suisse', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Neuch%C3%A2tel_tram_route_3_in_1976,_cars_143%2B76.jpg' }
    ] },
  { id: 'trn-be-4-4-583', kat: 'historisch', name: 'Be 4/4', beiname: '583 (ex 83)', typ: 'Vierachsiger Tramtriebwagen der TN von 1947 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Die Be 4/4 81 bis 83 waren eine kleine Serie vierachsiger Trams der TN. Erhalten ist die 83, die später 583 hiess.', 'Sie gehört zur Sammlung des Tram-Museums Neuchâtel.'],
    kennzahlen: [['1947', 'gebaut'], ['144 kW', 'Leistung'], ['60 km/h', 'Höchstgeschwindigkeit'], ['3', 'Wagen (81–83)']],
    daten: { 'Bauart': 'Vierachsiger Zweirichtungs-Tramtriebwagen', 'Hersteller': 'SIG, SAAS (Sécheron)', 'Betreiber': 'TN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': '81–83, später 581–583', 'Länge': '12,2 m', 'Gewicht': '13,2 t', 'Leistung': '144 kW (4 × 36 kW)', 'Höchstgeschwindigkeit': '60 km/h', 'Sitzplätze': '26, dazu 39 Stehplätze', 'Anzahl': '3', 'Erhalten': '583 beim Tram-Museum Neuchâtel (ANAT)', 'In Betrieb seit': '1947' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach dem Tram-Museum Neuchâtel; eine Fotobeschreibung nennt 148 kW statt 144 kW.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SIG baute die drei Wagen 1947, die elektrische Ausrüstung kam von Sécheron (SAAS). Später erhielten sie die Nummern 581 bis 583.', 'Die 583 blieb der ANAT erhalten. Die 582 kam nach Wiehe in Deutschland, die 581 wurde 1986 abgebrochen.'] },
      { titel: 'Einsatz und Technik', p: ['Die Zweirichtungswagen hatten Türen auf beiden Seiten. Nach dem Ende der Stadtlinie 3 im Jahr 1976 wurden sie für die Überlandstrecke nach Boudry angepasst. Der reguläre Einsatz der letzten beiden Wagen endete 1988, als weitere Littorail-Triebwagen kamen.', 'Vier Motoren leisten zusammen 144 kW. Ein Wagen ist 12,2 m lang, wiegt 13,2 t und fährt bis 60 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['26 Sitzplätze und 39 Stehplätze', 'Türen auf beiden Seiten, Führerstand an beiden Enden', 'Heute in der Sammlung des Tram-Museums Neuchâtel'] }
    ],
    quellen: ['Tram-Museum Neuchâtel (ANAT) – Fahrzeuge', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#2F6B4F', akzent: '#EFE6D2', tuer: '#1F4A36', panto: true },
    bilder: [
      { src: 'bilder/trn-be-4-4-583-c1.jpg', titel: 'Be 4/4 583 (ex 83) im Depot der ANAT in Boudry (2011)', foto: 'Alain Gavillet from Chêne-Bougeries, Suisse', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Nouvelles_des_Trams_de_L_A.N.A.T._(Suisse)_(5876254464).jpg' }
    ] },
  { id: 'trn-be-4-4-littorail', kat: 'historisch', name: 'Be 4/4', beiname: '501–506 Littorail', typ: 'Littorail-Triebwagen von 1981 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Mit den Be 4/4 501 bis 506 wurde die Strecke Neuchâtel–Boudry 1981 zur modernen Littorail-Linie. Ab 2019 ersetzten gebrauchte Stadler-Triebwagen aus Trogen sie.', 'Die 504 «Cortaillod» ist beim Tram-Museum Neuchâtel erhalten.'],
    kennzahlen: [['1981', 'in Betrieb'], ['6', 'Triebwagen (501–506)'], ['75 km/h', 'Höchstgeschwindigkeit'], ['276 kW', 'Leistung']],
    daten: { 'Bauart': 'Vierachsiger Triebwagen für den Betrieb mit Steuerwagen', 'Hersteller': 'SWS (Schlieren), BBC', 'Betreiber': 'TN, später TRN und transN', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '600 V Gleichstrom', 'Fahrzeugnummern': '501–504 (1981), 505–506 (1988)', 'Länge': '18,4 m', 'Gewicht': '25,5 t', 'Leistung': '276 kW (2 × 138 kW)', 'Höchstgeschwindigkeit': '75 km/h', 'Sitzplätze': '42, dazu 65 Stehplätze', 'Anzahl': '6', 'Erhalten': '504 «Cortaillod» beim Tram-Museum Neuchâtel (ANAT)', 'In Betrieb seit': '1981' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Stromsystem', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Sitzplätze', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach dem Tram-Museum Neuchâtel. Das Foto zeigt einen Littorail-Zug dieser Bauart; welche Wagennummer zu sehen ist, ist nicht bestätigt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SWS in Schlieren baute 1981 die vier Triebwagen 501 bis 504 mit elektrischer Ausrüstung von BBC. 1988 kamen die 505 und 506 dazu. Zur Flotte gehörten auch die Steuerwagen 551 bis 554.', 'Die ANAT beschloss am 26. Oktober 2019, die 504 «Cortaillod» zu erhalten.'] },
      { titel: 'Einsatz und Technik', p: ['Die Littorail-Wagen brachten auf Neuchâtel–Boudry einen schnelleren, signalgesicherten Regionalbahnbetrieb statt des alten Überlandtrams. Ab 2019 übernahmen gebrauchte Stadler-Triebwagen Be 4/8 aus Trogen ihre Aufgabe.', 'Zwei Motoren leisten zusammen 276 kW. Ein Wagen ist 18,4 m lang, wiegt 25,5 t und fährt bis 75 km/h. Die Fahrleitung führt 600 V Gleichstrom.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['42 Sitzplätze und 65 Stehplätze', 'Betrieb zusammen mit den Steuerwagen 551–554', 'Die 504 trug den Namen «Cortaillod»'] }
    ],
    quellen: ['Tram-Museum Neuchâtel (ANAT) – Fahrzeuge', 'Wikipedia – Littorail', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'triebzug', nase: 'kurz', farbe: '#E9C628', akzent: '#2E8B3A', tuer: '#9AA1A8', panto: true },
    bilder: [
      { src: 'bilder/trn-be-4-4-littorail-c1.jpg', titel: 'Littorail-Zug beim Bahnhof Colombier (2010)', foto: 'Roland Zumbuehl', lizenz: 'CC BY 3.0', lizenzUrl: 'https://creativecommons.org/licenses/by/3.0', quelle: 'https://commons.wikimedia.org/wiki/File:Colombier-Tram.jpg' }
    ] },
  { id: 'trn-xe-2-2-601', kat: 'historisch', name: 'Xe 2/2', beiname: '601', typ: 'Elektrischer Sprengwagen der TN von 1911 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Der Xe 2/2 601 entstand 1911 als Sprengwagen: Er besprengte die staubigen Strassen entlang der Tramlinien mit Wasser.', 'Später diente er der Unkrautbekämpfung und dem Winterdienst. Heute gehört er zum Tram-Museum Neuchâtel.'],
    kennzahlen: [['1911', 'gebaut'], ['66 kW', 'Leistung'], ['30 km/h', 'Höchstgeschwindigkeit'], ['10,5 t', 'Gewicht']],
    daten: { 'Bauart': 'Zweiachsiger elektrischer Dienst-Triebwagen (Sprengwagen)', 'Hersteller': 'SWS, MFO', 'Betreiber': 'TN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Xe 2/2 301, ab 1980 601', 'Länge': '6,76 m', 'Gewicht': '10,5 t', 'Leistung': '66 kW (2 × 33 kW)', 'Höchstgeschwindigkeit': '30 km/h', 'Anzahl': '1', 'Erhalten': 'Tram-Museum Neuchâtel (ANAT)', 'In Betrieb seit': '1911' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach dem Tram-Museum Neuchâtel. Daraus folgt keine aktuelle Betriebsfreigabe.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SWS baute den Wagen 1911, die elektrische Ausrüstung kam von MFO. Er trug zuerst die Nummer 301 und wurde 1980 in 601 umnummeriert.'] },
      { titel: 'Einsatz und Technik', p: ['Ursprünglich besprengte er unbefestigte Strassen mit Wasser, damit weniger Staub aufwirbelte. Als die Strassen asphaltiert waren, diente er der Unkrautbekämpfung und im Winter der Schneeräumung.', 'Zwei Motoren leisten zusammen 66 kW. Er ist 6,76 m lang, wiegt 10,5 t, hat 2,2 m Achsstand und fährt bis 30 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Wasserbehälter zum Sprengen', 'Laut Tram-Museum grundsätzlich noch für Schneepflugeinsätze geeignet', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Tram-Museum Neuchâtel (ANAT) – Fahrzeuge', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'rangier', klein: true, farbe: '#2F6B4F', akzent: '#EFE6D2', panto: true },
    bilder: [] },
  { id: 'trn-tn-wagen', kat: 'historisch', name: 'Historische Wagen', beiname: 'TN', typ: 'Erhaltene Tramanhänger und Dienstwagen aus Neuenburg', bahn: 'transn', vorlaeufig: false,
    text: ['Neben den Triebwagen sind fünf Wagen der Neuenburger Trams erhalten. Vier betreut das Tram-Museum Neuchâtel (ANAT), einer steht bei der Museumsbahn Blonay–Chamby.', 'Der älteste ist der Güterwagen X2 631 von 1892.'],
    kennzahlen: [['5', 'Wagen'], ['1892', 'ältester Wagen'], ['4', 'beim Tram-Museum'], ['1', 'bei Blonay–Chamby']],
    daten: { 'Bauart': 'Tramanhänger und Güterwagen', 'Betreiber': 'NCB und TN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'B2i 1, B4 112, B2 143, C4 121, X2 631', 'Anzahl': '5', 'Erhalten': 'Tram-Museum Neuchâtel (ANAT); C4 121 bei Blonay–Chamby' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Anzahl', 'Erhalten'],
    specNote: 'Werte nach dem Tram-Museum Neuchâtel und Blonay–Chamby. Fotobeschreibungen nennen teils abweichende Gewichte und Platzzahlen.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Vier Wagen betreut das Tram-Museum Neuchâtel (ANAT). Der C4 121 gehört seit 1967 zur Sammlung von Blonay–Chamby und wartet dort auf eine Revision.'],
        tabelle: { kopf: ['Wagen', 'Baujahr', 'Hersteller', 'Plätze oder Nutzlast'], zeilen: [
          ['B2i 1', '1894–1895 (Serie)', 'SIG', '12 Sitz- und 12 Stehplätze'], ['B4 112', '1902 (Bauart)', 'SWS', '30 Sitz- und 47 Stehplätze'],
          ['B2 143', 'Umbau 1914–1928 aus Triebwagen von 1897/98', '–', '18 Sitz- und 39 Stehplätze'], ['C4 121', '1892', 'aus Basel (laut Museum)', '15 Sitz- und 53 Stehplätze'],
          ['X2 631 (früher 231)', '1892', 'NCB', '7,5 t Nutzlast']] } },
      { titel: 'Einsatz und Technik', p: ['Der kleine B2i 1 stammt aus dem Pferdetram Neuchâtel–Saint-Blaise. Ab 1897 lief er hinter elektrischen Trams, zuletzt bis 1964 nach La Coudre. Laut Museum war er ursprünglich die Nummer 5, später 101.', 'Die vierachsigen B4 111 bis 114 fuhren mit den Überlandtrams 41 bis 47 nach Boudry und Cortaillod, bis 1981. Die B2 141 bis 149 entstanden durch Umbau älterer Triebwagen und fuhren bis 1976 nach Saint-Blaise, Corcelles und Valangin.', 'Der X2 631 von 1892 brachte ursprünglich Gemüse und Milch; seit der Elektrifizierung der NCB 1902 war er Dienstwagen. Er gilt als letzter erhaltener Zeuge der NCB-Zeit.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['B2i 1 und B2 143 bilden seit 1994 mit dem Triebwagen 73 den Zug «Le Britchon»', 'B4 112: bis 60 km/h, 12,5 m lang', 'X2 631: 9 m² Ladefläche', 'C4 121: Handbremse und automatische Druckluftbremse'] }
    ],
    quellen: ['Tram-Museum Neuchâtel (ANAT) – Fahrzeuge', 'Blonay–Chamby – C4 121', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'wagen', zweiachs: true, farbe: '#2F6B4F', akzent: '#EFE6D2' },
    bilder: [
      { src: 'bilder/trn-tn-wagen-c1.jpg', titel: 'Anhänger B2 143 hinter Tram 76 auf der Linie 3 (1976)', foto: 'Alain Gavillet from Chêne-Bougeries, Suisse', lizenz: 'CC BY 2.0', lizenzUrl: 'https://creativecommons.org/licenses/by/2.0', quelle: 'https://commons.wikimedia.org/wiki/File:Neuch%C3%A2tel_tram_route_3_in_1976,_cars_143%2B76.jpg' }
    ] },
  { id: 'trn-g-3-3-1', kat: 'historisch', name: 'G 3/3 1', beiname: 'Le Doubs', typ: 'Dampflok des Régional des Brenets von 1890 (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Die kleine Tenderlok «Le Doubs» fuhr ab 1890 auf der Meterspurstrecke Le Locle–Les Brenets. Sie stammt aus dem Eröffnungsjahr der Bahn.', 'Seit 1973 steht sie mit zwei historischen Wagen bei der Museumsbahn Blonay–Chamby und wartet dort auf eine Revision.'],
    kennzahlen: [['1890', 'gebaut'], ['16 t', 'Dienstgewicht'], ['25 km/h', 'Höchstgeschwindigkeit'], ['1973', 'bei Blonay–Chamby']],
    daten: { 'Bauart': 'Dampf-Tenderlokomotive mit drei gekuppelten Achsen', 'Hersteller': 'SLM Winterthur (Fabriknummer 618)', 'Betreiber': 'Régional des Brenets (RdB)', 'Spurweite': 'Meterspur, 1000 mm', 'Achsfolge': 'C', 'Fahrzeugnummern': 'G 3/3 1', 'Gewicht': '16,0 t', 'Höchstgeschwindigkeit': '25 km/h', 'Anzahl': '1', 'Erhalten': 'Museumsbahn Blonay–Chamby (Leihgabe, seit 1973)', 'In Betrieb seit': '1890' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Achsfolge', 'Fahrzeugnummern', 'Gewicht', 'Höchstgeschwindigkeit', 'Anzahl', 'Erhalten', 'In Betrieb seit'],
    specNote: 'Werte nach Blonay–Chamby. Die Schwesterlok G 3/3 2 hat kein eigenes Datenblatt; ihre Werte sind darum nicht angegeben.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['SLM in Winterthur baute die Lok 1890 mit der Fabriknummer 618. Mit zwei weiteren kleinen Dampfloks bewältigte sie den Verkehr zwischen Le Locle und Les Brenets.', 'Eine davon, die G 3/3 2 «Le Père Frédéric», steht als Denkmal in Les Brenets. Ihr Name erinnert an den Industriellen Frédéric Perret, der den Kauf finanzierte.'] },
      { titel: 'Einsatz und Technik', p: ['Nach der Elektrifizierung 1950 wurde die Lok mit zwei historischen Wagen zur Erhaltung abgegeben. Über eine Zwischenlagerung in Vallorbe kam die Gruppe 1973 als Leihgabe zur Museumsbahn Blonay–Chamby.', 'Der Kessel arbeitet mit 12 bar. Die Zylinder haben 240 mm Durchmesser und 350 mm Hub, die Räder 750 mm. Die Lok führt 1,8 m³ Wasser und 0,5 t Kohle mit.'] },
      { titel: 'Ausstattung und Zugänglichkeit', p: ['Zur erhaltenen Gruppe des Régional des Brenets gehören zwei Wagen von 1890. Sie haben eine Handbremse und eine automatische Vakuumbremse.'],
        tabelle: { kopf: ['Fahrzeug', 'Baujahr', 'Hersteller', 'Heute'], zeilen: [
          ['Dampflok G 3/3 1 «Le Doubs»', '1890', 'SLM (618)', 'Blonay–Chamby'], ['Personenwagen BC 2 (früher AB 2), 6 Plätze 2. und 28 Plätze 3. Klasse', '1890', 'SIG Neuhausen', 'Blonay–Chamby'],
          ['Personen- und Gepäckwagen CF 21 (früher BD 21), 16 Plätze 3. Klasse', '1890', 'SIG Neuhausen', 'Blonay–Chamby'], ['Dampflok G 3/3 2 «Le Père Frédéric»', '1890', 'SLM', 'Denkmal in Les Brenets']] } }
    ],
    quellen: ['Blonay–Chamby – G 3/3 1, BC 2 und CF 21', 'Stadt Le Locle – Protokoll zur Erhaltung von «Le Père Frédéric»', 'Wikipedia – Chemin de fer Blonay–Chamby, Rollmaterial', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'rangier', achsen: 3, farbe: '#22272B', akzent: '#B0352A', panto: false },
    bilder: [
      { src: 'bilder/trn-g-3-3-1-c1.jpg', titel: 'G 3/3 1 «Le Doubs» bei der Museumsbahn Blonay–Chamby', foto: 'Bourbaki 2021', lizenz: 'CC BY 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:R%C3%A9gional_des_Brenets_Le_Doubs_Chamby-Mus%C3%A9e_(Chaulin).jpg' },
      { src: 'bilder/trn-g-3-3-1-c2.jpg', titel: 'G 3/3 1 «Le Doubs» bei Blonay–Chamby (Frühling 2010)', foto: 'BCFeh', lizenz: 'Gemeinfrei', lizenzUrl: '', quelle: 'https://commons.wikimedia.org/wiki/File:Blonay-Chamby_R%C3%A9gional_des_Brenets_-_1_-_01.jpg' }
    ] },
  { id: 'trn-kkl-41', kat: 'historisch', name: 'Kkl', beiname: '41', typ: 'Meterspur-Flachwagen mit aufgesetztem Tank (historisch)', bahn: 'transn', vorlaeufig: false,
    text: ['Der Kkl 41 ist ein meterspuriger Flachwagen der TRN. 2014 stand er mit einem aufgesetzten Tank im Bahnhof Les Brenets.', 'Laut Fotobeschreibung kam er 2017 zum französischen Museum MTVS.'],
    kennzahlen: [['41', 'Nummer'], ['Meterspur', 'Spurweite'], ['2014', 'Foto in Les Brenets'], ['2017', 'ans MTVS']],
    daten: { 'Bauart': 'Flachwagen mit aufgesetztem Tank', 'Betreiber': 'TRN', 'Spurweite': 'Meterspur, 1000 mm', 'Fahrzeugnummern': 'Kkl 41', 'Verbleib': '2017 an das Musée des tramways à vapeur et des chemins de fer secondaires français (MTVS), laut Fotobeschreibung' },
    specOrder: ['Bauart', 'Betreiber', 'Spurweite', 'Fahrzeugnummern', 'Verbleib'],
    specNote: 'Baujahr, Gewicht, Nutzlast und Tankinhalt sind nicht gesichert. Die Abgabe an das MTVS stammt aus der Fotobeschreibung und ist von keinem Museumsregister bestätigt.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Ein Foto vom 1. Juni 2014 zeigt den Wagen in Les Brenets; er ist als TRN Kkl 41 bezeichnet. Hersteller und Baujahr sind nicht bekannt.'] },
      { titel: 'Einsatz und Technik', p: ['Auf der Ladefläche stand ein Tank. Wofür er genutzt wurde, ist nicht belegt. Der Wagen ist darum kein eigener Kesselwagen, sondern ein Flachwagen mit aufgesetztem Behälter.', 'Laut Fotobeschreibung gab die Bahn ihn 2017 an das französische Museum MTVS ab.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Flache Ladefläche', 'Aufgesetzter Tank (2014)', 'Kein Fahrgastraum'] }
    ],
    quellen: ['Wikimedia Commons – Foto «Gare des Brenets wagon citerne» mit Beschreibung', 'Dossier HCKD «transN – Historische Fahrzeuge und Spezialfahrzeuge», Oktober 2026'],
    art: { typ: 'wagen', var: 'flach', zweiachs: true, farbe: '#5B4A3A' },
    bilder: [
      { src: 'bilder/trn-kkl-41-c1.jpg', titel: 'Kkl 41 mit aufgesetztem Tank in Les Brenets (2014)', foto: 'Abaddon1337', lizenz: 'CC BY-SA 4.0', lizenzUrl: 'https://creativecommons.org/licenses/by-sa/4.0', quelle: 'https://commons.wikimedia.org/wiki/File:Gare_des_Brenets_wagon_citerne.jpg' }
    ] }
);
