// "use client"

// import { useState, useEffect, useRef } from "react"
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// interface Category {
//   name: string
// }

// interface CategorySectionProps {
//   title: string
//   image: string
//   categories: Category[]
//   side: "left" | "right"
// }

// function CategorySlide({ title, image, categories, side }: CategorySectionProps) {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.3 }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current)
//       }
//     }
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % (categories.length || 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + (categories.length || 1)) % (categories.length || 1))
//   }

//   const displayedCategories = categories.slice(
//     currentSlide * 8,
//     currentSlide * 8 + 8
//   )

//   const animationClass = side === "left" 
//     ? isVisible ? "animate-slideInLeft" : "opacity-0 -translate-x-20"
//     : isVisible ? "animate-slideInRight" : "opacity-0 translate-x-20"

//   return (
//     <div 
//       ref={sectionRef}
//       className={`flex flex-col items-center transition-all duration-1000 ${animationClass}`}
//     >
//       {/* For Men: Categories at top */}
//       {side === "right" && (
//         <div className="w-full mb-8">
//           <div className="grid grid-cols-2 gap-4 mb-4 px-4">
//             {displayedCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="text-sm font-semibold text-foreground tracking-wide hover:text-primary transition-colors text-center"
//               >
//                 {category.name}
//               </div>
//             ))}
//           </div>

//           {/* Slider Controls for Men */}
//           {categories.length > 8 && (
//             <div className="flex gap-4 justify-center px-4">
//               <button
//                 onClick={prevSlide}
//                 className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
//                 aria-label="Previous categories"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
//                 aria-label="Next categories"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Image and Text Container */}
//       <div className="relative w-full max-w-sm">
//         {side === "left" ? (
//           // For Women: text on right side
//           <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-0">
//             <h2 className="text-6xl md:text-7xl font-bold text-foreground/90 text-right whitespace-nowrap drop-shadow-lg">
//               {title}
//             </h2>
//           </div>
//         ) : (
//           // For Men: text on left side
//           <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-0">
//             <h2 className="text-6xl md:text-7xl font-bold text-foreground/90 text-left whitespace-nowrap drop-shadow-lg">
//               {title}
//             </h2>
//           </div>
//         )}
//         {/* Image Container */}
//         <div className="bg-amber-100/40 rounded-2xl overflow-hidden aspect-square relative z-10">
//           <img
//             src={image || "/placeholder.svg"}
//             alt={title}
//             className="w-full h-full object-cover object-center"
//           />
//         </div>

//         {/* Title positioned based on side - half overlaying, half behind */}
//       </div>

//       {/* For Women: Categories below */}
//       {side === "left" && (
//         <div className="relative w-full mt-12">
//           <div className="grid grid-cols-2 gap-4 mb-8 px-4">
//             {displayedCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="text-sm font-semibold text-foreground tracking-wide hover:text-primary transition-colors text-center"
//               >
//                 {category.name}
//               </div>
//             ))}
//           </div>

//           {/* Slider Controls for Women */}
//           {categories.length > 8 && (
//             <div className="flex gap-4 justify-center px-4">
//               <button
//                 onClick={prevSlide}
//                 className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
//                 aria-label="Previous categories"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
//                 aria-label="Next categories"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export function CategoriesSection() {
//   const womenCategories: Category[] = [
//     { name: "DRESSES" },
//     { name: "SKIRTS" },
//     { name: "LINGERIE" },
//     { name: "JEANS & DENIM" },
//     { name: "ACTIVEWEAR" },
//     { name: "SHOES & ACCESSORIES" },
//     { name: "TOPS" },
//     { name: "BLAZERS" },
//     { name: "SWEATERS" },
//     { name: "SHORTS" },
//   ]

//   const menCategories: Category[] = [
//     { name: "SUITS & SEPARATES" },
//     { name: "SHORTS" },
//     { name: "SHIRTS & POLOS" },
//     { name: "SWEATERS" },
//     { name: "JEANS & DENIM" },
//     { name: "TEES" },
//     { name: "PANTS" },
//     { name: "ACTIVEWEAR" },
//     { name: "SHOES & ACCESSORIES" },
//     { name: "ACCESSORIES" },
//   ]

