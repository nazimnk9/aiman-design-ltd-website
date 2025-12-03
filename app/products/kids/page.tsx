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
//   { id: "kids", label: "KIDS", icon: "/kids-icon.jpg", href: "/products/kids" },
//   {
//     id: "suits",
//     label: "SUITS & SEPARATES",
//     icon: "/images/suits-20-26-20separates.webp",
//     href: "/products/kids",
//   },
//   {
//     id: "shirts",
//     label: "SHIRTS & POLOS",
//     icon: "/images/shirts-20-26-20polos.webp",
//     href: "/products/kids",
//   },
//   {
//     id: "jeans",
//     label: "JEANS & DENIM",
//     icon: "/images/jeans-20-26-20denim.webp",
//     href: "/products/kids",
//   },
//   {
//     id: "activewear",
//     label: "ACTIVEWEAR",
//     icon: "/images/activewear.webp",
//     href: "/products/kids",
//   },
//   { id: "shoes", label: "SHOES & ACCESSORIES", icon: "/shoes-icon.jpg", href: "/products/kids" },
// ]

// const kidsProducts: Product[] = [
//   {
//     id: "suit-k1",
//     brand: "POLO RALPH LAUREN",
//     name: "Kids' Dress Shirt",
//     price: 45,
//     originalPrice: 55,
//     image: "/images/capture1.png",
//     images: ["/images/capture1.png", "/premium-garments-fashion-showcase.jpg"],
//     category: "shirts",
//     discount: 18,
//     description: "Classic kids' dress shirt perfect for special occasions.",
//   },
//   {
//     id: "shirt-k1",
//     brand: "GAP KIDS",
//     name: "Kids' Polo Shirt",
//     price: 25,
//     image: "/polo-shirt.jpg",
//     images: ["/polo-shirt.jpg", "/oxford-shirt.jpg"],
//     category: "shirts",
//     description: "Comfortable polo shirt for everyday kids' wear.",
//   },
//   {
//     id: "jeans-k1",
//     brand: "LEVI'S KIDS",
//     name: "Kids' Slim Fit Jeans",
//     price: 38,
//     originalPrice: 48,
//     image: "/slim-fit-jeans.jpg",
//     images: ["/slim-fit-jeans.jpg", "/relaxed-fit-jeans.jpg"],
//     category: "jeans",
//     discount: 21,
//     description: "Durable jeans designed for active kids.",
//   },
//   {
//     id: "active-k1",
//     brand: "NIKE KIDS",
//     name: "Kids' Sportswear Set",
//     price: 50,
//     originalPrice: 65,
//     image: "/running-shirt.jpg",
//     images: ["/running-shirt.jpg", "/training-tee.jpg"],
//     category: "activewear",
//     discount: 23,
//     description: "Sporty set for kids' active lifestyle.",
//   },
// ]

// export default function KidsProducts() {
//   const [selectedCategory, setSelectedCategory] = useState("shirts")

//   const breadcrumbItems = [
//     { label: "KIDS" },
//     { label: "WOMEN", href: "/products/women" },
//     { label: "MEN", href: "/products/men" },
//   ]

//   const filteredProducts = kidsProducts.filter((product) => product.category === selectedCategory)

//   return (
//     <div className="min-h-screen bg-white">
//       <HeaderTopBar />
//       <Navbar />

//       <Breadcrumb items={breadcrumbItems} />

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <ProductCategoriesSidebar
//           categories={categories}
//           selectedCategory={selectedCategory}
//           breadcrumbLabel="KIDS"
//           onCategorySelect={setSelectedCategory}
//         />

//         <div className="mt-8">
//           <ProductsGrid products={filteredProducts.length > 0 ? filteredProducts : kidsProducts} />
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
  style?: string
  composition?: string
  weight?: string
  sewingOperation?: string
}

const categories = [
  { id: "kids", label: "KIDS", icon: "/kids-icon.jpg", href: "/products/kids" },
  {
    id: "suits",
    label: "SUITS & SEPARATES",
    icon: "/images/suits-20-26-20separates.webp",
    href: "/products/kids",
  },
  {
    id: "shirts",
    label: "SHIRTS & POLOS",
    icon: "/images/shirts-20-26-20polos.webp",
    href: "/products/kids",
  },
  {
    id: "jeans",
    label: "JEANS & DENIM",
    icon: "/images/jeans-20-26-20denim.webp",
    href: "/products/kids",
  },
  {
    id: "activewear",
    label: "ACTIVEWEAR",
    icon: "/images/activewear.webp",
    href: "/products/kids",
  },
  // { id: "shoes", label: "SHOES & ACCESSORIES", icon: "/shoes-icon.jpg", href: "/products/kids" },
]

