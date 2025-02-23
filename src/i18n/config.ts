import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './en.json';
import jaTranslation from './ja.json';
import { TranslationType } from '../types/i18n';

const resources: { [key: string]: { translation: TranslationType } } = {
  en: {
    translation: enTranslation as TranslationType
  },
  ja: {
    translation: jaTranslation as TranslationType
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ja",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;
