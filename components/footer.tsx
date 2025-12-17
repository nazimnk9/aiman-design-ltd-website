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
    <footer className="bg-background pt-10 md:pt-0 text-black relative overflow-hidden">
      {/* Top Section - Categories, Account, Links, Company, Support */}
      <div className="border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-12 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-5">
            {/* Categories */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-xl md:text-xl uppercase tracking-wider mb-2">Product Range</h4>
              <ul className="space-y-3">
                {[
                  { name: "Circular knit", href: "/products/circular_knit" },
                  { name: "Flat knit", href: "/products/flat_knit" },
                  { name: "Woven", href: "/products/woven" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-xl relative group">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full h-0.5 bg-green-600"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-xl md:text-xl uppercase tracking-wider mb-2">Explore</h4>
              <ul className="space-y-3">
                {[
                  { name: "About us", href: "/about" },
                  { name: "Products", href: "/products/circular_knit" },
                  { name: "Team", href: "/team" },
                  { name: "Career", href: "/career" },
                  { name: "Compliance", href: "/compliance" },
                  { name: "Contact", href: "/contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-xl relative group">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dhaka Office */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-xl md:text-xl uppercase tracking-wider mb-2">Dhaka Office</h4>
              <p className="text-gray-600 text-xl mb-4">House # 470, Road # 8,<br />Level-3 DOHS Baridhara, Dhaka-1212, Bangladesh</p>

              {/* <p className="text-gray-500 text-xl">
                Phone: <span className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group">
                  +447711048902
                  <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                </span>
              </p> */}
            </div>

            {/* London Office */}
            <div className="text-center sm:text-left md:col-span-1 pb-10 md:pb-0">
              <h4 className="font-bold text-black text-xl md:text-xl uppercase tracking-wider mb-2">London Office</h4>
              <p className="text-gray-600 text-xl mb-4">13 Elm parade Main road, <br />Sidcup Kent, UK Da14 6nf.</p>

              <p className="text-gray-500 text-md lg:text-lg">
                Phone: <span className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group">
                  +447711048902
                  <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                </span>
              </p>
              <p className="text-gray-500 text-[13px] md:text-md lg:text-lg">
                Email: <span className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group">
                  russel@aimandesignltd.com
                  <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Logo */}
      <div className="relative border-b border-gray-300 overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/footer_video.mp4" type="video/mp4" />
        </video>

        {/* Optional: overlay to improve text readability */}
        <div className="absolute inset-0 bg-white/40" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/logo.png"
                alt="Styliz Logo"
                width={100}
                height={60}
                className="h-20 w-auto"
              />
              <p className="text-gray-700 text-sm mt-6 text-center max-w-3xl mx-auto leading-relaxed">
                Aiman Design Ltd is an apparel sourcing and manufacturing company in Wovens including Denims, Non-denims, Padded Jackets and Pants, Work wear Products, Circular Knit, and Flat Knits. We have wide production facilities, based on long term partnerships with manufacturers and fabric suppliers in Asia.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Section - Copyright and Payment Methods */}

    </footer>
  )
}