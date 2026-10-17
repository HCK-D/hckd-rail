/* Français – locomotives de manœuvre */
uebZug('ee-922', {
  typ: 'Locomotive électrique de manœuvre pour gares voyageurs',
  text: ['L’Ee 922 est une locomotive électrique de manœuvre compacte de Stadler.', 'Les CFF l’ont achetée pour préparer les trains voyageurs et ajouter des voitures supplémentaires dans les grandes gares.'],
  kennzahlen: [['21', 'locomotives commandées'], ['750 kW', 'puissance maximale'], ['45 t', 'masse à vide'], ['2009–2010', 'livraison']],
  daten: { 'Spurweite': 'voie normale, 1435 mm', 'Stromsystem': '15 kV 16,7 Hz et 25 kV 50 Hz', 'Gewicht': '45 t à vide', 'Bedienung': 'radiocommande', 'Einsatz': 'manœuvre trafic voyageurs' },
  abschnitte: [
    { titel: 'Acquisition', p: ['Les CFF ont commandé les 21 locomotives en décembre 2007. Stadler a remis le premier véhicule en juillet 2009 ; sept grandes gares devaient être équipées d’ici fin 2010.'] },
    { titel: 'Concept d’exploitation', p: ['L’Ee 922 a remplacé d’anciennes Ee 3/3 dans le trafic voyageurs. Son équipement bifréquence permet aussi de l’utiliser dans les gares frontières avec caténaire 25 kV.'] }
  ],
  bilder: ['Ee 922 011', 'Ee 922 012', 'Ee 922 021 à Brigue', 'Ee 922 006 à Bâle', 'Ee 922 002 à Romanshorn']
});

uebZug('eem-923', {
  typ: 'Locomotive de manœuvre bimode de CFF Cargo',
  text: ['L’Eem 923 est une locomotive électrique compacte avec moteur diesel auxiliaire, issue de la plateforme Butler de Stadler.', 'CFF Cargo l’utilise pour la manœuvre, la desserte et le service léger en ligne ; sans caténaire, le diesel auxiliaire fournit l’énergie.'],
  kennzahlen: [['30', 'locomotives commandées'], ['1500 kW', 'puissance électrique'], ['45 t', 'masse à vide'], ['2012–2013', 'mise en service de la flotte']],
  daten: { 'Plattform': 'Butler', 'Spurweite': 'voie normale, 1435 mm', 'Gewicht': '45 t à vide', 'Antrieb': 'électrique, avec moteur diesel auxiliaire pour le dernier kilomètre', 'Leistung': '1500 kW électrique', 'Höchstgeschwindigkeit': '120 km/h (FOS 2026), 100 km/h à la mise en service', 'Einsatz': 'CFF Cargo, manœuvre et desserte' },
  specNote: 'La différence de vitesse maximale provient de deux états de sources officielles : 100 km/h à la mise en service et 120 km/h dans le catalogue des types de marche 2026.',
  abschnitte: [
    { titel: 'Acquisition', p: ['CFF Cargo a présenté la première locomotive en 2011. La livraison a commencé début 2012 ; dès 2013, les 30 véhicules commandés devaient tous être en service.'] },
    { titel: 'Modes d’exploitation', p: ['Sous caténaire, la locomotive roule à l’électricité. Le moteur diesel permet la desserte de voies de raccordement sans caténaire, sans engager une deuxième locomotive.'] }
  ],
  bilder: ['Eem 923 004 de CFF Cargo', 'Eem 923 016', 'Eem 923 030', 'Eem 923 «Le Jorat»', 'Eem 923 à Payerne']
});

uebZug('bm-44', {
  typ: 'Lourde locomotive de manœuvre diesel-électrique (historique)',
  text: ['La Bm 4/4 était une lourde locomotive de manœuvre diesel-électrique des CFF.', 'Les 46 machines ont remplacé des locomotives à vapeur dans la manœuvre lourde et pouvaient travailler indépendamment de la caténaire.'],
  kennzahlen: [['46', 'locomotives construites'], ['620 kW', 'puissance au catalogue des types de marche'], ['75 km/h', 'vitesse maximale'], ['1960–1970', 'années de construction']],
  daten: { 'Hersteller': 'SLM et SAAS', 'Antrieb': 'diesel-électrique', 'Spurweite': 'voie normale, 1435 mm', 'Gewicht': '72 t à vide', 'Einsatz': 'manœuvre lourde' },
  specNote: 'Cette page traite la série régulière 18401–18446, et non la Bm 4/4 II, qui en est distincte.',
  abschnitte: [
    { titel: 'Acquisition et mission', p: ['46 locomotives ont été construites entre 1960 et 1970. Elles ont repris les lourds travaux de manœuvre et remplacé les dernières locomotives à vapeur utilisées pour ces tâches.'] },
    { titel: 'Statut historique', p: ['La série appartient à l’ancienne génération de locomotives diesel des CFF. Une entrée au catalogue des types de marche décrit le type de marche à des fins d’exploitation et ne prouve pas l’existence d’une flotte CFF actuelle.'] }
  ],
  bilder: ['Bm 4/4 18427', 'Bm 4/4 18427 de face', 'Bm 4/4 avec train de sauvetage à Göschenen', 'Bm 4/4 18442']
});

uebZug('tm-232', {
  beiname: 'Tm III et Tm IV',
  typ: 'Tracteurs diesel modernisés',
  text: ['Aux CFF, la désignation Tm 232 regroupe deux séries de tracteurs modernisés différentes.', 'Les données techniques, numéros et années de construction se rapportent donc toujours à la sous-série Tm III ou Tm IV.'],
  kennzahlen: [['2', 'séries d’origine différentes'], ['52', 'Tm III devenus 232 001–052'], ['2003–2010', 'période des modernisations'], ['51', 'effectif de CFF Infrastructure avant le remplacement de 2019']],
  daten: { 'Unterserie ex Tm III': 'Tm 232 001–052', 'Unterserie ex Tm IV': 'Tm 232 101–146 et 201–234', 'Antrieb': 'diesel-hydraulique', 'Spurweite': 'voie normale, 1435 mm', 'Leistung': 'env. 260–280 kW selon la sous-série', 'Höchstgeschwindigkeit': '60–80 km/h selon la série', 'In Betrieb seit': '2003 (premières modernisations)', 'Einsatz': 'manœuvre légère et service des travaux' },
  specNote: 'Le chiffre 51 désigne l’effectif de CFF Infrastructure indiqué en 2019 avant le remplacement par le Tm 234-4, et non tous les Tm 232 jamais construits.',
  abschnitte: [
    { titel: 'Modernisation', p: ['52 Tm III ont été immatriculés Tm 232 001–052. D’autres véhicules sont issus de Tm IV ; la première transformation de ce groupe a eu lieu en 2007.'] },
    { titel: 'Service et remplacement', p: ['CFF Cargo a utilisé des Tm 232 pour la desserte légère. En 2019, CFF Infrastructure a commencé à remplacer ses 51 tracteurs de service des travaux par 35 nouveaux Tm 234-4.'] }
  ],
  bilder: ['Tm IV (Tm 232)', 'Tm 232 211 de CFF Cargo', 'Tm 232 115', 'Tm 232 129 de CFF Cargo', 'Tm IV 8792 en ancienne livrée']
});
