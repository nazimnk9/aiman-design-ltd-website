// "use client"

// import { useState } from "react"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { HeaderTopBar } from "@/components/header-top-bar"
// import { ProductsGrid } from "@/components/products-grid"
// import { Breadcrumb } from "@/components/breadcrumb"
// import { ProductCategoriesSidebar } from "@/components/product-categories-sidebar"

// interface Product {
//   id: string
//   brand: string
//   name: string
//   price: number
//   originalPrice?: number
//   image: string
//   images: string[]
//   category: string
//   discount?: number
//   description?: string
// }

// const categories = [
//   { id: "women", label: "WOMEN", icon: "/women-icon.jpg", href: "/products/women" },
//   {
//     id: "suits",
//     label: "SUITS & SEPARATES",
//     icon: "/images/suits-20-26-20separates.webp",
//     href: "/products/women",
//   },
//   {
//     id: "shirts",
//     label: "SHIRTS & POLOS",
//     icon: "/images/shirts-20-26-20polos.webp",
//     href: "/products/women",
//   },
//   {
//     id: "jeans",
//     label: "JEANS & DENIM",
//     icon: "/images/jeans-20-26-20denim.webp",
//     href: "/products/women",
//   },
//   {
//     id: "activewear",
//     label: "ACTIVEWEAR",
//     icon: "/images/activewear.webp",
//     href: "/products/women",
//   },
//   { id: "shoes", label: "SHOES & ACCESSORIES", icon: "/shoes-icon.jpg", href: "/products/women" },
// ]

// const womenProducts: Product[] = [
//   {
//     id: "suit-w1",
//     brand: "ZEGNA",
//     name: "Premium Women's Suit",
//     price: 5800,
//     originalPrice: 6500,
//     image: "/images/capture1.png",
//     images: ["/images/capture1.png", "/premium-garments-fashion-showcase.jpg"],
//     category: "suits",
//     discount: 11,
//     description: "Elegant women's suit crafted from premium wool with tailored fit.",
//   },
//   {
//     id: "shirt-w1",
//     brand: "BOSS",
//     name: "Silk Blend Blouse",
//     price: 380,
//     originalPrice: 450,
//     image: "/white-business-shirt.jpg",
//     images: ["/white-business-shirt.jpg", "/premium-dress-shirt.jpg"],
//     category: "shirts",
//     discount: 15,
//     description: "Luxurious silk blend blouse for sophisticated style.",
//   },
//   {
//     id: "jeans-w1",
//     brand: "LEVI'S",
//     name: "Women's 501 Original Fit",
//     price: 108,
//     originalPrice: 135,
//     image: "/slim-fit-jeans.jpg",
//     images: ["/slim-fit-jeans.jpg", "/relaxed-fit-jeans.jpg"],
//     category: "jeans",
//     discount: 20,
//     description: "Iconic 501s with timeless fit and style.",
//   },
//   {
//     id: "active-w1",
//     brand: "ADIDAS",
//     name: "Women's Training Set",
//     price: 85,
//     originalPrice: 110,
//     image: "/training-tee.jpg",
//     images: ["/training-tee.jpg", "/sports-jacket.jpg"],
//     category: "activewear",
//     discount: 23,
//     description: "Complete training set for active women.",
//   },
// ]

// export default function WomenProducts() {
//   const [selectedCategory, setSelectedCategory] = useState("suits")

//   const breadcrumbItems = [
//     { label: "KIDS", href: "/products/kids" },
//     { label: "WOMEN" },
//     { label: "MEN", href: "/products/men" },
//   ]

//   const filteredProducts = womenProducts.filter((product) => product.category === selectedCategory)

//   return (
//     <div className="min-h-screen bg-white">
//       <HeaderTopBar />
//       <Navbar />

//       <Breadcrumb items={breadcrumbItems} />

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <ProductCategoriesSidebar
//           categories={categories}
//           selectedCategory={selectedCategory}
//           breadcrumbLabel="WOMEN"
//           onCategorySelect={setSelectedCategory}
//         />

//         <div className="mt-8">
//           <ProductsGrid products={filteredProducts.length > 0 ? filteredProducts : womenProducts} />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

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
}

const categories = [
  { id: "women", label: "WOMEN", icon: "/women-icon.jpg", href: "/products/women" },
  {
    id: "suits",
    label: "SUITS & SEPARATES",
    icon: "/images/suits-20-26-20separates.webp",
    href: "/products/women",
  },
  {
    id: "shirts",
    label: "SHIRTS & POLOS",
    icon: "/images/shirts-20-26-20polos.webp",
    href: "/products/women",
  },
  {
    id: "jeans",
    label: "JEANS & DENIM",
    icon: "/images/jeans-20-26-20denim.webp",
    href: "/products/women",
  },
  {
    id: "activewear",
    label: "ACTIVEWEAR",
    icon: "/images/activewear.webp",
    href: "/products/women",
  },
  // { id: "shoes", label: "SHOES & ACCESSORIES", icon: "/shoes-icon.jpg", href: "/products/women" },
]

const womenProducts: Product[] = [
  {
    id: "suit-w1",
    brand: "ZEGNA",
    name: "Premium Women's Suit",
    price: 5800,
    originalPrice: 6500,
    image: "/images/capture1.png",
    images: ["/images/capture1.png", "/premium-garments-fashion-showcase.jpg"],
    category: "suits",
    discount: 11,
    description: "Elegant women's suit crafted from premium wool with tailored fit.",
  },
  {
    id: "shirt-w1",
    brand: "BOSS",
    name: "Silk Blend Blouse",
    price: 380,
    originalPrice: 450,
    image: "/white-business-shirt.jpg",
    images: ["/white-business-shirt.jpg", "/premium-dress-shirt.jpg"],
    category: "shirts",
    discount: 15,
    description: "Luxurious silk blend blouse for sophisticated style.",
  },
  {
    id: "jeans-w1",
    brand: "LEVI'S",
    name: "Women's 501 Original Fit",
    price: 108,
    originalPrice: 135,
    image: "/slim-fit-jeans.jpg",
    images: ["/slim-fit-jeans.jpg", "/relaxed-fit-jeans.jpg"],
    category: "jeans",
    discount: 20,
    description: "Iconic 501s with timeless fit and style.",
  },
  {
    id: "active-w1",
    brand: "ADIDAS",
    name: "Women's Training Set",
    price: 85,
    originalPrice: 110,
    image: "/training-tee.jpg",
    images: ["/training-tee.jpg", "/sports-jacket.jpg"],
    category: "activewear",
    discount: 23,
    description: "Complete training set for active women.",
  },
]

export default function WomenProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const breadcrumbItems = [
    { label: "KIDS", href: "/products/kids" },
    { label: "WOMEN" },
    { label: "MEN", href: "/products/men" },
  ]

  const filteredProducts = selectedCategory
    ? womenProducts.filter((product) => product.category === selectedCategory)
    : womenProducts

  return (
    <div className="min-h-screen bg-white">
      <HeaderTopBar />
      <Navbar />

      <Breadcrumb items={breadcrumbItems} />

      <section className="">
        <div className="bg-white border-b border-gray-200">

        <ProductCategoriesSidebar
          categories={categories}
          selectedCategory={selectedCategory || ""}
          breadcrumbLabel="WOMEN"
          onCategorySelect={setSelectedCategory}
        />
        </div>

        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductsGrid products={filteredProducts} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
