// "use client"

// import { useState } from "react"

// interface Category {
//   id: string
//   name: string
//   image: string
//   description?: string
// }

// const categories: Category[] = [
//   {
//     id: "women",
//     name: "Women",
//     image: "/women.jpg",
//   },
//   {
//     id: "men",
//     name: "Men",
//     image: "/men.jpg",
//   },
//   {
//     id: "kids",
//     name: "Kids",
//     image: "/kids.jpg",
//   },
// ]

// export function ProductCategoriesSection() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null)

//   return (
//     <section className="w-full bg-background py-20 md:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-fadeInUp">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Shop by Category</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our diverse collection for everyone</p>
//         </div>

//         {/* Categories Grid */}
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-max md:auto-rows-none"
//           style={{ gridTemplateRows: "auto" }}
//         >
//           {/* Left Column - Women and Men */}
//           <div className="flex flex-col gap-6 md:gap-8 md:row-span-1">
//             {categories.slice(0, 2).map((category, index) => (
//               <div key={category.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <div
//                   className="relative overflow-hidden rounded-lg h-64 md:h-80 cursor-pointer group"
//                   onMouseEnter={() => setHoveredId(category.id)}
//                   onMouseLeave={() => setHoveredId(null)}
//                 >
//                   {/* Base Image */}
//                   <div
//                     className={`absolute inset-0 transition-transform duration-500 ease-out ${
//                       hoveredId === category.id ? "scale-110" : "scale-100"
//                     }`}
//                   >
//                     <img
//                       src={category.image || "/placeholder.svg"}
//                       alt={category.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Hover Overlay - Fabric Texture */}
//                   <div
//                     className={`absolute inset-0 transition-all duration-500 ease-out ${
//                       hoveredId === category.id ? "opacity-40 scale-125" : "opacity-0 scale-100"
//                     }`}
//                     style={{
//                       backgroundImage: `url('/hover.jpg')`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   />

//                   {/* Dark Overlay for Text Readability */}
//                   <div
//                     className={`absolute inset-0 bg-black transition-opacity duration-500 ${
//                       hoveredId === category.id ? "opacity-30" : "opacity-20"
//                     }`}
//                   />

//                   {/* Content - Category Name */}
//                   <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
//                     <h3
//                       className={`text-3xl md:text-4xl font-bold text-white text-center transition-all duration-500 ease-out ${
//                         hoveredId === category.id ? "scale-110 translate-y-0" : "scale-100"
//                       }`}
//                     >
//                       {category.name}
//                     </h3>

//                     {/* Hover CTA Button */}
//                     <button
//                       className={`mt-6 px-8 py-3 bg-white text-foreground font-semibold rounded-lg transition-all duration-500 ease-out transform ${
//                         hoveredId === category.id
//                           ? "opacity-100 translate-y-0 scale-100"
//                           : "opacity-0 translate-y-4 scale-95"
//                       }`}
//                     >
//                       Shop Now
//                     </button>
//                   </div>

//                   {/* Focus Ring on Hover */}
//                   <div
//                     className={`absolute inset-0 border-4 transition-all duration-500 ${
//                       hoveredId === category.id ? "border-white opacity-100" : "border-transparent opacity-0"
//                     }`}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Column - Kids */}
//           <div className="flex flex-col justify-start">
//             {categories.slice(2, 3).map((category, index) => (
//               <div key={category.id} className="animate-fadeInUp" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
//                 <div
//                   className="relative overflow-hidden rounded-lg cursor-pointer group"
//                   style={{ height: "calc(2 * 20rem + 2rem)" }}
//                   onMouseEnter={() => setHoveredId(category.id)}
//                   onMouseLeave={() => setHoveredId(null)}
//                 >
//                   {/* Base Image */}
//                   <div
//                     className={`absolute inset-0 transition-transform duration-500 ease-out ${
//                       hoveredId === category.id ? "scale-110" : "scale-100"
//                     }`}
//                   >
//                     <img
//                       src={category.image || "/placeholder.svg"}
//                       alt={category.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Hover Overlay - Fabric Texture */}
//                   <div
//                     className={`absolute inset-0 transition-all duration-500 ease-out ${
//                       hoveredId === category.id ? "opacity-40 scale-125" : "opacity-0 scale-100"
//                     }`}
//                     style={{
//                       backgroundImage: `url('/hover.jpg')`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   />

//                   {/* Dark Overlay for Text Readability */}
//                   <div
//                     className={`absolute inset-0 bg-black transition-opacity duration-500 ${
//                       hoveredId === category.id ? "opacity-30" : "opacity-20"
//                     }`}
//                   />

//                   {/* Content - Category Name */}
//                   <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
//                     <h3
//                       className={`text-3xl md:text-4xl font-bold text-white text-center transition-all duration-500 ease-out ${
//                         hoveredId === category.id ? "scale-110 translate-y-0" : "scale-100"
//                       }`}
//                     >
//                       {category.name}
//                     </h3>

