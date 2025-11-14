"use client"

import Link from "next/link"
import Image from "next/image"
import { X, Facebook, Instagram, Twitter } from 'lucide-react'
import { useEffect, useState } from "react"

interface OffCanvasSidebarProps {
  isOpen: boolean
  onClose: () => void
  navItems?: Array<{ label: string; href: string }>
  isDesktop?: boolean
}

export function OffCanvasSidebar({ isOpen, onClose, isDesktop = false }: OffCanvasSidebarProps) {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "unset"
  //   }
  //   return () => {
  //     document.body.style.overflow = "unset"
  //   }
  // }, [isOpen])

  useEffect(() => {
    if (!isOpen || !isDesktop) return

    const handleScroll = () => {
      onClose()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isOpen, isDesktop, onClose])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
          style={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
        />
      )}

      <div
        className="fixed top-0 right-0 h-screen z-50 w-80 bg-white shadow-2xl overflow-y-auto transition-transform duration-500 ease-out"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Close button - top right */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={24} style={{ color: "#1f3a93" }} />
          </button>
        </div>

        {/* Centered content area */}
        <div className="h-full flex flex-col items-center justify-center px-6 space-y-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center text-center space-y-4">
            <Image src="/logo.png" alt="AIMAN Logo" width={80} height={80} className="h-20 w-auto" />
            {/* <div>
              <h3 className="font-bold text-2xl" style={{ color: "#1f3a93" }}>
                AIMAN
              </h3>
              <p className="text-sm font-medium" style={{ color: "#00c16e" }}>
                Premium Garments
              </p>
            </div> */}
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6b7280" }}>
              Elevate your style with our carefully crafted collection of premium quality garments.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="font-semibold text-sm" style={{ color: "#1f3a93" }}>
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                  style={{ backgroundColor: "rgba(31, 58, 147, 0.1)" }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "rgba(0, 193, 110, 0.2)"
                    ;(e.currentTarget as HTMLButtonElement).style.color = "#00c16e"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "rgba(31, 58, 147, 0.1)"
                    ;(e.currentTarget as HTMLButtonElement).style.color = "#1f3a93"
                  }}
                  aria-label={`Social media link ${i + 1}`}
                >
                  <Icon size={24} style={{ color: "#1f3a93" }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
