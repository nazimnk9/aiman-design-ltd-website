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
//   { id: "men", label: "MEN", icon: "/men-icon.jpg", href: "/products/men" },
//   {
//     id: "suits",
//     label: "SUITS & SEPARATES",
//     icon: "/images/suits-20-26-20separates.webp",
//     href: "/products/men",
//   },
//   {
//     id: "shirts",
//     label: "SHIRTS & POLOS",
//     icon: "/images/shirts-20-26-20polos.webp",
//     href: "/products/men",
//   },
//   {
//     id: "jeans",
//     label: "JEANS & DENIM",
//     icon: "/images/jeans-20-26-20denim.webp",
//     href: "/products/men",
//   },
//   {
//     id: "activewear",
//     label: "ACTIVEWEAR",
//     icon: "/images/activewear.webp",
//     href: "/products/men",
//   },
//   { id: "shoes", label: "SHOES & ACCESSORIES", icon: "/shoes-icon.jpg", href: "/products/men" },
// ]

// const menProducts: Product[] = [
//   {
//     id: "suit-1",
//     brand: "ZEGNA",
//     name: "Pin Dot Trofeo Milano Wool Suit",
//     price: 6400,
//     originalPrice: 6800,
//     image: "/images/capture1.png",
//     images: ["/images/capture1.png", "/premium-garments-fashion-showcase.jpg"],
//     category: "suits",
//     discount: 6,
//     description:
//       "Crafted from the brand's signature Trofeo wool, this suit features an impeccable fit and modern polish for a subtly sophisticated look and daylong comfort.",
//   },
//   {
//     id: "shirt-1",
//     brand: "ZEGNA",
//     name: "Premium Cotton Dress Shirt",
//     price: 425,
//     originalPrice: 500,
//     image: "/premium-dress-shirt.jpg",
//     images: ["/premium-dress-shirt.jpg", "/white-business-shirt.jpg"],
//     category: "shirts",
//     discount: 15,
//     description: "Crafted from premium Egyptian cotton, this dress shirt offers exceptional comfort and breathability.",
//   },
//   {
//     id: "jeans-1",
//     brand: "LEVI'S",
//     name: "511 Slim Fit Dark Indigo",
//     price: 98,
//     originalPrice: 128,
//     image: "/slim-fit-jeans.jpg",
//     images: ["/slim-fit-jeans.jpg", "/relaxed-fit-jeans.jpg"],
//     category: "jeans",
//     discount: 24,
//     description: "Classic slim fit jeans in premium dark indigo denim.",
//   },
//   {
//     id: "active-1",
//     brand: "NIKE",
//     name: "Dri-FIT Running Shirt",
//     price: 65,
//     image: "/running-shirt.jpg",
//     images: ["/running-shirt.jpg", "/training-tee.jpg"],
//     category: "activewear",
//     description: "Moisture-wicking Dri-FIT technology for optimal performance.",
//   },
// ]

// export default function MenProducts() {
//   const [selectedCategory, setSelectedCategory] = useState("suits")

//   const breadcrumbItems = [
//     { label: "KIDS", href: "/products/kids" },
//     { label: "WOMEN", href: "/products/women" },
//     { label: "MEN" },
//   ]

//   const filteredProducts = menProducts.filter((product) => product.category === selectedCategory)

//   return (
//     <div className="min-h-screen bg-white">
//       <HeaderTopBar />
//       <Navbar />

//       <Breadcrumb items={breadcrumbItems} />

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <ProductCategoriesSidebar
//           categories={categories}
//           selectedCategory={selectedCategory}
//           breadcrumbLabel="MEN"
//           onCategorySelect={setSelectedCategory}
//         />

//         <div className="mt-8">
//           <ProductsGrid products={filteredProducts.length > 0 ? filteredProducts : menProducts} />
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
  // { id: "shoes", label: "SHOES & ACCESSORIES", icon: "/shoes-icon.jpg", href: "/products/men" },
]

const menProducts: Product[] = [
  {
    id: "suit-1",
    brand: "ZEGNA",
    name: "Pin Dot Trofeo Milano Wool Suit",
    price: 6400,
    originalPrice: 6800,
    image: "/images/capture1.png",
    images: ["/images/capture1.png", "/premium-garments-fashion-showcase.jpg"],
    category: "suits",
    discount: 6,
    description:
      "Crafted from the brand's signature Trofeo wool, this suit features an impeccable fit and modern polish for a subtly sophisticated look and daylong comfort.",
  },
  {
    id: "shirt-1",
    brand: "ZEGNA",
    name: "Premium Cotton Dress Shirt",
    price: 425,
    originalPrice: 500,
    image: "/premium-dress-shirt.jpg",
    images: ["/premium-dress-shirt.jpg", "/white-business-shirt.jpg"],
    category: "shirts",
    discount: 15,
    description: "Crafted from premium Egyptian cotton, this dress shirt offers exceptional comfort and breathability.",
  },
  {
    id: "jeans-1",
    brand: "LEVI'S",
    name: "511 Slim Fit Dark Indigo",
    price: 98,
    originalPrice: 128,
    image: "/slim-fit-jeans.jpg",
    images: ["/slim-fit-jeans.jpg", "/relaxed-fit-jeans.jpg"],
    category: "jeans",
    discount: 24,
    description: "Classic slim fit jeans in premium dark indigo denim.",
  },
  {
    id: "active-1",
    brand: "NIKE",
    name: "Dri-FIT Running Shirt",
    price: 65,
    image: "/running-shirt.jpg",
    images: ["/running-shirt.jpg", "/training-tee.jpg"],
    category: "activewear",
    description: "Moisture-wicking Dri-FIT technology for optimal performance.",
  },
]

export default function MenProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const breadcrumbItems = [
    { label: "KIDS", href: "/products/kids" },
    { label: "WOMEN", href: "/products/women" },
    { label: "MEN" },
  ]

  const filteredProducts = selectedCategory
    ? menProducts.filter((product) => product.category === selectedCategory)
    : menProducts

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
          breadcrumbLabel="MEN"
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
