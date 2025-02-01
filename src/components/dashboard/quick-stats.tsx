import { Trophy, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface QuickStatsProps {
  rank: number;
  percentile: number;
  correctAnswers: number;
  totalQuestions: number;
}

export function QuickStats({
  rank,
  percentile,
  correctAnswers,
  totalQuestions,
}: QuickStatsProps) {
  return (
    <div className="border rounded-md">
      <h2 className="text-base font-semibold ml-4 mt-2">Quick Statistics</h2>
      <div className="flex items-center py-4 px-2">
        <Card className="border-none shadow-none ">
          <CardContent className="flex items-center border-r">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <div className="ml-2">
              <p className="text-2xl font-bold">{rank}</p>
              <p className="text-sm text-gray-500">YOUR RANK</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-none">
          <CardContent className="flex items-center border-r">
            <FileText className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold">{percentile}%</p>
              <p className="text-sm text-gray-500">PERCENTILE</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-none ">
          <CardContent className="flex items-center ">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-2xl font-bold">
                {correctAnswers}/{totalQuestions}
              </p>
              <p className="text-sm text-gray-500">CORRECT ANSWERS</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
