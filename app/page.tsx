'use client';

import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import IPhoneFrame from '@/components/IPhoneFrame';
import { useLocale } from '@/contexts/LocaleContext';
import {
  Gauge,
  Candy,
  Wheat,
  Flame,
  HeartPulse,
  Factory,
} from 'lucide-react';

export default function Home() {
  const { t } = useLocale();
  const [activeScreen, setActiveScreen] = useState(0);

  const features = [
    { name: t.features.glycemicIndex, Icon: Gauge },
    { name: t.features.sugarContent, Icon: Candy },
    { name: t.features.fiberContent, Icon: Wheat },
    { name: t.features.inflammatoryScore, Icon: Flame },
    { name: t.features.hormoneImpact, Icon: HeartPulse },
    { name: t.features.processingLevel, Icon: Factory },
  ];

  const screens = [
    { src: '/demo-scan.jpg', alt: 'Scan food with camera', badge: t.badges.scan },
    { src: '/demo-result.jpg', alt: 'View analysis results', badge: t.badges.result },
    { src: '/my-scans.jpg', alt: 'Track your scans', badge: t.badges.save },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <PageLayout>
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8">
        {/* Left side - Text content */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight mb-6">
            {t.hero.title}
            <br />
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-muted text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
            {t.hero.subtitle}
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
            {features.map(({ name, Icon }) => (
              <div key={name} className="feature-item">
                <span className="feature-icon">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm text-foreground">{name}</span>
              </div>
            ))}
          </div>

          {/* CTA Button - App Store style */}
          <a href="https://apps.apple.com/app/id6756167013" className="btn-primary">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            {t.cta.appStore}
          </a>

          {/* App store badges hint */}
          <p className="text-xs text-muted mt-4">
            {t.cta.availableOn}
          </p>
        </div>

        {/* Right side - Phone mockups */}
        <div className="relative flex items-center justify-center">
          {/* Main phone */}
          <div className="relative z-10">
            <IPhoneFrame
              src={screens[activeScreen].src}
              alt={screens[activeScreen].alt}
              width={240}
            />

            {/* Floating badge - updates with screen */}
            <div
              key={activeScreen}
              className="floating-badge -bottom-4 left-1/2 -translate-x-1/2 animate-fade-in"
            >
              <span className="text-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-sm font-medium">
                {screens[activeScreen].badge}
              </span>
            </div>
          </div>

          {/* Secondary phone - visible on larger screens */}
          <div className="hidden md:block absolute -right-20 top-8 z-0 opacity-60 scale-90">
            <IPhoneFrame
              src={screens[(activeScreen + 1) % screens.length].src}
              alt="App preview"
              width={200}
            />
          </div>
        </div>
      </div>

      {/* Screen indicators */}
      <div className="flex justify-center gap-2 pb-4">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveScreen(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeScreen
                ? 'bg-primary w-6'
                : 'bg-primary/30'
            }`}
            aria-label={`View screen ${index + 1}`}
          />
        ))}
      </div>
    </PageLayout>
  );
}
