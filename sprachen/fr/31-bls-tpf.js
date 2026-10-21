/* Français – BLS et TPF */
uebDict({
  'SBB': 'CFF', 'Bahn wählen': 'Choisir la compagnie', '{n} Fahrzeug': '{n} véhicule',
  'Schweizerische Bundesbahnen': 'Chemins de fer fédéraux suisses',
  'BLS AG': 'BLS SA',
  'Transports publics fribourgeois': 'Transports publics fribourgeois',
  'Klassiker von SBB, BLS und TPF, die heute nicht mehr im Alltag fahren. Viele sind bei SBB Historic, der BLS-Stiftung, GFM Historique oder in Museen erhalten.': 'Classiques des CFF, du BLS et des TPF qui ne circulent plus au quotidien. Beaucoup sont conservés par CFF Historic, la Fondation BLS, GFM Historique ou dans des musées.',
  'BLS und TPF neu im Katalog: In jeder Kategorie lässt sich jetzt zwischen SBB, BLS und TPF wählen.': 'Le BLS et les TPF font leur entrée dans le catalogue : dans chaque catégorie, on peut maintenant choisir entre CFF, BLS et TPF.',
  'Zulassung': 'Homologation', 'Frühere Bezeichnung': 'Ancienne désignation', 'Beispiel': 'Exemple', 'Typen': 'Types', 'Standort': 'Lieu de stationnement',
  'Erhalten': 'Conservé', 'Verbleib': 'Sort', 'Lokomotive': 'Locomotive', 'Kabinen': 'Cabines', 'Höhenunterschied': 'Dénivelé', 'Kran': 'Grue',
  'Normalspur, 1435 mm': 'voie normale, 1435 mm', 'Meterspur, 1000 mm': 'voie métrique, 1000 mm'
});

