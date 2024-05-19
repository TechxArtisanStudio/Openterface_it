---
comments: true
tags:
  - File Transfer
  - mini-KVM
  - Switchable USB
  - BIOS
---

# Domande Frequenti (FAQs)

Siamo assolutamente felici di averti qui! 🌟 Questa sezione è progettata per rispondere alle domande frequenti sull'Openterface Mini-KVM, che il nostro team organizza periodicamente.

Esaminiamo le domande più frequenti sull'Openterface Mini-KVM.

### Base

#### Cos'è l'Openterface Mini-KVM?
L'Openterface Mini-KVM è un dispositivo KVM compatto, ricco di funzionalità e open-source, guidato da [una comunità vivace](https://openterface.com/community/). Ti permette di utilizzare il tuo laptop per visualizzare e controllare dispositivi senza testa direttamente tramite una [connessione USB e HDMI](https://openterface.com/quick-start/#connection-procedure). Questa soluzione KVM-over-USB cattura video via HDMI e simula input da tastiera e mouse. È particolarmente utile per [una vasta gamma di applicazioni](https://openterface.com/use-cases/), rivolgendosi agli appassionati di tecnologia che esplorano computer a scheda singola, nonché ai professionisti IT che risolvono problemi di dispositivi senza testa. Elimina la necessità di monitor, tastiere e mouse aggiuntivi, fornendo una soluzione conveniente in ambienti in cui le connessioni di rete sono inaffidabili o non disponibili.

