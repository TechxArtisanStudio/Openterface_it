import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO Series",
  slogan: "KVM ultra-compatto che sta nel tuo portachiavi",
  subtitle: "Per i momenti tecnologici critici — Collega. Controlla. Vai.",
  status: 'pre-order',
  description:
    "La soluzione KVM-over-USB di nuova generazione con connettori video integrati (HDMI, DisplayPort o VGA). Ultra-compatta, a misura di portachiavi e costruita per operazioni IT rapide in data center e sale server.",
  seoDescription:
    "Controlla computer headless con Openterface KVM-Go. HDMI/DP/VGA integrati, a misura di portachiavi, KVM-over-USB 4K per professionisti IT.",
  keywords:
    "KVM-Go, KVM over USB, ultra-compact KVM, keychain KVM, 4K KVM, headless control",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "Pre-ordina ORA",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "Finanziato il 30 dic 2025", backers: "478" },
  painPoints: [
    "Le attrezzature KVM tradizionali sono ingombranti e richiedono cavi video separati",
    "L'accesso di emergenza ai server sul campo richiede uno strumento tascabile",
    "La risoluzione dei problemi headless senza accesso alla rete è lenta",
  ],
  solutions: [
    "I connettori video integrati eliminano i cavi extra",
    "Form factor a portachiavi sempre a portata di mano",
    "KVM-over-USB — nessuna rete o driver richiesti sul target",
  ],
  hwFeatures: [
    { title: "Video integrato", description: "Modelli HDMI, DisplayPort o VGA — niente cavi sciolti." },
    { title: "Dimensioni portachiavi", description: "Il più piccolo KVM-over-USB della linea Openterface." },
    { title: "Supporto 4K", description: "Cattura ad alta risoluzione per display moderni." },
  ],
  swFeatures: [
    { title: "App Openterface Qt", description: "Controllo host multi-piattaforma per Windows, macOS e Linux." },
    { title: "Switch MicroSD", description: "Archiviazione commutabile per immagini OS portatili e strumenti." },
    { title: "Stack open source", description: "Firmware e applicazioni host guidati dalla community." },
  ],
  specs: [
    { label: "Video", value: "HDMI / DP / VGA (a seconda del modello)" },
    { label: "Risoluzione", value: "Fino a 4K" },
    { label: "Connessione", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Ispezioni in data center",
    "Configurazione di dispositivi headless",
    "Soccorso IT sul campo e homelab",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Caratteristiche", href: docsPath("/product/kvm-go/features/") },
    { label: "Guida rapida Beta", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Come connettersi", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "FAQ", href: docsPath("/product/kvm-go/faq/") },
    { label: "Scarica l'App", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
