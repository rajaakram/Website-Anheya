import { useEffect, useRef } from 'react';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import { useTranslation } from '../i18n/i18n';

const experiencesMeta = [
  {
    id: 1,
    image: './images/agnone-cilento.jpg',
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    image: './images/paestum-temples.jpg',
    rating: 4.8,
    featured: false,
  },
  {
    id: 3,
    image: './images/amalfi-coast.jpg',
    rating: 5.0,
    featured: false,
  },
];

const Experiences = () => {
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
      id="experiences"
      ref={sectionRef}
      className="relative section-padding bg-cream"
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#E8B84B]/10 text-[#D94F3E] text-sm font-medium mb-4">
            {t('experiences.badge')}
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            {t('experiences.titleLine1')}
            <span className="text-transparent bg-clip-text gradient-warm">
              {t('experiences.titleLine2')}
            </span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-deep-olive text-lg leading-relaxed">
            {t('experiences.subtitle')}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiencesMeta.map((exp, index) => (
            <div
              key={exp.id}
              className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div
                className={`card-organic h-full flex flex-col ${exp.featured ? 'ring-2 ring-[#E8B84B]' : ''
                  }`}
              >
                {/* Featured Badge */}
                {exp.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#E8B84B] text-white text-xs font-semibold">
                      {t('experiences.mostPopular')}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-56 -mx-8 -mt-8 mb-6 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={t(`experiences.items.${index}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-deep-olive mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-coral" />
                      {t(`experiences.items.${index}.duration`)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} className="text-emerald" />
                      {t(`experiences.items.${index}.groupSize`)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-golden fill-golden" />
                      {exp.rating}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                    {t(`experiences.items.${index}.title`)}
                  </h3>

                  <p className="text-deep-olive text-sm leading-relaxed mb-4 flex-1">
                    {t(`experiences.items.${index}.description`)}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#D8D5D0]/50">
                    <span className="font-heading font-bold text-lg text-charcoal">
                      {t(`experiences.items.${index}.price`)}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[#2A9B9B] font-medium text-sm hover:text-[#2B4FA0] transition-colors group/link"
                    >
                      {t('experiences.learnMore')}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 text-center mt-16">
          <p className="text-deep-olive mb-4">
            {t('experiences.customCta')}
          </p>
          <a href="#contact" className="btn-secondary">
            {t('experiences.customButton')}
          </a>
        </div>
      </div>

      {/* Decorative Blob */}
      <div
        className="absolute top-20 right-0 w-64 h-64 rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(232, 184, 75, 0.2), transparent)',
        }}
      />

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Experiences;
