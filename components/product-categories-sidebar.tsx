// "use client"

// import Image from "next/image"
// import { ChevronLeft } from "lucide-react"

// interface Category {
//   id: string
//   label: string
//   icon: string
//   href: string
// }

// interface ProductCategoriesSidebarProps {
//   categories: Category[]
//   selectedCategory: string
//   breadcrumbLabel: string
//   onCategorySelect?: (categoryId: string) => void
// }

// export function ProductCategoriesSidebar({
//   categories,
//   selectedCategory,
//   breadcrumbLabel,
//   onCategorySelect,
// }: ProductCategoriesSidebarProps) {
//   // Get the selected category label
//   const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""

//   // Filter out the breadcrumb category from the grid (don't show KIDS, WOMEN, MEN in grid)
//   const gridCategories = categories.filter((cat) => cat.id !== "men" && cat.id !== "women" && cat.id !== "kids")

//   return (
//     <div className="flex flex-col gap-6">
//       <div className="flex items-start justify-between gap-8">
//         {/* Selected Category Display - Left Side */}
//         <div className="flex-1 min-w-[200px]">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             <ChevronLeft size={16} className="text-gray-600" />
//             <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//           </div>
//         </div>

//         {/* Categories Grid - Right Side */}
//         <div className="flex-1 grid grid-cols-5 gap-4">
//           {gridCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => onCategorySelect?.(category.id)}
//               className={`flex flex-col items-center gap-2 p-3 transition-all border ${
//                 selectedCategory === category.id
//                   ? "border-gray-900 bg-gray-50"
//                   : "border-gray-200 hover:border-gray-900"
//               }`}
//             >
//               <div className="w-10 h-10 flex items-center justify-center">
//                 <Image
//                   src={category.icon || "/placeholder.svg"}
//                   alt={category.label}
//                   width={32}
//                   height={32}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <p className="text-xs font-semibold text-gray-900 text-center line-clamp-2">{category.label}</p>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Full Width Border Below */}
//       <div className="w-full border-b border-gray-200"></div>
//     </div>
//   )
// }


// "use client"

// import Image from "next/image"
// import { ChevronLeft } from "lucide-react"

// interface Category {
//   id: string
//   label: string
//   icon: string
//   href: string
// }

// interface ProductCategoriesSidebarProps {
//   categories: Category[]
//   selectedCategory: string
//   breadcrumbLabel: string
//   onCategorySelect?: (categoryId: string) => void
// }

// export function ProductCategoriesSidebar({
//   categories,
//   selectedCategory,
//   breadcrumbLabel,
//   onCategorySelect,
// }: ProductCategoriesSidebarProps) {
//   const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""
//   const isProductTypeSelected = !["men", "women", "kids"].includes(selectedCategory)

//   // Filter out the breadcrumb category from the grid (don't show KIDS, WOMEN, MEN in grid)
//   const gridCategories = categories.filter((cat) => cat.id !== "men" && cat.id !== "women" && cat.id !== "kids")

//   return (
//     <>
//     <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-8">
//       <div className="flex items-center justify-between gap-180">
//         {/* Selected Category Display - Left Side */}
//         <div className="flex-1 min-w-[300px]">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             {isProductTypeSelected && (
//               <>
//                 <ChevronLeft size={16} className="text-gray-600" />
//                 <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//                 {/* <ChevronLeft size={16} className="text-gray-600" />
//                 <button
//                   onClick={() => onCategorySelect?.(breadcrumbLabel.toLowerCase())}
//                   className="text-base font-bold uppercase tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
//                 >
//                   {selectedLabel}
//                 </button> */}
//               </>
//             )}
//           </div>
//         </div>

//         {/* Categories Grid - Right Side */}
//         <div className="w-full grid grid-cols-4 gap-0">
//           {gridCategories.map((category) => (
//             <div
//               key={category.id}
//               className="flex flex-col items-center justify-center group"
//             >
//               <button
//                 key={category.id}
//                 onClick={() => onCategorySelect?.(category.id)}
//                 className={`flex flex-col items-center gap-0 p-6 transition-all w-full border ${selectedCategory === category.id
//                     ? "border-gray-900"
//                     : "border-gray-200 hover:border-gray-900"
//                   }`}
//               >
//                 <div className="w-50 h-50 flex items-center justify-center">
//                   <Image
//                     src={category.icon || "/placeholder.svg"}
//                     alt={category.label}
//                     width={350}
//                     height={550}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </button>

//               {/* Category name below */}
//               <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                 {category.label}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* Full Width Border Below */}
//     </div>
//     <div className="w-full border-b border-gray-200"></div> 
//     </>
//   )
// }


