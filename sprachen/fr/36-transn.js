/* Français – transN (Transports Publics Neuchâtelois) */
uebDict({
  'Transports Publics Neuchâtelois': 'Transports Publics Neuchâtelois',
  'Breite': 'Largeur', 'Bezeichnung bei transN': 'Désignation chez transN', 'transN': 'transN', 'transN, früher TRN': 'transN, autrefois TRN',
  'transN, früher Trogenerbahn und Appenzeller Bahnen': 'transN, autrefois Trogenerbahn et Appenzeller Bahnen', 'transN, früher RdB und CMN': 'transN, autrefois RdB et CMN',
  '600 V Gleichstrom': '600 V continu', '1500 V Gleichstrom': '1500 V continu', '15 kV 16,7 Hz': '15 kV 16,7 Hz'
});

uebZug('trn-rabe-523', {
  typ: 'Stadler FLIRT à quatre caisses pour Neuchâtel et l’Arc jurassien',
  text: ['Les quatre FLIRT RABe 523 sont les trains à voie normale les plus récents de transN. Ils circulent sur les lignes Neuchâtel–Buttes et Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Avec les trois RABe 527 plus anciens, transN possède sept FLIRT.'],
  kennzahlen: [['4', 'rames (074–077)'], ['160 km/h', 'vitesse maximale'], ['149', 'places assises'], ['2017', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à plancher surbaissé, 4 caisses', 'Länge': '74 m', 'Breite': '2,88 m', 'Gewicht': '127 t à vide', 'Sitzplätze': '24 en 1re, 125 en 2e classe', 'Anzahl': '4 rames' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré à transN quatre FLIRT à quatre caisses de la série RABe 523, numérotés 523 074–077 ; transN indique l’année 2017. Avec les trois RABe 527, transN compte sept FLIRT dans le trafic voyageurs.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent sur les lignes transN R21 Neuchâtel–Buttes et R23 Neuchâtel–La Chaux-de-Fonds–Le Locle. Elles sont entretenues notamment au dépôt de Fleurier.', 'Une rame mesure 74 m de long et 2,88 m de large, pèse 127 t, développe 2600 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['149 places assises : 24 en 1re et 125 en 2e classe', 'Accès à plancher surbaissé, comme sur tous les FLIRT'],
        p: ['transN ne publie pas d’autres détails sur sa page de flotte, par exemple sur les places pour fauteuils roulants ou les WC.'] }
    ],
  bilder: ['RABe 523 074 en RegioExpress pour Le Locle à La Chaux-de-Fonds (2018)', 'RABe 523 entre Le Crêt-du-Locle et Le Locle (2018)', 'RABe 523 076 (2019)']
});
uebZug('trn-rabe-527', {
  typ: 'Stadler FLIRT à quatre caisses de la première série transN',
  text: ['Les trois RABe 527 forment la série FLIRT la plus ancienne de transN. Ils sont arrivés de 2007 à 2009 aux Transports Régionaux Neuchâtelois (TRN), qui font aujourd’hui partie de transN.', 'Ils circulent avec les RABe 523 plus récents.'],
  kennzahlen: [['3', 'rames (331–333)'], ['160 km/h', 'vitesse maximale'], ['184', 'places assises'], ['2007', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à plancher surbaissé, 4 caisses', 'Länge': '74 m', 'Breite': '2,88 m', 'Gewicht': '120 t à vide', 'Sitzplätze': '24 en 1re, 160 en 2e classe', 'Anzahl': '3 rames' },
  specNote: 'transN indique les années 2007–2009. À ne pas confondre avec les RABe 527 des TPF ou des CFF.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré les trois rames de 2007 à 2009, alors pour les TRN. Depuis la fusion de 2012, elles appartiennent à transN. Des photos attestent les numéros 527 331–333.'] },
      { titel: 'Utilisation et technique', p: ['Comme les RABe 523, les rames circulent sur les lignes R21 Neuchâtel–Buttes et R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.', 'Une rame mesure 74 m de long et 2,88 m de large, pèse 120 t, développe 2600 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['184 places assises : 24 en 1re et 160 en 2e classe', 'Accès à plancher surbaissé'],
        p: ['transN ne publie pas d’autres détails sur l’équipement sur sa page de flotte.'] }
    ],
  bilder: ['RABe 527 331 au Locle (2016)', 'RABe 527 331 à La Chaux-de-Fonds (2024)', 'RABe 527 331 à La Chaux-de-Fonds (2016)']
});
uebZug('trn-be-4-8', {
  typ: 'Automotrice articulée Stadler à trois caisses du Littorail (ex Trogenerbahn)',
  text: ['Sur la ligne du Littorail de Neuchâtel à Boudry circulent cinq automotrices articulées Stadler à trois caisses. Elles viennent de la Trogenerbahn près de Saint-Gall.', 'transN les appelle « GTW 4/8 » ; historiquement, ce sont des Be 4/8.'],
  kennzahlen: [['5', 'rames (031–035)'], ['80 km/h', 'vitesse maximale'], ['259', 'places au total'], ['2019', 'chez transN']],
  daten: { 'Bauart': 'automotrice articulée à trois caisses avec parties à plancher surbaissé', 'Länge': '36,3 m', 'Breite': '2,40 m', 'Gewicht': '47,3 t à vide', 'Sitzplätze': '259 places au total', 'Anzahl': '5 rames', 'In Betrieb seit': '2004 (chez transN depuis 2019)' },
  specNote: 'Les valeurs techniques sont les données actuelles de transN ; les anciennes fiches de la Trogenerbahn diffèrent en partie. Les 259 places comprennent les places assises et debout.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a construit les cinq rames pour la ligne Saint-Gall–Trogen : 31 et 32 en 2004, 33 à 35 en 2008. Elles ont ensuite circulé aux Appenzeller Bahnen.', 'transN a acheté les cinq rames en 2018 pour environ 8 millions de francs. La première, la 032, est arrivée à Neuchâtel le 9 avril 2019.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent sur la ligne du Littorail R15 de Neuchâtel Place Pury à Boudry. Elles y ont remplacé les automotrices Be 4/4 501–506 de 1981 et 1988.', 'Une rame mesure 36,3 m, pèse 47,3 t, développe 432 kW et roule jusqu’à 80 km/h. La ligne de contact est alimentée en 600 V continu.'] },
      { titel: 'Équipement et accessibilité', liste: ['Automotrice articulée à trois caisses avec parties à plancher surbaissé', '259 places au total, assises et debout'],
        p: ['transN ne donne pas d’indication sur les places pour fauteuils roulants ou d’autres équipements sur sa page de flotte.'] }
    ],
  bilder: ['Be 4/8 033 à l’arrivée à Boudry (2021)', 'Be 4/8 034 à Boudry Littorail (2025)', 'Be 4/8 035, ex Trogenerbahn (2021)', 'Be 4/8 035 à Neuchâtel Place Pury (2025)']
});
uebZug('trn-abe-4-8', {
  typ: 'Automotrice Stadler à deux caisses pour La Chaux-de-Fonds–Les Ponts-de-Martel',
  text: ['Depuis 2024, deux nouvelles automotrices Stadler circulent entre La Chaux-de-Fonds et Les Ponts-de-Martel. Elles portent les numéros 9 et 10.', 'Elles ont remplacé les anciennes automotrices à plancher haut et offrent un accès à plancher surbaissé.'],
  kennzahlen: [['2', 'rames (9, 10)'], ['80 km/h', 'vitesse maximale'], ['237', 'places au total'], ['2024', 'mise en service']],
  daten: { 'Bauart': 'automotrice électrique à deux caisses', 'Fahrzeugnummern': '9 et 10', 'Länge': '39 m', 'Breite': '2,65 m', 'Gewicht': '67,1 t à vide', 'Sitzplätze': '237 places au total', 'Anzahl': '2 rames' },
  specNote: 'Une première fiche de projet indiquait 39,30 m et 55 t. Ce sont les valeurs actuelles de transN qui s’appliquent ici.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a construit les deux rames 9 et 10 ; elles sont entrées en service en 2024. Elles ont remplacé les automotrices BDe 4/4 6 et 7 de 1991 et 8 de 1996, qui avaient des accès hauts.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent sur la R22 La Chaux-de-Fonds–Les Ponts-de-Martel. La ligne de contact est alimentée en 1500 V continu.', 'Une rame mesure 39 m de long et 2,65 m de large, pèse 67,1 t, développe 1600 kW et roule jusqu’à 80 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Accès à plancher surbaissé', '237 places au total, assises et debout', 'Deux caisses'],
        p: ['Grâce à l’accès à plancher surbaissé, la ligne est bien plus accessible qu’avec les anciennes automotrices à plancher haut.'] }
    ],
  bilder: ['ABe 4/8 9 (2024)', 'ABe 4/8 10 à La Chaux-de-Fonds (2024)']
});
uebZug('trn-bde-4-4', {
  beiname: '3 et 5',
  typ: 'Automotrices de 1950 pour Le Locle–Les Brenets',
  text: ['Les deux automotrices de 1950 circulent sur la courte ligne du Locle aux Brenets. Elles ont été modernisées dans les années 1980.', 'Selon une décision de fin 2023, le chemin de fer continuera au moins jusqu’en 2031.'],
  kennzahlen: [['2', 'automotrices (3, 5)'], ['60 km/h', 'vitesse maximale'], ['146', 'places au total'], ['1950', 'construction']],
  daten: { 'Bauart': 'automotrice électrique avec compartiment à bagages', 'Fahrzeugnummern': '3 et 5', 'Länge': '16,6 m', 'Breite': '2,68 m', 'Gewicht': '24 t à vide', 'Sitzplätze': '42 places assises, 146 places au total' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Reggiane, en Italie, a construit les automotrices en 1950, avec un équipement de TIBB et SAAS. Ramseier & Jenzer, à Bienne, a modernisé la 3 en 1985/86 et la 5 en 1986/87. transN exploite aujourd’hui ces deux automotrices.'] },
      { titel: 'Utilisation et technique', p: ['Les automotrices circulent sur la R24, la ligne d’un peu plus de 4 km entre Le Locle et Les Brenets. En 2020, le canton et les communes prévoyaient de remplacer le train par un bus dès 2025 ; fin 2023, il a été décidé que les trains circuleraient au moins jusqu’en 2031.', 'Une automotrice mesure 16,6 m, pèse 24 t, développe 480 kW et roule jusqu’à 60 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['146 places au total, assises et debout', 'Compartiment à bagages (lettre D)', 'Accès hauts avec marches'] }
    ],
  bilder: ['BDe 4/4 5 sortant du tunnel des Petits-Monts près du Locle (2020)', 'BDe 4/4 5 aux Brenets (2018)', 'BDe 4/4 5 des CMN aux Brenets (1998)']
});
uebZug('trn-tm-44-normal', {
  beiname: '235 077 voie normale',
  typ: 'Tracteur de travaux diesel-électrique Stadler',
  text: ['transN possède deux tracteurs de travaux modernes Tm 4/4 de Stadler, l’un pour la voie normale et l’autre pour la voie métrique. Celui-ci, le Tm 235 077, travaille depuis 2023 sur le réseau à voie normale.', 'Il dispose d’une grue et d’une surface de chargement pour le matériel.'],
  kennzahlen: [['1', 'véhicule (235 077)'], ['80 km/h', 'vitesse maximale (type)'], ['480 kW', 'puissance du moteur (type)'], ['2023', 'première mise en service']],
  daten: { 'Bauart': 'tracteur de travaux diesel-électrique avec grue', 'Motor': 'Mercedes-Benz OM 473 (type)', 'Länge': '18,0 m (type)', 'Gewicht': '52 t (type)', 'Leistung': '480 kW (type)', 'Höchstgeschwindigkeit': '80 km/h (type)' },
  specNote: 'Les valeurs marquées « type » décrivent la famille de véhicules selon la Schweizer Eisenbahn-Revue 3/2023. Les prescriptions d’exploitation indiquent 60 t pour ce tracteur dans le tableau des trains ; la raison de cet écart n’est pas éclaircie.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['En mai 2021, transN a commandé chez Stadler quatre véhicules apparentés, avec TRAVYS et la NStCM ; une machine à voie normale et une à voie métrique étaient destinées à transN. Les deux sont arrivées en 2023.', 'Le tracteur à voie normale porte le numéro 98 85 5 235 077-5, en bref Tm 235 077. Il ne faut pas le confondre avec l’ancien Tm 237 312.'] },
      { titel: 'Utilisation et technique', p: ['Le tracteur sert à la construction, à l’entretien et au transport de matériel sur le réseau à voie normale de transN, par exemple sur la ligne Travers–Buttes.', 'Le type est diesel-électrique : un moteur Mercedes-Benz OM 473 de 480 kW alimente quatre moteurs de traction. Le tracteur mesure 18,0 m, pèse 52 t et roule jusqu’à 80 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grue Palfinger d’une portée jusqu’à 17 m (type)', 'Plate-forme de chargement de 12 t, transport de rails jusqu’à 15 m (type)', 'Radiocommande (type)', 'Pas de compartiment voyageurs'] }
    ]
});
uebZug('trn-tm-44-meter', {
  beiname: '012 voie métrique',
  typ: 'Tracteur de travaux diesel-électrique Stadler pour la voie métrique',
  text: ['Le Tm 4/4 012 à voie métrique est entré en service chez transN en 2023. Il travaille pour les chantiers sur les lignes à voie métrique.', 'Il est le frère du tracteur à voie normale du même type.'],
  kennzahlen: [['1', 'véhicule (012)'], ['80 km/h', 'vitesse maximale (type)'], ['480 kW', 'puissance du moteur (type)'], ['2023', 'mise en service']],
  daten: { 'Bauart': 'tracteur de travaux diesel-électrique avec grue', 'Motor': 'Mercedes-Benz OM 473 (type)', 'Länge': '18,0 m (type)', 'Gewicht': '52 t (type)', 'Leistung': '480 kW (type)', 'Höchstgeschwindigkeit': '80 km/h (type)' },
  specNote: 'Les valeurs marquées « type » décrivent la famille de véhicules selon la Schweizer Eisenbahn-Revue 3/2023.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré le tracteur ; transN l’a mis en service en 2023. Il porte le numéro 90 85 8570 012-7, en bref Tm 4/4 012.'] },
      { titel: 'Utilisation et technique', p: ['Il travaille pour les chantiers sur le réseau à voie métrique de transN, notamment sur la R22 La Chaux-de-Fonds–Les Ponts-de-Martel. Il déplace des rails, du matériel de construction et des wagons à ballast.', 'Le type est diesel-électrique : un moteur Mercedes-Benz OM 473 de 480 kW alimente les moteurs de traction. Le tracteur mesure 18,0 m, pèse 52 t et roule jusqu’à 80 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Grue Palfinger d’une portée d’env. 17 m (type)', 'Plate-forme de chargement de 12 t (type)', 'Pas de compartiment voyageurs'] }
    ]
});

/* cartes « Où circule-t-il ? » */
uebEinsatz({
  'trn-rabe-523': 'Sur les lignes transN R21 Neuchâtel–Val-de-Travers–Buttes et R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.',
  'trn-rabe-527': 'Sur les lignes transN R21 Neuchâtel–Val-de-Travers–Buttes et R23 Neuchâtel–La Chaux-de-Fonds–Le Locle.',
  'trn-be-4-8': 'Sur la ligne du Littorail R15 de Neuchâtel Place Pury à Boudry. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-abe-4-8': 'Sur la R22 La Chaux-de-Fonds–Les Ponts-de-Martel. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-bde-4-4': 'Sur la R24 Le Locle–Les Brenets, une ligne à voie métrique d’un peu plus de 4 km. Elle est tracée en pointillé.',
  'trn-tm-44-normal': 'Pour la construction et l’entretien sur le réseau à voie normale de transN, par exemple sur la ligne Travers–Buttes.',
  'trn-tm-44-meter': 'Pour les chantiers sur les lignes à voie métrique de transN, notamment La Chaux-de-Fonds–Les Ponts-de-Martel. La voie métrique est tracée en pointillé et simplifiée.'
});
