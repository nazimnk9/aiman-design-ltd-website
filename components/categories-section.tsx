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

//       {/* Main Container for Text and Image */}
//       <div className="relative w-full max-w-sm">
//         {/* Background text positioned behind image */}
//         {side === "left" ? (
//           // For Women: background text behind image
//           <div className="absolute top-1/2 -right-40 transform -translate-y-1/2 z-10">
//             <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-right whitespace-nowrap">
//               QUALITY
//             </h2>
//           </div>
//         ) : (
//           // For Men: background text behind image
//           <div className="absolute top-1/2 -left-45 transform -translate-y-1/2 z-10">
//             <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-left whitespace-nowrap">
//               INNOVATION
//             </h2>
//           </div>
//         )}

//         {/* Image Container */}
//         <div className="bg-amber-100/40 rounded-2xl overflow-hidden aspect-square relative z-0">
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
//           title="QUALITY"
//           image="/women-fashion-model-wearing-white-tank-top-and-jea.jpg"
//           categories={womenCategories}
//           side="left"
//         />

//         {/* For Men Section - Right Side */}
//         <CategorySlide
//           title="INNOVATION"
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

//   const qualityText = "From the first sample, we take care of the quality at every step, we identify the key points of each product to anticipate possible difficulties in production. We use the Lectra system to create and print the patterns which we then pass on to the manufacturers. All of these actions are meant to decrease the margin of error. Our in-house lab allows us to run the most common tests on each and every order."

//   const innovationText = "We are constantly looking for new fabrics, accessories, washes, print and embroidery techniques. To do so, we use our different production offices as a multi-sourcing network to offer the greatest variety to our customers. We are also constantly trying to improve the production processes in our own factories as well as our partner's."

//   const displayedText = side === "left" ? qualityText : innovationText

//   const animationClass = side === "left" 
//     ? isVisible ? "animate-slideInLeft" : "opacity-0 -translate-x-20"
//     : isVisible ? "animate-slideInRight" : "opacity-0 translate-x-20"

//   return (
//     <div 
//       ref={sectionRef}
//       className={`flex flex-col items-center transition-all duration-1000 ${animationClass}`}
//     >
//       {/* Text Content Section */}
//       {side === "right" && (
//         <div className="w-full mb-8">
//           <div className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 backdrop-blur-sm">
//             <div className="absolute -top-3 left-6 bg-[#103E01] text-white px-4 py-1 rounded-full text-sm font-semibold">
//               OUR APPROACH
//             </div>
//             <p className="text-foreground/90 leading-relaxed text-sm md:text-base tracking-wide">
//               {displayedText}
//             </p>

//             {/* Interactive Dots Indicator */}
//             {/* <div className="flex gap-2 justify-center mt-6">
//               {[0, 1].map((dot) => (
//                 <button
//                   key={dot}
//                   onClick={() => setCurrentSlide(dot)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     currentSlide === dot 
//                       ? "bg-[#103E01] w-6" 
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                   aria-label={`Go to section ${dot + 1}`}
//                 />
//               ))}
//             </div> */}

//             {/* Navigation Arrows */}
//             {/* <div className="flex gap-3 justify-center mt-4">
//               <button
//                 onClick={prevSlide}
//                 className="p-3 rounded-full bg-white border border-gray-200 hover:border-[#103E01] hover:bg-[#103E01]/5 transition-all duration-300 shadow-sm hover:shadow-md group"
//                 aria-label="Previous section"
//               >
//                 <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-[#103E01] transition-colors" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="p-3 rounded-full bg-white border border-gray-200 hover:border-[#103E01] hover:bg-[#103E01]/5 transition-all duration-300 shadow-sm hover:shadow-md group"
//                 aria-label="Next section"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#103E01] transition-colors" />
//               </button>
//             </div> */}
//           </div>
//         </div>
//       )}

//       {/* Main Container for Text and Image */}
//       <div className="relative w-full max-w-sm">
//         {/* Background text positioned behind image */}
//         {side === "left" ? (
//           <div className="absolute top-1/2 -right-40 transform -translate-y-1/2 z-10">
//             <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-right whitespace-nowrap">
//               QUALITY
//             </h2>
//           </div>
//         ) : (
//           <div className="absolute top-1/2 -left-45 transform -translate-y-1/2 z-10">
//             <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-left whitespace-nowrap">
//               INNOVATION
//             </h2>
//           </div>
//         )}

//         {/* Image Container */}
//         <div className="bg-amber-100/40 rounded-2xl overflow-hidden aspect-square relative z-0 shadow-xl">
//           <img
//             src={image || "/placeholder.svg"}
//             alt={title}
//             className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
//           />
//         </div>
//       </div>

//       {/* For Women: Text Content Below */}
//       {side === "left" && (
//         <div className="relative w-full mt-12">
//           <div className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 backdrop-blur-sm">
//             <div className="absolute -top-3 left-6 bg-[#103E01] text-white px-4 py-1 rounded-full text-sm font-semibold">
//               OUR PROCESS
//             </div>
//             <p className="text-foreground/90 leading-relaxed text-sm md:text-base tracking-wide">
//               {displayedText}
//             </p>

