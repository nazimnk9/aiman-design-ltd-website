// "use client"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { ProductCard } from "@/components/product-card"
// import { Background3D } from "@/components/3d-background"
// import { HeaderTopBar } from "@/components/header-top-bar"

// const products = [
//   {
//     name: "Premium T-Shirts",
//     category: "Basics",
//     images: [
//       "/premium-tshirts-collection-design.jpg",
//       "/colorful-tshirt-styles.jpg",
//       "/comfortable-casual-tshirts.jpg",
//     ],
//     description: "High-quality, comfortable t-shirts perfect for everyday wear with premium materials.",
//   },
//   {
//     name: "Designer Shirts",
//     category: "Formal",
//     images: [
//       "/designer-formal-shirts-collection.jpg",
//       "/professional-business-shirts.jpg",
//       "/elegant-dress-shirts.jpg",
//     ],
//     description: "Sophisticated formal wear designed for the modern professional with elegant styles.",
//   },
//   {
//     name: "Casual Dresses",
//     category: "Casual",
//     images: [
//       "/casual-dresses-modern-style.jpg",
//       "/comfortable-everyday-dresses.jpg",
//       "/trendy-casual-wear-dresses.jpg",
//     ],
//     description: "Versatile dresses that combine comfort with contemporary style for any occasion.",
//   },
//   {
//     name: "Athletic Wear",
//     category: "Sports",
//     images: [
//       "/placeholder.svg?height=320&width=320",
//       "/placeholder.svg?height=320&width=320",
//       "/placeholder.svg?height=320&width=320",
//     ],
//     description: "Performance-driven athletic wear engineered for movement and style.",
//   },
//   {
//     name: "Denim Collection",
//     category: "Denim",
//     images: [
//       "/placeholder.svg?height=320&width=320",
//       "/placeholder.svg?height=320&width=320",
//       "/placeholder.svg?height=320&width=320",
//     ],
//     description: "Timeless denim pieces crafted from the finest materials with perfect fit.",
//   },
//   {
//     name: "Evening Wear",
//     category: "Formal",
//     images: [
//       "/placeholder.svg?height=320&width=320",
//       "/placeholder.svg?height=320&width=320",
//       "/placeholder.svg?height=320&width=320",
//     ],
//     description: "Stunning evening wear for those special moments that deserve elegance.",
//   },
// ]

// export default function Products() {
//   return (
//     <div className="min-h-screen bg-background">
//       <HeaderTopBar />
//       <Navbar />

//       {/* Hero Section - Added 3D background animation */}
//       <section className="relative bg-gradient-to-br from-primary to-accent text-white py-16 md:py-24 overflow-hidden">
//         <Background3D type="products" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center animate-fadeInUp">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Our Products</h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//               Explore our diverse collection of premium garments
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid - Added 3D background animation */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="career" />
//         <div className="relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product, i) => (
//               <div key={product.name} style={{ animationDelay: `${i * 0.1}s` }}>
//                 <ProductCard {...product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }


// "use client"

// import { useState } from "react"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { HeaderTopBar } from "@/components/header-top-bar"
// import { ProductsGrid } from "@/components/products-grid"
// import { ProductCategoriesNav } from "@/components/product-categories-nav"
// import { ChevronRight } from "lucide-react"

// interface Product {
//   id: string
//   brand: string
//   name: string
//   price: number
//   originalPrice?: number
//   image: string
//   category: string
//   discount?: number
// }

// const categories = [
//   // { id: "mens", label: "MEN", icon: "/men-icon.jpg" },
//   {
//     id: "suits",
//     label: "SUITS & SEPARATES",
//     icon: "/images/suits-20-26-20separates.webp",
//   },
//   {
//     id: "shirts",
//     label: "SHIRTS & POLOS",
//     icon: "/images/shirts-20-26-20polos.webp",
//   },
//   {
//     id: "jeans",
//     label: "JEANS & DENIM",
//     icon: "/images/jeans-20-26-20denim.webp",
//   },
//   {
//     id: "activewear",
//     label: "ACTIVEWEAR",
//     icon: "/images/activewear.webp",
//   },
//   { id: "shoes", label: "SHOES & ACCESSORIES", icon: "/shoes-icon.jpg" },
// ]

// const suitsProducts: Product[] = [
//   {
//     id: "suit-1",
//     brand: "ZEGNA",
//     name: "Pin Dot Trofeo Milano Wool Suit",
//     price: 6400,
//     originalPrice: 6800,
//     image: "/images/capture1.png",
//     category: "Suits",
//     discount: 6,
//   },
//   {
//     id: "suit-2",
//     brand: "TED BAKER LONDON",
//     name: "Ralph Extra Slim Fit Wool Suit",
//     price: 1500,
//     originalPrice: 1590,
//     image: "/images/capture1.png",
//     category: "Suits",
//   },
//   {
//     id: "suit-3",
//     brand: "BOSS",
//     name: "Harry Solid Suit",
//     price: 4300,
//     originalPrice: 6300,
//     image: "/images/capture1.png",
//     category: "Suits",
//     discount: 32,
//   },
// ]

