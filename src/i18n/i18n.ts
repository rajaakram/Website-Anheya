import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import it from './locales/it.json';
import de from './locales/de.json';
import es from './locales/es.json';

const resources = {
    en: { translation: en },
    it: { translation: it },
    de: { translation: de },
    es: { translation: es }
};

const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage,
        fallbackLng: 'en',
        supportedLngs: ['en', 'it', 'de', 'es'],
        interpolation: {
            escapeValue: false, // React already escapes values from XSS
        }
    });

i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
});

export type Locale = 'en' | 'it' | 'de' | 'es';

export const SUPPORTED_LANGUAGES: { code: Locale; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default i18n;
