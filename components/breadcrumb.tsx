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
  showOnMobile?: boolean
  showOnTablet?: boolean
  showOnDesktop?: boolean
}

export function Breadcrumb({ 
  items,
  showOnMobile = true,
  showOnTablet = true,
  showOnDesktop = true 
}: BreadcrumbProps) {
  return (
    <div className={`
      bg-white border-b border-gray-200
      ${showOnMobile ? 'block' : 'hidden'}
      ${showOnTablet ? 'md:block' : 'md:hidden'}
      ${showOnDesktop ? 'lg:block' : 'lg:hidden'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {index > 0 && <ChevronLeft size={14} className="text-gray-400 rotate-180" />}
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="hover:text-gray-900 transition-colors uppercase font-medium text-xs"
                >
                  {item.label}
                </Link>
              ) : item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="hover:text-gray-900 transition-colors uppercase font-medium text-xs cursor-pointer text-gray-900"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-semibold uppercase text-xs">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}