const kidsProducts: Product[] = [
  {
    id: "suit-k1",
    brand: "POLO RALPH LAUREN",
    name: "Kids' Dress Shirt",
    price: 45,
    originalPrice: 55,
    image: "/images/capture1.png",
    images: ["/images/capture1.png", "/premium-garments-fashion-showcase.jpg"],
    category: "shirts",
    discount: 18,
    description: "Classic kids' dress shirt perfect for special occasions.",
    style: "Polo Ralph Lauren (PRL-KIDS-01)",
    composition: "100% Cotton",
    weight: "150 Grams",
    sewingOperation: "Machine Stitched",
  },
  {
    id: "shirt-k1",
    brand: "GAP KIDS",
    name: "Kids' Polo Shirt",
    price: 25,
    image: "/polo-shirt.jpg",
    images: ["/polo-shirt.jpg", "/oxford-shirt.jpg"],
    category: "shirts",
    description: "Comfortable polo shirt for everyday kids' wear.",
    style: "Gap Kids (GAPK-POLO-02)",
    composition: "98% Cotton, 2% Spandex",
    weight: "140 Grams",
    sewingOperation: "Collet using Cord",
  },
  {
    id: "jeans-k1",
    brand: "LEVI'S KIDS",
    name: "Kids' Slim Fit Jeans",
    price: 38,
    originalPrice: 48,
    image: "/slim-fit-jeans.jpg",
    images: ["/slim-fit-jeans.jpg", "/relaxed-fit-jeans.jpg"],
    category: "jeans",
    discount: 21,
    description: "Durable jeans designed for active kids.",
    style: "Levi's Kids (LVKS-SLIM-03)",
    composition: "100% Cotton Denim",
    weight: "450 Grams",
    sewingOperation: "Double Stitched",
  },
  {
    id: "active-k1",
    brand: "NIKE KIDS",
    name: "Kids' Sportswear Set",
    price: 50,
    originalPrice: 65,
    image: "/running-shirt.jpg",
    images: ["/running-shirt.jpg", "/training-tee.jpg"],
    category: "activewear",
    discount: 23,
    description: "Sporty set for kids' active lifestyle.",
    style: "Nike Kids (NK-KIDS-SET-04)",
    composition: "88% Polyester, 12% Spandex",
    weight: "240 Grams",
    sewingOperation: "Flat Seam Stitched",
  },
]

export default function KidsProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // const breadcrumbItems = [
  //   { label: "KIDS" },
  //   { label: "WOMEN", href: "/products/women" },
  //   { label: "MEN", href: "/products/men" },
  // ]

  const breadcrumbItems = [
    {
      label: "KIDS",
      onClick: () => setSelectedCategory(null),
    },
    { label: "WOMEN", href: "/products/women" },
    { label: "MEN", href: "/products/men" },
    // ...(selectedCategory
    //   ? [
    //       {
    //         label: categories.find((cat) => cat.id === selectedCategory)?.label || "",
    //         onClick: () => setSelectedCategory(null),
    //       },
    //     ]
    //   : []),
  ]


  const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""

  const filteredProducts = selectedCategory
    ? kidsProducts.filter((product) => product.category === selectedCategory)
    : kidsProducts

  return (
    <div className="min-h-screen bg-white">
      <HeaderTopBar />
      <Navbar />

      <Breadcrumb 
              items={breadcrumbItems} 
              selectedCategory={selectedCategory || ""} 
              selectedLabel={selectedLabel}
            />
      
            <section className="w-full">
              <ProductCategoriesSidebar
                categories={categories}
                selectedCategory={selectedCategory || ""}
                breadcrumbLabel="kids"
                onCategorySelect={setSelectedCategory}
              />
      
              <div className="mt-8">
                <ProductsGrid products={filteredProducts} breadcrumbName="kids" />
              </div>
            </section>
      <Footer />
    </div>
  )
}
