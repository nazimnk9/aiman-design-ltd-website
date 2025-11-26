// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

// export function Footer() {
//   return (
//     <footer
//       style={{
//         backgroundColor: "white",
//         color: "#1f2937",
//       }}
//       className="relative overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//           {/* Brand - Logo prominently displayed */}
//           <div className="animate-fadeInUp">
//             <div className="flex items-center gap-3 mb-6">
//               <Image
//                 src="/logo.png"
//                 alt="AIMAN Logo"
//                 width={50}
//                 height={50}
//                 className="h-16 w-auto filter drop-shadow-lg"
//               />
//             </div>
//             <p className="leading-relaxed font-medium" style={{ color: "#6b7280" }}>
//               Premium garments crafted with excellence, style, and sustainability at the heart of everything we do.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
//             <h4 className="font-bold text-lg mb-6" style={{ color: "#1f2937" }}>
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {["Home", "About", "Products", "Team"].map((link) => (
//                 <li key={link}>
//                   <Link
//                     href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
//                     className="transition-colors duration-300 font-medium hover:underline"
//                     style={{ color: "#4b5563" }}
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
//             <h4 className="font-bold text-lg mb-6" style={{ color: "#1f2937" }}>
//               Company
//             </h4>
//             <ul className="space-y-3">
//               {["Career", "Contact", "Privacy", "Terms"].map((link) => (
//                 <li key={link}>
//                   <Link
//                     href={link === "Career" ? "/career" : link === "Contact" ? "/contact" : "#"}
//                     className="transition-colors duration-300 font-medium hover:underline"
//                     style={{ color: "#4b5563" }}
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
//             <h4 className="font-bold text-lg mb-6" style={{ color: "#1f2937" }}>
//               Contact
//             </h4>
//             <ul className="space-y-4">
//               <li
//                 className="flex items-start gap-3 font-medium transition-colors duration-300 hover:underline"
//                 style={{ color: "#4b5563" }}
//               >
//                 <Phone size={20} className="flex-shrink-0 mt-0.5" />
//                 <span>+1 (555) 123-4567</span>
//               </li>
//               <li
//                 className="flex items-start gap-3 font-medium transition-colors duration-300 hover:underline"
//                 style={{ color: "#4b5563" }}
//               >
//                 <Mail size={20} className="flex-shrink-0 mt-0.5" />
//                 <span>hello@aiman.com</span>
//               </li>
//               <li
//                 className="flex items-start gap-3 font-medium transition-colors duration-300 hover:underline"
//                 style={{ color: "#4b5563" }}
//               >
//                 <MapPin size={20} className="flex-shrink-0 mt-0.5" />
//                 <span>123 Fashion St, NYC</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div style={{ borderTop: "1px solid #e5e7eb" }} className="pt-8 mb-8" />

//         {/* Social & Copyright */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-sm font-medium" style={{ color: "#6b7280" }}>
//             © 2025 AIMAN Garments. All rights reserved.
//           </p>
//           <div className="flex gap-4">
//             {[Facebook, Instagram, Twitter].map((Icon, i) => (
//               <button
//                 key={i}
//                 className="p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur"
//                 style={{ backgroundColor: "#f3f4f6" }}
//                 onMouseEnter={(e) => {
//                   ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e5e7eb"
//                 }}
//                 onMouseLeave={(e) => {
//                   ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f3f4f6"
//                 }}
//                 aria-label={`Social media link ${i + 1}`}
//               >
//                 <Icon size={20} style={{ color: "#1f2937" }} />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// "use client"

// import type React from "react"

// import Link from "next/link"
// import Image from "next/image"
// import { Facebook, Twitter, Instagram, Cookie as Google, Headphones, MessageSquare } from "lucide-react"
// import { useState } from "react"

// export function Footer() {
//   const [email, setEmail] = useState("")

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault()
//     setEmail("")
//   }

//   return (
//     <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
//       {/* Top Section - Categories, Account, Links, Company, Support */}
//       <div className="border-b border-gray-700">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 md:py-16">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-0">
//             {/* Categories */}
//             <div className="text-center sm:text-left md:col-span-1">
//               <h4 className="font-bold text-white text-sm md:text-base uppercase tracking-wider mb-2">Categories</h4>
//               <ul className="space-y-3">
//                 {["For Men", "For Woman", "Accessories", "Other"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Account */}
//             <div className="text-center sm:text-left md:col-span-1">
//               <h4 className="font-bold text-white text-sm md:text-base uppercase tracking-wider mb-2">Account</h4>
//               <ul className="space-y-3">
//                 {["Wishlist", "Compare", "Subscribe", "Log In"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Quick Links */}
//             <div className="text-center sm:text-left md:col-span-1">
//               <h4 className="font-bold text-white text-sm md:text-base uppercase tracking-wider mb-2">Quick Links</h4>
//               <ul className="space-y-3">
//                 {["Shipping & Returns", "Privacy Policy", "Terms & Conditions", "Vacancies"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company */}
//             <div className="text-center sm:text-left md:col-span-1">
//               <h4 className="font-bold text-white text-sm md:text-base uppercase tracking-wider mb-2">Company</h4>
//               <ul className="space-y-3">
//                 {["About us", "Blog", "FAQs"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support - Full width on mobile/tablet, normal on desktop */}
//             <div className="col-span-1 sm:col-span-2 lg:col-span-1 md:col-span-1">
//               <div className="flex items-center gap-3 justify-start sm:justify-center mb-8 min-w-70">
//                 <MessageSquare
//                     className="text-gray-400 hover:text-red-500 transition-colors duration-300"
//                     size={50}
//                 />
//                 <div className="flex flex-col items-start text-start">
//                   <h6 className="font-bold text-white uppercase tracking-wider whitespace-nowrap" style={{fontSize: "8.5px"}}>
//                     We Offer 24/7 Dedicated Support
//                   </h6>
//                   <p className="text-gray-500 text-xs mt-2">If you need support send us a message</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 justify-start sm:justify-center min-w-56">
//                 <Headphones
//                   className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex-shrink-0"
//                   size={50}
//                 />
//                 <div className="text-center sm:text-left">
//                   <p className="text-xs text-gray-500">Got Question? Call Us 24/7?</p>
//                   <p className="text-gray-300 hover:text-red-500 transition-colors duration-300 font-bold mt-1" style={{fontSize: "16px"}}>
//                     (012) 345 000 789
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Middle Section - Logo, Store Location, Newsletter */}
//       <div className="border-b border-gray-700">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16">
//           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-0 justify-center">
//             {/* Logo - Centered and full width on tablet */}
//             <div className="flex justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start  md:col-span-1 lg:col-span-1 mb-8 ml-0 md:ml-20 lg:ml-5">
//               <Image src="/logo.png" alt="Styliz Logo" width={100} height={60} className="h-16 w-auto" />
//             </div>

//             {/* Store Location and Newsletter - Side by side on tablet and desktop */}
//             <div className="col-span-1 md:col-span-1 lg:col-span-2 items-center justify-center">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-0">
//                 {/* Store Location */}
//                 <div className="text-center md:text-start md:w-60">
//                   <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Store Location</h4>
//                   <p className="text-gray-400 text-sm mb-4">Box 565, Charlestown, Nevis, West Indies,Caribbean</p>
//                   <div className="flex justify-center md:justify-start gap-4 mb-6">
//                     {[
//                       { icon: Facebook, label: "Facebook" },
//                       { icon: Twitter, label: "Twitter" },
//                       { icon: Instagram, label: "Instagram" },
//                       { icon: Google, label: "Google+" },
//                     ].map(({ icon: Icon, label }) => (
//                       <Link
//                         key={label}
//                         href="#"
//                         className="text-gray-400 hover:text-red-500 transition-colors duration-300"
//                         aria-label={label}
//                       >
//                         <Icon size={18} />
//                       </Link>
//                     ))}
//                   </div>
//                   <p className="text-gray-500 text-xs">
//                     Email: <span className="text-gray-400">contact@example.com</span>
//                   </p>
//                 </div>

//                 {/* Newsletter Signup */}
//                 <div className="text-center md:text-left lg:text-left mt-8">
//                   <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-6">Sign Up For Newsletter</h4>
//                   <form
//                     onSubmit={handleSubscribe}
//                     className="flex flex-row items-center gap-0 justify-center md:justify-start lg:justify-end min-w-0 lg:min-w-87 xl:min-w-112"
//                   >
//                     <input
//                       type="email"
//                       placeholder="Enter email address..."
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="flex-1 bg-transparent border-b border-gray-500 px-0 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-300 text-sm"
//                     />
//                     <button
//                       type="submit"
//                       className="border border-gray-400 text-gray-300 hover:bg-red-500 hover:text-white hover:border-red-500 px-4 md:px-3 lg:px-6 py-4 uppercase font-bold text-sm transition-all duration-300 whitespace-nowrap ml-4 flex flex-row justify-center items-center"
//                     >
//                       Subscribe
//                       <span className="ml-4 mb-1">→</span>
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section - Copyright and Payment Methods */}
//       <div className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
//             <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
//               Copyright © 2025 <span className="text-red-500 font-bold">Styliz</span>. All Rights Reserved.
//             </p>
//             {/* <div className="flex gap-2 sm:gap-3 flex-wrap justify-center md:justify-end">
//               {[
//                 { name: "Visa", color: "bg-blue-600" },
//                 { name: "Mastercard", color: "bg-red-600" },
//                 { name: "American Express", color: "bg-blue-400" },
//                 { name: "PayPal", color: "bg-blue-700" },
//                 { name: "Discover", color: "bg-orange-500" },
//                 { name: "COD", color: "bg-gray-600" },
//               ].map(({ name, color }) => (
//                 <div
//                   key={name}
//                   className={`${color} rounded px-3 py-1 text-white text-xs font-semibold flex items-center justify-center h-8 w-12`}
//                 >
//                   {name === "COD" ? "COD" : name.split(" ")[0]}
//                 </div>
//               ))}
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


// "use client"

// import type React from "react"

// import Link from "next/link"
// import Image from "next/image"
// import { Facebook, Twitter, Instagram, Cookie as Google, Headphones, MessageSquare } from "lucide-react"
// import { useState } from "react"

// export function Footer() {
//   const [email, setEmail] = useState("")

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault()
//     setEmail("")
//   }

//   return (
//     <footer className="bg-background text-black relative overflow-hidden">
//       {/* Top Section - Categories, Account, Links, Company, Support */}
//       <div className="border-b border-gray-300">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 md:py-16">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-0">
//             {/* Categories */}
//             <div className="text-center sm:text-left md:col-span-1">
//               <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Categories</h4>
//               <ul className="space-y-3">
//                 {["For Men", "For Woman", "Accessories", "Other"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm hover:underline">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Account */}
//             <div className="text-center sm:text-left md:col-span-1">
//               <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Account</h4>
//               <ul className="space-y-3">
//                 {["Wishlist", "Compare", "Subscribe", "Log In"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm hover:underline">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Quick Links */}
//             <div className="text-center sm:text-left md:col-span-1">
//               <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Quick Links</h4>
//               <ul className="space-y-3">
//                 {["Shipping & Returns", "Privacy Policy", "Terms & Conditions", "Vacancies"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm hover:underline">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company */}
//             <div className="text-center sm:text-left md:col-span-1">
//               <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Company</h4>
//               <ul className="space-y-3">
//                 {["About us", "Blog", "FAQs"].map((item) => (
//                   <li key={item}>
//                     <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm hover:underline">
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support - Full width on mobile/tablet, normal on desktop */}
//             <div className="col-span-1 sm:col-span-2 lg:col-span-1 md:col-span-1">
//               <div className="flex items-center gap-3 justify-start sm:justify-center mb-8 min-w-70">
//                 <MessageSquare
//                     className="text-gray-600 hover:text-green-600 transition-colors duration-300"
//                     size={50}
//                 />
//                 <div className="flex flex-col items-start text-start">
//                   <h6 className="font-bold text-black uppercase tracking-wider whitespace-nowrap" style={{fontSize: "8.5px"}}>
//                     We Offer 24/7 Dedicated Support
//                   </h6>
//                   <p className="text-gray-500 text-xs mt-2">If you need support send us a message</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 justify-start sm:justify-center min-w-56">
//                 <Headphones
//                   className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex-shrink-0"
//                   size={50}
//                 />
//                 <div className="text-center sm:text-left">
//                   <p className="text-xs text-gray-500">Got Question? Call Us 24/7?</p>
//                   <p className="text-black hover:text-green-600 transition-colors duration-300 font-bold mt-1 hover:underline" style={{fontSize: "16px"}}>
//                     (012) 345 000 789
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Middle Section - Logo, Store Location, Newsletter */}
//       <div className="border-b border-gray-300">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16">
//           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-0 justify-center">
//             {/* Logo - Centered and full width on tablet */}
//             <div className="flex justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start  md:col-span-1 lg:col-span-1 mb-8 ml-0 md:ml-20 lg:ml-5">
//               <Image src="/logo.png" alt="Styliz Logo" width={100} height={60} className="h-16 w-auto" />
//             </div>

