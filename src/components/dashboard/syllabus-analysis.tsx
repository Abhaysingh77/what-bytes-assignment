import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Topic {
  name: string
  progress: number
  color: string
}

interface SyllabusAnalysisProps {
  topics: Topic[]
}

export function SyllabusAnalysis({ topics }: SyllabusAnalysisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-11">
        {topics.map((topic) => (
          <div key={topic.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{topic.name}</span>
              <span className="text-sm text-gray-500">{topic.progress}%</span>
            </div>
            <Progress value={topic.progress} className={`h-2 ${topic.color}`} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

