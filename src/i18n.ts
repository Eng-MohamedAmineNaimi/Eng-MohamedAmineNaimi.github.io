import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationFR from '../src/locales/fr/translations.json';
import translationEN from '../src/locales/en/translations.json';
import translationAR from '../src/locales/ar/translations.json';

i18n
  .use(LanguageDetector)  
  .use(initReactI18next)  
  .init({
    resources: {
      fr: { translation: translationFR },
      en: { translation: translationEN },
      ar: { translation: translationAR },
    },
    fallbackLng: 'fr',  
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