// "use client"

// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { useState, useRef, useEffect } from "react"

// interface Category {
//   id: string
//   label: string
//   icon: string
//   href: string
// }

// interface ProductCategoriesSidebarProps {
//   categories: Category[]
//   selectedCategory: string
//   breadcrumbLabel: string
//   onCategorySelect?: (categoryId: string) => void
// }

// export function ProductCategoriesSidebar({
//   categories,
//   selectedCategory,
//   breadcrumbLabel,
//   onCategorySelect,
// }: ProductCategoriesSidebarProps) {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [scrollLeft, setScrollLeft] = useState(0)
//   const carouselRef = useRef<HTMLDivElement>(null)

//   const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""
//   const isProductTypeSelected = !["men", "women", "kids"].includes(selectedCategory)

//   // Filter out the breadcrumb category from the grid
//   const gridCategories = categories.filter((cat) => cat.id !== "men" && cat.id !== "women" && cat.id !== "kids")

//   const slidesToShow = {
//     mobile: 2,
//     tablet: 3,
//     desktop: 4
//   }

//   const totalSlides = Math.ceil(gridCategories.length / slidesToShow.mobile)
//   const totalTabletSlides = Math.ceil(gridCategories.length / slidesToShow.tablet)

//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (!carouselRef.current) return
//     setIsDragging(true)
//     setStartX(e.pageX - carouselRef.current.offsetLeft)
//     setScrollLeft(carouselRef.current.scrollLeft)
//   }

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging || !carouselRef.current) return
//     e.preventDefault()
//     const x = e.pageX - carouselRef.current.offsetLeft
//     const walk = (x - startX) * 2
//     carouselRef.current.scrollLeft = scrollLeft - walk
//   }

//   const handleMouseUp = () => {
//     setIsDragging(false)
//   }

//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (!carouselRef.current) return
//     const touch = e.touches[0]
//     setStartX(touch.pageX - carouselRef.current.offsetLeft)
//     setScrollLeft(carouselRef.current.scrollLeft)
//   }

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!carouselRef.current) return
//     const touch = e.touches[0]
//     const x = touch.pageX - carouselRef.current.offsetLeft
//     const walk = (x - startX) * 2
//     carouselRef.current.scrollLeft = scrollLeft - walk
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
//   }

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index)
//   }

//   // Auto-scroll carousel on slide change
//   useEffect(() => {
//     if (carouselRef.current) {
//       const scrollAmount = carouselRef.current.clientWidth * currentSlide
//       carouselRef.current.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth'
//       })
//     }
//   }, [currentSlide])

//   return (
//     <>
//       {/* Desktop & Laptop View */}
//       <div className="hidden lg:flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex items-center justify-between gap-8">
//           {/* Selected Category Display - Left Side */}
//           <div className="flex-1 min-w-[300px]">
//             <div className="flex items-center gap-2 text-gray-900">
//               <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//               {isProductTypeSelected && (
//                 <>
//                   <ChevronLeft size={16} className="text-gray-600" />
//                   <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Categories Grid - Right Side */}
//           <div className="w-full grid grid-cols-4 gap-0">
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex flex-col items-center justify-center group"
//               >
//                 <button
//                   onClick={() => onCategorySelect?.(category.id)}
//                   className={`flex flex-col items-center gap-0 p-6 transition-all w-full border ${
//                     selectedCategory === category.id
//                       ? "border-gray-900"
//                       : "border-gray-200 hover:border-gray-900"
//                   }`}
//                 >
//                   <div className="w-50 h-50 flex items-center justify-center">
//                     <Image
//                       src={category.icon || "/placeholder.svg"}
//                       alt={category.label}
//                       width={350}
//                       height={550}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </button>

//                 <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                   {category.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tablet View */}
//       <div className="hidden md:flex lg:hidden flex-col px-4 sm:px-6 py-6">
//         {/* Selected Category Row - Center */}
//         <div className="flex items-center justify-center mb-6">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             {isProductTypeSelected && (
//               <>
//                 <ChevronLeft size={16} className="text-gray-600" />
//                 <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Categories Carousel - Center */}
//         <div className="relative overflow-hidden">
//           <div 
//             ref={carouselRef}
//             className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex-shrink-0 w-1/3 px-2 snap-center"
//               >
//                 <div className="flex flex-col items-center justify-center group">
//                   <button
//                     onClick={() => onCategorySelect?.(category.id)}
//                     className={`flex flex-col items-center gap-0 p-4 transition-all w-full border ${
//                       selectedCategory === category.id
//                         ? "border-gray-900"
//                         : "border-gray-200 hover:border-gray-900"
//                     }`}
//                   >
//                     <div className="w-40 h-40 flex items-center justify-center">
//                       <Image
//                         src={category.icon || "/placeholder.svg"}
//                         alt={category.label}
//                         width={300}
//                         height={450}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </button>

