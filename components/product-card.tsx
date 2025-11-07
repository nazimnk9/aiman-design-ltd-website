"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductCardProps {
  name: string
  images: string[]
  description: string
  category: string
}

export function ProductCard({ name, images, description, category }: ProductCardProps) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [autoPlay, images.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
    setAutoPlay(false)
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fadeInUp">
      {/* Image Carousel */}
      <div className="relative h-72 md:h-80 overflow-hidden bg-secondary">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img || "/placeholder.svg"}
              alt={`${name} - View ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-2 rounded-full transition-all"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx)
                setAutoPlay(false)
              }}
              className={`transition-all ${
                idx === current ? "bg-primary w-6 h-2" : "bg-white/50 w-2 h-2"
              } rounded-full`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <button className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95">
          View Powerpoint →
        </button>
      </div>
    </div>
  )
}
