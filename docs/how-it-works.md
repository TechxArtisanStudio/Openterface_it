# Come Funziona

## Analisi del Processo

- **Streaming dello Schermo**: Il mini-KVM cattura lo streaming dello schermo dal computer target e lo visualizza sull'app del computer host. Questo consente agli utenti di visualizzare e gestire il sistema target direttamente dalla loro macchina host.
- **Controllo del Cursore e del Mouse**: Spostando il mouse sulla finestra dell'app sul computer host, gli utenti possono controllare il cursore sul dispositivo target come se stessero utilizzando un VNC. Questa funzionalità consente di operare due sistemi contemporaneamente su un unico schermo.
- **Input della Tastiera**: Quando la finestra dell'app è attiva, qualsiasi pressione dei tasti effettuata sulla tastiera del computer host viene trasmessa al dispositivo target, consentendo una digitazione e un inserimento di comandi senza interruzioni.
- **Conversione del Segnale HID**: Tutti gli input di tastiera e mouse all'interno dell'app vengono convertiti in segnali di controllo Human Interface Device (HID), che vengono poi inviati al computer target.
- **Sincronizzazione**: L'app assicura che lo schermo e il cursore del computer target siano sincronizzati con il display del computer host, facilitando un'esperienza utente unificata.

## Esplora i Dettagli dell'Hardware

- [Openterface_Mini-KVM_Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware): Esplora il nostro design hardware completo, gli schemi e i componenti.

![openterface-mini-kvm-product-with-PCB](/images/product/openterface-mini-kvm-product-with-PCB.jpg)