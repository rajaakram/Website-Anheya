import { useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import { useTranslation } from '../i18n/i18n';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-sunrise"
    >
      {/* Floating Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-blob"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(27, 140, 90, 0.12), transparent)',
            top: '-100px',
            right: '-150px',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(232, 184, 75, 0.1), transparent)',
            bottom: '10%',
            left: '-100px',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(43, 79, 160, 0.08), transparent)',
            top: '30%',
            right: '10%',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-32">
        {/* Badge */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-deep-olive text-sm font-medium">
            <MapPin size={16} className="text-coral" />
            {t('hero.badge')}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight mb-6">
          {t('hero.titleLine1')}
          <span className="block text-transparent bg-clip-text gradient-warm">
            {t('hero.titleLine2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-deep-olive max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#experiences" className="btn-primary group">
            {t('hero.ctaPrimary')}
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#2A9B9B] text-[#2A9B9B] font-medium transition-all duration-200 hover:bg-[#2A9B9B]/5 hover:border-[#2B4FA0] hover:text-[#2B4FA0]"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <Calendar size={20} className="text-coral" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-2xl text-charcoal">{t('hero.stat1Value')}</p>
              <p className="text-sm text-deep-olive">{t('hero.stat1Label')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <Users size={20} className="text-emerald" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-2xl text-charcoal">{t('hero.stat2Value')}</p>
              <p className="text-sm text-deep-olive">{t('hero.stat2Label')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <MapPin size={20} className="text-golden" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-2xl text-charcoal">{t('hero.stat3Value')}</p>
              <p className="text-sm text-deep-olive">{t('hero.stat3Label')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 lg:h-24"
        >
          <path
            d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z"
            fill="#FEFBF7"
            opacity="1"
          />
        </svg>
      </div>

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
