export const siteConfig = {
  name: 'Openterface',
  locale: 'it',
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
    docs: 'https://docs.openterface.com',
    appOverview: 'https://docs.openterface.com/it/app/overview/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
    news: 'https://news.openterface.com',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
      linkerDomains: [
        'openterface.com',
        'en.openterface.com',
        'de.openterface.com',
        'es.openterface.com',
        'fr.openterface.com',
        'it.openterface.com',
        'jp.openterface.com',
        'kr.openterface.com',
        'pt.openterface.com',
        'ro.openterface.com',
        'cn.openterface.com',
        'news.openterface.com',
        'docs.openterface.com',
      ],
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
      title: 'Consenso sui cookie',
      description:
        'Utilizziamo i cookie per migliorare la qualità dei contenuti, analizzare l\'efficacia del sito e le esigenze. Consentendo, ci aiuti a migliorare il nostro sito web. Grazie!',
      acceptLabel: 'Accetta',
      rejectLabel: 'Rifiuta',
      cookieLabel: 'Cookie',
    },
  },
} as const;

/** Costruisce un URL legacy openterface.com per pagine piene di documenti non ancora migrate. */
export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}

/** Build a docs.openterface.com URL for this site's locale (English unprefixed at /). */
export function docsPath(subpath = ''): string {
  const normalized = subpath.startsWith('/') ? subpath : subpath ? `/${subpath}` : '';
  const suffix = normalized && !normalized.endsWith('/') ? `${normalized}/` : normalized || '/';
  const { locale } = siteConfig;
  const base = siteConfig.links.docs;
  if (locale === 'en') {
    return suffix === '/' ? `${base}/` : `${base}${suffix}`;
  }
  return `${base}/${locale}${suffix === '/' ? '/' : suffix}`;
}

/** News hub URL — English is unprefixed at news.openterface.com/ */
export function newsPath(subpath = ''): string {
  const normalized = subpath.replace(/^\/+|\/+$/g, '');
  const { locale } = siteConfig;
  const base = siteConfig.links.news;
  if (locale === 'en') {
    return normalized ? `${base}/${normalized}/` : `${base}/`;
  }
  return normalized ? `${base}/${locale}/${normalized}/` : `${base}/${locale}/`;
}
