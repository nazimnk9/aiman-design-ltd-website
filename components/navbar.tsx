"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { OffCanvasSidebar } from "./off-canvas-sidebar"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isOffCanvasOpen) return

    const handleScroll = () => {
      setIsOffCanvasOpen(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOffCanvasOpen])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products/circular_knit" },
    { label: "Team", href: "/team" },
    // { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav
        className="sticky top-0 z-40 border-b border-border shadow-sm"
        style={{
          backgroundColor: "var(--navbar-bg)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="AIMAN Logo" width={44} height={40} className="h-18 w-auto" />
            </Link>

            <div className="hidden lg:flex gap-8 items-center justify-center flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-['Segoe_UI'] font-medium transition-colors relative group"
                  style={{
                    color: "#0A0F1F",
                    fontWeight: "600",
                    fontSize: "17px"
                  }}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    style={{
                      backgroundColor: "var(--navbar-hover)",
                    }}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Right side: Menu buttons for different screen sizes */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden md:flex hidden p-2 rounded-lg transition-colors"
                style={{
                  color: "var(--navbar-text)",
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                }}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <button
                onClick={() => setIsOffCanvasOpen(!isOffCanvasOpen)}
                className="hidden lg:flex p-2 rounded-lg transition-colors"
                style={{
                  color: "var(--navbar-text)",
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                }}
                aria-label="Toggle off-canvas menu"
              >
                <Menu size={24} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{
                  color: "var(--navbar-text)",
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                }}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2 animate-slideIn">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${isActive(item.href) ? "bg-[rgba(0,193,110,0.2)]" : ""
                    }`}
                  style={{
                    color: isActive(item.href) ? "var(--navbar-hover)" : "var(--navbar-text)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.backgroundColor = "rgba(0, 193, 110, 0.1)";
                      e.currentTarget.style.color = "var(--navbar-hover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "var(--navbar-text)";
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <OffCanvasSidebar
        isOpen={isOffCanvasOpen}
        onClose={() => setIsOffCanvasOpen(false)}
        navItems={navItems}
      />
    </>
  )
}