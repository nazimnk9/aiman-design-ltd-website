"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { useState } from "react"
import { Background3D } from "@/components/3d-background"
import { HeaderTopBar } from "@/components/header-top-bar"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const payload = {
      ...formData,
      to_email: "russel@aimandesignltd.com",
    }

    try {
      const response = await fetch("https://apis.venotel.com/api/v1/users/send_mail/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccessOpen(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        toast({
          title: "Success",
          description: data.message,
          variant: "default",
          className: "bg-green-500 text-white border-none",
        })
      } else {
        let errorMessage = data.message || "Something went wrong."
        if (data.errors && data.errors.message) {
          errorMessage = data.errors.message[0]
        }

        toast({
          variant: "destructive",
          title: "Error",
          description: errorMessage,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderTopBar />
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
        {/* <Background3D type="home" /> */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "russel@aimandesignltd.com",
                  desc: "Send us an email anytime",
                  des: "",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+447711048902",
                  desc: "",
                  des: "",
                },
                {
                  icon: MapPin,
                  title: "Dhaka Office",
                  value: "House # 470, Road # 8, Level-3 DOHS Baridhara, Dhaka-1212, Bangladesh",
                  desc: "",
                  des: "",
                },
                {
                  icon: MapPin,
                  title: "London Office",
                  value: "13 Elm parade Main road, Sidcup Kent, UK Da14 6nf.",
                  desc: "Phone: +447711048902",
                  des: "Email: russel@aimandesignltd.com",
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
                        <p className="text-primary">{item.value}</p>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                        <p className="text-muted-foreground text-sm">{item.des}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Enter your phone number"
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
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-lg text-center">
              Your message has been sent successfully. We will get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <button
              onClick={() => setIsSuccessOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-2 rounded-md transition-colors"
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
