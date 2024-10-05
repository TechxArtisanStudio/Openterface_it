---
tags:
  - File Transfer
  - mini-KVM
  - Switchable USB
  - BIOS
  - USBKVM
---
# Domande Frequenti (FAQ)

Siamo felicissimi di averti qui! 🌟 Questa sezione è pensata per rispondere alle domande più frequenti sull'Openterface Mini-KVM, che il nostro team organizza periodicamente.

Esploriamo insieme le domande più comuni sull'Openterface Mini-KVM.

*Aggiornato: 20 Ago 2024*

### Base

#### Cos'è l'Openterface Mini-KVM?
L'Openterface Mini-KVM ti permette di utilizzare il tuo laptop o computer per visualizzare e controllare dispositivi senza schermo tramite una connessione USB e HDMI. Questa soluzione KVM-over-USB offre un controllo KVM leggero, veloce e senza interruzioni. Elimina la necessità di monitor, tastiere e mouse aggiuntivi, fornendo una soluzione comoda in luoghi dove le connessioni di rete sono inaffidabili o assenti. È particolarmente utile per [una vasta gamma di applicazioni](/use-cases/), specialmente per i professionisti del settore tecnologico che risolvono problemi su dispositivi senza schermo o computer a scheda singola. Con l'uso di un adattatore video, può supportare anche [VGA](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm#product-3914), Micro HDMI, DVI e altre sorgenti di input.

L'Openterface Mini-KVM è ==completamente open-source== sia in [hardware](/how-it-works/#explore-hardware-details) che in [software](/quick-start/#install-host-application), certificato da [OSHWA](https://certification.oshwa.org/cn000015.html) e supportato da [una comunità vivace](/community/).

#### Perché l'Openterface Mini-KVM fa la differenza?

Con varie soluzioni KVM disponibili, ecco perché l'Openterface Mini-KVM si distingue:

- Portabilità e Funzionalità
- Risoluzione dei problemi senza rete e al volo
- Prezzo conveniente
- Completamente Open Source e Comunità

Per saperne di più, visita la nostra pagina [Perché Openterface Mini-KVM](/why-openterface).

#### Quali sono i casi d'uso per questo mini-KVM?
L'Openterface Mini-KVM è il compagno perfetto per una vasta gamma di utenti e scenari:

- Professionisti IT che risolvono problemi sui server
- Tecnici che assistono bancomat, VLT e chioschi
- Sviluppatori che gestiscono dispositivi di edge computing
- Appassionati di tecnologia che sperimentano con computer a scheda singola
- Professionisti che richiedono operazioni locali sicure su reti segregate, come quelli che gestiscono asset crittografici
- Chiunque abbia bisogno di flussi di lavoro integrati frequentemente tra computer personali e di lavoro.

Consulta anche questa pagina: [Casi d'Uso](/use-cases/)

#### Quali computer host sono compatibili con l'Openterface Mini-KVM?
Per utilizzare questo mini-KVM, il computer host deve installare una delle [applicazioni host](/quick-start/#install-host-application) per supportare MacOS, Windows, Linux e Android.

#### Quali dispositivi target sono compatibili con l'Openterface Mini-KVM?
Non è richiesta alcuna pre-installazione o configurazione sul dispositivo target. Finché il dispositivo target supporta operazioni UI con uscita video (ad esempio, HDMI, VGA) e ha una porta USB per ricevere segnali di controllo emulati di tastiera e mouse (HID), può essere utilizzato. Pertanto, le piattaforme di dispositivi target supportate includono Windows, MacOS, Linux, Android e iOS.

#### Sarà disponibile supporto tecnico e documentazione per l'Openterface Mini-KVM?
Una documentazione estesa per l'Openterface Mini-KVM è disponibile sul nostro sito web [Openterface.com](/). Aggiorniamo continuamente queste risorse per ottimizzare la tua esperienza con il dispositivo.
Per il supporto tecnico, ti invitiamo a unirti alla nostra [comunità](/community/) per condividere domande e approfondimenti con altri utenti e il nostro team di esperti. Se il tuo problema non viene risolto, il nostro team è disponibile per fornire ulteriore assistenza tecnica. Puoi contattarci via email: info@techxartisan.com.

### Software

#### Dove posso scaricare le applicazioni host?
Visita la nostra pagina [Installa Applicazione Host](/quick-start/#install-host-application) per i download ufficiali.

??? warning "Privacy e Sicurezza: Sii cauto quando usi app host di terze parti"
    Poiché il nostro progetto è open source, potresti trovare versioni alternative delle applicazioni host compatibili con il nostro Mini-KVM sviluppate da altri. Sebbene queste possano offrire funzionalità aggiuntive, assicurati di esaminare le loro pratiche di sicurezza e privacy. **Il Team Openterface non può garantire né essere responsabile per la sicurezza delle applicazioni di terze parti**.

#### Esiste un'app host che supporta ChromeOS?
Sì, ma è attualmente in fase di sviluppo. Stiamo pianificando di creare un'estensione web progettata per supportare sia i browser Chrome che Firefox. Sebbene la sua priorità di sviluppo sia leggermente inferiore rispetto a quella per i sistemi operativi principali come macOS, Windows e Linux, stiamo lavorando attivamente su di essa. Ti chiediamo di avere pazienza e di rimanere aggiornato! Se sei interessato a contribuire al nostro sviluppo, unisciti a noi nella comunità o inviaci un'email!

#### Esiste un'app host che supporta i dispositivi mobili Apple?
Stiamo attualmente esplorando la compatibilità con i sistemi mobili di Apple, come iOS e iPadOS. A causa dei rigidi controlli di Apple, queste piattaforme potrebbero non supportare connessioni cablate con dispositivi di terze parti. Tuttavia, la situazione potrebbe cambiare o potrebbero esserci soluzioni alternative. Se hai suggerimenti o idee, ti invitiamo a unirti alla nostra comunità per discuterne con noi. Siamo impegnati a migliorare la comodità del nostro dispositivo supportando il maggior numero possibile di sistemi. Se sei interessato a contribuire al nostro sviluppo, unisciti a noi nella comunità o inviaci un'email!

#### Cosa fare se F11 non funziona nelle applicazioni macOS?
Su macOS, premendo F11 si mostra il desktop di macOS invece di passare il tasto F11 all'app e al computer target. Per risolvere questo problema, puoi disattivare F11 dalla funzione "Mostra Desktop". Ecco come fare:

1. Vai su Impostazioni di Sistema.
2. Seleziona Scrivania e Dock.
3. Scorri verso il basso e clicca sul pulsante "Scorciatoie…".
4. Trova "Mostra Desktop" e impostalo sul trattino (-) in fondo alla lista a discesa.
5. Questa modifica permetterà al tasto F11 di passare attraverso alla tua applicazione sul computer target.
### Porta USB Commutabile e Trasferimento di File

#### L'Openterface Mini-KVM supporta il trasferimento di file?
Sì, l'Openterface Mini-KVM include una porta USB-A commutabile condivisa tra i dispositivi host e target.

??? note "Come condividere una chiavetta USB tra i dispositivi Host e Target?"
    I file possono essere trasferiti tra l'host e il target seguendo questi passaggi:

    1. Monta una chiavetta USB sull'host quando il piccolo interruttore nero è impostato sul lato della porta Type-C dell'host.
    2. Copia i file su questa chiavetta montata.
    3. Dopo aver copiato, smonta la chiavetta senza scollegarla fisicamente.
    4. Sposta il piccolo interruttore nero sull'altro lato. Questa azione commuta la connessione della porta USB-A al target.
    5. Monta la chiavetta USB sul dispositivo target e copia/sposta i file dalla chiavetta, completando il processo di trasferimento dei file dall'host al target.

    Questo metodo può essere utilizzato anche nella direzione opposta.

??? note "Ricorda di espellere la chiavetta USB prima di commutare l'interruttore"
    Se la porta USB è utilizzata da una chiavetta USB, assicurati di espellere la chiavetta prima di commutare l'interruttore per trasferire l'uso della porta a un altro computer.

#### La porta USB-A commutabile può essere commutata a livello software?
Con l'aggiornamento hardware alla versione 1.9, sì! Stiamo attualmente lavorando per codificare questa funzionalità nella nostra app. Una volta implementata, supporterà sia la commutazione fisica che quella a livello software. Contatta il nostro team di sviluppo su Discord per saperne di più sui progressi.

#### Perché la porta USB commutabile è USB 2.0 e non USB 3.0?
USB 2.0 è perfettamente in grado di gestire la cattura video a 1080p@30Hz, trasmettere segnali HID (per tastiera e mouse) e gestire trasferimenti di file a velocità standard tra i computer target e host. Questo rende il nostro prodotto una soluzione veloce, leggera e portatile, esattamente come progettato.

L'uso di USB 3.0 renderebbe il design del PCB molto più complesso e aumenterebbe significativamente i costi di produzione. Inoltre, mentre USB 3.0 offre trasferimenti di file più veloci, genera anche più calore, il che potrebbe ridurre la durata del dispositivo.

Stiamo considerando l'applicazione di USB 3.0 per la prossima versione, mirata a scenari di utilizzo più professionali e soluzioni KVM stazionarie.

### Tecnico

#### L'Openterface Mini-KVM è open-source?
Sì! L'Openterface Mini-KVM è completamente open-source sia in [hardware](/how-it-works/#explore-hardware-details) che in [software](/quick-start/#install-host-application), certificato da [OSHWA](https://certification.oshwa.org/cn000015.html) e supportato da [una vivace comunità](/community/). Se sei interessato a [contribuire](/contributing/), contattaci all'indirizzo info@techxartisan.com. Resta sintonizzato!

#### Posso accedere alle impostazioni del BIOS di un dispositivo?
Sì, la connessione diretta dell'Openterface Mini-KVM consente l'accesso alle impostazioni del BIOS o del firmware a basso livello.

Questa funzionalità si distingue dalle soluzioni KVM basate su software o dalle applicazioni di controllo remoto come TeamViewer e VNC, che in genere non sono in grado di interagire a livello di BIOS.

#### Perché il controllo della tastiera non funziona a livello di BIOS per alcuni computer target più vecchi?
Sembra che alcuni vecchi computer non riconoscano l'hub USB del nostro dispositivo, il che può causare problemi con la nostra tastiera e mouse emulati che non funzionano correttamente a livello di BIOS. Stiamo monitorando questo problema.

Abbiamo ricevuto una segnalazione che su un computer HP specifico, l'HP Engage Flex Pro, la tastiera non funziona nella schermata del BIOS, anche se funziona normalmente una volta avviato il sistema operativo.

Se riscontri lo stesso problema, segnalacelo tramite un problema su GitHub.

#### Come vengono trasmessi i dati video tra i dispositivi?
I dati video vengono catturati tramite HDMI e trasmessi tramite USB 2.0 al computer host per la visualizzazione. La porta USB 2.0 commutabile consente la condivisione di unità USB o altri dispositivi USB tra il target e l'host.

#### Come gestisce l'alimentazione l'Openterface Mini-KVM?
Il dispositivo non richiede un'alimentazione esterna, poiché è progettato per essere alimentato tramite le connessioni USB Type-C dall'host, migliorando la sua portabilità. In scenari in cui il dispositivo target è un micro-computer a bassa potenza, come un Raspberry Pi, potrebbe essere alimentato tramite l'host tramite la porta USB commutabile del Mini-KVM. Tuttavia, questo non è raccomandato. Il metodo standard di funzionamento è avere un'alimentazione esterna per il dispositivo target.

#### Posso costruire questo dispositivo da solo?
Assolutamente! Siamo un gruppo di appassionati che amano il fai-da-te, e ci assicuriamo che questo progetto sia open source sia in hardware che in software. Puoi tecnicamente costruirlo da zero. Stiamo anche pensando di pubblicare una guida su come costruire una versione su breadboard del nostro prodotto che sarebbe anche compatibile con il nostro software.

La nostra comunità sta già sperimentando diverse versioni hardware. Dai un'occhiata ai post della nostra comunità per saperne di più o condividi le tue esperienze fai-da-te! Potrebbe davvero arricchire la nostra comunità. Inoltre, potresti scoprire che con alcune modifiche al codice, il nostro software potrebbe funzionare perfettamente con il tuo setup fai-da-te creativo!

### Meccanismo di Controllo

#### Ci sono piani per una versione con connettività wireless o Ethernet?
Attualmente, non stiamo pianificando di aggiungere connettività wireless o Ethernet ai nostri prodotti Openterface. Ci concentriamo nel fornire un controllo rapido e stabile tramite USB direttamente al tuo dispositivo target, così non devi preoccuparti di problemi di rete.

Ma ehi, siamo sempre aperti ai feedback! Se pensi che ci sia una reale necessità per questa funzionalità, o se stai lottando per trovare una buona soluzione KVM-over-IP, inviaci un'email: info@techxartisan.com. E ricorda, se decidiamo di espandere le nostre opzioni di connettività, la nostra [comunità](/reddit) sarà la prima a saperlo.

#### In cosa si differenzia questa soluzione KVM da altre soluzioni come i KVM tradizionali, KVM-over-IP e VNC, ecc.?
Curioso di sapere come l'Openterface Mini-KVM si confronta con altre soluzioni? Dai un'occhiata alla nostra dettagliata pagina di [Confronto](/comparison).

#### Funziona con un computer target che richiede PS/2?
No. Sappiamo che ci sono ancora molti vecchi computer senza testa che richiedono tastiere e mouse PS/2. Per quanto ne sappiamo, non esiste ancora una soluzione elegante per convertire i segnali USB HID in segnali separati per tastiera e mouse PS/2. Stiamo ancora indagando su questo problema e considerando come supportare PS/2 nelle future versioni del Mini-KVM. Se conosci soluzioni che potrebbero funzionare elegantemente con il nostro Mini-KVM, condividile con noi. Grazie!

#### Posso usare più Mini-KVM per controllare più dispositivi target da un unico computer master?
Sì, puoi! Il nostro Mini-KVM può tecnicamente gestirlo, ma stiamo ancora perfezionando il codice e conducendo test. Ci stiamo concentrando nel garantire che il nostro software possa collegare automaticamente la tastiera e il mouse con la giusta sorgente video quando usi più di un Mini-KVM alla volta. Inoltre, stiamo migliorando l'interfaccia utente del software per renderla migliore per questo tipo di configurazione. Resta sintonizzato per gli aggiornamenti della nostra comunità quando rilasceremo questa funzionalità!

#### È in grado di accendere/spegnere il computer a cui è collegato?
Il nostro dispositivo non supporta ATX (controllo di accensione/spegnimento per il computer target). Lo abbiamo progettato per essere portatile, rapido per la risoluzione dei problemi e stabile per il controllo locale. È davvero pensato per essere utilizzato quando sei lì con il tuo laptop, gestendo uno o più computer target. Potremmo costruire una versione pro in futuro con ATX e più funzionalità.

### Video

#### Che dire della latenza video e della risoluzione?
Il nostro dispositivo gestisce video a 1080p con meno di 140 millisecondi di latenza, rendendo la tua esperienza di controllo fluida e senza interruzioni.

#### L'Openterface Mini-KVM è adatto per il gaming di alta qualità?
Il design attuale si concentra su operazioni tecniche e IT, fornendo un controllo affidabile per la configurazione e la risoluzione dei problemi dei dispositivi piuttosto che per il gaming ad alta risoluzione. Sebbene sia ottimo per molte attività, questo mini-KVM potrebbe non soddisfare le esigenze di visualizzazione del gaming di alta qualità.

#### Ci sarà supporto per display di alta qualità nelle future versioni dell'Openterface Mini-KVM?
Sappiamo che molti di voi cercano funzionalità di visualizzazione di alta qualità. Anche se non è il nostro obiettivo principale in questo momento, basandoci sui vostri feedback, stiamo considerando di aggiungere capacità di visualizzazione migliorate in una versione professionale dell'Openterface Mini-KVM.

#### Perché l'Openterface Mini-KVM non trasmette video tramite IP locale?
L'Openterface Mini-KVM è stato progettato per garantire prestazioni affidabili e stabili tramite connessioni cablate, utilizzando HDMI e USB. Sebbene sia tecnicamente possibile trasmettere video su una rete tramite le nostre applicazioni host, stiamo considerando di aggiungere una funzionalità VLC e persino VNC alle nostre applicazioni host in futuro.

#### Può funzionare con diverse uscite video come VGA, DVI, DisplayPort, ecc.?
In un certo senso. L'Openterface Mini-KVM cattura video tramite una porta HDMI. Tuttavia, puoi utilizzare vari adattatori video come [VGA-to-HDMI](/use-cases/#streamlined-server-management), [DVI-to-HDMI](/use-cases/#unified-control-for-diverse-devices), [miniHDMI-to-HDMI](/use-cases/#simplified-setup-for-tech-enthusiasts) o DP-to-HDMI, per collegare diverse sorgenti video.

### Risoluzione dei Problemi

#### Perché l'Openterface Mini-KVM a volte presenta problemi quando è collegato tramite un hub USB?

Quando un hub USB viene utilizzato sul lato target, l'Openterface Mini-KVM potrebbe diventare instabile. Questo perché l'Openterface Mini-KVM si basa principalmente sulla porta target per l'alimentazione. Se l'hub USB collegato al target è completamente carico, potrebbe causare una significativa caduta di tensione, portando a instabilità nell'Openterface Mini-KVM a causa di un'alimentazione insufficiente. Se hai bisogno di utilizzare un hub USB sul lato target, considera l'uso di un hub USB alimentato con un'alimentazione esterna per garantire un funzionamento stabile.

#### Cosa devo fare se l'Openterface Mini-KVM diventa instabile, ad esempio quando l'app non visualizza lo schermo del target o il mouse e la tastiera non rispondono?

Se riscontri instabilità con l'Openterface Mini-KVM, come l'app che non visualizza lo schermo del target o l'incapacità di controllare il mouse e la tastiera, prova a scollegare tutti i cavi. Dopo un breve momento, ricollega i cavi e riprova. Questo semplice reset spesso risolve i problemi di connessione.

### Altro

#### Come posso contribuire a questo progetto?
Assolutamente! Ci sono molti modi in cui puoi contribuire:

- Se ti piace programmare, aiutaci segnalando e risolvendo bug.
- Sei bravo con le parole e la tecnologia? Potresti dare una mano con la nostra documentazione.
- E se sei un mago delle lingue, perché non aiutare a tradurre i nostri documenti per aiutare più persone a partecipare?
- Se il design è la tua passione, siamo sempre alla ricerca di nuove idee per il design grafico, l'interfaccia dell'app e per rendere il nostro dispositivo ancora più user-friendly.
- Ti piace mantenere viva la comunità? Potremmo usare le tue abilità anche lì.

Il tuo supporto e [contributi](/contributing/) sono ciò che mantiene l'Openterface Mini-KVM in crescita. Grazie per far parte della nostra avventura! 🚀 Hai voglia di aiutare ma non vedi un ruolo perfetto? Inviaci semplicemente un'email!

#### Vuoi recensire il nostro pratico gadget?
Ehi, ci piace fare rumore e diffondere la voce sul nostro Mini-KVM! Se sei della stampa o sei attivo sui social media e vuoi provare il nostro prodotto, siamo tutti orecchi. Che tu sia interessato a recensioni dettagliate, video di unboxing o semplicemente a darci una menzione, siamo qui per questo e facciamo onde insieme! 🎉 Inviaci un'email ORA!

#### Quali sono le funzionalità avanzate pianificate per il mini-KVM?

Siamo entusiasti del potenziale del mini-KVM e ci impegniamo a documentare tutte le nostre idee attuali in una roadmap completa. Questa roadmap delineerà le funzionalità avanzate e gli sviluppi futuri che immaginiamo per il dispositivo. Non vediamo l'ora di sviluppare queste funzionalità in collaborazione con la nostra comunità. Resta sintonizzato per ulteriori aggiornamenti mentre continuiamo a crescere e innovare insieme.

#### Come si integra il mini-KVM con l'IA e quali sono le sue possibilità future?

Il nostro obiettivo finale è consentire all'IA di controllare i computer target, e l'Openterface gioca un ruolo cruciale in questa visione. Ispirati da progetti come [OthersideAI's self-operating computer](https://github.com/OthersideAI/self-operating-computer), miriamo a far sì che il mini-KVM agisca come un'estensione delle "mani" (fornendo controllo di tastiera e mouse) e degli "occhi" (catturando la sorgente video) per il computer host. Se il computer host è abbastanza potente, potrebbe potenzialmente emulare le capacità viste nel film del 2013 "Her". Anche se questo è un obiettivo futuro, evidenzia le possibilità entusiasmanti che vediamo per il mini-KVM.

#### Quali accessori sono disponibili per l'Openterface Mini-KVM?
Offriamo una gamma di accessori per migliorare la tua esperienza con l'Openterface Mini-KVM. Dai un'occhiata alla nostra sezione [Accessori](accessories.md) per maggiori dettagli sui prodotti disponibili, incluso il nostro cavo convertitore VGA a HDMI.

--------

La tua curiosità e il tuo supporto alimentano i nostri progressi, e vogliamo assicurarci che ogni tua domanda trovi una risposta. Tieni presente che con il passare del tempo, il contenuto sopra nelle nostre FAQ potrebbe diventare obsoleto. Se la tua domanda non è trattata in queste FAQ, controlla sempre il nostro sito web [openterface.com](/) per le informazioni più aggiornate. Inoltre, non esitare a unirti alla nostra entusiasta comunità. Siamo attivi sul nostro Subreddit su [/r/Openterface_miniKVM/](/reddit) e sul nostro server Discord, [TechxArtisan](/discord), dove puoi fare domande, condividere idee o semplicemente chiacchierare di tutto ciò che riguarda la tecnologia.

Inoltre, sentiti libero di contattare direttamente il nostro team dedicato inviando un'email a info@techxartisan.com. Ci piace sentirti e siamo sempre qui per aiutarti!