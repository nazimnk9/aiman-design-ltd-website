// import Link from "next/link"

// interface BreadcrumbItem {
//   label: string
//   href?: string
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[]
// }

// export function Breadcrumb({ items }: BreadcrumbProps) {
//   return (
//     <div className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
//           {items.map((item, index) => (
//             <div key={index} className="flex items-center gap-3">
//               {index > 0 && <span className="text-gray-400">{">"}</span>}
//               {item.href ? (
//                 <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
//                   {item.label}
//                 </Link>
//               ) : (
//                 <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


// "use client"

// import Link from "next/link"

// interface BreadcrumbItem {
//   label: string
//   href?: string
//   onClick?: () => void
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[]
// }

// export function Breadcrumb({ items }: BreadcrumbProps) {
//   return (
//     <div className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
//           {items.map((item, index) => (
//             <div key={index} className="flex items-center gap-3">
//               {index > 0 && <span className="text-gray-400">{">"}</span>}
//               {item.href ? (
//                 <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
//                   {item.label}
//                 </Link>
//               ) : item.onClick ? (
//                 <button
//                   onClick={item.onClick}
//                   className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import Link from "next/link"

// interface BreadcrumbItem {
//   label: string
//   href?: string
//   onClick?: () => void
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[]
// }

// export function Breadcrumb({ items }: BreadcrumbProps) {
//   return (
//     <>
//       {/* Desktop Layout - Right Side */}
//       <div className="hidden md:block bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//           <div className="flex items-center justify-end gap-3 text-sm text-gray-600">
//             {items.map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 {index > 0 && <span className="text-gray-400">{">"}</span>}
//                 {item.href ? (
//                   <Link 
//                     href={item.href} 
//                     className="hover:text-gray-900 transition-colors uppercase font-medium text-xs"
//                   >
//                     {item.label}
//                   </Link>
//                 ) : item.onClick ? (
//                   <button
//                     onClick={item.onClick}
//                     className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                   >
//                     {item.label}
//                   </button>
//                 ) : (
//                   <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tablet and Mobile Layout - Centered */}
//       <div className="md:hidden bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//           <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
//             {items.map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 {index > 0 && <span className="text-gray-400">{">"}</span>}
//                 {item.href ? (
//                   <Link 
//                     href={item.href} 
//                     className="hover:text-gray-900 transition-colors uppercase font-medium text-xs"
//                   >
//                     {item.label}
//                   </Link>
//                 ) : item.onClick ? (
//                   <button
//                     onClick={item.onClick}
//                     className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                   >
//                     {item.label}
//                   </button>
//                 ) : (
//                   <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// "use client"

// import Link from "next/link"
// import { ChevronLeft } from "lucide-react"

// interface BreadcrumbItem {
//   label: string
//   href?: string
//   onClick?: () => void
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[]
//   showOnMobile?: boolean
//   showOnTablet?: boolean
//   showOnDesktop?: boolean
// }

// export function Breadcrumb({ 
//   items,
//   showOnMobile = true,
//   showOnTablet = true,
//   showOnDesktop = true 
// }: BreadcrumbProps) {
//   return (
//     <div className={`
//       bg-white border-b border-gray-200
//       ${showOnMobile ? 'block' : 'hidden'}
//       ${showOnTablet ? 'md:block' : 'md:hidden'}
//       ${showOnDesktop ? 'lg:block' : 'lg:hidden'}
//     `}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
//           {items.map((item, index) => (
//             <div key={index} className="flex items-center gap-3">
//               {index > 0 && <ChevronLeft size={14} className="text-gray-400 rotate-180" />}
//               {item.href ? (
//                 <Link 
//                   href={item.href} 
//                   className="hover:text-gray-900 transition-colors uppercase font-medium text-xs"
//                 >
//                   {item.label}
//                 </Link>
//               ) : item.onClick ? (
//                 <button
//                   onClick={item.onClick}
//                   className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import Link from "next/link"
// import { ChevronLeft } from "lucide-react"

