/* Italiano – Re 430 e Ama 832 */
uebDict({ 'Dieselgenerator': 'Generatore diesel', 'Eigentümer': 'Proprietario', 'Bestellt': 'Ordinata', 'Plattform': 'Piattaforma', 'SBB Cargo AG': 'FFS Cargo SA', 'LokRoll 2 AG': 'LokRoll 2 SA' });

uebZug('ama-832', {
  typ: 'Locomotiva da manovra ibrida con generatore diesel e batteria',
  text: ['L’Ama 832 è una locomotiva da manovra ibrida a tre assi di Alstom della famiglia Prima H3. A seconda dell’impiego viaggia da metà a tre quarti del tempo con la corrente della batteria.', 'FFS Cargo ha noleggiato dodici locomotive per dieci anni; appartengono a LokRoll 2 SA.'],
  kennzahlen: [['12', 'locomotive noleggiate'], ['100 km/h', 'velocità massima'], ['350 kW', 'generatore diesel'], ['2018', 'ordinazione']],
  daten: { 'Antrieb': 'ibrida: generatore diesel e batteria', 'Dieselgenerator': '350 kW, livello di emissioni IIIB', 'Länge': '12,8 m', 'Leistung': '790 kW (catalogo dei tipi di marcia)', 'Anzahl': '12 noleggiate' },
  specNote: 'La designazione e la potenza di 790 kW seguono il catalogo dei tipi di marcia FFS 2026; il solo generatore diesel ha 350 kW. Le locomotive non appartengono alle FFS.',
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['LokRoll 2 SA, fondata dal fondo Reichmuth Infrastruktur Schweiz, ordinò nell’ottobre 2018 ad Alstom dodici Prima H3 per circa 40 milioni di euro. Sono noleggiate a FFS Cargo per dieci anni. Sono state costruite da Alstom in Germania; le consegne erano previste da ottobre 2020.', 'Già dal 2017 FFS Cargo noleggiava tre Prima H3 da Alstom, per aree chiuse del porto di Basilea-Kleinhüningen e in Argovia.'] },
      { titel: 'Impiego e tecnica', p: ['FFS Cargo impiega le locomotive per le manovre, per comporre e spostare carri merci, per esempio a St. Margrethen. A seconda dell’impiego viaggiano dal 50 al 75 % del tempo con la batteria, il che permette un esercizio senza emissioni in città o nei capannoni.', 'Il generatore diesel ha 350 kW. La locomotiva è lunga 12,8 m, pesa 67 t, ha 240 kN di sforzo all’avviamento e viaggia fino a 100 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Cabina di guida al centro', 'Batteria per viaggiare senza emissioni', 'ETCS per la rete svizzera', 'Nessun pantografo, nessun compartimento passeggeri'] }
    ],
  bilder: ['Nuova Ama 832 della squadra di manovra di St. Margrethen (2021)', 'Ama 832 nuova di fabbrica a St. Margrethen (2021)']
});
uebZug('h-re430', {
  typ: 'Locomotiva elettrica per treni rapidi e merci del Gottardo (storico)',
  text: ['La Re 4/4 III, poi Re 430, è la versione a maggiore sforzo di trazione della Re 4/4 II. Un rapporto di trasmissione diverso le dà più trazione in salita; in cambio viaggia al massimo a 125 invece di 140 km/h.', 'Le ultime locomotive delle FFS furono ritirate nell’aprile 2023.'],
  kennzahlen: [['20', 'locomotive FFS (11351–11370)'], ['125 km/h', 'velocità massima'], ['4700 kW', 'potenza oraria'], ['1970', 'entrata in servizio']],
  daten: { 'Länge': '15,41 m tra i respingenti', 'Gewicht': '80 t, 84 t con climatizzazione', 'Leistung': '4700 kW oraria, 3700 kW continua', 'Höchstgeschwindigkeit': '125 km/h (all’inizio 120 km/h)', 'Nummern': '11351–11370, poi Re 430 351–370; più 11350 ex SOB 41', 'Ausmusterung': 'fino all’8 aprile 2023' },
  abschnitte: [
      { titel: 'Costruttore e composizione della flotta', p: ['SLM, BBC, MFO e SAAS costruirono le locomotive. Le FFS ne ricevettero 20 nel 1970 e 1971, numerate 11351–11370. Le 11351–11353 passarono alla SOB dal 1983 al 1985 e tornarono dal 1994 al 1996; nello stesso scambio la SOB 41 arrivò alle FFS come 11350.', 'Locomotive affini circolavano su ferrovie private: EBT 111–113, VHB 141 e SMB 181, poi come Re 436 e Re 430 presso RM e Widmer Rail Services.'] },
      { titel: 'Impiego e tecnica', p: ['La Re 4/4 III fu costruita per treni rapidi e merci al Gottardo. In seguito circolò soprattutto nel traffico merci, per lo più presso FFS Cargo. La 11365 fu ritirata dopo una collisione a Basilea nel 2013; le ultime due, la 430 356 e la 11370, furono ritirate l’8 aprile 2023.', 'La locomotiva è lunga 15,41 m, ha 4700 kW di potenza oraria e 3700 kW continua, 280 kN di sforzo all’avviamento e viaggia fino a 125 km/h.'] },
      { titel: 'Dotazione e accessibilità', liste: ['Due cabine di guida', 'Comando multiplo, per esempio con la Re 6/6 come «Re 10/10»', 'Nessun compartimento passeggeri'],
        p: ['Con i treni viaggiatori l’accessibilità dipendeva dalle carrozze.'] }
    ],
  bilder: ['Re 430 364 (11364) a Soletta (2019)', 'Re 4/4 III 11360 e Re 421 a Frauenfeld (2012)', 'Re 4/4 III 11350, ex SOB 41, a Rotkreuz (2012)', 'Re 4/4 III 11364 con carrozze a due piani a Veytaux (2011)']
});
uebEinsatz({
  'ama-832': 'In manovra presso FFS Cargo in Svizzera, per esempio a St. Margrethen.',
  'h-re430': 'Un tempo in testa a treni rapidi e merci al Gottardo, poi soprattutto nel traffico merci di FFS Cargo su tutta la rete.'
});
