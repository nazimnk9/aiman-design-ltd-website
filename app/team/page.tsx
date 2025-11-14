"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Linkedin, Twitter } from 'lucide-react'
import { Background3D } from "@/components/3d-background"
import { HeaderTopBar } from "@/components/header-top-bar"

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Founder & CEO",
    bio: "Visionary leader with 15+ years in fashion industry",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    position: "Creative Director",
    bio: "Award-winning designer known for innovative collections",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emma Wilson",
    position: "Head of Operations",
    bio: "Ensures excellence in every aspect of production",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Kumar",
    position: "Lead Designer",
    bio: "Creates stunning designs that define our brand",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Jessica Martinez",
    position: "Sustainability Officer",
    bio: "Championing eco-friendly practices in fashion",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Alex Thompson",
    position: "Customer Relations",
    bio: "Dedicated to providing exceptional customer service",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderTopBar />
      <Navbar />

      {/* Hero Section - Added 3D background animation */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-16 md:py-24 overflow-hidden">
        <Background3D type="team" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Our Team</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">Meet the talented people behind AIMAN</p>
          </div>
        </div>
      </section>

      {/* Team Grid - Added 3D background animation */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
        <Background3D type="home" />
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={member.name} className="group animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="relative h-72 overflow-hidden bg-secondary">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4 gap-3">
                      <button className="p-2 bg-primary hover:bg-accent rounded-full text-white transition-colors">
                        <Linkedin size={20} />
                      </button>
                      <button className="p-2 bg-primary hover:bg-accent rounded-full text-white transition-colors">
                        <Twitter size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.position}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
