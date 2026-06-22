import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/data';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      title: 'FESTIVE FASHION SALE', 
      subtitle: 'Up to 50-80% Off on Top Brands', 
      cta: 'Explore Now',
      image: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg'
    },
    { 
      title: 'WINTER COLLECTION', 
      subtitle: 'Layer up in style this season', 
      cta: 'Shop Winter Wear',
      image: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54bceb1cb3e71658752386588-Western-Wear_Desk.jpg'
    },
    { 
      title: 'BEAUTY BONANZA', 
      subtitle: 'Premium makeup & skincare deals', 
      cta: 'Discover Beauty',
      image: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const categories = [
    { name: 'Men', image: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/8/b215da32-7561-41b4-ac54-eb061992015d1707374092289-Desktop-Men.png', link: '/product/men' },
    { name: 'Women', image: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/8/f0ebc77d-86fc-4638-aa23-86dd9d5045ea1707374092283-Desktop-Women.png', link: '/product/women' },
    { name: 'Kids', image: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/8/ea878b20-1a6f-45b0-ac22-de5dccab93d61707374092296-Desktop-Kids.png', link: '/product/kids' },
    { name: 'Home', image: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/8/201ed00a-b1e6-4299-8806-25ccdf5014cc1707374092301-Desktop-Home.png', link: '/product/home' },
    { name: 'Beauty', image: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/8/6c1b3fb4-5d9c-47fc-b853-c90a16c729501707374092309-Desktop-Beauty.png', link: '/product/beauty' },
    { name: 'Accessories', image: 'https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/8/c0683492-23c3-4d43-8557-65715fbba2c21707374092316-Desktop-Accessories.png', link: '/product/accessories' },
  ];

  const flashSaleProducts = products.filter(p => p.discount >= 45).slice(0, 6);
  const trendingProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen pt-[120px] md:pt-[80px] bg-white">
      
      {/* Hero Carousel */}
      <div className="relative h-[300px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="w-full h-full relative">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 lg:p-24 max-w-[1440px] mx-auto">
              <div className={`max-w-xl transition-all duration-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight text-white uppercase tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 font-medium text-white/90">{slide.subtitle}</p>
                <button className="bg-brand-pink text-white hover:bg-brand-pinkDark px-8 py-3.5 font-bold transition-colors uppercase tracking-widest text-sm">
                  {slide.cta} →
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
          {slides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-brand-pink w-8' : 'bg-white/50 hover:bg-white/80 w-2'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Category Strip */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto pb-2 scrollbar-hidden">
            {categories.map((cat, idx) => (
              <Link key={idx} to={cat.link} className="flex flex-col items-center group cursor-pointer flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-2 border-2 border-gray-200 group-hover:border-brand-pink transition-colors duration-300">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider group-hover:text-brand-pink transition-colors">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 space-y-16 py-12">
        
        {/* Flash Sale Section */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-900 flex items-center gap-4">
                Deal of the Day
                <span className="bg-brand-pink text-white text-xs px-3 py-1 font-mono font-bold">24:00:00</span>
              </h2>
            </div>
            <Link to="/product/men" className="text-brand-pink font-bold uppercase text-sm mt-4 md:mt-0 hover:text-brand-pinkDark transition-colors">
              View All Deals →
            </Link>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hidden snap-x -mx-4 px-4 md:mx-0 md:px-0">
            {flashSaleProducts.map(p => (
              <div key={p.id} className="min-w-[200px] md:min-w-[260px] snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="overflow-hidden group cursor-pointer">
            <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/8/01edfcbf-de6b-4e69-9da8-1abf83c1622f1707374092248-Desktop-Banner_490x390-1.png" alt="Promo 1" className="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover" />
          </div>
          <div className="overflow-hidden group cursor-pointer">
            <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/8/4f9b2b35-7164-4dd2-83de-a89c3bcbd6f31707374092257-Desktop-Banner_490x390-2.png" alt="Promo 2" className="w-full h-auto group-hover:scale-105 transition-transform duration-500 object-cover" />
          </div>
        </section>

        {/* Trending Now */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-900">
              Trending In India
            </h2>
            <Link to="/product/women" className="text-brand-pink font-bold uppercase text-sm hover:text-brand-pinkDark transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingProducts.map((p) => (
              <div key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;
