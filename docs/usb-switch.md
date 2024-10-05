# Meccanica della Porta USB Commutabile

![switch-graphics](images/product/switch-graphics.svg#only-light){:style="width:460px"}
![switch-graphics](images/product/switch-graphics_1.svg#only-dark){:style="width:460px"}

Il dispositivo mini-KVM è dotato di una porta USB-A 2.0 commutabile che può essere alternata tra il computer host e il computer target, ma non entrambi contemporaneamente. Questa funzionalità è controllata sia da un interruttore fisico che da un interruttore software nell'applicazione host. Questo documento spiega la meccanica e la logica dietro questi interruttori.

## Tipi di Interruttori

- **Interruttore Software**: Un pulsante a levetta nell'applicazione host.
      - Alterna la connessione della porta USB tra i computer host e target

- ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} **Interruttore Hardware**: Un interruttore fisico a due posizioni sul dispositivo.
      - Posizione interna: Connette al computer host
      - Posizione esterna: Connette al computer target

## Configurazione Iniziale e Sincronizzazione

Quando il mini-KVM è correttamente collegato e l'app host è avviata:

1. La connessione effettiva della porta USB del dispositivo (circuito) predefinita è quella dell'host.
2. L'app host rileva la posizione corrente dell'interruttore hardware, che è impostato su Host o Target.
3. L'interruttore software si sincronizza con la posizione dell'interruttore hardware.
4. La connessione del circuito effettivo viene aggiornata per corrispondere alle posizioni degli interruttori.

!!! warning "Limitazione Hardware"
    Se un'unità USB è già collegata al dispositivo prima dell'accensione o dell'avvio dell'app host, il computer host emetterà un avviso di rimozione non sicura del dispositivo USB. Questa è una limitazione hardware per la versione 1.9. Pertanto, si consiglia di non collegare alcun dispositivo USB prima di accendere il dispositivo o avviare la nostra app host.

## Stati Operativi

A causa della presenza di entrambi gli interruttori hardware e software, possono verificarsi quattro stati possibili:

- **Stato 1** (Sincronizzato, Connesso all'Host):
      - Interruttore Hardware: Punta all'Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Interruttore Software: Punta all'Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Connessione Porta USB: Connessa all'Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **Stato 2** (Sincronizzato, Connesso al Target):
      - Interruttore Hardware: Punta al Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Interruttore Software: Punta al Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Connessione Porta USB: Connessa al Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

- **Stato 3** (Fuori Sincronia, USB Connessa all'Host):
      - Interruttore Hardware: Punta al Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Interruttore Software: Punta all'Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Connessione Porta USB: Connessa all'Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **Stato 4** (Fuori Sincronia, USB Connessa al Target):
      - Interruttore Hardware: Punta all'Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Interruttore Software: Punta al Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Connessione Porta USB: Connessa al Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

## Transizioni di Stato e Logica

### Da **Stato 1** (Sincronizzato con Host)

- ^^***Scenario 1a***^^: L'utente sposta l'interruttore hardware su Target
      - Aggiorna la variabile di stato interna su Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Aggiorna la visualizzazione dell'app host per mostrare Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Commutare la connessione del circuito effettivo su Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transizione a Stato 2, sincronizzato

- ***Scenario 1b***: L'utente clicca sull'interruttore software su Target
      - Aggiorna la variabile di stato interna su Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - La posizione dell'interruttore hardware rimane invariata (puntando all'Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Commutare la connessione del circuito effettivo su Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transizione a Stato 3, fuori sincronia

### Da **Stato 2** (Sincronizzato con Target)

- ^^***Scenario 2a***^^: L'utente sposta l'interruttore hardware su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Aggiorna la variabile di stato interna su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Aggiorna la visualizzazione dell'interruttore software per mostrare Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Commutare la connessione del circuito effettivo su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transizione a Stato 1, sincronizzato

- ***Scenario 2b***: L'utente clicca sull'interruttore software su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Aggiorna la variabile di stato interna su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - La posizione dell'interruttore hardware rimane invariata (puntando al Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Commutare la connessione del circuito effettivo su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transizione a Stato 4, fuori sincronia

### Da **Stato 3** (Fuori Sincronia, USB Connessa all'Host)

- ^^***Scenario 3a***^^: L'utente sposta l'interruttore hardware su Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - Nessuna modifica alle variabili
      - Transizione a Stato 2, sincronizzato

- ***Scenario 3b***: L'utente clicca sull'interruttore software su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Aggiorna la variabile di stato interna su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - La posizione dell'interruttore hardware rimane invariata (puntando al Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Commutare la connessione del circuito effettivo su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transizione a Stato 1, sincronizzato

### Da **Stato 4** (Fuori Sincronia, USB Connessa al Target)

- ^^***Scenario 4a***^^: L'utente sposta l'interruttore hardware su Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Nessuna modifica alle variabili
      - Transizione a Stato 1, sincronizzato

- ***Scenario 4b***: L'utente clicca sull'interruttore software su Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - Aggiorna la variabile di stato interna su Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - La posizione dell'interruttore hardware rimane invariata (puntando all'Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Commutare la connessione del circuito effettivo su Target ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transizione a Stato 2, sincronizzato

!!! warning "Ricorda di espellere l'unità flash prima di commutare l'interruttore"
    Se la porta USB è utilizzata da un'unità flash, assicurati di espellere l'unità flash prima di commutare l'interruttore per trasferire l'uso della porta a un altro computer.

!!! warning "Limitazioni di alimentazione USB"
    L'alimentazione fornita dalla porta USB dipende dalla scheda madre dell'Host. Non è consigliato collegare dispositivi USB che richiedono molta energia. Tipicamente, il consumo di energia non dovrebbe superare 1,5W. Collegare dispositivi ad alta potenza potrebbe causare un funzionamento instabile o potenziali danni.

!!! Note "Guida per l'utente"
    - **Priorità dell'Interruttore Software**: Indipendentemente dalla posizione dell'interruttore hardware, cliccando sull'interruttore software si cambierà immediatamente la direzione del circuito.

    - **Sincronizzazione dell'Interruttore Hardware**: Qualsiasi commutazione manuale dell'interruttore hardware allineerà il suo stato con l'interruttore software, passando allo Stato 1 o Stato 2 dagli stati fuori sincronia Stato 3 o Stato 4. Tuttavia, questa sincronizzazione non altera necessariamente la connessione effettiva del circuito.

    - **Monitoraggio dell'Interruttore Hardware**: L'interruttore hardware, nonostante sia fisico, è monitorato dal software e non controlla direttamente la direzione del circuito. Invece, il software interpreta la posizione dell'interruttore e gestisce la commutazione effettiva del circuito.

## Perché la Commutazione USB Controllata dal Software è Importante

Il miglioramento della commutazione USB controllata dal software introdotto nella versione 1.9 è una caratteristica fondamentale per i nostri piani di sviluppo futuri, in particolare nel supporto delle soluzioni KVM-over-IP come VNC (che non abbiamo ancora implementato). Questa capacità consente agli utenti di alternare e condividere la porta USB tra i computer target e host da remoto, il che è particolarmente cruciale per facilitare i trasferimenti di file in un ambiente remoto.

Questa funzione apre un mondo di possibilità per la gestione e il controllo remoto. Ad esempio, consente trasferimenti di file tra dispositivi senza intervento fisico, migliorando l'efficienza della risoluzione dei problemi remoti e della gestione del sistema.

Hai idee creative su come sfruttare questa funzione? Ci piacerebbe parlarne con te! Unisciti alla comunità Openterface [community](/community/) e condividi i tuoi pensieri 😃
