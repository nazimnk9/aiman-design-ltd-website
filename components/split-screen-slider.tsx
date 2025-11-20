// "use client"

// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"
// import { ChevronUp, ChevronDown } from 'lucide-react'
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
//   const [current, setCurrent] = useState(0)
//   const leftRef = useRef(null)
//   const rightRef = useRef(null)
//   const leftContentRef = useRef(null)
//   const rightContentRef = useRef(null)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       handleNext()
//     }, interval)

//     return () => clearInterval(timer)
//   }, [current, autoPlay, interval])

//   const animateSlide = (direction: "up" | "down") => {
//     const timeline = gsap.timeline()

//     if (direction === "down") {
//       timeline.to(
//         leftRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//     } else {
//       timeline.to(
//         leftRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//     }

//     timeline.add(() => {
//       gsap.set([leftRef.current, rightRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftContentRef.current, rightContentRef.current], { y: 0, opacity: 1 })
//     })

//     timeline.to(leftContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
//     timeline.to(rightContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")
//   }

//   const handleNext = () => {
//     animateSlide("down")
//     setCurrent((prev) => (prev + 1) % slides.length)
//   }

//   const handlePrev = () => {
//     animateSlide("up")
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   const leftSlide = slides[current]
//   const rightSlide = slides[(current + 1) % slides.length]

//   return (
//     <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-black overflow-hidden">
//       {/* Left Half */}
//       <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={leftRef} className="relative w-full h-full">
//           <Image
//             src={leftSlide.image || "/placeholder.svg"}
//             alt={leftSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Left Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
//             <div ref={leftContentRef} className="animate-fadeInUp flex flex-col justify-center items-center w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance">
//                 {leftSlide.title}
//               </h2>
//               {/* <p className="text-sm md:text-lg text-white/90 max-w-md mb-6 text-center">{leftSlide.description}</p>
//               <button className="bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-6 rounded-lg transition-all hover:scale-105 active:scale-95">
//                 Explore
//               </button> */}
//             </div>
//           </div>
//         </div>

//         {/* Up Arrow for Left - CHANGE: Positioned at bottom-end */}
//         <button
//           onClick={handlePrev}
//           className="absolute bottom-4 right-4 z-20 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all md:p-3 group"
//           aria-label="Previous slide"
//         >
//           <ChevronUp className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
//         </button>
//       </div>

//       {/* Divider Line */}
//       <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent z-30 transform -translate-x-1/2" />

//       {/* Right Half */}
//       <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={rightRef} className="relative w-full h-full">
//           <Image
//             src={rightSlide.image || "/placeholder.svg"}
//             alt={rightSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Right Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
//             <div ref={rightContentRef} className="animate-fadeInUp flex flex-col justify-center items-center w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance">
//                 {rightSlide.title}
//               </h2>
//               {/* <p className="text-sm md:text-lg text-white/90 max-w-md mb-6 text-center">{rightSlide.description}</p>
//               <button className="bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-6 rounded-lg transition-all hover:scale-105 active:scale-95">
//                 Explore
//               </button> */}
//             </div>
//           </div>
//         </div>

//         {/* Down Arrow for Right - CHANGE: Positioned at bottom-start */}
//         <button
//           onClick={handleNext}
//           className="absolute bottom-4 left-4 z-20 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all md:p-3 group"
//           aria-label="Next slide"
//         >
//           <ChevronDown className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
//         </button>
//       </div>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect, useRef } from "react"
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
//   const [current, setCurrent] = useState(0)
//   const leftRef = useRef(null)
//   const rightRef = useRef(null)
//   const leftContentRef = useRef(null)
//   const rightContentRef = useRef(null)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       handleNext()
//     }, interval)

//     return () => clearInterval(timer)
//   }, [current, autoPlay, interval])

//   const animateSlide = (direction: "up" | "down") => {
//     const timeline = gsap.timeline()

//     if (direction === "down") {
//       timeline.to(
//         leftRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//     } else {
//       timeline.to(
//         leftRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//     }

//     timeline.add(() => {
//       gsap.set([leftRef.current, rightRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftContentRef.current, rightContentRef.current], { y: 0, opacity: 1 })
//     })

//     timeline.to(leftContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
//     timeline.to(rightContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")
//   }

//   const handleNext = () => {
//     animateSlide("down")
//     setCurrent((prev) => (prev + 1) % slides.length)
//   }

//   const handlePrev = () => {
//     animateSlide("up")
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   const leftSlide = slides[current]
//   const rightSlide = slides[(current + 1) % slides.length]