//                     {/* Hover CTA Button */}
//                     <button
//                       className={`mt-6 px-8 py-3 bg-white text-foreground font-semibold rounded-lg transition-all duration-500 ease-out transform ${
//                         hoveredId === category.id
//                           ? "opacity-100 translate-y-0 scale-100"
//                           : "opacity-0 translate-y-4 scale-95"
//                       }`}
//                     >
//                       Shop Now
//                     </button>
//                   </div>

//                   {/* Focus Ring on Hover */}
//                   <div
//                     className={`absolute inset-0 border-4 transition-all duration-500 ${
//                       hoveredId === category.id ? "border-white opacity-100" : "border-transparent opacity-0"
//                     }`}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"

interface Category {
  id: string
  name: string
  image: string
  description?: string
}

const categories: Category[] = [
  {
    id: "women",
    name: "Women",
    image: "/women.jpg",
  },
  {
    id: "men",
    name: "Men",
    image: "/men.jpg",
  },
  {
    id: "kids",
    name: "Kids",
    image: "/kids.jpg",
  },
]

export function ProductCategoriesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="w-full bg-background py-4 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-16 xl:px-28">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our diverse collection for everyone</p>
        </div>

        {/* Categories Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-max md:auto-rows-none"
          style={{ gridTemplateRows: "auto" }}
        >
          {/* Left Column - Women and Men */}
          <div className="flex flex-col gap-6 md:gap-8 md:row-span-1">
            {categories.slice(0, 2).map((category, index) => (
              <div key={category.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className="relative overflow-hidden rounded-lg h-100 md:h-150 cursor-pointer group"
                  onMouseEnter={() => setHoveredId(category.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Base Image Container with proper scaling */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                        hoveredId === category.id ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Hover Overlay - Fabric Texture */}
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-500 ease-out ${
                      hoveredId === category.id ? "opacity-40" : "opacity-0"
                    }`}
                    style={{
                      backgroundImage: `url('/hover.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Dark Overlay for Text Readability */}
                  <div
                    className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${
                      hoveredId === category.id ? "opacity-30" : "opacity-20"
                    }`}
                  />

                  {/* Content - Category Name */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <h3
                      className={`text-3xl md:text-4xl font-bold text-white text-center transition-all duration-500 ease-out ${
                        hoveredId === category.id ? "scale-110 translate-y-0" : "scale-100"
                      }`}
                    >
                      {category.name}
                    </h3>

                    {/* Hover CTA Button */}
                    {/* <button
                      className={`mt-6 px-8 py-3 bg-white text-foreground font-semibold rounded-lg transition-all duration-500 ease-out transform ${
                        hoveredId === category.id
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-4 scale-95"
                      }`}
                    >
                      Shop Now
                    </button> */}
                  </div>

                  {/* Focus Ring on Hover */}
                  <div
                    className={`absolute inset-0 rounded-lg border-4 transition-all duration-500 ${
                      hoveredId === category.id ? "border-transparent opacity-100" : "border-transparent opacity-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Kids */}
          <div className="flex flex-col justify-start">
            {categories.slice(2, 3).map((category, index) => (
              <div key={category.id} className="animate-fadeInUp" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
                <div
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  style={{ height: "calc(2 * 37.5rem + 2rem)" }}
                  onMouseEnter={() => setHoveredId(category.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Base Image Container with proper scaling */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                        hoveredId === category.id ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Hover Overlay - Fabric Texture */}
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-500 ease-out ${
                      hoveredId === category.id ? "opacity-40" : "opacity-0"
                    }`}
                    style={{
                      backgroundImage: `url('/hover.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Dark Overlay for Text Readability */}
                  <div
                    className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${
                      hoveredId === category.id ? "opacity-30" : "opacity-20"
                    }`}
                  />

                  {/* Content - Category Name */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <h3
                      className={`text-3xl md:text-4xl font-bold text-white text-center transition-all duration-500 ease-out ${
                        hoveredId === category.id ? "scale-110 translate-y-0" : "scale-100"
                      }`}
                    >
                      {category.name}
                    </h3>

                    {/* Hover CTA Button */}
                    {/* <button
                      className={`mt-6 px-8 py-3 bg-white text-foreground font-semibold rounded-lg transition-all duration-500 ease-out transform ${
                        hoveredId === category.id
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-4 scale-95"
                      }`}
                    >
                      Shop Now
                    </button> */}
                  </div>

                  {/* Focus Ring on Hover */}
                  <div
                    className={`absolute inset-0 rounded-lg border-4 transition-all duration-500 ${
                      hoveredId === category.id ? "border-transparent opacity-100" : "border-transparent opacity-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}