import { docsPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface KeyMod Series',
    slogan: 'Trasforma il tuo telefono in una tastiera intelligente',
    subtitle: 'Controllo programmabile di tastiera e mouse per tecnologia, professionisti e gaming.',
    description:
      'Un emulatore HID USB + Bluetooth compatto e programmabile che trasforma il tuo telefono in una tastiera portatile e una console trackpad. Basato sul collaudato core HID di Openterface Mini-KVM — plug and play, 100% open source.',
    seoDescription:
      'La Serie KeyMod trasforma il tuo telefono in una tastiera e un trackpad portatili. Emulatore HID USB + Bluetooth, open source, perfetto per chioschi e scorciatoie del flusso di lavoro.',
    keywords: 'KeyMod, HID emulator, phone keyboard, Bluetooth keyboard, USB keyboard, open source',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: 'Sostienici ORA',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      'Portare una tastiera intera per la configurazione di chioschi o TV è poco pratico',
      'Le scorciatoie del flusso di lavoro necessitano di macro programmabili in movimento',
      'Molti strumenti HID sono closed-source con personalizzazione limitata',
    ],
    solutions: [
      'Usa il tuo telefono come tastiera e trackpad portatili',
      'HID USB e Bluetooth in un unico dispositivo compatto',
      '100% open source con supporto app Openterface',
    ],
    hwFeatures: [
      { title: 'Form factor compatto', description: 'Sta in tasca per lavori sul campo e viaggi.' },
      { title: 'USB + Bluetooth', description: 'Connettività doppia per la massima compatibilità con i dispositivi.' },
      { title: 'Hardware aperto', description: 'Design trasparente basato sul collaudato core HID di Openterface.' },
    ],
    swFeatures: [
      { title: 'App KeyMod', description: 'Configura macro, layout e profili gamepad dal tuo telefono.' },
      { title: 'Multi-piattaforma', description: 'Funziona con Android, iPadOS e host desktop tramite le app Openterface.' },
      { title: 'Open source', description: 'Stack completo disponibile su GitHub per i contributi della community.' },
    ],
    specs: [
      { label: 'Connettività', value: 'USB-C + Bluetooth LE' },
      { label: 'Modalità HID', value: 'Tastiera, mouse, gamepad' },
      { label: 'Licenza', value: 'Hardware e software open source' },
    ],
    useCases: ['Input per Smart TV e chioschi', 'Macro per flussi di lavoro mobili', 'Setup per gaming e accessibilità'],
    docLinks: [
      { label: 'Caratteristiche', href: docsPath('/product/keymod/features/') },
      { label: "Cosa c'è nella confezione", href: docsPath('/product/keymod/whats-in-the-box/') },
      { label: 'Come connettersi', href: docsPath('/product/keymod/how-to-connect/') },
      { label: 'FAQ', href: docsPath('/product/keymod/faq/') },
      { label: 'Scarica l\'App KeyMod', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface KVM-GO Series',
    slogan: 'KVM ultra-compatto che sta nel tuo portachiavi',
    subtitle: 'Per i momenti tecnologici critici — Collega. Controlla. Vai.',
    description:
      'La soluzione KVM-over-USB di nuova generazione con connettori video integrati (HDMI, DisplayPort o VGA). Ultra-compatta, a misura di portachiavi e costruita per operazioni IT rapide in data center e sale server.',
    seoDescription:
      'Controlla computer headless con Openterface KVM-Go. HDMI/DP/VGA integrati, a misura di portachiavi, KVM-over-USB 4K per professionisti IT.',
    keywords: 'KVM-Go, KVM over USB, ultra-compact KVM, keychain KVM, 4K KVM, headless control',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: 'Pre-ordina ORA',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '$101,548', date: 'Finanziato il 30 dic 2025', backers: '478' },
    painPoints: [
      'Le attrezzature KVM tradizionali sono ingombranti e richiedono cavi video separati',
      'L\'accesso di emergenza ai server sul campo richiede uno strumento tascabile',
      'La risoluzione dei problemi headless senza accesso alla rete è lenta',
    ],
    solutions: [
      'I connettori video integrati eliminano i cavi extra',
      'Form factor a portachiavi sempre a portata di mano',
      'KVM-over-USB — nessuna rete o driver richiesti sul target',
    ],
    hwFeatures: [
      { title: 'Video integrato', description: 'Modelli HDMI, DisplayPort o VGA — niente cavi sciolti.' },
      { title: 'Dimensioni portachiavi', description: 'Il più piccolo KVM-over-USB della linea Openterface.' },
      { title: 'Supporto 4K', description: 'Cattura ad alta risoluzione per display moderni.' },
    ],
    swFeatures: [
      { title: 'App Openterface Qt', description: 'Controllo host multi-piattaforma per Windows, macOS e Linux.' },
      { title: 'Switch MicroSD', description: 'Archiviazione commutabile per immagini OS portatili e strumenti.' },
      { title: 'Stack open source', description: 'Firmware e applicazioni host guidati dalla community.' },
    ],
    specs: [
      { label: 'Video', value: 'HDMI / DP / VGA (a seconda del modello)' },
      { label: 'Risoluzione', value: 'Fino a 4K' },
      { label: 'Connessione', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['Ispezioni in data center', 'Configurazione di dispositivi headless', 'Soccorso IT sul campo e homelab'],
    docLinks: [
      { label: 'Caratteristiche', href: docsPath('/product/kvm-go/features/') },
      { label: 'Guida rapida Beta', href: docsPath('/product/kvm-go/beta-quick-start/') },
      { label: 'Come connettersi', href: docsPath('/product/kvm-go/how-to-connect/') },
      { label: 'FAQ', href: docsPath('/product/kvm-go/faq/') },
      { label: 'Scarica l\'App', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: 'Trasforma il tuo laptop in una console KVM',
    subtitle: 'Semplifica la tua vita tecnologica.',
    description:
      'Una soluzione KVM-over-USB plug-and-play. Controlla un computer headless vicino dal tuo laptop usando USB e HDMI — nessuna periferica extra o rete richiesta.',
    seoDescription:
      'Openterface Mini-KVM: KVM-over-USB plug-and-play con HDMI. Controlla computer headless dal tuo laptop senza rete.',
    keywords: 'Mini-KVM, KVM over USB, headless control, HDMI KVM, plug and play KVM',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: 'Ordina ORA',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '$505,471', date: 'Finanziato il 13 giu 2024', backers: '3,775' },
    painPoints: [
      'Trascinare un monitor e una tastiera per ogni riparazione server è poco pratico',
      'Il KVM di rete richiede configurazione e connettività',
      'I professionisti IT hanno bisogno quotidianamente di un KVM tascabile affidabile',
    ],
    solutions: [
      'Usa il tuo laptop attuale come console KVM',
      'Cattura HDMI + HID USB in un unico dispositivo compatto',
      'Testato da oltre 5.000 membri della community dal 2024',
    ],
    hwFeatures: [
      { title: 'Cattura HDMI', description: 'Video completo dalla macchina target al tuo laptop host.' },
      { title: 'Switch USB', description: 'Commuta i dispositivi USB tra host e target.' },
      { title: 'Pin di estensione', description: 'Opzioni di hardware hacking e integrazione personalizzata.' },
    ],
    swFeatures: [
      { title: 'App Qt / macOS / Android', description: 'App native per ogni principale piattaforma host.' },
      { title: 'Open source', description: 'Ecosistema hardware e software completamente aperto.' },
      { title: 'Community attiva', description: 'Discord, GitHub e aggiornamenti firmware regolari.' },
    ],
    specs: [
      { label: 'Ingresso video', value: 'HDMI' },
      { label: 'USB', value: 'USB-C con porta commutabile' },
      { label: 'Stato', value: 'In spedizione — Crowd Supply' },
    ],
    useCases: ['Gestione homelab', 'Controllo workstation sviluppatore affiancato', 'Risoluzione problemi al banco IT'],
    docLinks: [
      { label: 'Caratteristiche', href: docsPath('/product/minikvm/features/') },
      { label: 'Switch USB', href: docsPath('/product/minikvm/usb-switch/') },
      { label: 'Supporto tecnico', href: docsPath('/product/minikvm/support/') },
      { label: 'FAQ', href: docsPath('/product/minikvm/faq/') },
      { label: 'Scarica l\'App', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'Estensione KVM uConsole',
    slogan: 'Potenza KVM per la tua uConsole',
    subtitle: 'Trasforma la uConsole portatile in un terminale KVM completo.',
    description:
      'Un\'estensione hardware che aggiunge funzionalità KVM-over-USB alla Clockwork uConsole. Perfetta per il lavoro IT portatile con tastiera e display integrati.',
    seoDescription:
      'L\'estensione KVM uConsole aggiunge funzionalità KVM-over-USB al computer portatile Clockwork uConsole.',
    keywords: 'uConsole, KVM extension, portable KVM, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: 'Scopri di più',
    buyHref: docsPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      'Le console portatili mancano di KVM integrato per i target headless',
      'I tecnici sul campo vogliono un unico dispositivo per tutto',
    ],
    solutions: [
      'Scheda di estensione con form-factor nativo uConsole',
      'Stack KVM Openterface completo su un dispositivo tascabile',
    ],
    hwFeatures: [
      { title: 'Nativo uConsole', description: 'Progettato specificamente per Clockwork uConsole.' },
      { title: 'PCB compatto', description: 'Si installa all\'interno dello chassis di uConsole.' },
    ],
    swFeatures: [
      { title: 'App Openterface', description: 'Lo stesso software affidabile di Mini-KVM e KVM-GO.' },
      { title: 'Guide alla configurazione', description: 'Documentazione di installazione hardware e software passo dopo passo.' },
    ],
    specs: [
      { label: 'Compatibilità', value: 'Clockwork uConsole' },
      { label: 'Certificazione', value: 'Certificato OSHWA' },
    ],
    useCases: ['Strumento portatile per datacenter', 'Maker e homelab in movimento'],
    docLinks: [
      { label: 'Installazione Hardware', href: docsPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: 'Configurazione Software', href: docsPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: 'Come connettersi', href: docsPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: 'FAQ', href: docsPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Accessori Openterface',
    slogan: 'Completa il tuo setup',
    subtitle: 'Cavi premium, adattatori e borse porta attrezzi per professionisti.',
    description:
      'Accessori essenziali inclusi adattatori video, cavi ad alta velocità e soluzioni di archiviazione. Migliora la tua esperienza Openterface con attrezzature di qualità da TxA Shop.',
    seoDescription: 'Accessori Openterface — cavi, adattatori, borse porta attrezzi e connettori video.',
    keywords: 'KVM accessories, HDMI cable, USB-C cable, toolkit bag',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: 'Acquista ORA',
    buyHref: siteConfig.links.shop,
    painPoints: ['La mancanza del cavo giusto sul campo ritarda ogni riparazione'],
    solutions: ['Accessori curati e testati con i prodotti Openterface'],
    hwFeatures: [
      { title: 'Adattatori video', description: 'HDMI, VGA e connettori speciali.' },
      { title: 'Cavi ad alta velocità', description: 'Cavi USB-C e Type-A costruiti per carichi di lavoro KVM.' },
      { title: 'Borsa porta attrezzi', description: 'Organizza il tuo kit Openterface completo.' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['Organizzazione kit da campo', 'Conversione formato video', 'Cavi di riserva per le borse IT'],
    docLinks: [
      { label: 'Tutti gli SKU', href: docsPath('/product/accessories/') },
      { label: 'TxA Shop', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);
