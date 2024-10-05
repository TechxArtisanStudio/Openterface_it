# Controllo di Base

![use-case-pc-angled-view](images/product/use-case-pc-angled-view.jpg)

## 💻 Compatibilità

- **Software Host**: Installa la nostra [app host](/app) per macOS, Windows e Linux per controllare i tuoi dispositivi target. Assicurati che il tuo sistema host sia compatibile con la versione corrispondente dell'app.
- **Compatibilità del Dispositivo Target**: Non è necessaria alcuna pre-installazione o configurazione sul dispositivo target. Finché il dispositivo target supporta operazioni UI con uscita video (ad esempio, HDMI, VGA) e ha una porta USB per ricevere segnali di controllo emulati di tastiera e mouse (HID), può essere utilizzato. Le piattaforme target supportate includono Windows, macOS, Linux, Android e iOS.

## 🖱 Controllo del Mouse

- **Modalità Assoluta**: Il cursore del mouse del target è mappato direttamente su una posizione specifica sullo schermo dell'host tramite la nostra app. Questo significa che ovunque tu muova il mouse dell'host all'interno della nostra app, il mouse del target seguirà lo stesso movimento. Nota che potrebbe esserci un leggero ritardo nei movimenti del cursore. Puoi scegliere di nascondere o visualizzare il cursore del mouse dell'host mentre è sulla nostra app.

- **Modalità Relativa**: Il movimento del mouse del target è relativo alla posizione attuale del mouse dell'host. Questo significa che muovendo il mouse dell'host, il cursore del target si sposterà di una certa distanza nella stessa direzione, senza un punto di inizio o fine fisso. Puoi uscire da questa modalità relativa utilizzando una scorciatoia specifica.

## ⌨️ Tastiera

Quando l'app è attiva, puoi digitare qualsiasi cosa direttamente, e questi tasti verranno inviati al computer target.

## ⚙️ Accesso al BIOS

- **Accesso al BIOS**: Usa la nostra app per accedere al BIOS dei tuoi dispositivi target. Questo ti permette di controllare e configurare le impostazioni direttamente dal BIOS.

??? tip "Tasti per accedere al BIOS per diverse schede madri"

    - F2: Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1: Lenovo
    - Del: ASUS, Acer, Gigabyte, MSI
    - F10: HP
    - Assist button: Sony
    - Tasto Option (⌥): Apple (per accedere al gestore di avvio)

## 🔊 Audio

- **Trasmissione Audio**: L'audio del computer target viene trasmesso tramite la porta di ingresso HDMI del mini-KVM. Quando usi la nostra app, il suono del computer target verrà riprodotto attraverso il computer host, assicurandoti di sentire tutto senza problemi.

## 🎥 Video

- **Visualizzazione Video**: La nostra app ti permette di visualizzare lo schermo del computer target senza interruzioni. Supporta risoluzioni video fino a 1920x1080 a 30Hz per la visualizzazione all'interno dell'app. L'ingresso video massimo supportato è fino a 3840x2160 a 30Hz tramite HDMI. Inoltre, con l'uso di un adattatore, può anche supportare VGA, Micro HDMI, DVI e altre sorgenti di ingresso video.

## 🔄 Porta USB Commutabile

- **Utilizzo della Porta USB**: Il mini-KVM dispone di una porta USB-A 2.0 commutabile che può essere alternata tra i computer host e target, ma non entrambi contemporaneamente.
- **Metodi di Commutazione**: 
    - Interruttore Hardware: Un toggle fisico sul dispositivo
    - Interruttore Software: Un pulsante nell'applicazione host
- **Logica di Commutazione**: Per informazioni più dettagliate sulla logica di funzionamento della porta USB commutabile, inclusa l'interazione tra interruttori hardware e software, la configurazione iniziale, gli stati operativi e le transizioni di stato, consulta la [documentazione sulla commutazione USB](usb-switch.md).

!!! warning "Importante"
    - Ricorda di espellere qualsiasi unità USB collegata prima di commutare la connessione della porta.
    - La porta USB ha limitazioni di potenza. Non collegare dispositivi che richiedono molta energia, poiché ciò potrebbe causare operazioni instabili o potenziali danni.
