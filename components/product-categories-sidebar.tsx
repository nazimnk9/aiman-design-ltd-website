"use client"

import Image from "next/image"
import { ChevronRight, Loader2 } from "lucide-react"
import { useState, useRef, useEffect, useCallback } from "react"

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
  isLoading?: boolean
}

export function ProductCategoriesSidebar({
  categories,
  selectedCategory,
  breadcrumbLabel,
  onCategorySelect,
  isLoading = false,
}: ProductCategoriesSidebarProps) {
  const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""
  const isProductTypeSelected = !["CIRCULAR_KNIT", "FLAT_KNIT", "WOVEN"].includes(selectedCategory)

  // Filter out the breadcrumb category from the grid
  const gridCategories = categories.filter((cat) => cat.id !== "CIRCULAR_KNIT" && cat.id !== "FLAT_KNIT" && cat.id !== "WOVEN")

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)

  // IMPORTANT:
  // This component renders 3 carousels (desktop/tablet/mobile) at the same time.
  // Using a single `ref` for all of them makes width calculations unreliable because
  // the ref ends up pointing to the last rendered (often hidden) carousel.
  // We instead store the *active* carousel element at drag-start.
  const activeCarouselElRef = useRef<HTMLDivElement | null>(null)

  // Drag tracking refs (refs avoid stale state during fast drags and help smoothness)
  const dragStartXRef = useRef(0)
  const dragOffsetRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const currentSlideRef = useRef(0)

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

  useEffect(() => {
    currentSlideRef.current = currentSlide
  }, [currentSlide])

  const scheduleDragOffsetUpdate = () => {
    if (rafRef.current != null) return
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null
      setDragOffset(dragOffsetRef.current)
    })
  }

  const getContainerWidth = () => activeCarouselElRef.current?.offsetWidth || 0

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent image ghost-drag / text selection
    if ("preventDefault" in e) e.preventDefault()

    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    dragStartXRef.current = clientX
    dragOffsetRef.current = 0
    setDragOffset(0)
    hasDraggedRef.current = false

    // Use the exact carousel the user started dragging on (desktop/tablet/mobile)
    activeCarouselElRef.current = e.currentTarget as HTMLDivElement
  }

  const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent | TouchEvent | MouseEvent) => {
    if (!isDragging) return

    // On touch, stop the page from horizontally scrolling while dragging the carousel
    if ("cancelable" in e && (e as any).cancelable) {
      // @ts-ignore
      e.preventDefault?.()
    }

    const clientX = "touches" in (e as any)
      ? (e as any).touches[0]?.clientX
      : (e as any).clientX

    if (typeof clientX !== "number") return

    const rawOffset = clientX - dragStartXRef.current

    const { view } = getViewConfig()
    const maxSlide = getMaxSlide(view)

    const containerWidth = getContainerWidth()
    const itemWidth = view > 0 ? containerWidth / view : 0

    // If we can't measure, just do nothing (prevents NaNs and weird jumps)
    if (!itemWidth || !isFinite(itemWidth)) return

    // Clamp using the *effective* slide, so resizing can't create invalid bounds
    const effectiveSlide = Math.min(currentSlideRef.current, maxSlide)

    // Bounds in px for current slide
    const maxRightDrag = effectiveSlide * itemWidth
    const maxLeftDrag = -((maxSlide - effectiveSlide) * itemWidth)

    // Hard clamp: do not allow dragging past the ends
    const nextOffset = Math.max(maxLeftDrag, Math.min(rawOffset, maxRightDrag))

    dragOffsetRef.current = nextOffset
    scheduleDragOffsetUpdate()

    if (Math.abs(rawOffset) > DRAG_THRESHOLD) {
      hasDraggedRef.current = true
    }
  }, [isDragging, DRAG_THRESHOLD, gridCategories.length])

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return

    setIsDragging(false)

    if (rafRef.current != null) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    const { view } = getViewConfig()
    const maxSlide = getMaxSlide(view)

    const containerWidth = getContainerWidth()
    const itemWidth = view > 0 ? containerWidth / view : 0

    const effectiveSlide = Math.min(currentSlideRef.current, maxSlide)
    const finalOffset = dragOffsetRef.current

    let nextSlide = effectiveSlide

    if (itemWidth && isFinite(itemWidth) && Math.abs(finalOffset) > DRAG_THRESHOLD) {
      // Move multiple items if the user dragged far enough (feels more natural)
      const moved = Math.max(1, Math.round(Math.abs(finalOffset) / itemWidth))

      if (finalOffset > 0) {
        nextSlide = Math.max(0, effectiveSlide - moved)
      } else {
        nextSlide = Math.min(maxSlide, effectiveSlide + moved)
      }
    }

    setCurrentSlide(nextSlide)
    dragOffsetRef.current = 0
    setDragOffset(0)

    // Reset drag flag
    setTimeout(() => {
      hasDraggedRef.current = false
    }, 100)
  }, [isDragging, DRAG_THRESHOLD, gridCategories.length])

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


  // Keep currentSlide valid on resize (prevents invalid bounds / edge-breaks)
  useEffect(() => {
    if (typeof window === "undefined") return

    const clamp = () => {
      const { view } = getViewConfig()
      const maxSlide = getMaxSlide(view)
      setCurrentSlide((prev) => Math.min(prev, maxSlide))
    }

    clamp()
    window.addEventListener("resize", clamp)
    return () => window.removeEventListener("resize", clamp)
  }, [gridCategories.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDragMove(e)
    const handleMouseUp = () => handleDragEnd()
    const handleTouchMove = (e: TouchEvent) => handleDragMove(e)
    const handleTouchEnd = () => handleDragEnd()

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleTouchEnd)
      document.addEventListener("touchcancel", handleTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove as any)
      document.removeEventListener("touchend", handleTouchEnd)
      document.removeEventListener("touchcancel", handleTouchEnd)
    }
  }, [isDragging, handleDragMove, handleDragEnd])


  return (
    <>
      {/* Desktop/Laptop View */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between gap-8">
            <div className="flex-1 min-w-[470px]">
              <div className="flex items-center gap-2 text-gray-900">
                <span className="text-2xl font-bold uppercase tracking-wide">
                  {breadcrumbLabel}
                </span>

                {isProductTypeSelected && selectedLabel && (
                  <>
                    <ChevronRight size={20} className="text-gray-600" />
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
                  className="overflow-hidden select-none"
                  onMouseDown={handleDragStart}
                  onTouchStart={handleDragStart}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
                >
                  <div
                    className={`flex ${isDragging ? "transition-none" : "transition-transform duration-300 ease-in-out"}`}
                    style={{
                      transform: getTransform(slidesPerView.desktop),
                      width: getTrackWidth(slidesPerView.desktop),
                      willChange: "transform",
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
                className="overflow-hidden select-none"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
              >
                <div
                  className={`flex ${isDragging ? "transition-none" : "transition-transform duration-300 ease-in-out"}`}
                  style={{
                    transform: getTransform(slidesPerView.tablet),
                    width: getTrackWidth(slidesPerView.tablet),
                    willChange: "transform",
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
                className="overflow-hidden select-none"
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
              >
                <div
                  className={`flex ${isDragging ? "transition-none" : "transition-transform duration-300 ease-in-out"}`}
                  style={{
                    transform: getTransform(slidesPerView.mobile),
                    width: getTrackWidth(slidesPerView.mobile),
                    willChange: "transform",
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