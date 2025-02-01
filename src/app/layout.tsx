import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhatBytes',
  description: 'Created with Create Next App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
