"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface Category {
  id: string
  name: string
  image: string
  description?: string
}

const categories: Category[] = [
  {
    id: "circular_knit",
    name: "Circular Knit",
    image: "/flat_knit.jpg",
  },
  {
    id: "woven",
    name: "Woven",
    image: "/woven.jpg",
  },
  {
    id: "flat_knit",
    name: "Flat Knit",
    image: "/circular_knit.jpg",
  },
]

export function ProductCategoriesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const router = useRouter()

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/products/${categoryId}`)
  }

  return (
    <section className="w-full bg-background pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-16 xl:px-28">

        {/* Header - Centered for all devices */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Product Range</h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our diverse collection for everyone</p> */}
        </div>

        {/* Categories Grid - One row on tablet/laptop/desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div key={category.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div
                className="relative overflow-hidden rounded-lg h-[30rem] md:h-[30rem] cursor-pointer group"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Base Image Container with proper scaling */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className={`w-full h-full object-fixed transition-transform duration-500 ease-out ${hoveredId === category.id ? "scale-110" : "scale-100"
                      }`}
                  />
                </div>

                {/* Hover Overlay - Fabric Texture */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-500 ease-out ${hoveredId === category.id ? "opacity-40" : "opacity-0"
                    }`}
                  style={{
                    backgroundImage: `url('/hover.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Dark Overlay for Text Readability */}
                <div
                  className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${hoveredId === category.id ? "opacity-30" : "opacity-20"
                    }`}
                />

                {/* Content - Category Name */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <h3
                    className={`text-3xl md:text-2xl font-bold text-white text-center transition-all duration-500 ease-out bg-[#5C5554] pt-0.5 w-fit ${hoveredId === category.id ? "scale-110" : "scale-100"
                      }`}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Focus Ring on Hover */}
                <div
                  className={`absolute inset-0 rounded-lg border-4 transition-all duration-500 ${hoveredId === category.id ? "border-transparent opacity-100" : "border-transparent opacity-0"
                    }`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}