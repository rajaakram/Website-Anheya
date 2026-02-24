import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './i18n/locales/en.json';
import it from './i18n/locales/it.json';
import de from './i18n/locales/de.json';
import es from './i18n/locales/es.json';

const resources = {
    en: { translation: en },
    it: { translation: it },
    de: { translation: de },
    es: { translation: es }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: ['en', 'it', 'de', 'es'],
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
