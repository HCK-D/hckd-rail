/* Français – transN : véhicules historiques et spéciaux */
uebDict({
  'transN, früher CMN und TRN': 'transN, auparavant CMN et TRN', 'transN, früher RVT und TRN': 'transN, auparavant RVT et TRN',
  'RVT, später TRN und transN': 'RVT, puis TRN et transN', 'RVT, später TRN': 'RVT, puis TRN', 'TN, später TRN und transN': 'TN, puis TRN et transN',
  'NCB und TN': 'NCB et TN', 'TN': 'TN', 'TRN': 'TRN', 'Régional des Brenets (RdB)': 'Régional des Brenets (RdB)'
});

uebZug('trn-tm-2-2-11', {
  typ: 'Tracteur de travaux diesel à deux essieux pour la voie métrique',
  text: ['Le Tm 2/2 11 est un petit tracteur diesel de 1983 provenant du parc des anciens CMN. Il sert à la construction et à l’entretien sur la voie métrique.', 'Le tableau des véhicules de transN de 2024 le mentionne pour la ligne La Chaux-de-Fonds–Les Ponts-de-Martel.'],
  kennzahlen: [['1983', 'construction'], ['175 kW', 'puissance du moteur'], ['70 km/h', 'vitesse maximale'], ['19 t', 'poids']],
  daten: { 'Bauart': 'tracteur diesel à deux essieux', 'Hersteller': 'RACO (type 240 DT 4H)' },
  specNote: '70 km/h est la vitesse maximale du véhicule, pas la vitesse autorisée lors des travaux. Il n’est pas confirmé séparément que le tracteur soit encore en état de service en octobre 2026.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['RACO a construit le tracteur en 1983, type 240 DT 4H, pour les Chemins de fer des Montagnes Neuchâteloises (CMN). Il est arrivé chez transN par les TRN. Une photo de 1986 le montre aux Ponts-de-Martel.', 'Il appartient à la génération précédant les tracteurs Stadler à quatre essieux ; en 2023 s’y est ajouté le Tm 4/4 012, bien plus grand.'] },
      { titel: 'Utilisation et technique', p: ['Les prescriptions d’exploitation voie métrique de transN (valables dès le 15 décembre 2024) le mentionnent pour la ligne La Chaux-de-Fonds–Les Ponts-de-Martel.', 'Les deux essieux sont moteurs. Le moteur diesel développe 175 kW ; le tracteur pèse 19 t et roule jusqu’à 70 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux essieux moteurs', 'Poids-frein de 17 t', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Tm 2/2 11 des CMN aux Ponts-de-Martel (1986)']
});
uebZug('trn-tm-237-312', {
  typ: 'Tracteur de travaux diesel à deux essieux pour la voie normale',
  text: ['Le Tm 237 312 est un petit tracteur diesel de 1983 provenant du parc du RVT, au Val-de-Travers. Il s’appelait auparavant Tm 2/2 12.', 'Il ne faut pas le confondre avec le nouveau Tm 4/4 012 à voie métrique.'],
  kennzahlen: [['1983', 'construction'], ['175 kW', 'puissance du moteur'], ['19 t', 'poids'], ['10 m', 'longueur']],
  daten: { 'Bauart': 'tracteur diesel à deux essieux', 'Hersteller': 'RACO (type 240 DT 4H)', 'Fahrzeugnummern': 'Tm 237 312, auparavant Tm 2/2 12', 'Länge': '10 m (selon le tableau des trains)' },
  specNote: 'La longueur et le poids proviennent du tableau des trains des prescriptions d’exploitation voie normale de transN d’avril 2025. On ignore s’il est encore utilisé après août 2025.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['RACO a construit le tracteur en 1983, type 240 DT 4H, pour le Régional du Val-de-Travers (RVT), où il s’appelait Tm 2/2 12. Il est arrivé chez transN par les TRN et porte aujourd’hui le numéro Tm 237 312.', 'Depuis 2023, transN dispose avec le Tm 4/4 235 077 d’un successeur à quatre essieux bien plus grand.'] },
      { titel: 'Utilisation et technique', p: ['Le tracteur a servi à l’entretien et aux manœuvres au Val-de-Travers. Une photo le montre en 2016 à Fleurier, une autre en août 2025 près du dépôt de Fleurier. Les prescriptions d’exploitation voie normale d’avril 2025 le mentionnent encore.', 'Le moteur diesel développe 175 kW. Selon le tableau des trains, le tracteur mesure 10 m et pèse 19 t.'] },
      { titel: 'Équipement et accessibilité', liste: ['Deux essieux', 'Poids-frein de 17 t, pourcentage de freinage de 89 %', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Tm 237 312 à Fleurier (2016)']
});
uebZug('trn-zweiwege', {
  name: 'Véhicules rail-route', beiname: 'dumper 102 et pelle',
  typ: 'Véhicules rail-route pour les travaux sur la voie métrique',
  text: ['Sur ses lignes à voie métrique, transN utilise deux véhicules rail-route : un dumper numéroté 102 et une pelle rétro. Tous deux circulent sur la route et sur les rails.', 'Selon les prescriptions d’exploitation, tous deux ont été mis en service en 2021.'],
  kennzahlen: [['2', 'véhicules'], ['2021', 'mise en service'], ['20 km/h', 'dumper sur rails'], ['16 km/h', 'pelle sur rails']],
  daten: { 'Bauart': 'dumper rail-route et pelle rétro rail-route', 'Fahrzeugnummern': 'dumper 102 ; la pelle n’a pas de numéro dans le tableau', 'Gewicht': 'dumper 14,5 t, pelle 12 t (à vide)', 'Höchstgeschwindigkeit': 'dumper 20 km/h, pelle 16 km/h (sur rails)' },
  specNote: 'Les prescriptions d’exploitation n’indiquent ni le constructeur ni le type. 14,5 t et 12 t sont des tares ; on ne peut pas en déduire une charge utile.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le tableau des véhicules des prescriptions d’exploitation voie métrique (valables dès le 15 décembre 2024) mentionne un « Dumper rail-route » numéroté 102 et une « Pelle rétro rail-route ». Tous deux ont été mis en service en 2021.', 'Le constructeur et le modèle des deux véhicules n’y sont pas indiqués.'],
        tabelle: { kopf: ['Véhicule', 'Tare', 'Sur rails', 'Places'], zeilen: [['Dumper 102', '14,5 t', '20 km/h', '2'], ['Pelle rétro', '12 t', '16 km/h', '1']] } },
      { titel: 'Utilisation et technique', p: ['Les deux véhicules figurent pour les lignes à voie métrique La Chaux-de-Fonds–Les Ponts-de-Martel et Le Locle–Les Brenets. Le dumper transporte du matériel, la pelle travaille sur la voie et à côté.', 'Sur les rails, des prescriptions d’exploitation particulières s’appliquent. Le dumper a un poids-frein de 10 t et une force de retenue de 12 kN, la pelle 9 t et 10 kN.'] },
      { titel: 'Équipement et accessibilité', liste: ['Roues pour la route et le rail', 'Dumper avec 2 places, pelle avec 1 place', 'Pas de compartiment voyageurs'] }
    ]
});
uebZug('trn-ast-21', {
  typ: 'Voiture-pilote panoramique et salon pour courses spéciales',
  text: ['L’ASt 21 est une voiture-pilote panoramique et salon à voie métrique. Elle a été créée à partir de l’automotrice BDe 4/4 1 des CMN de 1950 et mise en service en 1999.', 'Elle n’a pas de propulsion propre et circule avec une automotrice BDe 4/4.'],
  kennzahlen: [['1999', 'transformation'], ['46', 'places assises'], ['80 km/h', 'vitesse maximale'], ['18 t', 'tare']],
  daten: { 'Bauart': 'voiture-pilote avec salon, sans propulsion propre', 'Fahrzeugnummern': 'ASt 21, auparavant BDe 4/4 1', 'Gewicht': '18 t à vide', 'In Betrieb seit': '1999 (transformation ; véhicule d’origine de 1950)' },
  specNote: 'Certaines descriptions plus anciennes indiquent 1998 comme année de transformation ; ici vaut 1999 selon les prescriptions d’exploitation de transN. Il n’est pas confirmé séparément que la voiture soit en état de service en 2026.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La voiture a été créée à partir de l’automotrice BDe 4/4 1 des CMN de 1950. Des parties de l’ancienne automotrice ont été conservées lors de la transformation ; selon les prescriptions d’exploitation de transN, l’ASt 21 a été mise en service en 1999.', 'Le tableau des véhicules de transN la mentionne encore en 2024.'] },
      { titel: 'Utilisation et technique', p: ['La voiture est prévue pour des offres de voyage particulières, pas pour le trafic pendulaire ordinaire. En tant que voiture-pilote, elle n’a pas de propulsion propre ; elle circule avec une automotrice BDe 4/4.', 'Elle pèse 18 t à vide, a un poids-frein de 20 t et roule jusqu’à 80 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['46 places assises', 'Grandes fenêtres panoramiques', 'Aménagement de salon au lieu de sièges pour pendulaires'] }
    ],
  bilder: ['Voiture-pilote panoramique ASt 21']
});
uebZug('trn-be-4-4-1', {
  typ: 'Locomotive électrique marchandises du RVT de 1951 (historique)',
  text: ['La Be 4/4 1 est une locomotive unique du RVT au Val-de-Travers. Elle a surtout tiré des trains de marchandises et des trains scolaires.', 'Depuis le 1er mars 2019, elle appartient à l’association RVT-Historique.'],
  kennzahlen: [['1951', 'construction'], ['703 kW', 'puissance unihoraire'], ['75 km/h', 'vitesse maximale'], ['45 t', 'poids en service']],
  daten: { 'Bauart': 'locomotive électrique à quatre moteurs de traction', 'Länge': '11,15 m hors tampons', 'Leistung': '703 kW unihoraire, 611 kW continue (à la jante)', 'Erhalten': 'RVT-Historique (depuis 2019)' },
  specNote: 'Données techniques selon la fiche de RVT-Historique. La locomotive ne fait pas partie de la flotte marchandises actuelle de transN.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les Ateliers de Vevey ont construit la locomotive en 1951, avec un équipement électrique de Sécheron, pour le Régional du Val-de-Travers (RVT). Elle est restée unique et porte le surnom de « Bobo ».', 'Son numéro européen de véhicule est 91 85 4417 301-9.'] },
      { titel: 'Utilisation et technique', p: ['Le RVT l’a surtout utilisée en tête de trains de marchandises et de trains scolaires sur la ligne à voie normale du Val-de-Travers. Lorsque son service régulier a diminué, RVT-Historique l’a d’abord louée. Le 1er mars 2019, transN l’a officiellement remise à l’association.', 'Quatre moteurs de traction développent à la jante 703 kW en régime unihoraire et 611 kW en régime continu. La locomotive mesure 11,15 m, pèse 45 t et roule jusqu’à 75 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Quatre moteurs de traction', 'Pour courant alternatif 15 kV 16,7 Hz', 'Aujourd’hui dans le parc de RVT-Historique'] }
    ],
  bilder: ['Be 4/4 1 du RVT à Fleurier (1984)']
});
uebZug('trn-abde-2-4-102', {
  typ: 'Automotrice électrique du RVT de 1944 (historique)',
  text: ['L’ABDe 2/4 102 a été construite pour l’électrification du RVT au Val-de-Travers. Elle a circulé en service régulier jusqu’en décembre 2004.', 'Aujourd’hui, elle appartient à RVT-Historique sous le nom de « L’Étincelante » et possède un bar pour les courses de groupes.'],
  kennzahlen: [['1944', 'construction'], ['412 kW', 'puissance'], ['70 km/h', 'vitesse maximale'], ['59', 'places assises']],
  daten: { 'Bauart': 'automotrice électrique avec compartiment à bagages', 'Fahrzeugnummern': 'BCFe 2/4 102, puis ABFe 2/4 et ABDe 2/4 (EVN 94 85 7537 312-1)', 'Sitzplätze': '59, dont 8 en 1re classe', 'In Betrieb seit': 'janvier 1945' },
  specNote: 'Construite en 1944, en service depuis janvier 1945. Données techniques selon RVT-Historique. Une photo sous licence libre n’existe que de l’automotrice sœur 101, c’est pourquoi aucune n’est montrée ici.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SWS et BBC ont construit l’automotrice en 1944 pour l’électrification du RVT ; elle a été mise en service en janvier 1945. Elle s’appelait d’abord BCFe 2/4 102, puis ABFe 2/4 et enfin ABDe 2/4. Son numéro européen de véhicule reprend le numéro ultérieur 312.', 'Sa sœur était l’automotrice 101.'] },
      { titel: 'Utilisation et technique', p: ['Son dernier service régulier est daté de décembre 2004. RVT-Historique l’a rénovée en 2006, a installé un bar dans le compartiment à bagages et lui a rendu ses couleurs d’origine. Aujourd’hui, elle circule pour des courses touristiques et des groupes.', 'Elle mesure 21 m, pèse 40 t, développe 412 kW et roule jusqu’à 70 km/h. Les roues ont un diamètre de 940 mm.'] },
      { titel: 'Équipement et accessibilité', liste: ['59 places assises, dont 8 en 1re classe', 'Bar dans l’ancien compartiment à bagages (depuis 2006)', 'Sonorisation et tables amovibles'] }
    ]
});
uebZug('trn-rbde-106', {
  beiname: '106 et ABt 204',
  typ: 'Train navette à voie normale du RVT de 1985 (historique)',
  text: ['L’automotrice RBDe 106 et la voiture-pilote ABt 204 forment une navette du RVT. Chez les TRN et transN, l’automotrice portait le numéro 316.', 'En juin 2024, RVT-Historique a repris les deux véhicules ; depuis le 1er mai 2025, ils circulent de nouveau aux couleurs du RVT.'],
  kennzahlen: [['1985', 'mise en service de l’automotrice'], ['2', 'véhicules'], ['87', 'places assises dans le train'], ['2025', 'de nouveau aux couleurs du RVT']],
  daten: { 'Bauart': 'automotrice électrique avec voiture-pilote (navette)', 'Fahrzeugnummern': 'RBDe 106 (plus tard 316), ABt 204', 'Sitzplätze': '87 dans le train : 24 en 1re, 63 en 2e classe', 'Anzahl': '2 véhicules', 'Erhalten': 'RVT-Historique (depuis juin 2024)', 'In Betrieb seit': '1985 (automotrice)' },
  specNote: 'Les 87 places assises valent pour tout le train formé de l’automotrice et de la voiture-pilote. Les sources vérifiées n’indiquent ni la longueur, le poids et la puissance de l’automotrice, ni l’année de construction de la voiture-pilote. Les photos de 2006 montrent le train dans la livrée TPF de l’époque.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['L’automotrice est arrivée au RVT en 1985 sous le numéro RBDe 106. Elle fait partie des trains navettes que de nombreux chemins de fer privés suisses ont acquis à cette époque. Chez les TRN et transN, elle portait le numéro 316.', 'La voiture-pilote ABt 204 a la première et la deuxième classe. Grâce à elle, le train peut changer de sens sans que l’automotrice doive faire le tour.'] },
      { titel: 'Utilisation et technique', p: ['De 2004 à 2013, l’automotrice 316 et la voiture-pilote 204 étaient louées aux TPF et y circulaient dans la livrée TPF, avec des voitures intermédiaires TPF. Ensuite, transN n’a plus utilisé le train pendant plusieurs années dans le trafic voyageurs commercial.', 'En juin 2024, RVT-Historique a repris les deux véhicules. La peinture extérieure a été refaite entre septembre 2024 et mars 2025 ; la première course aux couleurs restaurées du RVT a eu lieu le 1er mai 2025.'] },
      { titel: 'Équipement et accessibilité', liste: ['87 places assises dans le train : 24 en 1re et 63 en 2e classe', 'Bar et tables aux places (après la restauration)', 'Voiture-pilote pour changer de sens sans manœuvre'] }
    ],
  bilder: ['RBDe 316 et ABt 204 en livrée TPF à Fribourg (2006)', 'ABt 204 et RBDe 316 avec des voitures intermédiaires TPF à Fribourg (2006)']
});
uebZug('trn-abm-2-5-9', {
  typ: 'Automotrice diesel-électrique de 1914 (historique)',
  text: ['L’ABm 2/5 9 est l’une des premières automotrices diesel d’Europe. Elle a été construite en 1914 pour les chemins de fer de l’État de Saxe et a circulé sur le RVT de 1924 à 1965.', 'Aujourd’hui, elle fait partie de la collection du Musée Suisse des Transports.'],
  kennzahlen: [['1914', 'construction'], ['1924–1965', 'au RVT'], ['diesel', 'avec transmission électrique'], ['Musée des Transports', 'collection']],
  daten: { 'Bauart': 'automotrice diesel-électrique', 'Betreiber': 'Chemins de fer de l’État de Saxe, puis RVT (1924–1965)', 'Antrieb': 'moteur diesel avec génératrice, moteur de traction électrique', 'Fahrzeugnummern': 'BCm 2/5, puis ABm 2/5 9', 'Erhalten': 'Musée Suisse des Transports' },
  specNote: 'L’année 1914 suit la classification historique du Musée Suisse des Transports. L’emplacement actuel de l’automotrice n’est pas confirmé ; un article de 2018 traite de son transfert dans un dépôt externe.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La Waggonfabrik Rastatt a construit la voiture avec un équipement électrique de BBC et un moteur diesel Sulzer. Elle est issue d’un mandat de développement commun des chemins de fer de l’État de Saxe et de Prusse.', 'Après la Première Guerre mondiale, deux automotrices de ce type sont arrivées en Suisse. La future ABm 2/5 9 du RVT a été conservée.'] },
      { titel: 'Utilisation et technique', p: ['Selon le Musée des Transports, le RVT l’a utilisée de 1924 à 1965. De telles automotrices remplaçaient la coûteuse traction à vapeur sur les lignes peu fréquentées.', 'Un moteur diesel entraîne une génératrice qui alimente le moteur de traction électrique. Un bogie est moteur, l’autre est porteur.'] },
      { titel: 'Équipement et accessibilité', liste: ['Compartiments de 1re et 2e classe (type AB)', 'À partir de 1982 dans l’exposition permanente du Musée des Transports', 'Aux archives : description Sulzer de 1915'] }
    ],
  bilder: ['ABm 2/5 9 au Musée des Transports, côté bogie moteur (2009)', 'ABm 2/5 9 au Musée des Transports, côté bogie porteur (2009)']
});
uebZug('trn-be-2-4', {
  typ: 'Tram interurbain des TN de 1902 (historique)',
  text: ['Les Be 2/4 41 à 47 étaient les grands trams interurbains des Tramways de Neuchâtel (TN) sur la ligne de Boudry et Cortaillod.', 'Les numéros 44 et 45 sont conservés au Musée du tram de Neuchâtel (ANAT).'],
  kennzahlen: [['1902', 'mise en service'], ['7', 'motrices (41–47)'], ['50 km/h', 'vitesse maximale'], ['1981', 'retrait']],
  daten: { 'Bauart': 'motrice de tram à quatre essieux et deux moteurs', 'Sitzplätze': '30, plus 43 places debout', 'Erhalten': '44 et 45 au Musée du tram de Neuchâtel (ANAT)' },
  specNote: 'Valeurs techniques selon le Musée du tram de Neuchâtel. D’anciennes descriptions de photos indiquent 74 kW au lieu de 72 kW. Il n’est pas confirmé que les voitures soient aujourd’hui en état de marche.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La fabrique de wagons de Schlieren (SWS) a construit les sept motrices, avec un équipement électrique de MFO. Elles ont été mises en service en 1902.', 'La 44 est revenue à Neuchâtel en 2013 depuis la collection de l’AMTUIR près de Paris ; la 45 est restée conservée à l’ANAT.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures circulaient sur la ligne interurbaine Neuchâtel–Boudry et sur l’ancien embranchement de Cortaillod, aussi en unités multiples avec des remorques. En 1981, elles ont été officiellement retirées lors du passage au nouveau matériel Littorail.', 'Deux moteurs développent ensemble 72 kW. Une voiture mesure 12,5 m, pèse 15,3 t et roule jusqu’à 50 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['30 places assises et 43 places debout', 'Remorques à quatre essieux assorties B4 111–114', 'Aujourd’hui véhicules de musée de l’ANAT'] }
    ],
  bilder: ['Be 2/4 45 au dépôt de l’ANAT à Boudry (2011)', 'Be 2/4 44 sur la ligne 5 en direction d’Auvernier (1979)']
});
uebZug('trn-be-2-2', {
  beiname: '73 et 76',
  typ: 'Trams urbains à deux essieux des TN de 1922 (historiques)',
  text: ['Les motrices de tram à deux essieux 71 à 79 circulaient sur le réseau urbain des TN. Deux sont conservées : la 73 au Musée du tram de Neuchâtel et la 76 au chemin de fer-musée Blonay–Chamby.', 'La 73 circule avec des remorques historiques sous le nom de « Le Britchon ».'],
  kennzahlen: [['1922', 'construction (73 et 76)'], ['102 kW', 'puissance (73)'], ['35 km/h', 'vitesse maximale'], ['2', 'voitures conservées']],
  daten: { 'Bauart': 'motrice de tram à deux essieux', 'Hersteller': '73 : ateliers des TN avec BBC et MFO ; 76 : SIG, MFO, BBC (selon Blonay–Chamby)', 'Stromsystem': '600 V continu (76 à Blonay–Chamby : 1000 V)', 'Fahrzeugnummern': '71–78, plus tard 79 ; conservées 73 et 76', 'Länge': '9,2 m (73)', 'Leistung': '102 kW (73), 104 kW (76)', 'Sitzplätze': '20, plus 35 places debout (73)', 'Erhalten': '73 au Musée du tram de Neuchâtel, 76 à Blonay–Chamby' },
  specNote: 'La série a été construite de 1921 à 1928 ; pour la 73 et la 76, les musées indiquent 1922. Valeurs de la 73 selon le Musée du tram de Neuchâtel, valeurs de la 76 selon Blonay–Chamby, qui la désigne Ce 2/2 76.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La série 71 à 78 a été construite entre 1921 et 1928 ; la 79 s’y est ajoutée plus tard. Selon le musée, les TN ont construit la 73 dans leurs propres ateliers, avec un équipement électrique de BBC et MFO. Pour la 76, Blonay–Chamby cite SIG, MFO et BBC.'] },
      { titel: 'Utilisation et technique', p: ['Jusqu’à la conversion de la ligne 3 vers Corcelles au trolleybus en juillet 1976, les deux voitures circulaient en service régulier. La 76 est arrivée au chemin de fer-musée Blonay–Chamby le 18 août 1976 ; elle y attend une révision.', 'Depuis 1994, la 73 circule comme motrice historique sur la ligne de Boudry. Elle mesure 9,2 m, pèse 10,9 t et possède deux moteurs de 51 kW chacun.'] },
      { titel: 'Équipement et accessibilité', liste: ['73 : 20 places assises et 35 places debout', '76 : à l’origine pour 600 V, à Blonay–Chamby pour 1000 V continu', 'Train « Le Britchon » : motrice 73 avec les remorques B2i 1 et B2 143'] }
    ],
  bilder: ['Tram 76 avec la remorque 143 sur la ligne 3 (1976)']
});
uebZug('trn-be-4-4-583', {
  typ: 'Motrice de tram à quatre essieux des TN de 1947 (historique)',
  text: ['Les Be 4/4 81 à 83 formaient une petite série de trams à quatre essieux des TN. La 83, devenue plus tard 583, est conservée.', 'Elle fait partie de la collection du Musée du tram de Neuchâtel.'],
  kennzahlen: [['1947', 'construction'], ['144 kW', 'puissance'], ['60 km/h', 'vitesse maximale'], ['3', 'voitures (81–83)']],
  daten: { 'Bauart': 'motrice de tram bidirectionnelle à quatre essieux', 'Fahrzeugnummern': '81–83, plus tard 581–583', 'Sitzplätze': '26, plus 39 places debout', 'Erhalten': '583 au Musée du tram de Neuchâtel (ANAT)' },
  specNote: 'Valeurs selon le Musée du tram de Neuchâtel ; une description de photo indique 148 kW au lieu de 144 kW.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SIG a construit les trois voitures en 1947, avec un équipement électrique de Sécheron (SAAS). Elles ont plus tard reçu les numéros 581 à 583.', 'La 583 est restée conservée à l’ANAT. La 582 est partie à Wiehe, en Allemagne, la 581 a été démolie en 1986.'] },
      { titel: 'Utilisation et technique', p: ['Les voitures bidirectionnelles avaient des portes des deux côtés. Après la fin de la ligne urbaine 3 en 1976, elles ont été adaptées à la ligne interurbaine de Boudry. Le service régulier des deux dernières voitures s’est terminé en 1988, à l’arrivée de nouvelles motrices Littorail.', 'Quatre moteurs développent ensemble 144 kW. Une voiture mesure 12,2 m, pèse 13,2 t et roule jusqu’à 60 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['26 places assises et 39 places debout', 'Portes des deux côtés, poste de conduite aux deux extrémités', 'Aujourd’hui dans la collection du Musée du tram de Neuchâtel'] }
    ],
  bilder: ['Be 4/4 583 (ex 83) au dépôt de l’ANAT à Boudry (2011)']
});
uebZug('trn-be-4-4-littorail', {
  typ: 'Motrices Littorail de 1981 (historiques)',
  text: ['Avec les Be 4/4 501 à 506, la ligne Neuchâtel–Boudry est devenue en 1981 la ligne moderne du Littorail. Dès 2019, des automotrices Stadler d’occasion venues de Trogen les ont remplacées.', 'La 504 « Cortaillod » est conservée au Musée du tram de Neuchâtel.'],
  kennzahlen: [['1981', 'mise en service'], ['6', 'motrices (501–506)'], ['75 km/h', 'vitesse maximale'], ['276 kW', 'puissance']],
  daten: { 'Bauart': 'motrice à quatre essieux pour la circulation avec voitures-pilotes', 'Sitzplätze': '42, plus 65 places debout', 'Erhalten': '504 « Cortaillod » au Musée du tram de Neuchâtel (ANAT)' },
  specNote: 'Valeurs selon le Musée du tram de Neuchâtel. La photo montre un train Littorail de ce type ; le numéro de la voiture visible n’est pas confirmé.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SWS à Schlieren a construit en 1981 les quatre motrices 501 à 504, avec un équipement électrique de BBC. En 1988 ont suivi la 505 et la 506. La flotte comprenait aussi les voitures-pilotes 551 à 554.', 'Le 26 octobre 2019, l’ANAT a décidé de conserver la 504 « Cortaillod ».'] },
      { titel: 'Utilisation et technique', p: ['Les voitures Littorail ont apporté à Neuchâtel–Boudry une exploitation ferroviaire régionale plus rapide et protégée par signaux, à la place de l’ancien tram interurbain. Dès 2019, des automotrices Stadler Be 4/8 d’occasion venues de Trogen ont repris leur rôle.', 'Deux moteurs développent ensemble 276 kW. Une voiture mesure 18,4 m, pèse 25,5 t et roule jusqu’à 75 km/h. La ligne de contact est alimentée en 600 V continu.'] },
      { titel: 'Équipement et accessibilité', liste: ['42 places assises et 65 places debout', 'Circulation avec les voitures-pilotes 551–554', 'La 504 portait le nom de « Cortaillod »'] }
    ],
  bilder: ['Train Littorail à la gare de Colombier (2010)']
});
uebZug('trn-xe-2-2-601', {
  typ: 'Arroseuse électrique des TN de 1911 (historique)',
  text: ['La Xe 2/2 601 a été construite en 1911 comme arroseuse : elle arrosait d’eau les routes poussiéreuses le long des lignes de tram.', 'Plus tard, elle a servi au désherbage et au service hivernal. Aujourd’hui, elle appartient au Musée du tram de Neuchâtel.'],
  kennzahlen: [['1911', 'construction'], ['66 kW', 'puissance'], ['30 km/h', 'vitesse maximale'], ['10,5 t', 'poids']],
  daten: { 'Bauart': 'motrice de service électrique à deux essieux (arroseuse)', 'Fahrzeugnummern': 'Xe 2/2 301, dès 1980 601', 'Erhalten': 'Musée du tram de Neuchâtel (ANAT)' },
  specNote: 'Valeurs selon le Musée du tram de Neuchâtel. Il n’en découle aucune autorisation d’exploitation actuelle.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['SWS a construit la voiture en 1911, avec un équipement électrique de MFO. Elle a d’abord porté le numéro 301, puis a été renumérotée 601 en 1980.'] },
      { titel: 'Utilisation et technique', p: ['À l’origine, elle arrosait d’eau les routes non revêtues pour limiter la poussière. Une fois les routes goudronnées, elle a servi au désherbage et, en hiver, au déneigement.', 'Deux moteurs développent ensemble 66 kW. Elle mesure 6,76 m, pèse 10,5 t, a un empattement de 2,2 m et roule jusqu’à 30 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Réservoir d’eau pour l’arrosage', 'Selon le musée, encore apte en principe au service de chasse-neige', 'Pas de compartiment voyageurs'] }
    ]
});
uebZug('trn-tn-wagen', {
  name: 'Wagons historiques',
  typ: 'Remorques de tram et wagons de service conservés de Neuchâtel',
  text: ['Outre les motrices, cinq wagons des trams de Neuchâtel sont conservés. Quatre sont entretenus par le Musée du tram de Neuchâtel (ANAT), un se trouve au chemin de fer-musée Blonay–Chamby.', 'Le plus ancien est le wagon marchandises X2 631 de 1892.'],
  kennzahlen: [['5', 'wagons'], ['1892', 'wagon le plus ancien'], ['4', 'au Musée du tram'], ['1', 'à Blonay–Chamby']],
  daten: { 'Bauart': 'remorques de tram et wagon marchandises', 'Erhalten': 'Musée du tram de Neuchâtel (ANAT) ; C4 121 à Blonay–Chamby' },
  specNote: 'Valeurs selon le Musée du tram de Neuchâtel et Blonay–Chamby. Des descriptions de photos indiquent parfois d’autres poids et nombres de places.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Quatre wagons sont entretenus par le Musée du tram de Neuchâtel (ANAT). La C4 121 fait partie de la collection de Blonay–Chamby depuis 1967 et y attend une révision.'],
        tabelle: { kopf: ['Wagon', 'Construction', 'Constructeur', 'Places ou charge utile'], zeilen: [
          ['B2i 1', '1894–1895 (série)', 'SIG', '12 places assises et 12 debout'], ['B4 112', '1902 (type)', 'SWS', '30 places assises et 47 debout'],
          ['B2 143', 'transformée 1914–1928 à partir de motrices de 1897/98', '–', '18 places assises et 39 debout'], ['C4 121', '1892', 'de Bâle (selon le musée)', '15 places assises et 53 debout'],
          ['X2 631 (auparavant 231)', '1892', 'NCB', '7,5 t de charge utile']] } },
      { titel: 'Utilisation et technique', p: ['La petite B2i 1 provient du tram hippomobile Neuchâtel–Saint-Blaise. Dès 1897, elle circulait derrière des trams électriques, en dernier jusqu’en 1964 vers La Coudre. Selon le musée, elle était à l’origine le numéro 5, puis le 101.', 'Les B4 111 à 114 à quatre essieux circulaient avec les trams interurbains 41 à 47 vers Boudry et Cortaillod jusqu’en 1981. Les B2 141 à 149 ont été créées par transformation d’anciennes motrices et ont circulé jusqu’en 1976 vers Saint-Blaise, Corcelles et Valangin.', 'Le X2 631 de 1892 transportait à l’origine des légumes et du lait ; depuis l’électrification du NCB en 1902, il servait de wagon de service. Il est considéré comme le dernier témoin conservé de l’époque du NCB.'] },
      { titel: 'Équipement et accessibilité', liste: ['Depuis 1994, la B2i 1 et la B2 143 forment avec la motrice 73 le train « Le Britchon »', 'B4 112 : jusqu’à 60 km/h, longueur 12,5 m', 'X2 631 : surface de chargement de 9 m²', 'C4 121 : frein à main et frein automatique à air comprimé'] }
    ],
  bilder: ['Remorque B2 143 derrière le tram 76 sur la ligne 3 (1976)']
});
uebZug('trn-g-3-3-1', {
  typ: 'Locomotive à vapeur du Régional des Brenets de 1890 (historique)',
  text: ['La petite locomotive-tender « Le Doubs » a circulé dès 1890 sur la ligne à voie métrique Le Locle–Les Brenets. Elle date de l’année d’ouverture du chemin de fer.', 'Depuis 1973, elle se trouve avec deux voitures historiques au chemin de fer-musée Blonay–Chamby, où elle attend une révision.'],
  kennzahlen: [['1890', 'construction'], ['16 t', 'poids en service'], ['25 km/h', 'vitesse maximale'], ['1973', 'à Blonay–Chamby']],
  daten: { 'Bauart': 'locomotive-tender à vapeur à trois essieux couplés', 'Hersteller': 'SLM Winterthour (numéro de fabrication 618)', 'Erhalten': 'Chemin de fer-musée Blonay–Chamby (prêt, depuis 1973)' },
  specNote: 'Valeurs selon Blonay–Chamby. La locomotive sœur G 3/3 2 n’a pas de fiche propre ; ses valeurs ne sont donc pas indiquées.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La SLM à Winterthour a construit la locomotive en 1890 avec le numéro de fabrication 618. Avec deux autres petites locomotives à vapeur, elle assurait le trafic entre Le Locle et Les Brenets.', 'L’une d’elles, la G 3/3 2 « Le Père Frédéric », est exposée comme monument aux Brenets. Son nom rappelle l’industriel Frédéric Perret, qui a financé l’achat.'] },
      { titel: 'Utilisation et technique', p: ['Après l’électrification de 1950, la locomotive a été remise pour être conservée avec deux voitures historiques. Après un entreposage à Vallorbe, le groupe est arrivé en prêt en 1973 au chemin de fer-musée Blonay–Chamby.', 'La chaudière travaille à 12 bar. Les cylindres ont un diamètre de 240 mm et une course de 350 mm, les roues 750 mm. La locomotive emporte 1,8 m³ d’eau et 0,5 t de charbon.'] },
      { titel: 'Équipement et accessibilité', p: ['Le groupe conservé du Régional des Brenets comprend deux voitures de 1890. Elles ont un frein à main et un frein automatique à vide.'],
        tabelle: { kopf: ['Véhicule', 'Construction', 'Constructeur', 'Aujourd’hui'], zeilen: [
          ['Locomotive à vapeur G 3/3 1 « Le Doubs »', '1890', 'SLM (618)', 'Blonay–Chamby'], ['Voiture BC 2 (auparavant AB 2), 6 places en 2e et 28 places en 3e classe', '1890', 'SIG Neuhausen', 'Blonay–Chamby'],
          ['Voiture avec compartiment à bagages CF 21 (auparavant BD 21), 16 places en 3e classe', '1890', 'SIG Neuhausen', 'Blonay–Chamby'], ['Locomotive à vapeur G 3/3 2 « Le Père Frédéric »', '1890', 'SLM', 'monument aux Brenets']] } }
    ],
  bilder: ['G 3/3 1 « Le Doubs » au chemin de fer-musée Blonay–Chamby', 'G 3/3 1 « Le Doubs » à Blonay–Chamby (printemps 2010)']
});
uebZug('trn-kkl-41', {
  typ: 'Wagon plat à voie métrique avec citerne posée (historique)',
  text: ['Le Kkl 41 est un wagon plat à voie métrique des TRN. En 2014, il se trouvait en gare des Brenets avec une citerne posée sur sa plate-forme.', 'Selon la description de la photo, il est parti en 2017 au musée français MTVS.'],
  kennzahlen: [['41', 'numéro'], ['voie métrique', 'écartement'], ['2014', 'photo aux Brenets'], ['2017', 'au MTVS']],
  daten: { 'Bauart': 'wagon plat avec citerne posée', 'Verbleib': '2017 au Musée des tramways à vapeur et des chemins de fer secondaires français (MTVS), selon la description de la photo' },
  specNote: 'L’année de construction, le poids, la charge utile et la contenance de la citerne ne sont pas établis. La remise au MTVS provient de la description de la photo et n’est confirmée par aucun registre de musée.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Une photo du 1er juin 2014 montre le wagon aux Brenets ; il est désigné TRN Kkl 41. Le constructeur et l’année de construction ne sont pas connus.'] },
      { titel: 'Utilisation et technique', p: ['Une citerne était posée sur la plate-forme. Son usage n’est pas documenté. Le wagon n’est donc pas un wagon-citerne à part entière, mais un wagon plat avec un réservoir posé dessus.', 'Selon la description de la photo, le chemin de fer l’a remis en 2017 au musée français MTVS.'] },
      { titel: 'Équipement et accessibilité', liste: ['Plate-forme de chargement plate', 'Citerne posée dessus (2014)', 'Pas de compartiment voyageurs'] }
    ],
  bilder: ['Kkl 41 avec citerne posée aux Brenets (2014)']
});

