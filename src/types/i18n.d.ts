type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: TObj[TKey] extends object
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & (string | number)];

export interface TranslationType {
  header: {
    home: string;
    about: string;
    features: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  features: {
    title: string;
    items: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      confirmEmail: string;
      phone: string;
      postalCode: string;
      address: string;
      message: string;
      submit: string;
    };
  };
}

export type TranslationKey = RecursiveKeyOf<TranslationType>;

export type TranslationType = {
  [key: string]: string | TranslationType;
};
