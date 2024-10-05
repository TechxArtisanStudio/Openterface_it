# Test & Sviluppo

## 💻 Compatibilità

- **Supporto OS**: Verifica che le diverse versioni del sistema operativo possano utilizzare l'app host corrispondente.
- **Test delle Prestazioni**: Valuta le prestazioni su vari sistemi host.
- **Test delle Versioni OS**: Assicura la compatibilità tra le diverse versioni del sistema operativo.
- **Problemi Specifici del Dispositivo**: Identifica e risolvi i problemi specifici di determinati dispositivi o versioni del sistema operativo.

## 🖱 Controllo del Mouse

<div class="annotate" markdown>

- **Latenza del Movimento**: Assicura un controllo fluido e reattivo.
- **Pulsanti del Mouse**: Testa i pulsanti sinistro, destro e centrale; clicca e trascina.
- **Scorrimento**: Valuta la velocità e la direzione dello scorrimento.
- **Precisione** del posizionamento del mouse in modalità *Assoluta* (1)
- **Sensibilità** del movimento del mouse in modalità *Relativa* (2)

</div>

1. Assicurati che la posizione del mouse del target sia mappata accuratamente a quella dell'host. Questo può essere influenzato dalla risoluzione del target e dalle dimensioni della finestra dell'app.
2. Assicurati che il movimento del mouse soddisfi le aspettative intuitive.

## ⌨️ Tastiera

<div class="annotate" markdown>

- **Reattività della Digitazione**: Assicurati che soddisfi le aspettative intuitive.
- **Mappatura Completa della Tastiera**: Specialmente per vari simboli speciali.
- **Tasti Modificatori**: Tasti come `Ctrl`, `Shift`, `Alt` e `Cmd`, o `Win`.
- **Combinazioni di Tasti**: Supporta tecnicamente fino a 8 tasti modificatori e 6 tasti aggiuntivi premuti contemporaneamente.
- **Tasti Multimediali e ACPI**: Tasti come `Volume-`, `Volume+`, `Mute`, `Wake-up`, `Sleep` e `Power`.
- **Layout della Tastiera**: Assicura un abbinamento coerente per vari layout. (1)

!!! tip

    - **Tester della Tastiera**: Puoi utilizzare uno strumento di test della tastiera online sia sul computer host che su quello target per verificare se le loro battiture sono sincronizzate.
    - **Chip CH9329**: Controlla [i dettagli](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/CH9329) per comprendere i limiti del controllo tastiera/mouse nell'Openterface Mini-KVM.

</div>

1. ⌨️ 🌏 I layout della tastiera variano a livello globale tra regioni e lingue, con tipi popolari come QWERTY, AZERTY, QWERTZ e Dvorak.

## ⚙️ Accesso a Livello BIOS

- **Entrata nel BIOS**: Testa l'ingresso nel BIOS durante la sequenza di avvio.
- **Funzionalità**: Assicura il pieno controllo della tastiera e del mouse all'interno del BIOS.
- **Compatibilità**: Verifica l'accesso al BIOS su diverse marche e modelli di schede madri.

## 🔊 Audio

- **Qualità del Suono**: Valuta la chiarezza e la sincronizzazione della riproduzione audio.
- **Latenza**: Misura eventuali ritardi tra le azioni e il suono corrispondente.
- **Compatibilità**: Testa vari output audio su diversi sistemi operativi.

## 🎥 Video

- **Supporto alla Risoluzione**: Testa varie risoluzioni dello schermo e rapporti di aspetto.
- **Frequenza dei Fotogrammi**: Valuta le prestazioni a diverse frequenze di aggiornamento.
- **Qualità del Display**: Controlla eventuali artefatti visivi o problemi di latenza.

## 🔄 Porta USB Commutabile

- **Test dell'Interruttore**: Testa l'interruttore in vari scenari per verificarne l'affidabilità.
- **Compatibilità della Porta**: Assicura che la porta USB-A 2.0 supporti vari dispositivi USB come chiavette e webcam.
- **Limitazioni di Potenza**: Conferma la capacità di alimentazione della porta e la sua adeguatezza per diversi dispositivi.

## 🔌 Collegamento e Scollegamento

- **Test di Connessione**: Testa scenari con diverse sequenze di connessione e disconnessione.
- **Gestione degli Errori**: Assicura che il dispositivo riconosca e si riprenda da connessioni improprie.
- **Stabilità**: Verifica la stabilità quando i dispositivi vengono collegati e scollegati ripetutamente.

## 📝 Trasferimento di Testo

- **Test di Funzionalità**: Verifica che l'app host possa trasferire correttamente il testo dal computer host al dispositivo target utilizzando i codici ASCII.
- **Integrità del Contenuto**: Assicura che il testo trasferito dal computer host al dispositivo target rimanga intatto e venga riprodotto accuratamente.
- **Gestione dei Caratteri Speciali**: Testa la funzione di trasferimento del testo con vari caratteri ASCII per garantire una corretta gestione e riproduzione sul dispositivo target.
- **Test della Lunghezza del Testo**: Verifica la funzione di trasferimento del testo con testi di diverse lunghezze per assicurarti che possa gestire diverse dimensioni di testo senza problemi.
- **Gestione degli Errori**: Testa scenari di errore, come la perdita di connessione o l'interruzione durante il trasferimento del testo, per assicurarti che l'app host gestisca queste situazioni in modo adeguato e fornisca un feedback appropriato all'utente.
- **Test delle Prestazioni**: Valuta le prestazioni della funzione di trasferimento del testo in varie condizioni, inclusi computer più vecchi o più lenti, per identificare eventuali problemi con la ricezione errata dei segnali di input HID e garantire un funzionamento fluido.
- **Test dell'Interfaccia Utente**: Assicura che l'interfaccia utente dell'app host fornisca controlli intuitivi e feedback per avviare e monitorare le operazioni di trasferimento del testo, rendendo facile per gli utenti comprendere e utilizzare questa funzione in modo efficace.

## Aggiuntivo

- **Gestione degli Errori**: Testa i meccanismi di gestione degli errori per un recupero adeguato dalle interruzioni.
- **Prestazioni**: Valuta le prestazioni del mini-KVM in vari scenari di carico di lavoro.
- **Stabilità**: Conduci test di stress per la stabilità e l'affidabilità a lungo termine.