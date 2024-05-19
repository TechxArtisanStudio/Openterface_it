---
comments: true
tags:
  - File Transfer
  - mini-KVM
  - Switchable USB
  - BIOS
---

# Domande frequenti (FAQ)

Siamo assolutamente felici di averti qui! 🌟 Questa sezione è pensata per rispondere alle domande più frequenti su Openterface Mini-KVM, che il nostro team organizza periodicamente.

Analizziamo le domande più frequenti sull'Openterface Mini-KVM.

### Di base

#### Cos'è il mini-KVM Openterface?
Openterface Mini-KVM è un gadget KVM compatto, ricco di funzionalità e open source guidato da [una vivace comunità](https://it.openterface.com/community/). Ti consente di utilizzare il tuo laptop per visualizzare e controllare i dispositivi headless direttamente tramite una [connessione USB e HDMI](https://it.openterface.com/quick-start/#connection-procedure). Questa soluzione KVM-over-USB acquisisce video tramite HDMI e simula gli input di tastiera e mouse. È particolarmente utile per [un'ampia gamma di applicazioni](https://it.openterface.com/use-cases/), rivolgendosi agli appassionati di tecnologia che esplorano computer a scheda singola, nonché ai professionisti IT che risolvono i problemi dei dispositivi headless. Elimina la necessità di monitor, tastiere e mouse aggiuntivi, fornendo una soluzione conveniente in ambienti in cui le connessioni di rete sono inaffidabili o non disponibili.

#### Perché Openterface Mini-KVM fa la differenza?
Le nostre [funzionalità Openterface Mini-KVM](https://it.openterface.com/#product-features) un **design portatile, facilità plug-and-play, tempi di risposta rapidi e accesso diretto a livello di BIOS con USB commutabile Una porta**, tutta condivisa tra i dispositivi host e di destinazione. Garantisce un'esperienza di controllo affidabile e veloce tramite connessione HDMI e USB, libera dai vincoli della dipendenza dalla rete, rendendolo adatto a vari [scenari d'uso](https://it.openterface.com/use-cases/), in particolare per on- attività IT al volo e risoluzione dei problemi.

Inoltre, a differenza delle tradizionali console KVM che spesso hanno un prezzo elevato, il nostro mini-KVM è progettato per essere accessibile e **alla portata di tutti** per uno spettro più ampio di utenti, dai professionisti IT agli appassionati di tecnologia.

Ma la vera magia sta nel nostro impegno per lo **sviluppo open source** e il **coinvolgimento della comunità**. Abbracciando questi principi, stiamo costruendo un ecosistema vivace in cui gli utenti possono collaborare, contribuire e personalizzare il dispositivo per soddisfare le loro esigenze specifiche, promuovendo l’innovazione e spingendo i confini di ciò che è possibile.

#### Quali sono i casi d'uso per questo mini-KVM?
Consulta questa pagina: [Casi d'uso](https://it.openterface.com/use-cases/)

#### Quali computer host sono compatibili con Openterface Mini-KVM?
Per utilizzare questo mini-KVM, il computer host deve installare una di queste [applicazioni host](https://it.openterface.com/quick-start/#install-host-application) per supportare MacOS, Windows e Linux. Un'estensione basata sul Web e app Android sono attualmente in fase di sviluppo.

#### Quali dispositivi di destinazione sono compatibili con Openterface Mini-KVM?
Non è richiesta alcuna preinstallazione o configurazione sul dispositivo di destinazione. Finché il dispositivo di destinazione supporta le operazioni dell'interfaccia utente con uscita video (ad esempio, HDMI, VGA) e dispone di una porta USB per ricevere segnali HID (controllo tastiera e mouse emulati), può essere utilizzato. Pertanto, le piattaforme dei dispositivi di destinazione supportate includono Windows, MacOS, Linux, Android e iOS.

#### Sarà disponibile supporto tecnico e documentazione per Openterface Mini-KVM?
Un'ampia documentazione per Openterface Mini-KVM è disponibile sul nostro sito Web all'indirizzo [Openterface.com](https://www.openterface.com/). Aggiorniamo continuamente queste risorse per ottimizzare la tua esperienza con il dispositivo.
Per il supporto tecnico, ti invitiamo a unirti alla nostra [community](https://it.openterface.com/community/) per condividere domande e approfondimenti tra gli altri utenti e il nostro team di esperti. Se il problema rimane irrisolto, il nostro team è disponibile per fornire ulteriore assistenza tecnica. Puoi contattarci tramite questa email: info@techxartisan.com.

#### Perché il tuo repository open source è vuoto?
Ci scusiamo per il ritardo. Siamo stati eccezionalmente impegnati con vari compiti amministrativi legati alla nostra campagna di crowdfunding. Stai tranquillo, siamo pienamente impegnati nell'open source sia dell'hardware che del software per il nostro progetto. Vi preghiamo di essere pazienti con noi mentre finalizziamo i preparativi. Inizieremo a rilasciare i dettagli hardware e il codice in modo incrementale nelle prossime due o tre settimane, con l'obiettivo di avere tutto disponibile prima di iniziare le spedizioni ai nostri sostenitori.

Nel frattempo, puoi saperne di più sul nostro progetto qui: [Come funziona](https://it.openterface.com/how-it-works/). Questa risorsa fornisce informazioni dettagliate sulla nostra integrazione di acquisizione USB-HDMI, con il chip **CH9329** per il controllo di tastiera e mouse. Gli appassionati tecnici troveranno particolarmente interessanti i dettagli sul chip CH9329.

Inoltre, il nostro mini-KVM utilizza il chip **CH340**, che supporta due hub USB integrati sia per il lato host che per quello di destinazione. Il nostro mini-KVM è paragonabile a molte schede di acquisizione video attualmente sul mercato. Per ulteriori dettagli tecnici, fare riferimento a questa [scheda tecnica](https://docs.google.com/document/d/1UPw5RwGTp0AjKL3wOvQZUS1hp3IPMxkCujtqy5haeP0/edit?usp=sharing).

Grazie per la tua comprensione e pazienza!

### Software

#### Dove posso scaricare le applicazioni host?
Visita la nostra [pagina Installazione dell'applicazione host](https://it.openterface.com/quick-start/#install-host-application) per i download ufficiali. Poiché il nostro progetto è open source, potresti trovare versioni alternative di applicazioni host compatibili con il nostro mini-KVM sviluppato dalla comunità. Sebbene questi possano offrire funzionalità aggiuntive, assicurati di rivedere le loro pratiche di sicurezza e privacy. TechxArtisan Studio non può garantire la sicurezza delle applicazioni di terze parti. Grazie!

#### Quando sarà disponibile l'app host per Android?
Attualmente stiamo sviluppando l'app host per Android, ma ha una priorità inferiore rispetto alle versioni per i sistemi operativi tradizionali come macOS, Windows e Linux. Apprezziamo la tua pazienza e ti invitiamo a rimanere sintonizzato per gli aggiornamenti. Se sei interessato ad assistere allo sviluppo, sentiti libero di unirti alla nostra comunità o di contattarci via email!

#### Esiste un'app host che supporta ChromeOS?
Sì, ma è attualmente in fase di sviluppo. Stiamo progettando di creare un'estensione web progettata per supportare sia i browser Chrome che Firefox. Sebbene la sua priorità di sviluppo sia leggermente inferiore a quella dei sistemi operativi tradizionali come macOS, Windows e Linux, ci stiamo lavorando attivamente. Per favore, abbiate pazienza e rimanete sintonizzati per gli aggiornamenti! Se desideri contribuire al nostro sviluppo, vieni a trovarci nella community o inviaci un'e-mail!

#### Esiste un'app host che supporta i dispositivi mobili Apple?
Stiamo attualmente esplorando la compatibilità con i sistemi mobili di Apple, come iOS e iPadOS. A causa dei severi controlli di Apple, queste piattaforme potrebbero non supportare connessioni cablate con dispositivi di terze parti. Tuttavia, la situazione potrebbe cambiare o potrebbero esserci soluzioni alternative. Se hai spunti o suggerimenti, ti invitiamo a unirti alla nostra comunità per discuterne con noi. Ci impegniamo a migliorare la comodità del nostro dispositivo supportando il maggior numero di sistemi possibile. Se desideri contribuire al nostro sviluppo, vieni a trovarci nella community o inviaci un'e-mail!

#### Cosa succede se F11 non funziona sulle applicazioni macOS?
Su macOS, premendo F11 viene visualizzato il desktop macOS invece di passare il tasto F11 all'app e al computer di destinazione. Per risolvere questo problema, puoi separare F11 dalla funzione "Mostra desktop". Ecco come:

1. Vai su Impostazioni di sistema.
2. Seleziona Desktop e dock.
3. Scorri verso il basso e fai clic sul pulsante "Scorciatoie...".
4. Trova "Mostra desktop" e impostalo sul trattino (-) nella parte inferiore dell'elenco a discesa.
5. Questa modifica consentirà al tasto F11 di passare all'applicazione sul computer di destinazione.

### Porta USB commutabile e trasferimento file

#### Openterface Mini-KVM può supportare i trasferimenti di file?
Sì, Openterface Mini-KVM include una porta USB-A commutabile condivisa tra l'host e i dispositivi di destinazione. Con una chiavetta/disco USB collegata a questa porta, i file possono essere trasferiti tra host e destinazione seguendo questi passaggi:

1. Montare una chiavetta USB sull'host quando il piccolo interruttore nero è impostato sul lato della porta Type-C dell'host.
2. Copia i file su questa unità montata.
3. Dopo la copia, smontare l'unità senza scollegarla fisicamente.
4. Spostare il piccolo interruttore nero sull'altro lato. Questa azione commuta la connessione della porta USB-A alla destinazione.
5. Montare la chiavetta USB sul dispositivo di destinazione e copiare/spostare i file dall'unità, completando il processo di trasferimento dei file dall'host alla destinazione.

Questo metodo può essere utilizzato anche nella direzione opposta.

#### È possibile attivare/disattivare la porta USB-A commutabile a livello di software?
La progettazione attuale non supporta la commutazione a livello di software; per ora può essere capovolto solo fisicamente.

L'implementazione della commutazione a livello di software richiederebbe un nuovo design, incorporando un pulsante e un indicatore LED (verde/blu o acceso/spento) per indicare se la porta USB è impostata sulla modalità host o destinazione.

Inoltre, ciò richiederebbe l’integrazione di un chip aggiuntivo, con conseguente aumento dei costi di sviluppo sia dell’hardware che del software. Il design esistente rappresenta un compromesso, volto a bilanciare efficienza in termini di costi e funzionalità di base. Nonostante il potenziale aumento dei costi, siamo interessati a incorporare questa funzionalità in una versione futura per una migliore esperienza utente.

#### Perché USB 2.0 ma non USB 3.0 per questa porta USB commutabile?
USB 2.0 è pienamente in grado di gestire l'acquisizione video a 1080p@30Hz, trasmettere segnali HID (per tastiera e mouse) e gestire trasferimenti di file a velocità standard tra il computer di destinazione e quello host. Ciò rende il nostro prodotto una soluzione veloce, leggera e portatile, esattamente come progettato.

L'utilizzo di USB 3.0 renderebbe la progettazione del PCB molto più complessa e aumenterebbe significativamente i costi di produzione. Inoltre, sebbene USB 3.0 offra trasferimenti di file più rapidi, genera anche più calore, il che potrebbe ridurre la durata del dispositivo.

Stiamo considerando l'applicazione di USB 3.0 per la prossima versione, indirizzata a scenari di utilizzo più professionali e soluzioni KVM fisse.

### Tecnico

#### Openterface Mini-KVM è open source?
SÌ! Renderemo open source sia [hardware](/how-it-works/#explore-hardware-details) che [software](https://it.openterface.com/quick-start/#install-host-application). Abbi pazienza con noi ancora un po'; Dobbiamo sistemare alcune cose per l’apertura. Se sei interessato a [contribuire](/contribuire/), comunicacelo tramite questa email: info@techxartisan.com. Rimani sintonizzato!

#### Posso accedere alle impostazioni del BIOS di un dispositivo?
Sì, la connessione diretta di Openterface Mini-KVM consente l'accesso alle impostazioni del BIOS o del firmware di basso livello.

Questa funzionalità è in contrasto con le soluzioni KVM basate su software o le applicazioni di controllo remoto come TeamViewer e Zoom, che in genere non sono in grado di interagire a livello di BIOS.

#### Perché il controllo da tastiera non funziona a livello di BIOS su alcuni computer target meno recenti?
Sembra che il BIOS di alcuni vecchi computer non riesca a riconoscere l'hub USB del nostro dispositivo, il che può causare problemi con la tastiera e il mouse emulati che non funzionano correttamente a livello di BIOS. Stiamo tenendo d'occhio questo problema.

Abbiamo ricevuto una segnalazione secondo cui su uno specifico computer HP, HP Engage Flex Pro, la tastiera non funziona nella schermata del BIOS, sebbene funzioni normalmente una volta avviato il sistema operativo.

Se riscontri lo stesso problema, segnalacelo tramite un problema GitHub.

#### Come vengono trasmessi i video/dati tra i dispositivi?
I dati video vengono acquisiti tramite HDMI e trasmessi tramite USB 2.0 al computer host per la visualizzazione. La porta USB 2.0 commutabile consente la condivisione di unità USB o altri dispositivi USB tra la destinazione e l'host.

#### Come gestisce l'alimentazione Openterface Mini-KVM?
Il dispositivo non richiede un alimentatore esterno, poiché è progettato per essere alimentato tramite le connessioni USB Type-C dall'host, migliorandone la portabilità. Negli scenari in cui il dispositivo di destinazione è un microcomputer a basso consumo, come un Raspberry Pi, potrebbe essere alimentato tramite l'host tramite la porta USB commutabile del Mini-KVM. Tuttavia, questo non è raccomandato. Il metodo di funzionamento standard consiste nel disporre di un'alimentazione esterna per il dispositivo di destinazione.

#### Posso realizzare il fai da te con questo dispositivo?
Assolutamente! Siamo un gruppo di creatori appassionati che amano il fai-da-te e ci stiamo assicurando che questo progetto sia open source, sia hardware che software, e stiamo aggiornando i suoi documenti. Tecnicamente puoi costruirlo da zero. Stiamo anche pensando di pubblicare una guida su come realizzare fai-da-te una versione breadboard del nostro prodotto che sia compatibile anche con il nostro software.

La nostra comunità sta già sperimentando diverse versioni hardware. Dai un'occhiata ai post della nostra community per saperne di più o condividi le tue esperienze fai-da-te! Potrebbe davvero arricchire la nostra comunità. Inoltre, potresti scoprire che con alcune modifiche al codice, il nostro software potrebbe funzionare perfettamente con la tua configurazione creativa fai-da-te!

### Meccanismo di controllo

#### È prevista una versione con connettività wireless o Ethernet?
Attualmente non prevediamo di aggiungere connettività wireless o Ethernet ai nostri prodotti Openterface. Il nostro obiettivo è fornire un controllo veloce e stabile tramite USB direttamente sul tuo dispositivo di destinazione, quindi non devi preoccuparti di problemi di rete.

Ma ehi, siamo sempre aperti al feedback! Se ritieni che questa funzionalità sia davvero necessaria o se hai difficoltà a trovare una buona soluzione KVM-over-IP, inviaci un'e-mail: info@techxartisan.com. E ricorda, se decidiamo di espandere le nostre opzioni di connettività, la nostra [community](https://www.reddit.com/r/Openterface_miniKVM/) sarà la prima a saperlo.

#### In cosa differisce da altre soluzioni KVM come KVM tradizionali, KVM-over-IP e VNC, ecc.?
Sei curioso di sapere come si confronta Openterface Mini-KVM con altre soluzioni? Dai un'occhiata alla nostra pagina dettagliata [Confronto](https://it.openterface.com/comparison).

#### Funziona con un computer di destinazione che richiede PS/2?
No. Siamo consapevoli che ci sono ancora molti vecchi computer headless che richiedono tastiere e mouse PS/2. Per quanto ne sappiamo, non esiste ancora una soluzione elegante per convertire i segnali HID USB per dividerli in segnali di tastiera e mouse PS/2. Stiamo ancora indagando sulla questione e considerando come supportare PS/2 nelle future versioni del Mini-KVM. Se conosci qualche soluzione che potrebbe funzionare elegantemente con il nostro Mini-KVM, condividila con noi. Grazie!

#### Posso utilizzare più Mini-KVM per controllare più dispositivi di destinazione da un computer principale?
Si, puoi! Il nostro Mini-KVM può gestirlo tecnicamente, ma stiamo ancora modificando il codice ed eseguendo test. Ci stiamo impegnando per garantire che il nostro software possa collegare automaticamente la tastiera e il mouse alla sorgente video corretta quando si utilizza più di un Mini-KVM alla volta. Inoltre, stiamo migliorando l'interfaccia utente del software per renderlo migliore per questo tipo di configurazione. Resta sintonizzato sugli aggiornamenti della nostra community per quando implementeremo questa funzionalità!

#### È in grado di spegnere/accendere il computer a cui è collegato?
Il nostro dispositivo non supporta ATX (controllo di accensione/spegnimento per il computer di destinazione). Lo abbiamo progettato per essere portatile, rapido per la risoluzione dei problemi e stabile per il controllo locale. È pensato per essere utilizzato quando sei lì con il tuo laptop, gestendo uno o più computer di destinazione. Potremmo creare una versione pro in futuro con ATX e più funzionalità.

### Video correlato

#### Che dire della latenza e della risoluzione del video?
Il nostro dispositivo gestisce video 1080p con meno di 140 millisecondi di latenza, rendendo la tua esperienza di controllo fluida e senza interruzioni.

#### Openterface Mini-KVM è adatto per giochi di alta qualità?
Il design attuale si concentra sulle operazioni tecniche e IT, fornendo un controllo affidabile per la configurazione del dispositivo e la risoluzione dei problemi piuttosto che sui giochi ad alta risoluzione. Sebbene sia ottimo per molte attività, questo mini-KVM potrebbe non soddisfare le esigenze di visualizzazione dei giochi di alta qualità.

#### Sarà supportato il display di alta qualità nelle future versioni di Openterface Mini-KVM?
Sappiamo che molti di voi sono alla ricerca di funzionalità di visualizzazione di prim'ordine. Sebbene non sia il nostro obiettivo principale in questo momento, in base al tuo feedback, stiamo valutando di aggiungere funzionalità di visualizzazione migliorate in una versione professionale di Openterface Mini-KVM.

#### Perché Openterface Mini-KVM non trasmette video in streaming sull'IP locale?
Openterface Mini-KVM è stato progettato per garantire prestazioni affidabili e stabili tramite connessioni cablate, utilizzando HDMI e USB. Sebbene sia tecnicamente fattibile trasmettere video in streaming su una rete tramite le nostre applicazioni host, stiamo valutando di aggiungere in futuro una funzionalità VLC e persino VNC alle nostre applicazioni host.

#### Può funzionare con diverse uscite video come VGA, DVI, DisplayPort, ecc.??
Una specie di. Openterface Mini-KVM acquisisce video tramite una porta HDMI. Tuttavia, puoi utilizzare vari adattatori video come [da VGA a HDMI](https://it.openterface.com/use-cases/#streamlined-server-management), [da DVI a HDMI](https://openterface .com/use-cases/#unified-control-for-diverse-devices), [da miniHDMI a HDMI](https://it.openterface.com/use-cases/#simplified-setup-for-tech-enthusiasts) o DP-to-HDMI, per collegare diverse sorgenti video.

### Di più

#### Come posso contribuire a questo progetto?
Assolutamente! Ci sono molti modi per contribuire:

- Se ti piace programmare, aiutaci segnalando e correggendo bug.
- Bravo con le parole e la tecnologia? Potresti darci una mano con la nostra documentazione.
- E se sei un mago con le lingue, perché non aiuti a tradurre i nostri documenti per aiutare più persone a partecipare?
- Se il design è la tua passione, siamo sempre alla ricerca di nuove interpretazioni in termini di progettazione grafica, interfaccia utente delle app e per rendere il nostro dispositivo ancora più facile da usare.
- Hai voglia di contribuire a mantenere viva la nostra comunità? Potremmo usare le tue abilità anche lì.

Il tuo supporto e i tuoi [contributi](https://it.openterface.com/contributing/) sono ciò che fa crescere Openterface Mini-KVM. Grazie per aver preso parte alla nostra avventura! 🚀 Hai voglia di aiutare ma non trovi la soluzione perfetta? Basta mandarci una email!

#### Vuoi recensire il nostro pratico gadget?
Ehi, adoriamo fare rumore e spargere la voce sul nostro Mini-KVM! Se vieni dalla stampa o ti metti in mostra sui social media e hai voglia di provare il nostro prodotto, siamo tutti orecchi. Che tu sia interessato a recensioni dettagliate, video di unboxing o semplicemente a farci un saluto, siamo qui per questo e facciamo scalpore insieme! 🎉 Mandaci semplicemente un'e-mail ORA!

#### Quali sono le funzionalità avanzate previste per il mini-KVM?

Siamo entusiasti del potenziale del mini-KVM e ci impegniamo a documentare tutte le nostre idee attuali in una tabella di marcia completa. Questa tabella di marcia delineerà le funzionalità avanzate e gli sviluppi futuri che prevediamo per il dispositivo. Non vediamo l'ora di sviluppare queste funzionalità in collaborazione con la nostra comunità. Resta sintonizzato per ulteriori aggiornamenti mentre continuiamo a crescere e innovare insieme.

#### Come si integra il mini-KVM con l'intelligenza artificiale e quali sono le sue possibilità future?

Il nostro obiettivo finale è consentire all’intelligenza artificiale di controllare i computer target e Openterface gioca un ruolo cruciale in questa visione. Ispirati da progetti come [il computer autonomo di OthersideAI](https://github.com/OthersideAI/self-operating-computer), miriamo a far sì che il mini-KVM agisca come un'estensione delle "mani" (fornendo tastiera e controllo del mouse) e "occhi" (che catturano la sorgente video) per il computer host. Se il computer host è abbastanza potente, potrebbe potenzialmente emulare le capacità viste nel film del 2013 "Her". Sebbene questa sia un’aspirazione futura, mette in luce le entusiasmanti possibilità che vediamo per il mini-KVM.

--------

La tua curiosità e il tuo supporto alimentano i nostri progressi e vogliamo garantire che ciascuna delle tue domande trovi una risposta. Tieni presente che con il passare del tempo, il contenuto riportato sopra nelle nostre domande frequenti potrebbe diventare obsoleto. Se la tua domanda non è trattata in queste domande frequenti, controlla sempre il nostro sito web [openterface.com](https://it.openterface.com/) per le informazioni più aggiornate. Inoltre, non esitare a unirti alla nostra comunità entusiasta. Siamo attivi sul nostro subreddit su [/r/Openterface_miniKVM/](https://www.reddit.com/r/Openterface_miniKVM/) e sul nostro server Discord, [TechxArtisan](https://discord.gg/sFTJD6a3R8) , dove puoi porre domande, condividere idee o semplicemente fare una chiacchierata su tutto ciò che riguarda la tecnologia.

Inoltre, sentiti libero di contattare direttamente il nostro team dedicato inviando un'e-mail a info@techxartisan.com. Ci piace sentire la tua opinione e siamo sempre qui per aiutarti!