//   return (
//     <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-black overflow-hidden">
//       {/* Left Half */}
//       <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={leftRef} className="relative w-full h-full">
//           <Image
//             src={leftSlide.image || "/placeholder.svg"}
//             alt={leftSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Left Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
//             <div ref={leftContentRef} className="animate-fadeInUp flex flex-col justify-center items-center w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance">
//                 {leftSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Up Arrow for Left */}
//         <button
//           onClick={handlePrev}
//           className="absolute bottom-4 right-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper up"
//           aria-label="Previous slide"
//         >
//           <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="12" x2="12" y2="48" stroke="white" strokeWidth="1.5"/>
//             <polyline points="5,17 12,12 19,17" stroke="white" strokeWidth="1.5" fill="none"/>
//           </svg>
//         </button>
//       </div>

//       {/* Divider Line */}
//       <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent z-30 transform -translate-x-1/2" />

//       {/* Right Half */}
//       <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={rightRef} className="relative w-full h-full">
//           <Image
//             src={rightSlide.image || "/placeholder.svg"}
//             alt={rightSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Right Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
//             <div ref={rightContentRef} className="animate-fadeInUp flex flex-col justify-center items-center w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance">
//                 {rightSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Down Arrow for Right */}
//         <button
//           onClick={handleNext}
//           className="absolute bottom-4 left-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper down"
//           aria-label="Next slide"
//         >
//           <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="0" x2="12" y2="40" stroke="white" strokeWidth="1.5"/>
//             <polyline points="5,31 12,40 19,31" stroke="white" strokeWidth="1.5" fill="none"/>
//           </svg>
//         </button>
//       </div>

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

//         /* Arrow head position change on hover */
//         .arrow-wrapper.up:hover .arrow-icon polyline {
//           points: 2,17 12,12 22,17;
//         }

//         .arrow-wrapper.down:hover .arrow-icon polyline {
//           points: 2,31 12,40 22,31;
//         }
//       `}</style>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect, useRef } from "react"
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
//   const [current, setCurrent] = useState(0)
//   const leftRef = useRef(null)
//   const rightRef = useRef(null)
//   const leftContentRef = useRef(null)
//   const rightContentRef = useRef(null)
//   const upArrowRef = useRef<SVGPolylineElement>(null)
//   const downArrowRef = useRef<SVGPolylineElement>(null)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       handleNext()
//     }, interval)

//     return () => clearInterval(timer)
//   }, [current, autoPlay, interval])

//   const animateSlide = (direction: "up" | "down") => {
//     const timeline = gsap.timeline()

//     if (direction === "down") {
//       timeline.to(
//         leftRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//     } else {
//       timeline.to(
//         leftRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//     }

//     timeline.add(() => {
//       gsap.set([leftRef.current, rightRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftContentRef.current, rightContentRef.current], { y: 0, opacity: 1 })
//     })

//     timeline.to(leftContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
//     timeline.to(rightContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")
//   }

//   const handleNext = () => {
//     animateSlide("down")
//     setCurrent((prev) => (prev + 1) % slides.length)
//   }

//   const handlePrev = () => {
//     animateSlide("up")
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//   }

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

//   const leftSlide = slides[current]
//   const rightSlide = slides[(current + 1) % slides.length]

//   return (
//     <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-black overflow-hidden">
//       {/* Left Half */}
//       <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={leftRef} className="relative w-full h-full">
//           <Image
//             src={leftSlide.image || "/placeholder.svg"}
//             alt={leftSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Left Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
//             <div ref={leftContentRef} className="animate-fadeInUp flex flex-col justify-center items-center w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance">
//                 {leftSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Up Arrow for Left */}
//         <button
//           onClick={handlePrev}
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

//       {/* Divider Line */}
//       <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent z-30 transform -translate-x-1/2" />

//       {/* Right Half */}
//       <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={rightRef} className="relative w-full h-full">
//           <Image
//             src={rightSlide.image || "/placeholder.svg"}
//             alt={rightSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Right Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
//             <div ref={rightContentRef} className="animate-fadeInUp flex flex-col justify-center items-center w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance">
//                 {rightSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Down Arrow for Right */}
//         <button
//           onClick={handleNext}
//           className="absolute bottom-2 left-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper down"
//           aria-label="Next slide"
//           onMouseEnter={() => handleDownArrowHover(true)}
//           onMouseLeave={() => handleDownArrowHover(false)}
//         >
//           <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="0" x2="12" y2="36" stroke="white" strokeWidth="1.5"/>
//             <polyline 
//               ref={downArrowRef}
//               points="2,31 12,40 22,31" 
//               stroke="white" 
//               strokeWidth="1.5" 
//               fill="none"
//               className="arrow-polyline"
//             />
//           </svg>
//         </button>
//       </div>

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


