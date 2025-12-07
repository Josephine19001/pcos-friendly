'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { locales, detectLocale, isRTL, type Locale } from '@/locales';
import en from '@/locales/en';

type Translations = typeof en;

interface LocaleContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const detectedLocale = detectLocale();
    setLocaleState(detectedLocale);
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    // Optionally save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('pcos-locale', newLocale);
    }
  };

  useEffect(() => {
    // Check for saved preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pcos-locale') as Locale | null;
      if (saved && saved in locales) {
        setLocaleState(saved);
      }
    }
  }, []);

  // Update document direction for RTL languages
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr';
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value: LocaleContextType = {
    locale,
    t: locales[locale],
    setLocale,
    isRTL: isRTL(locale),
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LocaleContext.Provider value={{ ...value, t: en }}>
        {children}
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
