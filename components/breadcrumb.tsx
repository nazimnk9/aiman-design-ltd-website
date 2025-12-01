import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {index > 0 && <span className="text-gray-400">{">"}</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-gray-900 transition-colors uppercase font-medium text-xs">
                  {item.label}
                </Link>
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
