import React, { createContext, useContext, useState, type ReactNode } from 'react';

import en from './locales/en.json';
import it from './locales/it.json';
import de from './locales/de.json';
import es from './locales/es.json';

// ─── Types ───────────────────────────────────────────────────────────
export type Locale = 'en' | 'it' | 'de' | 'es';

// ─── Translations Map ────────────────────────────────────────────────
const translations: Record<Locale, Record<string, unknown>> = { en, it, de, es };

// ─── Supported Languages (for rendering pickers) ────────────────────
export const SUPPORTED_LANGUAGES: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

// ─── Helper: read initial locale from localStorage ───────────────────
const STORAGE_KEY = 'fd-lang';

function readSavedLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'it' || saved === 'de' || saved === 'es') {
      return saved;
    }
  } catch {
    // ignore
  }
  return 'en';
}

// ─── Helper: nested key lookup  t('hero.title') → obj.hero.title ─────
function resolve(obj: unknown, path: string): string {
  const parts = path.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur !== null && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return path; // fallback: return the key itself
    }
  }
  if (typeof cur === 'string') return cur;
  if (Array.isArray(cur)) return JSON.stringify(cur);
  return path;
}

// ─── Context ─────────────────────────────────────────────────────────
interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

// ─── Provider ────────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleRaw] = useState<Locale>(readSavedLocale);

  function changeLocale(next: Locale) {
    setLocaleRaw(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
    document.documentElement.lang = next;
  }

  function t(key: string): string {
    return resolve(translations[locale], key);
  }

  const value: I18nContextValue = { locale, setLocale: changeLocale, t };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// ─── Hook ────────────────────────────────────────────────────────────
export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used inside <LanguageProvider>');
  return ctx;
}
