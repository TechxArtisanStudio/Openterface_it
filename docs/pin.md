# Linee Guida per i Pin di Estensione

![change-cap](images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](images/product/change-cap_1.svg#only-dark){:style="height:300px"}

L'Openterface Mini-KVM è dotato di pin di estensione per lo sviluppo avanzato e la sperimentazione con [Software Open](/app). Questi pin non sono visibili nella configurazione standard del case.

### Accesso ai Pin di Estensione per lo Sviluppo

Per accedere ai pin di estensione:

1. Smonta il dispositivo
2. Sostituisci il coperchio originale del case con un coperchio specializzato per i Pin di Estensione
3. Scarica il modello 3D del coperchio per i Pin di Estensione dal nostro [repository GitHub](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)

!!! warning "Garanzia Annullata"
    Rimuovere il case originale annulla la garanzia del prodotto. Tutte le modifiche o lo smontaggio sono a rischio dell'utente.

!!! note "Funzionalità Sperimentali"
    Le funzionalità sviluppate utilizzando questi pin sono sperimentali e non completamente testate. Openterface non è responsabile per eventuali danni, lesioni o malfunzionamenti derivanti da modifiche, esposizione dei pin di estensione o altre alterazioni del dispositivo.

### Layout dei Pin

![target-side](images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

I pin di estensione forniscono le seguenti connessioni:

1. Alimentazione USB 5V per componenti esterni
2. Dati positivi per l'hub USB dell'host
3. Dati negativi per l'hub USB dell'host
4. Dati positivi per l'hub USB del target
5. Dati negativi per l'hub USB del target
6. Massa

!!! danger "Connessioni Errate"
    Scambiare VCC e GND può causare gravi danni al dispositivo e ai componenti collegati. Controlla sempre le connessioni dei pin prima di alimentare il dispositivo.
