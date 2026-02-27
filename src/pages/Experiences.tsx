import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Check } from 'lucide-react';

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

const Experiences = () => {
  const heroRef = useScrollAnimation();
  const packagesRef = useScrollAnimation();

  const packages = [
    {
      title: 'Med(eat)erranean',
      description: 'A culinary journey through the flavors of Cilento. Visit buffalo mozzarella farms, learn traditional pasta making from local nonnas, and savor the finest wines from regional vineyards.',
      image: '/images/pasta-making.jpg',
      duration: '5 days',
      groupSize: '4-8 people',
      rating: 4.9,
      priceFrom: '€1,200',
      highlights: ['Buffalo mozzarella farm visit', 'Traditional cooking classes', 'Wine tasting tours', 'Local market tours'],
      silver: { price: '€1,200', includes: ['Standard accommodation', 'Group cooking class', '2 wine tastings'] },
      gold: { price: '€1,800', includes: ['Luxury villa stay', 'Private chef experience', 'Exclusive winery access', 'Personal guide'] },
    },
    {
      title: 'Sailing South',
      description: 'Explore the stunning Amalfi Coast and hidden coves of Cilento by boat. Discover secret beaches, swim in crystal-clear waters, and enjoy the Mediterranean from a unique perspective.',
      image: '/images/sailing-turquoise.jpeg',
      duration: '7 days',
      groupSize: '6-10 people',
      rating: 4.8,
      priceFrom: '€1,800',
      highlights: ['Amalfi Coast boat tour', 'Hidden cove swimming', 'Coastal village visits', 'Sunset dinners'],
      silver: { price: '€1,800', includes: ['Boat excursions', 'Beach picnics', 'Coastal walks'] },
      gold: { price: '€2,800', includes: ['Private yacht charter', 'Gourmet onboard dining', 'Exclusive beach access', 'Helicopter tour option'] },
    },
    {
      title: 'Nature & Adventure',
      description: 'Hike through Cilento National Park, explore ancient trails, and connect with nature. Perfect for outdoor enthusiasts seeking authentic experiences off the beaten path.',
      image: '/images/cilento-panoramic.jpg',
      duration: '4 days',
      groupSize: '4-8 people',
      rating: 4.9,
      priceFrom: '€900',
      highlights: ['Cilento National Park hiking', 'Wildlife spotting', 'Ancient trail exploration', 'Mountain viewpoints'],
      silver: { price: '€900', includes: ['Guided hikes', 'Park entrance fees', 'Basic accommodation'] },
      gold: { price: '€1,400', includes: ['Expert mountain guides', 'Luxury mountain lodge', 'Gourmet trail meals', 'Photography sessions'] },
    },
    {
      title: 'Culture & History',
      description: 'Discover Greek temples, Roman ruins, and the rich heritage of Campania. Walk through history at Paestum, Pompeii, and experience the living culture of ancient Italy.',
      image: '/images/paestum-temples.jpg',
      duration: '6 days',
      groupSize: '6-12 people',
      rating: 5.0,
      priceFrom: '€1,500',
      highlights: ['Paestum Greek temples', 'Pompeii archaeological site', 'Expert historian guides', 'Museum visits'],
      silver: { price: '€1,500', includes: ['Guided tours', 'Museum entries', 'Standard hotel'] },
      gold: { price: '€2,200', includes: ['Private archaeologist guide', 'After-hours access', 'Luxury accommodation', 'Exclusive experiences'] },
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/cilento-sunset.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Our Collection
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Our <span className="text-[#C73525]">Experiences</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Curated journeys designed to immerse you in the authentic beauty, culture, and flavors of Cilento and Campania.
          </p>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Packages Grid */}
      <section ref={packagesRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="card-organic h-full flex flex-col">
                  <div className="relative h-64 -mx-8 -mt-8 mb-6 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)' }}
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star size={14} className="text-[#F0C850] fill-[#F0C850]" />
                      <span className="text-sm font-medium text-charcoal">{pkg.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-deep-olive mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-coral" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} className="text-emerald" />
                      {pkg.groupSize}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-2xl text-charcoal mb-3">{pkg.title}</h3>
                  <p className="text-deep-olive leading-relaxed mb-4">{pkg.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-charcoal mb-2">Highlights:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {pkg.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-deep-olive">
                          <Check size={14} className="text-[#0F8A50]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#F5EFE0] rounded-xl">
                    <div>
                      <p className="text-xs text-deep-olive mb-1">Argento (Silver)</p>
                      <p className="font-heading font-bold text-lg text-charcoal">{pkg.silver.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-deep-olive mb-1">Oro (Gold)</p>
                      <p className="font-heading font-bold text-lg text-charcoal">{pkg.gold.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#D8D5D0]/50 mt-auto">
                    <span className="text-sm text-deep-olive">From <span className="font-heading font-bold text-xl text-charcoal">{pkg.priceFrom}</span></span>
                    <Link to="/contact" className="btn-primary text-sm py-3 px-6">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 text-center mt-16 p-8 bg-[#F5EFE0] rounded-3xl">
            <h3 className="font-heading font-semibold text-2xl text-charcoal mb-4">
              Looking for something custom?
            </h3>
            <p className="text-deep-olive mb-6 max-w-xl mx-auto">
              We create personalized itineraries tailored to your interests, timeline, and budget.
              Let us design your perfect Cilento experience.
            </p>
            <Link to="/contact" className="btn-secondary">
              Request Custom Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
