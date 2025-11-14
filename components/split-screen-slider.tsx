"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from 'lucide-react'
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
  const [current, setCurrent] = useState(0)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const leftContentRef = useRef(null)
  const rightContentRef = useRef(null)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      handleNext()
    }, interval)

    return () => clearInterval(timer)
  }, [current, autoPlay, interval])

  const animateSlide = (direction: "up" | "down") => {
    const timeline = gsap.timeline()

    if (direction === "down") {
      timeline.to(
        leftRef.current,
        {
          y: 600,
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        0
      )
      timeline.to(
        rightRef.current,
        {
          y: -600,
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        0
      )

      timeline.to(leftContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
      timeline.to(rightContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
    } else {
      timeline.to(
        leftRef.current,
        {
          y: -600,
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        0
      )
      timeline.to(
        rightRef.current,
        {
          y: 600,
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        0
      )

      timeline.to(leftContentRef.current, { y: 50, opacity: 0, duration: 0.6 }, 0)
      timeline.to(rightContentRef.current, { y: -50, opacity: 0, duration: 0.6 }, 0)
    }

    timeline.add(() => {
      gsap.set([leftRef.current, rightRef.current], { y: 0, opacity: 1 })
      gsap.set([leftContentRef.current, rightContentRef.current], { y: 0, opacity: 1 })
    })

    timeline.to(leftContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
    timeline.to(rightContentRef.current, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")
  }

  const handleNext = () => {
    animateSlide("down")
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    animateSlide("up")
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const leftSlide = slides[current]
  const rightSlide = slides[(current + 1) % slides.length]

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-black overflow-hidden">
      {/* Left Half */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
        <div ref={leftRef} className="relative w-full h-full">
          <Image
            src={leftSlide.image || "/placeholder.svg"}
            alt={leftSlide.title}
            fill
            className="object-cover"
            priority
          />
          {/* Left Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <div ref={leftContentRef} className="animate-fadeInUp flex flex-col justify-center items-center w-full">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance">
                {leftSlide.title}
              </h2>
              {/* <p className="text-sm md:text-lg text-white/90 max-w-md mb-6 text-center">{leftSlide.description}</p>
              <button className="bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-6 rounded-lg transition-all hover:scale-105 active:scale-95">
                Explore
              </button> */}
            </div>
          </div>
        </div>

        {/* Up Arrow for Left - CHANGE: Positioned at bottom-end */}
        <button
          onClick={handlePrev}
          className="absolute bottom-4 right-4 z-20 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all md:p-3 group"
          aria-label="Previous slide"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
        </button>
      </div>

      {/* Divider Line */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent z-30 transform -translate-x-1/2" />

      {/* Right Half */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
        <div ref={rightRef} className="relative w-full h-full">
          <Image
            src={rightSlide.image || "/placeholder.svg"}
            alt={rightSlide.title}
            fill
            className="object-cover"
            priority
          />
          {/* Right Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <div ref={rightContentRef} className="animate-fadeInUp flex flex-col justify-center items-center w-full">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-center text-balance">
                {rightSlide.title}
              </h2>
              {/* <p className="text-sm md:text-lg text-white/90 max-w-md mb-6 text-center">{rightSlide.description}</p>
              <button className="bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-6 rounded-lg transition-all hover:scale-105 active:scale-95">
                Explore
              </button> */}
            </div>
          </div>
        </div>

        {/* Down Arrow for Right - CHANGE: Positioned at bottom-start */}
        <button
          onClick={handleNext}
          className="absolute bottom-4 left-4 z-20 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all md:p-3 group"
          aria-label="Next slide"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
        </button>
      </div>
    </div>
  )
}