#### Perché l'Openterface Mini-KVM fa la differenza?
Il nostro [Openterface Mini-KVM](https://openterface.com/#product-features) offre un **design portatile, facilità di utilizzo plug-and-play, tempi di risposta rapidi e accesso diretto al livello BIOS con una porta USB-A commutabile**, tutto condiviso tra dispositivi host e target. Garantisce un'esperienza di controllo affidabile e veloce tramite connessione HDMI e USB, libera dai vincoli della dipendenza dalla rete, rendendolo adatto a vari [scenari d'uso](https://openterface.com/use-cases/), specialmente per compiti IT estemporanei e risoluzione dei problemi.

Inoltre, a differenza delle tradizionali console KVM che spesso hanno un prezzo elevato, il nostro mini-KVM è progettato per essere accessibile e **conveniente** a un ampio spettro di utenti, dai professionisti IT agli appassionati di tecnologia.

Ma la vera magia risiede nel nostro impegno per lo **sviluppo open-source** e **il coinvolgimento della comunità**. Abbracciando questi principi, stiamo costruendo un ecosistema vivace in cui gli utenti possono collaborare, contribuire e personalizzare il dispositivo per soddisfare le loro esigenze uniche, promuovendo l'innovazione e spingendo i limiti di ciò che è possibile.

#### Quali sono i casi d'uso per questo mini-KVM?
Si prega di visitare questa pagina: [Casi d'Uso](https://openterface.com/use-cases/)

#### Quali computer host sono compatibili con l'Openterface Mini-KVM?
Per utilizzare questo mini-KVM, il computer host deve installare una delle seguenti [applicazioni host](https://openterface.com/quick-start/#install-host-application) per supportare MacOS, Windows e Linux. Attualmente sono in sviluppo un'estensione web e app Android.

#### Quali dispositivi target sono compatibili con l'Openterface Mini-KVM?
Non è richiesta alcuna pre-installazione o configurazione sul dispositivo target. Finché il dispositivo target supporta operazioni UI con uscita video (ad es., HDMI, VGA) e ha una porta USB per ricevere segnali di controllo da tastiera e mouse emulati (HID), può essere utilizzato. Pertanto, i dispositivi target supportati includono Windows, MacOS, Linux, Android e iOS.

#### Saranno disponibili supporto tecnico e documentazione per l'Openterface Mini-KVM?
Documentazione estesa per l'Openterface Mini-KVM è disponibile sul nostro sito web [Openterface.com](https://www.openterface.com/). Aggiorniamo continuamente queste risorse per ottimizzare la tua esperienza con il dispositivo.  
Per il supporto tecnico, ti invitiamo a unirti alla nostra [comunità](https://openterface.com/community/) per condividere domande e approfondimenti tra altri utenti e il nostro team di esperti. Se il tuo problema non viene risolto, il nostro team è disponibile per fornire ulteriore assistenza tecnica. Puoi contattarci via email: info@techxartisan.com.

#### Perché il vostro repository open-source è vuoto?
Ci scusiamo per il ritardo. Siamo stati eccezionalmente occupati con varie attività amministrative relative alla nostra campagna di crowdfunding. Ti assicuriamo che siamo pienamente impegnati a rendere open-source sia l'hardware che il software del nostro progetto. Ti preghiamo di avere pazienza mentre finalizziamo le preparazioni. Inizieremo a rilasciare i dettagli dell'hardware e il codice gradualmente nelle prossime due o tre settimane, con l'obiettivo di avere tutto disponibile prima dell'inizio delle spedizioni ai nostri sostenitori.

Nel frattempo, puoi saperne di più sul nostro progetto qui: [Come Funziona](https://openterface.com/how-it-works/). Questa risorsa fornisce informazioni sulla nostra integrazione di cattura USB-HDMI, caratterizzata dal chip **CH9329** per il controllo della tastiera e del mouse. Gli appassionati di tecnologia potrebbero trovare particolarmente interessanti i dettagli sul chip CH9329.

Inoltre, il nostro mini-KVM utilizza il chip **CH340**, che supporta due hub USB integrati sia per il lato host che per quello target. Il nostro mini-KVM è paragonabile a molte schede di acquisizione video attualmente sul mercato. Per ulteriori dettagli tecnici, fare riferimento a questa [scheda tecnica](https://docs.google.com/document/d/1UPw5RwGTp0AjKL3wOvQZUS1hp3IPMxkCujtqy5haeP0/edit?usp=sharing).

Grazie per la tua comprensione e pazienza!

### Software

#### Dove posso scaricare le applicazioni host?
Visita la nostra [pagina di Installazione delle Applicazioni Host](https://openterface.com/quick-start/#install-host-application) per i download ufficiali. Poiché il nostro progetto è open source, potresti trovare versioni alternative delle applicazioni host compatibili con il nostro mini-KVM sviluppate dalla comunità. Sebbene queste possano offrire funzionalità aggiuntive, assicurati di esaminare le loro pratiche di sicurezza e privacy. TechxArtisan Studio non può garantire la sicurezza delle applicazioni di terze parti. Grazie!

#### Quando sarà disponibile l'app host per Android?
Stiamo attualmente sviluppando l'app host per Android, ma è una priorità inferiore rispetto alle versioni per i sistemi operativi più diffusi come macOS, Windows e Linux. Apprezziamo la tua pazienza e ti invitiamo a rimanere aggiornato per ulteriori novità. Se sei interessato ad assistere con lo sviluppo, non esitare a unirti alla nostra comunità o a contattarci via email!

#### Esiste un'app host che supporta ChromeOS?
Sì, ma è attualmente in fase di sviluppo. Stiamo pianificando la creazione di un'estensione web progettata per supportare sia i browser Chrome che Firefox. Sebbene la sua priorità di sviluppo sia leggermente inferiore rispetto a quella per i sistemi operativi principali come macOS, Windows e Linux, ci stiamo lavorando attivamente. Ti preghiamo di avere pazienza e di rimanere aggiornato per ulteriori novità! Se sei interessato ad aiutare con lo sviluppo, unisciti alla nostra comunità o inviaci un'email!

#### Esiste un'app host che supporta i dispositivi mobili Apple?
Stiamo attualmente esplorando la compatibilità con i sistemi mobili Apple, come iOS e iPadOS. A causa dei rigidi controlli di Apple, queste piattaforme potrebbero non supportare connessioni cablate con dispositivi di terze parti. Tuttavia, la situazione potrebbe cambiare o potrebbero esserci potenziali soluzioni alternative. Se hai intuizioni o suggerimenti, ti invitiamo a unirti alla nostra comunità per discuterne con noi. Siamo impegnati a migliorare la comodità del nostro dispositivo supportando il maggior numero possibile di sistemi. Se sei interessato ad aiutare con lo sviluppo, unisciti alla nostra comunità o inviaci un'email!

#### Cosa fare se F11 non funziona nelle applicazioni macOS?
Su macOS, premere F11 mostra il desktop di macOS invece di passare il tasto F11 all'applicazione e al computer di destinazione. Per risolvere questo problema, puoi rimuovere il collegamento F11 dalla funzione "Mostra Desktop". Ecco come:

1. Vai a Impostazioni di Sistema.
2. Seleziona Desktop e Dock.
3. Scorri verso il basso e clicca sul pulsante "Scorciatoie...".
4. Trova "Mostra Desktop" e impostalo sul trattino (-) in fondo alla lista a discesa.
5. Questa modifica consentirà al tasto F11 di passare attraverso alla tua applicazione sul computer di destinazione.

### Porta USB Commutabile e Trasferimento File

#### L'Openterface Mini-KVM supporta il trasferimento di file?
Sì, l'Openterface Mini-KVM include una porta USB-A commutabile condivisa tra i dispositivi host e target. Con una chiavetta/disk USB inserita in questa porta, i file possono essere trasferiti tra host e target seguendo questi passaggi:

1. Monta una chiavetta USB sull'host quando il piccolo interruttore nero è impostato sul lato della porta Type-C dell'host.
2. Copia i file su questa unità montata.
3. Dopo aver copiato, smonta l'unità senza scollegarla fisicamente.
4. Sposta il piccolo interruttore nero sull'altro lato. Questa azione commuta la connessione della porta USB-A al target.
5. Monta la chiavetta USB sul dispositivo target e copia/sposta i file dall'unità, completando il processo di trasferimento dei file dall'host al target.

Questo metodo può essere utilizzato anche nella direzione opposta.

#### La porta USB-A commutabile può essere attivata a livello software?
Il design attuale non supporta l'attivazione a livello software; può essere attivato solo fisicamente per ora.

Implementare l'attivazione a livello software richiederebbe un nuovo design, che includerebbe un pulsante e un indicatore LED (verde/blu o acceso/spento) per indicare se la porta USB è impostata in modalità host o target.

Inoltre, ciò richiederebbe l'integrazione di un chip aggiuntivo, portando a un aumento dei costi sia per l'hardware che per lo sviluppo software. Il design esistente rappresenta un compromesso, volto a bilanciare l'efficienza dei costi e le funzionalità di base. Nonostante il potenziale aumento dei costi, siamo interessati a incorporare questa funzione in una versione futura per migliorare l'esperienza dell'utente.

#### Perché USB 2.0 e non USB 3.0 per questa porta USB commutabile?
USB 2.0 è perfettamente in grado di gestire la cattura video a 1080p@30Hz, trasmettere segnali HID (per tastiera e mouse) e gestire trasferimenti di file a velocità standard tra i computer target e host. Questo rende il nostro prodotto una soluzione veloce, leggera e portatile, esattamente come progettato.

L'uso di USB 3.0 renderebbe il design del PCB molto più complesso e aumenterebbe significativamente i costi di produzione. Inoltre, sebbene USB 3.0 offra trasferimenti di file più veloci, genera anche più calore, il che potrebbe ridurre la durata del dispositivo.

Stiamo considerando l'applicazione di USB 3.0 per la prossima versione, mirando a scenari di utilizzo più professionali e soluzioni KVM stazionarie.

### Tecnico

#### L'Openterface Mini-KVM è open source?
Sì! Renderemo open source sia l'[hardware](/how-it-works/#explore-hardware-details) che il [software](https://openterface.com/quick-start/#install-host-application). Abbiamo solo bisogno di un po' di tempo per sistemare alcune cose prima di aprirle. Se sei interessato a [contribuire](/contributing/), faccelo sapere via email: info@techxartisan.com. Rimani aggiornato!

#### Posso accedere alle impostazioni del BIOS di un dispositivo?
Sì, la connessione diretta dell'Openterface Mini-KVM consente l'accesso alle impostazioni BIOS o firmware a basso livello.

Questa funzione si distingue dalle soluzioni KVM basate su software o dalle applicazioni di controllo remoto come TeamViewer e Zoom, che normalmente non sono in grado di interagire a livello di BIOS.

#### Perché il controllo della tastiera non funziona a livello di BIOS per alcuni vecchi computer target?
Sembra che il BIOS di alcuni vecchi computer non riesca a riconoscere l'hub USB del nostro dispositivo, il che può causare problemi con la nostra tastiera e il nostro mouse emulati che non funzionano correttamente a livello di BIOS. Stiamo monitorando attentamente questo problema.

Abbiamo ricevuto una segnalazione secondo cui su un specifico computer HP, l'HP Engage Flex Pro, la tastiera non funziona nella schermata del BIOS, sebbene funzioni normalmente una volta che il sistema operativo si avvia.

Se riscontri lo stesso problema, ti preghiamo di segnalarcelo tramite un problema su GitHub.

#### Come vengono trasmessi video/dati tra i dispositivi?
I dati video vengono catturati tramite HDMI e trasmessi tramite USB 2.0 al computer host per la visualizzazione. La porta USB 2.0 commutabile consente la condivisione di unità USB o altri dispositivi USB tra il target e l'host.

#### Come gestisce l'alimentazione l'Openterface Mini-KVM?
Il dispositivo non richiede un'alimentazione esterna, poiché è progettato per essere alimentato tramite le connessioni USB Type-C dall'host, migliorando la sua portabilità. In scenari in cui il dispositivo target è un micro-computer a bassa potenza, come un Raspberry Pi, potrebbe essere alimentato tramite l'host tramite la porta USB commutabile del Mini-KVM. Tuttavia, ciò non è consigliato. Il metodo di funzionamento standard prevede un'alimentazione esterna per il dispositivo target.

### Posso creare questo dispositivo da solo?

Assolutamente! Siamo un gruppo di appassionati maker che amano il fai-da-te e stiamo garantendo che questo progetto sia open source, sia per l'hardware che per il software, aggiornando la sua documentazione. Puoi tecnicamente costruirlo da zero. Stiamo anche pensando di pubblicare una guida su come creare una versione su breadboard del nostro prodotto che sia anche compatibile con il nostro software.

La nostra comunità sta già sperimentando con diverse versioni hardware. Dai un'occhiata ai post della nostra comunità per saperne di più o condividi le tue esperienze fai-da-te! Potrebbe davvero arricchire la nostra comunità. Inoltre, potresti scoprire che con qualche modifica al codice, il nostro software potrebbe funzionare perfettamente con il tuo setup fai-da-te creativo!

### Meccanismo di Controllo

#### Ci sono piani per una versione con connettività wireless o Ethernet?

Attualmente, non stiamo pianificando di aggiungere connettività wireless o Ethernet ai nostri prodotti Openterface. Siamo concentrati nel fornire un controllo veloce e stabile tramite USB direttamente al tuo dispositivo di destinazione, così non devi preoccuparti dei problemi di rete.

Ma ehi, siamo sempre aperti ai feedback! Se pensi che ci sia un reale bisogno di questa funzionalità, o se hai difficoltà a trovare una buona soluzione KVM-over-IP, scrivici una email: info@techxartisan.com. E ricorda, se decidiamo di espandere le nostre opzioni di connettività, la nostra [comunità](https://www.reddit.com/r/Openterface_miniKVM/) sarà la prima a saperlo.

#### In cosa differisce questo dai classici KVM, KVM-over-IP e VNC, ecc.?

Curioso di sapere come si confronta l'Openterface Mini-KVM con altre soluzioni? Dai un'occhiata alla nostra dettagliata pagina di [Confronto](https://openterface.com/comparison).

#### Funziona con un computer di destinazione che richiede PS/2?

No. Sappiamo che ci sono ancora molti vecchi computer senza monitor che richiedono tastiere e mouse PS/2. Per quanto ne sappiamo, non esiste ancora una soluzione elegante per convertire i segnali USB HID in segnali separati per tastiera e mouse PS/2. Stiamo ancora indagando su questa questione e considerando come supportare il PS/2 nelle future versioni del Mini-KVM. Se conosci qualche soluzione che potrebbe funzionare elegantemente con il nostro Mini-KVM, condividila con noi. Grazie!

#### Posso usare più Mini-KVM per controllare più dispositivi di destinazione da un unico computer master?

Sì, puoi! Il nostro Mini-KVM può tecnicamente gestire questo, ma stiamo ancora perfezionando il codice ed eseguendo test. Ci stiamo concentrando sull'assicurare che il nostro software possa collegare automaticamente la tastiera e il mouse con la giusta sorgente video quando usi più di un Mini-KVM alla volta. Inoltre, stiamo migliorando l'interfaccia utente del software per renderlo migliore per questo tipo di setup. Resta sintonizzato sugli aggiornamenti della nostra comunità per sapere quando implementeremo questa funzionalità!

#### È capace di accendere/spegnere il computer a cui è collegato?

Il nostro dispositivo non supporta ATX (controllo accensione/spegnimento per il computer di destinazione). L'abbiamo progettato per essere portatile, rapido per la risoluzione dei problemi e stabile per il controllo locale. È davvero pensato per essere utilizzato quando sei lì con il tuo laptop, gestendo uno o più computer di destinazione. Potremmo costruire una versione pro in futuro con ATX e più funzionalità.

### Video Correlati

#### Che dire della latenza video e della risoluzione?

Il nostro dispositivo gestisce video a 1080p con meno di 140 millisecondi di latenza, rendendo l'esperienza di controllo fluida e senza intoppi.

#### L'Openterface Mini-KVM è adatto per il gaming di alta qualità?

Il design attuale si concentra sulle operazioni tecniche e IT, fornendo un controllo affidabile per la configurazione dei dispositivi e la risoluzione dei problemi piuttosto che per il gaming ad alta risoluzione. Sebbene sia ottimo per molti compiti, questo mini-KVM potrebbe non soddisfare le esigenze di visualizzazione per il gaming di alta qualità.

#### Ci sarà supporto per display di alta qualità nelle future versioni dell'Openterface Mini-KVM?

Sappiamo che molti di voi cercano funzionalità di visualizzazione di alto livello. Sebbene non sia il nostro obiettivo principale in questo momento, basandoci sui vostri feedback, stiamo considerando di aggiungere capacità di visualizzazione migliorate in una versione professionale dell'Openterface Mini-KVM.

#### Perché l'Openterface Mini-KVM non trasmette video tramite IP locale?

L'Openterface Mini-KVM è stato progettato per garantire prestazioni affidabili e stabili tramite connessioni cablate, utilizzando HDMI e USB. Sebbene sia tecnicamente possibile trasmettere video su una rete tramite le nostre applicazioni host, stiamo considerando di aggiungere una funzione VLC e persino VNC alle nostre applicazioni host in futuro.

#### Può funzionare con diverse uscite video come VGA, DVI, DisplayPort, ecc.?

In un certo senso. L'Openterface Mini-KVM cattura video tramite una porta HDMI. Tuttavia, puoi usare vari adattatori video come [VGA-to-HDMI](https://openterface.com/use-cases/#streamlined-server-management), [DVI-to-HDMI](https://openterface.com/use-cases/#unified-control-for-diverse-devices), [miniHDMI-to-HDMI](https://openterface.com/use-cases/#simplified-setup-for-tech-enthusiasts) o DP-to-HDMI, per collegare diverse sorgenti video.

### Maggiori Informazioni

#### Come posso contribuire a questo progetto?
Assolutamente! Ci sono tanti modi in cui puoi dare una mano:

- Se ti piace programmare, aiutaci segnalando e risolvendo i bug.
- Sei bravo con le parole e la tecnologia? Potresti aiutarci con la documentazione.
- E se sei un mago delle lingue, perché non aiutarci a tradurre i nostri documenti per far salire a bordo più persone?
- Se il design è la tua passione, siamo sempre alla ricerca di nuove idee per il design grafico, l'interfaccia utente dell'app e per rendere il nostro dispositivo ancora più user-friendly.
- Ti piacerebbe aiutare a mantenere attiva la nostra comunità? Abbiamo bisogno delle tue capacità anche lì.

Il tuo supporto e le tue [contribuzioni](https://openterface.com/contributing/) sono ciò che mantiene Openterface Mini-KVM in crescita. Grazie per far parte della nostra avventura! 🚀 Hai voglia di aiutare ma non trovi il ruolo perfetto? Mandaci un'email!

#### Vuoi recensire il nostro pratico gadget?
Ehi, ci piace fare rumore e diffondere la parola sul nostro Mini-KVM! Se fai parte della stampa o sei un influencer sui social media e ti piacerebbe provare il nostro prodotto, siamo tutti orecchi. Che tu sia appassionato di recensioni dettagliate, video di unboxing, o semplicemente voglia farci un shoutout, siamo qui per questo e facciamo onde insieme! 🎉 Mandaci un'email SUBITO!

#### Quali sono le funzionalità avanzate previste per il mini-KVM?
Siamo entusiasti del potenziale del mini-KVM e siamo impegnati a documentare tutte le nostre idee attuali in una roadmap completa. Questa roadmap delineerà funzionalità avanzate e sviluppi futuri che immaginiamo per il dispositivo. Non vediamo l'ora di sviluppare queste funzionalità in collaborazione con la nostra comunità. Resta sintonizzato per ulteriori aggiornamenti mentre continuiamo a crescere e innovare insieme.

#### Come si integra il mini-KVM con l'IA e quali sono le sue future possibilità?
Il nostro obiettivo finale è permettere all'IA di controllare i computer target, e Openterface gioca un ruolo cruciale in questa visione. Ispirati da progetti come [OthersideAI's self-operating computer](https://github.com/OthersideAI/self-operating-computer), puntiamo a far sì che il mini-KVM funzioni come un'estensione delle "mani" (fornendo il controllo di tastiera e mouse) e degli "occhi" (catturando la sorgente video) per il computer host. Se il computer host è abbastanza potente, potrebbe potenzialmente emulare le capacità viste nel film del 2013 "Her". Anche se questa è un'aspirazione futura, mette in evidenza le possibilità eccitanti che vediamo per il mini-KVM.

--------

La tua curiosità e il tuo supporto alimentano il nostro progresso, e vogliamo assicurarci che ogni tua domanda trovi una risposta. Tieni presente che con il passare del tempo, il contenuto sopra riportato nelle nostre FAQ potrebbe diventare obsoleto. Se la tua domanda non è coperta in queste FAQ, controlla sempre il nostro sito web [openterface.com](https://openterface.com/) per le informazioni più aggiornate. Inoltre, non esitare a unirti alla nostra entusiasta comunità. Siamo attivi sul nostro Subreddit su [/r/Openterface_miniKVM/](https://www.reddit.com/r/Openterface_miniKVM/) e sul nostro server Discord, [TechxArtisan](https://discord.gg/sFTJD6a3R8), dove puoi fare domande, condividere idee o semplicemente chiacchierare di tecnologia.

Inoltre, sentiti libero di contattare direttamente il nostro team dedicato inviando un'email a info@techxartisan.com. Ci piace sentirti e siamo sempre qui per aiutarti!


<section class="dialogue-section-white" id="dialogues-section">
    <div class="container">
    <div class="callout-button-container">
        <div class="dialogue-bubble" id="op-bubble">
         <img src="/images/op-avatar.jpg" alt="Avatar" class="avatar" draggable="false">
         <p>Domanda?🤔</p>
         <a href="https://www.reddit.com/r/Openterface_miniKVM/" class="md-button md-button--primary" id="join-waitlist-button">Chiedi su Subreddit</a>
        </div>
      <div class="dialogue-bubble" id="op-bubble">
        <img src="/images/op-avatar.jpg" alt="Avatar" class="avatar" draggable="false">
        <p>Leggi di più 📖</p>
        <a href="/quick-start" class="md-button md-button--primary" id="join-waitlist-button">Documenti</a>
      </div>
      <div class="dialogue-bubble" id="op-bubble">
        <img src="/images/op-avatar.jpg" alt="Avatar" class="avatar" draggable="false">
        <p>Sii il nostro sostenitore! ❤️</p>
        <a href="https://www.crowdsupply.com/techxartisan/openterface-mini-kvm" class="md-button md-button--primary" id="join-waitlist-button">Vai a Crowd Supply</a>
      </div>
    </div>
</section>