/* cartes « Où circule-t-il ? » */
uebEinsatz({
  'trn-tm-2-2-11': 'En service de travaux sur la ligne à voie métrique La Chaux-de-Fonds–Les Ponts-de-Martel. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-tm-237-312': 'En service d’entretien et de manœuvre au Val-de-Travers ; photographié en dernier près du dépôt de Fleurier.',
  'trn-zweiwege': 'En service de travaux sur les lignes à voie métrique La Chaux-de-Fonds–Les Ponts-de-Martel et Le Locle–Les Brenets. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-ast-21': 'Pour des courses spéciales sur les lignes à voie métrique de transN dans les Montagnes neuchâteloises. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-be-4-4-1': 'Autrefois en tête de trains de marchandises et de trains scolaires sur la ligne du RVT au Val-de-Travers. Aujourd’hui, la locomotive appartient à RVT-Historique.',
  'trn-abde-2-4-102': 'Autrefois en service régulier sur la ligne du RVT au Val-de-Travers, aujourd’hui en courses spéciales et de groupes de RVT-Historique.',
  'trn-rbde-106': 'Autrefois sur la ligne du RVT au Val-de-Travers ; louée aux TPF de 2004 à 2013, par exemple à Fribourg. Aujourd’hui en courses de RVT-Historique.',
  'trn-abm-2-5-9': 'De 1924 à 1965 sur le RVT au Val-de-Travers. Aujourd’hui, elle fait partie de la collection du Musée Suisse des Transports à Lucerne.',
  'trn-be-2-4': 'Autrefois sur la ligne interurbaine Neuchâtel–Boudry et vers Cortaillod. Aujourd’hui au Musée du tram de Neuchâtel à Boudry. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-be-2-2': 'Autrefois sur le tram urbain de Neuchâtel, par exemple sur la ligne 3 vers Corcelles. Aujourd’hui, la 73 circule en tram historique vers Boudry, la 76 se trouve à Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-be-4-4-583': 'D’abord sur la ligne urbaine 3 vers Corcelles, dès 1976 sur la ligne interurbaine de Boudry. Aujourd’hui au Musée du tram de Neuchâtel. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-be-4-4-littorail': 'De 1981 à 2019 sur la ligne du Littorail Neuchâtel–Boudry. La 504 se trouve aujourd’hui au Musée du tram de Neuchâtel. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-xe-2-2-601': 'Autrefois en service sur le réseau de tram de Neuchâtel. Aujourd’hui au Musée du tram de Neuchâtel à Boudry. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-tn-wagen': 'Autrefois sur le réseau de tram de Neuchâtel et vers Boudry. Quatre wagons sont au Musée du tram de Neuchâtel, la C4 121 à Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-g-3-3-1': 'De 1890 à 1950 sur la ligne Le Locle–Les Brenets. Aujourd’hui au chemin de fer-musée Blonay–Chamby. La voie métrique est tracée en pointillé et simplifiée.',
  'trn-kkl-41': 'Photographié en 2014 en gare des Brenets, sur la ligne à voie métrique Le Locle–Les Brenets. La voie métrique est tracée en pointillé et simplifiée.'
});
