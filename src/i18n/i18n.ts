import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: ['en', 'it', 'de', 'es'],
        interpolation: {
            escapeValue: false, // React already escapes values from XSS
        },
        detection: {
            // Prioritize explicit user language setting from localStorage,
            // fallback to navigator only heavily heavily if localStorage missing
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        }
    });

export type Locale = 'en' | 'it' | 'de' | 'es';

export const SUPPORTED_LANGUAGES: { code: Locale; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default i18n;
