import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-32">


        {/* Main Title */}
        <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          {t('hero.titleLine1')}
          <span className="block text-white">
            {t('hero.titleLine2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/70 text-white font-medium transition-all duration-200 hover:bg-white/10 hover:border-white"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Calendar size={20} className="text-coral" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-2xl text-white">{t('hero.stat1Value')}</p>
              <p className="text-sm text-white/70">{t('hero.stat1Label')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Users size={20} className="text-emerald" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-2xl text-white">{t('hero.stat2Value')}</p>
              <p className="text-sm text-white/70">{t('hero.stat2Label')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MapPin size={20} className="text-golden" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-2xl text-white">{t('hero.stat3Value')}</p>
              <p className="text-sm text-white/70">{t('hero.stat3Label')}</p>
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