// "use client"

// import { useState, useEffect, useRef } from "react"
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
//   const [current, setCurrent] = useState(0)
//   const leftRef = useRef(null)
//   const rightRef = useRef(null)
//   const leftContentRef = useRef(null)
//   const rightContentRef = useRef(null)
//   const upArrowRef = useRef<SVGPolylineElement>(null)
//   const downArrowRef = useRef<SVGPolylineElement>(null)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       handleNext()
//     }, interval)

//     return () => clearInterval(timer)
//   }, [current, autoPlay, interval])

//   const animateSlide = (direction: "up" | "down") => {
//     const timeline = gsap.timeline()

//     if (direction === "down") {
//       timeline.to(
//         leftRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//     } else {
//       timeline.to(
//         leftRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//     }

//     timeline.add(() => {
//       gsap.set([leftRef.current, rightRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftContentRef.current, rightContentRef.current], { y: 0, opacity: 1 })
//     })

//     timeline.to(leftContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
//     timeline.to(rightContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")
//   }

//   const handleNext = () => {
//     animateSlide("down")
//     setCurrent((prev) => (prev + 1) % slides.length)
//   }

//   const handlePrev = () => {
//     animateSlide("up")
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//   }

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

//   const leftSlide = slides[current]
//   const rightSlide = slides[(current + 1) % slides.length]

//   return (
//     <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-black overflow-hidden">
//       {/* Left Half */}
//       <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={leftRef} className="relative w-full h-full">
//           <Image
//             src={leftSlide.image || "/placeholder.svg"}
//             alt={leftSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Left Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start pb-4 px-8">
//             <div ref={leftContentRef} className="animate-fadeInUp w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
//                 {leftSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Up Arrow for Left */}
//         <button
//           onClick={handlePrev}
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

//       {/* Divider Line */}
//       <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent z-30 transform -translate-x-1/2" />

//       {/* Right Half */}
//       <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={rightRef} className="relative w-full h-full">
//           <Image
//             src={rightSlide.image || "/placeholder.svg"}
//             alt={rightSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Right Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end pb-4 px-8">
//             <div ref={rightContentRef} className="animate-fadeInUp w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
//                 {rightSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Down Arrow for Right */}
//         <button
//           onClick={handleNext}
//           className="absolute bottom-2 left-4 z-20 p-2 rounded-full transition-all md:p-3 group arrow-wrapper down"
//           aria-label="Next slide"
//           onMouseEnter={() => handleDownArrowHover(true)}
//           onMouseLeave={() => handleDownArrowHover(false)}
//         >
//           <svg className="arrow-icon" width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="0" x2="12" y2="36" stroke="white" strokeWidth="1.5"/>
//             <polyline 
//               ref={downArrowRef}
//               points="2,31 12,40 22,31" 
//               stroke="white" 
//               strokeWidth="1.5" 
//               fill="none"
//               className="arrow-polyline"
//             />
//           </svg>
//         </button>
//       </div>

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


// "use client"

// import { useState, useEffect, useRef } from "react"
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
//   const [current, setCurrent] = useState(0)
//   const leftRef = useRef(null)
//   const rightRef = useRef(null)
//   const leftContentRef = useRef(null)
//   const rightContentRef = useRef(null)
//   const upArrowRef = useRef<SVGPolylineElement>(null)
//   const downArrowRef = useRef<SVGPolylineElement>(null)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       handleNext()
//     }, interval)

//     return () => clearInterval(timer)
//   }, [current, autoPlay, interval])

//   const animateSlide = (direction: "up" | "down") => {
//     const timeline = gsap.timeline()

//     if (direction === "down") {
//       timeline.to(
//         leftRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//     } else {
//       timeline.to(
//         leftRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       timeline.to(leftContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
//       timeline.to(rightContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
//     }

//     timeline.add(() => {
//       gsap.set([leftRef.current, rightRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftContentRef.current, rightContentRef.current], { y: 0, opacity: 1 })
//     })

//     timeline.to(leftContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
//     timeline.to(rightContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")
//   }

//   const handleNext = () => {
//     animateSlide("down")
//     setCurrent((prev) => (prev + 1) % slides.length)
//   }

//   const handlePrev = () => {
//     animateSlide("up")
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//   }

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

//   const leftSlide = slides[current]
//   const rightSlide = slides[(current + 1) % slides.length]