//                   <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                     {category.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Navigation Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalTabletSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="flex md:hidden flex-col px-4 py-6">
//         {/* Selected Category Row - Center */}
//         <div className="flex items-center justify-center mb-6">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-sm font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             {isProductTypeSelected && (
//               <>
//                 <ChevronLeft size={14} className="text-gray-600" />
//                 <span className="text-sm font-bold uppercase tracking-wide">{selectedLabel}</span>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Categories Carousel */}
//         <div className="relative overflow-hidden">
//           <div 
//             ref={carouselRef}
//             className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex-shrink-0 w-1/2 px-2 snap-center"
//               >
//                 <div className="flex flex-col items-center justify-center group">
//                   <button
//                     onClick={() => onCategorySelect?.(category.id)}
//                     className={`flex flex-col items-center gap-0 p-3 transition-all w-full border ${
//                       selectedCategory === category.id
//                         ? "border-gray-900"
//                         : "border-gray-200 hover:border-gray-900"
//                     }`}
//                   >
//                     <div className="w-32 h-32 flex items-center justify-center">
//                       <Image
//                         src={category.icon || "/placeholder.svg"}
//                         alt={category.label}
//                         width={250}
//                         height={350}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </button>

//                   <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                     {category.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Navigation Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           {/* <button
//             onClick={prevSlide}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={20} />
//           </button> */}
//         </div>
//       </div>

//       {/* Full Width Border Below */}
//       <div className="w-full border-b border-gray-200"></div>
//     </>
//   )
// }

// "use client"

// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { useState, useRef, useEffect } from "react"

// interface Category {
//   id: string
//   label: string
//   icon: string
//   href: string
// }

// interface ProductCategoriesSidebarProps {
//   categories: Category[]
//   selectedCategory: string
//   breadcrumbLabel: string
//   onCategorySelect?: (categoryId: string) => void
// }

// export function ProductCategoriesSidebar({
//   categories,
//   selectedCategory,
//   breadcrumbLabel,
//   onCategorySelect,
// }: ProductCategoriesSidebarProps) {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [scrollLeft, setScrollLeft] = useState(0)
//   const carouselRef = useRef<HTMLDivElement>(null)

//   const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""
//   const isProductTypeSelected = !["men", "women", "kids"].includes(selectedCategory)

//   // Filter out the breadcrumb category from the grid
//   const gridCategories = categories.filter((cat) => cat.id !== "men" && cat.id !== "women" && cat.id !== "kids")

//   const slidesToShow = {
//     mobile: 2,
//     tablet: 3,
//     desktop: 4
//   }

//   const totalSlides = Math.ceil(gridCategories.length / slidesToShow.mobile)
//   const totalTabletSlides = Math.ceil(gridCategories.length / slidesToShow.tablet)

//   // Calculate current slide based on scroll position
//   const updateCurrentSlide = () => {
//     if (!carouselRef.current) return

//     const scrollLeft = carouselRef.current.scrollLeft
//     const itemWidth = carouselRef.current.scrollWidth / gridCategories.length
//     const containerWidth = carouselRef.current.clientWidth

//     // Determine if we're on mobile or tablet based on viewport
//     const isMobile = window.innerWidth < 768
//     const itemsPerView = isMobile ? slidesToShow.mobile : slidesToShow.tablet
//     const slideWidth = itemWidth * itemsPerView

//     const newSlide = Math.round(scrollLeft / slideWidth)
//     const maxSlides = isMobile ? totalSlides : totalTabletSlides

//     setCurrentSlide(Math.min(Math.max(0, newSlide), maxSlides - 1))
//   }

//   // Handle scroll events to update dots
//   useEffect(() => {
//     const carousel = carouselRef.current
//     if (!carousel) return

//     const handleScroll = () => {
//       // Use requestAnimationFrame to throttle scroll events
//       requestAnimationFrame(updateCurrentSlide)
//     }

//     carousel.addEventListener('scroll', handleScroll, { passive: true })

//     return () => {
//       carousel.removeEventListener('scroll', handleScroll)
//     }
//   }, [gridCategories.length, totalSlides, totalTabletSlides])

