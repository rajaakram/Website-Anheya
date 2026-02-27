import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Car, Plane, Send, Check } from 'lucide-react';

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

const Transfers = () => {
  const heroRef = useScrollAnimation();
  const routesRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const routes = [
    {
      from: 'Naples Airport',
      to: 'Paestum',
      duration: '1.5 hours',
      distance: '120 km',
      description: 'The most popular route. Travel through the beautiful Campania countryside with views of Mount Vesuvius and the Bay of Naples.',
      image: '/images/naples-airport.jpg',
      price: '€120',
    },
    {
      from: 'Rome Fiumicino',
      to: 'Paestum',
      duration: '3 hours',
      distance: '240 km',
      description: 'A scenic journey through the Italian countryside, passing historic towns and beautiful landscapes of Lazio and Campania.',
      image: '/images/pompeii-vesuvius.jpg',
      price: '€280',
    },
    {
      from: 'Salerno',
      to: 'Paestum',
      duration: '30 minutes',
      distance: '40 km',
      description: 'The quickest route. A short coastal drive along the stunning Cilento coastline with views of the Mediterranean.',
      image: '/images/cilento-sunset.jpg',
      price: '€50',
    },
    {
      from: 'Amalfi Coast',
      to: 'Paestum',
      duration: '1 hour',
      distance: '60 km',
      description: 'A breathtaking coastal journey from one of Italy\'s most famous coastlines to the ancient Greek temples of Paestum.',
      image: '/images/amalfi-coast.jpg',
      price: '€90',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/agnone-cilento.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Ground Transportation
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Arrivals & <span className="text-[#C73525]">Transfers</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Seamless transfers from airports and cities to your Cilento destination.
            Comfortable, reliable, and scenic journeys.
          </p>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Routes Section */}
      <section ref={routesRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#C73525]/10 text-[#C73525] text-sm font-medium mb-4">
              Popular Routes
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Main <span className="text-transparent bg-clip-text gradient-warm">Transfer Routes</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <div
                key={route.from}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="card-organic h-full flex flex-col">
                  <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                    <img
                      src={route.image}
                      alt={`${route.from} to ${route.to}`}
                      className="w-full h-full object-cover"
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)' }}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Plane size={18} className="text-coral" />
                      <span className="font-medium text-charcoal">{route.from}</span>
                    </div>
                    <ArrowRight size={18} className="text-deep-olive" />
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-emerald" />
                      <span className="font-medium text-charcoal">{route.to}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-deep-olive mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-coral" />
                      {route.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Car size={14} className="text-emerald" />
                      {route.distance}
                    </span>
                  </div>

                  <p className="text-deep-olive text-sm leading-relaxed mb-6">{route.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#D8D5D0]/50 mt-auto">
                    <div>
                      <span className="text-sm text-deep-olive">From</span>
                      <span className="font-heading font-bold text-2xl text-charcoal ml-2">{route.price}</span>
                    </div>
                    <Link to="/contact" className="btn-primary text-sm py-2 px-4">
                      Book Transfer
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={formRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />

        <div className="container-padding max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#0F8A50]/10 text-[#0F8A50] text-sm font-medium mb-4">
              Book Your Transfer
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Request a <span className="text-transparent bg-clip-text gradient-warm">Transfer</span>
            </h2>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-white rounded-3xl p-8 md:p-10 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#0F8A50]/10 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-[#0F8A50]" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">Request Received!</h3>
                <p className="text-deep-olive">Teresa will confirm your transfer within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Origin</label>
                    <select className="form-input">
                      <option value="">Select origin</option>
                      <option value="naples">Naples Airport (NAP)</option>
                      <option value="rome">Rome Fiumicino (FCO)</option>
                      <option value="salerno">Salerno</option>
                      <option value="amalfi">Amalfi Coast</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Destination</label>
                    <select className="form-input">
                      <option value="">Select destination</option>
                      <option value="paestum">Paestum</option>
                      <option value="agropoli">Agropoli</option>
                      <option value="castellabate">Castellabate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Travel Date</label>
                    <input type="date" className="form-input" />
                  </div>
                  <div>
                    <label className="block font-heading font-medium text-sm text-charcoal mb-2">Number of Passengers</label>
                    <select className="form-input">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-medium text-sm text-charcoal mb-2">Vehicle Preference</label>
                  <select className="form-input">
                    <option value="standard">Standard Car</option>
                    <option value="luxury">Luxury Vehicle</option>
                    <option value="van">Minivan (5+ passengers)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-heading font-medium text-sm text-charcoal mb-2">Special Requests</label>
                  <textarea rows={3} className="form-input resize-none" placeholder="Any special requirements..." />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send size={18} />
                  Request Booking
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transfers;
