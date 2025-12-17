// "use client"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { SplitScreenSlider } from "@/components/split-screen-slider"
// import { SectionCard } from "@/components/section-card"
// import { Background3D } from "@/components/3d-background"
// import { Mail, Users, Palette, Globe } from 'lucide-react'
// import Link from "next/link"
// import { HeaderTopBar } from "@/components/header-top-bar"

// const heroSlides = [
//   {
//     image: "/premium-garments-fashion-showcase.jpg",
//     title: "Elevate Your Style",
//     description: "Discover premium quality garments crafted with excellence",
//   },
//   {
//     image: "/trendy-modern-clothing-collection.jpg",
//     title: "Fashion Meets Excellence",
//     description: "Explore our exclusive collection of contemporary designs",
//   },
//   {
//     image: "/luxury-apparel-textile-design.jpg",
//     title: "Quality Craftsmanship",
//     description: "Every piece tells a story of dedication and artistry",
//   },
// ]

// const alternatingSections = [
//   {
//     icon: <Palette />,
//     title: "For Women",
//     description: "Discover our exclusive collection of premium women's garments, featuring the latest fashion trends and timeless classics. From casual wear to elegant evening pieces, find your perfect style.",
//     gradient: "from-blue-500 to-cyan-500",
//     image: "/premium-tshirts-collection-design.jpg",
//     isImageLeft: true,
//   },
//   {
//     icon: <Users />,
//     title: "For Men",
//     description: "Explore our sophisticated men's collection, combining style with comfort. Carefully curated pieces that elevate your everyday wardrobe with modern design and premium quality.",
//     gradient: "from-purple-500 to-pink-500",
//     image: "/trendy-modern-clothing-collection.jpg",
//     isImageLeft: false,
//   },
//   {
//     icon: <Globe />,
//     title: "For Everyone",
//     description: "Our universal collection celebrates individuality with pieces designed for all. Embrace diversity and express your unique style with our inclusive fashion range.",
//     gradient: "from-green-500 to-emerald-500",
//     image: "/luxury-apparel-textile-design.jpg",
//     isImageLeft: true,
//   },
// ]

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background">
//       <HeaderTopBar />
//       <Navbar />

//       <SplitScreenSlider slides={heroSlides} autoPlay interval={6000} />

//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="home" />
//         <div className="relative z-10">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Welcome to AIMAN</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Experience the perfect blend of style, comfort, and quality in every piece we create.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <SectionCard
//               icon={<Palette />}
//               title="Premium Design"
//               description="Meticulously crafted with attention to every detail"
//               gradient="from-blue-500 to-cyan-500"
//               index={0}
//             />
//             <SectionCard
//               icon={<Users />}
//               title="Expert Team"
//               description="Led by industry professionals with decades of experience"
//               gradient="from-purple-500 to-pink-500"
//               delay="0.1s"
//               index={1}
//             />
//             <SectionCard
//               icon={<Globe />}
//               title="Global Reach"
//               description="Serving customers across continents with excellence"
//               gradient="from-green-500 to-emerald-500"
//               delay="0.2s"
//               index={2}
//             />
//             <SectionCard
//               icon={<Mail />}
//               title="Support"
//               description="Always here to help with any questions or concerns"
//               gradient="from-orange-500 to-red-500"
//               delay="0.3s"
//               index={3}
//             />
//           </div>
//         </div>
//       </section>

