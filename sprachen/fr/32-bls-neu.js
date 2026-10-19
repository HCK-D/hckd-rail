/* Français – BLS : locomotives louées, wagons de service, intervention */
uebDict({ 'Schotter- und Kippwagen': 'Wagons à ballast et basculants' });

uebZug('bls-br-185', {
  typ: 'Locomotive électrique louée à Alpha Trains',
  text: ['En plus de ses propres locomotives, BLS Cargo utilise des locomotives louées immatriculées en Allemagne. Parmi elles figurent quatre TRAXX de la série 185 d’Alpha Trains.', 'Techniquement, elles sont proches parentes des Re 485 du BLS, qui correspondent à la série allemande 185 avec un équipement suisse supplémentaire.'],
  kennzahlen: [['4', 'locomotives louées'], ['140 km/h', 'vitesse maximale'], ['jusqu’à 5600 kW', 'puissance'], ['D, A, CH', 'homologation']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Betreiber': 'BLS Cargo (louée)', 'Leistung': 'jusqu’à 5600 kW', 'Zulassung': 'Allemagne, Autriche, Suisse', 'Anzahl': '4 louées' },
  specNote: 'Les numéros des quatre locomotives louées ne sont pas publiés. La photo montre la 185 525 aux couleurs du BLS en 2009.',
  bilder: ['185 525 aux couleurs du BLS à Fribourg (2009)']
});
uebZug('bls-br-186', {
  typ: 'Locomotive polycourant louée à Railpool',
  text: ['BLS Cargo loue à Railpool neuf TRAXX polycourant de la série 186. Elles peuvent circuler dans cinq pays, jusqu’aux Pays-Bas.', 'Elles remorquent ainsi des trains de marchandises sur l’axe Rotterdam–Italie, par exemple le Melzo-Shuttle.'],
  kennzahlen: [['9', 'locomotives louées'], ['140 km/h', 'vitesse maximale'], ['5600 kW', 'puissance'], ['5', 'pays']],
  daten: { 'Bauart': 'locomotive électrique polycourant Bo’Bo’', 'Betreiber': 'BLS Cargo (louée)', 'Fahrzeugnummern': 'entre autres 186 101, 103–105, 108, 109 (attestées par photo)', 'Leistung': '5600 kW (4000 kW sous 1,5 kV continu)', 'Zulassung': 'Allemagne, Autriche, Suisse, Italie, Pays-Bas', 'Anzahl': '9 louées' },
  specNote: 'Les TRAXX polycourant propres à BLS Cargo s’appellent Re 486 et ont leur propre page.',
  bilder: ['186 101 de BLS Cargo', '186 109 avec le Melzo-Shuttle près d’Elten (NL)']
});
uebZug('bls-br-187', {
  typ: 'Locomotive électrique louée à Railpool',
  text: ['BLS Cargo loue à long terme trois locomotives de la série 187 à Railpool. Elles appartiennent à la troisième génération TRAXX.', 'La série 187 existe aussi avec un petit moteur diesel pour le «dernier kilomètre» sans caténaire. On ne sait pas publiquement si les trois locomotives du BLS en sont équipées.'],
  kennzahlen: [['3', 'locomotives louées'], ['5600 kW', 'puissance'], ['84 t', 'poids'], ['D, A, CH', 'homologation']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Betreiber': 'BLS Cargo (louée)', 'Höchstgeschwindigkeit': '140 ou 160 km/h selon la version', 'Zulassung': 'Allemagne, Autriche, Suisse', 'Anzahl': '3 louées' },
  bilder: ['187 004 de BLS Cargo']
});
uebZug('bls-br-193', {
  typ: 'Siemens Vectron louées pour BLS Cargo',
  text: ['En plus de ses propres Re 475, BLS Cargo loue des locomotives Vectron de la série 193. Selon la liste de la flotte, il s’agit de six locomotives et de quatre autres, qui circulent en partie aux couleurs de l’opérateur combiné Hupac.', 'Homologuées jusqu’aux Pays-Bas et en Italie, elles circulent surtout en transit.'],
  kennzahlen: [['10', 'locomotives louées'], ['jusqu’à 6400 kW', 'puissance'], ['5', 'pays'], ['Siemens', 'constructeur']],
  daten: { 'Bauart': 'locomotive électrique polycourant Bo’Bo’', 'Eigentümer': 'divers loueurs, dont BRCE', 'Betreiber': 'BLS Cargo (louée)', 'Fahrzeugnummern': 'entre autres 193 494–496 (Hupac), 193 711, 713, 716 (attestées par photo)', 'Leistung': 'jusqu’à 6400 kW', 'Zulassung': 'Allemagne, Autriche, Suisse, Italie, Pays-Bas', 'Anzahl': '6 + 4 louées' },
  specNote: 'Les Vectron propres à BLS Cargo s’appellent Re 475 et ont leur propre page.',
  bilder: ['193 716 de BLS Cargo', '193 496 aux couleurs de Hupac avec le Melzo-Shuttle près d’Angeren (NL)']
});
uebZug('bls-fccnpps', {
  typ: 'Wagons à ballast à deux essieux de BLS Netz SA',
  text: ['En 2012, BLS Netz SA a commandé 20 wagons à ballast à deux essieux au constructeur LEGIOS. Ils servent surtout aux transports propres vers les chantiers.', 'Comme wagons de la catégorie F, ils se déchargent par gravité vers le bas.'],
  kennzahlen: [['20', 'wagons'], ['2', 'essieux'], ['2012', 'acquisition'], ['LEGIOS', 'constructeur']],
  daten: { 'Bauart': 'wagon à ballast à deux essieux', 'Betreiber': 'BLS Netz SA' },
  bilder: ['Fccnpps 722 à Spiez (2012)']
});
uebZug('bls-faccnpps', {
  typ: 'Wagons à ballast à quatre essieux de BLS Netz SA',
  text: ['En 2023, BLS Netz SA a complété ses wagons à ballast par 20 wagons à quatre essieux. Ils sont construits de manière semblable aux Fccnpps à deux essieux de 2012.', 'Ils ont été fabriqués à l’usine de Niesky, en Allemagne.'],
  kennzahlen: [['20', 'wagons'], ['4', 'essieux'], ['2023', 'acquisition'], ['Niesky', 'constructeur']],
  daten: { 'Bauart': 'wagon à ballast à quatre essieux', 'Betreiber': 'BLS Netz SA' }
});
uebZug('bls-xas', {
  typ: 'Anciens wagons basculants pour déblais',
  text: ['Les sept wagons basculants Xas ont été construits en 1990 et transportent les déblais des chantiers. Ils sont ensuite passés à BLS Netz SA et ont reçu de nouveaux numéros.', 'Selon les registres, ils sont classés comme wagons de service ou comme wagons de marchandises.'],
  kennzahlen: [['7', 'wagons'], ['1990', 'construits'], ['770–776', 'numéros'], ['déblais', 'chargement']],
  daten: { 'Bauart': 'wagon basculant', 'Betreiber': 'BLS Netz SA', 'Fahrzeugnummern': '80 63 98 62 770–776, plus tard 99 85 93 53 770–776' },
  bilder: ['Xas 776 à Heustrich-Emdthal (2007)']
});
uebZug('bls-fans-u', {
  typ: 'Anciens wagons basculants pour déblais',
  text: ['Neuf wagons basculants Fans-u de 1990 transportent les déblais des chantiers pour BLS Netz SA.', 'BLS Cargo possédait autrefois d’autres Fans-u pour les déblais des chantiers NLFA. Ces wagons 510–530 ont été vendus en 2010.'],
  kennzahlen: [['9', 'wagons'], ['1990', 'construits'], ['500–508', 'numéros'], ['déblais', 'chargement']],
  daten: { 'Bauart': 'wagon basculant à quatre essieux', 'Betreiber': 'BLS Netz SA', 'Fahrzeugnummern': '31 63 6770 500–508, plus tard 31 85 6770 500–508' },
  abschnitte: [{ titel: 'Les wagons NLFA de BLS Cargo', p: ['Les wagons 510–529 (construits en 2000) et 530 (1995) appartenaient à BLS Cargo et évacuaient les déblais des chantiers NLFA. En avril 2010, ils ont été vendus à RTS, puis transmis à MBC en 2014.'] }],
  bilder: ['Fans-u 505 à Heustrich-Emdthal (2007)']
});
uebZug('bls-schleiffahrzeug', {
  name: 'Véhicule de meulage', beiname: 'rail-route',
  typ: 'Véhicule rail-route pour meuler les rails et les aiguillages',
  text: ['Le véhicule de meulage est le plus récent véhicule d’entretien du BLS. Il circule sur la route et sur la voie. Des meules placées en dessous meulent les rails et les aiguillages.', 'Une équipe du BLS peut ainsi réagir rapidement aux défauts de rail et meuler préventivement les aiguillages importants, en plus des grands trains de meulage.'],
  kennzahlen: [['route + voie', 'rail-route'], ['meules', 'outil'], ['2025', 'première intervention'], ['Spiez', 'premier lieu d’intervention']],
  daten: { 'Bauart': 'véhicule rail-route de meulage des rails', 'Betreiber': 'BLS Netz SA', 'Einsatz': 'meulage des rails et des aiguillages' },
  specNote: 'Le BLS a reçu le véhicule fin 2024 ; la première intervention réelle était prévue début 2025 à Spiez. Le BLS ne cite ni constructeur ni données techniques.',
  abschnitte: [{ titel: 'Pourquoi meuler ?', p: ['La charge des roues crée sur les rails de fines fissures et des déformations. Le meulage rétablit le profil d’origine du rail. Les rails et les aiguillages durent ainsi plus longtemps, et les trains roulent plus calmement.'] }]
});
uebZug('bls-hilfswagen', {
  name: 'Wagon de secours',
  typ: 'Wagon de secours avec wagon complémentaire pour le relevage et l’aide technique',
  text: ['Le wagon de secours fait partie du service d’intervention, le corps de sapeurs-pompiers d’entreprise du BLS. Il intervient lors de déraillements et d’autres perturbations pour relever des véhicules et apporter une aide technique.', 'Il se compose du wagon de secours proprement dit et d’un wagon complémentaire.'],
  kennzahlen: [['2011', 'mise en service'], ['46 m', 'longueur'], ['101,5 t', 'poids'], ['2', 'wagons']],
  daten: { 'Bauart': 'wagon de secours avec wagon complémentaire', 'Betreiber': 'BLS SA, service d’intervention', 'Einsatz': 'relevage, intervention technique' }
});
