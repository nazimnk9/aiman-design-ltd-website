"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Background3D } from "@/components/3d-background"
import { HeaderTopBar } from "@/components/header-top-bar"

const products = [
  {
    name: "Premium T-Shirts",
    category: "Basics",
    images: [
      "/premium-tshirts-collection-design.jpg",
      "/colorful-tshirt-styles.jpg",
      "/comfortable-casual-tshirts.jpg",
    ],
    description: "High-quality, comfortable t-shirts perfect for everyday wear with premium materials.",
  },
  {
    name: "Designer Shirts",
    category: "Formal",
    images: [
      "/designer-formal-shirts-collection.jpg",
      "/professional-business-shirts.jpg",
      "/elegant-dress-shirts.jpg",
    ],
    description: "Sophisticated formal wear designed for the modern professional with elegant styles.",
  },
  {
    name: "Casual Dresses",
    category: "Casual",
    images: [
      "/casual-dresses-modern-style.jpg",
      "/comfortable-everyday-dresses.jpg",
      "/trendy-casual-wear-dresses.jpg",
    ],
    description: "Versatile dresses that combine comfort with contemporary style for any occasion.",
  },
  {
    name: "Athletic Wear",
    category: "Sports",
    images: [
      "/placeholder.svg?height=320&width=320",
      "/placeholder.svg?height=320&width=320",
      "/placeholder.svg?height=320&width=320",
    ],
    description: "Performance-driven athletic wear engineered for movement and style.",
  },
  {
    name: "Denim Collection",
    category: "Denim",
    images: [
      "/placeholder.svg?height=320&width=320",
      "/placeholder.svg?height=320&width=320",
      "/placeholder.svg?height=320&width=320",
    ],
    description: "Timeless denim pieces crafted from the finest materials with perfect fit.",
  },
  {
    name: "Evening Wear",
    category: "Formal",
    images: [
      "/placeholder.svg?height=320&width=320",
      "/placeholder.svg?height=320&width=320",
      "/placeholder.svg?height=320&width=320",
    ],
    description: "Stunning evening wear for those special moments that deserve elegance.",
  },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderTopBar />
      <Navbar />

      {/* Hero Section - Added 3D background animation */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-16 md:py-24 overflow-hidden">
        <Background3D type="products" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Our Products</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explore our diverse collection of premium garments
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid - Added 3D background animation */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
        <Background3D type="career" />
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={product.name} style={{ animationDelay: `${i * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
