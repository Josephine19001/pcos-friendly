import en from './en';
import es from './es';
import fr from './fr';
import ar from './ar';
import pt from './pt';
import hi from './hi';
import tr from './tr';
import de from './de';
import it from './it';

export type Locale = 'en' | 'es' | 'fr' | 'ar' | 'pt' | 'hi' | 'tr' | 'de' | 'it';

export const locales: Record<Locale, typeof en> = {
  en,
  es,
  fr,
  ar,
  pt,
  hi,
  tr,
  de,
  it,
};

export const rtlLocales: Locale[] = ['ar'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Espanol',
  fr: 'Francais',
  ar: 'العربية',
  pt: 'Portugues',
  hi: 'हिन्दी',
  tr: 'Turkce',
  de: 'Deutsch',
  it: 'Italiano',
};

export function getLocale(locale: string): typeof en {
  if (locale in locales) {
    return locales[locale as Locale];
  }
  // Try to match language code (e.g., 'en-US' -> 'en')
  const lang = locale.split('-')[0];
  if (lang in locales) {
    return locales[lang as Locale];
  }
  return en;
}

export function isRTL(locale: string): boolean {
  const lang = locale.split('-')[0] as Locale;
  return rtlLocales.includes(lang);
}

export function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';

  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en';
  const lang = browserLang.split('-')[0];

  if (lang in locales) {
    return lang as Locale;
  }

  return 'en';
}

export default locales;
