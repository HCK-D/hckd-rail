/* Français – véhicules CFF Voyageurs */
uebDict({ 'ja': 'oui', 'nein': 'non', 'SBB': 'CFF' });

uebZug('rabe-501', {
  typ: 'Train électrique à grande vitesse',
  text: ['Le Giruno est une rame multisystème de onze caisses construite par Stadler pour le trafic grandes lignes national et international.', 'Il relie la Suisse à l’Italie et à l’Allemagne et est conçu pour une vitesse maximale de 250 km/h.'],
  kennzahlen: [['41', 'rames dans la flotte CFF'], ['405', 'places assises'], ['250 km/h', 'vitesse maximale'], ['2019', 'première mise en service aux CFF']],
  daten: { 'Betreiber': 'CFF Voyageurs', 'Zugbildung': '11 voitures', 'Länge': '202,0 m hors attelages', 'Gewicht': '381 t à vide', 'Leistung': '6000 kW max. à la jante', 'Sitzplätze': '405 (117 en 1re classe, 288 en 2e classe)', 'Restaurant': '17 places en plus', 'Anzahl': '41 rames' },
  specNote: 'Technique et répartition des places selon Stadler, poids à vide selon CFF Infrastructure.',
  abschnitte: [
    { titel: 'Constructeur et constitution de la flotte', p: ['En 2014, les CFF ont d’abord commandé 29 rames à Stadler. La première série a été mise en service de 2019 à 2021. Après des commandes complémentaires, la flotte est passée à 41 rames.', 'Les CFF ont annoncé la livraison du dernier véhicule commandé pour décembre 2025 ; leur aperçu actuel de la flotte compte les 41 rames.'] },
    { titel: 'Utilisation et technique', p: ['Parmi les axes d’utilisation figure Zurich–Milan par le tunnel de base du Saint-Gothard. Dans l’horaire 2026, des Giruno circulent aussi entre Bâle et Hambourg. Le constructeur mentionne des homologations pour la Suisse, l’Allemagne, l’Italie et l’Autriche.', 'Quatre convertisseurs de traction alimentent quatre bogies moteurs ; deux rames peuvent circuler en unités multiples.'] },
    { titel: 'Équipement et accessibilité', liste: ['Wi-Fi', 'Prises électriques', 'Zone famille', 'Zone silence', 'Zone business', 'Places pour vélos', 'Toilettes accessibles en fauteuil roulant dans les deux classes', 'Restaurant à bord'],
      p: ['Les accès sont conçus pour des quais de 55 et 76 cm de haut. Aux quais adaptés, les personnes en fauteuil roulant peuvent monter seules et rejoindre le restaurant.'] }
  ],
  bilder: ['RABe 501 « Giruno » en passage', 'Giruno de Stadler en gare', 'Giruno à Bâle', 'Deux Giruno côte à côte', 'Giruno avec voiture-restaurant dans la halle']
});

uebZug('rabde-500', {
  typ: 'Train pendulaire InterCity',
  text: ['L’ICN est un train pendulaire électrique de sept caisses pour les grandes lignes suisses. Sa pendulation permet des vitesses plus élevées en courbe sur les lignes sinueuses adaptées.', 'Il circule surtout sur la ligne du pied du Jura.'],
  kennzahlen: [['44', 'rames dans la flotte CFF'], ['471', 'places assises selon les CFF'], ['200 km/h', 'vitesse maximale'], ['1999', 'première mise en service selon les CFF']],
  daten: { 'Betreiber': 'CFF Voyageurs', 'Zugbildung': '7 voitures', 'Gewicht': '368 t à vide', 'Neigetechnik': 'pendulation active de la caisse', 'Anzahl': '44 rames (1re série 24, 2e série 20)', 'Hersteller': 'Série 1 : Adtranz et FIAT-SIG ; série 2 : Bombardier/Alstom' },
  specNote: 'Valeurs techniques selon CFF Infrastructure. La page des CFF arrondit la longueur à 190 m et indique 471 places assises ainsi que 1999 comme première mise en service.',
  abschnitte: [
    { titel: 'Constructeurs et séries', p: ['La première série, numéros 000 à 023, a été construite par Adtranz et FIAT-SIG. La seconde série, numéros 024 à 043, a été réalisée par le consortium Bombardier/Alstom ; sa livraison a commencé en 2003.', 'Alstom a notamment livré depuis Neuhausen les bogies et le système de pendulation.'] },
    { titel: 'Utilisation et équipement', liste: ['Restaurant', 'Zone famille', 'Zone silence', 'Zone business', 'Espaces pour vélos et bagages', 'Places pour fauteuils roulants', 'WC accessible en fauteuil roulant'],
      p: ['Parmi les axes principaux figurent Bâle–Bienne–Lausanne et Romanshorn–Saint-Gall–Zurich–Bienne–Genève. D’autres services vont jusqu’au Tessin.', 'Des places pour fauteuils roulants et un WC accessible sont disponibles ; l’accès n’est toutefois pas à plancher bas.'] },
    { titel: 'Modernisation', p: ['Depuis 2021, les CFF rénovent les ICN dans leur atelier d’Yverdon. La première rame entièrement modernisée a été présentée le 24 octobre 2024. Outre les sièges, l’éclairage, les tables et l’information voyageurs, des composants techniques sont aussi révisés.', 'La page actuelle des CFF indique 2034 comme année d’achèvement ; l’objectif est d’environ 20 années de service supplémentaires.'] }
  ],
  bilder: ['ICN en été devant les montagnes', 'ICN au soleil d’hiver', 'RABDe 500 021 à Rotkreuz', 'ICN en route', 'ICN sur le pont de l’Aar à Soleure']
});

