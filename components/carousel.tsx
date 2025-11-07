"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  slides: Array<{
    image: string
    title: string
    description: string
  }>
  autoPlay?: boolean
  interval?: number
}

export function Carousel({ slides, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [slides.length, autoPlay, interval])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
              <div className="animate-fadeInUp">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all md:p-3 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all md:p-3 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 ${
                index === current ? "bg-primary w-8 h-2" : "bg-white/50 hover:bg-white/70 w-2 h-2"
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
