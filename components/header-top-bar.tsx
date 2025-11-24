"use client"

import { Mail, MapPin } from "lucide-react"

export function HeaderTopBar() {
  return (
    <div className="header-topbar w-full py-3 px-4">
      {/* Moving low-light band */}
      <span className="sweep-band" aria-hidden="true" />

      <div className="max-w-7xl mx-auto flex items-center justify-start gap-8 relative z-10">
        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail size={18} style={{ color: "#dde0e7ff" }} />
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

      <style jsx>{`
        .header-topbar {
          position: relative;
          overflow: hidden;
          background-color: #164b04ff;
        }

        .sweep-band {
          position: absolute;
          inset: 0;
          width: 55%;
          height: 100%;
          left: -55%;
          background: linear-gradient(
            90deg,
            rgba(226, 239, 47, 0) 0%,
            rgba(180, 173, 46, 0.43) 50%,
            rgba(226, 239, 47, 0) 95%
          );
          animation: sweep 10s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes sweep {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(280%);
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .sweep-band {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
