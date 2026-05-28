import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Prodotti",
    href: '/products/',
    children: [
      { label: "Tutti i prodotti", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Accessori", href: '/accessories/' },
    ],
  },
  {
    label: "App",
    href: '/app/',
    children: [
      { label: "Tutte le app", href: '/app/' },
      { label: "Controllo KVM", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Media", href: '/videos/' },
  { label: "Chi siamo", href: '/about/' },
  { label: "Documentazione", href: docsPath(), external: true },
  { label: "Notizie", href: newsPath(), external: true },
  { label: "Negozio", href: siteConfig.links.shop, external: true },
];
