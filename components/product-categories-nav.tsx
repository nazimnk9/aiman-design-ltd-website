"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Category {
  id: string
  label: string
  icon: string
  image?: string
}

interface ProductCategoriesNavProps {
  categories: Category[]
  onCategorySelect: (categoryId: string) => void
  selectedCategory?: string
}

export function ProductCategoriesNav({ categories, onCategorySelect, selectedCategory }: ProductCategoriesNavProps) {
    // Get the selected category label
  const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || "SHOP"
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("categories-scroll")
    if (!container) return

    const scrollAmount = 200
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      setScrollPosition(Math.max(0, scrollPosition - scrollAmount))
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setScrollPosition(scrollPosition + scrollAmount)
    }
  }

  return (
    // <div className="flex items-center justify-end gap-4">
    //   <button
    //     onClick={() => handleScroll("left")}
    //     className="p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
    //     aria-label="Scroll left"
    //   >
    //     <ChevronLeft size={20} className="text-gray-600" />
    //   </button>

    //   {/* Categories Scroll Container */}
    //   <div id="categories-scroll" className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide flex-1">
    //     {categories.map((category) => (
    //       <button
    //         key={category.id}
    //         onClick={() => onCategorySelect(category.id)}
    //         className={`flex-shrink-0 text-center transition-all py-4 border-b-2 ${
    //           selectedCategory === category.id ? "border-gray-900" : "border-transparent hover:opacity-70"
    //         }`}
    //       >
    //         {/* Category Icon */}
    //         <div className="flex justify-center mb-3">
    //           <div className="w-16 h-16 flex items-center justify-center">
    //             <Image
    //               src={category.icon || "/placeholder.svg"}
    //               alt={category.label}
    //               width={64}
    //               height={64}
    //               className="w-full h-full object-contain"
    //             />
    //           </div>
    //         </div>
    //         <p className="text-xs font-semibold text-gray-900 uppercase whitespace-nowrap">{category.label}</p>
    //       </button>
    //     ))}
    //   </div>

    //   <button
    //     onClick={() => handleScroll("right")}
    //     className="p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
    //     aria-label="Scroll right"
    //   >
    //     <ChevronRight size={20} className="text-gray-600" />
    //   </button>
    // </div>
     <div className="flex flex-col">
      {/* Selected Category Display */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <ChevronLeft size={20} className="text-gray-400" />
          <h2 className="text-sm font-bold text-gray-900 uppercase">{selectedLabel}</h2>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-6">
        {/* SHOP Label */}
        <div className="pb-4 border-b border-gray-200">
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">SHOP</p>
        </div>

        {/* Category Icons Grid */}
        <div className="grid grid-cols-3 gap-4">
          {categories.slice(1).map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`flex flex-col items-center gap-2 p-3 transition-all ${
                selectedCategory === category.id
                  ? "border-2 border-gray-900"
                  : "border border-gray-200 hover:border-gray-900"
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={category.label}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs font-semibold text-gray-900 text-center line-clamp-2">{category.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
