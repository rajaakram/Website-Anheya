import { useEffect, useRef } from 'react';
import { Heart, Leaf, Users, Award } from 'lucide-react';
import { useTranslation } from '../i18n/i18n';

const valueIcons = [
  { icon: Heart, color: 'coral' },
  { icon: Leaf, color: 'emerald' },
  { icon: Users, color: 'golden' },
  { icon: Award, color: 'royal' },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding bg-warm-sand overflow-hidden"
    >
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z"
            fill="#FEFBF7"
            opacity="1"
          />
        </svg>
      </div>

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 relative">
            {/* Main Image with Blob Mask */}
            <div className="relative">
              <div className="blob-mask overflow-hidden">
                <img
                  src="./images/cilento-panoramic.jpg"
                  alt="Cilento countryside with olive groves"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl p-6 shadow-xl max-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center">
                    <Heart size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-charcoal">{t('about.floatingCardValue')}</p>
                    <p className="text-xs text-deep-olive">{t('about.floatingCardLabel')}</p>
                  </div>
                </div>
                <p className="text-sm text-deep-olive italic">
                  {t('about.floatingCardQuote')}
                </p>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="absolute -top-8 -left-8 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg hidden lg:block">
              <img
                src="./images/vineyard-vesuvius.webp"
                alt="Olive grove"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#1B8C5A]/10 text-[#1B8C5A] text-sm font-medium mb-4">
              {t('about.badge')}
            </span>

            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              {t('about.titleLine1')}
              <span className="text-transparent bg-clip-text gradient-warm">
                {t('about.titleLine2')}
              </span>
            </h2>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-4 text-deep-olive leading-relaxed mb-8">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>

            {/* Values Grid */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 grid grid-cols-2 gap-4">
              {valueIcons.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${value.color === 'coral'
                      ? 'bg-[#D94F3E]/10'
                      : value.color === 'emerald'
                        ? 'bg-[#1B8C5A]/10'
                        : value.color === 'golden'
                          ? 'bg-[#E8B84B]/10'
                          : 'bg-[#2B4FA0]/10'
                      }`}
                  >
                    <value.icon
                      size={18}
                      className={
                        value.color === 'coral'
                          ? 'text-coral'
                          : value.color === 'emerald'
                            ? 'text-emerald'
                            : value.color === 'golden'
                              ? 'text-golden'
                              : 'text-royal'
                      }
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-charcoal mb-1">
                      {t(`about.values.${index}.title`)}
                    </h4>
                    <p className="text-xs text-deep-olive leading-relaxed">
                      {t(`about.values.${index}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 Q300,80 600,40 T1200,40 L1200,80 L0,80 Z"
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

export default About;
