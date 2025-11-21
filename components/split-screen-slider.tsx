// "use client"

// import { useState, useEffect, useRef, useLayoutEffect, useMemo } from "react"
// import Image from "next/image"
// import gsap from "gsap"

// interface Slide {
//   image: string
//   title: string
//   description: string
// }

// interface SplitScreenSliderProps {
//   slides: Array<Slide>
//   autoPlay?: boolean
//   interval?: number
// }

// export function SplitScreenSlider({ slides, autoPlay = true, interval = 6000 }: SplitScreenSliderProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
  
//   const leftWrapperRef = useRef<HTMLDivElement>(null)
//   const rightWrapperRef = useRef<HTMLDivElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const tlRef = useRef<gsap.core.Timeline | null>(null)
  
//   const timerRef = useRef<number | null>(null)
//   const animatingRef = useRef(false)
//   const prevIndexRef = useRef(0)
//   const isMountedRef = useRef(false)

//   const totalSlides = slides.length

//   // Reverse slides for the right side stack
//   const reversedSlides = useMemo(() => [...slides].reverse(), [slides])

//   // 1. INITIAL SETUP (Runs once)
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Wrapper Initial Positions
//       gsap.set(leftWrapperRef.current, { y: 0 })
//       // Right logic: Stack is [3, 2, 1, 0]. To show Slide 0 (last in stack), move up by (N-1).
//       gsap.set(rightWrapperRef.current, { y: `-${(totalSlides - 1) * 100}%` })
      
//       // Text Initial State - Only show the first slide's text
//       slides.forEach((_, idx) => {
//         const elements = `.slide-text-${idx} .anim-element`
//         if (idx === 0) {
//            gsap.set(elements, { y: 0, autoAlpha: 1 })
//         } else {
//            gsap.set(elements, { y: 100, autoAlpha: 0 })
//         }
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [totalSlides, slides])

//   // 2. TRANSITION ANIMATION
//   useEffect(() => {
//     // Skip first render (layout effect handles it)
//     if (!isMountedRef.current) {
//       isMountedRef.current = true
//       return
//     }

//     const prevIndex = prevIndexRef.current
//     // Determine direction
//     const direction = getDirection(prevIndex, currentIndex, totalSlides)
//     const isNext = direction === 'next'

//     // Kill previous timeline if it's still running to prevent conflicts
//     if (tlRef.current) {
//         tlRef.current.kill()
//     }

//     animatingRef.current = true

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { duration: 1.6, ease: "expo.inOut" },
//         onComplete: () => {
//           animatingRef.current = false
//         }
//       })
//       tlRef.current = tl

//       // --- Wrapper Animations ---
      
//       // Left Wrapper (Moves Down for Next)
//       tl.to(leftWrapperRef.current, {
//         y: `-${currentIndex * 100}%`
//       }, 0)

//       // Right Wrapper (Moves Up for Next because slides are reversed)
//       tl.to(rightWrapperRef.current, {
//         y: `-${(totalSlides - 1 - currentIndex) * 100}%`
//       }, 0)

//       // --- Text Animations ---

//       // 1. Animate OUT outgoing text
//       const exitY = isNext ? -100 : 100
      
//       const prevElements = `.slide-text-${prevIndex} .anim-element`
//       tl.to(prevElements, {
//         y: exitY,
//         autoAlpha: 0,
//         duration: 1,
//         stagger: 0.05,
//         ease: "power3.in"
//       }, 0)

//       // 2. Animate IN incoming text
//       const enterFromY = isNext ? 100 : -100

//       const currentElements = [
//         `.slide-text-${currentIndex} .anim-title`
//       ]

//       // Force starting state immediately before animating in
//       tl.fromTo(currentElements, 
//         { y: enterFromY, autoAlpha: 0 },
//         { 
//           y: 0, 
//           autoAlpha: 1, 
//           duration: 1.4, 
//           stagger: 0.1, 
//           ease: "power4.out" 
//         }, 
//         0.5
//       )

//     }, containerRef)

//     prevIndexRef.current = currentIndex

