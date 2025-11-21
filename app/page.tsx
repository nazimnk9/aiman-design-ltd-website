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
import { Mail, Users, Palette, Globe } from 'lucide-react'
import Link from "next/link"
import { HeaderTopBar } from "@/components/header-top-bar"
import { CategoriesSection } from "@/components/categories-section"
import { AboutSection } from "@/components/about"


const heroSlides = {
  left: [
    {
      image: "/premium-garments-fashion-showcase.jpg",
      title: "Manufacturing",
      description: "Discover premium quality garments crafted with excellence",
    },
    {
      image: "/luxury-apparel-textile-design.jpg",
      title: "Sourcing",
      description: "Every piece tells a story of dedication and artistry",
    },
  ],
  right: [
    {
      image: "/trendy-modern-clothing-collection.jpg",
      title: "Design",
      description: "Explore our exclusive collection of contemporary designs",
    },
    {
      image: "/remium-garments-fashion-showcase.jpg",
      title: "Bulk Production",
      description: "Every piece tells a story of dedication and artistry",
    },
  ]
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderTopBar />
      <Navbar />

      {/* Hero Split Screen Slider - CHANGE: Replaced Carousel with SplitScreenSlider */}
      <SplitScreenSlider slides={heroSlides} autoPlay interval={6000} />
      <AboutSection />
      {/* Home Section - Added 3D background animation */}
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
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
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
      </section>

      {/* Contact Section - Added 3D background animation */}
      <section className="relative bg-gradient-to-br from-foreground to-primary text-white py-20 md:py-32 overflow-hidden">
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
              { label: "Address", value: "123 Fashion St, NYC" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-white/70 mb-2">{item.label}</p>
                <p className="text-xl font-semibold">{item.value}</p>
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