---
date: 2024-05-09
authors:
  - CNXSOFT
categories:
  - Tech Review
---

# Recensione del Prodotto da CNX Software: Openterface Mini-KVM - Un Dispositivo KVM-over-USB Economico (Crowdfunding)

Questo post è stato riformulato basandosi sull'articolo originale dello scrittore [Openterface Mini-KVM è un dispositivo KVM-over-USB economico (Crowdfunding), 9 maggio 2024 di Jean-Luc Aufranc (CNXSOFT)](https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/).

<!-- more -->

Il **Openterface Mini-KVM** è un dispositivo hardware KVM-over-USB compatto e open-source con ingressi HDMI e audio che si collega al computer host tramite una porta USB-C.

Nel corso degli anni abbiamo visto diverse soluzioni KVM-over-IP economiche basate su computer a scheda singola. Tuttavia, il **Openterface Mini-KVM** si distingue come un dispositivo KVM-over-USB più economico, plug-and-play e indipendente dalla rete, che stabilisce una connessione diretta HDMI e USB tra il computer host e il dispositivo target. Supporta molte delle stesse funzionalità delle soluzioni KVM-over-IP, ad eccezione di alcune funzionalità come il supporto ATX presente nel [PiKVM v4 Plus](https://docs.pikvm.org/v4/) o nel [Pi-Cast KVM](https://www.cnx-software.com/2023/12/24/pi-cast-portable-kvm-switch-raspberry-pi-cm4/) con una scheda di espansione che consente di spegnere il dispositivo target dal dispositivo host.

![Openinterface-Mini-KVM-1](https://www.cnx-software.com/wp-content/uploads/2024/05/Openinterface-Mini-KVM-1.jpg)

## Specifiche Mini-KVM (Modello LIG03D01):
- **Metodo di Controllo**: KVM-over-USB
- **Cattura Video**: Fino a 1920×1080 @ 30 Hz con meno di 140ms di latenza tramite HDMI o VGA (quest'ultimo richiede un cavo aggiuntivo VGA a HDMI)
- **Cattura Audio**: Tramite HDMI
- **Trasferimento Testo**: Il testo può essere inviato dall'host al dispositivo target utilizzando l'uscita della tastiera emulata, utile per copiare nomi utente, password o frammenti di codice
- **Porta USB**: Porta USB 2.0 Type-A commutabile all'host o al target per il trasferimento di file da/a un'unità USB o per condividere altri dispositivi USB
- **Accesso BIOS**: Accesso diretto al BIOS del dispositivo target per aggiornamenti firmware e gestione dell'avvio
- **Alimentazione**: Tramite USB-C dal computer host
- **Dimensioni**: 61 x 53 x 13.5 mm
- **Peso**: 48 grammi

![KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp](https://www.cnx-software.com/wp-content/uploads/2024/05/KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp)

L'applicazione host sarà presto disponibile per **macOS, Windows, Linux e Android**. Puoi seguire lo sviluppo di ciascuna applicazione e accedere ai file di progettazione hardware su [GitHub](https://github.com/TechxArtisanStudio) nei seguenti repository (attualmente vuoti):
- **Openterface_MacOS** – Applicazioni host per MacOS
- **Openterface_QT** – Applicazioni host per Windows e Linux
- **Openterface_Android** – Applicazioni host per supporto Android
- **Openterface_Mini-KVM_Hardware** – Progettazione hardware, schemi e componenti

L'azienda (TECHxARTISAN) afferma che la soluzione KVM-over-USB può essere utile per:
- Professionisti IT che risolvono problemi sui server
- Tecnici che riparano ATM, VLT e chioschi
- Sviluppatori che gestiscono dispositivi di edge computing
- Appassionati di tecnologia che sperimentano con computer a scheda singola
- Professionisti che richiedono operazioni locali sicure in segregazione di rete, come quelli che gestiscono asset crittografici
- Chiunque necessiti di flussi di lavoro integrati frequentemente tra computer personali e di lavoro

Sembra particolarmente utile per accedere all'hardware senza testa con un laptop senza bisogno di schermi, tastiere e mouse aggiuntivi.

![Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB](https://www.cnx-software.com/wp-content/uploads/2024/05/Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB.webp)

Il kit Mini-KVM è considerevolmente più economico del dispositivo StarTech Crash Cart NOTECONS02 KVM-over-USB, che supporta l'ingresso VGA e [viene venduto per circa $400](https://amzn.to/4boOmXw), così come le soluzioni KVM-over-IP, sebbene non sia esattamente [l'opzione più economica](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/) in questa tabella comparativa...

L'azienda ha appena lanciato il Mini-KVM [su Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm) con un obiettivo di $12.000 che è già stato superato. Sono disponibili due ricompense principali:

- **$79**: Openterface Mini-KVM con Guida Rapida
- **$99**: Openterface Mini-KVM Toolkit con gli stessi articoli della ricompensa da $79, più un cavo HDMI maschio-maschio da 30cm, un cavo USB-C maschio a USB-A maschio con un adattatore USB-A femmina a USB-C maschio, un cavo USB-C maschio-maschio da 1,5m e una borsa per il toolkit.

Inoltre, c'è un convertitore VGA + audio a HDMI, che potrebbe essere utile per i sistemi server più vecchi o i sistemi che hanno solo una porta VGA. La spedizione aggiunge $8 per gli Stati Uniti e $18 per il resto del mondo. I sostenitori dovrebbero aspettarsi che le loro ricompense vengano spedite entro la fine di settembre 2024, se tutto va secondo i piani. Maggiori dettagli possono anche essere trovati sul [sito del progetto](http://openterface.com/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6OWaVIRXCaw?si=KpzsXY0ET8KnG8qT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