//     // No cleanup/revert here to persist styles
//   }, [currentIndex, totalSlides])

//   // Autoplay Logic
//   useEffect(() => {
//     if (!autoPlay) return

//     const startTimer = () => {
//       if (timerRef.current) window.clearInterval(timerRef.current)
//       timerRef.current = window.setInterval(() => {
//         if (!animatingRef.current) {
//            setCurrentIndex((prev) => (prev + 1) % totalSlides)
//         }
//       }, interval)
//     }

//     startTimer()

//     return () => {
//       if (timerRef.current) window.clearInterval(timerRef.current)
//     }
//   }, [autoPlay, interval, totalSlides])

//   // Navigation Functions
//   const nextSlide = () => {
//     if (animatingRef.current) return
//     setCurrentIndex((prev) => (prev + 1) % totalSlides)
//   }

//   const prevSlide = () => {
//     if (animatingRef.current) return
//     setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
//   }

//   const goToSlide = (index: number) => {
//     if (animatingRef.current || index === currentIndex) return
//     setCurrentIndex(index)
//   }

//   // Keyboard & Wheel Events
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (animatingRef.current) return
//       if (e.key === 'ArrowDown') nextSlide()
//       if (e.key === 'ArrowUp') prevSlide()
//     }

//     const handleWheel = (e: WheelEvent) => {
//       if (animatingRef.current) return
//       if (Math.abs(e.deltaY) > 15) {
//         if (e.deltaY > 0) {
//           nextSlide()
//         } else {
//           prevSlide()
//         }
//       }
//     }

//     window.addEventListener('keydown', handleKeyDown)
//     window.addEventListener('wheel', handleWheel, { passive: true })
    
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown)
//       window.removeEventListener('wheel', handleWheel)
//     }
//   }, [totalSlides])

//   const upArrowRef = useRef<SVGPolylineElement>(null)
//   const downArrowRef = useRef<SVGPolylineElement>(null)

//   const handleUpArrowHover = (isHovering: boolean) => {
//     if (upArrowRef.current) {
//       upArrowRef.current.setAttribute("points", isHovering ? "5,17 12,12 19,17" : "2,17 12,12 22,17")
//     }
//   }

//   const handleDownArrowHover = (isHovering: boolean) => {
//     if (downArrowRef.current) {
//       downArrowRef.current.setAttribute("points", isHovering ? "5,31 12,36 19,31" : "2,31 12,36 22,31")
//     }
//   }

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative w-full h-[550px] md:h-[890px] lg:h-[470px] xl:h-[600px] 2xl:h-[820px] bg-white overflow-hidden"
//     >
//       {/* LEFT SIDE - Content */}
//       <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden z-20">
//         <div 
//           ref={leftWrapperRef}
//           className="relative w-full h-full will-change-transform"
//         >
//           {slides.map((slide, index) => (
//             <div 
//               key={`left-${index}`}
//               className={`w-full h-full flex items-center justify-center relative slide-text-${index}`}
//             >
//               <div className="relative w-full h-full">
//                 <Image
//                   src={slide.image || "/placeholder.svg"}
//                   alt={slide.title}
//                   fill
//                   className="object-cover"
//                   priority={index === 0}
//                 />
//                 {/* Left Overlay */}
//                 <div className="absolute inset-0 flex flex-col justify-end items-start pb-24 px-8">
//                   <div className="anim-element anim-title w-full">
//                     <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
//                       {slide.title}
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Up Arrow for Left */}
//         <button
//           onClick={prevSlide}
//           className="absolute bottom-4 right-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper up"
//           aria-label="Previous slide"
//           onMouseEnter={() => handleUpArrowHover(true)}
//           onMouseLeave={() => handleUpArrowHover(false)}
//         >
//           <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="12" x2="12" y2="48" stroke="white" strokeWidth="1.5"/>
//             <polyline 
//               ref={upArrowRef}
//               points="2,17 12,12 22,17" 
//               stroke="white" 
//               strokeWidth="1.5" 
//               fill="none"
//               className="arrow-polyline"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* RIGHT SIDE - Images */}
//       <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
//         <div 
//           ref={rightWrapperRef}
//           className="relative w-full h-full will-change-transform"
//         >
//           {reversedSlides.map((slide, index) => (
//             <div 
//               key={`right-${slide.title}-${index}`}
//               className="w-full h-full relative"
//             >
//               <Image
//                 src={slide.image || "/placeholder.svg"}
//                 alt={slide.title}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//               />
//               {/* Right Overlay */}
//               <div className="absolute inset-0 flex flex-col justify-end items-end pb-24 px-8">
//                 <div className="w-full">
//                   <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
//                     {slide.title}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Down Arrow for Right */}
//         <button
//           onClick={nextSlide}
//           className="absolute bottom-2 left-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper down"
//           aria-label="Next slide"
//           onMouseEnter={() => handleDownArrowHover(true)}
//           onMouseLeave={() => handleDownArrowHover(false)}
//         >
//           <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="0" x2="12" y2="36" stroke="white" strokeWidth="1.5"/>
//             <polyline 
//               ref={downArrowRef}
//               points="2,31 12,36 22,31" 
//               stroke="white" 
//               strokeWidth="1.5" 
//               fill="none"
//               className="arrow-polyline"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Pagination */}
//       {/* <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => goToSlide(idx)}
//             className="group flex items-center gap-2 outline-none"
//             aria-label={`Go to slide ${idx + 1}`}
//           >
//             <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
//               idx === currentIndex 
//                 ? 'bg-white scale-125' 
//                 : 'bg-white/20 group-hover:bg-white/50'
//             }`} />
//             <span className={`text-xs font-medium tracking-wider text-white overflow-hidden transition-all duration-300 ${
//               idx === currentIndex ? 'w-auto opacity-100 ml-2' : 'w-0 opacity-0'
//             }`}>
//               0{idx + 1}
//             </span>
//           </button>
//         ))}
//       </div> */}