//   return (
//     <div className="relative w-full h-[550px] md:h-[890px] lg:h-[470px] xl:h-[600px] 2xl:h-[820px] bg-white overflow-hidden">
//       {/* Left Half */}
//       <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={leftRef} className="relative w-full h-full">
//           <Image
//             src={leftSlide.image || "/placeholder.svg"}
//             alt={leftSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Left Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start pb-24 px-8">
//             <div ref={leftContentRef} className="animate-fadeInUp w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
//                 {leftSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Up Arrow for Left */}
//         <button
//           onClick={handlePrev}
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

//       {/* Divider Line */}
//       {/* <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent z-30 transform -translate-x-1/2" /> */}

//       {/* Right Half */}
//       <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={rightRef} className="relative w-full h-full">
//           <Image
//             src={rightSlide.image || "/placeholder.svg"}
//             alt={rightSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Right Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end pb-24 px-8">
//             <div ref={rightContentRef} className="animate-fadeInUp w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
//                 {rightSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Down Arrow for Right */}
//         <button
//           onClick={handleNext}
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


// "use client"

// import { useState, useEffect, useRef } from "react"
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
//   const [current, setCurrent] = useState(0)

//   const leftRef = useRef(null)
//   const rightRef = useRef(null)

//   const leftIncomingRef = useRef(null)
//   const rightIncomingRef = useRef(null)

//   const leftContentRef = useRef(null)
//   const rightContentRef = useRef(null)

//   const upArrowRef = useRef<SVGPolylineElement>(null)
//   const downArrowRef = useRef<SVGPolylineElement>(null)

//   useEffect(() => {
//     if (!autoPlay) return
//     const timer = setInterval(() => handleNext(), interval)
//     return () => clearInterval(timer)
//   }, [current, autoPlay, interval])

//   /** ---------------------------
//    *  MAIN NEW ANIMATION LOGIC
//    *  ---------------------------
//    *  No background visible.
//    *  Incoming slide glued with outgoing slide.
//    */
//   const animateSlide = (direction: "up" | "down") => {
//     const tl = gsap.timeline()

//     const OUT_Y = direction === "down" ? 600 : -600
//     const IN_Y = direction === "down" ? -600 : 600

//     // Position incoming slides before animation
//     gsap.set(leftIncomingRef.current, { y: IN_Y, opacity: 1 })
//     gsap.set(rightIncomingRef.current, { y: -IN_Y, opacity: 1 })

//     // Outgoing + incoming animate together (no bg gap)
//     tl.to(
//       [leftRef.current, leftIncomingRef.current],
//       {
//         y: `+=${OUT_Y}`,
//         duration: 0.8,
//         ease: "power3.inOut",
//       },
//       0
//     )

//     tl.to(
//       [rightRef.current, rightIncomingRef.current],
//       {
//         y: `-=${OUT_Y}`,
//         duration: 0.8,
//         ease: "power3.inOut",
//       },
//       0
//     )

//     // Content fade
//     tl.to(leftContentRef.current, { opacity: 0, duration: 0.5 }, 0)
//     tl.to(rightContentRef.current, { opacity: 0, duration: 0.5 }, 0)

//     tl.add(() => {
//       // Reset & swap
//       gsap.set([leftRef.current, rightRef.current], { y: 0 })
//       gsap.set([leftIncomingRef.current, rightIncomingRef.current], { y: 0 })

//       // Move incoming into main refs
//       if (leftRef.current && leftIncomingRef.current) {
//         ;(leftRef.current as any).innerHTML = (leftIncomingRef.current as any).innerHTML
//       }
//       if (rightRef.current && rightIncomingRef.current) {
//         ;(rightRef.current as any).innerHTML = (rightIncomingRef.current as any).innerHTML
//       }

//       gsap.set([leftContentRef.current, rightContentRef.current], { opacity: 1 })
//     })
//   }

//   const handleNext = () => {
//     animateSlide("down")
//     setCurrent((prev) => (prev + 1) % slides.length)
//   }

//   const handlePrev = () => {
//     animateSlide("up")
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//   }

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

//   const leftSlide = slides[current]
//   const rightSlide = slides[(current + 1) % slides.length]

//   const nextLeftSlide = slides[(current + 1) % slides.length]
//   const nextRightSlide = slides[(current + 2) % slides.length]

//   return (
//     <div className="relative w-full h-[550px] md:h-[890px] lg:h-[470px] xl:h-[600px] 2xl:h-[820px] bg-white overflow-hidden">

//       {/* LEFT HALF */}
//       <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">

