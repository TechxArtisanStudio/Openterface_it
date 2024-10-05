# Come Funziona

## Dettagli del Processo

- **Streaming dello Schermo**: Il mini-KVM cattura il flusso dello schermo dal computer di destinazione e lo visualizza sull'app del computer host. Questo permette agli utenti di visualizzare e gestire il sistema di destinazione direttamente dal loro computer host.
- **Controllo del Cursore e del Mouse**: Spostando il mouse sulla finestra dell'app sul computer host, gli utenti possono controllare il cursore sul dispositivo di destinazione come se stessero usando un VNC. Questa funzionalità consente di operare due sistemi contemporaneamente su un unico schermo.
- **Input da Tastiera**: Quando la finestra dell'app è attiva, qualsiasi pressione di tasti effettuata sulla tastiera del computer host viene trasmessa al dispositivo di destinazione, permettendo una digitazione e un inserimento di comandi senza interruzioni.
- **Conversione del Segnale HID**: Tutti gli input da tastiera e mouse all'interno dell'app vengono convertiti in segnali di controllo del Dispositivo di Interfaccia Umana (HID), che vengono poi inviati al computer di destinazione.
- **Sincronizzazione**: L'app assicura che lo schermo e il cursore del computer di destinazione siano sincronizzati con il display del computer host, facilitando un'esperienza utente unificata.

Puoi esplorare il Software [Open-source](/app) e l'Hardware [Open-source](/open-hardware) di Openterface per maggiori dettagli.