import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Wifi, Utensils, Car, TreePine, Waves, Sun, Wind, Droplets } from 'lucide-react';

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

const Accommodation = () => {
  const heroRef = useScrollAnimation();
  const galleryRef = useScrollAnimation();
  const amenitiesRef = useScrollAnimation();
  const nearbyRef = useScrollAnimation();
  const reviewsRef = useScrollAnimation();

  const galleryImages = [
    { src: '/images/villa-cilento.jpg', alt: 'Villa exterior' },
    { src: '/images/castellabate-village.jpg', alt: 'Property view' },
    { src: '/images/cilento-sunset.jpg', alt: 'Sunset view' },
    { src: '/images/pisciotta-village.jpeg', alt: 'Nearby village' },
  ];

  const amenities = [
    { icon: Wifi, name: 'Free Wi-Fi' },
    { icon: Utensils, name: 'Full Kitchen' },
    { icon: Car, name: 'Free Parking' },
    { icon: TreePine, name: 'Garden' },
    { icon: Waves, name: 'Pool' },
    { icon: Sun, name: 'Terrace' },
    { icon: Wind, name: 'Air Conditioning' },
    { icon: Droplets, name: 'Washer/Dryer' },
  ];

  const nearby = [
    { name: 'Cilento Beach', distance: '700m', icon: Waves },
    { name: 'Paestum Temples', distance: '1.5km', icon: MapPin },
    { name: 'Local Restaurants', distance: '200m', icon: Utensils },
    { name: 'Grocery Shops', distance: '300m', icon: MapPin },
    { name: 'Train Station', distance: '2km', icon: MapPin },
  ];

  const reviews = [
    { rating: 5, text: 'Absolutely stunning property with breathtaking views. Teresa made us feel so welcome!', author: 'Maria G.' },
    { rating: 5, text: 'Perfect location for exploring Cilento. The villa exceeded all our expectations.', author: 'John & Sarah' },
    { rating: 5, text: 'We fell in love with this place. Already planning our return trip!', author: 'The Anderson Family' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/villa-cilento.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Your Home in Cilento
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Villa <span className="text-[#F0C850]">Felix</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Your private retreat in the heart of Cilento. Comfort, beauty, and authentic Italian hospitality.
          </p>
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 flex items-center justify-center gap-2 mt-6">
            <Star size={20} className="text-[#F0C850] fill-[#F0C850]" />
            <Star size={20} className="text-[#F0C850] fill-[#F0C850]" />
            <Star size={20} className="text-[#F0C850] fill-[#F0C850]" />
            <Star size={20} className="text-[#F0C850] fill-[#F0C850]" />
            <Star size={20} className="text-[#F0C850] fill-[#F0C850]" />
            <span className="ml-2 text-white/90">5.0 · 47 reviews</span>
          </div>
        </div>
        
        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#C73525]/10 text-[#C73525] text-sm font-medium mb-4">
              Photo Gallery
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Explore <span className="text-transparent bg-clip-text gradient-warm">Villa Felix</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 overflow-hidden rounded-2xl aspect-square"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-charcoal mb-6">
              About Villa Felix
            </h2>
            <div className="space-y-4 text-deep-olive leading-relaxed">
              <p>
                Villa Felix is a beautifully restored traditional Cilento farmhouse, offering the perfect 
                blend of rustic charm and modern comfort. Nestled among olive groves with panoramic views 
                of the Mediterranean, this is your home away from home in Southern Italy.
              </p>
              <p>
                The villa features three spacious bedrooms, a fully equipped kitchen, a private pool, 
                and extensive gardens where you can relax and soak in the Cilento sunshine. Whether you're 
                here for a weekend getaway or an extended stay, Villa Felix provides the perfect base 
                for exploring all that this magical region has to offer.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#D8D5D0]/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-charcoal">3</p>
                  <p className="text-sm text-deep-olive">Bedrooms</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-charcoal">2</p>
                  <p className="text-sm text-deep-olive">Bathrooms</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-charcoal">6</p>
                  <p className="text-sm text-deep-olive">Guests</p>
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-2xl text-charcoal">1</p>
                  <p className="text-sm text-deep-olive">Private Pool</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Amenities Section */}
      <section ref={amenitiesRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#0F8A50]/10 text-[#0F8A50] text-sm font-medium mb-4">
              Amenities
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Everything You <span className="text-transparent bg-clip-text gradient-warm">Need</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.name}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-3 p-4 bg-[#F5EFE0] rounded-xl"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <amenity.icon size={18} className="text-[#0F8A50]" />
                </div>
                <span className="font-medium text-charcoal text-sm">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Nearby */}
      <section ref={nearbyRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#1A3D9C]/10 text-[#1A3D9C] text-sm font-medium mb-4">
              Location
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              What's <span className="text-transparent bg-clip-text gradient-warm">Nearby</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearby.map((place, index) => (
              <div
                key={place.name}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-6 flex items-center gap-4"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#F0C850]/10 flex items-center justify-center">
                  <place.icon size={20} className="text-[#F0C850]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-charcoal">{place.name}</h3>
                  <p className="text-sm text-deep-olive">{place.distance} away</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} className="relative section-padding bg-[#FEFBF7]">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#F0C850]/10 text-[#F0C850] text-sm font-medium mb-4">
              Guest Reviews
            </span>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              What Guests <span className="text-transparent bg-clip-text gradient-warm">Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-6 shadow-sm"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#F0C850] fill-[#F0C850]" />
                  ))}
                </div>
                <p className="text-charcoal mb-4 italic">"{review.text}"</p>
                <p className="text-sm text-deep-olive font-medium">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding bg-[#F5EFE0]">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
            Ready to Stay at Villa Felix?
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-deep-olive mb-8 max-w-xl mx-auto">
            Contact Teresa to check availability and book your stay at Villa Felix.
          </p>
          <Link to="/contact" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 btn-primary">
            Reserve Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
