"use client"

import type { ReactNode } from "react"

interface SectionCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient?: string
  delay?: string
}

export function SectionCard({
  icon,
  title,
  description,
  gradient = "from-primary to-accent",
  delay,
}: SectionCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp`}
      style={{ animationDelay: delay }}
    >
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        <div className="text-white text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