//   return (
//     <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-visible">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
//         {/* For Women Section - Left Side */}
//         <CategorySlide
//           title="For Women"
//           image="/women-fashion-model-wearing-white-tank-top-and-jea.jpg"
//           categories={womenCategories}
//           side="left"
//         />

//         {/* For Men Section - Right Side */}
//         <CategorySlide
//           title="For Men"
//           image="/men-fashion-model-wearing-white-sweater-and-black-.jpg"
//           categories={menCategories}
//           side="right"
//         />
//       </div>
//     </section>
//   )
// }


// "use client"

// import { useState, useEffect, useRef } from "react"
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// interface Category {
//   name: string
// }

// interface CategorySectionProps {
//   title: string
//   image: string
//   categories: Category[]
//   side: "left" | "right"
// }

// function CategorySlide({ title, image, categories, side }: CategorySectionProps) {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.3 }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current)
//       }
//     }
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % (categories.length || 1))
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + (categories.length || 1)) % (categories.length || 1))
//   }

//   const displayedCategories = categories.slice(
//     currentSlide * 8,
//     currentSlide * 8 + 8
//   )

//   const animationClass = side === "left" 
//     ? isVisible ? "animate-slideInLeft" : "opacity-0 -translate-x-20"
//     : isVisible ? "animate-slideInRight" : "opacity-0 translate-x-20"

//   return (
//     <div 
//       ref={sectionRef}
//       className={`flex flex-col items-center transition-all duration-1000 ${animationClass}`}
//     >
//       {/* For Men: Categories at top */}
//       {side === "right" && (
//         <div className="w-full mb-8">
//           <div className="grid grid-cols-2 gap-4 mb-4 px-4">
//             {displayedCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="text-sm font-semibold text-foreground tracking-wide hover:text-primary transition-colors text-center"
//               >
//                 {category.name}
//               </div>
//             ))}
//           </div>

//           {/* Slider Controls for Men */}
//           {categories.length > 8 && (
//             <div className="flex gap-4 justify-center px-4">
//               <button
//                 onClick={prevSlide}
//                 className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
//                 aria-label="Previous categories"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
//                 aria-label="Next categories"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Text positioned behind image */}
//       <div className="relative w-full max-w-sm">
//         {side === "left" ? (
//           // For Women: text on right side behind image
//           <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-0">
//             <h2 className="text-6xl md:text-7xl font-bold text-foreground/90 text-right whitespace-nowrap drop-shadow-lg">
//               For<br />Women
//             </h2>
//           </div>
//         ) : (
//           // For Men: text on left side behind image
//           <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-0">
//             <h2 className="text-6xl md:text-7xl font-bold text-foreground/90 text-left whitespace-nowrap drop-shadow-lg">
//               For<br />Men
//             </h2>
//           </div>
//         )}
        
//         {/* Image Container */}
//         <div className="bg-amber-100/40 rounded-2xl overflow-hidden aspect-square relative z-10">
//           <img
//             src={image || "/placeholder.svg"}
//             alt={title}
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//       </div>

//       {/* For Women: Categories below */}
//       {side === "left" && (
//         <div className="relative w-full mt-12">
//           <div className="grid grid-cols-2 gap-4 mb-8 px-4">
//             {displayedCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="text-sm font-semibold text-foreground tracking-wide hover:text-primary transition-colors text-center"
//               >
//                 {category.name}
//               </div>
//             ))}
//           </div>

//           {/* Slider Controls for Women */}
//           {categories.length > 8 && (
//             <div className="flex gap-4 justify-center px-4">
//               <button
//                 onClick={prevSlide}
//                 className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
//                 aria-label="Previous categories"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
//                 aria-label="Next categories"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export function CategoriesSection() {
//   const womenCategories: Category[] = [
//     { name: "DRESSES" },
//     { name: "SKIRTS" },
//     { name: "LINGERIE" },
//     { name: "JEANS & DENIM" },
//     { name: "ACTIVEWEAR" },
//     { name: "SHOES & ACCESSORIES" },
//     { name: "TOPS" },
//     { name: "BLAZERS" },
//     { name: "SWEATERS" },
//     { name: "SHORTS" },
//   ]

