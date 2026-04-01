import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "AIMAN - Premium Garments",
  description: "Discover premium quality garments with AIMAN - where style meets excellence",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: '/fav.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/fav.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/app_icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />
      <body className={`font-sans antialiased`} style={{ fontFamily: '"Helvetica", "Arial", sans-serif' }}>
        {children}
        <Toaster />
        </body>
    </html>
  )
}
