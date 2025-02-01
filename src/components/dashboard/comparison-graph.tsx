"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface ComparisonGraphProps {
  percentile: number
  averagePercentile: number
}

export function ComparisonGraph({ percentile, averagePercentile }: ComparisonGraphProps) {
  // Generate sample data points for the curve
  const data = [
    { x: 0, value: 2 },
    { x: 10, value: 4 },
    { x: 20, value: 8 },
    { x: 30, value: 12 },
    { x: 40, value: 20 },
    { x: 50, value: 35 },
    { x: 60, value: 48 },
    { x: 70, value: 35 },
    { x: 80, value: 20 },
    { x: 90, value: 12 },
    { x: 100, value: 5 },
  ]

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Comparison Graph</CardTitle>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">You scored {percentile}% percentile</span> which is lower than the average percentile {averagePercentile}% of all the
          engineers who took this assessment
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="x"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}`}
              />
              <YAxis hide />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Percentile</span>
                            <span className="font-bold text-muted-foreground">{payload[0].payload.x}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">Students</span>
                            <span className="font-bold">{payload[0].payload.value}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#0088FF"
                fill="url(#gradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