//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (!carouselRef.current) return
//     setIsDragging(true)
//     setStartX(e.pageX - carouselRef.current.offsetLeft)
//     setScrollLeft(carouselRef.current.scrollLeft)
//   }

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging || !carouselRef.current) return
//     e.preventDefault()
//     const x = e.pageX - carouselRef.current.offsetLeft
//     const walk = (x - startX) * 2
//     carouselRef.current.scrollLeft = scrollLeft - walk
//   }

//   const handleMouseUp = () => {
//     setIsDragging(false)
//   }

//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (!carouselRef.current) return
//     const touch = e.touches[0]
//     setStartX(touch.pageX - carouselRef.current.offsetLeft)
//     setScrollLeft(carouselRef.current.scrollLeft)
//   }

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!carouselRef.current) return
//     const touch = e.touches[0]
//     const x = touch.pageX - carouselRef.current.offsetLeft
//     const walk = (x - startX) * 2
//     carouselRef.current.scrollLeft = scrollLeft - walk
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
//   }

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index)
//   }

//   // Auto-scroll carousel on slide change
//   useEffect(() => {
//     if (carouselRef.current) {
//       const isMobile = window.innerWidth < 768
//       const itemsPerView = isMobile ? slidesToShow.mobile : slidesToShow.tablet
//       const itemWidth = carouselRef.current.scrollWidth / gridCategories.length
//       const slideWidth = itemWidth * itemsPerView
//       const scrollAmount = slideWidth * currentSlide

//       carouselRef.current.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth'
//       })
//     }
//   }, [currentSlide, gridCategories.length])

//   return (
//     <>
//       {/* Desktop & Laptop View */}
//       <div className="hidden lg:flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex items-center justify-between gap-8">
//           {/* Selected Category Display - Left Side */}
//           <div className="flex-1 min-w-[300px]">
//             <div className="flex items-center gap-2 text-gray-900">
//               <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//               {isProductTypeSelected && (
//                 <>
//                   <ChevronLeft size={16} className="text-gray-600" />
//                   <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Categories Grid - Right Side */}
//           <div className="w-full grid grid-cols-4 gap-0">
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex flex-col items-center justify-center group"
//               >
//                 <button
//                   onClick={() => onCategorySelect?.(category.id)}
//                   className={`flex flex-col items-center gap-0 p-6 transition-all w-full border ${
//                     selectedCategory === category.id
//                       ? "border-gray-900"
//                       : "border-gray-200 hover:border-gray-900"
//                   }`}
//                 >
//                   <div className="w-50 h-50 flex items-center justify-center">
//                     <Image
//                       src={category.icon || "/placeholder.svg"}
//                       alt={category.label}
//                       width={350}
//                       height={550}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </button>

//                 <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                   {category.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tablet View */}
//       <div className="hidden md:flex lg:hidden flex-col px-4 sm:px-6 py-6">
//         {/* Selected Category Row - Center */}
//         <div className="flex items-center justify-center mb-6">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             {isProductTypeSelected && (
//               <>
//                 <ChevronLeft size={16} className="text-gray-600" />
//                 <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Categories Carousel - Center */}
//         <div className="relative overflow-hidden">
//           <div 
//             ref={carouselRef}
//             className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex-shrink-0 w-1/3 px-2 snap-center"
//               >
//                 <div className="flex flex-col items-center justify-center group">
//                   <button
//                     onClick={() => onCategorySelect?.(category.id)}
//                     className={`flex flex-col items-center gap-0 p-4 transition-all w-full border ${
//                       selectedCategory === category.id
//                         ? "border-gray-900"
//                         : "border-gray-200 hover:border-gray-900"
//                     }`}
//                   >
//                     <div className="w-40 h-40 flex items-center justify-center">
//                       <Image
//                         src={category.icon || "/placeholder.svg"}
//                         alt={category.label}
//                         width={300}
//                         height={450}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </button>

//                   <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                     {category.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Navigation Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalTabletSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="flex md:hidden flex-col px-4 py-6">
//         {/* Selected Category Row - Center */}
//         <div className="flex items-center justify-center mb-6">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-sm font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             {isProductTypeSelected && (
//               <>
//                 <ChevronLeft size={14} className="text-gray-600" />
//                 <span className="text-sm font-bold uppercase tracking-wide">{selectedLabel}</span>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Categories Carousel */}
//         <div className="relative overflow-hidden">
//           <div 
//             ref={carouselRef}
//             className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex-shrink-0 w-1/2 px-2 snap-center"
//               >
//                 <div className="flex flex-col items-center justify-center group">
//                   <button
//                     onClick={() => onCategorySelect?.(category.id)}
//                     className={`flex flex-col items-center gap-0 p-3 transition-all w-full border ${
//                       selectedCategory === category.id
//                         ? "border-gray-900"
//                         : "border-gray-200 hover:border-gray-900"
//                     }`}
//                   >
//                     <div className="w-32 h-32 flex items-center justify-center">
//                       <Image
//                         src={category.icon || "/placeholder.svg"}
//                         alt={category.label}
//                         width={250}
//                         height={350}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </button>

