import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiHandbagThin, PiHeartLight, PiUserCircleThin } from "react-icons/pi";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Men from "../Submenu/Men";
import Women from "../Submenu/Women";
import Kids from "../Submenu/Kids";
import HomeLiving from "../Submenu/HomeLiving";
import Beauty from "../Submenu/Beauty";
import logo from "../assets/ChatGPT Image May 25, 2026, 11_33_09 PM.png";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

function Nav({ showcontent }) {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isLoggedIn, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [openDropdowns, setOpenDropdowns] = useState({
    men: false, women: false, kids: false, homeLiving: false, beauty: false, studio: false, topwear: false,
  });

  const togglemenu = () => setOpen(!open);
  const hidesidebar = () => setOpen(false);
  const toggleDropdown = (section) => setOpenDropdowns(prev => ({ ...prev, [section]: !prev[section] }));

  const navLinks = [
    { name: 'Men', component: <Men />, borderClass: 'hover:border-brand-pink' },
    { name: 'Women', component: <Women />, borderClass: 'hover:border-purple-500' },
    { name: 'Kids', component: <Kids />, borderClass: 'hover:border-orange-500' },
    { name: 'Home & Living', component: <HomeLiving />, borderClass: 'hover:border-emerald-500' },
    { name: 'Beauty', component: <Beauty />, borderClass: 'hover:border-pink-500' },
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-all duration-300 xl:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={hidesidebar}
      />

      <nav className={`fixed top-0 w-full z-40 bg-white transition-all duration-300 ${scrolled ? 'py-2 shadow-sm border-b border-gray-100' : 'py-4 border-b border-gray-100'}`}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Brand Logo" className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-10' : 'h-12 md:h-14'}`} />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 h-full">
            {navLinks.map((link, idx) => (
              <div key={idx} className="group h-full flex items-center relative">
                <a className={`text-sm font-bold uppercase tracking-wider cursor-pointer py-6 border-b-4 border-transparent transition-all duration-200 ${link.borderClass} text-gray-800 hover:text-gray-900`}>
                  {link.name}
                </a>
                {showcontent && (
                  <div className="absolute top-full -left-32 w-[1000px] h-[500px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden shadow-xl border border-gray-100">
                    <div className="p-8 h-full bg-white">
                      {link.component}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="search"
              placeholder="Search for products, brands and more"
              className="w-full pl-12 pr-4 py-2.5 rounded-sm bg-gray-100 text-gray-900 text-sm border border-transparent focus:bg-white focus:border-gray-300 outline-none transition-colors"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            {/* Profile */}
            <div className="group relative flex flex-col items-center cursor-pointer">
              <PiUserCircleThin className="text-2xl text-gray-800" />
              <span className="text-[11px] font-bold mt-1 hidden md:block text-gray-800">Profile</span>
              
              {/* Profile Dropdown */}
              <div className="absolute top-[100%] right-0 w-72 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white p-6 shadow-xl border border-gray-100">
                  <h3 className="font-bold text-lg mb-1 text-gray-900">Welcome {isLoggedIn ? user?.firstName : ''}</h3>
                  <p className="text-sm text-gray-500 mb-4">To access account and manage orders</p>
                  
                  {isLoggedIn ? (
                    <button onClick={logout} className="w-full py-2.5 border border-gray-300 text-brand-pink font-bold hover:border-brand-pink transition-colors text-sm">LOGOUT</button>
                  ) : (
                    <Link to="/login" className="block w-full text-center py-2.5 border border-gray-300 text-brand-pink font-bold hover:border-brand-pink transition-colors text-sm">LOGIN / SIGNUP</Link>
                  )}
                  
                  <hr className="my-4 border-gray-100" />
                  
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li><a href="#" className="hover:font-bold hover:text-gray-900">Orders</a></li>
                    <li><Link to="/wishlist" className="hover:font-bold hover:text-gray-900">Wishlist</Link></li>
                    <li><a href="#" className="hover:font-bold hover:text-gray-900">Gift Cards</a></li>
                    <li><a href="#" className="hover:font-bold hover:text-gray-900">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <Link to="/wishlist" className="flex flex-col items-center group relative cursor-pointer">
              <div className="relative">
                <PiHeartLight className="text-2xl text-gray-800" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-brand-pink text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-bold mt-1 hidden md:block text-gray-800">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex flex-col items-center group relative cursor-pointer">
              <div className="relative">
                <PiHandbagThin className="text-2xl text-gray-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-brand-pink text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-bold mt-1 hidden md:block text-gray-800">Bag</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-2xl text-gray-800" onClick={togglemenu}>
              {open ? <VscClose /> : <CgMenuRightAlt />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className={`md:hidden px-4 pb-3 pt-2 ${scrolled ? 'block' : 'block'}`}>
           <div className="relative">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full pl-12 pr-4 py-2 bg-gray-100 text-gray-900 text-sm border border-transparent focus:bg-white focus:border-gray-300 outline-none rounded-sm"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} bg-white text-gray-900 overflow-y-auto shadow-2xl`}>
        <div className="p-4 flex justify-end">
          <button onClick={togglemenu} className="p-2 text-gray-500 hover:text-gray-900">
            <VscClose className="text-2xl" />
          </button>
        </div>
        <div className="px-6 pb-20">
          <div className="relative mb-6">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/30/b7eb4f88-4a93-4b68-beac-982d29be81671698648116564-Flat_500--1-.jpg" alt="Banner" className="w-full object-cover" />
          </div>
          
          {!isLoggedIn && (
            <Link to="/login" onClick={hidesidebar}>
              <button className="w-full bg-brand-pink text-white font-bold py-3 mb-6 uppercase text-sm">Login / Signup</button>
            </Link>
          )}

          <div className="space-y-0">
            {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty'].map((cat, idx) => (
              <div key={cat} className="border-b border-gray-100">
                <div 
                  className="flex justify-between items-center py-4 font-bold text-sm text-gray-800 cursor-pointer" 
                  onClick={() => toggleDropdown(cat.toLowerCase())}
                >
                  <span>{cat}</span>
                  <div className={`transform transition-transform ${openDropdowns[cat.toLowerCase()] ? 'rotate-180' : ''}`}>
                    <FaChevronDown className="text-gray-400 text-xs" />
                  </div>
                </div>
                {openDropdowns[cat.toLowerCase()] && (
                  <div className="pb-4 pl-4 space-y-3 text-sm text-gray-600">
                     <p className="hover:text-brand-pink cursor-pointer">New Arrivals</p>
                     <p className="hover:text-brand-pink cursor-pointer">Best Sellers</p>
                     <p className="hover:text-brand-pink cursor-pointer">Sale Items</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
