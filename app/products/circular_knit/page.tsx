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
  brand: string // Map from company.name or similar if not present, or use default
  name: string
  price: number // API doesn't seem to return price? Mock it or leave 0
  originalPrice?: number
  image: string // Map from image or images[0]
  images: string[]
  category: string
  discount?: number
  description?: string
  style?: string
  composition?: string
  weight?: string
  sewingOperation?: string
  uid?: string // Added for API
}

const categories = [
  { id: "MENS", label: "MENS", icon: "/images/MENS_2.png", href: "#" },
  { id: "JR_LADIES", label: "JUNIOR LADIES", icon: "/images/circle_jr_ladiess.webp", href: "#" },
  { id: "WOMEN", label: "WOMEN", icon: "/images/circular_womens.webp", href: "#" },
  { id: "JUNIOR_BOYS", label: "JUNIOR BOYS", icon: "/images/JUNIOR_BOYS.webp", href: "#" },
  { id: "SENIOR_BOYS", label: "SENIOR BOYS", icon: "/images/SENIOR_BOYS.webp", href: "#" },
  { id: "TODDLER_BOYS", label: "TODDLER BOYS", icon: "/images/TODDLER_BOYS.webp", href: "#" },
  { id: "JUNIOR_GIRLS", label: "JUNIOR GIRLS", icon: "/images/JUNIOR_GIRLS.webp", href: "#" },
  { id: "SENIOR_GIRLS", label: "SENIOR GIRLS", icon: "/images/SENIOR_GIRLS.webp", href: "#" },
  { id: "TODDLER_GIRLS", label: "TODDLER GIRLS", icon: "/images/TODDLER_GIRLS.webp", href: "#" },
  { id: "KIDS", label: "KIDS", icon: "/images/KIDS.webp", href: "#" },
]

export default function CircularKnitProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const breadcrumbItems = [
    {
      id: "CIRCULAR_KNIT", label: "CIRCULAR KNIT",
      onClick: () => setSelectedCategory(null),
    },
    { id: "WOVEN", label: "WOVEN", href: "/products/woven" },
    { id: "FLAT_KNIT", label: "FLAT KNIT", href: "/products/flat_knit" },
  ]

  const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.id || ""

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const queryParams = new URLSearchParams()
        queryParams.append("category", "CIRCULAR_KNIT")
        if (selectedCategory) {
          queryParams.append("sub_category", selectedCategory)
        }

        const response = await fetch(`https://apis.venotel.com/api/v1/sample_manager/sample/public?${queryParams.toString()}`)
        const data = await response.json()

        if (data && data.results) {
          const mappedProducts: Product[] = data.results.map((item: any) => ({
            id: item.id.toString(),
            uid: item.uid,
            brand: "AIMAN", // Default or extract
            name: item.name,
            price: 0, // Not in API example
            image: item.images && item.images.length > 0 ? item.images[0].file : (item.storage?.image || "/placeholder.svg"),
            images: item.images && item.images.length > 0 ? item.images.map((img: any) => img.file) : [item.storage?.image || "/placeholder.svg"],
            category: item.category,
            description: item.description,
            style: item.style_no,
            composition: item.fabrication,
            weight: item.weight ? `${parseFloat(item.weight)} ${item.weight_type}` : undefined,
            sewingOperation: item.item // Using 'item' field as sewingOperation substitute or similar
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
          breadcrumbLabel="CIRCULAR KNIT"
          onCategorySelect={setSelectedCategory}
        />

        <div className="mt-8">
          <ProductsGrid products={products} breadcrumbName="circular_knit" isLoading={loading} />
        </div>
      </section>

      <Footer />
    </div>
  )
}