uebZug('rabe-502', {
  typ: 'Twindexx Swiss Express, train grandes lignes à deux niveaux',
  text: ['Le Twindexx Swiss Express est la rame automotrice à deux niveaux des CFF pour les grandes lignes. Les CFF l’appellent FV-Dosto.', 'Trois versions offrent plus ou moins de places et peuvent être couplées selon la demande : l’IC200 (RABDe 502) ainsi que l’IR200 et l’IR100 (RABe 502).'],
  kennzahlen: [['62', 'rames dans la flotte CFF'], ['200 km/h', 'vitesse maximale'], ['2018', 'première mise en service aux CFF'], ['3', 'versions']],
  daten: { 'Hersteller': 'Bombardier Transportation, aujourd’hui Alstom', 'Antrieb': 'moteurs synchrones à aimants permanents', 'Gewicht': '237,1–467,4 t à vide selon la version', 'Anzahl': '62 rames (23 InterCity, 39 InterRegio)', 'In Betrieb seit': '2018, flotte entièrement livrée en 2022' },
  specNote: 'Poids à vide selon les CFF : IR100 237,1 t, IR200 463,2 t, IC200 467,4 t.',
  abschnitte: [
    { titel: 'Caractéristiques des trois versions', tabelle: { kopf: ['Caractéristique', 'IC200', 'IR200', 'IR100'], zeilen: [
      ['Série', 'RABDe 502', 'RABe 502', 'RABe 502'],
      ['Voitures par rame', '8', '8', '4'],
      ['Longueur', '200,6 m', '200,6 m', '101,0 m'],
      ['Places assises', '606', '682', '330'],
      ['Puissance maximale', '7500 kW', '7500 kW', '3750 kW'],
      ['Poids à vide', '467,4 t', '463,2 t', '237,1 t'],
      ['Effort de traction au démarrage', '482,24 kN', '482,24 kN', '241,12 kN'],
      ['Restaurant', 'oui', 'non', 'non']] },
      hinweis: 'Places et équipement selon les CFF, valeurs techniques selon CFF Infrastructure. Les poids s’entendent à vide.' },
    { titel: 'Constructeur et acquisition', p: ['Le constructeur était Bombardier Transportation, aujourd’hui intégré à Alstom. L’acquisition initiale de 59 rames a été portée à 62 véhicules par un accord de 2014 : 23 rames InterCity et 39 InterRegio.', 'La flotte était entièrement livrée en 2022. La traction utilise des moteurs synchrones à aimants permanents.'] },
    { titel: 'Utilisation et équipement', liste: ['Accès à plancher bas', 'Prises électriques', 'Places pour fauteuils roulants', 'WC accessible en fauteuil roulant', 'Restaurant (version IC)', 'Voiture famille (version IC)'],
      p: ['Un corridor important est Saint-Gall–Zurich–Berne–Lausanne–Genève. D’autres services circulent notamment entre Bâle et Zurich, Zurich et Coire ainsi que Lucerne et Zurich.'] },
    { titel: 'Évolution', p: ['Les CFF ont décidé de transformer les bogies de toute la flotte. La compensation de roulis est supprimée et la suspension adaptée.', 'Selon un communiqué de décembre 2025, la transformation en série doit commencer après l’autorisation d’exploitation fin 2026 et durer jusqu’au début des années 2030.'] }
  ],
  bilder: ['FV-Dosto en grandes lignes devant les montagnes', 'RABDe 502 006 « Olten » à Zurich HB', 'RABe 502 402 « Biel/Bienne » devant les montagnes', 'RABe 502 214 près de Tecknau', 'RABe 502 404 au bord du lac']
});

