"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Category {
  name: string
}

interface CategorySectionProps {
  title: string
  image: string
  categories: Category[]
  side: "left" | "right"
}

function CategorySlide({ title, image, categories, side }: CategorySectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (categories.length || 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (categories.length || 1)) % (categories.length || 1))
  }

  const qualityText = "From the first sample, we take care of the quality at every step, we identify the key points of each product to anticipate possible difficulties in production. We use the Lectra system to create and print the patterns which we then pass on to the manufacturers. All of these actions are meant to decrease the margin of error. Our in-house lab allows us to run the most common tests on each and every order."

  const innovationText = "We are constantly looking for new fabrics, accessories, washes, print and embroidery techniques. To do so, we use our different production offices as a multi-sourcing network to offer the greatest variety to our customers. We are also constantly trying to improve the production processes in our own factories as well as our partner's."

  const displayedText = side === "left" ? qualityText : innovationText

  const animationClass = side === "left"
    ? isVisible ? "animate-slideInLeft" : "opacity-0 -translate-x-160"
    : isVisible ? "animate-slideInRight" : "opacity-0 translate-x-160"

  return (
    <div ref={sectionRef} className="flex flex-col items-center">
      {/* Text Content Section - For Right Side (Desktop) */}
      {side === "right" && (
        <div className="w-full max-w-sm mb-8 hidden lg:block">
          <div className="relative p-6 md:p-30">
            {/* <div className="absolute -top-3 left-0 bg-[#5D9936] text-white px-4 py-1 rounded-full text-sm">
              OUR APPROACH
            </div> */}
          <p className="absolute -top-1 left-0 text-xs md:text-lg text-muted-foreground leading-relaxed">
            {displayedText}
          </p>
          </div>
        </div>
      )}

      {/* Main Container for Text and Image with Animation */}
      <div className={`transition-all duration-1000 ${animationClass}`}>
        <div className="relative w-full max-w-sm">
          {/* Background text positioned behind image - Desktop only */}
          {side === "left" ? (
            <div className="absolute top-1/2 -right-28 transform -translate-y-1/2 z-10 hidden lg:block">
              <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-right whitespace-nowrap">
                QUALITY
              </h2>
            </div>
          ) : (
            <div className="absolute top-1/2 -left-37 transform -translate-y-1/2 z-10 hidden lg:block">
              <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-left whitespace-nowrap">
                INNOVATION
              </h2>
            </div>
          )}

          {/* Image Container with Text Inside */}
          <div className={`bg-amber-100/40 overflow-hidden aspect-square relative z-0 shadow-xl ${
            side === "left" 
              ? "border-t-[1px] border-l-[1px] border-[#103E01]" 
              : "border-b-[1px] border-r-[1px] border-[#103E01]"
          }`}>
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            {/* Text Inside Image - Mobile and Tablet */}
            {side === "left" ?
              <div className="absolute inset-0 flex items-center justify-end lg:hidden">
                <h2 className="text-4xl md:text-5xl font-bold text-[#103E01]">
                  QUALITY
                </h2>
              </div>
              : <div className="absolute inset-0 flex items-center justify-start lg:hidden">
                <h2 className="text-4xl md:text-5xl font-bold text-[#103E01]">
                  INNOVATION
                </h2>
              </div>
            }
          </div>
        </div>
      </div>

      {/* Text Content Section - For Left Side (Desktop) and Both Sides (Mobile/Tablet) */}
      <div className={`pl-1 relative w-full max-w-sm ${side === "left" ? "mt-12" : "mt-8 lg:mt-0"} ${side === "right" ? "block lg:hidden" : ""}`}>
        {/* <div className="relative p-6 md:p-8">
          <div className="absolute -top-3 left-0 bg-[#5D9936] text-white px-4 py-1 rounded-full text-sm">
            {side === "left" ? "OUR PROCESS" : "OUR APPROACH"}
          </div>
        </div> */}
        <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
          {displayedText}
        </p>
      </div>
    </div>
  )
}

export function CategoriesSection() {
  const womenCategories: Category[] = [
    { name: "DRESSES" },
    { name: "SKIRTS" },
    { name: "LINGERIE" },
    { name: "JEANS & DENIM" },
    { name: "ACTIVEWEAR" },
    { name: "SHOES & ACCESSORIES" },
    { name: "TOPS" },
    { name: "BLAZERS" },
    { name: "SWEATERS" },
    { name: "SHORTS" },
  ]

  const menCategories: Category[] = [
    { name: "SUITS & SEPARATES" },
    { name: "SHORTS" },
    { name: "SHIRTS & POLOS" },
    { name: "SWEATERS" },
    { name: "JEANS & DENIM" },
    { name: "TEES" },
    { name: "PANTS" },
    { name: "ACTIVEWEAR" },
    { name: "SHOES & ACCESSORIES" },
    { name: "ACCESSORIES" },
  ]

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-48">
        {/* For Women Section - Left Side */}
        <CategorySlide
          title="QUALITY"
          image="/rsz_design_1.jpg"
          categories={womenCategories}
          side="left"
        />

        {/* For Men Section - Right Side */}
        <CategorySlide
          title="INNOVATION"
          image="/men-fashion-model-wearing-white-sweater-and-black-.jpg"
          categories={menCategories}
          side="right"
        />
      </div>
    </section>
  )
}