//       <style jsx>{`
//         .arrow-wrapper {
//           display: inline-flex;
//           cursor: pointer;
//         }

//         .arrow-icon {
//           transition: transform 0.35s ease, stroke 0.3s ease;
//         }

//         /* Hover color + animation */
//         .arrow-wrapper:hover .arrow-icon line,
//         .arrow-wrapper:hover .arrow-icon polyline {
//           stroke: #ff4ebf; /* Haaken hover pink */
//         }

//         .arrow-wrapper:hover .arrow-icon {
//           transform: translateY(-4px); /* smooth movement */
//         }
//       `}</style>
//     </div>
//   )
// }

// // Helper: Determine visual direction based on index change
// function getDirection(prev: number, curr: number, total: number): 'next' | 'prev' {
//   // Wraparound Logic
//   if (prev === total - 1 && curr === 0) return 'next';
//   if (prev === 0 && curr === total - 1) return 'prev';
  
//   // Normal Logic
//   return curr > prev ? 'next' : 'prev';
// }


// "use client"

// import { useState, useEffect, useRef, useLayoutEffect, useMemo } from "react"
// import Image from "next/image"
// import gsap from "gsap"

// interface Slide {
//   image: string
//   title: string
//   description: string
// }

// interface SplitScreenSliderProps {
//   slides: Array<Slide>
//   autoPlay?: boolean
//   interval?: number
// }

// export function SplitScreenSlider({ slides, autoPlay = true, interval = 6000 }: SplitScreenSliderProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
  
//   const leftWrapperRef = useRef<HTMLDivElement>(null)
//   const rightWrapperRef = useRef<HTMLDivElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const tlRef = useRef<gsap.core.Timeline | null>(null)
  
//   const timerRef = useRef<number | null>(null)
//   const animatingRef = useRef(false)
//   const prevIndexRef = useRef(0)
//   const isMountedRef = useRef(false)

//   const totalSlides = slides.length

//   // Create different slides for right side - using different images
//   const rightSlides = useMemo(() => {
//     // Create a copy of slides and shift by 1 position to show different images
//     const shiftedSlides = [...slides]
//     if (shiftedSlides.length > 1) {
//       const firstSlide = shiftedSlides.shift()
//       if (firstSlide) {
//         shiftedSlides.push(firstSlide)
//       }
//     }
//     return shiftedSlides.reverse() // Reverse for the right side stack
//   }, [slides])

