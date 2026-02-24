import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const testimonialsMeta = [
  { id: 1, image: '/images/testimonial-1.jpg', rating: 5 },
  { id: 2, image: '/images/testimonial-2.jpg', rating: 5 },
  { id: 3, image: '/images/testimonial-3.jpg', rating: 5 },
];

const Testimonials = () => {
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
      id="testimonials"
      ref={sectionRef}
      className="relative section-padding bg-cream overflow-hidden"
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#2B4FA0]/10 text-[#2B4FA0] text-sm font-medium mb-4">
            {t('testimonials.badge')}
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            {t('testimonials.titleLine1')}
            <span className="text-transparent bg-clip-text gradient-warm">
              {t('testimonials.titleLine2')}
            </span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-deep-olive text-lg leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsMeta.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full gradient-warm flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-golden fill-golden"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-charcoal leading-relaxed mb-6 font-accent italic">
                  "{t(`testimonials.items.${index}.quote`)}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#D8D5D0]/50">

                  <div>
                    <p className="font-heading font-semibold text-charcoal">
                      {t(`testimonials.items.${index}.name`)}
                    </p>
                    <p className="text-sm text-deep-olive">
                      {t(`testimonials.items.${index}.role`)}
                    </p>
                    <p className="text-xs text-olive">
                      {t(`testimonials.items.${index}.location`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm">

            <span className="text-sm text-deep-olive">
              <strong className="text-charcoal">5000+</strong> {t('testimonials.happyTravelers')}
            </span>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-golden fill-golden"
                />
              ))}
            </div>
            <span className="text-sm text-deep-olive">
              <strong className="text-charcoal">4.9/5</strong> {t('testimonials.averageRating')}
            </span>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#1B8C5A]/10 flex items-center justify-center">
              <Award size={14} className="text-emerald" />
            </div>
            <span className="text-sm text-deep-olive">
              <strong className="text-charcoal">TripAdvisor</strong> {t('testimonials.tripAdvisor')}
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-20 left-10 w-32 h-32 rounded-full animate-float opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232, 184, 75, 0.3), transparent)',
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full animate-float-slow opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(27, 140, 90, 0.2), transparent)',
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

// Award icon component since it's not imported from lucide-react
const Award = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export default Testimonials;