uebZug('rabe-511', {
  typ: 'Rame automotrice à deux niveaux, Regio-Dosto et IR-Dosto',
  text: ['La série RABe 511 de Stadler (type KISS) comprend deux versions à deux niveaux : 69 Regio-Dosto de six caisses et 24 IR-Dosto de quatre caisses.', 'Les CFF distinguent les deux versions, car leur longueur, leur capacité et leur utilisation diffèrent.'],
  kennzahlen: [['93', 'rames des deux versions'], ['160 km/h', 'vitesse maximale'], ['2012', 'première mise en service'], ['Stadler', 'constructeur']],
  daten: { 'Betreiber': 'CFF Voyageurs', 'Bauart': 'rame automotrice à deux niveaux', 'Zugbildung': '6 voitures (Regio-Dosto), 4 voitures (IR-Dosto)', 'Länge': '150,0 m (Regio-Dosto), 100,0 m (IR-Dosto)', 'Leistung': '6000 kW (les deux versions)', 'Gewicht': '210–292 t selon la version', 'Anzahl': '93 rames (69 Regio-Dosto, 24 IR-Dosto)', 'Einsatz': 'RER zurichois, RegioExpress, InterRegio' },
  specNote: 'Poids selon les CFF : 210 t pour l’IR-Dosto à quatre caisses, 292 t pour le Regio-Dosto à six caisses.',
  abschnitte: [
    { titel: 'Les versions en comparaison', tabelle: { kopf: ['Caractéristique', 'Regio-Dosto', 'IR-Dosto'], zeilen: [
      ['Véhicules', '69', '24'],
      ['Voitures par rame', '6', '4'],
      ['Longueur', '150,0 m', '100,0 m'],
      ['Places assises', '535 (120 / 415)', '317'],
      ['Vitesse', '160 km/h', '160 km/h'],
      ['Puissance', '6000 kW', '6000 kW'],
      ['Poids', '292 t', '210 t'],
      ['Accès à plancher bas', 'oui', 'oui'],
      ['Trafic', 'RER / RE', 'IR / RE']] },
      hinweis: 'La répartition 120 / 415 désigne les places de 1re et de 2e classe du Regio-Dosto. Pour la version IR, les CFF indiquent 317 places au total.' },
    { titel: 'Utilisation', p: ['Les Regio-Dosto circulent surtout sur les lignes du RER zurichois et en RE Wettingen–Olten–Lucerne.', 'Les IR-Dosto assurent le trafic interrégional en Suisse alémanique et romande, notamment dans la région de Zurich, sur le Plateau, dans le nord de la Suisse et sur l’axe de Coire. La version IR peut être couplée au RABe 512, plus récent.'] },
    { titel: 'Équipement et rénovation', liste: ['Larges accès surbaissés', 'Places pour fauteuils roulants', 'WC accessible en fauteuil roulant', 'Espaces pour poussettes et vélos'],
      p: ['Les IR-Dosto ont été améliorés en 2020–2024 pour les grandes lignes, notamment avec des prises électriques et des sièges 2+1 en 1re classe.', 'Les CFF rénovent progressivement les Regio-Dosto ; la première rame rénovée circule depuis septembre 2026.'] }
  ],
  bilder: ['Regio-Dosto en S15 du RER zurichois à Jona', 'RABe 511 112 à Genève-Cornavin', 'RABe 511 026 à Genève', 'RABe 511 à Sevelen', 'RABe 511 018 à Zurich HB']
});

uebZug('rabe-514', {
  typ: 'Rame à deux niveaux du RER zurichois',
  text: ['Le RABe 514 est la rame automotrice à deux niveaux (DTZ) de deuxième génération du RER zurichois. Siemens a livré 61 rames de quatre caisses.', 'Des accès surbaissés avec comble-lacune facilitent la montée.'],
  kennzahlen: [['61', 'rames'], ['360', 'places assises par rame'], ['140 km/h', 'vitesse maximale'], ['2006', 'première mise en service aux CFF']],
  daten: { 'Betreiber': 'CFF Voyageurs', 'Bauart': 'rame automotrice à deux niveaux', 'Zugbildung': '4 voitures', 'Gewicht': '223 t à vide', 'Anzahl': '61 rames', 'Einsatz': 'RER zurichois' },
  abschnitte: [
    { titel: 'Utilisation et espaces voyageurs', liste: ['Accès surbaissé continu', 'Espaces multifonctions pour vélos et poussettes', 'Sièges prioritaires', 'Places pour fauteuils roulants', 'WC accessible en fauteuil roulant'],
      p: ['Les DTZ peuvent circuler sur l’ensemble du réseau du RER zurichois.'] },
    { titel: 'Modernisation', p: ['Les CFF rénovent la flotte depuis 2025, probablement jusque vers 2030. Au programme : une nouvelle livrée, une meilleure réception mobile grâce à des vitres adaptées ainsi que des travaux sur l’éclairage, l’intérieur et les composants techniques.', 'La rénovation doit porter la durée d’utilisation à 32 ans.'] }
  ],
  bilder: ['RABe 514 « DTZ » en route', 'Escalier vers l’étage intermédiaire du DTZ rénové', 'RABe 514 054 en S8 à Zurich Enge', 'RABe 514 015 dans la nouvelle livrée ZVV 2023', 'DTZ en S15 sur la digue de Rapperswil']
});

uebZug('rabe-523', {
  typ: 'Rame automotrice régionale électrique de Stadler',
  text: ['Le RABe 523 à quatre caisses a été le premier FLIRT des CFF. Il a été développé pour le Stadtbahn de Zoug et est entré en service commercial en 2004.', 'La série fait partie de la grande famille FLIRT, qui circule en plusieurs versions.'],
  kennzahlen: [['2004', 'première mise en service'], ['98*', 'véhicules selon les séries de numéros'], ['2656 kW', 'puissance'], ['74,08 m', 'longueur']],
  daten: { 'Bauart': 'rame automotrice électrique', 'Grundtyp': '4 voitures', 'Einstieg': 'à plancher bas', 'Höchstgeschwindigkeit': '160 km/h (famille FLIRT selon les CFF)', 'Erste Region': 'Stadtbahn de Zoug', 'Einsatz': 'trafic régional, RER', 'Anzahl': '98* (selon les séries de numéros)' },
  specNote: '* Le chiffre de 98 découle des séries de numéros publiées 001–073, 101–114 et 501–511 ; il n’existe pas d’indication d’effectif actuelle confirmée séparément par les CFF. Les 160 km/h sont indiqués par les CFF pour l’ensemble de la famille FLIRT régionale.',
  abschnitte: [
    { titel: 'Utilisation régionale et équipement', liste: ['Accès à plancher bas', 'Places pour fauteuils roulants', 'Toilettes accessibles en fauteuil roulant', 'Espaces pour vélos et poussettes'],
      p: ['Selon les CFF, les FLIRT circulent comme RER notamment dans les cantons d’Argovie, de Soleure, de Lucerne, de Bâle, de Neuchâtel, de Fribourg et de Vaud. L’équipement concerne toute la famille ; les détails varient selon la version.'] },
    { titel: 'Bien interpréter le nombre', p: ['Le chiffre publié de 209 englobe tous les FLIRT des CFF utilisés en trafic régional, y compris d’autres séries et versions.', 'Pour le seul RABe 523, les séries de numéros publiées 001–073, 101–114 et 501–511 donnent ensemble 98 véhicules. Il s’agit d’une déduction à partir des numéros, et non d’une indication officielle d’effectif des CFF.'] }
  ],
  bilder: ['RABe 523 001 à Muttenz', 'RABe 523 019', 'RABe 523 024 à Montreux', 'RABe 523 018 à Yverdon-les-Bains', 'RABe 523 038']
});