//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="about" />
//         <div className="relative z-10">
//           <div className="space-y-12 md:space-y-20">
//             {alternatingSections.map((section, index) => (
//               <SectionCard
//                 key={index}
//                 icon={section.icon}
//                 title={section.title}
//                 description={section.description}
//                 gradient={section.gradient}
//                 image={section.image}
//                 isImageLeft={section.isImageLeft}
//                 index={index}
//                 delay={`${index * 0.4}s`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-gradient-to-br from-secondary to-background py-20 md:py-32 overflow-hidden">
//         <Background3D type="about" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fadeInLeft">
//               <img
//                 src="/modern-garments-manufacturing-facility.jpg"
//                 alt="About AIMAN"
//                 className="rounded-2xl shadow-xl"
//               />
//             </div>
//             <div className="animate-fadeInUp">
//               <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
//               <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
//                 Founded with a vision to revolutionize the garment industry, AIMAN stands for quality, innovation, and
//                 sustainability.
//               </p>
//               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//                 We believe that every piece of clothing should tell a story of craftsmanship and dedication. Our team
//                 works tirelessly to bring your style to life.
//               </p>
//               <Link
//                 href="/about"
//                 className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
//               >
//                 Learn More About Us →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="team" />
//         <div className="relative z-10">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Meet Our Team</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Talented individuals dedicated to creating exceptional garments
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="text-center group animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
//                 <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
//                   <img
//                     src={`/professional-team-member-portrait-.jpg?height=256&width=256&query=professional-team-member-portrait-${i}`}
//                     alt={`Team member ${i}`}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground">Team Member {i}</h3>
//                 <p className="text-muted-foreground">Specialist</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link
//               href="/team"
//               className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
//             >
//               See Full Team →
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="relative bg-gradient-to-br from-foreground to-primary text-white py-20 md:py-32 overflow-hidden">
//         <Background3D type="contact" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
//             <p className="text-lg text-white/80">Have questions? We'd love to hear from you</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             {[
//               { label: "Email", value: "hello@aiman.com" },
//               { label: "Phone", value: "+1 (555) 123-4567" },
//               { label: "Address", value: "123 Fashion St, NYC" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur animate-fadeInUp"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               >
//                 <p className="text-white/70 mb-2">{item.label}</p>
//                 <p className="text-xl font-semibold">{item.value}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link
//               href="/contact"
//               className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
//             >
//               Send Message →
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// "use client"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import About from "./about/page"
// import { SplitScreenSlider } from "@/components/split-screen-slider"
// //import { SectionCard } from "@/components/section-card"
// import { Background3D } from "@/components/3d-background"
// import { Mail, Users, Palette, Globe } from 'lucide-react'
// import Link from "next/link"
// import { HeaderTopBar } from "@/components/header-top-bar"
// import { CategoriesSection } from "@/components/categories-section"
// import { AboutSection } from "@/components/about"


// const heroSlides = [
//   {
//     image: "/premium-garments-fashion-showcase.jpg",
//     title: "Manufecturing",
//     description: "Discover premium quality garments crafted with excellence",
//   },
//   {
//     image: "/trendy-modern-clothing-collection.jpg",
//     title: "Design",
//     description: "Explore our exclusive collection of contemporary designs",
//   },
//   {
//     image: "/luxury-apparel-textile-design.jpg",
//     title: "Sourcing",
//     description: "Every piece tells a story of dedication and artistry",
//   },
//   {
//     image: "/luxury-apparel-textile-design.jpg",
//     title: "Bulk Production",
//     description: "Every piece tells a story of dedication and artistry",
//   },
// ]

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background">
//       <HeaderTopBar />
//       <Navbar />

//       {/* Hero Split Screen Slider - CHANGE: Replaced Carousel with SplitScreenSlider */}
//       <SplitScreenSlider slides={heroSlides} autoPlay interval={6000} />
//       <AboutSection />
//       {/* Home Section - Added 3D background animation */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 md:py-34 lg:py-15 overflow-hidden">
//         {/* <Background3D type="home" /> */}
//         <div className="relative z-10">
//           {/* <div className="text-center mb-16 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Welcome to AIMAN</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Experience the perfect blend of style, comfort, and quality in every piece we create.
//             </p>
//           </div> */}
//           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <SectionCard
//               icon={<Palette />}
//               title="Premium Design"
//               description="Meticulously crafted with attention to every detail"
//               gradient="from-blue-500 to-cyan-500"
//             />
//             <SectionCard
//               icon={<Users />}
//               title="Expert Team"
//               description="Led by industry professionals with decades of experience"
//               gradient="from-purple-500 to-pink-500"
//               delay="0.1s"
//             />
//             <SectionCard
//               icon={<Globe />}
//               title="Global Reach"
//               description="Serving customers across continents with excellence"
//               gradient="from-green-500 to-emerald-500"
//               delay="0.2s"
//             />
//             <SectionCard
//               icon={<Mail />}
//               title="Support"
//               description="Always here to help with any questions or concerns"
//               gradient="from-orange-500 to-red-500"
//               delay="0.3s"
//             />
//           </div> */}
//           <CategoriesSection />
//         </div>
//       </section>

//       {/* Categories Section - Replaced SectionCard grid with new CategoriesSection component featuring For Women/For Men design with sliders */}

