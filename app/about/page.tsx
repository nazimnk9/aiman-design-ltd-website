// "use client"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { Check } from 'lucide-react'
// import { Background3D } from "@/components/3d-background"
// import { HeaderTopBar } from "@/components/header-top-bar"

// const values = [
//   "Exceptional Quality",
//   "Sustainable Practices",
//   "Customer Excellence",
//   "Innovation",
//   "Integrity",
//   "Community Focus",
// ]

// export default function About() {
//   return (
//     <div className="min-h-screen bg-background">
//       <HeaderTopBar />
//       <Navbar />

//       {/* Hero Section - Added 3D background animation */}
//       <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 md:py-32 overflow-hidden">
//         <Background3D type="about" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center animate-fadeInUp">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">About AIMAN</h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Crafting excellence since day one</p>
//           </div>
//         </div>
//       </section>

//       {/* Story Section - Added 3D background animation */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="home" />
//         <div className="relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fadeInLeft">
//               <img src="/aiman-company-history-journey.jpg" alt="Our Journey" className="rounded-2xl shadow-xl" />
//             </div>
//             <div className="space-y-6 animate-fadeInUp">
//               <h2 className="text-4xl font-bold text-foreground text-balance">Our Journey</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 AIMAN began with a simple vision: to create garments that transcend ordinary fashion. What started as a
//                 small workshop has evolved into a global brand trusted by thousands.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Every garment we produce is a testament to our commitment to quality, sustainability, and customer
//                 satisfaction. We don't just make clothes; we create experiences.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Today, AIMAN stands as a beacon of excellence in the fashion industry, known for innovative designs and
//                 exceptional craftsmanship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section - Added 3D background animation */}
//       <section className="relative bg-secondary py-20 md:py-32 overflow-hidden">
//         <Background3D type="products" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Values</h2>
//             <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, i) => (
//               <div
//                 key={value}
//                 className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               >
//                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
//                   <Check size={24} />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground">{value}</h3>
//               </div>
//             ))}
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
// import { Check } from 'lucide-react'
// import { Background3D } from "@/components/3d-background"
// import { HeaderTopBar } from "@/components/header-top-bar"

// const values = [
//   "Exceptional Quality",
//   "Sustainable Practices",
//   "Customer Excellence",
//   "Innovation",
//   "Integrity",
//   "Community Focus",
// ]

// export default function About() {
//   return (
//     <div className="min-h-screen bg-background">
//       <HeaderTopBar />
//       <Navbar />

//       {/* Hero Section - Added 3D background animation */}
//     <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 md:py-32 overflow-hidden">
//         <Background3D type="about" />
//          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//            <div className="text-center animate-fadeInUp">
//              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">About AIMAN</h1>
//              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Crafting excellence since day one</p>
//            </div>
//          </div>
//        </section>

//       {/* Hero Section - Matches Capture.PNG design exactly */}
//       <section className="relative bg-white py-20 md:py-32 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 items-center">
//             {/* Left side - Image with light background */}
//             <div className="animate-fadeInLeft">
//               <div className="rounded-lg p-8 flex items-center justify-center min-h-96 left-500">
//                 <img 
//                   src="/about.png" 
//                   alt="Organic Textiles - Professional model" 
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
//             </div>

//             {/* Right side - Content */}
//             <div className="space-y-8 animate-fadeInUp">
//               <div>
//                 <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">
//                   Organic Textiles
//                 </h1>
//                 <p className="text-sm tracking-widest text-muted-foreground">
//                   FOR A BETTER FUTURE
//                 </p>
//               </div>

//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 We're an eco-friendly company certified by Control Union certifications with GOTS and Organic Content Standard (Organic 100 and Organic Blended) and able to produce a wide range of organic cotton, bamboo and Tencel clothing. We located in Aegean, one of the best regions in the world in high quality organic cotton production.
//               </p>

//               {/* Certification Badges */}
//               <div className="flex flex-wrap items-center gap-6 pt-4">
//                 {/* Badge 1 */}
//                 <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white">
//                   <div className="text-center text-xs font-bold text-red-500">
//                     <div>Organic</div>
//                   </div>
//                 </div>

//                 {/* Badge 2 */}
//                 <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white">
//                   <div className="text-center text-xs font-bold text-red-500">
//                     <div>GOTS</div>
//                   </div>
//                 </div>

//                 {/* Badge 3 */}
//                 <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white">
//                   <div className="text-center text-xs font-bold text-red-500">
//                     <div>Certified</div>
//                   </div>
//                 </div>

