/* RailBase – «Züge unterscheiden»: ähnliche Baureihen auseinanderhalten */
'use strict';

/* =====================================================================
   ERKENNEN
   zug       id des Fahrzeugs (Link und Name)
   bild      Foto aus dem Katalog
   marken    Punkte auf dem Foto: x, y in Prozent von links oben, text = Erklärung
   merkmale  kurze Merkmale zum Erkennen (Deutsch; Übersetzung in sprachen/xx/06-erkennen.js)
   schnell   Werte für die Übersichtstabelle: Strom, Wagen, Nummern, Region
   Alle Angaben stammen aus den Fahrzeugseiten (js/daten/fahrzeuge.js).
   ===================================================================== */
const ERKENNEN = [
  {
    zug: 'rabe-521', bild: 'bilder/rabe-521-c1.jpg',
    marken: [{ x: 18, y: 63, text: 'Nummer an der Front: 521 012' }],
    merkmale: ['Nummer 521 001–030 oder 521 201–209', 'Strom 15 kV 16,7 Hz – derselbe wie in Deutschland, darum fährt er über die Grenze', 'Unterwegs bei der S-Bahn Basel und im Seehas am Bodensee'],
    schnell: { strom: '15 kV', wagen: '4', nummern: '521 001–030, 201–209', region: 'Basel, Deutschland' }
  },
  {
    zug: 'rabe-522', bild: 'bilder/rabe-522-c3.jpg',
    marken: [{ x: 55, y: 59, text: 'Léman-Express-Farben: blau, weiss und rot' }],
    merkmale: ['Nummer 522 201–232', 'Zweisystem: 15 kV und 25 kV für Frankreich', 'Etwas länger: 75,0 m statt 74,1 m', 'Unterwegs beim Léman Express rund um Genève und im Raum Basel'],
    schnell: { strom: '15 kV + 25 kV', wagen: '4', nummern: '522 201–232', region: 'Genève, Frankreich, Basel' }
  },
  {
    zug: 'rabe-523', bild: 'bilder/rabe-523-c1.jpg',
    marken: [{ x: 81, y: 67, text: 'Nummer an der Front: 523 001' }, { x: 54, y: 41, text: 'Schriftzug der Stadtbahn Zug, wo der RABe 523 zuerst fuhr' }],
    merkmale: ['Nummer 523 001–073, 101–114 oder 501–511', 'Nur 15 kV: bleibt in der Schweiz', 'Unterwegs bei vielen S-Bahnen, z. B. in Zug, Luzern, Aargau, Freiburg und Waadt'],
    schnell: { strom: '15 kV', wagen: '4', nummern: '523 001–073, 101–114, 501–511', region: 'ganze Schweiz' }
  },
  {
    zug: 'rabe-524', bild: 'bilder/rabe-524-c2.jpg',
    marken: [{ x: 15, y: 61, text: 'Nummer an der Front: 524 303' }, { x: 44, y: 48, text: 'TILO-Logo und Farben rot, blau und grün' }, { x: 38, y: 63, text: 'Italienische Bezeichnung «ETR 524»' }],
    merkmale: ['Nummer 524 …; die neueren Züge (FLIRT TSI) tragen 524 3…', 'Mehrsystem: 15 kV und 3 kV Gleichstrom für Italien', 'Mit 4 oder 6 Wagen', 'Unterwegs bei TILO im Tessin und in der Lombardei bis Milano'],
    schnell: { strom: '15 kV + 3 kV DC', wagen: '4 / 6', nummern: '524 …', region: 'Tessin, Lombardei' }
  }
];
