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
                {[
                  { name: "Circular knit", href: "/products/circular_knit" },
                  { name: "Flat knit", href: "/products/flat_knit" },
                  { name: "Woven", href: "/products/woven" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm relative group">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full h-0.5 bg-green-600"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Explore</h4>
              <ul className="space-y-3">
                {[
                  { name: "About us", href: "/about" },
                  { name: "Products", href: "/products/circular_knit" },
                  { name: "Team", href: "/team" },
                  { name: "Career", href: "/career" },
                  { name: "Contact", href: "/contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm relative group">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dhaka Office */}
            <div className="text-center sm:text-left md:col-span-1">
              <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">Dhaka Office</h4>
              <p className="text-gray-600 text-sm mb-4">House # 470, Road # 8,<br />Level-3 DOHS Baridhara, Dhaka-1212, Bangladesh</p>

              <p className="text-gray-500 text-xs">
                Email: <span className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group">
                  contact@example.com
                  <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                </span>
              </p>
            </div>

            {/* London Office */}
            <div className="text-center sm:text-left md:col-span-1 lg:ml-16 sm:ml-0 lg:w-[200px]">
              <h4 className="font-bold text-black text-sm md:text-base uppercase tracking-wider mb-2">London Office</h4>
              <p className="text-gray-600 text-sm mb-4">13 Elm parade Main road, <br />Sidcup Kent, UK Da14 6nf .</p>

              <p className="text-gray-500 text-xs">
                Email: <span className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group">
                  contact@example.com
                  <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-green-600"></span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Logo */}
      <div className="border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16">
          <div className="flex justify-center items-center">
            {/* Logo - Centered */}
            <div className="flex justify-center">
              <Image src="/logo.png" alt="Styliz Logo" width={100} height={60} className="h-16 w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Payment Methods */}

    </footer>
  )
}