//   // 1. INITIAL SETUP (Runs once)
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Wrapper Initial Positions
//       gsap.set(leftWrapperRef.current, { y: 0 })
//       // Right logic: Stack is [3, 2, 1, 0]. To show Slide 0 (last in stack), move up by (N-1).
//       gsap.set(rightWrapperRef.current, { y: `-${(totalSlides - 1) * 100}%` })
      
//       // Text Initial State - Only show the first slide's text
//       slides.forEach((_, idx) => {
//         const elements = `.slide-text-${idx} .anim-element`
//         if (idx === 0) {
//            gsap.set(elements, { y: 0, autoAlpha: 1 })
//         } else {
//            gsap.set(elements, { y: 100, autoAlpha: 0 })
//         }
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [totalSlides, slides])

//   // 2. TRANSITION ANIMATION
//   useEffect(() => {
//     // Skip first render (layout effect handles it)
//     if (!isMountedRef.current) {
//       isMountedRef.current = true
//       return
//     }

//     const prevIndex = prevIndexRef.current
//     // Determine direction
//     const direction = getDirection(prevIndex, currentIndex, totalSlides)
//     const isNext = direction === 'next'

//     // Kill previous timeline if it's still running to prevent conflicts
//     if (tlRef.current) {
//         tlRef.current.kill()
//     }

//     animatingRef.current = true

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { duration: 1.6, ease: "expo.inOut" },
//         onComplete: () => {
//           animatingRef.current = false
//         }
//       })
//       tlRef.current = tl

//       // --- Wrapper Animations ---
      
//       // Left Wrapper (Moves Down for Next)
//       tl.to(leftWrapperRef.current, {
//         y: `-${currentIndex * 100}%`
//       }, 0)

//       // Right Wrapper (Moves Up for Next because slides are reversed)
//       tl.to(rightWrapperRef.current, {
//         y: `-${(totalSlides - 1 - currentIndex) * 100}%`
//       }, 0)

//       // --- Text Animations ---

//       // 1. Animate OUT outgoing text
//       const exitY = isNext ? -100 : 100
      
//       const prevElements = `.slide-text-${prevIndex} .anim-element`
//       tl.to(prevElements, {
//         y: exitY,
//         autoAlpha: 0,
//         duration: 1,
//         stagger: 0.05,
//         ease: "power3.in"
//       }, 0)

//       // 2. Animate IN incoming text
//       const enterFromY = isNext ? 100 : -100

//       const currentElements = [
//         `.slide-text-${currentIndex} .anim-title`
//       ]

//       // Force starting state immediately before animating in
//       tl.fromTo(currentElements, 
//         { y: enterFromY, autoAlpha: 0 },
//         { 
//           y: 0, 
//           autoAlpha: 1, 
//           duration: 1.4, 
//           stagger: 0.1, 
//           ease: "power4.out" 
//         }, 
//         0.5
//       )

//     }, containerRef)

//     prevIndexRef.current = currentIndex

//     // No cleanup/revert here to persist styles
//   }, [currentIndex, totalSlides])

//   // Autoplay Logic
//   useEffect(() => {
//     if (!autoPlay) return

//     const startTimer = () => {
//       if (timerRef.current) window.clearInterval(timerRef.current)
//       timerRef.current = window.setInterval(() => {
//         if (!animatingRef.current) {
//            setCurrentIndex((prev) => (prev + 1) % totalSlides)
//         }
//       }, interval)
//     }

//     startTimer()

//     return () => {
//       if (timerRef.current) window.clearInterval(timerRef.current)
//     }
//   }, [autoPlay, interval, totalSlides])

//   // Navigation Functions
//   const nextSlide = () => {
//     if (animatingRef.current) return
//     setCurrentIndex((prev) => (prev + 1) % totalSlides)
//   }

//   const prevSlide = () => {
//     if (animatingRef.current) return
//     setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
//   }

