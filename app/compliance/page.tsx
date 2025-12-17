"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeaderTopBar } from "@/components/header-top-bar"
import { Background3D } from "@/components/3d-background"
import { Shield, CheckCircle, Users, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const companies = [
  {
    name: "BSCI",
    logo: (
      <img
        src="/images/bsci_logo_for_social_compliance_in_business_practices.png"
        alt="BSCI"
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    name: "ICS",
    logo: (
      <img
        src="/images/ICS_Logotypes_Couleur_desktop.png"
        alt="ICS"
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    name: "Accord",
    logo: (
      <img
        src="/images/international_accord_invalid_bd_govt_permits.png"
        alt="Accord"
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    name: "Sedex",
    logo: (
      <img
        src="/images/sedex.png"
        alt="Sedex"
        className="h-full w-full object-contain"
      />
    ),
  },
  {
    name: "GOTS",
    logo: (
      <img
        src="/images/gots2new.png"
        alt="GOTS"
        className="h-full w-full object-contain"
      />
    ),
  },
]

export default function CompliancePage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0 // Start from the beginning

    const animate = () => {
      // Move right to left (increasing scrollLeft)
      scrollPosition += 1

      // Reset when we've scrolled past the first set of items (1/3 of total width)
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <HeaderTopBar />
      <Navbar />

      {/* Compliance Hero Section with animated background */}
      <section
        ref={sectionRef}
        className="relative py-10 md:py-0 md:pt-32 overflow-hidden"
      >
        {/* <Background3D type="contact" /> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div
              className={`text-center mb-6 transition-all duration-1000 ${isVisible ? "animate-slideInLeft opacity-100" : "opacity-0 -translate-x-20"}`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-16 animate-bounce-slow">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance tracking-tight mb-16">
                COMPLIANCE AND SOCIAL RESPONSIBILITY
              </h1>
            </div>
            <div
              className={`max-w-4xl mx-auto space-y-6 transition-all duration-1000 delay-150 ${isVisible ? "animate-slideInRight opacity-100" : "opacity-0 translate-x-20"}`}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our production network is based on compliance, we guarantee our customers that their goods are produced
                in factories where the workers' rights are respected.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We have our own Compliance Department that constantly evaluates the factories and provides them with
                mandatory follow-up improvements. We constantly strive to improve the working conditions, safety and
                benefits of the workers. This is made possible by a long term partnership with our clients and
                manufacturers.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We are following international standards and code of conduct such as BSCI, Accord, Wrap, ICS.
              </p>
            </div>
          </div>

          {/* Animated Icons Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: <Shield />, label: "BSCI", color: "from-blue-500 to-cyan-500" },
              { icon: <CheckCircle />, label: "Accord", color: "from-green-500 to-emerald-500" },
              { icon: <Award />, label: "Wrap", color: "from-purple-500 to-pink-500" },
              { icon: <Users />, label: "ICS", color: "from-orange-500 to-red-500" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fadeInUp hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} mb-4 group-hover:rotate-12 transition-transform duration-500`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </h3>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div> */}

          <div className="container mx-auto w-full overflow-hidden py-2 xs:py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 2xl:py-5 relative bg-white/50 backdrop-blur-sm rounded-2xl my-5">
            <div className="absolute left-0 right-0 top-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-b from-white/60 to-transparent z-10 pointer-events-none" />

            <div className="absolute left-0 right-0 bottom-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-t from-white/60 to-transparent z-10 pointer-events-none" />

            <div className="absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              className="flex gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-18 2xl:gap-20 overflow-x-hidden scrollbar-hide"
              style={{ scrollBehavior: "auto" }}
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div key={`${company.name}-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 flex items-center justify-center transition-all duration-300">
                    {company.logo}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
