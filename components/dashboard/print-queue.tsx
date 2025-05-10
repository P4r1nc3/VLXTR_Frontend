import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, Play, Trash2 } from "lucide-react"

const queueItems = [
  {
    id: 1,
    name: "Desk Organizer",
    customer: "Alice Johnson",
    orderId: "ORD-001",
    estimatedTime: "3h 15m",
    priority: "High",
    status: "Ready",
    printer: "BambuLab X1C",
  },
  {
    id: 2,
    name: "Phone Stand",
    customer: "Bob Smith",
    orderId: "ORD-002",
    estimatedTime: "1h 45m",
    priority: "Medium",
    status: "Ready",
    printer: "BambuLab P1P",
  },
  {
    id: 3,
    name: "Vase Mode Planter",
    customer: "Charlie Brown",
    orderId: "ORD-003",
    estimatedTime: "4h 30m",
    priority: "Low",
    status: "Waiting",
    printer: "Unassigned",
  },
  {
    id: 4,
    name: "Headphone Stand",
    customer: "Diana Martinez",
    orderId: "ORD-004",
    estimatedTime: "2h 50m",
    priority: "Medium",
    status: "Waiting",
    printer: "Unassigned",
  },
  {
    id: 5,
    name: "Cable Clips",
    customer: "Ethan Wilson",
    orderId: "ORD-005",
    estimatedTime: "0h 45m",
    priority: "High",
    status: "Ready",
    printer: "BambuLab X1",
  },
]

export function PrintQueue() {
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return <Badge className="bg-red-500 hover:bg-red-600">High</Badge>
      case "Medium":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Medium</Badge>
      case "Low":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Low</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Ready":
        return <Badge className="bg-green-500 hover:bg-green-600">Ready</Badge>
      case "Waiting":
        return <Badge variant="outline">Waiting</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Print Queue</CardTitle>
        <CardDescription>Manage your upcoming print jobs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {queueItems.map((item) => (
            <div key={item.id} className="rounded-lg border border-border p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{item.name}</h3>
                    {getPriorityBadge(item.priority)}
                  </div>
                  <p className="text-sm text-muted-foreground">Order: {item.orderId}</p>
                  <p className="text-sm text-muted-foreground">Customer: {item.customer}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Estimated Time</p>
                  <p className="text-sm">{item.estimatedTime}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Status</p>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(item.status)}
                    <span className="text-sm">{item.printer}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="outline" size="icon">
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                  {item.status === "Ready" && (
                    <Button variant="outline" size="icon" className="text-green-500">
                      <Play className="h-4 w-4" />
                    </Button>
                  )}
                  <Button variant="outline" size="icon" className="text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