//             {/* Store Location and Newsletter - Side by side on tablet and desktop */}
//             <div className="col-span-1 md:col-span-1 lg:col-span-2 items-center justify-center">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-0">
//                 {/* Store Location */}
//                 <div className="text-center md:text-start md:w-60">
//                   <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-4">Store Location</h4>
//                   <p className="text-gray-600 text-sm mb-4">Box 565, Charlestown, Nevis, West Indies,Caribbean</p>
//                   <div className="flex justify-center md:justify-start gap-4 mb-6">
//                     {[
//                       { icon: Facebook, label: "Facebook" },
//                       { icon: Twitter, label: "Twitter" },
//                       { icon: Instagram, label: "Instagram" },
//                       { icon: Google, label: "Google+" },
//                     ].map(({ icon: Icon, label }) => (
//                       <Link
//                         key={label}
//                         href="#"
//                         className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:underline"
//                         aria-label={label}
//                       >
//                         <Icon size={18} />
//                       </Link>
//                     ))}
//                   </div>
//                   <p className="text-gray-500 text-xs">
//                     Email: <span className="text-gray-600 hover:text-green-600 hover:underline transition-colors duration-300">contact@example.com</span>
//                   </p>
//                 </div>

//                 {/* Newsletter Signup */}
//                 <div className="text-center md:text-left lg:text-left mt-8">
//                   <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-6">Sign Up For Newsletter</h4>
//                   <form
//                     onSubmit={handleSubscribe}
//                     className="flex flex-row items-center gap-0 justify-center md:justify-start lg:justify-end min-w-0 lg:min-w-87 xl:min-w-112"
//                   >
//                     <input
//                       type="email"
//                       placeholder="Enter email address..."
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="flex-1 bg-transparent border-b border-gray-500 px-0 py-2 text-black placeholder-gray-500 focus:outline-none focus:border-green-600 focus:border-b-2 transition-colors duration-300 text-sm"
//                     />
//                     <button
//                       type="submit"
//                       className="border border-gray-400 text-black hover:bg-green-600 hover:text-white hover:border-green-600 px-4 md:px-3 lg:px-6 py-4 uppercase font-bold text-sm transition-all duration-300 whitespace-nowrap ml-4 flex flex-row justify-center items-center"
//                     >
//                       Subscribe
//                       <span className="ml-4 mb-1">→</span>
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section - Copyright and Payment Methods */}
//       <div className="bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
//             <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
//               Copyright © 2025 <span className="text-green-600 font-bold hover:underline">Styliz</span>. All Rights Reserved.
//             </p>
//             {/* <div className="flex gap-2 sm:gap-3 flex-wrap justify-center md:justify-end">
//               {[
//                 { name: "Visa", color: "bg-blue-600" },
//                 { name: "Mastercard", color: "bg-red-600" },
//                 { name: "American Express", color: "bg-blue-400" },
//                 { name: "PayPal", color: "bg-blue-700" },
//                 { name: "Discover", color: "bg-orange-500" },
//                 { name: "COD", color: "bg-gray-600" },
//               ].map(({ name, color }) => (
//                 <div
//                   key={name}
//                   className={`${color} rounded px-3 py-1 text-white text-xs font-semibold flex items-center justify-center h-8 w-12 hover:underline`}
//                 >
//                   {name === "COD" ? "COD" : name.split(" ")[0]}
//                 </div>
//               ))}
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Cookie as Google, Headphones, MessageSquare } from "lucide-react"
import { useState } from "react"

