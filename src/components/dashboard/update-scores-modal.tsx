"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
interface UpdateScoresModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: {
    rank: string;
    percentile: string;
    currentScore: string;
  }) => void;
}

export function UpdateScoresModal({
  open,
  onOpenChange,
  onSubmit,
}: UpdateScoresModalProps) {
  const [values, setValues] = useState({
    rank: "",
    percentile: "",
    currentScore: "",
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[80vw]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between mt-4">
            <span className="text-[20px]] font-bold">Update scores</span>
            <Image src="/html.png" alt="skill logo" height={50} width={40} />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2 flex items-center justify-between">
            <Label htmlFor="rank" className="text-base font-medium">
              Update your <span className="font-semibold">Rank</span>
            </Label>
            <div>
              <Input
                id="rank"
                placeholder="Enter rank"
                value={values.rank}
                onChange={(e) => setValues({ ...values, rank: e.target.value })}
              />
              {typeof values.rank === "string" && Number(values.rank) < 1 && (
                <p className="text-xs text-red-500">
                  required | should be number
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2 flex items-center justify-between">
            <Label htmlFor="percentile" className="text-base font-medium">Update your <span className="font-semibold">Percentile</span></Label>
            <div>
              <Input
                id="percentile"
                placeholder="Enter percentile"
                value={values.percentile}
                onChange={(e) =>
                  setValues({ ...values, percentile: e.target.value })
                }
              />
              {(Number(values.percentile) < 0 ||
                Number(values.percentile) > 100) && (
                <p className="text-xs text-red-500">
                  required | should be 0-100
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2 flex items-center justify-between">
            <Label htmlFor="score" className="text-base font-medium">Update your <span className="font-semibold">Current Score <br /> (out of 15)</span></Label>
            <div>
              <Input
                id="score"
              
                placeholder="Enter current score"
                value={values.currentScore}
                onChange={(e) =>
                  setValues({ ...values, currentScore: e.target.value })
                }
              />
              {(Number(values.currentScore) < 0 ||
                Number(values.currentScore) > 15) && (
                <p className="text-xs text-red-500">
                  required | should be 0-15
                </p>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            cancel
          </Button>
          <Button onClick={() => onSubmit(values)}>save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