//   const goToSlide = (index: number) => {
//     if (animatingRef.current || index === currentIndex) return
//     setCurrentIndex(index)
//   }

//   // Keyboard & Wheel Events
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (animatingRef.current) return
//       if (e.key === 'ArrowDown') nextSlide()
//       if (e.key === 'ArrowUp') prevSlide()
//     }

//     const handleWheel = (e: WheelEvent) => {
//       if (animatingRef.current) return
//       if (Math.abs(e.deltaY) > 15) {
//         if (e.deltaY > 0) {
//           nextSlide()
//         } else {
//           prevSlide()
//         }
//       }
//     }

//     window.addEventListener('keydown', handleKeyDown)
//     window.addEventListener('wheel', handleWheel, { passive: true })
    
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown)
//       window.removeEventListener('wheel', handleWheel)
//     }
//   }, [totalSlides])

//   const upArrowRef = useRef<SVGPolylineElement>(null)
//   const downArrowRef = useRef<SVGPolylineElement>(null)

//   const handleUpArrowHover = (isHovering: boolean) => {
//     if (upArrowRef.current) {
//       upArrowRef.current.setAttribute("points", isHovering ? "5,17 12,12 19,17" : "2,17 12,12 22,17")
//     }
//   }

//   const handleDownArrowHover = (isHovering: boolean) => {
//     if (downArrowRef.current) {
//       downArrowRef.current.setAttribute("points", isHovering ? "5,31 12,36 19,31" : "2,31 12,36 22,31")
//     }
//   }

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative w-full h-[550px] md:h-[890px] lg:h-[470px] xl:h-[600px] 2xl:h-[820px] bg-white overflow-hidden"
//     >
//       {/* LEFT SIDE - Content */}
//       <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden z-20">
//         <div 
//           ref={leftWrapperRef}
//           className="relative w-full h-full will-change-transform"
//         >
//           {slides.map((slide, index) => (
//             <div 
//               key={`left-${index}`}
//               className={`w-full h-full flex items-center justify-center relative slide-text-${index}`}
//             >
//               <div className="relative w-full h-full">
//                 <Image
//                   src={slide.image || "/placeholder.svg"}
//                   alt={slide.title}
//                   fill
//                   className="object-cover"
//                   priority={index === 0}
//                 />
//                 {/* Left Overlay */}
//                 <div className="absolute inset-0 flex flex-col justify-end items-start pb-24 px-8">
//                   <div className="anim-element anim-title w-full">
//                     <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
//                       {slide.title}
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Up Arrow for Left */}
//         <button
//           onClick={prevSlide}
//           className="absolute bottom-4 right-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper up"
//           aria-label="Previous slide"
//           onMouseEnter={() => handleUpArrowHover(true)}
//           onMouseLeave={() => handleUpArrowHover(false)}
//         >
//           <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="12" x2="12" y2="48" stroke="white" strokeWidth="1.5"/>
//             <polyline 
//               ref={upArrowRef}
//               points="2,17 12,12 22,17" 
//               stroke="white" 
//               strokeWidth="1.5" 
//               fill="none"
//               className="arrow-polyline"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* RIGHT SIDE - Images */}
//       <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
//         <div 
//           ref={rightWrapperRef}
//           className="relative w-full h-full will-change-transform"
//         >
//           {rightSlides.map((slide, index) => (
//             <div 
//               key={`right-${slide.title}-${index}`}
//               className="w-full h-full relative"
//             >
//               <Image
//                 src={slide.image || "/placeholder.svg"}
//                 alt={slide.title}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//               />
//               {/* Right Overlay */}
//               <div className="absolute inset-0 flex flex-col justify-end items-end pb-24 px-8">
//                 <div className="w-full">
//                   <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
//                     {slide.title}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Down Arrow for Right */}
//         <button
//           onClick={nextSlide}
//           className="absolute bottom-2 left-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper down"
//           aria-label="Next slide"
//           onMouseEnter={() => handleDownArrowHover(true)}
//           onMouseLeave={() => handleDownArrowHover(false)}
//         >
//           <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="0" x2="12" y2="36" stroke="white" strokeWidth="1.5"/>
//             <polyline 
//               ref={downArrowRef}
//               points="2,31 12,36 22,31" 
//               stroke="white" 
//               strokeWidth="1.5" 
//               fill="none"
//               className="arrow-polyline"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Pagination */}
//       {/* <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => goToSlide(idx)}
//             className="group flex items-center gap-2 outline-none"
//             aria-label={`Go to slide ${idx + 1}`}
//           >
//             <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
//               idx === currentIndex 
//                 ? 'bg-white scale-125' 
//                 : 'bg-white/20 group-hover:bg-white/50'
//             }`} />
//             <span className={`text-xs font-medium tracking-wider text-white overflow-hidden transition-all duration-300 ${
//               idx === currentIndex ? 'w-auto opacity-100 ml-2' : 'w-0 opacity-0'
//             }`}>
//               0{idx + 1}
//             </span>
//           </button>
//         ))}
//       </div> */}

