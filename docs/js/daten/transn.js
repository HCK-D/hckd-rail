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
    daten: { 'Bauart': 'Elektrischer Triebwagen mit Gepäckabteil', 'Hersteller': 'Reggiane, TIBB, SAAS', 'Betreiber': 'transN, früher RdB und CMN', 'Spurweite': 'Meterspur, 1000 mm', 'Stromsystem': '1500 V Gleichstrom', 'Fahrzeugnummern': '3 und 5', 'Länge': '16,6 m', 'Breite': '2,68 m', 'Gewicht': '24 t leer', 'Leistung': '480 kW', 'Höchstgeschwindigkeit': '60 km/h', 'Sitzplätze': '146 Plätze insgesamt', 'Anzahl': '2', 'In Betrieb seit': '1950' },
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
  { id: 'trn-tm-44-normal', kat: 'infrastruktur', name: 'Tm 4/4', beiname: 'Normalspur', typ: 'Dieselelektrischer Baudiensttraktor von Stadler', bahn: 'transn', vorlaeufig: false,
    text: ['transN hat zwei moderne Baudiensttraktoren Tm 4/4 von Stadler, einen für die Normalspur und einen für die Meterspur. Dieser hier arbeitet auf dem Normalspurnetz.', 'Er hat einen Kran und eine Ladefläche für Material.'],
    kennzahlen: [['1', 'Fahrzeug'], ['80 km/h', 'Höchstgeschwindigkeit (Bauart)'], ['480 kW', 'Motorleistung (Bauart)'], ['Diesel', 'Antrieb']],
    daten: { 'Bauart': 'Dieselelektrischer Baudiensttraktor mit Kran', 'Hersteller': 'Stadler', 'Betreiber': 'transN', 'Spurweite': 'Normalspur, 1435 mm', 'Motor': 'Mercedes-Benz OM 473 (Bauart)', 'Länge': '18,0 m (Bauart)', 'Gewicht': '52 t (Bauart)', 'Leistung': '480 kW (Bauart)', 'Höchstgeschwindigkeit': '80 km/h (Bauart)', 'Anzahl': '1' },
    specOrder: ['Bauart', 'Hersteller', 'Betreiber', 'Spurweite', 'Motor', 'Länge', 'Gewicht', 'Leistung', 'Höchstgeschwindigkeit', 'Anzahl'],
    specNote: 'Werte mit «Bauart» beschreiben die Fahrzeugfamilie nach der Schweizer Eisenbahn-Revue 3/2023. Nummer und genaues Inbetriebnahmejahr des Normalspur-Traktors nennen die geprüften Quellen nicht.',
    abschnitte: [
      { titel: 'Hersteller und Flottenaufbau', p: ['Laut Geschäftsbericht 2025 hat transN zwei Tm 4/4 von Stadler, je einen für Normal- und Meterspur. Die Nummer des Normalspur-Traktors ist in den geprüften Quellen nicht genannt.'] },
      { titel: 'Einsatz und Technik', p: ['Der Traktor dient dem Bau, dem Unterhalt und dem Materialtransport auf dem Normalspurnetz von transN, etwa auf der Strecke Travers–Buttes.', 'Die Bauart ist dieselelektrisch: Ein Mercedes-Benz-Motor OM 473 mit 480 kW liefert Strom für vier Fahrmotoren. Der Traktor ist 18,0 m lang, wiegt 52 t und fährt bis 80 km/h.'] },
      { titel: 'Ausstattung und Zugänglichkeit', liste: ['Kran von Palfinger mit bis 17 m Reichweite (Bauart)', 'Ladeplattform für 12 t (Bauart)', 'Funkfernsteuerung (Bauart)', 'Kein Fahrgastraum'] }
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
    bilder: [] }
);
