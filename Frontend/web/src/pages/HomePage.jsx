import React from "react";
import '../app.css';
import ProductCard from "../components/ProductCard";
import { products } from "../data/data";
import bannerImg from "../assets/ChatGPT Image May 25, 2026, 11_45_09 PM.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={`pt-[123px] md:pt-0`}>

      {/* Banner Section */}
      <div className="w-full pt-20">
        
          <img
            src={bannerImg}
            alt="Home Banner"
            className="w-full object-cover hidden lg:block h-[750px]"
          />
      
          {/* Overlay clickable labels for banner (desktop only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full">
              <Link
                to="/men"
                className="absolute pointer-events-auto bg-white/80 text-black px-3 py-2 rounded-md uppercase font-semibold hover:bg-white left-[8%] top-[30%] flex items-center"
                aria-label="Men section"
              >
                <span className="inline-block w-3 h-3 bg-pink-500 rounded-full animate-pulse mr-2" />
                Men
              </Link>

              <Link
                to="/women"
                className="absolute pointer-events-auto bg-white/80 text-black px-3 py-2 rounded-md uppercase font-semibold hover:bg-white left-[25%] top-[30%] flex items-center"
                aria-label="Women section"
              >
                <span className="inline-block w-3 h-3 bg-pink-500 rounded-full animate-pulse mr-2" />
                Women
              </Link>

              <Link
                to="/kids"
                className="absolute pointer-events-auto bg-white/80 text-black px-3 py-2 rounded-md uppercase font-semibold hover:bg-white left-[42%] top-[30%] flex items-center"
                aria-label="Kids section"
              >
                <span className="inline-block w-3 h-3 bg-pink-500 rounded-full animate-pulse mr-2" />
                Kids
              </Link>

              <Link
                to="/new-collection"
                className="absolute pointer-events-auto bg-white/80 text-black px-3 py-2 rounded-md uppercase font-semibold hover:bg-white left-[60%] top-[30%] flex items-center"
                aria-label="New collection"
              >
                <span className="inline-block w-3 h-3 bg-pink-500 rounded-full animate-pulse mr-2" />
                New Collection
              </Link>
            </div>
          </div>
      </div>

      {/* Mobile Banners */}
      <div className="lg:hidden flex h-[100px] m-1 gap-2 overflow-x-auto scrollbar-hidden">
        <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/FEBRUARY/3/D8eVNGcK_1db27a5e87e442f487655249b4350970.jpg" />
        <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/FEBRUARY/25/A40Nmrrp_33cdac3ecbc64271a6567078bc3ba8fd.jpg" />
      </div>

      {/* Other Images */}
      <div className="flex flex-wrap gap-1 justify-center mt-4">
        <img
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/21/j8U3V53s_abca72da59a649159d1c101b49f6cb59.jpg"
          className="lg:w-[400px] w-full"
        />
        <img
          src="https://assets.myntassets.com/f_webp,w_207,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/20/5DPPLf7C_59525f9fe6aa49198d8e093c6d944558.jpg"
          className="lg:w-[400px] w-full"
        />
      </div>

      <div className="flex justify-center items-center mx-auto mt-1 gap-1">
        <img
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/27/V6TQ6Yoo_fa0a38ddecb846b7a5d3b4aabf3614b3.jpg"
          className="w-[45%]"
        />
        <img
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/27/0LMGambr_3986e07730a64f9d8f1b7dd2b861208d.jpg"
          className="w-[45%]"
        />
      </div>

      {/* Products Section */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default Home;
