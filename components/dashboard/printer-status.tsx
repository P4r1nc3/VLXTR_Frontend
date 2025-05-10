"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pause, Play, StopCircle, Eye } from "lucide-react"

const printers = [
  {
    id: 1,
    name: "BambuLab X1C",
    status: "Printing",
    model: "Vase Mode Planter",
    progress: 68,
    timeRemaining: "1h 23m",
    filament: "PLA - Black",
    filamentRemaining: "78%",
  },
  {
    id: 2,
    name: "BambuLab P1P",
    status: "Printing",
    model: "Phone Stand",
    progress: 32,
    timeRemaining: "2h 45m",
    filament: "PETG - Blue",
    filamentRemaining: "45%",
  },
  {
    id: 3,
    name: "BambuLab X1",
    status: "Idle",
    model: "-",
    progress: 0,
    timeRemaining: "-",
    filament: "PLA - White",
    filamentRemaining: "92%",
  },
  {
    id: 4,
    name: "BambuLab P1S",
    status: "Paused",
    model: "Desk Organizer",
    progress: 87,
    timeRemaining: "0h 45m",
    filament: "PLA - Green",
    filamentRemaining: "23%",
  },
  {
    id: 5,
    name: "BambuLab X1C Carbon",
    status: "Maintenance",
    model: "-",
    progress: 0,
    timeRemaining: "-",
    filament: "-",
    filamentRemaining: "-",
  },
]

export function PrinterStatus() {
  const getStatusColor = (status) => {
    switch (status) {
      case "Printing":
        return "bg-green-500"
      case "Paused":
        return "bg-yellow-500"
      case "Idle":
        return "bg-blue-500"
      case "Maintenance":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Printing":
        return <Badge className="bg-green-500 hover:bg-green-600">Printing</Badge>
      case "Paused":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Paused</Badge>
      case "Idle":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Idle</Badge>
      case "Maintenance":
        return <Badge className="bg-red-500 hover:bg-red-600">Maintenance</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {printers.map((printer) => (
        <div key={printer.id} className="rounded-lg border border-border p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor(printer.status)}`}></div>
                <h3 className="font-medium">{printer.name}</h3>
                {getStatusBadge(printer.status)}
              </div>
              <p className="text-sm text-muted-foreground">
                {printer.status === "Printing" || printer.status === "Paused" ? (
                  <>Printing: {printer.model}</>
                ) : (
                  <>Status: {printer.status}</>
                )}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {printer.status === "Printing" && (
                <>
                  <Button variant="outline" size="icon">
                    <Pause className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <StopCircle className="h-4 w-4" />
                  </Button>
                </>
              )}
              {printer.status === "Paused" && (
                <>
                  <Button variant="outline" size="icon">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <StopCircle className="h-4 w-4" />
                  </Button>
                </>
              )}
              <Button variant="outline" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {(printer.status === "Printing" || printer.status === "Paused") && (
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress: {printer.progress}%</span>
                <span>Time remaining: {printer.timeRemaining}</span>
              </div>
              <Progress value={printer.progress} className="h-2" />
              <div className="flex items-center justify-between text-sm">
                <span>Filament: {printer.filament}</span>
                <span>Remaining: {printer.filamentRemaining}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
