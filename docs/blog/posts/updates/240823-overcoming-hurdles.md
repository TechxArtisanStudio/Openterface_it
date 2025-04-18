---
date: 2024-08-22
authors:
  - Openterface
categories:
  - Updates
---
# Superare gli Ostacoli: Aggiornamento sui Progressi e Nuova Timeline

Ciao a tutti,

Spero che stiate tutti bene. È passato un po' di tempo dal nostro ultimo aggiornamento. Vorrei poter dire che tutto è andato liscio per Openterface, ma abbiamo incontrato alcuni ostacoli che ritarderanno la nostra timeline di consegna. Anche se non era quello che ci aspettavamo, stiamo affrontando queste sfide con determinazione e facendo progressi costanti con molte buone notizie da condividere. Questo post richiederà circa **7 minuti di lettura**, quindi tuffiamoci nei dettagli per farvi sapere esattamente dove siamo e cosa ci aspetta.

## Regolamentazione, Produzione e Qualità

Prima di poter avviare la produzione, dovevamo superare i test di qualità necessari secondo le normative, in particolare la certificazione CE. Poiché la nostra versione toolkit include non solo il Mini-KVM ma anche diversi accessori, ogni parte doveva essere sottoposta a test CE. Questi test hanno richiesto più tempo del previsto (a quanto pare i cavi possono essere piuttosto esigenti), ma la buona notizia è che **abbiamo superato la certificazione CE per il nostro Mini-KVM e tutti i suoi componenti!** Di seguito una panoramica delle certificazioni per tutte le nostre parti: Mini-KVM, cavo HDMI, cavo Type-C arancione, cavo Type-C corto nero e cavo VGA2HDMI. Con la certificazione in mano, la nostra timeline di produzione è ora certa, e i nostri produttori stanno **attualmente producendo tutte le parti** mentre parlo.

![240823-0](../pic/240823-0.jpg)
*I requisiti UKCA e CE sono gli stessi per i nostri prodotti elettronici, con il CE che copre anche la conformità RoHS.*

Due settimane fa, abbiamo visitato uno dei nostri produttori per formare i loro responsabili di linea sul controllo qualità per i cavi arancioni prima che li spedissero a noi. Ora, TUTTI i cavi arancioni sono stati prodotti e sono accatastati in un angolo del nostro studio.
![240823-1](../pic/240823-1.jpg)
*Kevin e Shawn stavano spiegando i metodi di test per garantire che il cavo arancione funzioni correttamente con il nostro Openterface Mini-KVM.*

Faremo lo stesso compito questa settimana per formare il QA in prima linea di produzione per le altre parti. Ecco i campioni degli altri cavi.
![240823-2](../pic/240823-2.jpg)
*Orgogliosamente contrassegnati con il nostro logo TechxArtisan, questi sono i campioni del cavo HDMI, del cavo Type-C corto e del cavo VGA-to-HDMI.*

Ci aspettiamo che le altre parti e i Mini-KVM arrivino presto dai nostri produttori, a quel punto controlleremo nuovamente la qualità di ogni componente e li imballeremo correttamente nel nostro studio prima della spedizione. In altre parole, **il nostro team garantirà personalmente la qualità** prima che raggiunga le vostre mani.

## Spedizione, Potenziali Ritardi e Nuova ETA

**L'incertezza attuale riguarda il processo di spedizione**. Dopo aver esaminato diverse compagnie di spedizione, abbiamo scoperto che la spedizione richiederà più tempo poiché probabilmente trasferiremo i pacchi attraverso un magazzino prima di raggiungere il magazzino di Crowd Supply. Stiamo ancora decidendo se scegliere il trasporto marittimo o aereo—per favore abbiate pazienza per qualche giorno in più mentre sistemiamo i dettagli.

Lo sdoganamento è un altro potenziale ostacolo che potrebbe causare ritardi imprevisti. Una volta che i nostri prodotti arriveranno al magazzino di Crowd Supply negli Stati Uniti, ci vorranno da una a due settimane per essere spediti a livello globale in base a ciascun ordine. Per i sostenitori al di fuori degli Stati Uniti, i singoli pacchi dovranno ancora passare attraverso la spedizione globale e lo sdoganamento nel paese di destinazione.

Tenendo conto della situazione attuale e aggiungendo un po' di tempo di buffer, rimango cautamente ottimista che completeremo la consegna entro la fine di quest'anno, con **una nuova ETA a metà gennaio**. Mi dispiace davvero per l'inconveniente e apprezzo il vostro supporto e la vostra pazienza durante questo cambiamento.

## Hardware V1.9 Finalizzato

