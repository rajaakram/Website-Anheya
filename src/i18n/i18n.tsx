import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

import en from './locales/en.json';
import it from './locales/it.json';
import de from './locales/de.json';
import es from './locales/es.json';

export type Locale = 'en' | 'it' | 'de' | 'es';

const locales: Record<Locale, Record<string, unknown>> = { en, it, de, es };

const STORAGE_KEY = 'paestum-holidays-lang';

function detectBrowserLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && stored in locales) return stored as Locale;

  const browserLang = navigator.language.split('-')[0].toLowerCase();
  if (browserLang in locales) return browserLang as Locale;

  return 'en';
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// Nested key lookup: t('hero.title') → locales[locale].hero.title
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path; // Return key as fallback
    }
  }
  return typeof current === 'string' ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectBrowserLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, []);

  const t = (key: string): string => {
    return getNestedValue(locales[locale] as Record<string, unknown>, key);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

export const SUPPORTED_LANGUAGES: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];
