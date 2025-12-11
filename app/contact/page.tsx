'use client';

import PageLayout from '@/components/PageLayout';
import { useLocale } from '@/contexts/LocaleContext';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <PageLayout minimal={true}>
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {t.contact.title}{' '}
              <span className="text-primary">{t.contact.titleHighlight}</span>
            </h1>
            <p className="text-muted">{t.contact.description}</p>
          </div>

          <a
            href="mailto:team@lunasync.app"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <Mail className="w-5 h-5" />
            {t.contact.emailButton}
          </a>

          <p className="mt-6 text-sm text-muted">{t.contact.emailAddress}</p>
        </div>
      </div>
    </PageLayout>
  );
}
