"use client"

import { useState, type ReactNode } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

interface LayoutProps {
  children: (activeComponent: string) => ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [activeComponent, setActiveComponent] = useState("dashboard")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
        <main className="flex-1 p-8">{children(activeComponent)}</main>
      </div>
    </div>
  )
}

