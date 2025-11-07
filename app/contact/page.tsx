"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { Background3D } from "@/components/3d-background"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Added 3D background animation */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-16 md:py-24 overflow-hidden">
        <Background3D type="contact" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Get In Touch</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content - Added 3D background animation */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
        <Background3D type="home" />
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "hello@aiman.com",
                  desc: "Send us an email anytime",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+1 (555) 123-4567",
                  desc: "Call us during business hours",
                },
                {
                  icon: MapPin,
                  title: "Address",
                  value: "123 Fashion St, NYC",
                  desc: "Visit us in person",
                },
              ].map((item, i) => {
                const IconComponent = item.icon
                return (
                  <div key={item.title} className="animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                        <p className="font-semibold text-primary">{item.value}</p>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold animate-fadeInUp">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
