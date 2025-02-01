import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Layers } from "lucide-react";
export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Layers />
          <span className="text-[30px] font-bold">WhatBytes</span>
        </div>
        <div className="flex items-center space-x-2 border rounded-[10px] p-2">
          <span className="text-base font-semibold">Rahil Siddique</span>
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Rahil Siddique" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