// interface BreadcrumbItem {
//   label: string
//   href?: string
//   onClick?: () => void
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[]
//   selectedCategory?: string
//   selectedLabel?: string
// }

// export function Breadcrumb({ items, selectedCategory, selectedLabel }: BreadcrumbProps) {
//   const isProductTypeSelected = selectedCategory && !["men", "women", "kids"].includes(selectedCategory)

//   return (
//     <div className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         {/* Desktop/Laptop View */}
//         <div className="hidden lg:flex items-center justify-center gap-3 text-sm text-gray-600">
//           {items.map((item, index) => (
//             <div key={index} className="flex items-center gap-3">
//               {index > 0 && <span className="text-gray-400">{">"}</span>}
//               {item.href ? (
//                 <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
//                   {item.label}
//                 </Link>
//               ) : item.onClick ? (
//                 <button
//                   onClick={item.onClick}
//                   className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Tablet View */}
//         <div className="hidden md:flex lg:hidden items-center justify-between">
//           {/* Left Side - Selected Category with Arrow */}
//           <div className="flex items-center gap-2 text-gray-900">
//             {items.map((item, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 {index > 0 && <ChevronLeft size={16} className="text-gray-600" />}
//                 {item.href ? (
//                   <Link href={item.href} className="text-base font-bold uppercase tracking-wide hover:opacity-70 transition-opacity">
//                     {item.label}
//                   </Link>
//                 ) : item.onClick ? (
//                   <button
//                     onClick={item.onClick}
//                     className="text-base font-bold uppercase tracking-wide hover:opacity-70 transition-opacity cursor-pointer"
//                   >
//                     {item.label}
//                   </button>
//                 ) : (
//                   <span className="text-base font-bold uppercase tracking-wide">{item.label}</span>
//                 )}
//               </div>
//             ))}
//             {isProductTypeSelected && selectedLabel && (
//               <>
//                 <ChevronLeft size={16} className="text-gray-600" />
//                 <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//               </>
//             )}
//           </div>

//           {/* Right Side - Breadcrumb */}
//           <div className="flex items-center gap-3 text-sm text-gray-600">
//             {items.map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 {index > 0 && <span className="text-gray-400">{">"}</span>}
//                 {item.href ? (
//                   <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
//                     {item.label}
//                   </Link>
//                 ) : item.onClick ? (
//                   <button
//                     onClick={item.onClick}
//                     className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                   >
//                     {item.label}
//                   </button>
//                 ) : (
//                   <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile View */}
//         <div className="md:hidden flex items-center justify-center gap-3 text-sm text-gray-600">
//           {items.map((item, index) => (
//             <div key={index} className="flex items-center gap-3">
//               {index > 0 && <span className="text-gray-400">{">"}</span>}
//               {item.href ? (
//                 <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
//                   {item.label}
//                 </Link>
//               ) : item.onClick ? (
//                 <button
//                   onClick={item.onClick}
//                   className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import Link from "next/link"
// import { ChevronLeft } from "lucide-react"

// interface BreadcrumbItem {
//   label: string
//   href?: string
//   onClick?: () => void
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[]
//   selectedCategory?: string
//   selectedLabel?: string
// }

// export function Breadcrumb({ items, selectedCategory, selectedLabel }: BreadcrumbProps) {
//   const isProductTypeSelected = selectedCategory && !["men", "women", "kids"].includes(selectedCategory)

