'use client';

import PageLayout from '@/components/PageLayout';
import { useLocale } from '@/contexts/LocaleContext';

export default function PrivacyPage() {
  const { t } = useLocale();

  return (
    <PageLayout minimal>
      <div className="flex-1 overflow-y-auto py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            {t.privacy.title}{' '}
            <span className="gradient-text">{t.privacy.titleHighlight}</span>
          </h1>

          <div className="space-y-8 text-sm">
            <p className="text-muted">
              {t.privacy.lastUpdated}: December 7, 2024
            </p>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.introduction.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.introduction.content1}
              </p>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.introduction.content2}
              </p>
              <div className="bg-white/5 p-4 rounded-lg space-y-3">
                <p className="text-muted leading-relaxed font-medium">
                  {t.privacy.sections.introduction.warning}
                </p>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.introduction.agreement}
                </p>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.introduction.contact}{' '}
                  <a
                    href="mailto: team@lunasync.app"
                    className="text-primary hover:underline"
                  >
                    {' '}
                    team@lunasync.app
                  </a>
                </p>
                <p className="text-muted leading-relaxed font-medium">
                  {t.privacy.sections.introduction.noSell}
                </p>
              </div>
            </section>

            {/* 2. What Information Do We Collect */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.collection.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.collection.intro}
              </p>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.privacy.sections.collection.deviceInfo.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.collection.deviceInfo.content}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.privacy.sections.collection.foodImages.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.collection.foodImages.content}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.privacy.sections.collection.healthData.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.collection.healthData.content}
                </p>
              </div>
            </section>

            {/* 3. How Do We Collect Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.howCollect.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.howCollect.intro}
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                {t.privacy.sections.howCollect.items.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.howCollect.autoCollect}
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                {t.privacy.sections.howCollect.autoItems.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </section>

            {/* 4. How Do We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.howUse.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.howUse.intro}
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                {t.privacy.sections.howUse.items.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </section>

            {/* 5. Cookie Policy */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.cookies.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.cookies.content1}
              </p>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.cookies.content2}
              </p>
            </section>

            {/* 6. How Do We Protect Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.protection.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.protection.content}
              </p>
            </section>

            {/* 7. Data Security Measures */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.security.title}
              </h2>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.privacy.sections.security.measures.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.security.measures.content1}
                </p>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.security.measures.content2}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.privacy.sections.security.breach.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.security.breach.content}
                </p>
              </div>
            </section>

            {/* 8. Disclosure of Personal Information */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.disclosure.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.disclosure.intro}
              </p>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.privacy.sections.disclosure.general.title}
                </h3>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  {t.privacy.sections.disclosure.general.items.map(
                    (item: string, index: number) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.privacy.sections.disclosure.other.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.disclosure.other.content}
                </p>
              </div>
            </section>

            {/* 9. AI Processing */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.ai.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.ai.intro}
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                {t.privacy.sections.ai.items.map(
                  (item: { title: string; content: string }, index: number) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.content}
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* 10. Data Retention */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.retention.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.retention.content1}
              </p>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.retention.content2}
              </p>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.retention.content3}
              </p>
            </section>

            {/* 11. Your California Privacy Rights */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.california.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.california.content1}
              </p>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.california.content2}
              </p>
            </section>

            {/* 12. COPPA Compliance */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.coppa.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.coppa.content}
              </p>
              <p className="text-muted leading-relaxed font-medium">
                {t.privacy.sections.coppa.warning}
              </p>
            </section>

            {/* 13. For European Users */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.gdpr.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.gdpr.intro}
              </p>

              <div className="space-y-3">
                <h3 className="font-medium">
                  {t.privacy.sections.gdpr.rights.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {t.privacy.sections.gdpr.rights.intro}
                </p>
                <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                  {t.privacy.sections.gdpr.rights.items.map(
                    (
                      item: { title: string; content: string },
                      index: number
                    ) => (
                      <li key={index}>
                        <strong>{item.title}:</strong> {item.content}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </section>

            {/* 14. Modifications */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.modifications.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.modifications.content}
              </p>
            </section>

            {/* 15. Contact */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">
                {t.privacy.sections.contact.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.contact.content}
              </p>
              <p className="text-muted leading-relaxed">
                {t.privacy.sections.contact.email}:{' '}
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
