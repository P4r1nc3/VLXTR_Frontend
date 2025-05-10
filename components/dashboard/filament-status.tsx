import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Plus } from "lucide-react"

const filaments = [
  {
    id: 1,
    type: "PLA",
    color: "Black",
    brand: "BambuLab",
    remaining: 78,
    weight: "1kg",
    status: "In Use",
    printer: "BambuLab X1C",
  },
  {
    id: 2,
    type: "PETG",
    color: "Blue",
    brand: "BambuLab",
    remaining: 45,
    weight: "1kg",
    status: "In Use",
    printer: "BambuLab P1P",
  },
  {
    id: 3,
    type: "PLA",
    color: "White",
    brand: "BambuLab",
    remaining: 92,
    weight: "1kg",
    status: "In Use",
    printer: "BambuLab X1",
  },
  {
    id: 4,
    type: "PLA",
    color: "Green",
    brand: "BambuLab",
    remaining: 23,
    weight: "1kg",
    status: "In Use",
    printer: "BambuLab P1S",
  },
  {
    id: 5,
    type: "TPU",
    color: "Clear",
    brand: "BambuLab",
    remaining: 100,
    weight: "500g",
    status: "Available",
    printer: "-",
  },
  {
    id: 6,
    type: "ABS",
    color: "Red",
    brand: "BambuLab",
    remaining: 100,
    weight: "1kg",
    status: "Available",
    printer: "-",
  },
  {
    id: 7,
    type: "PLA",
    color: "Silver",
    brand: "BambuLab",
    remaining: 15,
    weight: "1kg",
    status: "Low",
    printer: "-",
  },
]

export function FilamentStatus() {
  const getStatusBadge = (status, remaining) => {
    if (status === "In Use") {
      return <Badge className="bg-blue-500 hover:bg-blue-600">In Use</Badge>
    } else if (status === "Available") {
      return <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
    } else if (status === "Low" || remaining <= 20) {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Low</Badge>
    } else {
      return <Badge>Unknown</Badge>
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Filament Status</CardTitle>
          <CardDescription>Current filament inventory and usage</CardDescription>
        </div>
        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          Add Filament
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filaments.map((filament) => (
            <div key={filament.id} className="grid grid-cols-1 gap-4 sm:grid-cols-6 items-center">
              <div className="flex items-center gap-2 sm:col-span-2">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor:
                      filament.color.toLowerCase() === "black"
                        ? "#000"
                        : filament.color.toLowerCase() === "white"
                          ? "#fff"
                          : filament.color.toLowerCase() === "blue"
                            ? "#3b82f6"
                            : filament.color.toLowerCase() === "green"
                              ? "#22c55e"
                              : filament.color.toLowerCase() === "red"
                                ? "#ef4444"
                                : filament.color.toLowerCase() === "silver"
                                  ? "#94a3b8"
                                  : filament.color.toLowerCase() === "clear"
                                    ? "#e5e7eb"
                                    : "#888",
                    border:
                      filament.color.toLowerCase() === "white" || filament.color.toLowerCase() === "clear"
                        ? "1px solid #e5e7eb"
                        : "none",
                  }}
                ></div>
                <div>
                  <p className="text-sm font-medium">
                    {filament.type} - {filament.color}
                  </p>
                  <p className="text-xs text-muted-foreground">{filament.brand}</p>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Remaining: {filament.remaining}%</span>
                  <span>{filament.weight}</span>
                </div>
                <Progress value={filament.remaining} className="h-2" />
              </div>
              <div className="text-sm">{filament.printer !== "-" ? filament.printer : "Not in use"}</div>
              <div className="flex items-center justify-end gap-2">
                {getStatusBadge(filament.status, filament.remaining)}
                {filament.remaining <= 20 && (
                  <div className="text-yellow-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span className="text-xs">Reorder</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
