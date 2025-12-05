// import { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>
//           </div>

//           {/* Menu Button for Mobile */}
//           <div className="flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-blue-600 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Menu Links */}
//           <div className={`flex-1 justify-end items-center w-full sm:flex ${isOpen ? "block" : "hidden"} sm:block`}>
//             <ul className="flex flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0">
//               <li>
//                 <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
//                   Products
//                 </a>
//               </li>
//               <li>
//                 <a href="/cart" className="text-gray-700 hover:text-blue-600 font-medium">
//                   Cart
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }import from './App'


