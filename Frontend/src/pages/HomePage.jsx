import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/data';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { bg: 'from-pink-500 to-purple-600', title: 'New Collection 2026', subtitle: 'Step into the future of fashion', cta: 'Shop Now' },
    { bg: 'from-blue-500 to-teal-400', title: 'Summer Sale: Up to 70% Off', subtitle: 'Beat the heat with hot styles', cta: 'Explore Deals' },
    { bg: 'from-orange-400 to-red-500', title: 'Premium Fashion for Everyone', subtitle: 'Discover your unique style', cta: 'Discover' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const categories = [
    { name: 'Men', icon: '👔', link: '/product/men', color: 'bg-blue-100 text-blue-600' },
    { name: 'Women', icon: '👗', link: '/product/women', color: 'bg-pink-100 text-pink-600' },
    { name: 'Kids', icon: '🧸', link: '/product/kids', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Home', icon: '🏠', link: '/product/home', color: 'bg-green-100 text-green-600' },
    { name: 'Beauty', icon: '💄', link: '/product/beauty', color: 'bg-purple-100 text-purple-600' },
  ];

  const flashSaleProducts = products.filter(p => p.discount >= 45).slice(0, 6);
  const trendingProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-gradient-to-r ${slide.bg} transition-opacity duration-1000 flex items-center justify-center text-white text-center px-4 ${index === currentSlide ? 'opacity-100' : 'opacity-0 z-[-1]'}`}
          >
            <div className={index === currentSlide ? 'fade-in-up' : ''}>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 font-medium opacity-90">{slide.subtitle}</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-center">Shop by Category</h2>
        <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-6 pb-4 scrollbar-hidden">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.link} className={`flex-shrink-0 w-32 md:w-auto flex flex-col items-center justify-center p-6 rounded-2xl ${cat.color} hover:shadow-md transition-all hover:-translate-y-1`}>
              <span className="text-4xl mb-3">{cat.icon}</span>
              <span className="font-bold">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Flash Sale */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <span className="text-yellow-500">⚡</span> Flash Sale
              </h2>
              <p className="text-gray-500 mt-2">Ends in: <span className="font-mono bg-red-100 text-red-600 px-2 py-1 rounded font-bold">24:00:00</span></p>
            </div>
            <Link to="/product/men" className="text-[#ff3f6c] font-medium hover:underline">View All</Link>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hidden snap-x">
            {flashSaleProducts.map(p => (
              <div key={p.id} className="min-w-[280px] snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Now */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Value Props */}
      <div className="border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold mb-2">Free Delivery</h3>
            <p className="text-sm text-gray-500">On orders above ₹999</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="font-bold mb-2">Easy Returns</h3>
            <p className="text-sm text-gray-500">30 days return policy</p>
          </div>
          <div>
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-bold mb-2">100% Authentic</h3>
            <p className="text-sm text-gray-500">Original products guaranteed</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="font-bold mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-500">Always here to help you</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
