/* Français – Re 430 et Ama 832 */
uebDict({ 'Dieselgenerator': 'Génératrice diesel', 'Eigentümer': 'Propriétaire', 'Bestellt': 'Commande', 'Plattform': 'Plateforme', 'SBB Cargo AG': 'CFF Cargo SA', 'LokRoll 2 AG': 'LokRoll 2 SA' });

uebZug('ama-832', {
  typ: 'Locomotive de manœuvre hybride avec génératrice diesel et batterie',
  text: ['L’Ama 832 est une locomotive de manœuvre hybride à trois essieux d’Alstom, de la famille Prima H3. Selon l’utilisation, elle roule la moitié à trois quarts du temps avec le courant de sa batterie.', 'CFF Cargo a loué douze locomotives pour dix ans ; elles appartiennent à LokRoll 2 SA.'],
  kennzahlen: [['12', 'locomotives louées'], ['100 km/h', 'vitesse maximale'], ['350 kW', 'génératrice diesel'], ['2018', 'commande']],
  daten: { 'Antrieb': 'hybride : génératrice diesel et batterie', 'Dieselgenerator': '350 kW, norme d’émission IIIB', 'Länge': '12,8 m', 'Leistung': '790 kW (catalogue des types de marche)', 'Anzahl': '12 louées' },
  specNote: 'La désignation et la puissance de 790 kW suivent le catalogue des types de marche CFF 2026 ; la génératrice diesel seule développe 350 kW. Les locomotives n’appartiennent pas aux CFF.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['LokRoll 2 SA, fondée par le fonds Reichmuth Infrastruktur Schweiz, a commandé en octobre 2018 douze Prima H3 à Alstom pour environ 40 millions d’euros. Elles sont louées à CFF Cargo pour dix ans. Elles ont été construites par Alstom en Allemagne ; les livraisons étaient prévues dès octobre 2020.', 'Dès 2017, CFF Cargo louait déjà trois Prima H3 à Alstom, pour des zones fermées du port de Bâle-Kleinhüningen et en Argovie.'] },
      { titel: 'Utilisation et technique', p: ['CFF Cargo utilise les locomotives pour la manœuvre, la formation et le déplacement de wagons, par exemple à St. Margrethen. Selon l’utilisation, elles roulent 50 à 75 % du temps sur batterie, ce qui permet une exploitation sans émissions en ville ou dans des halles.', 'La génératrice diesel développe 350 kW. La locomotive mesure 12,8 m, pèse 67 t, a un effort au démarrage de 240 kN et roule jusqu’à 100 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Cabine de conduite au milieu', 'Batterie pour rouler sans émissions', 'ETCS pour le réseau suisse', 'Pas de pantographe, pas de compartiment voyageurs'] }
    ],
  bilder: ['Nouvelle Ama 832 de l’équipe de manœuvre de St. Margrethen (2021)', 'Ama 832 neuve à St. Margrethen (2021)']
});
uebZug('h-re430', {
  typ: 'Locomotive électrique pour trains rapides et marchandises du Gothard (historique)',
  text: ['La Re 4/4 III, plus tard Re 430, est la version à effort de traction élevé de la Re 4/4 II. Un rapport de transmission différent lui donne plus de traction en rampe ; en contrepartie, elle roule au plus à 125 au lieu de 140 km/h.', 'Les dernières locomotives des CFF ont été retirées en avril 2023.'],
  kennzahlen: [['20', 'locomotives CFF (11351–11370)'], ['125 km/h', 'vitesse maximale'], ['4700 kW', 'puissance unihoraire'], ['1970', 'mise en service']],
  daten: { 'Länge': '15,41 m hors tampons', 'Gewicht': '80 t, 84 t avec climatisation', 'Leistung': '4700 kW unihoraire, 3700 kW continue', 'Höchstgeschwindigkeit': '125 km/h (d’abord 120 km/h)', 'Nummern': '11351–11370, puis Re 430 351–370 ; plus 11350 ex SOB 41', 'Ausmusterung': 'jusqu’au 8 avril 2023' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SLM, BBC, MFO et SAAS ont construit les locomotives. Les CFF en ont reçu 20 en 1970 et 1971, numérotées 11351–11370. Les 11351–11353 sont allées au SOB de 1983 à 1985 et sont revenues de 1994 à 1996 ; dans le même échange, la SOB 41 est arrivée aux CFF comme 11350.', 'Des locomotives apparentées circulaient sur des chemins de fer privés : EBT 111–113, VHB 141 et SMB 181, plus tard comme Re 436 et Re 430 chez RM et Widmer Rail Services.'] },
      { titel: 'Utilisation et technique', p: ['La Re 4/4 III a été construite pour les trains rapides et marchandises du Gothard. Plus tard, elle a surtout circulé en trafic marchandises, le plus souvent chez CFF Cargo. La 11365 a été retirée après une collision à Bâle en 2013 ; les deux dernières, la 430 356 et la 11370, ont été retirées le 8 avril 2023.', 'La locomotive mesure 15,41 m, développe 4700 kW en puissance unihoraire et 3700 kW en continu, a un effort au démarrage de 280 kN et roule jusqu’à 125 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux cabines de conduite', 'Commande multiple, par exemple avec la Re 6/6 en « Re 10/10 »', 'Pas de compartiment voyageurs'],
        p: ['En tête de trains voyageurs, l’accessibilité dépendait des voitures.'] }
    ],
  bilder: ['Re 430 364 (11364) à Soleure (2019)', 'Re 4/4 III 11360 et Re 421 à Frauenfeld (2012)', 'Re 4/4 III 11350, ex SOB 41, à Rotkreuz (2012)', 'Re 4/4 III 11364 avec voitures à deux niveaux à Veytaux (2011)']
});
uebEinsatz({
  'ama-832': 'En manœuvre chez CFF Cargo en Suisse, par exemple à St. Margrethen.',
  'h-re430': 'Autrefois en tête de trains rapides et marchandises au Gothard, plus tard surtout en trafic marchandises de CFF Cargo sur tout le réseau.'
});