//         {/* OUTGOING SLIDE */}
//         <div ref={leftRef} className="absolute w-full h-full">
//           <Image src={leftSlide.image} alt={leftSlide.title} fill className="object-cover" />
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start pb-24 px-8">
//             <div ref={leftContentRef}>
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">{leftSlide.title}</h2>
//             </div>
//           </div>
//         </div>

//         {/* INCOMING SLIDE */}
//         <div ref={leftIncomingRef} className="absolute w-full h-full">
//           <Image src={nextLeftSlide.image} alt={nextLeftSlide.title} fill className="object-cover" />
//         </div>

//         <button
//           onClick={handlePrev}
//           className="absolute bottom-4 right-4 p-2 md:p-3"
//           aria-label="Previous slide"
//           onMouseEnter={() => handleUpArrowHover(true)}
//           onMouseLeave={() => handleUpArrowHover(false)}
//         >
//           <svg width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="12" x2="12" y2="48" stroke="white" strokeWidth="1.5"/>
//             <polyline ref={upArrowRef} points="2,17 12,12 22,17" stroke="white" strokeWidth="1.5" fill="none"/>
//           </svg>
//         </button>
//       </div>

//       {/* RIGHT HALF */}
//       <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">

//         {/* OUTGOING SLIDE */}
//         <div ref={rightRef} className="absolute w-full h-full">
//           <Image src={rightSlide.image} alt={rightSlide.title} fill className="object-cover" />
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end pb-24 px-8">
//             <div ref={rightContentRef}>
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-right">{rightSlide.title}</h2>
//             </div>
//           </div>
//         </div>

//         {/* INCOMING SLIDE */}
//         <div ref={rightIncomingRef} className="absolute w-full h-full">
//           <Image src={nextRightSlide.image} alt={nextRightSlide.title} fill className="object-cover" />
//         </div>

//         <button
//           onClick={handleNext}
//           className="absolute bottom-4 left-4 p-2 md:p-3"
//           aria-label="Next slide"
//           onMouseEnter={() => handleDownArrowHover(true)}
//           onMouseLeave={() => handleDownArrowHover(false)}
//         >
//           <svg width="24" height="48" viewBox="0 0 24 48" fill="none">
//             <line x1="12" y1="0" x2="12" y2="36" stroke="white" strokeWidth="1.5"/>
//             <polyline ref={downArrowRef} points="2,31 12,36 22,31" stroke="white" strokeWidth="1.5" fill="none"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   )
// }


// "use client"

// import { useState, useEffect, useRef } from "react"
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
//   const [current, setCurrent] = useState(0)
//   const leftRef = useRef(null)
//   const rightRef = useRef(null)
//   const leftContentRef = useRef(null)
//   const rightContentRef = useRef(null)
//   const upArrowRef = useRef<SVGPolylineElement>(null)
//   const downArrowRef = useRef<SVGPolylineElement>(null)

//   // Refs for incoming slides
//   const leftIncomingRef = useRef(null)
//   const rightIncomingRef = useRef(null)
//   const leftIncomingContentRef = useRef(null)
//   const rightIncomingContentRef = useRef(null)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       handleNext()
//     }, interval)

//     return () => clearInterval(timer)
//   }, [current, autoPlay, interval])

//   const animateSlide = (direction: "up" | "down") => {
//     const timeline = gsap.timeline()
    
//     // Get next indices for incoming slides
//     const nextLeftIndex = direction === "down" 
//       ? (current + 1) % slides.length 
//       : (current - 1 + slides.length) % slides.length
//     const nextRightIndex = direction === "down" 
//       ? (current + 2) % slides.length 
//       : current % slides.length

//     // Set initial positions for incoming slides
//     if (direction === "down") {
//       // Left side: current moves down, incoming comes from top
//       gsap.set(leftIncomingRef.current, { y: -600, opacity: 1 })
//       gsap.set(leftIncomingContentRef.current, { y: -50, opacity: 0 })
      
//       // Right side: current moves up, incoming comes from bottom  
//       gsap.set(rightIncomingRef.current, { y: 600, opacity: 1 })
//       gsap.set(rightIncomingContentRef.current, { y: 50, opacity: 0 })
//     } else {
//       // Left side: current moves up, incoming comes from bottom
//       gsap.set(leftIncomingRef.current, { y: 600, opacity: 1 })
//       gsap.set(leftIncomingContentRef.current, { y: 50, opacity: 0 })
      
//       // Right side: current moves down, incoming comes from top
//       gsap.set(rightIncomingRef.current, { y: -600, opacity: 1 })
//       gsap.set(rightIncomingContentRef.current, { y: -50, opacity: 0 })
//     }