uebZug('rbde-560', {
  typ: 'Train navette régional',
  text: ['Le Domino est un train navette électrique pour le trafic régional et RER. Il associe des motrices et voitures-pilotes NPZ modernisées à une nouvelle voiture intermédiaire à plancher bas INOVA.', 'La désignation RBDe 560 concerne la motrice d’extrémité et non le train entier.'],
  kennzahlen: [['86', 'rames CFF'], ['140 km/h', 'vitesse maximale'], ['75 m', 'longueur'], ['172', 'places assises'], ['2009', 'première mise en service aux CFF']],
  daten: { 'Fahrzeugart': 'train navette électrique', 'Leistung': '1700 kW sur la RBDe 560', 'Gewicht': 'env. 146 t à vide', 'Niederflur': 'dans la voiture intermédiaire', 'Anzahl': '86 rames', 'In Betrieb seit': '2009 (première mise en service aux CFF)', 'Hersteller': 'Schindler Waggon, SWA, SIG, ABB et Bombardier (selon la voiture)', 'Status': 'en service' },
  specNote: 'Données de flotte, de capacité et d’utilisation selon les CFF. Valeurs techniques selon CFF Infrastructure. Le poids à vide est la somme des trois voitures.',
  abschnitte: [
    { titel: 'Composants du train', tabelle: { kopf: ['Véhicule', 'Fonction', 'Longueur', 'Poids à vide', 'Traction'], zeilen: [
      ['RBDe 560', 'motrice d’extrémité', '25,0 m', '72,0 t', '1700 kW / 182 kN'],
      ['B INOVA', 'voiture intermédiaire à plancher bas', '24,4 m', '36,0 t', 'sans traction propre'],
      ['ABt', 'voiture-pilote 1re et 2e classe', '25,0 m', '38,0 t', 'sans traction propre']] } },
    { titel: 'Concept et années de construction', p: ['Il n’existe pas d’année de construction unique pour le Domino. Les véhicules de base proviennent de la famille NPZ ; pour les compositions des TPF, on cite les années 1984 à 1996. La grande rénovation des rames TPF a eu lieu de 2009 à 2011.', 'Aux CFF, le premier Domino est entré en service en 2009. Bombardier a livré les nouvelles voitures intermédiaires INOVA ; les autres constructeurs varient selon la motrice ou la voiture-pilote.'] },
    { titel: 'Équipement', liste: ['Meilleure réception mobile', 'Sièges prioritaires', 'Places pour fauteuils roulants', 'Toilette accessible en fauteuil roulant', 'Prises électriques en 1re classe', 'Places pour vélos et poussettes', 'Espaces pour les bagages', 'Zone multifonction dans la voiture intermédiaire'],
      p: ['Accessibilité : l’accès de plain-pied se trouve dans la voiture intermédiaire INOVA. La motrice et la voiture-pilote ne sont pas à plancher bas sur toute leur longueur.'] },
    { titel: 'Utilisation aux CFF', p: ['Les CFF engagent le Domino principalement sur certaines lignes RER des cantons d’Argovie, de Lucerne, de Neuchâtel et de Vaud. L’attribution exacte des lignes peut changer avec l’horaire et la disposition des véhicules.'] },
    { titel: 'Autres exploitants', tabelle: { kopf: ['Exploitant', 'Effectif', 'Longueur', 'Places assises', 'Particularités'], zeilen: [
      ['TPF', '14', '75 m', '184 (24 en 1re + 160 en 2e cl.)', '1650 kW ; 140 km/h ; RBDe 235–247 et 269'],
      ['RegionAlps', '16', '74,5 m', '188 (12 en 1re + 176 en 2e cl.)', '100 places debout ; 140 km/h ; St-Gingolph–Brigue']] },
      hinweis: 'Effectifs et capacités selon les TPF et RegionAlps. Les valeurs d’autres exploitants ne peuvent pas être transposées telles quelles aux rames CFF ; la puissance et la capacité diffèrent notamment.' },
    { titel: 'Remplacement', p: ['Les CFF acquièrent 198 FLIRT Evo pour remplacer progressivement les Domino et les FLIRT de première génération. La mise en service aux CFF commence en 2028 ; l’introduction régionale est prévue jusqu’en 2033.', 'RegionAlps a annoncé 27 FLIRT Evo, qui doivent remplacer les Domino et les NINA d’ici 2031.'] }
  ],
  bilder: ['Domino entre vignes et village au bord du lac', 'Domino dans la lumière d’automne', 'Deux Domino en unités multiples au-dessus du lac', 'Domino dans les terrasses de vignes', 'Domino au bord du lac', 'Domino en unités multiples dans le vignoble']
});

