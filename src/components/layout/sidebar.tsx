import { Button } from "@/components/ui/button"
import { BarChart3, BookOpen, GraduationCap } from "lucide-react"

interface SidebarProps {
  activeComponent: string
  setActiveComponent: (component: string) => void
}

export function Sidebar({ activeComponent, setActiveComponent }: SidebarProps) {
  const menuItems = [
    { name: "Dashboard", icon: BarChart3, id: "dashboard" },
    { name: "Skill Test", icon: BookOpen, id: "skillTest" },
    { name: "Internship", icon: GraduationCap, id: "internship" },
  ]

  return (
    <div className="w-64 bg-background border-r h-full">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeComponent === item.id ? "secondary" : "ghost"}
            className="w-full justify-start text-base font-semibold"
            onClick={() => setActiveComponent(item.id)}
          >
            <item.icon className="mr-2 h-12 w-12" />
            {item.name}
          </Button>
        ))}
      </nav>
    </div>
  )
}

