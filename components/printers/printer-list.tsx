import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pause, Play, StopCircle, Eye, Settings } from "lucide-react"

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
    temperature: {
      nozzle: 215,
      bed: 60,
      chamber: 32,
    },
    lastMaintenance: "2023-06-15",
    totalPrints: 124,
    location: "Main Office",
    image: "/placeholder.svg?height=200&width=200",
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
    temperature: {
      nozzle: 240,
      bed: 80,
      chamber: 35,
    },
    lastMaintenance: "2023-07-01",
    totalPrints: 87,
    location: "Main Office",
    image: "/placeholder.svg?height=200&width=200",
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
    temperature: {
      nozzle: 25,
      bed: 25,
      chamber: 25,
    },
    lastMaintenance: "2023-06-20",
    totalPrints: 156,
    location: "Workshop",
    image: "/placeholder.svg?height=200&width=200",
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
    temperature: {
      nozzle: 180,
      bed: 60,
      chamber: 30,
    },
    lastMaintenance: "2023-07-10",
    totalPrints: 62,
    location: "Workshop",
    image: "/placeholder.svg?height=200&width=200",
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
    temperature: {
      nozzle: 25,
      bed: 25,
      chamber: 25,
    },
    lastMaintenance: "2023-07-15",
    totalPrints: 98,
    location: "Main Office",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function PrinterList() {
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
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {printers.map((printer) => (
        <Card key={printer.id} className="overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${getStatusColor(printer.status)}`}></div>
                <CardTitle className="text-lg">{printer.name}</CardTitle>
              </div>
              {getStatusBadge(printer.status)}
            </div>
            <CardDescription>
              {printer.status === "Printing" || printer.status === "Paused" ? (
                <>Printing: {printer.model}</>
              ) : (
                <>Status: {printer.status}</>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <img
                src={printer.image || "/placeholder.svg"}
                alt={`Preview of ${printer.name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 space-y-4">
              {(printer.status === "Printing" || printer.status === "Paused") && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress: {printer.progress}%</span>
                    <span>Time remaining: {printer.timeRemaining}</span>
                  </div>
                  <Progress value={printer.progress} className="h-2" />
                </div>
              )}
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Nozzle</p>
                  <p className="font-medium">{printer.temperature.nozzle}°C</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Bed</p>
                  <p className="font-medium">{printer.temperature.bed}°C</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Chamber</p>
                  <p className="font-medium">{printer.temperature.chamber}°C</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{printer.location}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Total Prints</p>
                  <p className="font-medium">{printer.totalPrints}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Filament</p>
                <p className="text-sm font-medium">{printer.filament}</p>
                {printer.filamentRemaining !== "-" && <p className="text-sm">Remaining: {printer.filamentRemaining}</p>}
              </div>

              {/* Improved responsive button layout */}
              <div className="flex flex-wrap items-center gap-2">
                {printer.status === "Printing" && (
                  <>
                    <Button variant="outline" size="sm" className="flex-1 min-w-[80px] text-xs sm:text-sm">
                      <Pause className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      Pause
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 min-w-[80px] text-xs sm:text-sm">
                      <StopCircle className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      Stop
                    </Button>
                  </>
                )}
                {printer.status === "Paused" && (
                  <>
                    <Button variant="outline" size="sm" className="flex-1 min-w-[80px] text-xs sm:text-sm">
                      <Play className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      Resume
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 min-w-[80px] text-xs sm:text-sm">
                      <StopCircle className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      Stop
                    </Button>
                  </>
                )}
                {printer.status === "Idle" && (
                  <Button variant="outline" size="sm" className="flex-1 min-w-[80px] text-xs sm:text-sm">
                    <Play className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                    Start Print
                  </Button>
                )}
                <Button variant="outline" size="sm" className="flex-1 min-w-[80px] text-xs sm:text-sm">
                  <Eye className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  View
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
