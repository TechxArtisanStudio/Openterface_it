export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Guide prodotto, FAQ, tutorial e download delle app sono su docs.openterface.com.",
    "homeMessage": "Tutorial, FAQ, download delle app e guide prodotto sono su docs.openterface.com.",
    "linkLabel": "Apri la documentazione ↗",
    "productMessage": "Specifiche dettagliate, guide di setup e FAQ sono su docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Resta aggiornato",
    "heading": "Ricevi per primo gli aggiornamenti su KVM-GO, KeyMod e Mini-KVM",
    "description": "Lanci prodotto, firmware e consigli IT pratici — al massimo una volta al mese. Niente spam, solo notizie utili dal team Openterface.",
    "benefitCrowdfunding": "Accesso anticipato a crowdfunding e preordini",
    "benefitGuides": "Guide di setup e note di rilascio delle app",
    "benefitUnsubscribe": "Annulla l’iscrizione in qualsiasi momento con un clic",
    "submitLabel": "Iscriviti agli aggiornamenti",
    "namePlaceholder": "Nome (facoltativo)",
    "emailPlaceholder": "Indirizzo e-mail *",
    "footnote": "Al massimo un’e-mail al mese. Annulla quando vuoi. Richieste: info@openterface.com"
  },
  "siteFooter": {
    "tagline": "Soluzioni KVM-over-USB ultracompatte per professionisti IT.",
    "productsHeading": "Prodotti",
    "keymodSeries": "Serie KeyMod",
    "kvmGoSeries": "Serie KVM-GO",
    "miniKvm": "Mini-KVM",
    "accessories": "Accessori",
    "resourcesHeading": "Risorse",
    "videos": "Video",
    "faqs": "FAQ",
    "apps": "App",
    "support": "Supporto",
    "newsletterTitle": "Newsletter",
    "newsletterDescription": "Aggiornamenti mensili su prodotti, firmware e consigli KVM.",
    "newsletterSubmit": "Iscriviti",
    "newsletterNamePlaceholder": "Nome",
    "newsletterEmailPlaceholder": "E-mail *",
    "newsletterFootnote": "Annulla quando vuoi.",
    "copyright": "Openterface. KVM-over-USB open source.",
    "privacy": "Privacy",
    "terms": "Termini"
  },
  "productLanding": {
    "downloadApp": "Scarica app",
    "backers": "Backer",
    "theProblem": "Il problema",
    "theSolution": "La soluzione",
    "hwSoftwareTitle": "Hardware + Software",
    "hwSoftwareSubtitle": "I prodotti Openterface funzionano al meglio con le nostre app host open source.",
    "hardware": "Hardware",
    "software": "Software",
    "swFallback": "Vedi TxA Shop per i dettagli sulla compatibilità degli accessori.",
    "keySpecs": "Specifiche principali",
    "useCases": "Casi d’uso",
    "documentation": "Documentazione",
    "ctaTitle": "Pronto per iniziare?",
    "ctaSubtitle": "Ordina l’hardware e scarica l’app Openterface per la tua piattaforma."
  }
};