uebZug('re-460', {
  typ: 'Locomotive électrique universelle',
  text: ['La Re 460, souvent appelée « Loc 2000 », est une locomotive universelle à quatre essieux et haute puissance des CFF pour le trafic voyageurs rapide.', 'Elle est l’épine dorsale des grandes lignes en Suisse et tire notamment les trains à deux niveaux IC2000 ainsi que des compositions InterCity avec voitures unifiées.'],
  kennzahlen: [['119', 'locomotives CFF'], ['230 km/h', 'vitesse maximale'], ['18,5 m', 'longueur'], ['6100 kW', 'puissance continue'], ['1992', 'première mise en service aux CFF']],
  daten: { 'Fahrzeugart': 'locomotive électrique universelle', 'Höchstgeschwindigkeit': '230 km/h (max. 200 km/h en exploitation)', 'Leistung': '6100 kW en continu', 'Gewicht': '84 t en service', 'In Betrieb seit': '1992 (première mise en service aux CFF)', 'Anzahl': '119 locomotives', 'Status': 'en service (modernisée par le Refit)' },
  abschnitte: [
    { titel: 'Composants du véhicule', tabelle: { kopf: ['Véhicule', 'Fonction', 'Longueur', 'Poids en service', 'Traction'], zeilen: [
      ['Re 460', 'locomotive électrique universelle', '18,5 m', '84,0 t', '6100 kW / 300 kN']] } },
    { titel: 'Concept et années de construction', p: ['La Re 460 a été développée au début des années 1990 dans le cadre du projet « Rail 2000 » pour moderniser le trafic rapide sur les lignes principales suisses. De 1992 à 1996, 119 exemplaires ont été livrés aux CFF.', 'Son design caractéristique est signé par le studio italien Pininfarina.'] },
    { titel: 'Modernisation (programme Refit)', p: ['Entre 2017 et 2022, les 119 locomotives ont suivi un vaste programme Refit dans l’atelier CFF d’Yverdon-les-Bains. On y a notamment monté de nouveaux convertisseurs qui réduisent la consommation d’énergie et renouvelé l’installation d’air comprimé, le câblage et les sièges de conduite.'] },
    { titel: 'Équipement et caractéristiques', liste: ['Traction triphasée, convertisseurs GTO modernisés en IGBT', 'Caisse aérodynamique en acier avec faces avant en PRV', 'Cabine étanche à la pression pour les tunnels, p. ex. Mattstetten–Rothrist et tunnel de base du Lötschberg', 'Commande multiple pour les trains navettes avec voiture-pilote (Bt, IC2000)', 'Frein à récupération économe en énergie'] },
    { titel: 'Utilisation aux CFF', p: ['La Re 460 tire et pousse surtout des trains InterCity (IC) et InterRegio (IR) sur l’ensemble du réseau suisse à voie normale. Elle circule souvent avec des voitures à deux niveaux IC2000 ou des voitures unifiées IV (EW IV).'] },
    { titel: 'Autres exploitants et types apparentés', tabelle: { kopf: ['Exploitant / type', 'Effectif', 'Puissance', 'Vitesse maximale', 'Particularités'], zeilen: [
      ['BLS (Re 465)', '18', '7000 kW', '230 km/h', 'variante plus puissante de la Loc 2000 pour marchandises et voyageurs'],
      ['VR (Sr2)', '46', '6000 kW', '210 km/h', 'variante à voie large (1524 mm) pour la Finlande'],
      ['NSB (El 18)', '22', '5880 kW', '200 km/h', 'variante pour la Norvège, adaptée aux conditions nordiques']] } },
    { titel: 'Avenir et perspectives', p: ['Grâce au programme Refit, les locomotives sont techniquement aptes à environ 20 années de service supplémentaires. Elles devraient rester jusque dans les années 2040 l’épine dorsale des grandes lignes CFF tractées par locomotive.'] }
  ],
  bilder: ['Re 460 avec voitures unifiées au printemps', 'Re 460 avec voitures à deux niveaux IC2000 au-dessus du lac', 'Re 460 avec IC2000 entre champ et forêt', 'Re 460 avec IC2000 en été', 'Re 460 avec voitures unifiées tôt le matin', 'Re 460 « Swisstainable » avec IC2000', 'Re 460 « Swisstainable » avec voitures de train de nuit']
});

uebZug('rabe-503', {
  typ: 'Train pendulaire multisystème pour le trafic international',
  text: ['L’Astoro est un train pendulaire électrique multisystème de sept caisses de la famille Pendolino d’Alstom (ETR 610).', 'Les CFF l’engagent en trafic EuroCity entre l’Allemagne, la Suisse et l’Italie.'],
  kennzahlen: [['19', 'rames dans la flotte CFF'], ['250 km/h', 'vitesse maximale de construction'], ['2009', 'première mise en service aux CFF'], ['187,4 m', 'longueur']],
  daten: { 'Hersteller': 'Alstom (famille Pendolino, ETR 610)', 'Zugbildung': '7 voitures', 'Stromsystem': '15 kV et 25 kV CA, 3 kV CC', 'Gewicht': '418 t à vide (FOS), 466 t en charge', 'Höchstgeschwindigkeit': '250 km/h (véhicule), 200 km/h dans le type de marche suisse', 'Neigetechnik': 'active', 'Einsatz': 'EuroCity Allemagne–Suisse–Italie' },
  specNote: 'Les CFF indiquent 250 km/h comme vitesse maximale du véhicule ; le catalogue des types de marche retient 200 km/h pour le type suisse.',
  abschnitte: [
    { titel: 'Acquisition et utilisation', p: ['La flotte CFF compte 19 Astoro : sept issus de la première acquisition et douze livrés plus tard.', 'Ils circulent sur l’axe international nord-sud, notamment par le Saint-Gothard vers Milan, et sur des liaisons vers l’Allemagne.'] },
    { titel: 'Rénovation', p: ['Depuis 2024, les CFF rénovent toute la flotte dans leur atelier de Bellinzone. L’intérieur, l’information voyageurs et les composants techniques sont révisés ; le programme doit durer jusqu’à fin 2027.'] }
  ],
  bilder: ['RABe 503 « Astoro » à Brigue', 'RABe 503 « Astoro » à quai', 'ETR 610 013 près de St-Saphorin au bord du Léman', 'ETR 610 « Astoro » en route', 'ETR 610 006 en EC 50 à Domodossola']
});