//             {/* Interactive Dots Indicator */}
//             {/* <div className="flex gap-2 justify-center mt-6">
//               {[0, 1].map((dot) => (
//                 <button
//                   key={dot}
//                   onClick={() => setCurrentSlide(dot)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     currentSlide === dot 
//                       ? "bg-[#103E01] w-6" 
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                   aria-label={`Go to section ${dot + 1}`}
//                 />
//               ))}
//             </div> */}

//             {/* Navigation Arrows */}
//             {/* <div className="flex gap-3 justify-center mt-4">
//               <button
//                 onClick={prevSlide}
//                 className="p-3 rounded-full bg-white border border-gray-200 hover:border-[#103E01] hover:bg-[#103E01]/5 transition-all duration-300 shadow-sm hover:shadow-md group"
//                 aria-label="Previous section"
//               >
//                 <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-[#103E01] transition-colors" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="p-3 rounded-full bg-white border border-gray-200 hover:border-[#103E01] hover:bg-[#103E01]/5 transition-all duration-300 shadow-sm hover:shadow-md group"
//                 aria-label="Next section"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#103E01] transition-colors" />
//               </button>
//             </div> */}
//           </div>
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
//     <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 overflow-visible">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
//         {/* For Women Section - Left Side */}
//         <CategorySlide
//           title="QUALITY"
//           image="/women-fashion-model-wearing-white-tank-top-and-jea.jpg"
//           categories={womenCategories}
//           side="left"
//         />

//         {/* For Men Section - Right Side */}
//         <CategorySlide
//           title="INNOVATION"
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

  const qualityText = "From the first sample, we take care of the quality at every step, we identify the key points of each product to anticipate possible difficulties in production. We use the Lectra system to create and print the patterns which we then pass on to the manufacturers. All of these actions are meant to decrease the margin of error. Our in-house lab allows us to run the most common tests on each and every order."

  const innovationText = "We are constantly looking for new fabrics, accessories, washes, print and embroidery techniques. To do so, we use our different production offices as a multi-sourcing network to offer the greatest variety to our customers. We are also constantly trying to improve the production processes in our own factories as well as our partner's."

  const displayedText = side === "left" ? qualityText : innovationText

  const animationClass = side === "left"
    ? isVisible ? "animate-slideInLeft" : "opacity-0 -translate-x-20"
    : isVisible ? "animate-slideInRight" : "opacity-0 translate-x-20"

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col items-center transition-all duration-1000 ${animationClass}`}
    >
      {/* Text Content Section - For Right Side (Desktop) */}
      {side === "right" && (
        <div className="w-full mb-8 hidden lg:block">
          <div className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 backdrop-blur-sm">
            <div className="absolute -top-3 left-6 bg-[#103E01] text-white px-4 py-1 rounded-full text-sm font-semibold">
              OUR APPROACH
            </div>
            <p className="text-foreground/90 leading-relaxed text-sm md:text-base tracking-wide">
              {displayedText}
            </p>
          </div>
        </div>
      )}

      {/* Main Container for Text and Image */}
      <div className="relative w-full max-w-sm">
        {/* Background text positioned behind image - Desktop only */}
        {side === "left" ? (
          <div className="absolute top-1/2 -right-40 transform -translate-y-1/2 z-10 hidden lg:block">
            <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-right whitespace-nowrap">
              QUALITY
            </h2>
          </div>
        ) : (
          <div className="absolute top-1/2 -left-45 transform -translate-y-1/2 z-10 hidden lg:block">
            <h2 className="text-6xl md:text-7xl font-bold text-[#103E01] text-left whitespace-nowrap">
              INNOVATION
            </h2>
          </div>
        )}

        {/* Image Container with Text Inside */}
        <div className="bg-amber-100/40 rounded-2xl overflow-hidden aspect-square relative z-0 shadow-xl">
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

      {/* Text Content Section - For Left Side (Desktop) and Both Sides (Mobile/Tablet) */}
      <div className={`relative w-full ${side === "left" ? "mt-12" : "mt-8 lg:mt-0"} ${side === "right" ? "block lg:hidden" : ""}`}>
        <div className="relative bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 backdrop-blur-sm">
          <div className="absolute -top-3 left-6 bg-[#103E01] text-white px-4 py-1 rounded-full text-sm font-semibold">
            {side === "left" ? "OUR PROCESS" : "OUR APPROACH"}
          </div>
          <p className="text-foreground/90 leading-relaxed text-sm md:text-base tracking-wide">
            {displayedText}
          </p>
        </div>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* For Women Section - Left Side */}
        <CategorySlide
          title="QUALITY"
          image="/women-fashion-model-wearing-white-tank-top-and-jea.jpg"
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