uebZug('bls-rabe-528', {
  typ: 'Rame automotrice électrique de Stadler pour RegioExpress et RER',
  text: ['La MIKA à six caisses est la rame la plus récente du BLS. Elle existe en version RegioExpress, plus confortable pour les longs trajets, et en version RER avec plus de places debout.', 'Dès 2021, les MIKA ont remplacé des trains plus anciens comme les rames réversibles EW III et les NPZ.'],
  kennzahlen: [['67', 'rames (39 RE, 28 RER)'], ['160 km/h', 'vitesse maximale'], ['104,9 m', 'longueur'], ['2021', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique, 6 caisses', 'Fahrzeugnummern': 'RE 101–139, RER 201–228', 'Gewicht': '182 t (RE), 183 t (RER)', 'Sitzplätze': '244 (RE), 223 (RER)', 'Anzahl': '67 rames' },
  specNote: 'Places assises sans strapontins : RE 46 en 1re et 198 en 2e classe, RER 35 et 188. Les rames 125–137 appartiennent à BLS Fernverkehr SA.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler a livré au BLS 67 MIKA : 39 trains RegioExpress (101–139, mis en service 2021–2026) et 28 trains RER (201–228, 2022–2025). Les trains 125–137 appartiennent à BLS Fernverkehr SA, tous les autres à BLS SA.', 'Les MIKA ont remplacé des trains plus anciens comme les rames réversibles EW III et les NPZ.'] },
      { titel: 'Utilisation et technique', p: ['Les MIKA circulent sur les RER de Berne et de Lucerne (notamment S2, S4, S6 et S7), en RegioExpress Berne–Spiez–Zweisimmen et par la ligne de faîte du Lötschberg jusqu’à Brigue et Domodossola, ainsi qu’en InterRegio 66 Berne–Neuchâtel–La Chaux-de-Fonds.', 'Le train de six caisses mesure 104,9 m, développe 3500 kW et roule jusqu’à 160 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation', 'Prises à chaque place et dans le compartiment multifonction', 'Fenêtres améliorant la réception mobile', 'Zone bistro en libre-service avec distributeurs de snacks et de café (RE)', '12 places pour vélos (RE) ou 6 (RER), avec prises pour vélos électriques', 'Accès à plancher bas avec comble-lacune à toutes les portes', '3 places pour fauteuils roulants : 1 en 1re classe, 2 en 2e classe avec accès au WC', '2 WC, dont 1 accessible, avec table à langer', 'Vidéosurveillance et boutons SOS'],
        p: ['Grâce aux accès bas avec comble-lacune, la montée se fait sans marche à toutes les portes.'] },
      { titel: 'Deux versions', tabelle: { kopf: ['Caractéristique', 'RegioExpress', 'RER'], zeilen: [
      ['Numéros', '101–139', '201–228'], ['Nombre', '39', '28'], ['Mise en service', '2021–2026', '2022–2025'],
      ['Places 1re / 2e classe', '46 / 198', '35 / 188'], ['Places debout', '149', '241'], ['Places vélo', '12', '6']] } }
    ],
  bilder: ['RABe 528 102 en RegioExpress à Berne', 'RABe 528 201 en version RER', 'RABe 528 119 à Domodossola', 'RABe 528 104 dans l’Entlebuch']
});
uebZug('bls-rabe-515', {
  typ: 'Rame automotrice à deux niveaux de Stadler (KISS)',
  text: ['La MUTZ est la rame à deux niveaux du BLS et fait partie de la famille KISS de Stadler. Elle circule surtout sur les lignes très fréquentées du RER bernois.', 'Il en existe une version à quatre caisses et une version plus longue à six caisses.'],
  kennzahlen: [['39', 'rames (34 à quatre caisses, 5 à six caisses)'], ['160 km/h', 'vitesse maximale'], ['335 / 546', 'places assises 4 / 6 caisses'], ['2012', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique à deux niveaux', 'Fahrzeugnummern': '001–034 (4 caisses), 035–039 (6 caisses)', 'Länge': '102,6 m (4 caisses), 151,88 m (6 caisses)', 'Gewicht': '216 t (4 caisses), 301 t (6 caisses)', 'Leistung': '4000 kW (6 caisses : 6000 kW en pointe)', 'Sitzplätze': '335 (4 caisses), 546 (6 caisses)', 'Anzahl': '39 rames' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le MUTZ fait partie de la famille KISS de Stadler. Le BLS possède 34 trains à quatre caisses (001–034, mis en service 2012–2017, 032 et 033 en 2019/2020) et 5 à six caisses (035–039, 2020).', 'Les trains à six caisses et les 032–034 appartiennent à BLS Fernverkehr SA, les autres à BLS SA.'] },
      { titel: 'Utilisation et technique', p: ['Les MUTZ circulent sur le RER bernois (S1 Fribourg–Berne–Thoune, S11 Thoune–Berne, S3/S31 Bienne–Münchenbuchsee–Berne–Belp) et en InterRegio 17 Berne–Berthoud–Olten et InterRegio 65 Berne–Bienne.', 'Les deux versions développent 4000 kW et roulent jusqu’à 160 km/h. Les larges portes accélèrent la montée et la descente.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation, chauffage au sol et mural', 'Information voyageurs visuelle et sonore', 'Prises en 1re classe (six caisses : aussi en 2e classe)', '6 places pour vélos (quatre caisses) ou 16 (six caisses)', 'Accès à plancher bas avec marchepieds coulissants à toutes les portes', '3 places pour fauteuils roulants (quatre caisses) ou 4 (six caisses), dans les deux classes', '2 WC, dont 1 accessible et 1 avec table à langer', 'Vidéosurveillance'],
        p: ['Toutes les portes ont des accès bas avec marchepieds coulissants ; des places pour fauteuils roulants existent dans les deux classes.'] },
      { titel: 'Quatre et six caisses', tabelle: { kopf: ['Caractéristique', 'quatre caisses', 'six caisses'], zeilen: [
      ['Numéros', '001–034', '035–039'], ['Mise en service', '2012–2017, 032–033 en 2019/2020', '2020'], ['Longueur', '102,6 m', '151,88 m'],
      ['Places 1re / 2e classe', '61 / 274', '122 / 424'], ['Puissance', '4000 kW', '6000 kW en pointe, 4000 kW en continu']] } }
    ],
  bilder: ['RABe 515 003 à quatre caisses à Berne', 'RABe 515 039 à six caisses', 'RABe 515 027 près d’Allmendingen']
});
uebZug('bls-rabe-535', {
  typ: 'Rame automotrice à plancher bas à quatre caisses',
  text: ['Le Lötschberger est une rame à plancher bas à quatre caisses du BLS. Il doit son nom à la ligne de faîte du Lötschberg et à l’Oberland bernois, où il circule.', 'Jusqu’à quatre rames peuvent circuler ensemble.'],
  kennzahlen: [['25', 'rames'], ['160 km/h', 'vitesse maximale'], ['142', 'places assises'], ['2008', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique à plancher bas, 4 caisses', 'Anzahl': '25 rames' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Bombardier a livré au BLS 25 Lötschberger à quatre caisses : 101–113 en 2008–2010 et 114–125 en 2012.', 'Depuis janvier 2024, le BLS modernise la flotte dans son atelier de Bönigen, jusqu’à mi-2027. Des prises doubles remplacent notamment les prises simples, des LED les tubes néon, et des capteurs de CO₂ règlent l’air frais selon les besoins.'] },
      { titel: 'Utilisation et technique', p: ['Le Lötschberger circule dans l’Oberland bernois (RE Zweisimmen–Spiez, Spiez–Interlaken Ost et Spiez–Frutigen) et sur le RER bernois entre Thoune, Belp, Berne, Berthoud, Konolfingen et Soleure.', 'Le train mesure 62,7 m, pèse 105 t et roule jusqu’à 160 km/h. Jusqu’à quatre trains peuvent être couplés.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation et chauffage', 'Prises en 1re et 2e classe', 'Information voyageurs visuelle et sonore', '6 places pour vélos (101–113) ou 12 (114–125)', 'Accès à plancher bas à toutes les portes, une entrée par côté avec marchepied coulissant', '2 places pour fauteuils roulants en 2e classe', '1 WC accessible', 'Vidéosurveillance'],
        p: ['Toutes les portes sont à plancher bas. Selon le BLS, il n’y a pas de table à langer.'] }
    ],
  bilder: ['RABe 535 112 «Lötschberger»', 'Lötschberger en gare de Kandersteg', 'RABe 535 122 à Iselle di Trasquera']
});
uebZug('bls-rabe-525', {
  typ: 'Rame automotrice régionale à plancher bas',
  text: ['NINA signifie Niederflur-Nahverkehrszug, train régional à plancher bas. Le BLS l’utilise en versions à trois et quatre caisses en trafic régional et RER.', 'Jusqu’à quatre rames peuvent être accouplées.'],
  kennzahlen: [['36', 'rames (23 à trois caisses, 13 à quatre caisses)'], ['140 km/h', 'vitesse maximale'], ['1000 kW', 'puissance'], ['1998', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique à plancher bas, 3 ou 4 caisses', 'Länge': '47,7 m (3 caisses), 61,9 m (4 caisses)', 'Gewicht': '79 t (3 caisses), 96 t (4 caisses)', 'Sitzplätze': '134 (3 caisses), 179 (4 caisses)', 'Anzahl': '36 rames' },
  specNote: 'Mises en service de 1998 à 2005. Les numéros 015–027 ont quatre caisses, les 001–014, 028–030 et 032–037 trois caisses.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les NINA viennent de Vevey Technologies et de Bombardier et ont été mis en service de 1998 à 2005. Le BLS possède 36 trains : 23 à trois caisses (001–014, 028–030, 032–037) et 13 à quatre caisses (015–027).', 'Dès juin 2015, les 36 trains ont reçu un refit à l’atelier de Bönigen pour environ 31 millions de francs ; ils doivent ainsi rouler environ six ans de plus. En 2016, une partie a reçu des vitres laissant passer le signal mobile et une nouvelle information voyageurs.'] },
      { titel: 'Utilisation et technique', p: ['Les NINA circulent sur les RER de Berne et de Lucerne, notamment S5 Berne–Chiètres–Neuchâtel, S22 Berne–Konolfingen–Langnau, S35 Chiètres–Lyss, S36 Lyss–Büren an der Aare, S46 Soleure–Berthoud–Ostermundigen et S77 Lucerne–Wolhusen–Willisau, ainsi qu’en RE Domodossola–Brigue–Viège.', 'Un train développe 1000 kW et roule jusqu’à 140 km/h. Jusqu’à quatre trains peuvent être couplés.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation et chauffage', 'Prises en 1re classe', 'Information voyageurs visuelle et sonore', '3 places pour vélos (trois caisses) ou 6 (quatre caisses)', 'Accès à plancher bas à toutes les portes, une entrée par côté avec marchepied coulissant', '1 place pour fauteuil roulant en 2e classe', '1 WC accessible', 'Vidéosurveillance'],
        p: ['Toutes les portes sont à plancher bas. Selon le BLS, il n’y a pas de table à langer.'] }
    ],
  bilder: ['NINA RABe 525 024 à Thoune', 'RABe 525 015 à quatre caisses à Berne']
});
uebZug('bls-re-465', {
  typ: 'Locomotive électrique universelle de la famille Lok 2000',
  text: ['La Re 465 est la sœur BLS de la Re 460 des CFF. Elle remorque des trains de voyageurs, des trains de chargement des autos et des trains de marchandises.', 'Entre 2019 et 2022, les 18 locomotives ont été modernisées et peintes en vert. Depuis fin 2023, elles remplacent les Re 425 brunes au chargement des autos.'],
  kennzahlen: [['18', 'locomotives'], ['6400 kW', 'puissance'], ['160 km/h', 'vitesse maximale autorisée'], ['1994', 'première mise en service']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Höchstgeschwindigkeit': '160 km/h (autorisée)' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La Re 465 appartient à la famille Lok 2000 de SLM et ABB. Le BLS a d’abord commandé huit locomotives (001–008), puis dix autres (009–018) pour le corridor ferroutier ; elles ont été mises en service de 1994 à 1997.', 'De 2019 à 2022, les 18 locomotives ont été modernisées à l’atelier de Bönigen pour environ 20 millions de francs et peintes en vert. Elles peuvent ainsi rouler jusqu’en 2040 environ.'] },
      { titel: 'Utilisation et technique', p: ['Les Re 465 tirent ou poussent le GoldenPass Express entre Interlaken Ost et Zweisimmen. Depuis le 19 décembre 2023, elles assurent le chargement des autos au Lötschberg, dès 2026 aussi au Simplon, où elles remplacent les Re 425 brunes.', 'En trafic marchandises, elles circulent souvent en unité multiple avec des TRAXX et des Vectron. La locomotive développe 6400 kW et est autorisée à 160 km/h.'] }
    ],
  bilder: ['Re 465 014 à Zweisimmen', 'Re 465 001 et 007 en double traction']
});
uebZug('bls-re-475', {
  typ: 'Locomotive électrique polycourant de Siemens pour BLS Cargo',
  text: ['La Re 475 est la locomotive Vectron de BLS Cargo. Homologuée dans plusieurs pays, elle remorque des trains de marchandises à travers les Alpes jusqu’en Allemagne, en Italie et aux Pays-Bas.', 'BLS Cargo a agrandi la flotte en plusieurs séries.'],
  kennzahlen: [['50', 'locomotives en trois séries'], ['2016', 'première mise en service'], ['6', 'pays (séries récentes)'], ['Siemens', 'constructeur']],
  daten: { 'Bauart': 'locomotive électrique polycourant Bo’Bo’', 'Zulassung': 'CH, D, A, I, NL ; dès le n° 416 aussi B', 'Anzahl': '50 (en trois séries)' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La Re 475 est la locomotive Vectron de Siemens Mobility pour BLS Cargo. La flotte passe en trois séries à 50 locomotives : 401–415 (2016–2018), 416–440 (2020 et 2024–2025) et 441–450 (dès 2026).'] },
      { titel: 'Utilisation et technique', p: ['BLS Cargo utilise la Re 475 surtout sur les axes Lötschberg-Simplon et Gothard et circule ainsi jusqu’aux Pays-Bas, en Belgique, en Allemagne, en Autriche et en Italie.', 'Cette locomotive polycourant est homologuée dans jusqu’à six pays ; dès le n° 416 aussi en Belgique.'] },
      { titel: 'Trois séries', tabelle: { kopf: ['Numéros', 'Nombre', 'Livraison', 'Homologation'], zeilen: [
    ['401–415', '15', '2016–2018', 'CH, D, A, I, NL'], ['416–440', '25', '2020, 2024–2025', 'CH, D, A, I, NL, B'], ['441–450', '10', 'dès 2026', 'CH, D, A, I, NL, B']] } }
    ],
  bilder: ['Re 475 401 de BLS Cargo']
});
uebZug('bls-re-485', {
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['En 2002, BLS Cargo a commandé à Bombardier 20 TRAXX du type F140 AC ; elles ont été livrées jusqu’à mi-2003 et portent les numéros 485 001–020.', 'La 485 004 a été détruite en 2020 lors d’un accident à Auggen (Allemagne). Le nombre de Re 485 aujourd’hui en état de service n’est pas confirmé publiquement.'] },
      { titel: 'Utilisation et technique', p: ['Les Re 485 remorquent des trains de marchandises en Suisse et vers l’Allemagne, sur les axes Lötschberg-Simplon et Gothard.', 'Techniquement, elles correspondent à la série allemande 185 et aux Re 482 de CFF Cargo, avec un paquet d’équipements suisse. Elles roulent jusqu’à 140 km/h.'] }
    ],
  typ: 'Locomotive électrique pour trains de marchandises de Bombardier',
  text: ['Les Re 485 sont des locomotives TRAXX de BLS Cargo pour le trafic marchandises en Suisse et vers l’Allemagne.', 'Elles ont été commandées en 2002 et livrées jusqu’à mi-2003.'],
  kennzahlen: [['20', 'locomotives acquises'], ['140 km/h', 'vitesse maximale'], ['CH, D', 'homologation'], ['2002', 'première mise en service']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Zulassung': 'Suisse, Allemagne', 'Anzahl': '20 acquises ; 485 004 retirée après un accident en 2020' },
  specNote: 'Les 140 km/h correspondent au type TRAXX F140.',
  bilder: ['Re 485 005 de BLS Cargo', 'Re 485 016 avec un train de marchandises', 'Re 485 008 près d’Allmendingen']
});
uebZug('bls-re-486', {
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Bombardier a livré à BLS Cargo dès l’automne 2008 dix TRAXX polycourant du type F140 MS numérotées 486 501–510 ; les dernières ont suivi en 2009.'] },
      { titel: 'Utilisation et technique', p: ['Les Re 486 peuvent circuler en Suisse, en Allemagne, en Italie et en Autriche. Elles conviennent donc au transit à travers les Alpes, par exemple avec la route roulante.', 'Locomotive polycourant, elle circule sous courant alternatif et continu ; la vitesse maximale est de 140 km/h.'] }
    ],
  typ: 'Locomotive électrique polycourant de Bombardier',
  text: ['Les Re 486 sont des TRAXX polycourant de BLS Cargo. Elles peuvent circuler en Suisse, en Allemagne, en Italie et en Autriche.', 'Elles conviennent donc au transit à travers les Alpes, par exemple avec la route roulante.'],
  kennzahlen: [['10', 'locomotives'], ['140 km/h', 'vitesse maximale'], ['4', 'pays'], ['2008', 'première mise en service']],
  daten: { 'Bauart': 'locomotive électrique polycourant Bo’Bo’', 'Zulassung': 'Suisse, Allemagne, Italie, Autriche' },
  specNote: 'Les 140 km/h correspondent au type TRAXX F140.',
  bilder: ['Re 486 503 avec la route roulante à Fribourg-en-Brisgau', 'Re 486 504 de BLS Cargo']
});
uebZug('bls-re-425', {
  typ: 'Locomotive électrique du BLS, connue comme «les brunes»',
  text: ['Pendant des décennies, les Re 4/4 brunes du BLS, aujourd’hui Re 425, ont remorqué des trains rapides entre Berne et Brigue et des trains de marchandises de Bâle à Domodossola. Le chargement des autos au Lötschberg a aussi longtemps été leur tâche.', 'Chez BLS Cargo, l’utilisation en trafic marchandises a pris fin en 2021. Dès fin 2023, les Re 465 ont repris progressivement le chargement des autos ; la dernière course régulière d’une Re 425 a eu lieu le 27 juillet 2026 entre Kandersteg et Goppenstein. La Re 425 165 «Moutier» est conservée par la Fondation BLS.'],
  kennzahlen: [['35', 'construites 1964–1983'], ['4980 kW', 'puissance'], ['140 km/h', 'vitesse maximale'], ['1964', 'première mise en service']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Betreiber': 'BLS et BLS Cargo (historique) ; quelques locomotives aujourd’hui en service muséal ou spécial', 'Länge': '15,1 m (dès le n° 174 : 15,47 m)', 'Anzahl': '35 construites' },
  abschnitte: [{ titel: 'La Re 4/4 165 «Moutier»', p: ['La 165 a été livrée au BLS comme Ae 4/4 II 265 et porte les armoiries de la commune de Moutier. Depuis 2017, elle fait partie des véhicules historiques de la Fondation BLS et se trouve, hors service, au dépôt de Berthoud.'] }],
  bilder: ['Re 425 192 à Spiez']
});
uebZug('bls-am-843', {
  typ: 'Locomotive diesel-hydraulique de BLS Infrastructure',
  text: ['BLS Infrastructure utilise aussi des locomotives diesel de la série Am 843, par exemple l’Am 843 503. Elles remorquent des trains de travaux et manœuvrent sans caténaire.', 'Techniquement, la locomotive correspond à l’Am 843 des CFF.'],
  kennzahlen: [['843 503', 'exemple photographié'], ['diesel', 'motorisation'], ['trains de travaux', 'utilisation'], ['BLS', 'infrastructure']],
  daten: { 'Bauart': 'locomotive diesel', 'Antrieb': 'diesel-hydraulique', 'Betreiber': 'BLS Infrastructure', 'Einsatz': 'trains de travaux, manœuvres, intervention' },
  specNote: 'Le BLS indique la longueur, le poids et l’année pour l’Am 843 de son service d’intervention. Le nombre total d’Am 843 du BLS n’est pas documenté publiquement.',
  abschnitte: [{ titel: 'Au service d’intervention', p: ['Le BLS mentionne une Am 843 parmi les véhicules de son service d’intervention, avec le train d’extinction et de sauvetage LRZ 04 et le wagon de secours. Le service d’intervention est le corps de sapeurs-pompiers d’entreprise du BLS.'] }],
  bilder: ['Am 843 503 de BLS Infrastructure']
});
uebZug('bls-rangier', {
  name: 'Véhicules de manœuvre',
  typ: 'Locomotives et tracteurs de manœuvre du BLS',
  text: ['Pour manœuvrer dans les gares et les ateliers, le BLS utilise différents petits engins. Certains proviennent de compagnies qui font aujourd’hui partie du BLS, comme le chemin de fer Emmental–Berthoud–Thoune.', 'Cette page montre les types documentés sur des photos avec l’inscription BLS.'],
  kennzahlen: [['5', 'types documentés sur photo'], ['Ee 936', 'plus grande loco de manœuvre'], ['Kandersteg', 'entre autres photographiés'], ['BLS', 'exploitant']],
  daten: { 'Bauart': 'locomotives et tracteurs de manœuvre', 'Einsatz': 'manœuvres dans les gares et ateliers' },
  abschnitte: [{ titel: 'Documentés sur photo', tabelle: { kopf: ['Type', 'Exemple', 'Motorisation', 'Photo'], zeilen: [
    ['Ee 936', '936 132', 'électrique', 'Kandersteg 2016'], ['Eea 935', '935 402', 'électrique et batterie', 'Kandersteg 2016'],
    ['Tem 225', '225 041', 'électrique et diesel', 'Berthoud 2018'], ['Tm 235', '235 091', 'diesel', 'Spiez 2012'], ['Tea 245', '245 021', 'électrique et batterie', 'sans lieu']] } },
    { p: ['Le nombre de véhicules de chaque type que possède aujourd’hui le BLS n’est pas documenté publiquement. RailBase ne cite donc ici que des exemples avec photo.'] }],
  bilder: ['Ee 936 132 à Kandersteg (2016)', 'Eea 935 402 à Kandersteg (2016)', 'Tem 225 041 à Berthoud (2018)', 'Tm 235 091 à Spiez (2012)', 'Tea 245 021']
});
uebZug('bls-lrz', {
  typ: 'Trains d’extinction et de sauvetage du BLS',
  text: ['Le BLS possède aussi ses propres trains d’extinction et de sauvetage. Ils sont notamment stationnés au centre d’intervention de Frutigen, au portail nord du tunnel de base du Lötschberg.', 'Ces trains amènent agents extincteurs, secouristes et protection respiratoire dans les longs tunnels.'],
  kennzahlen: [['Frutigen', 'centre d’intervention'], ['Lötschberg', 'tunnel de base'], ['tunnels', 'utilisation principale'], ['BLS', 'exploitant']],
  daten: { 'Bauart': 'train d’extinction et de sauvetage', 'Standort': 'notamment centre d’intervention de Frutigen', 'Einsatz': 'sauvetage en tunnel, lutte contre le feu' },
  specNote: 'Les données valent pour le LRZ 04 que le BLS cite pour son service d’intervention. Le nombre total de trains n’est pas documenté publiquement.',
  abschnitte: [{ titel: 'Le LRZ 04', liste: ['Véhicule de matériel', 'Véhicule d’extinction avec citerne', 'Deux véhicules de sauvetage'] }],
  bilder: ['Train d’extinction et de sauvetage devant le centre d’intervention de Frutigen']
});
uebZug('bls-ae-4-4', {
  typ: 'Locomotive à grande puissance à quatre essieux du BLS (historique)',
  text: ['Les Ae 4/4 du BLS ont été les premières locomotives modernes à bogies à quatre essieux avec 1000 ch par essieu. Elles sont considérées comme les précurseurs de toutes les locomotives modernes à quatre essieux de grande puissance.', 'L’Ae 415 251 est en état de marche et peut être louée auprès du BLS.'],
  kennzahlen: [['1944', 'première livraison'], ['2945 kW', 'puissance'], ['125 km/h', 'vitesse maximale'], ['80 t', 'poids']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Hersteller': 'SLM et BBC', 'Betreiber': 'BLS, aujourd’hui BLS Historic', 'Erhalten': 'Ae 415 251, en état de marche' },
  abschnitte: [{ titel: 'Modernisée', liste: ['Nouveaux graduateurs et disjoncteurs à air comprimé', 'Frein électrique deux fois plus puissant ; un pantographe a été retiré pour cela', 'Ressorts en caoutchouc au lieu de ressorts à lames', 'Câble qui charge davantage les essieux avant et améliore l’adhérence'] }],
  bilder: ['Ae 4/4 251 à Interlaken West (2004)']
});
uebZug('bls-ae-6-8', {
  typ: 'Lourde locomotive de montagne du Lötschberg (historique)',
  text: ['Les Ae 6/8 du Lötschberg ont été construites de 1926 à 1943 et étaient alors les locomotives les plus puissantes du monde.', 'L’Ae 6/8 205 a été exposée à l’Exposition nationale de 1939 à Zurich et appartient aujourd’hui à la Fondation BLS.'],
  kennzahlen: [['8', 'construites 1926–1943'], ['4415 kW', 'puissance'], ['100 km/h', 'vitesse maximale'], ['120 t', 'poids']],
  daten: { 'Bauart': 'locomotive électrique (1’Co)(Co1’)', 'Hersteller': 'électricité SAAS ; mécanique Breda (201–204), SLM (205–208)', 'Betreiber': 'BLS, aujourd’hui Fondation BLS', 'Erhalten': 'Ae 6/8 205' },
  abschnitte: [{ titel: 'Deux séries', p: ['Les numéros 201–204 ont été construits de 1926 à 1931 encore comme Be 6/8, les 205–208 de 1939 à 1943 directement comme Ae 6/8 pour 100 km/h. En 1939, les quatre premières ont aussi reçu de nouvelles transmissions pour les trains rapides en plaine.'] }],
  bilder: ['Ae 6/8 205 près d’Ausserberg, 100 ans du Lötschberg']
});
uebZug('bls-ae-8-8', {
  typ: 'Double locomotive pour les lourds trains du Lötschberg (historique)',
  text: ['L’Ae 8/8 se compose en principe de deux Ae 4/4 accouplées en permanence. Le BLS l’a acquise dès 1956, car de plus en plus de lourds trains avaient besoin d’une locomotive de renfort sur la ligne du Lötschberg.', 'On la surnomme «Muni», le taureau.'],
  kennzahlen: [['6475 kW', 'puissance'], ['160 t', 'poids'], ['125 km/h', 'vitesse maximale'], ['1959', 'première mise en service']],
  daten: { 'Bauart': 'double locomotive Bo’Bo’+Bo’Bo’', 'Betreiber': 'BLS, aujourd’hui Fondation BLS', 'Erhalten': 'Ae 8/8 273 et 275' },
  abschnitte: [{ titel: 'Aujourd’hui', p: ['Les Ae 8/8 ont été mises en service entre 1959 et 1966. L’une des dernières tâches de la 273 a été de remorquer les trains de déblais du tunnel de base du Lötschberg.', 'La Fondation BLS récolte des fonds pour remettre la 273 en état de marche. L’avenir de la 275 est incertain en raison de son état.'] }],
  bilder: ['Ae 8/8 274']
});
uebZug('bls-be-5-7', {
  typ: 'Première locomotive électrique du Lötschberg (historique)',
  text: ['En 1913, la Be 5/7 a été la première locomotive de série pour le Lötschberg électrique. Elle était conçue comme locomotive universelle pour trains rapides et marchandises.', 'Après l’arrivée des Ae 4/4, elle a surtout remorqué des trains de marchandises.'],
  kennzahlen: [['13', 'construites'], ['1913', 'première mise en service'], ['1840 kW', 'puissance unihoraire'], ['75 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive électrique 1’E1’', 'Hersteller': 'SLM, MFO et BBC', 'Leistung': '1840 kW (puissance unihoraire)', 'Höchstgeschwindigkeit': '75 km/h, locomotives ultérieures 80 km/h', 'Erhalten': 'une locomotive au Musée suisse des transports' },
  abschnitte: [{ titel: 'Au Musée des transports', p: ['Depuis 1959, la locomotive 161 (à l’origine 155) se trouve au Musée suisse des transports à Lucerne. Elle y porte le numéro 151.'] }],
  bilder: ['Be 5/7 portant le numéro 151']
});
uebZug('bls-ce-6-6', {
  typ: 'Locomotive électrique d’essai et de marchandises de 1910 (historique)',
  text: ['La Ce 6/6 121 était une locomotive électrique unique, construite en 1910 comme F 2×3/3, puis appelée Fc 2×3/3 et enfin Ce 6/6.', 'Elle a circulé jusqu’en 1968, surtout avec des trains de marchandises sur des lignes plus plates comme Thoune–Interlaken.'],
  kennzahlen: [['1', 'exemplaire'], ['1910', 'construite'], ['1968', 'démolie'], ['1,7 mio de km', 'parcourus']],
  daten: { 'Bauart': 'locomotive électrique à deux bogies moteurs à trois essieux', 'Hersteller': 'MFO et SLM', 'Leistung': '2 × 1000 ch (puissance unihoraire)', 'Höchstgeschwindigkeit': '70 km/h, plus tard 60 km/h', 'Verbleib': 'démolie en 1968, un bogie au Musée des transports' },
  abschnitte: [{ titel: 'Longtemps en service', p: ['Dès 1928, la locomotive a remorqué des trains de marchandises pour le chemin de fer Berne–Neuchâtel. Elle a été démolie le 10 juillet 1968 après 57 ans. Un bogie est exposé au Musée des transports de Lucerne.'] }],
  bilder: ['Fc 2×3/3 121, la future Ce 6/6 121']
});
uebZug('bls-ce-4-6', {
  typ: 'Locomotive électrique légère pour lignes secondaires (historique)',
  text: ['La Ce 4/6 doit son surnom de «Dekretsmühle» au gouvernement bernois, qui a ordonné par décret en 1918 l’électrification des lignes secondaires pour faire face à la pénurie de charbon après la Première Guerre mondiale.', 'La Ce 4/6 307 de l’ancien chemin de fer Erlenbach–Zweisimmen se trouve aujourd’hui au dépôt de Berthoud.'],
  kennzahlen: [['17', 'locomotives 301–317'], ['1920', 'année de construction de la 307'], ['993 kW', 'puissance'], ['65 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive électrique à bielles', 'Betreiber': 'groupe BLS, aujourd’hui Fondation BLS', 'Erhalten': 'Ce 4/6 307, hors service' },
  abschnitte: [{ titel: 'Construction légère', p: ['Comme les locomotives devaient surtout circuler sur des lignes secondaires, leur charge par essieu ne devait pas dépasser 12 tonnes. Les 308–317 ont été transformées en Ce 4/4 en 1954–1956.', 'La 307 est un véhicule historique du BLS depuis 1999 et appartient à la Fondation BLS depuis 2023.'] }],
  bilder: ['Ce 4/6 307 «Dekretsmühle»']
});
uebZug('bls-ce-4-4', {
  typ: 'Locomotive électrique transformée à partir d’une Ce 4/6 (historique)',
  text: ['Les Ce 4/4 sont nées en 1954–1956 des Ce 4/6 308–317 : les avant-corps et les essieux porteurs ont été supprimés. Le poids adhérent et l’effort de traction ont ainsi augmenté, bien que la locomotive soit devenue plus légère.', 'La Ce 4/4 312 est aujourd’hui une pièce de musée au dépôt de Berthoud.'],
  kennzahlen: [['1920', 'construite'], ['1957', 'transformation de la 312'], ['993 kW', 'puissance'], ['65 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'locomotive électrique', 'Betreiber': 'groupe BLS, aujourd’hui Fondation BLS', 'Fahrzeugnummern': '312 (anciennement GBS)', 'Erhalten': 'Ce 4/4 312, hors service' },
  abschnitte: [{ p: ['Avec sa caisse repeinte, la 312 est un véhicule historique du BLS depuis 2013 et appartient à la Fondation BLS depuis 2023. Elle peut être visitée lors de visites guidées.'] }]
});
uebZug('bls-bcfe-4-6', {
  beiname: 'Flèche bleue',
  typ: 'Automotrice double légère de 1938 (historique)',
  text: ['La «Flèche bleue» de 1938 est, avec la Flèche rouge des CFF, l’un des classiques du rail suisse. Ses grandes fenêtres offrent une vue presque panoramique.', 'La BCFe 4/6 736 est en état de marche et peut être louée pour des excursions.'],
  kennzahlen: [['1938', 'construite'], ['136', 'places'], ['110 km/h', 'vitesse maximale'], ['41,5 m', 'longueur']],
  daten: { 'Bauart': 'automotrice double électrique', 'Hersteller': 'Sécheron (électricité), SIG (mécanique)', 'Betreiber': 'groupe BLS, aujourd’hui BLS Historic', 'Fahrzeugnummern': '736 (anciennement BCFZe 4/6 du BN)' },
  abschnitte: [{ titel: 'Histoire', p: ['En 1935, le BLS a introduit des automotrices légères à une caisse. L’essai ayant réussi, il a commandé trois automotrices doubles BCFZe 4/6, livrées à l’été 1938. La 731 était exposée à l’Exposition nationale de 1939.', 'Pendant des décennies, ces trois trains ont assuré le trafic voyageurs du groupe BLS, jusqu’à leur vente en 1983. La 736 du chemin de fer Berne–Neuchâtel est conservée.'] }],
  bilder: ['BCFe 4/6 736 «Flèche bleue»']
});
uebZug('bls-be-4-4-761', {
  typ: 'Automotrice à grande puissance de 1953 (historique)',
  text: ['La «Wellensittich» (perruche) de 1953, aujourd’hui Be 545 761, est considérée comme l’ancêtre des automotrices à grande puissance. Avec 2000 ch, elle pouvait même remorquer des trains internationaux Berne–Paris entre Berne et Neuchâtel.', 'Depuis 2001, elle porte à nouveau sa livrée d’origine vert clair et vert foncé et circule pour des courses spéciales.'],
  kennzahlen: [['1953', 'construite'], ['1470 kW', 'puissance'], ['125 km/h', 'vitesse maximale'], ['56', 'places assises']],
  daten: { 'Bauart': 'automotrice électrique', 'Frühere Bezeichnung': 'Ce 4/4, puis Be 4/4 761', 'Betreiber': 'BN, aujourd’hui BLS Historic', 'Fahrzeugnummern': '761–763 (conservée : 761)' },
  abschnitte: [{ p: ['Les 761 et 762 sont arrivées au chemin de fer Berne–Neuchâtel en 1953, la 763 au GBS en 1956. La 761 fait partie des véhicules historiques du BLS depuis 2003 et a été entièrement rénovée à l’intérieur en 2010.'] }],
  bilder: ['Be 4/4 761 «Wellensittich» à Frutigen']
});
uebZug('bls-ce-2-4', {
  typ: 'Automotrice légère de 1935 (historique)',
  text: ['En 1935, le groupe BLS a introduit des automotrices légères à une caisse, dont les Ce 2/4 727 et 787. L’essai ayant réussi, les automotrices doubles «Flèche bleue» ont suivi en 1938.', 'Les données conservées sur ces automotrices sont rares.'],
  kennzahlen: [['1935', 'construites'], ['727, 787', 'numéros'], ['1', 'caisse'], ['BLS', 'groupe']],
  daten: { 'Bauart': 'automotrice électrique légère', 'Betreiber': 'groupe BLS' },
  bilder: ['Ce 2/4 787']
});
uebZug('bls-abde-4-8', {
  typ: 'Automotrice double électrique pour le trafic régional (historique)',
  text: ['Dès 1945, les automotrices doubles ABDe 4/8 ont circulé en trafic régional dans le groupe BLS, par exemple dans le Simmental, entre Spiez et Interlaken et dans le Gürbetal. Beaucoup roulaient en rame réversible avec voiture-pilote.', 'Un seul train est conservé : l’ancienne 742, aujourd’hui chez le groupe du musée ferroviaire de Kerzers-Kallnach.'],
  kennzahlen: [['13', 'trains 1945–1964'], ['125 km/h', 'vitesse maximale'], ['1177 kW', 'puissance des trains ultérieurs'], ['2003', 'derniers retirés']],
  daten: { 'Bauart': 'automotrice double électrique', 'Hersteller': 'SIG et SAAS, plus tard aussi BBC', 'Länge': 'environ 46,8–47,8 m', 'Leistung': '706 kW (741–743), 1177 kW (ultérieures)', 'Höchstgeschwindigkeit': '110 km/h, plus tard 125 km/h', 'Erhalten': 'ex 742 à Kerzers-Kallnach' },
  bilder: ['ABDe 4/8 741']
});
uebZug('bls-rbde-565', {
  typ: 'Rame réversible régionale des chemins de fer privés (historique)',
  text: ['Les RBDe 565 étaient les rames réversibles régionales du BLS. Elles circulaient avec voitures intermédiaires et voitures-pilotes en trafic régional et RER.', 'De 2022 à 2025, elles ont été remplacées par les nouvelles MIKA.'],
  kennzahlen: [['22', 'automotrices'], ['125 km/h', 'vitesse maximale'], ['1650 kW', 'puissance continue'], ['1982', 'première mise en service']],
  daten: { 'Bauart': 'automotrice électrique pour rames réversibles', 'Hersteller': 'SIG, SWS, SWP, BBC et ABB', 'Leistung': '1650 kW (puissance continue)' },
  bilder: ['RBDe 565 726 à Laupen (2019)']
});
uebZug('bls-rbde-566', {
  typ: 'Rame réversible régionale de l’ancien parc RM (historique)',
  text: ['Les RBDe 566 II ont été construites en 1984–1985 pour le groupe EBT et sont arrivées au BLS avec la fusion de 2006. Elles circulaient notamment entre Spiez et Frutigen, Brigue et Goppenstein, sur le RER bernois et entre Thoune et Soleure.', 'La dernière course régulière a eu lieu le 6 décembre 2024.'],
  kennzahlen: [['13', 'automotrices'], ['1984', 'première mise en service'], ['2024', 'dernière course'], ['230–242', 'numéros']],
  daten: { 'Bauart': 'automotrice électrique pour rames réversibles', 'Betreiber': 'groupe EBT et RM, dès 2006 BLS', 'Verbleib': '566 241 avec voitures chez l’association Pendelzug Mirage' },
  bilder: ['RBDe 566 238 avec AB et ABt (2020)']
});
uebZug('bls-rabe-526', {
  typ: 'Automotrice articulée Stadler de l’ancien parc RM (anciennement BLS)',
  text: ['Les GTW rouges du Regionalverkehr Mittelland sont arrivés au BLS avec la fusion. En 2013, le BLS les a vendus aux CFF, qui les ont utilisés dans le Jura depuis Bienne ; en 2018, ils sont partis chez Thurbo.', 'Ils ne circulent plus au BLS.'],
  kennzahlen: [['13', 'rames'], ['2013', 'aux CFF'], ['2018', 'à Thurbo'], ['Stadler', 'constructeur']],
  daten: { 'Bauart': 'automotrice articulée électrique', 'Betreiber': 'RM, puis BLS, CFF, Thurbo' },
  bilder: ['GTW RABe 526 265 du BLS']
});
uebZug('bls-ew-iii', {
  name: 'EW III', beiname: 'Rame réversible',
  typ: 'Rame réversible avec voitures unifiées III (historique)',
  text: ['Les rames réversibles EW III du BLS ont circulé de 1973 à fin 2021, en dernier lieu surtout comme RegioExpress entre Berne et Neuchâtel. Elles ont cédé la place aux nouvelles MIKA.', 'CFF Historic a repris une rame EW III et la conserve.'],
  kennzahlen: [['1973', 'première mise en service'], ['2021', 'retirées'], ['165 m', 'longueur du train'], ['140 km/h', 'vitesse maximale']],
  daten: { 'Bauart': 'rame réversible avec locomotive et 6 voitures', 'Lokomotive': 'Re 465 (train Kambly : Re 420)', 'Sitzplätze': '63 en 1re, 280 en 2e classe' },
  bilder: ['Rame réversible EW III du BLS à Malters']
});
uebZug('bls-re-420', {
  typ: 'Re 4/4 II au service du BLS (historique)',
  text: ['Le BLS a possédé pendant un temps ses propres Re 420 de la famille éprouvée des Re 4/4 II. Les trois dernières remorquaient les voitures de la GoldenPass Line entre Interlaken Ost et Zweisimmen.', 'Aujourd’hui, le BLS ne possède plus de locomotives de ce type.'],
  kennzahlen: [['4700 kW', 'puissance'], ['140 km/h', 'vitesse maximale'], ['80 t', 'poids'], ['14,8 m', 'longueur']],
  daten: { 'Bauart': 'locomotive électrique Bo’Bo’', 'Betreiber': 'BLS (autrefois)' },
  bilder: ['Re 420.5 avec rame réversible sur le pont du Bietschtal']
});

// ---------- TPF ----------
uebZug('tpf-rabe-527', {
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler Bussnang a livré aux TPF huit FLIRT de la série 190, numérotés 191–198. Ils ont été mis en service de 2011 à 2014.'] },
      { titel: 'Utilisation et technique', p: ['Les FLIRT circulent sur le RER Fribourg : en RegioExpress RE2/RE3 Berne–Fribourg–Romont–Bulle–Broc et sur les S20/S21 Fribourg–Morat–Anet–Neuchâtel.', 'Le train de quatre caisses mesure 74,08 m, développe 2600 kW et roule jusqu’à 160 km/h. Jusqu’à quatre trains peuvent être couplés.'] },
      { titel: 'Équipement et accessibilité', liste: ['Entièrement climatisé', 'Information voyageurs acoustique et visuelle', 'Compartiment multifonction', 'Plancher bas sur plus de 90 %', 'WC à circuit fermé, adapté aux personnes à mobilité réduite'],
        p: ['Le train est à plancher bas sur plus de 90 %. Les TPF n’indiquent pas le nombre de places pour fauteuils roulants.'] }
    ],
  typ: 'Rame automotrice régionale électrique de Stadler',
  text: ['Les huit FLIRT de la série 190 sont les rames à voie normale les plus modernes des TPF. Elles circulent en RegioExpress et en RER dans le canton de Fribourg et au-delà.', 'Techniquement, elles font partie de la grande famille FLIRT de Stadler.'],
  kennzahlen: [['8', 'rames (191–198)'], ['160 km/h', 'vitesse maximale'], ['418', 'places au total'], ['2011', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique, 4 caisses', 'Gewicht': '122 t à vide', 'Sitzplätze': '24 en 1re, 143 en 2e classe', 'Anzahl': '8 rames' },
  specNote: 'Mises en service de 2011 à 2014. S’y ajoutent 42 strapontins et 209 places debout, soit 418 places au total.',
  bilder: ['RABe 527 196 à Neuchâtel', 'RABe 527 198 sur le viaduc de Grandfey', 'FLIRT des TPF à Bulle', 'RABe 527 en RegioExpress à Berne']
});
uebZug('tpf-rbde-560', {
  typ: 'Rame réversible régionale modernisée (Domino 3)',
  text: ['De 2009 à 2011, les TPF ont transformé leurs rames réversibles NPZ en Domino à trois caisses. Chaque rame a reçu une nouvelle voiture intermédiaire à plancher bas de Bombardier.', 'Deux rames, la 235 et la 245, portent le design «Chocolat Express».'],
  kennzahlen: [['14', 'rames'], ['140 km/h', 'vitesse maximale'], ['1650 kW', 'puissance'], ['184', 'places assises']],
  daten: { 'Bauart': 'rame réversible avec automotrice, voiture intermédiaire à plancher bas et voiture-pilote', 'Hersteller': 'SWG, SIG, ABB ; voiture intermédiaire Bombardier', 'Fahrzeugnummern': '235–247 et 269', 'Gewicht': '146 t à vide', 'Sitzplätze': '24 en 1re, 160 en 2e classe', 'Anzahl': '14 rames' },
  specNote: 'Automotrices construites de 1984 à 1996, modernisées en Domino de 2009 à 2011.',
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Les 14 Domino des TPF (235–247 et 269) sont issus de rames réversibles NPZ construites par SWG, SIG et ABB entre 1984 et 1996. De 2009 à 2011, les TPF les ont transformées en Domino ; chaque train a reçu une nouvelle voiture intermédiaire à plancher bas de Bombardier.', 'Les TPF ont commandé 13 FLIRT Evo à quatre caisses chez Stadler. Le premier doit entrer en service en décembre 2028 ; ils remplaceront progressivement les Domino les années suivantes.'] },
      { titel: 'Utilisation et technique', p: ['Comme les FLIRT, les Domino circulent sur le RER Fribourg, en RegioExpress Berne–Fribourg–Bulle–Broc et sur les S20/S21 Fribourg–Morat–Anet–Neuchâtel.', 'Un train mesure 75 m, développe 1650 kW et roule jusqu’à 140 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Climatisation dans tout le train', 'Information voyageurs acoustique et visuelle', 'Compartiment multifonction', 'Voiture intermédiaire à plancher bas', 'WC à bioréacteur, adapté aux personnes à mobilité réduite'],
        p: ['On monte de plain-pied dans la voiture intermédiaire à plancher bas ; l’automotrice et la voiture-pilote ont des marches.'] },
      { titel: 'Chocolat Express', p: ['Les rames 235 et 245 portent le design «Chocolat Express». Il ne s’agit pas d’un type de véhicule à part, mais d’une décoration particulière de Domino ordinaires.'] }
    ],
  bilder: ['Domino au design «Chocolat Express» sur le viaduc de Grandfey']
});
uebZug('tpf-abe-4-12', {
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Stadler Bussnang a livré aux TPF dix rames de trois caisses numérotées 101–110. Elles ont été mises en service en 2015 et 2016. Une rame se compose d’une ABe 2/4, d’une voiture intermédiaire B et d’une Be 2/4.'] },
      { titel: 'Utilisation et technique', p: ['Les rames circulent sur le réseau à voie métrique des TPF : S50 Palézieux–Châtel-St-Denis–Bulle–Montbovon et S51 jusqu’à Gruyères.', 'Une rame mesure 55,21 m, développe 1400 kW et roule jusqu’à 100 km/h. Elle est modulable de deux à quatre éléments, et jusqu’à quatre rames peuvent circuler ensemble.'] },
      { titel: 'Équipement et accessibilité', liste: ['Entièrement climatisée', 'Information voyageurs acoustique et visuelle', 'WC à circuit fermé, adapté aux personnes à mobilité réduite', '350 places : 15 en 1re et 133 en 2e classe, 14 strapontins, 188 places debout'],
        p: ['Sur sa page du véhicule, les TPF ne donnent pas d’indications sur les accès à plancher bas et les places pour fauteuils roulants.'] }
    ],
  beiname: 'Série 100',
  typ: 'Rame automotrice à plancher bas pour le réseau à voie métrique',
  text: ['Les dix rames à trois caisses de Stadler circulent sur le réseau à voie métrique des TPF en Gruyère et en Veveyse. Une rame se compose d’une ABe 2/4, d’une voiture intermédiaire B et d’une Be 2/4.', 'Jusqu’à quatre rames peuvent circuler ensemble.'],
  kennzahlen: [['10', 'rames (101–110)'], ['100 km/h', 'vitesse maximale'], ['350', 'places au total'], ['2015', 'première mise en service']],
  daten: { 'Bauart': 'rame automotrice électrique à plancher bas, 3 caisses', 'Gewicht': '88 t à vide', 'Sitzplätze': '15 en 1re, 133 en 2e classe', 'Anzahl': '10 rames' },
  specNote: 'Mises en service en 2015–2016. S’y ajoutent 14 strapontins et 188 places debout, soit 350 places au total.',
  bilder: ['ABe 4/12 devant la Dent du Chamois', 'ABe 4/12 près d’Albeuve', 'ABe 2/4 101 à Montbovon', 'ABe 2/4 103']
});
uebZug('tpf-be-4-4-120', {
  beiname: 'Série 120',
  typ: 'Rame réversible à voie métrique avec voiture intermédiaire et voiture-pilote',
  text: ['Les rames réversibles de la série 120 se composent d’une automotrice Be 4/4, selon les besoins d’une voiture intermédiaire B, et d’une voiture-pilote (A)Bt. Elles circulent sur le réseau à voie métrique des TPF.', 'Les automotrices s’appelaient autrefois BDe 4/4, car elles avaient un compartiment à bagages.'],
  kennzahlen: [['4', 'automotrices (121–124)'], ['90 km/h', 'vitesse maximale'], ['640 kW', 'puissance'], ['1992', 'première mise en service']],
  daten: { 'Bauart': 'rame réversible : automotrice, voiture intermédiaire, voiture-pilote', 'Hersteller': 'Vevey/BBC ; voitures intermédiaires SIG', 'Länge': '52,32 m (rame de 3 véhicules)', 'Sitzplätze': '134 en 2e classe ; 9 en 1re classe seulement dans les 221–223' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['La série 120 compte 13 véhicules : 4 automotrices Be 4/4 (121–124) et 6 voitures-pilotes (A)Bt (221–226) de Vevey/BBC, construites de 1992 à 1995, ainsi que 3 voitures intermédiaires B (207, 209, 215) de SIG datant de 1973.', 'Les automotrices s’appelaient autrefois BDe 4/4, car elles avaient un compartiment à bagages.'] },
      { titel: 'Utilisation et technique', p: ['Les rames réversibles circulent sur le réseau à voie métrique des TPF entre Palézieux, Bulle, Gruyères et Montbovon. Elles sont modulables : voitures intermédiaires et voitures-pilotes sont ajoutées selon la demande.', 'Une rame de trois véhicules mesure 52,32 m, développe 640 kW et roule jusqu’à 90 km/h.'] },
      { titel: 'Équipement et accessibilité', liste: ['Information voyageurs acoustique et visuelle', '253 places : 134 en 2e classe, 8 strapontins, 102 places debout', '1re classe de 9 places seulement dans les voitures-pilotes 221–223'],
        p: ['Sur sa page du véhicule, les TPF ne donnent pas d’indications sur la climatisation, les accès à plancher bas et les places pour fauteuils roulants.'] },
      { titel: 'Les véhicules', tabelle: { kopf: ['Véhicule', 'Numéros', 'Nombre', 'Années de construction', 'Constructeur'], zeilen: [
    ['Automotrice Be 4/4', '121–124', '4', '1992–1995', 'Vevey/BBC'], ['Voiture intermédiaire B', '207, 209, 215', '3', '1973', 'SIG'], ['Voiture-pilote (A)Bt', '221–226', '6', '1992–1995', 'Vevey/BBC']] } }
    ],
  bilder: ['Be 4/4 123', 'Automotrice 124, encore BDe 4/4 à l’époque (2010)', 'Voiture-pilote 221 à Bulle', 'Voiture-pilote 225']
});
uebZug('tpf-funiculaire', {
  typ: 'Funiculaire Neuveville–St-Pierre à contrepoids d’eau',
  text: ['Depuis 1899, le funiculaire de Fribourg relie la basse ville, la Neuveville, à St-Pierre. Il franchit 58 mètres de dénivelé sur 121 mètres.', 'Sa particularité est son fonctionnement : les eaux usées de la ville de Fribourg servent de contrepoids. Selon les TPF, c’est unique en Europe.'],
  kennzahlen: [['1899', 'ouverture'], ['121 m', 'longueur de la ligne'], ['550 ‰', 'pente maximale'], ['2 min', 'temps de parcours']],
  daten: { 'Bauart': 'funiculaire à contrepoids d’eau', 'Kabinen': '2 de 20 places chacune', 'Länge': '121 m de ligne, cabine 5,4 m', 'Gewicht': '1600 kg par cabine', 'Kapazität': '240 personnes par heure' },
  abschnitte: [
      { titel: 'Constructeur et constitution de la flotte', p: ['Le funiculaire a été construit par Von Roll ; il circule depuis 1899. Il a été transformé en 1998, la dernière grande révision date de 2020. Il est classé monument historique.', 'Il compte deux cabines de 20 places chacune.'] },
      { titel: 'Utilisation et technique', p: ['Le funiculaire relie à Fribourg la basse ville, la Neuveville (552 m), à St-Pierre (608 m). En exploitation régulière, sur la voie unique avec évitement, il effectue environ 70 allers-retours par jour, de 7 h à 19 h, en été jusqu’à 20 h.', 'Les eaux usées de la ville de Fribourg servent de contrepoids. La ligne mesure 121 m, a un écartement de 1200 mm et une pente jusqu’à 550 ‰ ; le trajet dure 2 minutes à 1,2 m/s.', 'En raison d’une révision générale, le funiculaire est fermé du 27 août au 4 décembre 2026. La reprise est annoncée pour le 5 décembre 2026 ; d’ici là, la ligne de bus 4 assure le remplacement.'] },
      { titel: 'Équipement et accessibilité', liste: ['2 cabines de 20 places chacune', '240 personnes par heure'],
        p: ['Sur la page du véhicule, les TPF ne donnent pas d’indications sur l’accès en fauteuil roulant, avec une poussette ou un vélo.'] }
    ],
  bilder: ['Funiculaire Neuveville–St-Pierre à Fribourg (2024)']
});
uebZug('tpf-tm-87', {
  typ: 'Tracteur de service diesel-hydraulique avec grue de chargement',
  text: ['Le Tm 87 est un tracteur de service de la série Tm 234 pour le réseau à voie normale des TPF. Il sert à l’entretien de l’infrastructure, remorque des trains lourds et déblaie la neige.', 'Il possède une grue de chargement et peut être télécommandé.'],
  kennzahlen: [['550 kW', 'puissance'], ['80 km/h', 'vitesse maximale'], ['30 t', 'poids'], ['2000', 'première mise en service']],
  daten: { 'Bauart': 'tracteur diesel-hydraulique avec grue de chargement', 'Gewicht': '30 t à vide', 'Kran': 'Palfinger, 1200 kg à 7,2 m' }
});
uebZug('tpf-tmf-17', {
  typ: 'Tracteur diesel pour le réseau à voie métrique',
  text: ['Le Tmf 2/2 17 de Schöma est un tracteur diesel à deux essieux pour le réseau à voie métrique des TPF. Il travaille au service des travaux, remorque des trains lourds et déblaie la neige.', 'Il peut aussi être télécommandé.'],
  kennzahlen: [['330 kW', 'puissance'], ['65 km/h', 'vitesse maximale'], ['28 t', 'poids'], ['2011', 'première mise en service']],
  daten: { 'Bauart': 'tracteur diesel à deux essieux', 'Gewicht': '28 t à vide', 'Motor': 'Deutz, 6 cylindres', 'Anhängelast': '200 t en palier, 90 t à 50 ‰' }
});
uebZug('tpf-gem-18', {
  typ: 'Locomotive bimode pour le réseau à voie métrique',
  text: ['La Gem 2/2 18 de Stadler roule à l’électricité sous la caténaire et au diesel ailleurs. Les TPF l’utilisent au service des travaux, pour les trains lourds et le déneigement.', 'La cabine accueille huit personnes.'],
  kennzahlen: [['700 kW', 'électrique'], ['400 kW', 'diesel'], ['80 km/h', 'vitesse maximale'], ['2016', 'première mise en service']],
  daten: { 'Bauart': 'locomotive bimode (électrique et diesel)', 'Gewicht': '28 t à vide', 'Leistung': '700 kW électrique, 400 kW diesel', 'Anhängelast': '300 t en palier, 120 t à 50 ‰' },
  bilder: ['Gem 2/2 18']
});
uebZug('tpf-x-925', {
  name: 'X 925', beiname: 'Wagon-grue',
  typ: 'Wagon-grue pour voie métrique et voie normale',
  text: ['Le wagon-grue X 925 porte une grue Palfinger radiocommandée. Le châssis date de 1972, la transformation en wagon-grue est entrée en service en 2016.', 'La plateforme de la grue peut être transférée sur le wagon porteur à voie normale Sgjs X113. La grue peut ainsi travailler aussi sur le réseau à voie normale des TPF.'],
  kennzahlen: [['1500 kg', 'à 14 m de portée'], ['65 km/h', 'vitesse maximale'], ['52 t', 'poids total'], ['2016', 'première mise en service']],
  daten: { 'Bauart': 'wagon-grue à quatre essieux 2’2’', 'Spurweite': 'voie métrique, 1000 mm ; grue aussi sur le wagon porteur à voie normale Sgjs X113', 'Gewicht': '37,825 t à vide, 52 t chargé', 'Kran': 'Palfinger PKR290, 1500 kg à 14 m' }
});
uebZug('tpf-retrozug', {
  name: 'Train rétro',
  typ: 'Train historique à voie métrique des TPF pour courses spéciales',
  text: ['Le train rétro des TPF se compose de l’automotrice Be 4/4 116 et de trois voitures de 1930 à 1932. Les TPF l’utilisent pour les trains fondue et d’autres courses spéciales.', 'L’automotrice de 1922 a été entièrement reconstruite à l’identique par les TPF en 1999.'],
  kennzahlen: [['1922', 'automotrice construite'], ['482 kW', 'puissance'], ['65 km/h', 'vitesse maximale'], ['186', 'places']],
  daten: { 'Bauart': 'automotrice avec trois voitures', 'Hersteller': 'SWS (automotrice), SIG (voitures)', 'Länge': '61,58 m (train complet)', 'Höchstgeschwindigkeit': '65 km/h (30 km/h en service)', 'Sitzplätze': '176 en 2e classe, plus 10 strapontins' },
  abschnitte: [{ titel: 'Les véhicules', tabelle: { kopf: ['Véhicule', 'Année de construction', 'Constructeur'], zeilen: [
    ['Automotrice Be 4/4 116', '1922 (reconstruite en 1999)', 'SWS'], ['Voiture B 243', '1930', 'SIG'], ['Voiture Brs 245', '1931', 'SIG'], ['Voiture Br 247', '1932', 'SIG']] } }],
  bilder: ['Train rétro des TPF', 'Be 4/4 116 à Bulle (2011)', 'Intérieur du train rétro']
});
uebZug('gfm-be-111', {
  typ: 'Automotrice électrique de 1903 (historique)',
  text: ['L’automotrice 111 de 1903 date des débuts des chemins de fer électriques en Gruyère. Elle fait aujourd’hui partie de la collection de GFM Historique.', 'De 2006 à 2011, elle a été prêtée au chemin de fer-musée Blonay–Chamby.'],
  kennzahlen: [['1903', 'construite'], ['111', 'numéro'], ['voie métrique', 'écartement'], ['GFM Historique', 'aujourd’hui']],
  daten: { 'Bauart': 'automotrice électrique', 'Betreiber': 'CEG/GFM, aujourd’hui GFM Historique' },
  specNote: 'GFM Historique la nomme «Be 4/4 111», Wikipédia «BCe 4/4 111».',
  bilder: ['Automotrice 111 au chemin de fer-musée Blonay–Chamby']
});
uebZug('gfm-be-115', {
  typ: 'Automotrice nostalgique de 1905 (historique)',
  text: ['La Be 4/4 115 de 1905 a longtemps circulé comme automotrice nostalgique sur le réseau à voie métrique des GFM, puis des TPF.', 'Elle a été démolie en octobre 2016.'],
  kennzahlen: [['1905', 'construite'], ['2016', 'démolie'], ['115', 'numéro'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'automotrice électrique', 'Betreiber': 'GFM, puis TPF', 'Verbleib': 'démolie en octobre 2016' },
  bilder: ['Be 4/4 115 à Bulle (1995)', 'Be 4/4 115 avec Bt 254 à Broc-Fabrique (2011)']
});
uebZug('gfm-be-131', {
  typ: 'Automotrices électriques de 1943 (historique)',
  text: ['Les trois automotrices 131 à 133 ont été construites en 1943 pour le réseau à voie métrique des GFM.', 'La 132 a été démolie en 1989 et la 133 en 2003. La 131 est conservée et fait partie de la collection de GFM Historique sous le nom de Ce 4/4 131.'],
  kennzahlen: [['3', 'automotrices'], ['1943', 'construites'], ['131', 'conservée'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'automotrice électrique', 'Verbleib': '131 conservée, 132 démolie en 1989, 133 démolie en 2003' }
});
uebZug('gfm-bde-141', {
  typ: 'Automotrices pour trains de gravier de 1972 (historique)',
  text: ['Les deux puissantes automotrices de 1972 ont d’abord été construites pour les trains de gravier. Dès 1981, elles ont reçu un compartiment avec places assises et ont aussi circulé avec les voitures-pilotes 251–256.', 'La 141 est allée à GFM Historique en 2017, la 142 a été démolie en avril 2017.'],
  kennzahlen: [['2', 'automotrices'], ['1972', 'construites'], ['70 km/h', 'vitesse maximale'], ['36,5 t', 'poids']],
  daten: { 'Bauart': 'automotrice électrique avec compartiment à bagages', 'Hersteller': 'SWP (mécanique), SAAS (électricité)', 'Betreiber': 'GFM, puis TPF', 'Sitzplätze': '40 (dès 1981)', 'Verbleib': '141 chez GFM Historique, 142 démolie en 2017' },
  bilder: ['BDe 4/4 141 avec voiture-pilote', 'BDe 4/4 142 à Bulle (2014)', 'BDe 4/4 142 à Bulle']
});
uebZug('gfm-be-151', {
  typ: 'Automotrices pour rames réversibles de 1977 (historique)',
  text: ['Les automotrices 151 et 152 de 1977 n’avaient qu’une seule cabine de conduite. Elles circulaient donc toujours avec l’une des voitures-pilotes 251–256.', 'Les deux ont été démolies en avril 2017.'],
  kennzahlen: [['2', 'automotrices'], ['1977', 'construites'], ['1', 'cabine de conduite'], ['2017', 'démolies']],
  daten: { 'Bauart': 'automotrice électrique à une cabine de conduite', 'Betreiber': 'GFM, puis TPF', 'Einsatz': 'rame réversible avec voitures-pilotes 251–256', 'Verbleib': 'démolies en avril 2017' },
  bilder: ['Be 4/4 151 avec la voiture-pilote Bt 256', 'Be 4/4 152 à Montbovon (1995)']
});
uebZug('gfm-gde-101', {
  typ: 'Locomotive électrique à voie métrique des GFM (aujourd’hui au MOB)',
  text: ['La GDe 4/4 101 «Ville de Bulle» était la seule grande locomotive électrique à voie métrique des GFM.', 'Elle a été vendue au Montreux–Oberland bernois et y circule comme GDe 4/4 6005.'],
  kennzahlen: [['1983', 'construite'], ['SLM / BBC', 'constructeur'], ['6005', 'numéro actuel au MOB'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'locomotive électrique', 'Hersteller': 'SLM et BBC', 'Betreiber': 'GFM, aujourd’hui MOB', 'Fahrzeugnummern': '101, au MOB 6005', 'Verbleib': 'vendue au MOB' },
  specNote: 'L’année de la vente est indiquée différemment selon les sources (2007 ou 2017).',
  bilder: ['L’ancienne GDe 4/4 101 comme MOB 6005 près de Saanenmöser (2014)']
});
uebZug('gfm-te-22', {
  typ: 'Tracteurs de manœuvre électriques de 1913 (historique)',
  text: ['Les deux petits tracteurs de manœuvre de 1913 manœuvraient sur le réseau à voie métrique des GFM : le Te 2/2 11 à Bulle, le Te 2/2 12 à Montbovon.', 'Le 12 a été retiré en 2012.'],
  kennzahlen: [['2', 'tracteurs'], ['1913', 'construits'], ['Bulle', 'Te 2/2 11'], ['Montbovon', 'Te 2/2 12']],
  daten: { 'Bauart': 'tracteur de manœuvre électrique', 'Hersteller': 'électricité MFO (11), Alioth (12)', 'Betreiber': 'GFM, puis TPF' },
  specNote: 'Pour le 12, Wikipédia indique une démolition en 2012 ; Commons contient aussi des photos de 2026.',
  bilder: ['Te 2/2 12 à Montbovon', 'Te 2/2 12 vu de côté']
});
uebZug('gfm-te-44', {
  typ: 'Tracteurs de manœuvre transformés à partir d’automotrices (historique)',
  text: ['Les Te 4/4 13 et 14 ont été construits en 1901 comme automotrices et transformés en tracteurs de manœuvre en 1927 et 1933.', 'Le 13 manœuvrait à Broc-Fabrique, le 14 remorquait des trains de travaux. Le 13 a été retiré en 2017.'],
  kennzahlen: [['2', 'tracteurs'], ['1901', 'construits'], ['1927 / 1933', 'transformés'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'tracteur de manœuvre électrique', 'Hersteller': 'électricité Alioth', 'Betreiber': 'GFM, puis TPF', 'Einsatz': 'manœuvres à Broc-Fabrique, trains de travaux' },
  bilder: ['Te 4/4 13', 'Te 4/4 14']
});
uebZug('gfm-tm-15', {
  typ: 'Tracteur diesel pour trains de travaux et manœuvres (historique)',
  text: ['Le petit tracteur diesel Tm 2/2 15 a été construit par Schöma en 1971 et transformé en 1981. Il remorquait des trains de travaux et manœuvrait à Bulle.'],
  kennzahlen: [['1971', 'construit'], ['1981', 'transformé'], ['Schöma', 'constructeur'], ['Bulle', 'lieu d’utilisation']],
  daten: { 'Bauart': 'tracteur diesel à deux essieux', 'Betreiber': 'GFM, puis TPF', 'Einsatz': 'trains de travaux, manœuvres à Bulle' },
  bilder: ['Tm 2/2 15 à Bulle (2005)']
});
uebZug('gfm-abde-24', {
  typ: 'Automotrice du chemin de fer Fribourg–Morat–Anet (historique)',
  text: ['Les ABDe 2/4 sont arrivées en 1931 au chemin de fer Fribourg–Morat–Anet, encore pour le courant continu. En 1946, elles ont été converties au courant alternatif.', 'L’ABDe 2/4 155 a été démolie en 2025 ; ses cabines de conduite sont allées à ÖV Historique.'],
  kennzahlen: [['1931', 'livrée'], ['1946', 'convertie au courant alternatif'], ['155', 'conservée en dernier'], ['voie normale', 'écartement']],
  daten: { 'Bauart': 'automotrice électrique', 'Betreiber': 'FMA, puis GFM', 'Stromsystem': 'd’abord courant continu, dès 1946 15 kV 16,7 Hz', 'Verbleib': '155 démolie en 2025, cabines chez ÖV Historique' },
  bilder: ['ABDe 2/4 155']
});
uebZug('gfm-abde-44', {
  typ: 'Automotrices à voie normale des GFM (historique)',
  text: ['Les ABDe 4/4 161 à 167 de SIG et BBC ont été construites de 1946 à 1948 et ont modernisé les lignes à voie normale des GFM. La plupart ont été transformées en 1965.', 'Plusieurs automotrices ont depuis été démolies.'],
  kennzahlen: [['1946', 'premières construites'], ['1965', 'transformées'], ['SIG / BBC', 'constructeur'], ['48', 'places (16 + 32)']],
  daten: { 'Bauart': 'automotrice électrique', 'Hersteller': 'SIG et BBC', 'Fahrzeugnummern': '161–167 (166 comme ABe 4/4)', 'Sitzplätze': '16 en 1re, 32 en 2e classe', 'Verbleib': '162, 163 et 167 démolies' },
  bilder: ['ABDe 4/4 162 à Anet', 'ABDe 4/4 167 à Bulle']
});
uebZug('gfm-rbde-567', {
  typ: 'Anciennes rames réversibles régionales des GFM et des TPF',
  text: ['Les automotrices 171 à 173 de 1983 et 181 à 182 de 1991 font partie de la famille des NPZ des chemins de fer privés. La 173 est venue du RVT en 1992.', 'Elles ne figurent plus dans l’aperçu actuel de la flotte des TPF ; la 171 a encore été photographiée en 2024.'],
  kennzahlen: [['5', 'automotrices'], ['1983', 'premières construites'], ['1991', 'deuxième série'], ['voie normale', 'écartement']],
  daten: { 'Bauart': 'automotrice électrique pour rames réversibles', 'Hersteller': 'SIG, SWS, BBC (171–173) ; SWP, SIG, ABB (181–182)', 'Betreiber': 'GFM, puis TPF' },
  bilder: ['Automotrice 182 à Anet (2000)', 'Automotrice 171 (2005)']
});
uebZug('gfm-ee-91', {
  typ: 'Locomotive de manœuvre électrique à voie normale (historique)',
  text: ['La petite locomotive de manœuvre Ee 2/2 91 a été construite en 1960 par SIG et BBC. Elle manœuvrait sur le réseau à voie normale des GFM, par exemple à Bulle, et a plus tard porté le numéro 217 091.'],
  kennzahlen: [['1960', 'construite'], ['SIG / BBC', 'constructeur'], ['217 091', 'numéro ultérieur'], ['voie normale', 'écartement']],
  daten: { 'Bauart': 'locomotive de manœuvre électrique', 'Hersteller': 'SIG et BBC', 'Betreiber': 'GFM, puis TPF', 'Fahrzeugnummern': '91 (plus tard 217 091)' },
  bilder: ['Ee 2/2 91 (217 091) à Bulle (2005)']
});
uebZug('gfm-wagen', {
  name: 'Wagons historiques',
  typ: 'Voitures et wagons conservés des GFM',
  text: ['Outre les engins moteurs, des wagons des GFM sont aussi conservés. GFM Historique garde la voiture B 235 de 1903 et la voiture-pilote CFt4 273.', 'Les wagons couverts K 671 et K 672 se trouvent au chemin de fer-musée Blonay–Chamby.'],
  kennzahlen: [['B 235', 'voiture de 1903'], ['CFt4 273', 'voiture-pilote'], ['K 671, K 672', 'wagons marchandises'], ['voie métrique', 'écartement']],
  daten: { 'Bauart': 'voitures, voitures-pilotes et wagons marchandises', 'Betreiber': 'CEG/GFM, aujourd’hui associations de musée', 'Erhalten': 'GFM Historique ; Blonay–Chamby' },
  bilder: ['Wagon couvert K 671 à Vevey (2016)', 'Wagon K 671 à la chocolaterie de Broc']
});