uebZug('re-450', {
  typ: 'Locomotive des trains navettes à deux niveaux',
  text: ['La Re 450 tire et pousse les trains navettes à deux niveaux (DPZ) du RER zurichois.', 'Les trains navettes se composent de la locomotive, de voitures à deux niveaux et d’une voiture-pilote.'],
  daten: { 'Einsatz': 'RER zurichois' },
  bilder: ['Re 450 021 avec la S24 à Zurich HB', 'Re 450 059 à Zurich HB', 'Re 450 033 à Turgi, 1993', 'Re 450 022 à Niederweningen, 1991', 'Re 450 avec la S5 sur la digue de Rapperswil']
});

uebZug('rabe-512', {
  typ: 'Rame InterRegio à deux niveaux de six caisses (Stadler KISS)',
  text: ['Le RABe 512 est une rame automotrice à deux niveaux de six caisses de la famille Stadler KISS.', 'Il associe la plateforme éprouvée du RABe 511 à un aménagement intérieur conçu pour le trafic InterRegio.'],
  kennzahlen: [['60', 'rames commandées'], ['466', 'places assises'], ['160 km/h', 'vitesse maximale'], ['2023', 'première mise en service']],
  daten: { 'Zugbildung': '6 voitures', 'Gewicht': '299 t à vide, 382 t en charge', 'Anzahl': '60 commandées', 'In Betrieb seit': 'juillet 2023' },
  abschnitte: [
    { titel: 'Acquisition', p: ['En 2021, les CFF ont commandé 60 nouveaux IR-Dosto au total. Le premier service commercial a commencé en juillet 2023 ; la livraison complète doit être achevée d’ici fin 2026.'] },
    { titel: 'Utilisation et confort', p: ['Les rames sont prévues pour les prestations InterRegio et RegioExpress dans la région de Zurich, sur le Plateau et en Suisse romande.', 'Accès à plancher bas, places pour fauteuils roulants, espaces polyvalents, prises électriques et information voyageurs moderne améliorent l’accessibilité et le confort. La traction double avec des RABe 511 modernisés est possible.'] }
  ],
  bilder: ['IR-Dosto RABe 512 à Zurich HB', 'RABe 512 IR-Dosto en route', 'RABe 512 IR-Dosto', 'Étage supérieur de 2e classe du RABe 512', 'Avant du RABe 512']
});

uebZug('rabe-520', {
  typ: 'GTW Stadler étroit pour la ligne du Seetal',
  text: ['Le RABe 520 est une automotrice articulée électrique développée spécialement pour le gabarit étroit de la ligne du Seetal.', 'Son module de traction central et sa caisse de seulement 2,65 m de large environ le distinguent nettement des autres trains régionaux des CFF.'],
  kennzahlen: [['17', 'rames acquises à l’origine'], ['115 km/h', 'vitesse maximale'], ['2002/03', 'années de construction'], ['53,5 m', 'longueur']],
  daten: { 'Breite': 'env. 2,65 m (gabarit du Seetal)', 'Gewicht': '78 t à vide (FOS), 105 t en charge', 'Anzahl': '17 acquises', 'Einsatz': 'ligne du Seetal Lucerne–Lenzbourg' },
  specNote: 'Deux unités sont ensuite passées à Thurbo ; le chiffre de 17 désigne l’acquisition d’origine et pas forcément l’effectif CFF actuel.',
  abschnitte: [
    { titel: 'Acquisition et particularités', p: ['Les CFF ont acquis 17 véhicules numérotés 520 000–016. Leur construction étroite augmente la distance de sécurité par rapport à la route qui longe la ligne.', 'Une partie des portes était à l’origine prévue pour les quais bas du Seetal ; lors de la modernisation de 2018–2021, un accès pour les quais standard de 55 cm a été ajouté.'] },
    { titel: 'Utilisation', p: ['La zone d’utilisation principale est la ligne du Seetal Lucerne–Lenzbourg. Les véhicules ont aussi circulé temporairement sur d’autres lignes au départ de Lucerne et de Lenzbourg.'] }
  ],
  bilder: ['RABe 520 « GTW » à Beinwil am See', 'RABe 520 dans le Seetal près de Seengen', 'RABe 520 de la ligne du Seetal à Lenzbourg, 2003', 'RABe 520 au passage à niveau de Beinwil am See', 'RABe 520 en S28 près de Hunzenschwil']
});