//                   <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                     {category.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Navigation Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           {/* <button
//             onClick={prevSlide}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={20} />
//           </button> */}
//         </div>
//       </div>

//       {/* Full Width Border Below */}
//       <div className="w-full border-b border-gray-200"></div>
//     </>
//   )
// }

// "use client"

// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { useState, useRef, useEffect } from "react"

// interface Category {
//   id: string
//   label: string
//   icon: string
//   href: string
// }

// interface ProductCategoriesSidebarProps {
//   categories: Category[]
//   selectedCategory: string
//   breadcrumbLabel: string
//   onCategorySelect?: (categoryId: string) => void
// }

// export function ProductCategoriesSidebar({
//   categories,
//   selectedCategory,
//   breadcrumbLabel,
//   onCategorySelect,
// }: ProductCategoriesSidebarProps) {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [currentTabletSlide, setCurrentTabletSlide] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [scrollLeft, setScrollLeft] = useState(0)
//   const carouselRef = useRef<HTMLDivElement>(null)
//   const tabletCarouselRef = useRef<HTMLDivElement>(null)

//   const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""
//   const isProductTypeSelected = !["men", "women", "kids"].includes(selectedCategory)

//   // Filter out the breadcrumb category from the grid
//   const gridCategories = categories.filter((cat) => cat.id !== "men" && cat.id !== "women" && cat.id !== "kids")

//   const slidesToShow = {
//     mobile: 2,
//     tablet: 3,
//     desktop: 4
//   }

//   const totalSlides = Math.ceil(gridCategories.length / slidesToShow.mobile)
//   const totalTabletSlides = Math.ceil(gridCategories.length / slidesToShow.tablet)

//   // Calculate current slide based on scroll position for mobile
//   const updateCurrentSlide = () => {
//     if (!carouselRef.current) return

//     const scrollLeft = carouselRef.current.scrollLeft
//     const itemWidth = carouselRef.current.scrollWidth / gridCategories.length
//     const slideWidth = itemWidth * slidesToShow.mobile
//     const newSlide = Math.round(scrollLeft / slideWidth)

//     setCurrentSlide(Math.min(Math.max(0, newSlide), totalSlides - 1))
//   }

//   // Calculate current slide based on scroll position for tablet
//   const updateCurrentTabletSlide = () => {
//     if (!tabletCarouselRef.current) return

//     const scrollLeft = tabletCarouselRef.current.scrollLeft
//     const itemWidth = tabletCarouselRef.current.scrollWidth / gridCategories.length
//     const slideWidth = itemWidth * slidesToShow.tablet
//     const newSlide = Math.round(scrollLeft / slideWidth)

//     setCurrentTabletSlide(Math.min(Math.max(0, newSlide), totalTabletSlides - 1))
//   }

//   // Handle scroll events for mobile carousel
//   useEffect(() => {
//     const carousel = carouselRef.current
//     if (!carousel) return

//     const handleScroll = () => {
//       requestAnimationFrame(updateCurrentSlide)
//     }

//     carousel.addEventListener('scroll', handleScroll, { passive: true })

//     return () => {
//       carousel.removeEventListener('scroll', handleScroll)
//     }
//   }, [gridCategories.length, totalSlides])

//   // Handle scroll events for tablet carousel
//   useEffect(() => {
//     const carousel = tabletCarouselRef.current
//     if (!carousel) return

//     const handleScroll = () => {
//       requestAnimationFrame(updateCurrentTabletSlide)
//     }

//     carousel.addEventListener('scroll', handleScroll, { passive: true })

//     return () => {
//       carousel.removeEventListener('scroll', handleScroll)
//     }
//   }, [gridCategories.length, totalTabletSlides])

//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (!carouselRef.current) return
//     setIsDragging(true)
//     setStartX(e.pageX - carouselRef.current.offsetLeft)
//     setScrollLeft(carouselRef.current.scrollLeft)
//   }

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging || !carouselRef.current) return
//     e.preventDefault()
//     const x = e.pageX - carouselRef.current.offsetLeft
//     const walk = (x - startX) * 2
//     carouselRef.current.scrollLeft = scrollLeft - walk
//   }

