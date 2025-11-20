// export function AboutSection() {
//   return (
//     <section className="relative bg-white mt-18 md:mt-0 py-15 md:py-34 lg:py-32 ml-2 md:ml-0 lg:ml-2 xl:ml-18 2xl:ml-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-stretch lg:gap-0 relative z-30">
//           {/* Left side - Image container with overlap effect */}
//           <div className="w-full md:w-1/2 animate-fadeInLeft relative">
//             <div className="rounded-lg p-1 md:p-8 flex items-center justify-center min-h-32 md:min-h-170 h-full md:pr-0 mt-0 md:mt-7 lg:mt-14 xl:mt-20">
//               <div className="relative w-full h-full max-w-sm md:max-w-2xl">
//                 <img
//                   src="/about.png"
//                   alt="Organic Textiles - Professional model"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right side - Content that overlaps the image */}
//           <div className="w-full md:w-1/2 -ml-14 md:-ml-24 lg:-ml-28 mb-0 md:-mb-2 lg:mb-24 mt-0 md:mt-8 lg:mt-0 flex items-center animate-fadeInUp relative">
//             <div className="space-y-8 md:space-y-8 p-1 md:p-8 lg:p-12 w-full">
//               <div>
//                 <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-foreground mb-1 md:mb-2 text-balance">
//                   GARMENT MANUFACTURER WITH PRODUCT SENSITIVITY
//                 </h1>
//                 {/* <p className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase mt-0 md:mt-2">
//                   FOR A BETTER FUTURE
//                 </p> */}
//               </div>

//               <div className="prose prose-lg max-w-none">
//                 <p className="text-xs md:text-lg text-muted-foreground leading-relaxed mb-1 md:mb-6">
//                   Aiman Design ltd is one stop solution provider and garment manufacturer in Bangladesh.
//                 </p>
//                 <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
//                   Aiman Design Ltd is an apparel sourcing and manufacturing in Wovens including Denims, Non denims Padded Jackets and Pants, Work wear Products, Circular Knit, and Flat Knits. We have wide production facilities, based on long term partnerships with manufacturers and fabric suppliers in Asia.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export function AboutSection() {
  return (
    <section className="relative bg-white mt-12 md:mt-0 py-8 md:py-20 lg:py-10 ml-20 md:ml-26 lg:ml-26 xl:ml-18 2xl:ml-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row md:flex-row lg:flex-row xl:flex-row items-stretch lg:gap-0 relative z-30">
          {/* Left side - Image container with overlap effect */}
          <div className="w-full md:w-1/2 animate-fadeInLeft relative">
            <div className="rounded-lg p-1 md:p-6 flex items-center justify-center min-h-24 md:min-h-140 h-full mr-10 md:mr-0 md:pr-0 mt-0 md:mt-5 lg:mt-10 xl:mt-10">
              <div className="relative w-full h-full max-w-sm md:max-w-xl">
                <img
                  src="/about.png"
                  alt="Organic Textiles - Professional model"
                  className="w-full h-[25rem] md:h-full object-cover overflow-visible"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content that overlaps the image */}
          <div className="w-full md:w-1/2 -ml-14 md:-ml-14 lg:-ml-28 mb-0 md:-mb-2 lg:mb-20 mt-0 md:mt-6 lg:mt-0 flex items-center animate-fadeInUp relative">
            <div className="space-y-6 md:space-y-6 p-1 md:p-2 lg:p-10 w-full">
              <div>
                <h1 className="text-xl md:text-5xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2 text-balance">
                  ABOUT US
                </h1>
                {/* <p className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase mt-0 md:mt-2">
                  FOR A BETTER FUTURE
                </p> */}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xs md:text-lg text-muted-foreground leading-relaxed mb-1 md:mb-4">
                  Aiman Design Ltd. is one stop solution provider and garment manufacturer in Bangladesh. Since 2016 we have grown from our initial startup focused on sourcing from Bangladesh  and managing complex supply chains for importers , brands and retailers worldwide.
                </p>
                <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                  Aiman Design Ltd is an apparel sourcing and manufacturing well reputed platform which is  strong  in areas of  Woven including Denim, Non-denim , Padded Jackets and Pants, Work wear Products, Circular Knit, and Flat Knits. ADL have wide production facilities, based on long term partnerships with manufacturers and fabric suppliers in Asia.
                </p>
                {/* <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                  Over the years  we  had been developing networks and building long-term and meaningful relationships with our stakeholders, based on continuous changes, developments, innovations and sustainability  to drive our business.
                </p>
                <p className="text-xs md:text-lg text-muted-foreground leading-relaxed">
                  We constantly finds result oriented solutions  for easy working to deliver value to our customers, suppliers, Society and for Green Environment.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}