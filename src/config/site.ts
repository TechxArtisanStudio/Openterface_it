export const siteConfig = {
  name: 'Openterface',
  url: 'https://it.openterface.com',
  legacyUrl: 'https://openterface.com',
  description:
    'Soluzioni KVM-over-USB ultra-compatte per professionisti IT — KVM-GO, Mini-KVM, KeyMod e uConsole KVM Extension.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    minikvmPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
    kvmgoPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    keymodCrowdsupply: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    shop: 'https://shop.techxartisan.com/',
    appOverview: 'https://openterface.com/app/overview/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
  },
} as const;

/** Costruisce un URL legacy openterface.com per pagine piene di documenti non ancora migrate. */
export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}