//   const handleMouseUp = () => {
//     setIsDragging(false)
//   }

//   const handleTouchStart = (e: React.TouchEvent) => {
//     if (!carouselRef.current) return
//     const touch = e.touches[0]
//     setStartX(touch.pageX - carouselRef.current.offsetLeft)
//     setScrollLeft(carouselRef.current.scrollLeft)
//   }

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!carouselRef.current) return
//     const touch = e.touches[0]
//     const x = touch.pageX - carouselRef.current.offsetLeft
//     const walk = (x - startX) * 2
//     carouselRef.current.scrollLeft = scrollLeft - walk
//   }

//   // Tablet carousel handlers
//   const handleTabletMouseDown = (e: React.MouseEvent) => {
//     if (!tabletCarouselRef.current) return
//     setIsDragging(true)
//     setStartX(e.pageX - tabletCarouselRef.current.offsetLeft)
//     setScrollLeft(tabletCarouselRef.current.scrollLeft)
//   }

//   const handleTabletMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging || !tabletCarouselRef.current) return
//     e.preventDefault()
//     const x = e.pageX - tabletCarouselRef.current.offsetLeft
//     const walk = (x - startX) * 2
//     tabletCarouselRef.current.scrollLeft = scrollLeft - walk
//   }

//   const handleTabletTouchStart = (e: React.TouchEvent) => {
//     if (!tabletCarouselRef.current) return
//     const touch = e.touches[0]
//     setStartX(touch.pageX - tabletCarouselRef.current.offsetLeft)
//     setScrollLeft(tabletCarouselRef.current.scrollLeft)
//   }

//   const handleTabletTouchMove = (e: React.TouchEvent) => {
//     if (!tabletCarouselRef.current) return
//     const touch = e.touches[0]
//     const x = touch.pageX - tabletCarouselRef.current.offsetLeft
//     const walk = (x - startX) * 2
//     tabletCarouselRef.current.scrollLeft = scrollLeft - walk
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
//   }

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index)
//   }

//   const goToTabletSlide = (index: number) => {
//     setCurrentTabletSlide(index)
//   }

//   // Auto-scroll mobile carousel on slide change
//   useEffect(() => {
//     if (carouselRef.current) {
//       const itemWidth = carouselRef.current.scrollWidth / gridCategories.length
//       const slideWidth = itemWidth * slidesToShow.mobile
//       const scrollAmount = slideWidth * currentSlide

//       carouselRef.current.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth'
//       })
//     }
//   }, [currentSlide, gridCategories.length])

//   // Auto-scroll tablet carousel on slide change
//   useEffect(() => {
//     if (tabletCarouselRef.current) {
//       const itemWidth = tabletCarouselRef.current.scrollWidth / gridCategories.length
//       const slideWidth = itemWidth * slidesToShow.tablet
//       const scrollAmount = slideWidth * currentTabletSlide

//       tabletCarouselRef.current.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth'
//       })
//     }
//   }, [currentTabletSlide, gridCategories.length])

//   return (
//     <>
//       {/* Desktop & Laptop View */}
//       <div className="hidden lg:flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex items-center justify-between gap-8">
//           {/* Selected Category Display - Left Side */}
//           <div className="flex-1 min-w-[300px]">
//             <div className="flex items-center gap-2 text-gray-900">
//               <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//               {isProductTypeSelected && (
//                 <>
//                   <ChevronLeft size={16} className="text-gray-600" />
//                   <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Categories Grid - Right Side */}
//           <div className="w-full grid grid-cols-4 gap-0">
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex flex-col items-center justify-center group"
//               >
//                 <button
//                   onClick={() => onCategorySelect?.(category.id)}
//                   className={`flex flex-col items-center gap-0 p-6 transition-all w-full border ${
//                     selectedCategory === category.id
//                       ? "border-gray-900"
//                       : "border-gray-200 hover:border-gray-900"
//                   }`}
//                 >
//                   <div className="w-50 h-50 flex items-center justify-center">
//                     <Image
//                       src={category.icon || "/placeholder.svg"}
//                       alt={category.label}
//                       width={350}
//                       height={550}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </button>