uebZug('rabe-521', {
  typ: 'FLIRT bicourant pour l’Allemagne et la Suisse',
  text: ['Le RABe 521 est un FLIRT de quatre caisses pour les liaisons régionales transfrontalières entre le nord-ouest de la Suisse et l’Allemagne.', 'Il constitue une part importante du RER trinational de Bâle et circule aussi sur le Seehas.'],
  kennzahlen: [['39', 'rames'], ['160 km/h', 'vitesse maximale'], ['2004', 'première mise en service'], ['74,08 m', 'longueur']],
  daten: { 'Zugbildung': '4 voitures', 'Gewicht': '120 t à vide, 152 t en charge', 'Leistung': '2656 kW (valeur du type de marche FOS)', 'Nummern': '521 001–030 et 201–209', 'Einsatz': 'RER de Bâle, Seehas, Suisse–Allemagne' },
  specNote: 'Le catalogue des types de marche des CFF regroupe sous ce type d’autres variantes FLIRT à quatre caisses techniquement proches ; la puissance est donc indiquée comme valeur du type.',
  abschnitte: [
    { titel: 'Acquisition et flotte', p: ['La série compte 30 véhicules numérotés 521 001–030 et neuf autres unités 521 201–209, soit 39 rames au total. Les premiers véhicules sont entrés en service en 2004.', 'Stadler a développé la plateforme FLIRT à l’origine pour les CFF.'] },
    { titel: 'Utilisation', p: ['Les RABe 521 circulent principalement sur les lignes du RER trinational de Bâle et sur des prestations transfrontalières vers l’Allemagne.', 'Les attelages automatiques permettent la traction multiple avec des FLIRT compatibles ; les accès à plancher bas et les espaces polyvalents facilitent les échanges rapides de voyageurs.'] }
  ],
  bilder: ['RABe 521 « FLIRT »', 'RABe 521 en S3 pour Olten à Porrentruy', 'FLIRT sur le pont de la Gäubahn à Olten', 'FLIRT sur le pont de l’Aar près d’Olten', 'Intérieur du RABe 521 « Express-Hase »']
});

uebZug('rabe-522', {
  typ: 'FLIRT bicourant pour la France',
  text: ['Le RABe 522 est un FLIRT bicourant de quatre caisses pour les liaisons entre la Suisse et la France.', 'Les véhicules sont adaptés au réseau français en 25 kV et circulent surtout dans les régions de Genève et de Bâle.'],
  kennzahlen: [['32', 'rames de la série 201–232'], ['160 km/h', 'vitesse maximale'], ['2011', 'mise en service de la série actuelle'], ['75,0 m', 'longueur']],
  daten: { 'Zugbildung': '4 voitures', 'Stromsystem': '15 kV 16,7 Hz et 25 kV 50 Hz CA', 'Gewicht': '135 t à vide, 167 t en charge', 'Einsatz': 'Léman Express, trafic régional de Bâle' },
  abschnitte: [
    { titel: 'Histoire de la série', p: ['Une première série de douze véhicules portait les numéros 522 001–012. Comme ces rames n’ont d’abord pas obtenu d’homologation en France, elles ont ensuite été transformées en RABe 523.', 'La série actuelle compte 32 véhicules plus récents numérotés 522 201–232.'] },
    { titel: 'Utilisation et équipement', p: ['Les RABe 522 circulent notamment sur le réseau Léman Express et sur des liaisons régionales frontalières dans la région de Bâle.', 'Comme d’autres FLIRT, elles disposent d’une traction électrique répartie, de larges accès à plancher bas, d’espaces polyvalents et d’attelages automatiques pour la traction multiple.'] }
  ],
  bilder: ['RABe 522 209 à Delle', 'RABe 522 à Noiraigue', 'RABe 522 221 dans la livrée Léman Express à Annemasse', 'RABe 522 231 à Genève', 'RABe 522 213 à Genève-Cornavin']
});

uebZug('rabe-524', {
  typ: 'FLIRT multisystème pour TILO',
  text: ['Les RABe 524 sont des rames FLIRT de quatre et six caisses pour le trafic régional transfrontalier entre le Tessin et la Lombardie.', 'Elles peuvent circuler sous le courant alternatif suisse et sous le courant continu italien.'],
  kennzahlen: [['53', 'rames chez TILO'], ['160 km/h', 'vitesse maximale'], ['2007', 'première mise en service'], ['4 / 6', 'voitures par rame']],
  daten: { 'Zugbildung': '4 ou 6 voitures', 'Stromsystem': '15 kV 16,7 Hz CA et 3 kV CC', 'Länge': '74,1 m (4 caisses), 106,3 m (6 caisses), 104,9 m (FLIRT TSI)', 'Gewicht': '133 t (4 caisses), 174 t (6 caisses), 179 t (FLIRT TSI)', 'Anzahl': '53 (23 à quatre caisses, 17 à six caisses, 13 FLIRT TSI)', 'In Betrieb seit': '2007 (construits de 2006 à 2021)', 'Einsatz': 'TILO, Tessin–Lombardie' },
  specNote: 'Longueur et poids à vide de chaque variante selon le catalogue des types de marche des CFF. FLIRT TSI désigne la version plus récente à six caisses, conforme aux STI (RABe 524.3).',
  abschnitte: [
    { titel: 'Variantes', tabelle: { kopf: ['Variante', 'Nombre', 'Longueur', 'Poids à vide'], zeilen: [
      ['RABe 524, quatre caisses', '23', '74,1 m', '133 t'],
      ['RABe 524, six caisses', '17', '106,3 m', '174 t'],
      ['RABe 524.3, FLIRT TSI', '13', '104,9 m', '179 t']] } },
    { titel: 'Acquisition et utilisation', p: ['Les véhicules actuellement en service ont été construits entre 2006 et 2021 ; les premières rames sont entrées en service en 2007. La technique multisystème permet des liaisons directes à travers la frontière sans changement de locomotive ni de véhicule.', 'La série marque le réseau TILO au Tessin et en Lombardie. Selon la ligne, des rames de quatre ou six caisses sont engagées ; les FLIRT TSI plus récents ont surtout été acquis pour développer l’offre transfrontalière.'] }
  ],
  bilder: ['RABe 524 008 à Milano Centrale', 'RABe 524 303 dans la nouvelle livrée TILO à Milano Centrale', 'RABe 524 à Capolago-Riva San Vitale', 'RABe 524 à Milano Cadorna', 'RABe 524 012 en S20 à Locarno', 'RABe 524 014 avec publicité pour « Rete Tre » à Maccagno']
});

