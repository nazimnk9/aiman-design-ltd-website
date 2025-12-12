"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  selectedCategory?: string
  selectedLabel?: string
}

export function Breadcrumb({ items, selectedCategory, selectedLabel }: BreadcrumbProps) {
  const isProductTypeSelected = selectedCategory && !["CIRCULAR_KNIT", "FLAT_KNIT", "WOVEN"].includes(selectedCategory)

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Desktop/Laptop View */}
        <div className="hidden lg:flex items-center justify-center gap-3 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {index > 0 && <span className="text-gray-900 text-5xl">•</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-red-400 transition-colors uppercase font-medium text-xl">
                  {item.label}
                </Link>
              ) : item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="hover:text-red-400 transition-colors uppercase font-medium text-2xl cursor-pointer text-gray-900 font-bold tracking-wide"
                  style={{ fontWeight: 800 }}>
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-bold uppercase text-xl">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Tablet View */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          {/* Left Side - Selected Category with Arrow */}
          <div className="flex items-center gap-2 text-gray-900">
            {/* Find the selected breadcrumb (the one without href) */}
            {(() => {
              const selectedItem = items.find(item => !item.href && item.onClick);
              return selectedItem ? (
                <span className="text-base font-bold uppercase tracking-wide">{selectedItem.label}</span>
              ) : null;
            })()}
            {isProductTypeSelected && selectedLabel && (
              <>
                <ChevronRight size={16} className="text-gray-600" />
                <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
              </>
            )}
          </div>
          {/* Right Side - Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {index > 0 && <span className="text-gray-900 text-4xl">•</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-red-400 transition-colors uppercase font-medium text-sm">
                    {item.label}
                  </Link>
                ) : item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="hover:text-red-400 transition-colors uppercase font-medium text-BASE cursor-pointer text-gray-900 font-bold"
                    style={{ fontWeight: 800 }}>
                    {item.label}
                  </button>
                ) : (
                  <span className="text-gray-900 font-bold uppercase text-sm">{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-center gap-3 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {index > 0 && <span className="text-gray-900 text-3xl">•</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-red-400 transition-colors uppercase font-medium text-sm">
                  {item.label}
                </Link>
              ) : item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="hover:text-red-400 transition-colors uppercase font-medium text-base cursor-pointer text-gray-900 font-bold"
                  style={{ fontWeight: 800 }}>
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-bold uppercase text-sm">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}