//     // Animate current slides out
//     if (direction === "down") {
//       timeline.to(
//         leftRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//     } else {
//       timeline.to(
//         leftRef.current,
//         {
//           y: -600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightRef.current,
//         {
//           y: 600,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.inOut",
//         },
//         0
//       )
//     }

//     // Animate current content out
//     timeline.to(leftContentRef.current, { y: direction === "down" ? -50 : 50, opacity: 0, duration: 0.6 }, 0)
//     timeline.to(rightContentRef.current, { y: direction === "down" ? 50 : -50, opacity: 0, duration: 0.6 }, 0)

//     // Animate incoming slides in
//     timeline.to(
//       leftIncomingRef.current,
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power3.inOut",
//       },
//       0
//     )
//     timeline.to(
//       rightIncomingRef.current,
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power3.inOut",
//       },
//       0
//     )

//     // Animate incoming content in
//     timeline.to(leftIncomingContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
//     timeline.to(rightIncomingContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")

//     // Cleanup after animation
//     timeline.add(() => {
//       // Reset positions for next animation
//       gsap.set([leftRef.current, rightRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftContentRef.current, rightContentRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftIncomingRef.current, rightIncomingRef.current], { y: 0, opacity: 0 })
//       gsap.set([leftIncomingContentRef.current, rightIncomingContentRef.current], { y: 0, opacity: 0 })
//     })
//   }

//   const handleNext = () => {
//     animateSlide("down")
//     setCurrent((prev) => (prev + 1) % slides.length)
//   }

//   const handlePrev = () => {
//     animateSlide("up")
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//   }

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

//   const leftSlide = slides[current]
//   const rightSlide = slides[(current + 1) % slides.length]
//   const leftIncomingSlide = slides[(current - 1 + slides.length) % slides.length]
//   const rightIncomingSlide = slides[(current + 2) % slides.length]

//   return (
//     <div className="relative w-full h-[550px] md:h-[890px] lg:h-[470px] xl:h-[600px] 2xl:h-[820px] bg-white overflow-hidden">
//       {/* Left Half - Current Slide */}
//       <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={leftRef} className="relative w-full h-full">
//           <Image
//             src={leftSlide.image || "/placeholder.svg"}
//             alt={leftSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Left Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start pb-24 px-8">
//             <div ref={leftContentRef} className="animate-fadeInUp w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
//                 {leftSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Left Half - Incoming Slide (Hidden by default) */}
//         <div ref={leftIncomingRef} className="absolute inset-0 w-full h-full opacity-0">
//           <Image
//             src={leftIncomingSlide.image || "/placeholder.svg"}
//             alt={leftIncomingSlide.title}
//             fill
//             className="object-cover"
//           />
//           {/* Left Incoming Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start pb-24 px-8">
//             <div ref={leftIncomingContentRef} className="w-full opacity-0">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
//                 {leftIncomingSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Up Arrow for Left */}
//         <button
//           onClick={handlePrev}
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

//       {/* Right Half - Current Slide */}
//       <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={rightRef} className="relative w-full h-full">
//           <Image
//             src={rightSlide.image || "/placeholder.svg"}
//             alt={rightSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Right Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end pb-24 px-8">
//             <div ref={rightContentRef} className="animate-fadeInUp w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
//                 {rightSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Right Half - Incoming Slide (Hidden by default) */}
//         <div ref={rightIncomingRef} className="absolute inset-0 w-full h-full opacity-0">
//           <Image
//             src={rightIncomingSlide.image || "/placeholder.svg"}
//             alt={rightIncomingSlide.title}
//             fill
//             className="object-cover"
//           />
//           {/* Right Incoming Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end pb-24 px-8">
//             <div ref={rightIncomingContentRef} className="w-full opacity-0">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
//                 {rightIncomingSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Down Arrow for Right */}
//         <button
//           onClick={handleNext}
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

// "use client"

// import { useState, useEffect, useRef } from "react"
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
//   const [current, setCurrent] = useState(0)
//   const leftRef = useRef(null)
//   const rightRef = useRef(null)
//   const leftContentRef = useRef(null)
//   const rightContentRef = useRef(null)
//   const upArrowRef = useRef<SVGPolylineElement>(null)
//   const downArrowRef = useRef<SVGPolylineElement>(null)

//   // Refs for incoming slides
//   const leftIncomingRef = useRef(null)
//   const rightIncomingRef = useRef(null)
//   const leftIncomingContentRef = useRef(null)
//   const rightIncomingContentRef = useRef(null)

//   useEffect(() => {
//     if (!autoPlay) return

//     const timer = setInterval(() => {
//       handleNext()
//     }, interval)

//     return () => clearInterval(timer)
//   }, [current, autoPlay, interval])

