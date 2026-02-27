import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  // We need to get the FAQ items count from the locale.
  // Using a fixed count of 8 matching our locale files.
  const faqCount = 8;

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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

      <div className="container-padding max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#C73525]/10 text-[#C73525] text-sm font-medium mb-4">
            {t('faq.badge')}
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            {t('faq.titleLine1')}
            <span className="text-transparent bg-clip-text gradient-warm">
              {t('faq.titleLine2')}
            </span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-deep-olive text-lg leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {Array.from({ length: faqCount }).map((_, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <div
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                  ? 'shadow-lg ring-2 ring-[#F0C850]/30'
                  : 'shadow-sm hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading font-semibold text-charcoal pr-4">
                    {t(`faq.items.${index}.question`)}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                      ? 'bg-[#F0C850] text-white rotate-0'
                      : 'bg-[#F0C850]/10 text-[#F0C850]'
                      }`}
                  >
                    {openIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-deep-olive leading-relaxed">
                      {t(`faq.items.${index}.answer`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 text-center mt-12">
          <p className="text-deep-olive mb-4">
            {t('faq.contactCta')}
          </p>
          <a href="#contact" className="btn-primary">
            {t('faq.contactButton')}
          </a>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div
        className="absolute top-40 -left-20 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(217, 79, 62, 0.15), transparent)',
        }}
      />
      <div
        className="absolute bottom-40 -right-20 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(43, 79, 160, 0.1), transparent)',
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

export default FAQ;
