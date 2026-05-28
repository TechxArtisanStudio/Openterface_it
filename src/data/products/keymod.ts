import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod Series",
  slogan: "Trasforma il tuo telefono in una tastiera intelligente",
  subtitle: "Controllo programmabile di tastiera e mouse per tecnologia, professionisti e gaming.",
  status: 'pre-launch',
  description:
    "Un emulatore HID USB + Bluetooth compatto e programmabile che trasforma il tuo telefono in una tastiera portatile e una console trackpad. Basato sul collaudato core HID di Openterface Mini-KVM — plug and play, 100% open source.",
  seoDescription:
    "La Serie KeyMod trasforma il tuo telefono in una tastiera e un trackpad portatili. Emulatore HID USB + Bluetooth, open source, perfetto per chioschi e scorciatoie del flusso di lavoro.",
  keywords:
    "KeyMod, HID emulator, phone keyboard, Bluetooth keyboard, USB keyboard, open source",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "Sostienici ORA",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Portare una tastiera intera per la configurazione di chioschi o TV è poco pratico",
    "Le scorciatoie del flusso di lavoro necessitano di macro programmabili in movimento",
    "Molti strumenti HID sono closed-source con personalizzazione limitata",
  ],
  solutions: [
    "Usa il tuo telefono come tastiera e trackpad portatili",
    "HID USB e Bluetooth in un unico dispositivo compatto",
    "100% open source con supporto app Openterface",
  ],
  hwFeatures: [
    { title: "Form factor compatto", description: "Sta in tasca per lavori sul campo e viaggi." },
    { title: "USB + Bluetooth", description: "Connettività doppia per la massima compatibilità con i dispositivi." },
    { title: "Hardware aperto", description: "Design trasparente basato sul collaudato core HID di Openterface." },
  ],
  swFeatures: [
    { title: "App KeyMod", description: "Configura macro, layout e profili gamepad dal tuo telefono." },
    { title: "Multi-piattaforma", description: "Funziona con Android, iPadOS e host desktop tramite le app Openterface." },
    { title: "Open source", description: "Stack completo disponibile su GitHub per i contributi della community." },
  ],
  specs: [
    { label: "Connettività", value: "USB-C + Bluetooth LE" },
    { label: "Modalità HID", value: "Tastiera, mouse, gamepad" },
    { label: "Licenza", value: "Hardware e software open source" },
  ],
  useCases: [
    "Input per Smart TV e chioschi",
    "Macro per flussi di lavoro mobili",
    "Setup per gaming e accessibilità",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Caratteristiche", href: docsPath("/product/keymod/features/") },
    { label: "Cosa c'è nella confezione", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Come connettersi", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "FAQ", href: docsPath("/product/keymod/faq/") },
    { label: "Scarica l'App KeyMod", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
