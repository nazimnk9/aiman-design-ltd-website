"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "white",
        color: "#1f2937",
      }}
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand - Logo prominently displayed */}
          <div className="animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="AIMAN Logo"
                width={50}
                height={50}
                className="h-20 w-auto filter drop-shadow-lg"
              />
            </div>
            <p className="leading-relaxed font-medium" style={{ color: "#6b7280" }}>
              Premium garments crafted with excellence, style, and sustainability at the heart of everything we do.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-lg mb-6" style={{ color: "#1f2937" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Products", "Team"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="transition-colors duration-300 font-medium hover:underline"
                    style={{ color: "#4b5563" }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-lg mb-6" style={{ color: "#1f2937" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {["Career", "Contact", "Privacy", "Terms"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Career" ? "/career" : link === "Contact" ? "/contact" : "#"}
                    className="transition-colors duration-300 font-medium hover:underline"
                    style={{ color: "#4b5563" }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold text-lg mb-6" style={{ color: "#1f2937" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li
                className="flex items-start gap-3 font-medium transition-colors duration-300 hover:underline"
                style={{ color: "#4b5563" }}
              >
                <Phone size={20} className="flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li
                className="flex items-start gap-3 font-medium transition-colors duration-300 hover:underline"
                style={{ color: "#4b5563" }}
              >
                <Mail size={20} className="flex-shrink-0 mt-0.5" />
                <span>hello@aiman.com</span>
              </li>
              <li
                className="flex items-start gap-3 font-medium transition-colors duration-300 hover:underline"
                style={{ color: "#4b5563" }}
              >
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>123 Fashion St, NYC</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #e5e7eb" }} className="pt-8 mb-8" />

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium" style={{ color: "#6b7280" }}>
            © 2025 AIMAN Garments. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <button
                key={i}
                className="p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur"
                style={{ backgroundColor: "#f3f4f6" }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e5e7eb"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f3f4f6"
                }}
                aria-label={`Social media link ${i + 1}`}
              >
                <Icon size={20} style={{ color: "#1f2937" }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
