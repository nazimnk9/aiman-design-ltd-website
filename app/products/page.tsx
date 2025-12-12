"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeaderTopBar } from "@/components/header-top-bar"
import { ProductsGrid } from "@/components/products-grid"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProductCategoriesSidebar } from "@/components/product-categories-sidebar"

interface Product {
  id: string
  brand: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  discount?: number
  description?: string
  style?: string
  composition?: string
  weight?: string
  sewingOperation?: string
}

const categories = [
  { id: "men", label: "MEN", icon: "/men-icon.jpg", href: "/products/men" },
  {
    id: "suits",
    label: "SUITS & SEPARATES",
    icon: "/images/suits-20-26-20separates.webp",
    href: "/products/men",
  },
  {
    id: "shirts",
    label: "SHIRTS & POLOS",
    icon: "/images/shirts-20-26-20polos.webp",
    href: "/products/men",
  },
  {
    id: "jeans",
    label: "JEANS & DENIM",
    icon: "/images/jeans-20-26-20denim.webp",
    href: "/products/men",
  },
  {
    id: "activewear",
    label: "ACTIVEWEAR",
    icon: "/images/activewear.webp",
    href: "/products/men",
  },
]

const suitsProducts: Product[] = [
  {
    id: "suit-1",
    brand: "ZEGNA",
    name: "Pin Dot Trofeo Milano Wool Suit",
    price: 6400,
    originalPrice: 6800,
    image: "/images/capture1.png",
    images: ["/images/capture1.png", "/premium-garments-fashion-showcase.jpg"],
    category: "Suits",
    discount: 6,
    description:
      "Crafted from the brand's signature Trofeo wool, this suit features an impeccable fit and modern polish for a subtly sophisticated look and daylong comfort.",
    style: "Zegna (ZG-001)",
    composition: "100% Wool",
    weight: "350 Grams",
    sewingOperation: "Hand Stitched",
  },
  {
    id: "suit-2",
    brand: "TED BAKER LONDON",
    name: "Ralph Extra Slim Fit Wool Suit",
    price: 1500,
    originalPrice: 1590,
    image: "/images/capture1.png",
    images: ["/images/capture1.png", "/trendy-modern-clothing-collection.jpg"],
    category: "Suits",
    description:
      "Finely textured Italian wool elevates this modern suit with limited structure for a more flexible feel.",
    style: "Ted Baker (TB-205)",
    composition: "95% Wool, 5% Elastane",
    weight: "330 Grams",
    sewingOperation: "Machine Stitched",
  },
  {
    id: "suit-3",
    brand: "BOSS",
    name: "Harry Solid Suit",
    price: 4300,
    originalPrice: 6300,
    image: "/images/capture1.png",
    images: ["/images/capture1.png", "/luxury-apparel-textile-design.jpg"],
    category: "Suits",
    discount: 32,
    description:
      "A navy-blue color adds dapper appeal to this Italian suit that's styled by simplicity with flat-front trousers and classic notched lapels.",
    style: "Boss (BOSS-150)",
    composition: "100% Italian Wool",
    weight: "370 Grams",
    sewingOperation: "Collet using Cord",
  },
]

const shirtsProducts: Product[] = [
  {
    id: "shirt-1",
    brand: "ZEGNA",
    name: "Premium Cotton Dress Shirt",
    price: 425,
    originalPrice: 500,
    image: "/premium-dress-shirt.jpg",
    images: ["/premium-dress-shirt.jpg", "/white-business-shirt.jpg"],
    category: "Shirts",
    discount: 15,
    description: "Crafted from premium Egyptian cotton, this dress shirt offers exceptional comfort and breathability.",
  },
  {
    id: "shirt-2",
    brand: "BOSS",
    name: "Classic White Business Shirt",
    price: 325,
    image: "/white-business-shirt.jpg",
    images: ["/white-business-shirt.jpg", "/premium-dress-shirt.jpg"],
    category: "Shirts",
    description: "A timeless white business shirt perfect for any formal occasion.",
  },
  {
    id: "shirt-3",
    brand: "LACOSTE",
    name: "Heritage Polo Shirt",
    price: 95,
    originalPrice: 120,
    image: "/polo-shirt.jpg",
    images: ["/polo-shirt.jpg", "/oxford-shirt.jpg"],
    category: "Shirts",
    discount: 21,
    description: "Classic heritage polo shirt with embroidered logo.",
  },
  {
    id: "shirt-4",
    brand: "RALPH LAUREN",
    name: "Oxford Button Down",
    price: 125,
    image: "/oxford-shirt.jpg",
    images: ["/oxford-shirt.jpg", "/polo-shirt.jpg"],
    category: "Shirts",
    description: "Iconic Oxford shirt with button-down collar.",
  },
]

