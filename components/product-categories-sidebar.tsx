// "use client"

// import Image from "next/image"
// import { ChevronLeft } from "lucide-react"

// interface Category {
//   id: string
//   label: string
//   icon: string
//   href: string
// }

// interface ProductCategoriesSidebarProps {
//   categories: Category[]
//   selectedCategory: string
//   breadcrumbLabel: string
//   onCategorySelect?: (categoryId: string) => void
// }

// export function ProductCategoriesSidebar({
//   categories,
//   selectedCategory,
//   breadcrumbLabel,
//   onCategorySelect,
// }: ProductCategoriesSidebarProps) {
//   // Get the selected category label
//   const selectedLabel = categories.find((cat) => cat.id === selectedCategory)?.label || ""

//   // Filter out the breadcrumb category from the grid (don't show KIDS, WOMEN, MEN in grid)
//   const gridCategories = categories.filter((cat) => cat.id !== "men" && cat.id !== "women" && cat.id !== "kids")

//   return (
//     <div className="flex flex-col gap-6">
//       <div className="flex items-start justify-between gap-8">
//         {/* Selected Category Display - Left Side */}
//         <div className="flex-1 min-w-[200px]">
//           <div className="flex items-center gap-2 text-gray-900">
//             <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
//             <ChevronLeft size={16} className="text-gray-600" />
//             <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//           </div>
//         </div>

//         {/* Categories Grid - Right Side */}
//         <div className="flex-1 grid grid-cols-5 gap-4">
//           {gridCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => onCategorySelect?.(category.id)}
//               className={`flex flex-col items-center gap-2 p-3 transition-all border ${
//                 selectedCategory === category.id
//                   ? "border-gray-900 bg-gray-50"
//                   : "border-gray-200 hover:border-gray-900"
//               }`}
//             >
//               <div className="w-10 h-10 flex items-center justify-center">
//                 <Image
//                   src={category.icon || "/placeholder.svg"}
//                   alt={category.label}
//                   width={32}
//                   height={32}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <p className="text-xs font-semibold text-gray-900 text-center line-clamp-2">{category.label}</p>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Full Width Border Below */}
//       <div className="w-full border-b border-gray-200"></div>
//     </div>
//   )
// }


"use client"

import Image from "next/image"
import { ChevronLeft } from "lucide-react"

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
  const isProductTypeSelected = !["men", "women", "kids"].includes(selectedCategory)

  // Filter out the breadcrumb category from the grid (don't show KIDS, WOMEN, MEN in grid)
  const gridCategories = categories.filter((cat) => cat.id !== "men" && cat.id !== "women" && cat.id !== "kids")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-8">
        {/* Selected Category Display - Left Side */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 text-gray-900">
            <span className="text-base font-bold uppercase tracking-wide">{breadcrumbLabel}</span>
            {isProductTypeSelected && (
              <>
                <ChevronLeft size={16} className="text-gray-600" />
                <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
              </>
            )}
          </div>
        </div>

        {/* Categories Grid - Right Side */}
        <div className="flex-1 grid grid-cols-5 gap-4">
          {gridCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect?.(category.id)}
              className={`flex flex-col items-center gap-2 p-3 transition-all border ${
                selectedCategory === category.id
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200 hover:border-gray-900"
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={category.label}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs font-semibold text-gray-900 text-center line-clamp-2">{category.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Full Width Border Below */}
      {/* <div className="w-full border-b border-gray-200"></div> */}
    </div>
    </div>
  )
}