uebZug('ic2000', {
  beiname: 'Voitures à deux niveaux',
  typ: 'Train navette grandes lignes à deux niveaux',
  text: ['L’IC2000 est une famille de voitures voyageurs et de voitures-pilotes à deux niveaux.', 'Avec la Re 460, les voitures forment des trains navettes performants pour le trafic InterCity et InterRegio ; après leur rénovation complète, on les appelle aussi IC2020.'],
  kennzahlen: [['341', 'voitures'], ['200 km/h', 'vitesse maximale'], ['1997', 'première mise en service'], ['26,8 m', 'longueur par voiture']],
  daten: { 'Fahrzeugart': 'voiture voyageurs à deux niveaux', 'Hersteller': 'consortium Schindler (Schindler Waggon, FIAT-SIG, ABB/Adtranz)', 'Länge': '26,8 m par voiture', 'Gewicht': '47 t à vide (type FOS), 60 t en charge', 'Sitzplätze': 'jusqu’à 86 par voiture (1re classe), jusqu’à 126 par voiture (2e classe)', 'Wagenübergang': 'à l’étage supérieur', 'Antrieb': 'aucun, avec Re 460', 'Anzahl': '341 voitures' },
  abschnitte: [
    { titel: 'Acquisition et construction', p: ['Les 341 voitures ont été livrées à partir de 1997 en plusieurs séries. Les caisses ont été construites par Schindler Waggon, les bogies par FIAT-SIG et l’équipement électrique par ABB/Adtranz.', 'La famille comprend des voitures de 1re et de 2e classe, des voitures-services, des voitures-restaurants et des voitures-pilotes.'] },
    { titel: 'Modernisation et utilisation', p: ['Les CFF ont modernisé toute la flotte dans le programme IC2020. Ont notamment été renouvelés l’intérieur, l’éclairage, l’information voyageurs, les prises électriques et la perméabilité aux ondes mobiles.', 'Les compositions circulent sur d’importants axes est-ouest et nord-sud et peuvent être formées en différentes longueurs selon la demande.'] }
  ],
  bilder: ['Train navette IC2000 dans le paysage', 'Re 460 avec voitures à deux niveaux IC2000', 'Re 460 en tête de voitures à deux niveaux IC2000', 'Passage entre une voiture à un niveau et une voiture IC2000', 'Voiture-pilote IC2000 à Romanshorn']
});

uebZug('ew-iv', {
  beiname: 'Voiture unifiée IV',
  typ: 'Voiture grandes lignes climatisée',
  text: ['La voiture unifiée IV, ou EW IV, est la dernière génération de voitures unifiées suisses.', 'Ces voitures tractées ont été développées pour le trafic InterCity et circulent aujourd’hui en trains navettes ainsi qu’avec des voitures EuroCity assorties.'],
  kennzahlen: [['496', 'à l’origine pour les CFF'], ['200 km/h', 'vitesse maximale'], ['1981', 'première mise en service'], ['26,4 m', 'longueur par voiture']],
  daten: { 'Fahrzeugart': 'voiture voyageurs', 'Betreiber': 'CFF Voyageurs', 'Länge': '26,4 m par voiture', 'Gewicht': '45 t à vide (type FOS), 50 t en charge', 'Steuerwagen': 'IC Bt EW IV, 48 t à vide', 'Antrieb': 'aucun, avec locomotive séparée', 'Anzahl': '540 construites, dont 496 pour les CFF' },
  specNote: 'Le chiffre de 496 est une valeur historique et non l’effectif actuel : ventes, transformations et retraits ont réduit la flotte.',
  abschnitte: [
    { titel: 'Acquisition et modernisation', p: ['En 1981, 40 voitures climatisées de 1re classe ont d’abord été livrées ; à partir de 1983 ont suivi des voitures de 2e classe et des voitures-restaurants. Au total, 540 EW IV ont été construites, dont 496 pour les CFF.', 'Entre 2019 et 2025, les CFF ont remis en état plus de 250 voitures EW IV et EuroCity ; selon les CFF, la modernisation des voitures-pilotes se poursuit jusqu’à fin 2027.'] },
    { titel: 'Utilisation', p: ['Les voitures circulent en compositions EC, IC et IR, le plus souvent avec une Re 460. Les axes typiques vont notamment de Genève à Brigue, de Bâle à Lugano et de Zurich à Berne par Olten.'] }
  ],
  bilder: ['Voiture-pilote EW IV à Bellinzone', 'InterRegio avec EW IV à Zurich HB', 'Gotthard-Weekender avec EW IV à Brugg', 'Intérieur de 1re classe d’une EW IV', 'Voiture EW IV de 2e classe à Montreux']
});
