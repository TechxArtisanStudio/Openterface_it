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
  }
};