const bebasFont = {
  fontFamily: "Bebas Neue, sans-serif",
}

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer className="bg-background text-black relative overflow-hidden">
      {/* Top Section - Categories, Account, Links, Company, Support */}
      <div className="border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 md:py-42">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-0">
            {/* Categories */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Categories</h4>
              <ul className="space-y-3">
                {["For Men", "For Woman", "Accessories", "Other"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full h-0.5 bg-green-600"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Account</h4>
              <ul className="space-y-3">
                {["Wishlist", "Compare", "Subscribe", "Log In"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Quick Links</h4>
              <ul className="space-y-3">
                {["Shipping & Returns", "Privacy Policy", "Terms & Conditions", "Vacancies"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Company</h4>
              <ul className="space-y-3">
                {["About us", "Blog", "FAQs"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support - Full width on mobile/tablet, normal on desktop */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 justify-start sm:justify-center mb-8 min-w-70">
                <MessageSquare
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                    size={50}
                />
                <div className="flex flex-col items-start text-start">
                  <h6 className="font-bold text-black uppercase whitespace-nowrap" style={{ fontSize: "15.5px", ...bebasFont }}>
                    We Offer 24/7 Dedicated Support
                  </h6>
                  <p className="text-gray-500 text-xs mt-2">If you need support send us a message</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-start sm:justify-center min-w-56">
                <Headphones
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex-shrink-0"
                  size={50}
                />
                <div className="text-center sm:text-left">
                  <p className="text-xs text-gray-500">Got Question? Call Us 24/7?</p>
                  <p className="text-black hover:text-green-600 transition-colors duration-300 font-bold mt-1 relative group" style={{fontSize: "16px"}}>
                    (012) 345 000 789
                    <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Logo, Store Location, Newsletter */}
      <div className="border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-0 justify-center">
            {/* Logo - Centered and full width on tablet */}
            <div className="flex justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start  md:col-span-1 lg:col-span-1 mb-8 ml-0 md:ml-20 lg:ml-5">
              <Image src="/logo.png" alt="Styliz Logo" width={100} height={60} className="h-16 w-auto" />
            </div>

            {/* Store Location and Newsletter - Side by side on tablet and desktop */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2 items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-0">
                {/* Store Location */}
                <div className="text-center md:text-start md:w-60">
                  <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-4">Store Location</h4>
                  <p className="text-gray-600 text-sm mb-4">Box 565, Charlestown, Nevis, West Indies,Caribbean</p>
                  <div className="flex justify-center md:justify-start gap-4 mb-6">
                    {[
                      { icon: Facebook, label: "Facebook" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Instagram, label: "Instagram" },
                      { icon: Google, label: "Google+" },
                    ].map(({ icon: Icon, label }) => (
                      <Link
                        key={label}
                        href="#"
                        className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group"
                        aria-label={label}
                      >
                        <Icon size={18} />
                        {/* <span className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span> */}
                      </Link>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs">
                    Email: <span className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group">
                      contact@example.com
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                    </span>
                  </p>
                </div>

                {/* Newsletter Signup */}
                <div className="text-center md:text-left lg:text-left mt-8">
                  <h4 className="font-bold text-black text-sm uppercase tracking-wider mb-6">Sign Up For Newsletter</h4>
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-row items-center gap-0 justify-center md:justify-start lg:justify-end min-w-0 lg:min-w-87 xl:min-w-112"
                  >
                    <input
                      type="email"
                      placeholder="Enter email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent border-b border-gray-500 px-0 py-2 text-black placeholder-gray-500 focus:outline-none focus:border-green-600 focus:border-b-2 transition-colors duration-300 text-sm"
                    />
                    <button
                      type="submit"
                      className="border border-gray-400 text-black hover:bg-green-600 hover:text-white hover:border-green-600 px-4 md:px-3 lg:px-6 py-4 uppercase font-bold text-sm transition-all duration-300 whitespace-nowrap ml-4 flex flex-row justify-center items-center"
                    >
                      Subscribe
                      <span className="ml-4 mb-1">→</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Payment Methods */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
              Copyright © 2025 <span className="text-green-600 font-bold relative group hover:text-green-600">
                Styliz
                <span className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
              </span>. All Rights Reserved.
            </p>
            {/* <div className="flex gap-2 sm:gap-3 flex-wrap justify-center md:justify-end">
              {[
                { name: "Visa", color: "bg-blue-600" },
                { name: "Mastercard", color: "bg-red-600" },
                { name: "American Express", color: "bg-blue-400" },
                { name: "PayPal", color: "bg-blue-700" },
                { name: "Discover", color: "bg-orange-500" },
                { name: "COD", color: "bg-gray-600" },
              ].map(({ name, color }) => (
                <div
                  key={name}
                  className={`${color} rounded px-3 py-1 text-white text-xs font-semibold flex items-center justify-center h-8 w-12 hover:underline`}
                >
                  {name === "COD" ? "COD" : name.split(" ")[0]}
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}