//                 <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                   {category.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tablet View */}
//       <div className="hidden md:flex lg:hidden flex-col px-4 sm:px-6 py-6">
//         {/* Selected Category Row - Center */}
//         <div className="flex items-center justify-center mb-6">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             {isProductTypeSelected && (
//               <>
//                 <ChevronLeft size={16} className="text-gray-600" />
//                 <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Categories Carousel - Center */}
//         <div className="relative overflow-hidden">
//           <div 
//             ref={tabletCarouselRef}
//             className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//             onMouseDown={handleTabletMouseDown}
//             onMouseMove={handleTabletMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             onTouchStart={handleTabletTouchStart}
//             onTouchMove={handleTabletTouchMove}
//             style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex-shrink-0 w-1/3 px-2 snap-center"
//               >
//                 <div className="flex flex-col items-center justify-center group">
//                   <button
//                     onClick={() => onCategorySelect?.(category.id)}
//                     className={`flex flex-col items-center gap-0 p-4 transition-all w-full border ${
//                       selectedCategory === category.id
//                         ? "border-gray-900"
//                         : "border-gray-200 hover:border-gray-900"
//                     }`}
//                   >
//                     <div className="w-40 h-40 flex items-center justify-center">
//                       <Image
//                         src={category.icon || "/placeholder.svg"}
//                         alt={category.label}
//                         width={300}
//                         height={450}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </button>

//                   <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                     {category.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Navigation Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalTabletSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToTabletSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   index === currentTabletSlide ? 'bg-gray-900' : 'bg-gray-300'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="flex md:hidden flex-col px-4 py-6">
//         {/* Selected Category Row - Center */}
//         <div className="flex items-center justify-center mb-6">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-sm font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             {isProductTypeSelected && (
//               <>
//                 <ChevronLeft size={14} className="text-gray-600" />
//                 <span className="text-sm font-bold uppercase tracking-wide">{selectedLabel}</span>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Categories Carousel */}
//         <div className="relative overflow-hidden">
//           <div 
//             ref={carouselRef}
//             className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {gridCategories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex-shrink-0 w-1/2 px-2 snap-center"
//               >
//                 <div className="flex flex-col items-center justify-center group">
//                   <button
//                     onClick={() => onCategorySelect?.(category.id)}
//                     className={`flex flex-col items-center gap-0 p-3 transition-all w-full border ${
//                       selectedCategory === category.id
//                         ? "border-gray-900"
//                         : "border-gray-200 hover:border-gray-900"
//                     }`}
//                   >
//                     <div className="w-32 h-32 flex items-center justify-center">
//                       <Image
//                         src={category.icon || "/placeholder.svg"}
//                         alt={category.label}
//                         width={250}
//                         height={350}
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </button>

//                   <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
//                     {category.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Carousel Navigation Dots */}
//           <div className="flex justify-center mt-4 space-x-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           {/* <button
//             onClick={prevSlide}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={20} />
//           </button> */}
//         </div>
//       </div>

//       {/* Full Width Border Below */}
//       <div className="w-full border-b border-gray-200"></div>
//     </>
//   )
// }


"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Category {
  id: string
  label: string
  icon: string
  href: string
}

interface ProductCategoriesSidebarProps {
  categories: Category[]
  selectedCategory: string
  breadcrumbLabel: string
  onCategorySelect?: (categoryId: string) => void
}

