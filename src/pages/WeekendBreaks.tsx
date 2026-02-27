import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Check } from 'lucide-react';

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
};

const WaveDivider = ({ flip = false, color = '#FEFBF7' }: { flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden ${flip ? 'transform rotate-180' : ''}`}>
    <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 lg:h-24">
      <path d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z" fill={color} opacity="1" />
    </svg>
  </div>
);

const WeekendBreaks = () => {
  const heroRef = useScrollAnimation();
  const packagesRef = useScrollAnimation();

  const packages = [
    {
      title: 'Amalfi Coast Getaway',
      duration: '2 days',
      image: '/images/amalfi-coast.jpg',
      price: '€450',
      highlights: [
        'Coastal drive with panoramic views',
        'Stay in Positano or Amalfi',
        'Sunset dinner overlooking the sea',
        'Free time for shopping and exploring',
      ],
    },
    {
      title: 'Cilento Nature Escape',
      duration: '3 days',
      image: '/images/cilento-panoramic.jpg',
      price: '€580',
      highlights: [
        'Cilento National Park hiking',
        'Stay in historic countryside villa',
        'Buffalo mozzarella farm visit',
        'Traditional cooking experience',
      ],
    },
    {
      title: 'Cultural Immersion',
      duration: '2 days',
      image: '/images/paestum-temples.jpg',
      price: '€420',
      highlights: [
        'Paestum temples guided tour',
        'Visit to local artisan workshops',
        'Authentic family dinner',
        'Traditional music evening',
      ],
    },
    {
      title: 'Food & Wine Weekend',
      duration: '3 days',
      image: '/images/vineyard-vesuvius.webp',
      price: '€650',
      highlights: [
        'Winery tours and tastings',
        'Cooking class with local chef',
        'Market tour with Teresa',
        'Gourmet dining experiences',
      ],
    },
    {
      title: 'Coastal Adventure',
      duration: '2-3 days',
      image: '/images/marina-camerota.jpg',
      price: '€520',
      highlights: [
        'Boat tour along Cilento coast',
        'Swimming in hidden coves',
        'Seafood dinner by the water',
        'Beach time and relaxation',
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/ravello-gardens.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Short Breaks
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Weekend <span className="text-[#C73525]">Escapes</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Perfect short getaways to experience the magic of Cilento. 2-3 day packages designed for maximum enjoyment.
          </p>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Packages Grid */}
      <section ref={packagesRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="card-organic h-full flex flex-col">
                  <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)' }}
                    />
                  </div>

                  <div className="flex items-center gap-4 text-sm text-deep-olive mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-coral" />
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">{pkg.title}</h3>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-charcoal mb-2">Highlights:</p>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-deep-olive">
                          <Check size={14} className="text-[#0F8A50] mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#D8D5D0]/50 mt-auto">
                    <div>
                      <span className="text-sm text-deep-olive">From</span>
                      <span className="font-heading font-bold text-xl text-charcoal ml-2">{pkg.price}</span>
                    </div>
                    <Link to="/contact" className="btn-primary text-sm py-2 px-4">
                      Book Weekend
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 text-center mt-16 p-8 bg-[#F5EFE0] rounded-3xl">
            <h3 className="font-heading font-semibold text-2xl text-charcoal mb-4">
              Need a longer stay?
            </h3>
            <p className="text-deep-olive mb-6 max-w-xl mx-auto">
              We can extend any weekend package or create a custom multi-day itinerary.
              Contact Teresa to plan your perfect Cilento escape.
            </p>
            <Link to="/contact" className="btn-secondary">
              Plan Your Stay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeekendBreaks;
