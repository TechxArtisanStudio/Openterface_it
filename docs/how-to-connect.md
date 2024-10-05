# Come Collegare

## Interfacce

![host-side](images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Porta USB-C Host** (Femmina): Porta USB per il trasferimento dati collegata al computer Host tramite l'hub USB integrato.

② ![Type-C to Target](images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Porta USB-C Target** (Femmina): Porta USB per emulare l'uscita HID di tastiera e mouse collegata al computer Host tramite l'hub USB integrato.

③ ![HDMI Input](images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Porta di Ingresso HDMI** (Femmina): Porta di ingresso HDMI per il segnale video proveniente dal computer Target.

④ ![USB-A Port](images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Porta USB-A 2.0 Commutabile** (Femmina): Porta USB host utilizzabile sia dal computer Host che dal computer Target, ma non contemporaneamente.

!!! warning "Connessione Stretta"
    Nota che questa porta USB-A femmina è dotata di un meccanismo di bloccaggio, che richiede un po' più di forza per collegare e scollegare i tuoi dispositivi USB.

⑤ ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Interruttore a Levetta**: Per commutare la connessione della porta USB-A 2.0 tra il computer Host e il computer Target.

⑥ ![Extension Pins](images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Pin di Estensione**: Per ulteriori informazioni, consulta [Pin di Estensione](/extension-pin) per l'uso da parte degli sviluppatori.

## Passaggi di Connessione

![to-host](images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](images/product/to-target_1.svg#only-dark){:style="height:260px"}

Per configurare il tuo Mini-KVM, segui questi passaggi nell'ordine indicato:

1. **Connessione al Computer Host** (Lato Arancione):
    - Collega il computer Host al mini-KVM utilizzando il cavo USB Type-C arancione da 1,5m. Inseriscilo nella porta USB-C femmina sul lato arancione del mini-KVM.

    !!! note "App Host Necessaria"
        Il computer Host deve avere l'app Host installata. Per ulteriori informazioni e link per il download, consulta la [Documentazione dell'App](/app).

2. **Connessione al Dispositivo Target** (Lato Nero):
    - Collega il dispositivo Target al mini-KVM utilizzando il cavo USB Type-C nero da 0,3m. Inseriscilo nella porta USB-C femmina sul lato nero del mini-KVM.

3. **Connessione dell'Uscita Video del Target** (Lato Nero):
    - Collega la porta di uscita video del dispositivo Target alla porta HDMI femmina sul lato nero del mini-KVM. Utilizza il cavo HDMI nero da 0,3m, o qualsiasi altro cavo video-compatibile con HDMI, come un cavo convertitore VGA-HDMI.

    !!! note "Nessuna App Necessaria per il Target"
        Non è necessaria alcuna pre-installazione o configurazione sul dispositivo Target. Finché il dispositivo Target supporta operazioni UI con uscita video (HDMI, VGA, ecc.) e ha una porta USB per ricevere segnali di controllo emulati di tastiera e mouse (HID), può essere utilizzato. Pertanto, le piattaforme di dispositivi Target supportate includono Windows, macOS, Linux, Android e iOS.

4. **Connessione della Porta USB-A 2.0 Commutabile** (Opzionale):
    - Se desideri collegare un dispositivo USB alla Porta USB-A 2.0 Commutabile, è consigliabile farlo dopo aver completato le tre connessioni sopra e assicurandoti che l'app Host sia aperta.

