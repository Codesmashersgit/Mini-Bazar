import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = ({ dark }) => {
  return (
    <footer className={`${dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-600'} border-t ${dark ? 'border-gray-800' : 'border-gray-200'} pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Section */}
        <div className={`mb-12 pb-12 border-b ${dark ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center gap-6`}>
          <div>
            <h3 className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-900'} mb-2`}>Stay stylish. Get deals.</h3>
            <p>Subscribe to our newsletter for the latest trends and exclusive offers.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input type="email" placeholder="Your email address" className={`px-4 py-3 w-full md:w-72 rounded-l-md outline-none ${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border-y border-l`} />
            <button className="bg-[#ff3f6c] text-white px-6 py-3 rounded-r-md font-medium hover:bg-[#d63060] transition-colors">Subscribe</button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>Online Shopping</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/product/men" className="hover:text-[#ff3f6c]">Men</Link></li>
              <li><Link to="/product/women" className="hover:text-[#ff3f6c]">Women</Link></li>
              <li><Link to="/product/kids" className="hover:text-[#ff3f6c]">Kids</Link></li>
              <li><Link to="/product/home" className="hover:text-[#ff3f6c]">Home & Living</Link></li>
              <li><Link to="/product/beauty" className="hover:text-[#ff3f6c]">Beauty</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>Customer Policies</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="#" className="hover:text-[#ff3f6c]">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-[#ff3f6c]">FAQ</Link></li>
              <li><Link to="#" className="hover:text-[#ff3f6c]">T&C</Link></li>
              <li><Link to="#" className="hover:text-[#ff3f6c]">Terms Of Use</Link></li>
              <li><Link to="#" className="hover:text-[#ff3f6c]">Track Orders</Link></li>
              <li><Link to="#" className="hover:text-[#ff3f6c]">Shipping</Link></li>
              <li><Link to="#" className="hover:text-[#ff3f6c]">Cancellation</Link></li>
              <li><Link to="#" className="hover:text-[#ff3f6c]">Returns</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>Experience Mini-Bazar App on Mobile</h4>
            <div className="flex gap-4 mb-8">
              <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play" className="h-10 cursor-pointer" />
              <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="App Store" className="h-10 cursor-pointer" />
            </div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${dark ? 'text-white' : 'text-gray-900'} mb-6`}>Keep in touch</h4>
            <div className="flex gap-4 text-2xl">
              <FaFacebook className="hover:text-[#1877f2] cursor-pointer" />
              <FaTwitter className="hover:text-[#1da1f2] cursor-pointer" />
              <FaYoutube className="hover:text-[#ff0000] cursor-pointer" />
              <FaInstagram className="hover:text-[#e1306c] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t ${dark ? 'border-gray-800' : 'border-gray-200'} text-sm`}>
          <p>© 2026 www.mini-bazar.com. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium">A Premium E-commerce Experience</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
