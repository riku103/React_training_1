import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './en.json';
import jaTranslation from './ja.json';

const resources = {
  en: {
    translation: enTranslation
  },
  ja: {
    translation: jaTranslation
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
