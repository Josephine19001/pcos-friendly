'use client';

import PageLayout from '@/components/PageLayout';
import { useLocale } from '@/contexts/LocaleContext';

export default function TermsPage() {
  const { t } = useLocale();

  return (
    <PageLayout minimal>
      <div className="flex-1 overflow-y-auto py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            {t.terms.title}{' '}
            <span className="gradient-text">{t.terms.titleHighlight}</span>
          </h1>

          <div className="space-y-8 text-sm">
            <p className="text-muted">
              {t.terms.lastUpdated}: December 7, 2024
            </p>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.introduction.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.introduction.content1}
              </p>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.introduction.content2}
              </p>
              <div className="bg-white/5 p-4 rounded-lg space-y-3">
                <p className="text-muted leading-relaxed font-medium">
                  {t.terms.sections.introduction.warning}
                </p>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.introduction.agreement}
                </p>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.introduction.contact}{' '}
                  <a
                    href="mailto: team@lunasync.app"
                    className="text-primary hover:underline"
                  >
                    {' '}
                    team@lunasync.app
                  </a>
                </p>
              </div>
            </section>

            {/* 2. Eligibility */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.eligibility.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.eligibility.intro}
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                {t.terms.sections.eligibility.items.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </section>

            {/* 3. Description of Services */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.services.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.services.intro}
              </p>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.services.foodAnalysis.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.services.foodAnalysis.content}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.services.healthMetrics.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.services.healthMetrics.content}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.services.scanHistory.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.services.scanHistory.content}
                </p>
              </div>
            </section>

            {/* 4. Important Health Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.disclaimer.title}
              </h2>
              <div className="bg-white/5 p-4 rounded-lg space-y-3">
                <p className="text-muted leading-relaxed font-medium">
                  {t.terms.sections.disclaimer.warning}
                </p>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.disclaimer.content1}
                </p>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.disclaimer.content2}
                </p>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  {t.terms.sections.disclaimer.professionals.map(
                    (item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.disclaimer.content3}
                </p>
              </div>
            </section>

            {/* 5. User Accounts */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.accounts.title}
              </h2>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.accounts.creation.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.accounts.creation.content}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.accounts.security.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.accounts.security.content}
                </p>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  {t.terms.sections.accounts.security.items.map(
                    (item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.accounts.termination.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.accounts.termination.content}
                </p>
              </div>
            </section>

            {/* 6. User Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.responsibilities.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.responsibilities.intro}
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                {t.terms.sections.responsibilities.items.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </section>

            {/* 7. Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.intellectualProperty.title}
              </h2>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.intellectualProperty.ourIP.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.intellectualProperty.ourIP.content}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.intellectualProperty.license.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.intellectualProperty.license.content}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.intellectualProperty.yourContent.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.intellectualProperty.yourContent.content}
                </p>
              </div>
            </section>

            {/* 8. Privacy */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.privacy.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.privacy.content}
              </p>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.privacy.link}{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  {t.footer.privacy}
                </a>
                .
              </p>
            </section>

            {/* 9. Disclaimers */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.disclaimers.title}
              </h2>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.disclaimers.warranties.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.disclaimers.warranties.content}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.terms.sections.disclaimers.liability.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.terms.sections.disclaimers.liability.content}
                </p>
              </div>
            </section>

            {/* 10. Changes to Terms */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.changes.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.changes.content}
              </p>
            </section>

            {/* 11. Contact Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.terms.sections.contact.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.contact.content}
              </p>
              <p className="text-muted leading-relaxed">
                {t.terms.sections.contact.email}:{' '}
                <a
                  href="mailto: team@lunasync.app"
                  className="text-primary hover:underline"
                >
                  {' '}
                  team@lunasync.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
