---
description: "Guida completa ai controlli di base di Openterface Mini-KVM: modalità mouse, input da tastiera, accesso al BIOS, supporto audio/video e commutazione USB. Compatibile con più sistemi operativi e dispositivi, supporta l'input video fino a 4K@30Hz."
keywords: "Controlli Mini-KVM, modalità di controllo del mouse, input da tastiera, accesso al BIOS, trasmissione audio, visualizzazione video, commutazione USB, compatibilità dispositivi, configurazione KVM, controllo hardware, supporto 4K, segnali HID, controllo dispositivo target, software host, input HDMI"
---

# Controllo di Base per le App Host

![use-case-pc-angled-view](https://assets.openterface.com/images/product/use-case-pc-angled-view.webp){ width=600 }

## 💻 Compatibilità

- **Software Host**: Installa la nostra [app host](/app) per macOS, Windows e Linux per controllare i tuoi dispositivi target. Assicurati che il tuo sistema host sia compatibile con la versione corrispondente dell'app.
- **Compatibilità Dispositivo Target**: Non è richiesta alcuna pre-installazione o configurazione sul dispositivo target. Finché il dispositivo target supporta operazioni UI con output video (ad es. HDMI, VGA) e ha una porta USB per ricevere segnali di controllo emulati da tastiera e mouse (HID), può essere utilizzato. Le piattaforme target supportate includono Windows, macOS, Linux, Android e iOS.

## 🖱 Controllo del Mouse

- **Modalità Assoluta**: Il cursore del mouse del target è mappato direttamente su una posizione specifica sullo schermo dell'host tramite la nostra app. Ciò significa che ovunque tu muova il mouse dell'host all'interno della nostra app, il mouse del target seguirà lo stesso movimento. Nota che potrebbe esserci un leggero ritardo nei movimenti del cursore. Puoi scegliere di nascondere o visualizzare il cursore del mouse dell'host mentre è sulla nostra app.

- **Modalità Relativa**: Il movimento del mouse del target è relativo alla posizione corrente del mouse dell'host. Ciò significa che muovendo il mouse dell'host si sposterà il cursore del target di una certa distanza nella stessa direzione, senza un punto di inizio o fine fisso. Puoi uscire da questa modalità relativa utilizzando una scorciatoia specifica.

## ⌨️ Tastiera

Quando l'app è focalizzata, puoi digitare qualsiasi cosa direttamente e questi tasti verranno trasmessi al computer del target.

## ⚙️ Accesso a Livello BIOS

- **Accesso al BIOS**: Usa la nostra app per accedere al BIOS dei tuoi dispositivi target. Questo ti permette di controllare e configurare le impostazioni direttamente dal BIOS.

??? tip "Tasti per accedere al BIOS per diverse schede madri"

    - F2: Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1: Lenovo
    - Del: ASUS, Acer, Gigabyte, MSI
    - F10: HP
    - Pulsante Assist: Sony
    - Tasto Opzione (⌥): Apple (per accedere al gestore di avvio)

## 🔊 Suono

- **Trasmissione Audio**: L'audio del computer target viene trasmesso tramite la porta di ingresso HDMI del mini-KVM. Quando usi la nostra app, il suono del computer target verrà riprodotto attraverso il computer host, assicurandoti di sentire tutto senza interruzioni.

## 🎥 Video

- **Visualizzazione Video**: La nostra app ti consente di visualizzare lo schermo del computer target senza interruzioni. Supporta risoluzioni video fino a 1920x1080 a 30Hz per la visualizzazione all'interno dell'app. L'input video massimo supportato è fino a 3840x2160 a 30Hz tramite HDMI. Inoltre, con l'uso di un adattatore, può anche accogliere VGA, Micro HDMI, DVI e altre fonti di input video.

## 🔄 Porta USB Commutabile

- **Utilizzo della Porta USB**: Il mini-KVM dispone di una porta USB-A 2.0 commutabile che può essere alternata tra i computer host e target, ma non entrambi contemporaneamente.
- **Metodi di Commutazione**: 
    - Commutatore Hardware: Un interruttore fisico sul dispositivo
    - Commutatore Software: Un pulsante nell'applicazione host
- **Logica di Commutazione**: Per informazioni più dettagliate sulla logica di funzionamento della porta USB commutabile, inclusa l'interazione tra commutatori hardware e software, configurazione iniziale, stati operativi e transizioni di stato, si prega di fare riferimento alla [documentazione della commutazione USB](/usb-switch).

!!! warning "Importante"
    - Ricorda di espellere qualsiasi unità USB collegata prima di cambiare la connessione della porta.
    - La porta USB ha limitazioni di potenza. Non collegare dispositivi che richiedono molta potenza, poiché ciò potrebbe causare un funzionamento instabile o danni potenziali.
