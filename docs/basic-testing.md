---
comments: true
---

# Test di Operazione Base

<iframe width="560" height="315" src="https://www.youtube.com/embed/m7OpUem0zqY?si=3kHl1kmk6VQRnPu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ERzpGtRvP2o?si=2DQrHqk-GhzvvL24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Mouse 🖱

- Modalità Assoluta & Relativa
    - Latenza del movimento, per garantire un controllo fluido e reattivo.
    - Accuratezza della mappatura della posizione del mouse
    - Test del click (singolo click, doppi click)
    - Test del trascinamento

## Tastiera ⌨️
- Test di mappatura della tastiera, specialmente per vari simboli speciali
- Test di reattività della digitazione
- Test di pressione multi-tasto
- Test dei tasti funzione
- Test con layout di tastiera di diversi paesi per garantire un abbinamento coerente

!!! suggerimento

    Puoi utilizzare uno strumento di test della tastiera online sia sul computer host che su quello target per verificare se le loro sequenze di tasti sono sincronizzate.

## Trasferimento di Testo 📝
- Funzionalità di Trasferimento Testo: Verifica che l'applicazione host possa trasferire con successo testo dal computer host al dispositivo target utilizzando i [codici ASCII](https://theasciicode.com.ar/).
- Integrità del Contenuto: Assicurati che il contenuto del testo trasferito dall'host al dispositivo target rimanga intatto e venga riprodotto accuratamente.
- Gestione dei Caratteri Speciali: Testa la funzionalità di trasferimento testo con vari caratteri ASCII, inclusi simboli, segni di punteggiatura e caratteri non alfanumerici, per garantire una corretta gestione e riproduzione sul dispositivo target.
- Test di Lunghezza del Testo: Testa la funzionalità di trasferimento testo con testi di varia lunghezza, da stringhe brevi a paragrafi più lunghi, per verificare che possa gestire diverse dimensioni di testo senza problemi.
- Gestione degli Errori: Testa scenari di errore, come perdita di connessione o interruzione durante il trasferimento del testo, per garantire che l'applicazione host gestisca queste situazioni con grazia e fornisca feedback appropriati all'utente.
- Test delle Prestazioni: Valuta le prestazioni della funzionalità di trasferimento testo in diverse condizioni, inclusi computer più vecchi o più lenti, per identificare eventuali problemi con la ricezione errata dei segnali di input HID e garantire un'operazione fluida.
- Test dell'Interfaccia Utente: Assicurati che l'interfaccia utente dell'applicazione host fornisca controlli intuitivi e feedback per avviare e monitorare le operazioni di trasferimento testo, rendendola facile da comprendere e utilizzare per gli utenti.

!!! nota
    La funzionalità di trasferimento testo è progettata per emulare il comportamento di digitazione per riprodurre il contenuto del testo sul computer target. Non supporta l'integrazione con la clipboard, pertanto, non può trasferire contenuti non testuali, come immagini. Questa funzionalità supporta esclusivamente il trasferimento di testo basato su codici ASCII. Pertanto, non supporta lingue che non si basano su codici ASCII, come caratteri cinesi, giapponesi, coreani, ecc. Inoltre, non è consigliato trasferire troppo testo in una sola volta.

## Accesso a Livello BIOS ⚙️
- Se l'app può accedere al BIOS di diversi dispositivi target.

## Suono 🔊
- Se il suono del computer target può essere riprodotto normalmente sul computer di controllo

## Video 🎥
- Se l'app può visualizzare correttamente il computer target con diverse risoluzioni e frequenze

## Collegamento & Scollegamento 🔌
- Sequenza di connessione del dispositivo raccomandata
- Disrupting the sequence according to the above recommendations, testing different scenarios to ensure normal operation

## Porta USB Commutabile & Interruttore di Scambio 🔄
- Test dell'Interruttore di Scambio: Testa l'interruttore di scambio in diversi scenari per garantire che funzioni in modo affidabile ed effettivamente commuti tra le connessioni del computer host e target.
- Compatibilità della Porta: Verifica che la porta USB-A 2.0 supporti la connessione con entrambi i computer host e target come previsto per vari dispositivi USB, come una chiavetta USB o una webcam.

!!! nota

    Solo un computer può utilizzare la porta alla volta. Se la porta è utilizzata da una chiavetta USB, assicurati di espellere la chiavetta USB prima di commutare l'interruttore per utilizzare la porta su un altro computer.

!!! avviso
    La porta USB può fornire 5V di alimentazione a un dispositivo USB esterno, ma ha una capacità di alimentazione molto limitata, circa 10W. Tieni presente che ciò potrebbe non essere sufficiente per alimentare alcuni dispositivi esterni, come un Jetson Nano che esegue compiti intensivi per la GPU.

## Diversi Dispositivi Target 💻🎯
- Test di diversi dispositivi target, come diverse versioni di macOS, Windows, Linux, Android, iOS, ecc.

## Diversi Dispositivi Host 💻👑
- Test del nostro software di test interno attualmente rilasciato, come le versioni supportate per macOS, Windows o Linux
- Testare se diverse versioni del sistema operativo possono utilizzare l'app host corrispondente

# Test Aggiuntivi
- Test dell'Interfaccia Utente: Verifica che l'interfaccia utente delle applicazioni host sia intuitiva e user-friendly, fornendo facile accesso alle funzionalità e alle impostazioni essenziali.
- Test della Gestione degli Errori: Testa i meccanismi di gestione degli errori per garantire un recupero senza problemi da situazioni inaspettate, come interruzioni di connessione o malfunzionamenti del dispositivo.
- Revisione della Documentazione: Rivedi i manuali utente e la documentazione per garantire che siano completi, accurati e facili da comprendere, fornendo istruzioni chiare per la configurazione, l'operazione e la risoluzione dei problemi.
- Test delle Prestazioni: Valuta le prestazioni del dispositivo mini-KVM in diversi scenari di carico di lavoro per garantire che soddisfi gli standard di prestazione richiesti e non degradi le prestazioni del sistema durante il funzionamento.
- Test di Stabilità: Conduci test di stress e test di lunga durata per valutare la stabilità e l'affidabilità del dispositivo mini-KVM durante l'uso continuo.
