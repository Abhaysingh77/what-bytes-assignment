"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface AnalysisChartProps {
  score: number
  total: number
}

export function AnalysisChart({ score, total }: AnalysisChartProps) {
  const percentage = (score / total) * 100
  const data = [
    { name: "Score", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Question Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] flex items-center justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
              >
                <Cell fill="#0088FF" />
                <Cell fill="hsl(var(--muted))" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <p className="text-3xl font-bold text-primary">
              {score}/{total}
            </p>
            <p className="text-sm text-muted-foreground">Questions</p>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-muted-foreground">
          <span className="font-semibold">You scored {score} question correct out of {total}.</span> However it still needs some improvements
        </p>
      </CardContent>
    </Card>
  )
}

