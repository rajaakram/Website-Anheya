import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Check } from 'lucide-react';

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

const DayTours = () => {
  const heroRef = useScrollAnimation();
  const toursRef = useScrollAnimation();

  const tours = [
    {
      title: 'Paestum Temples Tour',
      description: 'Explore the magnificent Greek temples of Paestum, one of the best-preserved ancient sites in Italy. Visit the Temple of Neptune, Temple of Hera, and the archaeological museum.',
      image: '/images/temple-athena.jpg',
      duration: '4 hours',
      difficulty: 'Easy',
      meetingPoint: 'Paestum Archaeological Site',
      price: '€89',
      includes: ['Expert guide', 'Museum entry', 'Transportation', 'Light refreshments'],
      gallery: ['/images/paestum-temples.jpg', '/images/temple-athena.jpg'],
    },
    {
      title: 'Amalfi Coast Discovery',
      description: 'Experience the dramatic beauty of the Amalfi Coast. Visit Positano, Amalfi town, and enjoy panoramic views from Ravello gardens.',
      image: '/images/amalfi-coast.jpg',
      duration: '8 hours',
      difficulty: 'Moderate',
      meetingPoint: 'Naples or Salerno',
      price: '€149',
      includes: ['Private driver', 'Coastal viewpoints', 'Free time in Positano', 'Lunch recommendations'],
      gallery: ['/images/amalfi-coast.jpg', '/images/ravello-gardens.jpg'],
    },
    {
      title: 'Cilento Boat Tour',
      description: 'Sail along the stunning Cilento coastline. Swim in turquoise waters, explore hidden coves, and enjoy the Mediterranean from a unique perspective.',
      image: '/images/marina-camerota.jpg',
      duration: '6 hours',
      difficulty: 'Easy',
      meetingPoint: 'Marina di Camerota',
      price: '€129',
      includes: ['Boat rental', 'Skipper', 'Swimming stops', 'Snorkeling equipment', 'Light lunch'],
      gallery: ['/images/marina-camerota.jpg', '/images/acciaroli-port.jpg'],
    },
    {
      title: 'E-Bike Vineyard Tour',
      description: 'Pedal through terraced vineyards and olive groves on electric bikes. Visit local wineries and taste exceptional Campania wines.',
      image: '/images/vineyard-vesuvius.webp',
      duration: '5 hours',
      difficulty: 'Moderate',
      meetingPoint: 'Cilento Countryside',
      price: '€109',
      includes: ['E-bike rental', 'Wine tastings', 'Local guide', 'Farm visit'],
      gallery: ['/images/vineyard-vesuvius.webp', '/images/pisciotta-village.jpeg'],
    },
    {
      title: 'Pompeii & Vesuvius',
      description: 'Walk through the ancient streets of Pompeii frozen in time, then ascend Mount Vesuvius for breathtaking views of the Bay of Naples.',
      image: '/images/pompeii-vesuvius.jpg',
      duration: '8 hours',
      difficulty: 'Moderate to Difficult',
      meetingPoint: 'Naples or Pompeii',
      price: '€169',
      includes: ['Archaeologist guide', 'Pompeii entry', 'Vesuvius entry', 'Transportation'],
      gallery: ['/images/pompeii-vesuvius.jpg'],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/paestum-temples.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Day Adventures
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Day <span className="text-[#C73525]">Excursions</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover the best of Cilento and Campania in a single day. Expertly guided tours to unforgettable destinations.
          </p>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Tours Grid */}
      <section ref={toursRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <div
                key={tour.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="card-organic h-full flex flex-col">
                  <div className="relative h-56 -mx-8 -mt-8 mb-6 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)' }}
                    />
                  </div>

                  <div className="flex items-center gap-4 text-sm text-deep-olive mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-coral" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-emerald" />
                      {tour.difficulty}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-2xl text-charcoal mb-3">{tour.title}</h3>
                  <p className="text-deep-olive leading-relaxed mb-4">{tour.description}</p>

                  <div className="mb-4">
                    <p className="text-sm text-deep-olive mb-2">
                      <span className="font-medium">Meeting Point:</span> {tour.meetingPoint}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-charcoal mb-2">What's Included:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {tour.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-deep-olive">
                          <Check size={14} className="text-[#0F8A50]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#D8D5D0]/50 mt-auto">
                    <span className="font-heading font-bold text-2xl text-charcoal">{tour.price}</span>
                    <span className="text-sm text-deep-olive">per person</span>
                    <Link to="/contact" className="btn-primary text-sm py-3 px-6">
                      Book Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 text-center mt-16 p-8 bg-[#F5EFE0] rounded-3xl">
            <h3 className="font-heading font-semibold text-2xl text-charcoal mb-4">
              Want a custom day tour?
            </h3>
            <p className="text-deep-olive mb-6 max-w-xl mx-auto">
              We can design a personalized day tour based on your interests and schedule.
              Contact Teresa to plan your perfect day in Cilento.
            </p>
            <Link to="/contact" className="btn-secondary">
              Request Custom Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayTours;