//       <style jsx>{`
//         .arrow-wrapper {
//           display: inline-flex;
//           cursor: pointer;
//         }

//         .arrow-icon {
//           transition: transform 0.35s ease, stroke 0.3s ease;
//         }

//         /* Hover color + animation */
//         .arrow-wrapper:hover .arrow-icon line,
//         .arrow-wrapper:hover .arrow-icon polyline {
//           stroke: #ff4ebf; /* Haaken hover pink */
//         }

//         .arrow-wrapper:hover .arrow-icon {
//           transform: translateY(-4px); /* smooth movement */
//         }
//       `}</style>
//     </div>
//   )
// }

// // Helper: Determine visual direction based on index change
// function getDirection(prev: number, curr: number, total: number): 'next' | 'prev' {
//   // Wraparound Logic
//   if (prev === total - 1 && curr === 0) return 'next';
//   if (prev === 0 && curr === total - 1) return 'prev';
  
//   // Normal Logic
//   return curr > prev ? 'next' : 'prev';
// }


"use client"

import { useState, useEffect, useRef, useLayoutEffect } from "react"
import Image from "next/image"
import gsap from "gsap"

interface Slide {
  image: string
  title: string
  description: string
}

interface SplitScreenSliderProps {
  slides: {
    left: Array<Slide>
    right: Array<Slide>
  }
  autoPlay?: boolean
  interval?: number
}

