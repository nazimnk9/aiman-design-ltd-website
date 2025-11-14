import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AIMAN - Premium Garments",
  description: "Discover premium quality garments with AIMAN - where style meets excellence",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} style={{ fontFamily: '"Helvetica", "Arial", sans-serif' }}>{children}</body>
    </html>
  )
}