Come sapete dal nostro precedente [post su Reddit](https://www.reddit.com/r/Openterface_miniKVM/comments/1e25pco/openterface_minikvm_v19_with_pins_for_more/), abbiamo deciso di **aggiornare il nostro hardware alla versione V1.9**, includendo un set di pin di espansione hackerabili. Questo non faceva parte del piano originale per la campagna di crowdfunding, ma crediamo che migliori significativamente il **potenziale di utilizzo** dell'hardware.

![240823-3](../pic/240823-3.jpg)
*I pin VCC, GND, Target D+, Target D-, Host D+ e Host D-—dove 'D' sta per dati USB.*

Una delle motivazioni principali era abilitare **lo switch USB a livello software**. Perché è importante? Nel nostro roadmap, **puntiamo a supportare una soluzione KVM-over-IP**, come VNC, in futuro. L'idea è di abbinare il controllo KVM locale con il protocollo VNC, permettendo agli utenti di controllare a distanza il computer target tramite il computer host. In uno scenario remoto del genere, la possibilità per gli utenti di switchare la porta USB è essenziale, specialmente quando sono necessari trasferimenti di file tra l'host e il target.

**I pin di espansione aprono anche possibilità per altro**, come l'integrazione con iPadOS, il controllo ATX, il bridging di rete e il bypass audio. Anche se non entrerò nei dettagli qui, vi incoraggio a unirvi alla nostra comunità Openterface per discuterne ulteriormente con noi.

Questo aggiornamento hardware potrebbe potenzialmente estendere la nostra soluzione Openterface per operare su IP e includere funzionalità più avanzate, mantenendo comunque la sua forza principale come strumento KVM-over-USB plug-and-play—perfetto per i professionisti IT che navigano in ambienti IT incerti, come data center sconosciuti.

Sono felice di riferire che la versione V1.9 ha superato i nostri test interni di base e sarà finalizzata come versione ufficiale per tutti i nostri sostenitori. Tuttavia, questo aggiornamento hardware richiederà ulteriori test, e qualsiasi sviluppo basato su questi pin di espansione sarà sperimentale e probabilmente avrà bug. Qui è dove potete contribuire. Contiamo sulla comunità open-source per aiutarci a migliorare Openterface insieme.

## Altri Aggiornamenti Software

Sul fronte software, stiamo facendo passi avanti entusiasmanti. Stiamo lavorando sull'**app Android di Openterface** ora! Date un'occhiata a questo [tweet](https://x.com/TechxArtisan/status/1825460088922071398) per una demo iniziale che mostra il controllo KVM fluido, il movimento del mouse e i clic in azione. Altre funzionalità sono in arrivo e, come sempre, una volta che avremo perfezionato un po' il codice, **questa app sarà anche open-source** sul nostro repo GitHub [Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android).
![240823-4](pic/240823-4.jpg)
*Usando solo le nostre dita per controllare un computer Linux da un tablet Android. Fantastico!*

La nostra versione QT ha appena ricevuto un aggiornamento utile—ora potete [trasferire testo dall'host al target](https://x.com/TechxArtisan/status/1825919721960780131)! Quindi ora questa funzionalità è supportata sulle app host per macOS, Windows e Linux.

Inoltre, stiamo anche pianificando di aggiungere una funzionalità divertente—[un movimento automatico del mouse per evitare che il computer target vada in standby](https://x.com/TechxArtisan/status/1825471186668847241). Dovremmo optare per la palla da ping-pong che rimbalza sullo schermo o per l'effetto screensaver classico del DVD? Votate e commentate il [tweet](https://x.com/TechxArtisan/status/1825470086800691459) 😃

## Design del Packaging, Etichettatura e Manuale

Abbiamo [sperimentato con vari mock-up e design di packaging](https://www.reddit.com/r/Openterface_miniKVM/comments/1elm4vq/almost_ready_to_finalize_our_package_design/) per trovare il giusto equilibrio tra diversi fattori chiave:

- Selezionare materiali abbastanza robusti da proteggere il prodotto e le sue parti durante la spedizione,
- Creare etichette informative che aiutino gli utenti a comprendere il prodotto a colpo d'occhio,
- Garantire la conformità alle normative,
- Rendere il packaging visivamente attraente,
- E essere eco-friendly riducendo al minimo l'uso di plastica ove possibile.

Inoltre, abbiamo apportato diversi miglioramenti alla vecchia borsa del toolkit, tra cui:

- Maggiore spazio di archiviazione,
- Una cerniera arancione elegante,
- Materiali esterni e interni migliorati,
- E una tasca a rete super elastica.

Abbiamo scelto questo materiale perché rappresenta il giusto equilibrio tra economicità, piacevolezza al tatto e durata sufficiente a proteggere gli oggetti all'interno. **Siamo sicuri che vi piacerà**.

![240823-5](../pic/240823-5.jpg)

Stiamo anche aggiornando le etichette sulla custodia in alluminio per renderle il più informative e visivamente attraenti possibile. Speriamo che questi miglioramenti migliorino la vostra esperienza utente e rendano più facile iniziare con Openterface.

![240823-6](../pic/240823-6.jpg)

Stiamo finalizzando il manuale di Openterface, che sarà disponibile in inglese, tedesco, francese, giapponese e cinese. Ci scusiamo se abbiamo tralasciato la vostra lingua—la nostra scatola non è grande come il TARDIS (la cabina della polizia del Doctor Who)! Ma faremo del nostro meglio per aggiungere altre traduzioni sul nostro sito web.

![240823-7](../pic/240823-7.jpg)

## Revisione della Lingua della Comunità

Ho usato ChatGPT per aiutarmi con le traduzioni, ma a volte può sbagliare con la formulazione e la scelta delle parole. Se non è troppo disturbo, apprezzerei molto qualsiasi aiuto nella revisione del contenuto in altre lingue, specialmente per i materiali stampati che stiamo per finalizzare. Ho aggiornato tutto il contenuto testuale per il packaging nella nostra cartella GitHub [product-printed-materials](https://github.com/TechxArtisanStudio/Openterface/tree/main/product-printed-materials), dove potete rivedere e inviare eventuali miglioramenti. Potete anche mandarmi un messaggio diretto. Grazie!

## Considerazioni Finali e Progressi in Corso

Ci scusiamo ancora per i ritardi e il cambiamento nell'ETA del nostro prodotto. Grazie per la vostra pazienza e per essere rimasti con noi—stiamo lavorando duramente per consegnarvelo il prima possibile! Vi aggiornerò immediatamente una volta che la nostra spedizione sarà organizzata. Altri aggiornamenti sono in arrivo, quindi unitevi alla nostra comunità Openterface e rimanete sintonizzati!

Saluti,

Billy Wang  
Product Manager  
Openterface Team | TechxArtisan