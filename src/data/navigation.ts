import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Prodotti',
    href: '#',
    children: [
      { label: 'Serie KeyMod', href: '/products/keymod/' },
      { label: 'Serie KVM-GO', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'Estensione KVM uConsole', href: '/products/uconsole-kvm-extension/' },
      { label: 'Accessori', href: '/products/accessories/' },
    ],
  },
  { label: 'Video', href: '/videos/' },
  { label: "Casi d'Uso", href: '/use-cases/' },
  { label: 'Informazioni', href: '/about/' },
  { label: 'Documentazione', href: docsPath(), external: true },
  { label: 'Notizie', href: newsPath(), external: true },
  { label: 'Negozio', href: siteConfig.links.shop, external: true },
];