//       {/* About Section - Added 3D background animation */}
//       {/* <section className="relative bg-gradient-to-br from-secondary to-background py-20 md:py-32 overflow-hidden">
//         <Background3D type="about" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fadeInLeft">
//               <img
//                 src="/modern-garments-manufacturing-facility.jpg"
//                 alt="About AIMAN"
//                 className="rounded-2xl shadow-xl"
//               />
//             </div>
//             <div className="animate-fadeInUp">
//               <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
//               <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
//                 Founded with a vision to revolutionize the garment industry, AIMAN stands for quality, innovation, and
//                 sustainability.
//               </p>
//               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//                 We believe that every piece of clothing should tell a story of craftsmanship and dedication. Our team
//                 works tirelessly to bring your style to life.
//               </p>
//               <Link
//                 href="/about"
//                 className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
//               >
//                 Learn More About Us →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Team Section - Added 3D background animation */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="team" />
//         <div className="relative z-10">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Meet Our Team</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Talented individuals dedicated to creating exceptional garments
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="text-center group animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
//                 <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
//                   <img
//                     src={`/professional-team-member-portrait-.jpg?height=256&width=256&query=professional-team-member-portrait-${i}`}
//                     alt={`Team member ${i}`}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground">Team Member {i}</h3>
//                 <p className="text-muted-foreground">Specialist</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link
//               href="/team"
//               className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
//             >
//               See Full Team →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section - Added 3D background animation */}
//       <section className="relative bg-gradient-to-br from-foreground to-primary text-white py-20 md:py-32 overflow-hidden">
//         <Background3D type="contact" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
//             <p className="text-lg text-white/80">Have questions? We'd love to hear from you</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             {[
//               { label: "Email", value: "hello@aiman.com" },
//               { label: "Phone", value: "+1 (555) 123-4567" },
//               { label: "Address", value: "123 Fashion St, NYC" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur animate-fadeInUp"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               >
//                 <p className="text-white/70 mb-2">{item.label}</p>
//                 <p className="text-xl font-semibold">{item.value}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <Link
//               href="/contact"
//               className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
//             >
//               Send Message →
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import About from "./about/page"
import { SplitScreenSlider } from "@/components/split-screen-slider"
//import { SectionCard } from "@/components/section-card"
import { Background3D } from "@/components/3d-background"
import { Mail, Users, Palette, Globe, Shield } from 'lucide-react'
import Link from "next/link"
import { HeaderTopBar } from "@/components/header-top-bar"
import { CategoriesSection } from "@/components/categories-section"
import { AboutSection } from "@/components/about"
import { IndustryStatsSection } from "@/components/industry-stats-section"
import { ProductCategoriesSection } from "@/components/product-categories-section"
import { useEffect, useRef } from "react"

const heroSlides = {
  left: [
    {
      // image: "/remium-garments-fashion-showcase.jpg",
      image: "/rsz_bulk_prod.jpg",
      title: "Bulk Production",
      description: "Every piece tells a story of dedication and artistry",
    },
    {
      // image: "/premium-garments-fashion-showcase.jpg",
      image: "/manufacturing.jpg",
      title: "Manufacturing",
      description: "Discover premium quality garments crafted with excellence",
    }


  ],
  right: [
    {
      // image: "/luxury-apparel-textile-design.jpg",
      image: "/rsz_sourcing.jpg",
      title: "Sourcing",
      description: "Every piece tells a story of dedication and artistry",
    },
    {
      // image: "/trendy-modern-clothing-collection.jpg",
      image: "/rsz_design.jpg",
      title: "Design",
      description: "Explore our exclusive collection of contemporary designs",
    }
  ]
}

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

