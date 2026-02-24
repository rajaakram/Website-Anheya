import { useEffect, useRef, useState } from 'react';

import { ArrowRight, Search, Calendar, Clock } from 'lucide-react';

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

const Blog = () => {
  const heroRef = useScrollAnimation();
  const featuredRef = useScrollAnimation();
  const articlesRef = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Travel Tips', 'Local Culture', 'Food & Wine', 'Heritage & History', 'Nature & Adventure'];

  const articles = [
    {
      title: 'The Ultimate Guide to Paestum Temples',
      excerpt: 'Discover the ancient Greek temples that have stood for over 2,500 years in the heart of Cilento.',
      image: '/images/paestum-temples.jpg',
      category: 'Heritage & History',
      date: 'February 15, 2026',
      readTime: '8 min read',
      featured: true,
    },
    {
      title: 'Hidden Beaches of the Cilento Coast',
      excerpt: 'Explore the secret coves and pristine beaches that only locals know about.',
      image: '/images/marina-camerota.jpg',
      category: 'Nature & Adventure',
      date: 'February 10, 2026',
      readTime: '6 min read',
      featured: false,
    },
    {
      title: 'The Art of Buffalo Mozzarella',
      excerpt: 'Learn about the traditional craft behind Campania\'s most famous cheese.',
      image: '/images/mozzarella-farm.jpg',
      category: 'Food & Wine',
      date: 'February 5, 2026',
      readTime: '5 min read',
      featured: false,
    },
    {
      title: 'Tracing Your Italian Roots: A Beginner\'s Guide',
      excerpt: 'Everything you need to know about starting your genealogy journey in Italy.',
      image: '/images/castellabate-village.jpg',
      category: 'Heritage & History',
      date: 'January 28, 2026',
      readTime: '10 min read',
      featured: false,
    },
    {
      title: 'Best Time to Visit the Amalfi Coast',
      excerpt: 'Insider tips on when to experience the Amalfi Coast at its finest.',
      image: '/images/amalfi-coast.jpg',
      category: 'Travel Tips',
      date: 'January 20, 2026',
      readTime: '4 min read',
      featured: false,
    },
    {
      title: 'Traditional Cilento Recipes to Try at Home',
      excerpt: 'Bring the flavors of Cilento to your kitchen with these authentic recipes.',
      image: '/images/pasta-making.jpg',
      category: 'Food & Wine',
      date: 'January 15, 2026',
      readTime: '7 min read',
      featured: false,
    },
    {
      title: 'Hiking Trails of Cilento National Park',
      excerpt: 'The best routes for experiencing the natural beauty of Cilento.',
      image: '/images/cilento-panoramic.jpg',
      category: 'Nature & Adventure',
      date: 'January 10, 2026',
      readTime: '6 min read',
      featured: false,
    },
    {
      title: 'Understanding Italian Family Culture',
      excerpt: 'Insights into the importance of family in Italian society and traditions.',
      image: '/images/italian-dinner.jpg',
      category: 'Local Culture',
      date: 'January 5, 2026',
      readTime: '5 min read',
      featured: false,
    },
  ];

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  const filteredArticles = regularArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/ravello-gardens.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        
        <div className="relative z-10 container-padding max-w-5xl mx-auto text-center pt-24 pb-16 text-white">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Our Blog
            </span>
          </div>
          <h1 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Travel Stories & <span className="text-[#E8B84B]">Guides</span>
          </h1>
          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Curated stories, tips, and insights to help you discover the authentic Cilento.
          </p>
        </div>
        
        <WaveDivider color="#FEFBF7" />
      </section>

      {/* Search & Filter */}
      <section className="relative py-8 bg-[#FEFBF7] border-b border-[#D8D5D0]/50">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-deep-olive" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#D8D5D0] bg-white focus:outline-none focus:border-[#E8B84B]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#E8B84B] text-white'
                      : 'bg-[#F5EFE0] text-charcoal hover:bg-[#E8B84B]/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'All' && !searchQuery && (
        <section ref={featuredRef} className="relative section-padding bg-[#FEFBF7]">
          <div className="container-padding max-w-7xl mx-auto">
            <span className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full bg-[#D94F3E]/10 text-[#D94F3E] text-sm font-medium mb-6">
              Featured Article
            </span>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 grid lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#1B8C5A]/10 text-[#1B8C5A] text-xs font-medium mb-4">
                  {featuredArticle.category}
                </span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-charcoal mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-deep-olive leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-deep-olive mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <button className="btn-primary">
                  Read Full Article
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section ref={articlesRef} className="relative section-padding bg-[#F5EFE0]">
        <WaveDivider flip color="#F5EFE0" />
        
        <div className="container-padding max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-heading font-bold text-3xl text-charcoal mb-6">
              Latest <span className="text-transparent bg-clip-text gradient-warm">Articles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div
                key={article.title}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E8B84B]/10 text-[#E8B84B] text-xs font-medium mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-deep-olive text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-deep-olive">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <button className="text-[#2A9B9B] text-sm font-medium hover:text-[#2B4FA0] transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-deep-olive">No articles found matching your criteria.</p>
            </div>
          )}

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 text-center mt-12">
            <button className="btn-secondary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
