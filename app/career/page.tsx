"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Briefcase, MapPin, Clock } from "lucide-react"
import { Background3D } from "@/components/3d-background"

const jobListings = [
  {
    title: "Senior Fashion Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description: "Lead creative direction for our next collection",
  },
  {
    title: "Operations Manager",
    department: "Operations",
    location: "Los Angeles, CA",
    type: "Full-time",
    description: "Manage production and supply chain operations",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive digital marketing and brand awareness",
  },
  {
    title: "Quality Assurance Coordinator",
    department: "Quality",
    location: "New York, NY",
    type: "Contract",
    description: "Ensure excellence in every garment produced",
  },
  {
    title: "Social Media Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Create engaging content for our social channels",
  },
  {
    title: "Pattern Maker",
    department: "Design",
    location: "Los Angeles, CA",
    type: "Full-time",
    description: "Create patterns for new garment collections",
  },
]

export default function Career() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Added 3D background animation */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-16 md:py-24 overflow-hidden">
        <Background3D type="career" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Join Our Team</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Build your career at the forefront of fashion
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section - Added 3D background animation */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <Background3D type="products" />
        <div className="relative z-10">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Join AIMAN?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Growth", desc: "Develop your skills in a dynamic environment" },
                { title: "Innovation", desc: "Work on cutting-edge fashion projects" },
                { title: "Culture", desc: "Be part of a passionate team" },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-6 bg-secondary rounded-xl animate-fadeInUp"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings - Added 3D background animation */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <Background3D type="team" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fadeInUp">Open Positions</h2>
          <div className="space-y-4">
            {jobListings.map((job, i) => (
              <div
                key={job.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group animate-fadeInUp border-l-4 border-primary hover:border-accent"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
                    Apply Now
                  </button>
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
