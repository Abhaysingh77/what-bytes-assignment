"use client"

import { useState, Suspense } from "react"
import { Layout } from "@/components/layout/layout"
import { SkillTestPage } from "@/components/pages/skill-test-page"
import { Loader2 } from "lucide-react"

// Placeholder components for Dashboard and Internship
const Dashboard = () => <div>Dashboard Content</div>
const Internship = () => <div>Internship Content</div>

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <Loader2 className="w-6 h-6 animate-spin" />
    </div>
  )
}

export default function Home() {
  const [error, setError] = useState<Error | null>(null)

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Layout>
      {(activeComponent) => {
        return (
          <Suspense fallback={<LoadingFallback />}>
            {(() => {
              try {
                switch (activeComponent) {
                  case "dashboard":
                    return <Dashboard />
                  case "skillTest":
                    return <SkillTestPage />
                  case "internship":
                    return <Internship />
                  default:
                    return <Dashboard />
                }
              } catch (err) {
                setError(err instanceof Error ? err : new Error("An error occurred"))
                return null
              }
            })()}
          </Suspense>
        )
      }}
    </Layout>
  )
}

