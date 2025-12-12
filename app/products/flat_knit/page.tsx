"use client"

import { useState, useEffect } from "react"
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
  uid?: string
}

const categories = [
  { id: "MENS", label: "MENS", icon: "/images/MENS.webp", href: "#" },
  { id: "JR_LADIES", label: "JR_LADIES", icon: "/images/JR_LADIES.webp", href: "#" },
  { id: "WOMEN", label: "WOMEN", icon: "/images/WOMEN.webp", href: "#" },
  { id: "JUNIOR_BOYS", label: "JUNIOR_BOYS", icon: "/images/JUNIOR_BOYS.webp", href: "#" },
  { id: "SENIOR_BOYS", label: "SENIOR_BOYS", icon: "/images/SENIOR_BOYS.webp", href: "#" },
  { id: "TODDLER_BOYS", label: "TODDLER_BOYS", icon: "/images/TODDLER_BOYS.webp", href: "#" },
  { id: "JUNIOR_GIRLS", label: "JUNIOR_GIRLS", icon: "/images/JUNIOR_GIRLS.webp", href: "#" },
  { id: "SENIOR_GIRLS", label: "SENIOR_GIRLS", icon: "/images/SENIOR_GIRLS.webp", href: "#" },
  { id: "TODDLER_GIRLS", label: "TODDLER_GIRLS", icon: "/images/TODDLER_GIRLS.webp", href: "#" },
  { id: "KIDS", label: "KIDS", icon: "/images/KIDS.webp", href: "#" },
]

export default function FlatKnitProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const breadcrumbItems = [
    { label: "WOVEN", href: "/products/woven" },
    {
      label: "FLAT_KNIT",
      onClick: () => setSelectedCategory(null),
    },
    { label: "CIRCULAR_KNIT", href: "/products/circular_knit" },
  ]

  const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const queryParams = new URLSearchParams()
        queryParams.append("category", "FLAT_KNIT")
        if (selectedCategory) {
          queryParams.append("sub_category", selectedCategory)
        }

        const response = await fetch(`https://apis.venotel.com/api/v1/sample_manager/sample/public?${queryParams.toString()}`)
        const data = await response.json()

        if (data && data.results) {
          const mappedProducts: Product[] = data.results.map((item: any) => ({
            id: item.id.toString(),
            uid: item.uid,
            brand: "AIMAN",
            name: item.name,
            price: 0,
            image: item.images && item.images.length > 0 ? item.images[0].file : (item.storage?.image || "/placeholder.svg"),
            images: item.images && item.images.length > 0 ? item.images.map((img: any) => img.file) : [item.storage?.image || "/placeholder.svg"],
            category: item.category,
            description: item.description,
            style: item.style_no,
            composition: item.fabrication,
            weight: item.weight ? `${item.weight} ${item.weight_type}` : undefined,
            sewingOperation: item.item
          }))
          setProducts(mappedProducts)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory])

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
          breadcrumbLabel="FLAT_KNIT"
          onCategorySelect={setSelectedCategory}
        />

        <div className="mt-8">
          <ProductsGrid products={products} breadcrumbName="flat_knit" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
