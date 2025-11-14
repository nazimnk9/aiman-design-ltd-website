"use client"

import { Mail, MapPin } from 'lucide-react'

export function HeaderTopBar() {
  return (
    <div
      className="w-full py-3 px-4"
      style={{
        backgroundColor: "#103E01",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-8">
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={18} style={{ color: "#E5E7EB" }} />
          <a
            href="mailto:hello@aiman.com"
            className="text-sm font-medium"
            style={{
              color: "#FFF",
              textDecoration: "none",
            }}
          >
            hello@aiman.com
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin size={18} style={{ color: "#E5E7EB" }} />
          <span
            className="text-sm font-medium"
            style={{
              color: "#E5E7EB",
            }}
          >
            123 Fashion St, NYC
          </span>
        </div>
      </div>
    </div>
  )
}