//   const animateSlide = (direction: "up" | "down") => {
//     const timeline = gsap.timeline()
    
//     // Get next indices for incoming slides
//     const nextLeftIndex = direction === "down" 
//       ? (current + 1) % slides.length 
//       : (current - 1 + slides.length) % slides.length
//     const nextRightIndex = direction === "down" 
//       ? (current + 2) % slides.length 
//       : current % slides.length

//     // Set initial positions for incoming slides - positioned exactly behind current slides
//     if (direction === "down") {
//       // Left side: incoming comes from top (above current)
//       gsap.set(leftIncomingRef.current, { y: -600, opacity: 1 })
//       gsap.set(leftIncomingContentRef.current, { y: -50, opacity: 0 })
      
//       // Right side: incoming comes from bottom (below current)  
//       gsap.set(rightIncomingRef.current, { y: 600, opacity: 1 })
//       gsap.set(rightIncomingContentRef.current, { y: 50, opacity: 0 })
//     } else {
//       // Left side: incoming comes from bottom (below current)
//       gsap.set(leftIncomingRef.current, { y: 600, opacity: 1 })
//       gsap.set(leftIncomingContentRef.current, { y: 50, opacity: 0 })
      
//       // Right side: incoming comes from top (above current)
//       gsap.set(rightIncomingRef.current, { y: -600, opacity: 1 })
//       gsap.set(rightIncomingContentRef.current, { y: -50, opacity: 0 })
//     }

//     // Animate current slides out and incoming slides in simultaneously
//     if (direction === "down") {
//       // Left: current moves down, incoming moves down from top
//       timeline.to(
//         leftRef.current,
//         {
//           y: 600,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         leftIncomingRef.current,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       // Right: current moves up, incoming moves up from bottom
//       timeline.to(
//         rightRef.current,
//         {
//           y: -600,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightIncomingRef.current,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.inOut",
//         },
//         0
//       )
//     } else {
//       // Left: current moves up, incoming moves up from bottom
//       timeline.to(
//         leftRef.current,
//         {
//           y: -600,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         leftIncomingRef.current,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.inOut",
//         },
//         0
//       )

//       // Right: current moves down, incoming moves down from top
//       timeline.to(
//         rightRef.current,
//         {
//           y: 600,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.inOut",
//         },
//         0
//       )
//       timeline.to(
//         rightIncomingRef.current,
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power3.inOut",
//         },
//         0
//       )
//     }

//     // Animate current content out
//     timeline.to(leftContentRef.current, { 
//       y: direction === "down" ? -50 : 50, 
//       opacity: 0, 
//       duration: 0.8 
//     }, 0)
//     timeline.to(rightContentRef.current, { 
//       y: direction === "down" ? 50 : -50, 
//       opacity: 0, 
//       duration: 0.8 
//     }, 0)

//     // Animate incoming content in
//     timeline.to(leftIncomingContentRef.current, { 
//       y: 0, 
//       opacity: 1, 
//       duration: 0.8, 
//       ease: "power3.out" 
//     }, 0.4)
//     timeline.to(rightIncomingContentRef.current, { 
//       y: 0, 
//       opacity: 1, 
//       duration: 0.8, 
//       ease: "power3.out" 
//     }, 0.4)

//     // Update state and cleanup after animation
//     timeline.add(() => {
//       setCurrent((prev) => direction === "down" ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length)
//     })

//     timeline.add(() => {
//       // Reset positions for next animation
//       gsap.set([leftRef.current, rightRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftContentRef.current, rightContentRef.current], { y: 0, opacity: 1 })
//       gsap.set([leftIncomingRef.current, rightIncomingRef.current], { y: 0, opacity: 0 })
//       gsap.set([leftIncomingContentRef.current, rightIncomingContentRef.current], { y: 0, opacity: 0 })
//     })
//   }

//   const handleNext = () => {
//     animateSlide("down")
//   }

//   const handlePrev = () => {
//     animateSlide("up")
//   }

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

//   const leftSlide = slides[current]
//   const rightSlide = slides[(current + 1) % slides.length]
//   const leftIncomingSlide = slides[(current - 1 + slides.length) % slides.length]
//   const rightIncomingSlide = slides[(current + 2) % slides.length]