export function ProductCategoriesSidebar({
  categories,
  selectedCategory,
  breadcrumbLabel,
  onCategorySelect,
}: ProductCategoriesSidebarProps) {
  const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""
  const isProductTypeSelected = !["men", "women", "kids"].includes(selectedCategory)

  // Filter out the breadcrumb category from the grid
  const gridCategories = categories.filter((cat) => cat.id !== "men" && cat.id !== "women" && cat.id !== "kids")

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Calculate slides for different screen sizes
  const slidesPerView = {
    mobile: 2,
    tablet: 3
  }

  const totalSlides = Math.ceil(gridCategories.length / slidesPerView.tablet)
  const totalMobileSlides = Math.ceil(gridCategories.length / slidesPerView.mobile)

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const offset = clientX - dragStart
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 50
    if (dragOffset > threshold && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    } else if (dragOffset < -threshold) {
      const maxSlide = window.innerWidth >= 768 ? totalSlides - 1 : totalMobileSlides - 1
      if (currentSlide < maxSlide) {
        setCurrentSlide(prev => prev + 1)
      }
    }

    setDragOffset(0)
  }

  const nextSlide = () => {
    const maxSlide = window.innerWidth >= 768 ? totalSlides - 1 : totalMobileSlides - 1
    setCurrentSlide(prev => prev < maxSlide ? prev + 1 : prev)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : prev)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDragMove(e as any)
    const handleMouseUp = () => handleDragEnd()

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragStart])

  return (
    <>
      {/* Desktop/Laptop View */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between gap-8">
            {/* Selected Category Display - Left Side */}
            {/* <div className="flex-1 min-w-[300px]">
              <div className="flex items-center gap-2 text-gray-900">
                <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
                {isProductTypeSelected && selectedLabel && (
                  <>
                    <ChevronLeft size={16} className="text-gray-600" />
                    <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
                  </>
                )}
              </div>
            </div> */}

            <div className="flex-1 min-w-[400px]">
              <div className="flex items-center gap-2 text-gray-900">
                <span className="text-2xl font-bold uppercase tracking-wide">
                  {breadcrumbLabel}
                </span>

                {isProductTypeSelected && selectedLabel && (
                  <>
                    <ChevronRight size={16} className="text-gray-600" />
                    <span className="text-2xl font-bold uppercase tracking-wide">
                      {selectedLabel}
                    </span>
                  </>
                )}
              </div>
            </div>


            {/* Categories Grid - Right Side */}
            <div className="w-full grid grid-cols-4 gap-0">
              {gridCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex flex-col items-center justify-center group"
                >
                  <button
                    onClick={() => onCategorySelect?.(category.id)}
                    className={`flex flex-col items-center gap-0 p-6 transition-all w-full border ${selectedCategory === category.id
                      ? "border-gray-900"
                      : "border-gray-200 hover:border-gray-900"
                      }`}
                  >
                    <div className="w-32 h-50 flex items-center justify-center">
                      <Image
                        src={category.icon || "/placeholder.svg"}
                        alt={category.label}
                        width={350}
                        height={550}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                  <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
                    {category.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-b border-gray-20"></div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col gap-6 px-4 sm:px-6 py-8">
          {/* Categories Carousel - Center */}
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-4xl">
              <div
                ref={carouselRef}
                className="overflow-hidden"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(calc(-${currentSlide * (100 / slidesPerView.tablet)}% + ${dragOffset}px))`,
                    width: `${(gridCategories.length / slidesPerView.tablet) * 100}%`
                  }}
                >
                  {gridCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex-shrink-0"
                      style={{ width: `${100 / gridCategories.length}%` }}
                    >
                      <div className="flex flex-col items-center justify-center group">
                        <button
                          onClick={() => onCategorySelect?.(category.id)}
                          className={`flex flex-col items-center gap-0  transition-all w-full border ${selectedCategory === category.id
                            ? "border-gray-900"
                            : "border-gray-200 hover:border-gray-900"
                            }`}
                        >
                          <div className="w-40 h-40 flex items-center justify-center">
                            <Image
                              src={category.icon || "/placeholder.svg"}
                              alt={category.label}
                              width={300}
                              height={450}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </button>
                        <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
                          {category.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {/* {currentSlide > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
              )}
              
              {currentSlide < totalSlides - 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              )} */}
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-b border-gray-200"></div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex flex-col gap-6 px-4 py-6">
          {/* Selected Category Display - Center */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-gray-900">
              <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
              {isProductTypeSelected && selectedLabel && (
                <>
                  <ChevronRight size={16} className="text-gray-600" />
                  <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
                </>
              )}
            </div>
          </div>

          {/* Categories Carousel - Center */}
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full">
              <div
                ref={carouselRef}
                className="overflow-hidden"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(calc(-${currentSlide * (100 / slidesPerView.mobile)}% + ${dragOffset}px))`,
                    width: `${(gridCategories.length / slidesPerView.mobile) * 100}%`
                  }}
                >
                  {gridCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex-shrink-0"
                      style={{ width: `${100 / gridCategories.length}%` }}
                    >
                      <div className="flex flex-col items-center justify-center group">
                        <button
                          onClick={() => onCategorySelect?.(category.id)}
                          className={`flex flex-col items-center gap-0 p-4 transition-all w-full border ${selectedCategory === category.id
                            ? "border-gray-900"
                            : "border-gray-200 hover:border-gray-900"
                            }`}
                        >
                          <div className="w-32 h-32 flex items-center justify-center">
                            <Image
                              src={category.icon || "/placeholder.svg"}
                              alt={category.label}
                              width={250}
                              height={400}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </button>
                        <p className="text-xs font-semibold text-gray-900 text-center mt-2 w-full line-clamp-2 group-hover:text-red-400">
                          {category.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {/* {currentSlide > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full p-1 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={16} className="text-gray-600" />
                </button>
              )}
              
              {currentSlide < totalMobileSlides - 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full p-1 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight size={16} className="text-gray-600" />
                </button>
              )} */}
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-4">
              {Array.from({ length: totalMobileSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-b border-gray-200"></div>
      </div>
    </>
  )
}