//   const menCategories: Category[] = [
//     { name: "SUITS & SEPARATES" },
//     { name: "SHORTS" },
//     { name: "SHIRTS & POLOS" },
//     { name: "SWEATERS" },
//     { name: "JEANS & DENIM" },
//     { name: "TEES" },
//     { name: "PANTS" },
//     { name: "ACTIVEWEAR" },
//     { name: "SHOES & ACCESSORIES" },
//     { name: "ACCESSORIES" },
//   ]

//   return (
//     <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-visible">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
//         {/* For Women Section - Left Side */}
//         <CategorySlide
//           title="For Women"
//           image="/women-fashion-model-wearing-white-tank-top-and-jea.jpg"
//           categories={womenCategories}
//           side="left"
//         />

//         {/* For Men Section - Right Side */}
//         <CategorySlide
//           title="For Men"
//           image="/men-fashion-model-wearing-white-sweater-and-black-.jpg"
//           categories={menCategories}
//           side="right"
//         />
//       </div>
//     </section>
//   )
// }

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

  const displayedCategories = categories.slice(
    currentSlide * 8,
    currentSlide * 8 + 8
  )

  const animationClass = side === "left" 
    ? isVisible ? "animate-slideInLeft" : "opacity-0 -translate-x-20"
    : isVisible ? "animate-slideInRight" : "opacity-0 translate-x-20"

  return (
    <div 
      ref={sectionRef}
      className={`flex flex-col items-center transition-all duration-1000 ${animationClass}`}
    >
      {/* For Men: Categories at top */}
      {side === "right" && (
        <div className="w-full mb-8">
          <div className="grid grid-cols-2 gap-4 mb-4 px-4">
            {displayedCategories.map((category, index) => (
              <div
                key={index}
                className="text-sm font-semibold text-foreground tracking-wide hover:text-primary transition-colors text-center"
              >
                {category.name}
              </div>
            ))}
          </div>

          {/* Slider Controls for Men */}
          {categories.length > 8 && (
            <div className="flex gap-4 justify-center px-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
                aria-label="Previous categories"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
                aria-label="Next categories"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Container for Text and Image */}
      <div className="relative w-full max-w-sm">
        {/* Background text positioned behind image */}
        {side === "left" ? (
          // For Women: background text behind image
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10">
            <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-right whitespace-nowrap">
              For<br />Women
            </h2>
          </div>
        ) : (
          // For Men: background text behind image
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10">
            <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-left whitespace-nowrap">
              For<br />Men
            </h2>
          </div>
        )}
        
        {/* Image Container */}
        <div className="bg-amber-100/40 rounded-2xl overflow-hidden aspect-square relative z-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* For Women: Categories below */}
      {side === "left" && (
        <div className="relative w-full mt-12">
          <div className="grid grid-cols-2 gap-4 mb-8 px-4">
            {displayedCategories.map((category, index) => (
              <div
                key={index}
                className="text-sm font-semibold text-foreground tracking-wide hover:text-primary transition-colors text-center"
              >
                {category.name}
              </div>
            ))}
          </div>

          {/* Slider Controls for Women */}
          {categories.length > 8 && (
            <div className="flex gap-4 justify-center px-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
                aria-label="Previous categories"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground/5 transition-all"
                aria-label="Next categories"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      )}
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
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* For Women Section - Left Side */}
        <CategorySlide
          title="For Women"
          image="/women-fashion-model-wearing-white-tank-top-and-jea.jpg"
          categories={womenCategories}
          side="left"
        />

        {/* For Men Section - Right Side */}
        <CategorySlide
          title="For Men"
          image="/men-fashion-model-wearing-white-sweater-and-black-.jpg"
          categories={menCategories}
          side="right"
        />
      </div>
    </section>
  )
}