//   return (
//     <div className="relative w-full h-[550px] md:h-[890px] lg:h-[470px] xl:h-[600px] 2xl:h-[820px] bg-white overflow-hidden">
//       {/* Left Half - Current Slide */}
//       <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={leftRef} className="relative w-full h-full">
//           <Image
//             src={leftSlide.image || "/placeholder.svg"}
//             alt={leftSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Left Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start pb-24 px-8">
//             <div ref={leftContentRef} className="animate-fadeInUp w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
//                 {leftSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Left Half - Incoming Slide (Hidden by default) */}
//         <div ref={leftIncomingRef} className="absolute inset-0 w-full h-full opacity-0">
//           <Image
//             src={leftIncomingSlide.image || "/placeholder.svg"}
//             alt={leftIncomingSlide.title}
//             fill
//             className="object-cover"
//           />
//           {/* Left Incoming Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start pb-24 px-8">
//             <div ref={leftIncomingContentRef} className="w-full opacity-0">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
//                 {leftIncomingSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Up Arrow for Left */}
//         <button
//           onClick={handlePrev}
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

//       {/* Right Half - Current Slide */}
//       <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
//         <div ref={rightRef} className="relative w-full h-full">
//           <Image
//             src={rightSlide.image || "/placeholder.svg"}
//             alt={rightSlide.title}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Right Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end pb-24 px-8">
//             <div ref={rightContentRef} className="animate-fadeInUp w-full">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
//                 {rightSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Right Half - Incoming Slide (Hidden by default) */}
//         <div ref={rightIncomingRef} className="absolute inset-0 w-full h-full opacity-0">
//           <Image
//             src={rightIncomingSlide.image || "/placeholder.svg"}
//             alt={rightIncomingSlide.title}
//             fill
//             className="object-cover"
//           />
//           {/* Right Incoming Overlay */}
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end pb-24 px-8">
//             <div ref={rightIncomingContentRef} className="w-full opacity-0">
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
//                 {rightIncomingSlide.title}
//               </h2>
//             </div>
//           </div>
//         </div>

//         {/* Down Arrow for Right */}
//         <button
//           onClick={handleNext}
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

"use client"

import { useState, useEffect, useRef, useLayoutEffect, useMemo } from "react"
import Image from "next/image"
import gsap from "gsap"

interface Slide {
  image: string
  title: string
  description: string
}

interface SplitScreenSliderProps {
  slides: Array<Slide>
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

  const totalSlides = slides.length

  // Reverse slides for the right side stack
  const reversedSlides = useMemo(() => [...slides].reverse(), [slides])

  // 1. INITIAL SETUP (Runs once)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Wrapper Initial Positions
      gsap.set(leftWrapperRef.current, { y: 0 })
      // Right logic: Stack is [3, 2, 1, 0]. To show Slide 0 (last in stack), move up by (N-1).
      gsap.set(rightWrapperRef.current, { y: `-${(totalSlides - 1) * 100}%` })
      
      // Text Initial State - Only show the first slide's text
      slides.forEach((_, idx) => {
        const elements = `.slide-text-${idx} .anim-element`
        if (idx === 0) {
           gsap.set(elements, { y: 0, autoAlpha: 1 })
        } else {
           gsap.set(elements, { y: 100, autoAlpha: 0 })
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
    // Determine direction
    const direction = getDirection(prevIndex, currentIndex, totalSlides)
    const isNext = direction === 'next'

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
      
      // Left Wrapper (Moves Down for Next)
      tl.to(leftWrapperRef.current, {
        y: `-${currentIndex * 100}%`
      }, 0)

      // Right Wrapper (Moves Up for Next because slides are reversed)
      tl.to(rightWrapperRef.current, {
        y: `-${(totalSlides - 1 - currentIndex) * 100}%`
      }, 0)

      // --- Text Animations ---

      // 1. Animate OUT outgoing text
      const exitY = isNext ? -100 : 100
      
      const prevElements = `.slide-text-${prevIndex} .anim-element`
      tl.to(prevElements, {
        y: exitY,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.in"
      }, 0)

      // 2. Animate IN incoming text
      const enterFromY = isNext ? 100 : -100

      const currentElements = [
        `.slide-text-${currentIndex} .anim-title`
      ]

      // Force starting state immediately before animating in
      tl.fromTo(currentElements, 
        { y: enterFromY, autoAlpha: 0 },
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
          {slides.map((slide, index) => (
            <div 
              key={`left-${index}`}
              className={`w-full h-full flex items-center justify-center relative slide-text-${index}`}
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
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start pb-24 px-8">
                  <div className="anim-element anim-title w-full">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-left">
                      {slide.title}
                    </h2>
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
          {reversedSlides.map((slide, index) => (
            <div 
              key={`right-${slide.title}-${index}`}
              className="w-full h-full relative"
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Right Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-end pb-24 px-8">
                <div className="w-full">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-right">
                    {slide.title}
                  </h2>
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
        {slides.map((_, idx) => (
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