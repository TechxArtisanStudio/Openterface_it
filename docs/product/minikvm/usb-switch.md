---
title: "Porta USB Commutabile"
description: "Scopri il sistema di commutazione USB duale hardware-software nell'Openterface Mini-KVM. Comprendi i quattro stati operativi, le linee guida di sicurezza e le future capacità di accesso remoto."
keywords: "Commutazione USB, switch KVM, switch hardware, switch software, controllo porta USB, KVM su USB, KVM su IP, accesso remoto, gestione dispositivi USB, periferiche del computer, gestione alimentazione USB"
---

# **Guida alla Commutazione della Porta USB** | Openterface Mini-KVM

Il dispositivo mini-KVM ha una singola porta USB-A 2.0 che può **connettersi sia** al computer host che al computer target, ma **mai entrambi contemporaneamente**.

Il controllo avviene tramite due interruttori:

- **Interruttore Hardware**: Un interruttore fisico a due posizioni sul dispositivo ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} (interno = host, esterno = target).  
- **Interruttore Software**: Un pulsante a levetta nell'app host che reindirizza istantaneamente la porta USB sia all'host che al target.

## Stati Operativi

La connessione della porta USB-A dipende dalle posizioni sia dell'**Interruttore Hardware** che dell'**Interruttore Software**. La seguente tabella riassume i quattro possibili stati:

| **Stato** | **Interruttore Hardware** | **Interruttore Software** | **Porta Connessa A** | **Stato di Sincronizzazione** |
|-----------|---------------------------|---------------------------|----------------------|-------------------------------|
| 1         | Host                      | Host                      | Host                 | Sincronizzato                 |
| 2         | Target                    | Target                    | Target               | Sincronizzato                 |
| 3         | Target                    | Host                      | Host                 | Fuori Sincronia (→ Host)      |
| 4         | Host                      | Target                    | Target               | Fuori Sincronia (→ Target)    |

- **Sincronizzato** significa che le impostazioni hardware e software corrispondono.  
- **Fuori Sincronia** significa che il software sovrascrive temporaneamente l'interruttore hardware fino a quando l'interruttore hardware non viene spostato di nuovo.

Qualsiasi movimento manuale dell'interruttore hardware aggiornerà il display del software e tornerà a uno stato sincronizzato.

All'avvio, il dispositivo si predefinisce sulla connessione host. Il software rileva la posizione dell'interruttore hardware e si sincronizza di conseguenza.

!!! warning "Ricorda di espellere l'unità flash prima di commutare l'interruttore"
    Se la porta USB è utilizzata da un'unità flash, assicurati di espellere l'unità flash prima di commutare l'interruttore per trasferire l'uso della porta a un altro computer.

??? note "Come condividere una chiavetta/disco USB tra i dispositivi Host e Target?"
    I file possono essere trasferiti tra l'host e il target seguendo questi passaggi:

    1. Monta un'unità USB stick sull'host quando il piccolo interruttore nero è impostato sul lato della porta Type-C dell'host.
    2. Copia i file su questa unità montata.
    3. Dopo la copia, smonta l'unità senza scollegarla fisicamente.
    4. Sposta il piccolo interruttore nero sull'altro lato. Questa azione commuta la connessione della porta USB-A al target.
    5. Monta la chiavetta USB sul dispositivo target e copia/sposta i file dall'unità, completando il processo di trasferimento dei file dall'host al target.

    Questo metodo può essere utilizzato anche nella direzione opposta.

!!! Note "Guida per l'Utente"
    - **Priorità dell'Interruttore Software**: Indipendentemente dalla posizione dell'interruttore hardware, cliccando sull'interruttore software si cambierà immediatamente la direzione del circuito.

    - **Sincronizzazione dell'Interruttore Hardware**: Qualsiasi commutazione manuale dell'Interruttore Hardware allineerà il suo stato con l'Interruttore Software, passando allo Stato 1 o Stato 2 dallo Stato 3 o Stato 4 fuori sincronia. Tuttavia, questa sincronizzazione non altera necessariamente la connessione effettiva del circuito.

    - **Monitoraggio dell'Interruttore Hardware**: L'Interruttore Hardware, nonostante sia fisico, è monitorato dal software e non controlla direttamente la direzione del circuito. Invece, il software interpreta la posizione dell'interruttore e gestisce la commutazione effettiva del circuito.