//   return (
//     <div className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//         {/* Desktop/Laptop View */}
//         <div className="hidden lg:flex items-center justify-center gap-3 text-sm text-gray-600">
//           {items.map((item, index) => (
//             <div key={index} className="flex items-center gap-3">
//               {index > 0 && <span className="text-gray-900 text-3xl">•</span>}
//               {item.href ? (
//                 <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
//                   {item.label}
//                 </Link>
//               ) : item.onClick ? (
//                 <button
//                   onClick={item.onClick}
//                   className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Tablet View */}
//         <div className="hidden md:flex lg:hidden items-center justify-between">
//           {/* Left Side - Selected Category with Arrow */}
//           <div className="flex items-center gap-2 text-gray-900">
//             {/* Find the selected breadcrumb (the one without href) */}
//             {(() => {
//               const selectedItem = items.find(item => !item.href && item.onClick);
//               return selectedItem ? (
//                 <span className="text-base font-bold uppercase tracking-wide">{selectedItem.label}</span>
//               ) : null;
//             })()}
//             {isProductTypeSelected && selectedLabel && (
//               <>
//                 <ChevronLeft size={16} className="text-gray-600" />
//                 <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
//               </>
//             )}
//           </div>

//           {/* Right Side - Breadcrumb */}
//           <div className="flex items-center gap-3 text-sm text-gray-600">
//             {items.map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 {index > 0 && <span className="text-gray-900 text-3xl">•</span>}
//                 {item.href ? (
//                   <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
//                     {item.label}
//                   </Link>
//                 ) : item.onClick ? (
//                   <button
//                     onClick={item.onClick}
//                     className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                   >
//                     {item.label}
//                   </button>
//                 ) : (
//                   <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile View */}
//         <div className="md:hidden flex items-center justify-center gap-3 text-sm text-gray-600">
//           {items.map((item, index) => (
//             <div key={index} className="flex items-center gap-3">
//               {index > 0 && <span className="text-gray-900 text-3xl">•</span>}
//               {item.href ? (
//                 <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
//                   {item.label}
//                 </Link>
//               ) : item.onClick ? (
//                 <button
//                   onClick={item.onClick}
//                   className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
//                 >
//                   {item.label}
//                 </button>
//               ) : (
//                 <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  selectedCategory?: string
  selectedLabel?: string
}

export function Breadcrumb({ items, selectedCategory, selectedLabel }: BreadcrumbProps) {
  const isProductTypeSelected = selectedCategory && !["men", "women", "kids"].includes(selectedCategory)

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Desktop/Laptop View */}
        <div className="hidden lg:flex items-center justify-center gap-3 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {index > 0 && <span className="text-gray-400 text-3xl">•</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-gray-400 transition-colors uppercase font-medium text-sm">
                  {item.label}
                </Link>
              ) : item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="hover:text-gray-900 transition-colors uppercase font-medium text-sm cursor-pointer text-gray-900 font-bold tracking-wide"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-bold uppercase text-sm">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Tablet View */}
        <div className="hidden md:flex lg:hidden items-center justify-between">
          {/* Left Side - Selected Category with Arrow */}
          <div className="flex items-center gap-2 text-gray-900">
            {/* Find the selected breadcrumb (the one without href) */}
            {(() => {
              const selectedItem = items.find(item => !item.href && item.onClick);
              return selectedItem ? (
                <span className="text-base font-bold uppercase tracking-wide">{selectedItem.label}</span>
              ) : null;
            })()}
            {isProductTypeSelected && selectedLabel && (
              <>
                <ChevronLeft size={16} className="text-gray-600" />
                <span className="text-base font-bold uppercase tracking-wide">{selectedLabel}</span>
              </>
            )}
          </div>
          {/* Right Side - Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {index > 0 && <span className="text-gray-400 text-3xl">•</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-sm">
                    {item.label}
                  </Link>
                ) : item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="hover:text-gray-900 transition-colors uppercase font-medium text-sm cursor-pointer text-gray-900 font-bold"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="text-gray-900 font-bold uppercase text-sm">{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-center gap-3 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {index > 0 && <span className="text-gray-400 text-3xl">•</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-gray-400 transition-colors uppercase font-medium text-sm">
                  {item.label}
                </Link>
              ) : item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="hover:text-gray-900 transition-colors uppercase font-medium text-sm cursor-pointer text-gray-900 font-bold"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-bold uppercase text-sm">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}