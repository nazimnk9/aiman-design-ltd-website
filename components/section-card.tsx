// "use client"

// import type { ReactNode } from "react"
// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// interface SectionCardProps {
//   icon: ReactNode
//   title: string
//   description: string
//   gradient?: string
//   delay?: string
//   index?: number
//   image?: string
//   isImageLeft?: boolean
// }

// export function SectionCard({
//   icon,
//   title,
//   description,
//   gradient = "from-primary to-accent",
//   delay,
//   index = 0,
//   image,
//   isImageLeft = false,
// }: SectionCardProps) {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const animationFrameRef = useRef<number>()
//   const mousePos = useRef({ x: 0, y: 0 })
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           observer.unobserve(entry.target)
//         }
//       },
//       { threshold: 0.1 }
//     )

//     if (containerRef.current) {
//       observer.observe(containerRef.current)
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current)
//       }
//     }
//   }, [])

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const container = containerRef.current
//     if (!canvas || !container) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     canvas.width = container.offsetWidth
//     canvas.height = container.offsetHeight

//     const colors = gradient
//       .replace("from-", "")
//       .replace("to-", "")
//       .split(" ")
//     const gradientStart = getColorValue(colors[0] || "blue-500")
//     const gradientEnd = getColorValue(colors[colors.length - 1] || "cyan-500")

//     const particles: Array<{
//       x: number
//       y: number
//       vx: number
//       vy: number
//       life: number
//     }> = []

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect()
//       mousePos.current = {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       }

//       for (let i = 0; i < 3; i++) {
//         particles.push({
//           x: mousePos.current.x,
//           y: mousePos.current.y,
//           vx: (Math.random() - 0.5) * 4,
//           vy: (Math.random() - 0.5) * 4,
//           life: 1,
//         })
//       }
//     }

//     container.addEventListener("mousemove", handleMouseMove)

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
//       bgGradient.addColorStop(0, gradientStart)
//       bgGradient.addColorStop(1, gradientEnd)
//       ctx.fillStyle = bgGradient
//       ctx.fillRect(0, 0, canvas.width, canvas.height)

//       for (let i = particles.length - 1; i >= 0; i--) {
//         const p = particles[i]

//         p.x += p.vx
//         p.y += p.vy
//         p.vy += 0.1
//         p.life -= 0.02

//         if (p.life <= 0) {
//           particles.splice(i, 1)
//           continue
//         }

//         ctx.fillStyle = `rgba(255, 255, 255, ${p.life * 0.4})`
//         ctx.beginPath()
//         ctx.arc(p.x, p.y, 3, 0, Math.PI * 2)
//         ctx.fill()
//       }

//       ctx.globalCompositeOperation = "multiply"
//       const distortion = Math.sin(Date.now() * 0.002) * 15 + 15
//       for (let i = 0; i < 4; i++) {
//         ctx.fillStyle = `rgba(255, 255, 255, ${0.05 + Math.sin(Date.now() * 0.001 + i) * 0.03})`
//         ctx.beginPath()
//         ctx.arc(
//           canvas.width / 2 + Math.sin(Date.now() * 0.001 + i) * distortion,
//           canvas.height / 2 + Math.cos(Date.now() * 0.001 + i) * distortion,
//           50 + Math.sin(Date.now() * 0.0015 + i) * 20,
//           0,
//           Math.PI * 2,
//         )
//         ctx.fill()
//       }
//       ctx.globalCompositeOperation = "source-over"

//       animationFrameRef.current = requestAnimationFrame(animate)
//     }

//     animate()

//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove)
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current)
//       }
//     }
//   }, [gradient])

//   function getColorValue(colorName: string): string {
//     const colorMap: Record<string, string> = {
//       "blue-500": "#3b82f6",
//       "cyan-500": "#06b6d4",
//       "purple-500": "#a855f7",
//       "pink-500": "#ec4899",
//       "green-500": "#22c55e",
//       "emerald-500": "#10b981",
//       "orange-500": "#f97316",
//       "red-500": "#ef4444",
//     }
//     return colorMap[colorName] || "#3b82f6"
//   }

//   const getAnimationClass = () => {
//     if (!isVisible) return "opacity-0"
//     return isImageLeft ? "animate-slideInLeft" : "animate-slideInRight"
//   }

//   // If image is provided, render the alternating layout
//   if (image) {
//     return (
//       <div
//         ref={containerRef}
//         className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ${getAnimationClass()}`}
//         style={{ animationDelay: delay || `${index * 0.4}s` }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
//           <div className={`relative h-96 md:h-full ${isImageLeft ? "order-1" : "order-2"}`}>
//             <img
//               src={image || "/placeholder.svg"}
//               alt={title}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className={`p-8 md:p-12 flex flex-col justify-center ${isImageLeft ? "order-2" : "order-1"}`}>
//             <div className="relative z-10">
//               <div
//                 className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg`}
//               >
//                 <div className="text-white text-2xl">{icon}</div>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
//                 {title}
//               </h3>
//               <p className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
//                 {description}
//               </p>
//             </div>
//           </div>
//         </div>

//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         />
//       </div>
//     )
//   }

//   // Fallback to original card design for cards without images
//   return (
//     <div
//       ref={containerRef}
//       className={`group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer h-full ${getAnimationClass()}`}
//       style={{ animationDelay: delay || `${index * 0.4}s` }}
//     >
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//       />

//       <div className="relative z-10">
//         <div
//           className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg`}
//         >
//           <div className="text-white text-2xl">{icon}</div>
//         </div>
//         <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
//           {title}
//         </h3>
//         <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
//           {description}
//         </p>
//       </div>

//       <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 group-hover:animate-pulse bg-gradient-to-br from-transparent via-white to-transparent blur-xl transition-opacity duration-300" />
//     </div>
//   )
// }