//                 {/* Script Logo */}
//                 <div className="text-3xl font-script text-gray-700 italic ml-4">
//                   Olentic
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Story Section - Added 3D background animation */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="home" />
//         <div className="relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fadeInLeft">
//               <img src="/aiman-company-history-journey.jpg" alt="Our Journey" className="rounded-2xl shadow-xl" />
//             </div>
//             <div className="space-y-6 animate-fadeInUp">
//               <h2 className="text-4xl font-bold text-foreground text-balance">Our Journey</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 AIMAN began with a simple vision: to create garments that transcend ordinary fashion. What started as a
//                 small workshop has evolved into a global brand trusted by thousands.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Every garment we produce is a testament to our commitment to quality, sustainability, and customer
//                 satisfaction. We don't just make clothes; we create experiences.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Today, AIMAN stands as a beacon of excellence in the fashion industry, known for innovative designs and
//                 exceptional craftsmanship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section - Added 3D background animation */}
//       <section className="relative bg-secondary py-20 md:py-32 overflow-hidden">
//         <Background3D type="products" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Values</h2>
//             <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, i) => (
//               <div
//                 key={value}
//                 className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               >
//                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
//                   <Check size={24} />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground">{value}</h3>
//               </div>
//             ))}
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
// import { Check } from 'lucide-react'
// import { Background3D } from "@/components/3d-background"
// import { HeaderTopBar } from "@/components/header-top-bar"

// const values = [
//   "Exceptional Quality",
//   "Sustainable Practices",
//   "Customer Excellence",
//   "Innovation",
//   "Integrity",
//   "Community Focus",
// ]

// export default function About() {
//   return (
//     <div className="min-h-screen bg-background">
//       <HeaderTopBar />
//       <Navbar />

//       {/* Hero Section - Matches Capture.PNG design with image overlap */}
//       <section className="relative bg-white py-20 md:py-32 overflow-visible">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-stretch gap-0 relative">
//             {/* Left side - Image with light background - CHANGE: using flex with overlap effect */}
//             <div className="w-full md:w-1/2 animate-fadeInLeft">
//               <div className="rounded-lg p-8 flex items-center justify-center min-h-96 h-full">
//                 <img 
//                   src="/about.png" 
//                   alt="Organic Textiles - Professional model" 
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
//             </div>

//             {/* Right side - Content - CHANGE: positioned to overlap image */}
//             <div className="w-full md:w-1/2 md:-ml-16 md:pl-8 flex items-center animate-fadeInUp relative z-10">
//               <div className="space-y-8 bg-white md:bg-white md:pl-8">
//                 <div>
//                   <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">
//                     Organic Textiles
//                   </h1>
//                   <p className="text-sm tracking-widest text-muted-foreground">
//                     FOR A BETTER FUTURE
//                   </p>
//                 </div>

//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   We're an eco-friendly company certified by Control Union certifications with GOTS and Organic Content Standard (Organic 100 and Organic Blended) and able to produce a wide range of organic cotton, bamboo and Tencel clothing. We located in Aegean, one of the best regions in the world in high quality organic cotton production.
//                 </p>

//                 {/* Certification Badges */}
//                 <div className="flex flex-wrap items-center gap-6 pt-4">
//                   {/* Badge 1 */}
//                   <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white">
//                     <div className="text-center text-xs font-bold text-red-500">
//                       <div>Organic</div>
//                     </div>
//                   </div>

//                   {/* Badge 2 */}
//                   <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white">
//                     <div className="text-center text-xs font-bold text-red-500">
//                       <div>GOTS</div>
//                     </div>
//                   </div>

//                   {/* Badge 3 */}
//                   <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white">
//                     <div className="text-center text-xs font-bold text-red-500">
//                       <div>Certified</div>
//                     </div>
//                   </div>

//                   {/* Script Logo */}
//                   <div className="text-3xl font-script text-gray-700 italic ml-4">
//                     Olentic
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Story Section - Added 3D background animation */}
//       <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="home" />
//         <div className="relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fadeInLeft">
//               <img src="/aiman-company-history-journey.jpg" alt="Our Journey" className="rounded-2xl shadow-xl" />
//             </div>
//             <div className="space-y-6 animate-fadeInUp">
//               <h2 className="text-4xl font-bold text-foreground text-balance">Our Journey</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 AIMAN began with a simple vision: to create garments that transcend ordinary fashion. What started as a
//                 small workshop has evolved into a global brand trusted by thousands.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Every garment we produce is a testament to our commitment to quality, sustainability, and customer
//                 satisfaction. We don't just make clothes; we create experiences.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Today, AIMAN stands as a beacon of excellence in the fashion industry, known for innovative designs and
//                 exceptional craftsmanship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section - Added 3D background animation */}
//       <section className="relative bg-secondary py-20 md:py-32 overflow-hidden">
//         <Background3D type="products" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Values</h2>
//             <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, i) => (
//               <div
//                 key={value}
//                 className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               >
//                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
//                   <Check size={24} />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground">{value}</h3>
//               </div>
//             ))}
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
// import { Check } from 'lucide-react'
// import { Background3D } from "@/components/3d-background"
// import { HeaderTopBar } from "@/components/header-top-bar"

