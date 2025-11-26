// "use client"

// import { useEffect, useRef, useState } from "react"

// interface StatItem {
//   number: string
//   label: string
// }

// export function IndustryStatsSection() {
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.3 },
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

//   const stats: StatItem[] = [
//     {
//       number: "5,000",
//       label: "Completed Project",
//     },
//     {
//       number: "120",
//       label: "Export Country",
//     },
//     {
//       number: "7,500",
//       label: "Satisfied Customer",
//     },
//   ]

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full py-15 md:py-34 lg:py-15 mt-8 md:mt-14 lg:mt-13 xl:mt-15 overflow-hidden"
//       style={{
//         backgroundImage: "url('/background.jpg')",
//         backgroundAttachment: "fixed",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="absolute inset-0 z-10"></div>

//       {/* Content Container */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-27 py-15 md:py-34 lg:py-15 overflow-hidden z-20">
//         <div className="flex flex-row gap-75 items-center">
//           {/* Left Side - Title Section */}
//           <div
//             className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-balance">
//               Our
//               <br />
//               Industry In
//               <br />
//               Number
//             </h2>
//           </div>

//           {/* Right Side - Stats Grid */}
//           <div
//             className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center"
//                   style={{
//                     animation: isVisible ? `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both` : "none",
//                   }}
//                 >
//                   <div className="text-4xl md:text-5xl font-bold text-white mb-2">
//                     {stat.number}
//                     <span className="text-accent text-3xl ml-1">+</span>
//                   </div>
//                   <p className="text-white/90 text-sm md:text-base font-medium">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"

interface StatItem {
    number: string
    label: string
}

export function IndustryStatsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 },
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

    const stats: StatItem[] = [
        {
            number: "8",
            label: "Years of experience",
        },
        {
            number: "3",
            label: "Lines of Product: \nCircular knit,flat knit & Woven",
        },
        {
            number: "1",
            label: "Country of production:\nBANGLADESH",
        },
        {
            number: "2",
            label: "ADL countries of office\nBANGLADESH & LONDON",
        },
    ]

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-15 md:py-44 lg:py-75 mt-8 md:mt-14 lg:mt-13 xl:mt-15 overflow-hidden"
            style={{
                backgroundImage: "url('/background.jpg')",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-10"></div>

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-27 py-15 md:py-34 lg:py-15 overflow-hidden z-20">
                {/* Mobile Layout */}
                <div className="flex flex-col lg:flex-col gap-15 lg:gap-20 items-center justify-center lg:items-center">
                    {/* Left Side - Title Section */}
                    <div
                        className={`w-full lg:w-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-balance text-center lg:text-left">
                            <span className="block lg:hidden">We are in good shape</span>
                            {/* <span className="hidden lg:block">
                Our
                <br />
                Industry In
                <br />
                Number
              </span> */}
                            <span className="hidden lg:block">
                                We are in good shape
                            </span>
                        </h2>
                    </div>

                    {/* Right Side - Stats Grid */}
                    <div
                        className={`w-full lg:w-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
                    >
                        {/* Mobile: First row with 2 stats */}
                        <div className="grid grid-cols-2 lg:hidden gap-4 mb-4">
                            {stats.slice(0, 2).map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center"
                                    style={{
                                        animation: isVisible ? `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both` : "none",
                                    }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {stat.number}
                                        {/* <span className="text-accent text-2xl md:text-3xl ml-1">+</span> */}
                                    </div>
                                    <p className="text-white text-sm md:text-base font-medium whitespace-pre-line">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile: Second row with 1 stat */}
                        <div className="grid grid-cols-2 lg:hidden">
                            {stats.slice(2, 4).map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center"
                                    style={{
                                        animation: isVisible ? `fadeInUp 0.6s ease-out ${0.5}s both` : "none",
                                    }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {stat.number}
                                        {/* <span className="text-accent text-2xl md:text-3xl ml-1">+</span> */}
                                    </div>
                                    <p className="text-white text-sm md:text-base font-medium whitespace-pre-line">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tablet & Desktop: 3 columns grid */}
                        <div className="hidden lg:grid grid-cols-4 gap-8 lg:gap-18 xl:gap-20 mt-3">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center"
                                    style={{
                                        animation: isVisible ? `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both` : "none",
                                    }}
                                >
                                    <div className="text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                                        {stat.number}
                                        {/* <span className="text-accent text-3xl ml-1">+</span> */}
                                    </div>
                                    <p className="text-white text-sm md:text-base font-medium whitespace-pre-line">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}