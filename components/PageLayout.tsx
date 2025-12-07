'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { useLocale } from '@/contexts/LocaleContext';
import { localeNames, type Locale } from '@/locales';

interface PageLayoutProps {
  children: React.ReactNode;
  fixed?: boolean;
  minimal?: boolean;
}

export default function PageLayout({
  children,
  fixed = false,
  minimal = false
}: PageLayoutProps) {
  const { t, locale, setLocale } = useLocale();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <div className={fixed ? 'page-container-fixed' : 'page-container'}>
      {/* Header */}
      {minimal ? (
        <header className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <Logo size={32} />
          </Link>
        </header>
      ) : (
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={36} />
            <span className="font-medium text-foreground">{t.nav.appName}</span>
          </Link>
          <a
            href="https://apps.apple.com/app/id6756167013"
            className="btn-header"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            {t.nav.appStore}
          </a>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer - only show if not minimal */}
      {!minimal && (
        <footer className="mt-auto flex items-center justify-center gap-6 pt-6">
          <Link href="/privacy" className="link-muted">
            {t.footer.privacy}
          </Link>
          <Link href="/terms" className="link-muted">
            {t.footer.terms}
          </Link>
          <a
            href="https://www.tiktok.com/@pcos_friendlyy?_r=1&_t=ZP-921t9MPYtiQ"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted hover:text-primary transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/pcos_friendlyy?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="link-muted hover:text-primary transition-colors flex items-center gap-1"
              aria-label="Select language"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-xs uppercase">{locale}</span>
            </button>
            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-primary/10 py-2 min-w-[140px] z-50">
                  {(Object.keys(localeNames) as Locale[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLocale(lang);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/10 transition-colors ${
                        locale === lang ? 'text-primary font-medium' : 'text-foreground'
                      }`}
                    >
                      {localeNames[lang]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </footer>
      )}
    </div>
  );
}
