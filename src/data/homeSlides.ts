import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'Trasforma il tuo telefono in una mini tastiera',
    description:
      'Un emulatore HID USB + Bluetooth compatto che trasforma il tuo telefono in una tastiera e un trackpad portatili. Plug and play, 100% open source. Perfetto per chioschi, smart TV e scorciatoie rapide del flusso di lavoro.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Sostienici ORA', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'Vedi Prodotto', href: '/products/keymod/' },
    progressSmall: 'Serie KeyMod',
    progressLarge: 'Trasforma il tuo telefono in una mini tastiera',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'Il KVM ultra-compatto che sta nel portachiavi',
    description:
      'Progettato per stare nel tuo portachiavi e salvarti la giornata in un istante, questo gadget KVM-over-USB di nuova generazione è costruito per operazioni IT rapide sul campo.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'Serie KVM-GO',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Pre-ordina ORA', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'Vedi Prodotto', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: 'Finanziato il 30 dic 2025', backers: '478' },
    progressSmall: 'Serie KVM-GO',
    progressLarge: 'Il KVM ultra-compatto che sta nel tuo portachiavi',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'La soluzione KVM compatta per i professionisti',
    description:
      'Una soluzione KVM-over-USB compatta, ricca di funzioni e open source che semplifica la tua vita tecnologica con attività IT e risoluzione dei problemi istantanee.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Ordina ORA', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'Vedi Prodotto', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: 'Finanziato il 13 giu 2024', backers: '3,775' },
    progressSmall: 'Serie Mini-KVM',
    progressLarge: 'La soluzione KVM compatta per i professionisti',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'Completa il tuo setup con accessori premium',
    description:
      'Esplora la nostra gamma di accessori essenziali, inclusi adattatori video, cavi ad alta velocità e soluzioni di archiviazione. Migliora la tua esperienza Openterface con accessori di qualità progettati per i professionisti.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'Accessori TxA Shop',
    primaryCta: { label: 'Acquista ORA', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'Vedi Accessori', href: '/products/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'Completa il tuo setup con accessori premium',
  },
];

export const homeSeo = {
  title: 'Openterface | Soluzioni KVM ultra-compatte per professionisti IT',
  description:
    'Scopri Openterface - Soluzioni KVM-over-USB ultra-compatte tra cui la Serie KVM-GO (a misura di portachiavi), la Serie Mini-KVM e l\'Estensione KVM uConsole.',
  keywords:
    'KVM-over-USB, KVM switch, portable KVM, USB KVM, headless server management, KVM-GO, Mini-KVM, KeyMod',
};