// const values = [
//   "Exceptional Quality",
//   "Sustainable Practices",
//   "Customer Excellence",
//   "Innovation",
//   "Integrity",
//   "Community Focus",
// ]

// export default function About() {
//   return (
//     <div className="min-h-screen bg-background">
//       <HeaderTopBar />
//       <Navbar />

//       <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 md:py-32 overflow-hidden">
//         <Background3D type="about" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center animate-fadeInUp">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">About AIMAN</h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Crafting excellence since day one</p>
//           </div>
//         </div>
//       </section>


//       {/* Hero Section - Updated with proper image overlap */}
//       <section className="relative bg-white py-20 md:py-32 overflow-visible">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-stretch lg:gap-0 relative z-30">
//             {/* Left side - Image container with overlap effect */}
//             <div className="w-full lg:w-1/2 animate-fadeInLeft relative">
//               <div className="rounded-lg p-8 flex items-center justify-center min-h-96 h-full lg:pr-0 mt-2 md:-mt-2 lg:mt-2 xl:mt-10">
//                 <div className="relative w-full h-full max-w-sm md:max-w-2xl">
//                   <img
//                     src="/about.png"
//                     alt="Organic Textiles - Professional model"
//                     className="w-full h-full object-cover"
//                   />
//                   {/* Decorative background element behind image */}
//                   {/* <div className="absolute -inset-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl -z-10 transform rotate-1 scale-105 opacity-80"></div> */}
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Content that overlaps the image */}
//             <div className="w-full lg:w-1/2 md:-ml-34 lg:-ml-28 flex items-center animate-fadeInUp relative">
//               <div className="space-y-8 p-8 lg:p-12 w-full">
//                 <div>
//                   <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">
//                     Organic Textiles
//                   </h1>
//                   <p className="text-sm tracking-widest text-muted-foreground uppercase mt-2">
//                     FOR A BETTER FUTURE
//                   </p>
//                 </div>

//                 <div className="prose prose-lg max-w-none">
//                   <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                     We're an eco-friendly company certified by Control Union certifications with GOTS and Organic Content Standard (Organic 100 and Organic Blended) and able to produce a wide range of organic cotton, bamboo and Tencel clothing.
//                   </p>
//                   <p className="text-lg text-muted-foreground leading-relaxed">
//                     We located in Aegean, one of the best regions in the world in high quality organic cotton production.
//                   </p>
//                 </div>

//                 {/* Certification Badges */}
//                 {/* <div className="flex flex-wrap items-center gap-6 pt-6">
                 
//                   <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform duration-300">
//                     <div className="text-center text-xs font-bold text-red-500">
//                       <div>Organic</div>
//                     </div>
//                   </div>
                  
                 
//                   <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform duration-300">
//                     <div className="text-center text-xs font-bold text-red-500">
//                       <div>GOTS</div>
//                     </div>
//                   </div>
                  
                  
//                   <div className="w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform duration-300">
//                     <div className="text-center text-xs font-bold text-red-500">
//                       <div>Certified</div>
//                     </div>
//                   </div>
                  
                 
//                   <div className="text-3xl font-script text-gray-700 italic ml-4 border-l-2 border-gray-200 pl-4">
//                     Olentic
//                   </div>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Story Section - Added 3D background animation */}
//       {/* <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
//         <Background3D type="home" />
//         <div className="relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fadeInLeft">
//               <img 
//                 src="/aiman-company-history-journey.jpg" 
//                 alt="Our Journey" 
//                 className="rounded-2xl shadow-xl w-full h-auto object-cover"
//               />
//             </div>
//             <div className="space-y-6 animate-fadeInUp">
//               <h2 className="text-4xl font-bold text-foreground text-balance">Our Journey</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 AIMAN began with a simple vision: to create garments that transcend ordinary fashion. What started as a
//                 small workshop has evolved into a global brand trusted by thousands.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Every garment we produce is a testament to our commitment to quality, sustainability, and customer
//                 satisfaction. We don't just make clothes; we create experiences.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Today, AIMAN stands as a beacon of excellence in the fashion industry, known for innovative designs and
//                 exceptional craftsmanship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Values Section - Added 3D background animation */}
//       {/* <section className="relative bg-secondary py-20 md:py-32 overflow-hidden">
//         <Background3D type="products" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fadeInUp">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Values</h2>
//             <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, i) => (
//               <div
//                 key={value}
//                 className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 animate-fadeInUp"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               >
//                 <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
//                   <Check size={24} />
//                 </div>
//                 <h3 className="text-lg font-semibold text-foreground">{value}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       <Footer />
//     </div>
//   )
// }

