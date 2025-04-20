---
title: "Come Collegare"
description: "Guida passo-passo per configurare l'Openterface Mini-KVM. Scopri come collegare il tuo computer host e il dispositivo target con istruzioni dettagliate per connessioni USB-C, HDMI e periferiche. Include descrizioni delle interfacce e importanti suggerimenti di configurazione."
keywords: "Configurazione Mini-KVM, guida alla connessione KVM, configurazione USB-C KVM, connessione HDMI KVM, guida all'installazione KVM, configurazione periferiche computer, connessione dispositivo USB, guida interfaccia KVM, configurazione computer senza testa, configurazione KVM"
---

# **Come Collegare** | Guida alla Configurazione | Openterface Mini-KVM

## Passaggi di Connessione

![to-host](https://assets.openterface.com/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](https://assets.openterface.com/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](https://assets.openterface.com/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](https://assets.openterface.com/images/product/to-target_1.svg#only-dark){:style="height:260px"}

Per configurare il tuo Mini-KVM, segui questi passaggi nell'ordine:

1. **Connessione del Computer Host** (Lato Arancione):
    - Collega il computer host al mini-KVM utilizzando il cavo USB Type-C arancione da 1,5 m. Inseriscilo nella porta femmina Type-C sul lato arancione del mini-KVM.

    !!! note "App Host Necessaria"
        Il computer host deve avere l'app host installata. Per ulteriori informazioni e link per il download, fai riferimento alla pagina [App](/app).

2. **Connessione del Dispositivo Target** (Lato Nero):
    - Collega il dispositivo target al mini-KVM utilizzando il cavo USB Type-C nero da 0,3 m. Inseriscilo nella porta femmina Type-C sul lato nero del mini-KVM.

3. **Connessione dell'Uscita Video del Target** (Lato Nero):
    - Collega la porta di uscita video del dispositivo target alla porta femmina HDMI sul lato nero del mini-KVM. Usa il cavo HDMI nero da 0,3 m, o qualsiasi altro cavo video-sorgente-a-HDMI appropriato, come un cavo convertitore VGA-a-HDMI.

    !!! note "Nessuna App Necessaria per il Target"
        Non è richiesta alcuna pre-installazione o configurazione sul dispositivo target. Finché il dispositivo target supporta operazioni UI con uscita video (HDMI, VGA, ecc.) e ha una porta USB per ricevere segnali di controllo emulati di tastiera e mouse (HID), può essere utilizzato. Pertanto, le piattaforme di dispositivi target supportate includono Windows, macOS, Linux, Android e iOS.

4. **Connessione della Porta USB-A 2.0 Commutabile** (Opzionale):
    - Se desideri collegare un dispositivo USB alla Porta USB-A 2.0 Commutabile, è consigliato farlo dopo aver completato le tre connessioni sopra e assicurandoti che l'app host sia aperta.


## Interfacce

![host-side](https://assets.openterface.com/images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](https://assets.openterface.com/images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](/images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](/images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Porta USB-C Host** (Femmina): Come porta dispositivo USB, collegandosi al computer Host per il trasferimento dati tramite hub USB integrato

② ![Type-C to Target](/images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](/images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Porta USB-C Target** (Femmina): Come porta dispositivo USB, collegandosi al computer Host per emulare l'output HID di tastiera e mouse tramite hub USB integrato

③ ![HDMI Input](/images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](/images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Porta di Ingresso HDMI** (Femmina): Ingresso sorgente HDMI dal computer Target

④ ![USB-A Port](/images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](/images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Porta USB-A 2.0 Commutabile** (Femmina): Come porta host USB, utilizzata dal computer host o dal computer target in qualsiasi momento, ma non simultaneamente. Si prega di controllare la [Guida alla Commutazione della Porta USB](../usb-switch) per ulteriori informazioni.

!!! warning "Limitazioni di alimentazione USB"
    L'alimentazione fornita dalla porta USB dipende dalla scheda madre dell'Host. Non è consigliato collegare dispositivi USB che richiedono molta potenza. Tipicamente, il consumo di energia non dovrebbe superare 1,5W. Collegare dispositivi ad alta potenza può risultare in operazioni instabili o potenziali danni.

!!! warning "La Porta USB-A Ha un Meccanismo di Blocco Solido"
    La porta USB-A include un meccanismo di blocco che richiede forza extra quando si collegano o rimuovono dispositivi. Questo è intenzionale e garantisce una connessione sicura. **Evitare di usare dispositivi USB molto piccoli** (come unità USB ultra-compatte), poiché potrebbero essere difficili da afferrare e rimuovere, portando potenzialmente a danni.

!!! warning "Hub USB Extra Richiede Alimentazione Esterna e Può Influenzare la Compatibilità"
    Il mini-KVM include già un hub USB integrato che si collega sia al computer host che al computer target. Se si collega un ulteriore hub USB esterno alla porta USB-A, qualsiasi dispositivo USB collegato ad esso opererà a un livello più profondo nell'albero dei dispositivi USB. Alcuni computer possono avere limitazioni sulla profondità dell'albero USB, il che può causare problemi di compatibilità o impedire il corretto funzionamento di alcuni dispositivi.

    Inoltre, assicurati che qualsiasi hub USB collegato sia alimentato esternamente. Gli hub non alimentati possono causare instabilità o malfunzionamenti dell'intero setup mini-KVM.

⑤ ![Toggle Switch](/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Interruttore a Levetta**: Per commutare la connessione della porta USB-A 2.0 tra il computer host e il computer target

⑥ ![Extension Pins](/images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](/images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Pin di Estensione**: Nascosti per impostazione predefinita e accessibili solo sostituendo il coperchio superiore con un cappuccio alternativo. Per ulteriori informazioni, si prega di controllare [Pin di Estensione](../extension-pins) per uso sviluppatore.