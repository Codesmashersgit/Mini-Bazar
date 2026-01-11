import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Navbar import

function WishlistPage() {
  // Example login check
  const isLoggedIn = false; 

  if (!isLoggedIn) {
    return (
      <>
        {/* Navbar without profile, wishlist, cart */}
        {/* <Navbar dark={dark} showprofile={false} showcontent={false} hideIcons={true} /> */}

        <div className="flex flex-col items-center justify-center h-[100vh] gap-6 px-4">
          {/* Message */}
          <h2 className="text-2xl font-[sk] uppercase text-center">
            Please log in to view your Wishlist
          </h2>

          {/* Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Login Required"
            className="w-32 h-32"
          />

          {/* Login Button */}
          <Link to="/login">
            <button className="bg-[#ff3f6c] text-white px-14 py-3 uppercase font-[sk] rounded-md hover:bg-red-500 transition-all">
              Login
            </button>
          </Link>
        </div>
      </>
    );
  }

  // Agar user logged in hai
  return (
    <>
      {/* <Navbar dark={dark} showprofile={true} showcontent={true} /> */}

      <div className="py-20 px-4">
        <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>
        <p className="text-gray-600">Your saved items will appear here.</p>
      </div>
    </>
  );
}

export default WishlistPage;
