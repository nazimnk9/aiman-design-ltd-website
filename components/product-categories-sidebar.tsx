"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
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
  const isProductTypeSelected = !["CIRCULAR_KNIT", "FLAT_KNIT", "WOVEN"].includes(selectedCategory)

  // Filter out the breadcrumb category from the grid
  const gridCategories = categories.filter((cat) => cat.id !== "CIRCULAR_KNIT" && cat.id !== "FLAT_KNIT" && cat.id !== "WOVEN")

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Ref to track if a drag actually happened (to prevent click)
  const hasDraggedRef = useRef(false)

  // Unified threshold for drag vs click
  // 10px ensures deliberate moves change slide, avoiding "snap back" to current.
  const DRAG_THRESHOLD = 5

  // Calculate slides for different screen sizes
  const slidesPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4
  }

  // Helper to get current view config
  const getViewConfig = () => {
    if (typeof window === 'undefined') return { view: slidesPerView.desktop, total: gridCategories.length }
    if (window.innerWidth < 768) return { view: slidesPerView.mobile, total: gridCategories.length }
    if (window.innerWidth < 1024) return { view: slidesPerView.tablet, total: gridCategories.length }
    return { view: slidesPerView.desktop, total: gridCategories.length }
  }

  // Helper limits
  const getMaxSlide = (viewCount: number) => Math.max(0, gridCategories.length - viewCount)

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
    hasDraggedRef.current = false
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const offset = clientX - dragStart
    setDragOffset(offset)

    // If moved significantly, mark as dragged
    if (Math.abs(offset) > DRAG_THRESHOLD) {
      hasDraggedRef.current = true
    }
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const { view } = getViewConfig()
    const maxSlide = getMaxSlide(view)

    let nextSlide = currentSlide

    // Use the same low threshold to ensure any valid drag changes the slide
    // This prevents "showing current slide again" after a drag attempt
    if (dragOffset > DRAG_THRESHOLD) {
      // Dragged Right (Positive) -> Move to Previous Left items
      nextSlide = Math.max(0, currentSlide - 1)
    } else if (dragOffset < -DRAG_THRESHOLD) {
      // Dragged Left (Negative) -> Move to Next Right items
      nextSlide = Math.min(maxSlide, currentSlide + 1)
    }

    setCurrentSlide(nextSlide)
    setDragOffset(0)

    // Reset drag flag
    setTimeout(() => {
      hasDraggedRef.current = false
    }, 100)
  }

  const handleItemClick = (categoryId: string) => {
    // If we dragged, do NOT select. Strictly separates Drag from Click.
    if (hasDraggedRef.current) return
    onCategorySelect?.(categoryId)
  }

  const goToSlide = (index: number) => {
    const { view } = getViewConfig()
    // Map page index to item index for dots
    const targetItemIndex = index * view
    const maxSlide = getMaxSlide(view)
    setCurrentSlide(Math.min(targetItemIndex, maxSlide))
  }

  // Safe accessor for current slide percentage
  const getTransform = (viewCount: number) => {
    const maxSlide = getMaxSlide(viewCount)
    const effectiveSlide = Math.min(currentSlide, maxSlide)
    const itemWidthPercent = 100 / gridCategories.length
    return `translateX(calc(-${effectiveSlide * itemWidthPercent}% + ${dragOffset}px))`
  }

  // Safe accessor for track width
  const getTrackWidth = (viewCount: number) => {
    return `${(gridCategories.length / viewCount) * 100}%`
  }

  // Determine which dot should be active
  const getActiveDotIndex = (viewCount: number) => {
    const maxSlide = getMaxSlide(viewCount)
    const totalDots = Math.ceil(gridCategories.length / viewCount)

    let activeIndex = 0
    let minDiff = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < totalDots; i++) {
      const target = Math.min(i * viewCount, maxSlide)
      const diff = Math.abs(currentSlide - target)

      if (diff < minDiff) {
        minDiff = diff
        activeIndex = i
      } else if (diff === minDiff) {
        if (target === maxSlide) {
          activeIndex = i
        }
      }
    }
    return activeIndex
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


            {/* Categories Carousel - Right Side */}
            <div className="w-[calc(100%-400px)] flex flex-col items-center">
              <div className="relative w-full">
                <div
                  ref={carouselRef}
                  className="overflow-hidden select-none"
                  onMouseDown={handleDragStart}
                  onTouchStart={handleDragStart}
                  onTouchMove={handleDragMove}
                  onTouchEnd={handleDragEnd}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: getTransform(slidesPerView.desktop),
                      width: getTrackWidth(slidesPerView.desktop)
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
                            onClick={() => handleItemClick(category.id)}
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
                                className="w-full h-full object-cover pointer-events-none"
                                draggable={false}
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
              </div>

              {/* Dot Indicators */}
              <div className="flex gap-2 mt-6">
                {Array.from({ length: Math.ceil(gridCategories.length / slidesPerView.desktop) }).map((_, index) => {
                  const isActive = getActiveDotIndex(slidesPerView.desktop) === index;
                  return (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${isActive ? 'bg-gray-900' : 'bg-gray-300'
                        }`}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-b border-gray-200"></div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col gap-6 px-4 sm:px-6 py-8">
          {/* Categories Carousel - Center */}
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-4xl">
              <div
                ref={carouselRef}
                className="overflow-hidden select-none"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: getTransform(slidesPerView.tablet),
                    width: getTrackWidth(slidesPerView.tablet)
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
                          onClick={() => handleItemClick(category.id)}
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
                              className="w-full h-full object-contain pointer-events-none"
                              draggable={false}
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
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-6">
              {Array.from({ length: Math.ceil(gridCategories.length / slidesPerView.tablet) }).map((_, index) => {
                const isActive = getActiveDotIndex(slidesPerView.tablet) === index;
                return (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${isActive ? 'bg-gray-900' : 'bg-gray-300'
                      }`}
                  />
                )
              })}
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
                className="overflow-hidden select-none"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: getTransform(slidesPerView.mobile),
                    width: getTrackWidth(slidesPerView.mobile)
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
                          onClick={() => handleItemClick(category.id)}
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
                              className="w-full h-full object-contain pointer-events-none"
                              draggable={false}
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
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-4">
              {Array.from({ length: Math.ceil(gridCategories.length / slidesPerView.mobile) }).map((_, index) => {
                const isActive = getActiveDotIndex(slidesPerView.mobile) === index;
                return (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-gray-900' : 'bg-gray-300'
                      }`}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="w-full border-b border-gray-200"></div>
      </div>
    </>
  )
}