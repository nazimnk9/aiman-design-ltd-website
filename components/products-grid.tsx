// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { Heart, X } from "lucide-react"

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

// interface ProductGridProps {
//   products: Product[]
// }

// interface QuickViewProduct extends Product {
//   description: string
// }

// export function ProductsGrid({ products }: ProductGridProps) {
//   const [selectedProduct, setSelectedProduct] = useState<QuickViewProduct | null>(null)
//   const [hoveredProductId, setHoveredProductId] = useState<string | null>(null)

//   const handleQuickView = (product: Product & { description?: string }) => {
//     setSelectedProduct({
//       ...product,
//       description:
//         product.description ||
//         "Crafted from the brand's signature materials, this piece features an impeccable fit and modern polish for a subtly sophisticated look and daylong comfort.",
//     })
//   }

//   return (
//     <>
//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className={`group relative border transition-all duration-300 ${
//               hoveredProductId === product.id ? "border-2 border-gray-900" : "border-gray-200"
//             }`}
//             onMouseEnter={() => setHoveredProductId(product.id)}
//             onMouseLeave={() => setHoveredProductId(null)}
//           >
//             {/* Product Card */}
//             <div className="relative overflow-hidden bg-gray-100">
//               {/* Product Image */}
//               <div className="relative h-96 w-full">
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Wishlist Icon */}
//               <button className="absolute top-4 left-4 text-gray-600 hover:text-red-500 transition-colors z-10">
//                 <Heart size={20} className="fill-current" />
//               </button>

//               {/* Discount Badge */}
//               {product.discount && (
//                 <div className="absolute top-4 right-4 bg-red-100 text-red-600 px-2 py-1 text-xs font-semibold rounded">
//                   {`-${product.discount}%`}
//                 </div>
//               )}

//               {/* Quick View Button - Show on hover */}
//               {hoveredProductId === product.id && (
//                 <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/20 transition-all">
//                   <button
//                     onClick={() => handleQuickView(product)}
//                     className="bg-white text-gray-900 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors"
//                   >
//                     QUICK VIEW
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Product Info */}
//             <div className="p-4">
//               <p className="text-xs text-orange-600 font-semibold mb-1">{product.brand}</p>
//               <h3 className="text-sm font-semibold text-gray-900 mb-2">{product.name}</h3>

//               {/* Price */}
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</span>
//                 {product.originalPrice && (
//                   <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
//                 )}
//               </div>

//               {/* Description */}
//               <p className="text-xs text-gray-600 line-clamp-2">
//                 Crafted from premium materials, this piece features an impeccable fit and modern polish for a subtly
//                 sophisticated look.
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Quick View Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
//           <div className="bg-white w-full max-w-4xl max-h-96 overflow-hidden rounded-lg relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-900"
//             >
//               <X size={24} />
//             </button>

//             <div className="flex gap-8 h-full">
//               {/* Left: Product Image */}
//               <div className="w-2/5 relative bg-gray-100">
//                 <Image
//                   src={selectedProduct.image || "/placeholder.svg"}
//                   alt={selectedProduct.name}
//                   fill
//                   className="object-cover"
//                 />
//                 {selectedProduct.discount && (
//                   <div className="absolute top-4 left-4 bg-red-100 text-red-600 px-2 py-1 text-xs font-semibold rounded">
//                     {`-${selectedProduct.discount}%`}
//                   </div>
//                 )}
//               </div>

//               {/* Right: Product Details */}
//               <div className="w-3/5 p-8 flex flex-col justify-between">
//                 <div>
//                   <p className="text-sm font-bold text-gray-900 uppercase mb-2">{selectedProduct.brand}</p>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedProduct.name}</h2>

//                   {/* Price */}
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="text-lg font-bold text-gray-900">${selectedProduct.price.toFixed(2)}</span>
//                     {selectedProduct.originalPrice && (
//                       <span className="text-sm text-gray-400 line-through">
//                         ${selectedProduct.originalPrice.toFixed(2)}
//                       </span>
//                     )}
//                   </div>

//                   {/* Description */}
//                   <p className="text-sm text-orange-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
//                 </div>

//                 {/* Actions */}
//                 <div className="space-y-3">
//                   <button className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-900 transition-colors">
//                     BUY ON AMAZON
//                   </button>

//                   <div className="flex gap-4 text-sm">
//                     <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
//                       <Heart size={16} />
//                       ADD TO WISHLIST
//                     </button>
//                     <button className="text-gray-600 hover:text-gray-900">SHARE</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }


"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react"

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

interface ProductGridProps {
  products: Product[]
}

export function ProductsGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }

  const handlePrevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1))
    }
  }

  const handleNextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative border border-gray-200 transition-all hover:border-gray-900"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            {/* Product Card */}
            <div className="relative overflow-hidden bg-gray-100">
              {/* Product Image */}
              <div className="relative h-96 w-full">
                <Image
                  src={hoveredProductId === product.id && product.images.length > 1 ? product.images[1] : product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Wishlist Icon */}
              <button className="absolute top-4 left-4 text-gray-600 hover:text-red-500 transition-colors z-10">
                <Heart size={20} className="fill-current" />
              </button>

              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-100 text-red-600 px-2 py-1 text-xs font-semibold rounded">
                  {`-${product.discount}%`}
                </div>
              )}

              {/* Quick View Button - Show on hover */}
              {hoveredProductId === product.id && (
                <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/20 transition-all">
                  <button
                    onClick={() => handleQuickView(product)}
                    className="bg-white text-gray-900 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors"
                  >
                    QUICK VIEW
                  </button>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 border-b border-l border-r border-gray-200">
              <p className="text-xs text-orange-600 font-semibold mb-1">{product.brand}</p>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{product.name}</h3>

              {/* Price */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 line-clamp-2">
                {product.description ||
                  "Crafted from premium materials, this piece features an impeccable fit and modern polish for a subtly sophisticated look."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl max-h-96 overflow-hidden rounded-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>

            <div className="flex gap-8 h-full">
              {/* Left: Product Image with Carousel */}
              <div className="w-2/5 relative bg-gray-100">
                <Image
                  src={selectedProduct.images[currentImageIndex] || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                {selectedProduct.discount && (
                  <div className="absolute top-4 left-4 bg-red-100 text-red-600 px-2 py-1 text-xs font-semibold rounded">
                    {`-${selectedProduct.discount}%`}
                  </div>
                )}

                {selectedProduct.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors z-20"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors z-20"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded text-xs">
                      {currentImageIndex + 1} / {selectedProduct.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Right: Product Details */}
              <div className="w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900 uppercase mb-2">{selectedProduct.brand}</p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedProduct.name}</h2>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg font-bold text-gray-900">${selectedProduct.price.toFixed(2)}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${selectedProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-orange-600 mb-6 leading-relaxed">
                    {selectedProduct.description ||
                      "Crafted from the brand's signature materials, this piece features an impeccable fit and modern polish for a subtly sophisticated look and daylong comfort."}
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-900 transition-colors">
                    BUY ON AMAZON
                  </button>

                  <div className="flex gap-4 text-sm">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                      <Heart size={16} />
                      ADD TO WISHLIST
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">SHARE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
