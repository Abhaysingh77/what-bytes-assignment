"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuickStats } from "@/components/dashboard/quick-stats";
import { SyllabusAnalysis } from "@/components/dashboard/syllabus-analysis";
import { ComparisonGraph } from "@/components/dashboard/comparison-graph";
import { AnalysisChart } from "@/components/dashboard/analysis-chart";
import { UpdateScoresModal } from "@/components/dashboard/update-scores-modal";
import Image from "next/image";
const topics = [
  { name: "HTML Tools, Forms, History", progress: 80, color: "bg-blue-500" },
  { name: "Tags & References in HTML", progress: 60, color: "bg-orange-500" },
  { name: "Tables & References in HTML", progress: 24, color: "bg-red-500" },
  { name: "Tables & CSS Basics", progress: 96, color: "bg-green-500" },
];

export function SkillTestPage() {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [stats, setStats] = useState({
    rank: 1,
    percentile: 30,
    averagePercentile: 72,
    correctAnswers: 10,
    totalQuestions: 15,
  });

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">Skill Test</h1>
      <div className="xl:flex items-stretch w-full gap-3">
        <div className="xl:w-[50%]">
          <div className="mb-6 flex items-center justify-between border p-4 rounded-md gap-4">
            <Image src="/html.png" height={50} width={50} alt="HTML logo" />
            <div>
              <p className="text-lg font-semibold">
                Hyper Text Markup Language
              </p>
              <p className="text-sm text-muted-foreground">
                Questions: {stats.totalQuestions} | Duration: 15 mins |
                Submitted on 5 June 2021
              </p>
            </div>
            <Button
              className="bg-[#0088FF]"
              onClick={() => setIsUpdateModalOpen(true)}
            >
              Update
            </Button>
          </div>
          <QuickStats {...stats} />
          <ComparisonGraph
            percentile={stats.percentile}
            averagePercentile={stats.averagePercentile}
          />
        </div>
        <div className="xl:w-[50%] flex flex-col gap-6">
          <SyllabusAnalysis topics={topics} />
          <AnalysisChart
            score={stats.correctAnswers}
            total={stats.totalQuestions}
          />
        </div>
      </div>

      <UpdateScoresModal
        open={isUpdateModalOpen}
        onOpenChange={setIsUpdateModalOpen}
        onSubmit={(values) => {
          setStats({
            ...stats,
            rank: Number.parseInt(values.rank),
            percentile: Number.parseInt(values.percentile),
            correctAnswers: Number.parseInt(values.currentScore),
          });
          setIsUpdateModalOpen(false);
        }}
      />
    </div>
  );
}
