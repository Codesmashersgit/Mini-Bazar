import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Top Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Stay stylish. Get deals.</h3>
            <p className="text-gray-600">Subscribe to our newsletter for the latest trends and exclusive offers.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input type="email" placeholder="Your email address" className="px-4 py-3 w-full md:w-80 rounded-l-sm outline-none bg-white border border-gray-300 text-sm focus:border-gray-400" />
            <button className="bg-brand-pink text-white px-6 py-3 rounded-r-sm font-bold hover:bg-brand-pinkDark transition-colors text-sm uppercase tracking-wider">Subscribe</button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">Online Shopping</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/product/men" className="hover:font-bold hover:text-gray-900">Men</Link></li>
              <li><Link to="/product/women" className="hover:font-bold hover:text-gray-900">Women</Link></li>
              <li><Link to="/product/kids" className="hover:font-bold hover:text-gray-900">Kids</Link></li>
              <li><Link to="/product/home" className="hover:font-bold hover:text-gray-900">Home & Living</Link></li>
              <li><Link to="/product/beauty" className="hover:font-bold hover:text-gray-900">Beauty</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">Customer Policies</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="#" className="hover:font-bold hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="#" className="hover:font-bold hover:text-gray-900">FAQ</Link></li>
              <li><Link to="#" className="hover:font-bold hover:text-gray-900">T&C</Link></li>
              <li><Link to="#" className="hover:font-bold hover:text-gray-900">Terms Of Use</Link></li>
              <li><Link to="#" className="hover:font-bold hover:text-gray-900">Track Orders</Link></li>
              <li><Link to="#" className="hover:font-bold hover:text-gray-900">Shipping</Link></li>
              <li><Link to="#" className="hover:font-bold hover:text-gray-900">Cancellation</Link></li>
              <li><Link to="#" className="hover:font-bold hover:text-gray-900">Returns</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">Experience Mini-Bazar App on Mobile</h4>
            <div className="flex gap-4 mb-8">
              <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play" className="h-10 cursor-pointer" />
              <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="App Store" className="h-10 cursor-pointer" />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">Keep in touch</h4>
            <div className="flex gap-4 text-xl">
              <FaFacebook className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
              <FaTwitter className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
              <FaYoutube className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
              <FaInstagram className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-sm">
          <p className="mb-4 md:mb-0">© 2026 <strong>MINI-BAZAR</strong>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