export function SplitScreenSlider({ slides, autoPlay = true, interval = 6000 }: SplitScreenSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const leftWrapperRef = useRef<HTMLDivElement>(null)
  const rightWrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  
  const timerRef = useRef<number | null>(null)
  const animatingRef = useRef(false)
  const prevIndexRef = useRef(0)
  const isMountedRef = useRef(false)

  const totalSlides = slides.left.length // Both sides have same length (2 slides)

  // Calculate right side index (always opposite to left)
  const getRightIndex = (leftIndex: number) => {
    return (totalSlides - 1 - leftIndex) % totalSlides
  }

  // 1. INITIAL SETUP (Runs once)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial positions for both wrappers
      gsap.set(leftWrapperRef.current, { y: 0 })
      gsap.set(rightWrapperRef.current, { y: `-${getRightIndex(0) * 100}%` })
      
      // Text Initial State - Only show the first slide's text
      slides.left.forEach((_, idx) => {
        const leftElements = `.left-slide-text-${idx} .anim-element`
        const rightElements = `.right-slide-text-${getRightIndex(idx)} .anim-element`
        
        if (idx === 0) {
          gsap.set(leftElements, { y: 0, autoAlpha: 1 })
          gsap.set(rightElements, { y: 0, autoAlpha: 1 })
        } else {
          gsap.set(leftElements, { y: 100, autoAlpha: 0 })
          gsap.set(rightElements, { y: 100, autoAlpha: 0 })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [totalSlides, slides])

  // 2. TRANSITION ANIMATION
  useEffect(() => {
    // Skip first render (layout effect handles it)
    if (!isMountedRef.current) {
      isMountedRef.current = true
      return
    }

    const prevIndex = prevIndexRef.current
    const currentRightIndex = getRightIndex(currentIndex)
    const prevRightIndex = getRightIndex(prevIndex)

    // Determine direction for left side
    const leftDirection = getDirection(prevIndex, currentIndex, totalSlides)
    const isLeftNext = leftDirection === 'next'
    
    // Determine direction for right side (opposite movement)
    const rightDirection = getDirection(prevRightIndex, currentRightIndex, totalSlides)
    const isRightNext = rightDirection === 'next'

    // Kill previous timeline if it's still running to prevent conflicts
    if (tlRef.current) {
        tlRef.current.kill()
    }

    animatingRef.current = true

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1.6, ease: "expo.inOut" },
        onComplete: () => {
          animatingRef.current = false
        }
      })
      tlRef.current = tl

      // --- Wrapper Animations ---
      
      // Left Wrapper (normal progression)
      tl.to(leftWrapperRef.current, {
        y: `-${currentIndex * 100}%`
      }, 0)

      // Right Wrapper (opposite progression - synchronized with left)
      tl.to(rightWrapperRef.current, {
        y: `-${currentRightIndex * 100}%`
      }, 0)

      // --- Text Animations ---

      // 1. Animate OUT outgoing text (left side)
      const leftExitY = isLeftNext ? -100 : 100
      const leftPrevElements = `.left-slide-text-${prevIndex} .anim-element`
      tl.to(leftPrevElements, {
        y: leftExitY,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.in"
      }, 0)

      // 1. Animate OUT outgoing text (right side)
      const rightExitY = isRightNext ? -100 : 100
      const rightPrevElements = `.right-slide-text-${prevRightIndex} .anim-element`
      tl.to(rightPrevElements, {
        y: rightExitY,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.in"
      }, 0)

      // 2. Animate IN incoming text (left side)
      const leftEnterFromY = isLeftNext ? 100 : -100
      const leftCurrentElements = `.left-slide-text-${currentIndex} .anim-element`
      
      tl.fromTo(leftCurrentElements, 
        { y: leftEnterFromY, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1, 
          duration: 1.4, 
          stagger: 0.1, 
          ease: "power4.out" 
        }, 
        0.5
      )

      // 2. Animate IN incoming text (right side)
      const rightEnterFromY = isRightNext ? 100 : -100
      const rightCurrentElements = `.right-slide-text-${currentRightIndex} .anim-element`
      
      tl.fromTo(rightCurrentElements, 
        { y: rightEnterFromY, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1, 
          duration: 1.4, 
          stagger: 0.1, 
          ease: "power4.out" 
        }, 
        0.5
      )

    }, containerRef)

    prevIndexRef.current = currentIndex

    // No cleanup/revert here to persist styles
  }, [currentIndex, totalSlides])

  // Autoplay Logic
  useEffect(() => {
    if (!autoPlay) return

    const startTimer = () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      timerRef.current = window.setInterval(() => {
        if (!animatingRef.current) {
           setCurrentIndex((prev) => (prev + 1) % totalSlides)
        }
      }, interval)
    }

    startTimer()

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [autoPlay, interval, totalSlides])

  // Navigation Functions
  const nextSlide = () => {
    if (animatingRef.current) return
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    if (animatingRef.current) return
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    if (animatingRef.current || index === currentIndex) return
    setCurrentIndex(index)
  }

  // Keyboard & Wheel Events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (animatingRef.current) return
      if (e.key === 'ArrowDown') nextSlide()
      if (e.key === 'ArrowUp') prevSlide()
    }

    const handleWheel = (e: WheelEvent) => {
      if (animatingRef.current) return
      if (Math.abs(e.deltaY) > 15) {
        if (e.deltaY > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('wheel', handleWheel, { passive: true })
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [totalSlides])

  const upArrowRef = useRef<SVGPolylineElement>(null)
  const downArrowRef = useRef<SVGPolylineElement>(null)

  const handleUpArrowHover = (isHovering: boolean) => {
    if (upArrowRef.current) {
      upArrowRef.current.setAttribute("points", isHovering ? "5,17 12,12 19,17" : "2,17 12,12 22,17")
    }
  }

  const handleDownArrowHover = (isHovering: boolean) => {
    if (downArrowRef.current) {
      downArrowRef.current.setAttribute("points", isHovering ? "5,31 12,36 19,31" : "2,31 12,36 22,31")
    }
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[550px] md:h-[890px] lg:h-[470px] xl:h-[600px] 2xl:h-[820px] bg-white overflow-hidden"
    >
      {/* LEFT SIDE - Content */}
      <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden z-20">
        <div 
          ref={leftWrapperRef}
          className="relative w-full h-full will-change-transform"
        >
          {slides.left.map((slide, index) => (
            <div 
              key={`left-${index}`}
              className={`w-full h-full flex items-center justify-center relative left-slide-text-${index}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Left Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end items-start pb-24 px-8">
                  <div className="anim-element w-full">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
                      {slide.title}
                    </h2>
                    {/* <p className="text-lg md:text-xl text-white/90 text-left max-w-md">
                      {slide.description}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Up Arrow for Left */}
        <button
          onClick={prevSlide}
          className="absolute bottom-4 right-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper up"
          aria-label="Previous slide"
          onMouseEnter={() => handleUpArrowHover(true)}
          onMouseLeave={() => handleUpArrowHover(false)}
        >
          <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
            <line x1="12" y1="12" x2="12" y2="48" stroke="white" strokeWidth="1.5"/>
            <polyline 
              ref={upArrowRef}
              points="2,17 12,12 22,17" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none"
              className="arrow-polyline"
            />
          </svg>
        </button>
      </div>

      {/* RIGHT SIDE - Images */}
      <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
        <div 
          ref={rightWrapperRef}
          className="relative w-full h-full will-change-transform"
        >
          {slides.right.map((slide, index) => (
            <div 
              key={`right-${index}`}
              className={`w-full h-full relative right-slide-text-${index}`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Right Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end items-end pb-24 px-8">
                <div className="anim-element w-full">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
                    {slide.title}
                  </h2>
                  {/* <p className="text-lg md:text-xl text-white/90 text-right max-w-md">
                    {slide.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Down Arrow for Right */}
        <button
          onClick={nextSlide}
          className="absolute bottom-2 left-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper down"
          aria-label="Next slide"
          onMouseEnter={() => handleDownArrowHover(true)}
          onMouseLeave={() => handleDownArrowHover(false)}
        >
          <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
            <line x1="12" y1="0" x2="12" y2="36" stroke="white" strokeWidth="1.5"/>
            <polyline 
              ref={downArrowRef}
              points="2,31 12,36 22,31" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none"
              className="arrow-polyline"
            />
          </svg>
        </button>
      </div>

      {/* Pagination */}
      {/* <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {slides.left.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className="group flex items-center gap-2 outline-none"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
              idx === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/20 group-hover:bg-white/50'
            }`} />
            <span className={`text-xs font-medium tracking-wider text-white overflow-hidden transition-all duration-300 ${
              idx === currentIndex ? 'w-auto opacity-100 ml-2' : 'w-0 opacity-0'
            }`}>
              0{idx + 1}
            </span>
          </button>
        ))}
      </div> */}

      <style jsx>{`
        .arrow-wrapper {
          display: inline-flex;
          cursor: pointer;
        }

        .arrow-icon {
          transition: transform 0.35s ease, stroke 0.3s ease;
        }

        /* Hover color + animation */
        .arrow-wrapper:hover .arrow-icon line,
        .arrow-wrapper:hover .arrow-icon polyline {
          stroke: #ff4ebf; /* Haaken hover pink */
        }

        .arrow-wrapper:hover .arrow-icon {
          transform: translateY(-4px); /* smooth movement */
        }
      `}</style>
    </div>
  )
}

// Helper: Determine visual direction based on index change
function getDirection(prev: number, curr: number, total: number): 'next' | 'prev' {
  // Wraparound Logic
  if (prev === total - 1 && curr === 0) return 'next';
  if (prev === 0 && curr === total - 1) return 'prev';
  
  // Normal Logic
  return curr > prev ? 'next' : 'prev';
}