const jeansProducts: Product[] = [
  {
    id: "jeans-1",
    brand: "LEVI'S",
    name: "511 Slim Fit Dark Indigo",
    price: 98,
    originalPrice: 128,
    image: "/slim-fit-jeans.jpg",
    images: ["/slim-fit-jeans.jpg", "/relaxed-fit-jeans.jpg"],
    category: "Jeans",
    discount: 24,
    description: "Classic slim fit jeans in premium dark indigo denim.",
  },
  {
    id: "jeans-2",
    brand: "WRANGLER",
    name: "Cowboy Cut Relaxed Fit",
    price: 55,
    image: "/relaxed-fit-jeans.jpg",
    images: ["/relaxed-fit-jeans.jpg", "/slim-fit-jeans.jpg"],
    category: "Jeans",
    description: "Traditional cowboy cut with comfortable relaxed fit.",
  },
  {
    id: "jeans-3",
    brand: "DIESEL",
    name: "Sleenker Skinny Jeans",
    price: 220,
    image: "/skinny-jeans.jpg",
    images: ["/skinny-jeans.jpg", "/denim-shorts.jpg"],
    category: "Jeans",
    description: "Modern skinny fit with premium Italian denim.",
  },
  {
    id: "jeans-4",
    brand: "TOMMY HILFIGER",
    name: "Classic Denim Shorts",
    price: 75,
    originalPrice: 95,
    image: "/denim-shorts.jpg",
    images: ["/denim-shorts.jpg", "/skinny-jeans.jpg"],
    category: "Jeans",
    discount: 21,
    description: "Classic denim shorts in versatile blue wash.",
  },
]

const activewearProducts: Product[] = [
  {
    id: "active-1",
    brand: "NIKE",
    name: "Dri-FIT Running Shirt",
    price: 65,
    image: "/running-shirt.jpg",
    images: ["/running-shirt.jpg", "/training-tee.jpg"],
    category: "Activewear",
    description: "Moisture-wicking Dri-FIT technology for optimal performance.",
  },
  {
    id: "active-2",
    brand: "ADIDAS",
    name: "Climacool Training Tee",
    price: 55,
    originalPrice: 70,
    image: "/training-tee.jpg",
    images: ["/training-tee.jpg", "/sports-jacket.jpg"],
    category: "Activewear",
    discount: 21,
    description: "Adidas Climacool technology keeps you cool and dry.",
  },
  {
    id: "active-3",
    brand: "UNDER ARMOUR",
    name: "Performance Sports Jacket",
    price: 129,
    image: "/sports-jacket.jpg",
    images: ["/sports-jacket.jpg", "/track-pants.jpg"],
    category: "Activewear",
    description: "Premium performance jacket for intense workouts.",
  },
  {
    id: "active-4",
    brand: "PUMA",
    name: "Essentials Track Pants",
    price: 75,
    image: "/track-pants.jpg",
    images: ["/track-pants.jpg", "/running-shirt.jpg"],
    category: "Activewear",
    description: "Comfortable track pants for everyday wear.",
  },
]

export default function Products() {
  const [selectedCategory] = useState("men")

  const getProductsByCategory = () => {
    // Combine all products
    return [...suitsProducts, ...shirtsProducts, ...jeansProducts, ...activewearProducts]
  }

  const breadcrumbItems = [
    { label: "KIDS", href: "/products/kids" },
    { label: "WOMEN", href: "/products/women" },
    { label: "MEN" },
  ]

  const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""

  return (
    <div className="min-h-screen bg-white">
      <HeaderTopBar />
      <Navbar />

      {/* Breadcrumb Navigation - Centered */}
      <Breadcrumb 
        items={breadcrumbItems} 
        selectedCategory={selectedCategory || ""} 
        selectedLabel={selectedLabel}
      />

      {/* Main Content */}
      <section className="w-full">
        {/* Categories Sidebar + Products - Single Row */}
        <ProductCategoriesSidebar breadcrumbLabel="MEN" categories={categories} selectedCategory={selectedCategory} />

        {/* Products Grid - Full Width */}
        <div className="mt-8">
          <ProductsGrid products={getProductsByCategory()} breadcrumbName="men" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