export default function Home() {

  const complianceHeaderRef = useRef<HTMLDivElement>(null)
  const complianceDescRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const headerElement = complianceHeaderRef.current
    const descElement = complianceDescRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInLeft")
            entry.target.classList.remove("opacity-0", "translate-x-[-100px]")
          }
        })
      },
      {
        threshold: 0.2,
      },
    )

    const descObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideInRight")
            entry.target.classList.remove("opacity-0", "translate-x-[100px]")
          }
        })
      },
      {
        threshold: 0.2,
      },
    )

    if (headerElement) {
      headerElement.classList.add("opacity-0", "translate-x-[-100px]")
      observer.observe(headerElement)
    }

    if (descElement) {
      descElement.classList.add("opacity-0", "translate-x-[100px]")
      descObserver.observe(descElement)
    }

    return () => {
      if (headerElement) observer.unobserve(headerElement)
      if (descElement) descObserver.unobserve(descElement)
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

      {/* Hero Split Screen Slider - CHANGE: Replaced Carousel with SplitScreenSlider */}
      <SplitScreenSlider slides={heroSlides} autoPlay interval={8000} />
      <AboutSection />
      {/* Home Section - Added 3D background animation */}
      <IndustryStatsSection />
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 md:py-34 lg:py-15 overflow-hidden">
        {/* <Background3D type="home" /> */}
        <div className="relative z-10">
          {/* <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Welcome to AIMAN</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of style, comfort, and quality in every piece we create.
            </p>
          </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectionCard
              icon={<Palette />}
              title="Premium Design"
              description="Meticulously crafted with attention to every detail"
              gradient="from-blue-500 to-cyan-500"
            />
            <SectionCard
              icon={<Users />}
              title="Expert Team"
              description="Led by industry professionals with decades of experience"
              gradient="from-purple-500 to-pink-500"
              delay="0.1s"
            />
            <SectionCard
              icon={<Globe />}
              title="Global Reach"
              description="Serving customers across continents with excellence"
              gradient="from-green-500 to-emerald-500"
              delay="0.2s"
            />
            <SectionCard
              icon={<Mail />}
              title="Support"
              description="Always here to help with any questions or concerns"
              gradient="from-orange-500 to-red-500"
              delay="0.3s"
            />
          </div> */}
          <CategoriesSection />
        </div>
      </section>

      <ProductCategoriesSection />

      {/* Compliance Section */}
      <section className="relative py-10 md:py-0 md:pt-5 overflow-hidden">
        {/* <Background3D type="compliance" /> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div ref={complianceHeaderRef} className="text-center mb-6 transition-all duration-1000 ease-out">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 animate-bounce-slow">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance tracking-tight">
                COMPLIANCE AND SOCIAL RESPONSIBILITY
              </h2>
            </div>
            <div ref={complianceDescRef} className="max-w-4xl mx-auto space-y-6 transition-all duration-1000 ease-out">
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

          {/* <div className="w-full overflow-hidden bg-white/50 backdrop-blur-sm rounded-2xl py-8 my-12">
            <div className="flex animate-marquee gap-12 whitespace-nowrap">
              <div className="flex gap-12 items-center">
                <img
                  src="/images/bsci-logo-for-social-compliance-in-business-practices.jpg"
                  alt="BSCI"
                  className="h-24 w-auto object-contain"
                />
                <img src="/images/ICS_Logotypes_Couleur_desktop.png" alt="ICS" className="h-24 w-auto object-contain" />
                <img
                  src="/images/international-accord-invalid-bd-govt-permits.jpg"
                  alt="Accord"
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div className="flex gap-12 items-center">
                <img
                  src="/images/bsci-logo-for-social-compliance-in-business-practices.jpg"
                  alt="BSCI"
                  className="h-24 w-auto object-contain"
                />
                <img src="/images/ICS_Logotypes_Couleur_desktop.png" alt="ICS" className="h-24 w-auto object-contain" />
                <img
                  src="/images/international-accord-invalid-bd-govt-permits.jpg"
                  alt="Accord"
                  className="h-24 w-auto object-contain"
                />
                <img src="/images/sedex.png" alt="Sedex" className="h-24 w-auto object-contain" />
                <img src="/images/gots2new.jpg" alt="GOTS" className="h-24 w-auto object-contain" />
              </div>
            </div>
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
        </div>
      </section>

      {/* Categories Section - Replaced SectionCard grid with new CategoriesSection component featuring For Women/For Men design with sliders */}

      {/* About Section - Added 3D background animation */}
      {/* <section className="relative bg-gradient-to-br from-secondary to-background py-20 md:py-32 overflow-hidden">
        <Background3D type="about" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <img
                src="/modern-garments-manufacturing-facility.jpg"
                alt="About AIMAN"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded with a vision to revolutionize the garment industry, AIMAN stands for quality, innovation, and
                sustainability.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that every piece of clothing should tell a story of craftsmanship and dedication. Our team
                works tirelessly to bring your style to life.
              </p>
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section - Added 3D background animation */}
      {/* <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
        <Background3D type="team" />
        <div className="relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented individuals dedicated to creating exceptional garments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center group animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                  <img
                    src={`/professional-team-member-portrait-.jpg?height=256&width=256&query=professional-team-member-portrait-${i}`}
                    alt={`Team member ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">Team Member {i}</h3>
                <p className="text-muted-foreground">Specialist</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              See Full Team →
            </Link>
          </div>
        </div>
      </section> */}

      {/* Contact Section - Added 3D background animation */}
      <section className="relative bg-gradient-to-br from-foreground to-primary text-white py-20 md:py-64 overflow-hidden">
        <Background3D type="contact" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
            <p className="text-lg text-white/80">Have questions? We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { label: "Email", value: "hello@aiman.com" },
              { label: "Phone", value: "+1 (555) 123-4567" },
              { label: "Address", value: <span className="text-sm block leading-relaxed mt-1"><strong className="text-white block">Dhaka Office:</strong> House # 470, Road # 8, Level-3 DOHS Baridhara, Dhaka-1212, Bangladesh<br /><strong className="text-white block mt-2">London Office:</strong> 13 Elm parade Main road, Sidcup Kent, UK Da14 6nf .</span> },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-white/70 mb-2">{item.label}</p>
                <p className="text-xl">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Send Message →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}