// const shirtsProducts: Product[] = [
//   {
//     id: "shirt-1",
//     brand: "ZEGNA",
//     name: "Premium Cotton Dress Shirt",
//     price: 425,
//     originalPrice: 500,
//     image: "/premium-dress-shirt.jpg",
//     category: "Shirts",
//     discount: 15,
//   },
//   {
//     id: "shirt-2",
//     brand: "BOSS",
//     name: "Classic White Business Shirt",
//     price: 325,
//     image: "/white-business-shirt.jpg",
//     category: "Shirts",
//   },
//   {
//     id: "shirt-3",
//     brand: "LACOSTE",
//     name: "Heritage Polo Shirt",
//     price: 95,
//     originalPrice: 120,
//     image: "/polo-shirt.jpg",
//     category: "Shirts",
//     discount: 21,
//   },
//   {
//     id: "shirt-4",
//     brand: "RALPH LAUREN",
//     name: "Oxford Button Down",
//     price: 125,
//     image: "/oxford-shirt.jpg",
//     category: "Shirts",
//   },
// ]

// const jeansProducts: Product[] = [
//   {
//     id: "jeans-1",
//     brand: "LEVI'S",
//     name: "511 Slim Fit Dark Indigo",
//     price: 98,
//     originalPrice: 128,
//     image: "/slim-fit-jeans.jpg",
//     category: "Jeans",
//     discount: 24,
//   },
//   {
//     id: "jeans-2",
//     brand: "WRANGLER",
//     name: "Cowboy Cut Relaxed Fit",
//     price: 55,
//     image: "/relaxed-fit-jeans.jpg",
//     category: "Jeans",
//   },
//   {
//     id: "jeans-3",
//     brand: "DIESEL",
//     name: "Sleenker Skinny Jeans",
//     price: 220,
//     image: "/skinny-jeans.jpg",
//     category: "Jeans",
//   },
//   {
//     id: "jeans-4",
//     brand: "TOMMY HILFIGER",
//     name: "Classic Denim Shorts",
//     price: 75,
//     originalPrice: 95,
//     image: "/denim-shorts.jpg",
//     category: "Jeans",
//     discount: 21,
//   },
// ]

// const activewearProducts: Product[] = [
//   {
//     id: "active-1",
//     brand: "NIKE",
//     name: "Dri-FIT Running Shirt",
//     price: 65,
//     image: "/running-shirt.jpg",
//     category: "Activewear",
//   },
//   {
//     id: "active-2",
//     brand: "ADIDAS",
//     name: "Climacool Training Tee",
//     price: 55,
//     originalPrice: 70,
//     image: "/training-tee.jpg",
//     category: "Activewear",
//     discount: 21,
//   },
//   {
//     id: "active-3",
//     brand: "UNDER ARMOUR",
//     name: "Performance Sports Jacket",
//     price: 129,
//     image: "/sports-jacket.jpg",
//     category: "Activewear",
//   },
//   {
//     id: "active-4",
//     brand: "PUMA",
//     name: "Essentials Track Pants",
//     price: 75,
//     image: "/track-pants.jpg",
//     category: "Activewear",
//   },
// ]

// const allProducts = [...suitsProducts, ...shirtsProducts, ...jeansProducts, ...activewearProducts]

// export default function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("suits")

//   const categoryLabels: { [key: string]: string } = {
//     suits: "SUITS & SEPARATES",
//     shirts: "SHIRTS & POLOS",
//     jeans: "JEANS & DENIM",
//     activewear: "ACTIVEWEAR",
//     shoes: "SHOES & ACCESSORIES",
//   }

//   const getProductsByCategory = () => {
//     switch (selectedCategory) {
//       case "suits":
//         return suitsProducts
//       case "shirts":
//         return shirtsProducts
//       case "jeans":
//         return jeansProducts
//       case "activewear":
//         return activewearProducts
//       default:
//         return suitsProducts
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <HeaderTopBar />
//       <Navbar />

//       {/* Breadcrumb Navigation */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center gap-2 text-xs text-gray-600">
//             <span>HOME</span>
//             <ChevronRight size={14} />
//             <span>SHOP</span>
//             <ChevronRight size={14} />
//             <span className="text-gray-900 font-semibold">MEN</span>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex items-start justify-between gap-8">
//             {/* Left: Selected Category Name */}
//             <div className="flex-shrink-0">
//               <h2 className="text-lg font-bold text-gray-900 uppercase">
//                 {categoryLabels[selectedCategory] || "SUITS & SEPARATES"}
//               </h2>
//             </div>

//             {/* Right: Category Navigation */}
//             <div className="flex-1">
//               <ProductCategoriesNav
//                 categories={categories}
//                 onCategorySelect={setSelectedCategory}
//                 selectedCategory={selectedCategory}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Products Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//         <ProductsGrid products={getProductsByCategory()} />
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

  return (
    <div className="min-h-screen bg-white">
      <HeaderTopBar />
      <Navbar />

      {/* Breadcrumb Navigation - Centered */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Sidebar + Products - Single Row */}
        <ProductCategoriesSidebar breadcrumbLabel="MEN" categories={categories} selectedCategory={selectedCategory} />

        {/* Products Grid - Full Width */}
        <div className="mt-8">
          <ProductsGrid products={getProductsByCategory()} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
