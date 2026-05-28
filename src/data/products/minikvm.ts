import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Trasforma il tuo laptop in una console KVM",
  subtitle: "Semplifica la tua vita tecnologica.",
  status: 'shipping',
  description:
    "Una soluzione KVM-over-USB plug-and-play. Controlla un computer headless vicino dal tuo laptop usando USB e HDMI — nessuna periferica extra o rete richiesta.",
  seoDescription:
    "Openterface Mini-KVM: KVM-over-USB plug-and-play con HDMI. Controlla computer headless dal tuo laptop senza rete.",
  keywords:
    "Mini-KVM, KVM over USB, headless control, HDMI KVM, plug and play KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "Ordina ORA",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "Finanziato il 13 giu 2024", backers: "3,775" },
  painPoints: [
    "Trascinare un monitor e una tastiera per ogni riparazione server è poco pratico",
    "Il KVM di rete richiede configurazione e connettività",
    "I professionisti IT hanno bisogno quotidianamente di un KVM tascabile affidabile",
  ],
  solutions: [
    "Usa il tuo laptop attuale come console KVM",
    "Cattura HDMI + HID USB in un unico dispositivo compatto",
    "Testato da oltre 5.000 membri della community dal 2024",
  ],
  hwFeatures: [
    { title: "Cattura HDMI", description: "Video completo dalla macchina target al tuo laptop host." },
    { title: "Switch USB", description: "Commuta i dispositivi USB tra host e target." },
    { title: "Pin di estensione", description: "Opzioni di hardware hacking e integrazione personalizzata." },
  ],
  swFeatures: [
    { title: "App Qt / macOS / Android", description: "App native per ogni principale piattaforma host." },
    { title: "Open source", description: "Ecosistema hardware e software completamente aperto." },
    { title: "Community attiva", description: "Discord, GitHub e aggiornamenti firmware regolari." },
  ],
  specs: [
    { label: "Ingresso video", value: "HDMI" },
    { label: "USB", value: "USB-C con porta commutabile" },
    { label: "Stato", value: "In spedizione — Crowd Supply" },
  ],
  useCases: [
    "Gestione homelab",
    "Controllo workstation sviluppatore affiancato",
    "Risoluzione problemi al banco IT",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Caratteristiche", href: docsPath("/product/minikvm/features/") },
    { label: "Switch USB", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Supporto tecnico", href: docsPath("/product/minikvm/support/") },
    { label: "FAQ", href: docsPath("/product/minikvm/faq/") },
    { label: "Scarica l'App", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