// "use client"

// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
// import { Check } from 'lucide-react'
// import { Background3D } from "@/components/3d-background"
// import { HeaderTopBar } from "@/components/header-top-bar"

// const values = [
//   "Exceptional Quality",
//   "Sustainable Practices",
//   "Customer Excellence",
//   "Innovation",
//   "Integrity",
//   "Community Focus",
// ]

// export default function About() {
//   return (
//     <div className="min-h-screen bg-background">
//       <HeaderTopBar />
//       <Navbar />

//       <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 md:py-32 overflow-hidden">
//         <Background3D type="about" />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center animate-fadeInUp">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">About AIMAN</h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Crafting excellence since day one</p>
//           </div>
//         </div>
//       </section>


//       {/* Hero Section - Updated with proper image overlap */}
//       <section className="relative bg-white py-20 md:py-32 overflow-visible">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-stretch lg:gap-0 relative z-30">
//             {/* Left side - Image container with overlap effect */}
//             <div className="w-full md:w-1/2 animate-fadeInLeft relative">
//               <div className="rounded-lg p-8 flex items-center justify-center min-h-96 h-full md:pr-0 mt-2 md:-mt-2 lg:mt-2 xl:mt-10">
//                 <div className="relative w-full h-full max-w-sm md:max-w-2xl">
//                   <img
//                     src="/about.png"
//                     alt="Organic Textiles - Professional model"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Content that overlaps the image */}
//             <div className="w-full md:w-1/2 md:-ml-34 lg:-ml-28 flex items-center animate-fadeInUp relative">
//               <div className="space-y-8 p-8 lg:p-12 w-full">
//                 <div>
//                   <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2 text-balance">
//                     Organic Textiles
//                   </h1>
//                   <p className="text-sm tracking-widest text-muted-foreground uppercase mt-2">
//                     FOR A BETTER FUTURE
//                   </p>
//                 </div>

//                 <div className="prose prose-lg max-w-none">
//                   <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                     We're an eco-friendly company certified by Control Union certifications with GOTS and Organic Content Standard (Organic 100 and Organic Blended) and able to produce a wide range of organic cotton, bamboo and Tencel clothing.
//                   </p>
//                   <p className="text-lg text-muted-foreground leading-relaxed">
//                     We located in Aegean, one of the best regions in the world in high quality organic cotton production.
//                   </p>
//                 </div>
//               </div>
//             </div>
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
import { Check } from 'lucide-react'
import { Background3D } from "@/components/3d-background"
import { HeaderTopBar } from "@/components/header-top-bar"

const values = [
  "Exceptional Quality",
  "Sustainable Practices",
  "Customer Excellence",
  "Innovation",
  "Integrity",
  "Community Focus",
]

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderTopBar />
      <Navbar />

      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20 md:py-32 overflow-hidden">
        <Background3D type="about" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">About AIMAN</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Crafting excellence since day one</p>
          </div>
        </div>
      </section>


      {/* Hero Section - Updated with proper image overlap */}
      <section className="relative bg-white mt-20 md:mt-0 py-5 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-stretch lg:gap-0 relative z-30">
            {/* Left side - Image container with overlap effect */}
            <div className="w-full md:w-1/2 animate-fadeInLeft relative ml-30 md:ml-25">
              <div className="rounded-lg p-1 md:p-8 flex items-center justify-center min-h-32 md:min-h-96 h-full md:pr-0 mt-5 md:mt-2 lg:mt-24 xl:mt-30">
                <div className="relative w-full h-full max-w-sm md:max-w-2xl">
                  <img
                    src="/about.png"
                    alt="Organic Textiles - Professional model"
                    className="w-full h-full object-cover overflow-visible"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content that overlaps the image */}
            <div className="w-full md:w-1/2 -mr-3 md:mr-15 lg:-ml-28 mt-14 md:mt-0 flex items-center animate-fadeInUp relative">
              <div className="space-y-8 md:space-y-8 p-1 md:p-8 lg:p-12 w-full">
                <div>
                  <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-foreground mb-1 md:mb-2 text-balance">
                    GARMENT MANUFACTURER WITH PRODUCT SENSITIVITY
                  </h1>
                  {/* <p className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase mt-0 md:mt-2">
                    FOR A BETTER FUTURE
                  </p> */}
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xs md:text-lg text-muted-foreground leading-relaxed mb-1 md:mb-6">
                    Aiman Design ltd is one stop solution provider and garment manufacturer in Bangladesh.
                  </p>
                  <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                    Aiman Design Ltd is an apparel sourcing and manufacturing in Wovens including Denims, Non denims Padded Jackets and Pants, Work wear Products, Circular Knit, and Flat Knits. We have wide production facilities, based on long term partnerships with manufacturers and fabric suppliers in Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}