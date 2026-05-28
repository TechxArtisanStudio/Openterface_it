import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "Estensione KVM uConsole",
  slogan: "Potenza KVM per la tua uConsole",
  subtitle: "Trasforma la uConsole portatile in un terminale KVM completo.",
  status: 'oshwa',
  description:
    "Un'estensione hardware che aggiunge funzionalità KVM-over-USB alla Clockwork uConsole. Perfetta per il lavoro IT portatile con tastiera e display integrati.",
  seoDescription:
    "L'estensione KVM uConsole aggiunge funzionalità KVM-over-USB al computer portatile Clockwork uConsole.",
  keywords:
    "uConsole, KVM extension, portable KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Scopri di più",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Le console portatili mancano di KVM integrato per i target headless",
    "I tecnici sul campo vogliono un unico dispositivo per tutto",
  ],
  solutions: [
    "Scheda di estensione con form-factor nativo uConsole",
    "Stack KVM Openterface completo su un dispositivo tascabile",
  ],
  hwFeatures: [
    { title: "Nativo uConsole", description: "Progettato specificamente per Clockwork uConsole." },
    { title: "PCB compatto", description: "Si installa all'interno dello chassis di uConsole." },
  ],
  swFeatures: [
    { title: "App Openterface", description: "Lo stesso software affidabile di Mini-KVM e KVM-GO." },
    { title: "Guide alla configurazione", description: "Documentazione di installazione hardware e software passo dopo passo." },
  ],
  specs: [
    { label: "Compatibilità", value: "Clockwork uConsole" },
    { label: "Certificazione", value: "Certificato OSHWA" },
  ],
  useCases: [
    "Strumento portatile per datacenter",
    "Maker e homelab in movimento",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Installazione Hardware", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Configurazione Software", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Come connettersi", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "FAQ", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
