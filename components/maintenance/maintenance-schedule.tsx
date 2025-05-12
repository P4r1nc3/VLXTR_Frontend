import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, AlertTriangle, Clock, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const maintenanceTasks = [
  {
    id: 1,
    printer: "BambuLab X1C",
    task: "Nozzle Replacement",
    dueDate: "2023-07-25",
    status: "Upcoming",
    priority: "High",
    assignedTo: "John Doe",
    notes: "Replace with 0.4mm hardened steel nozzle",
  },
  {
    id: 2,
    printer: "BambuLab P1P",
    task: "Belt Tension Check",
    dueDate: "2023-07-20",
    status: "Overdue",
    priority: "Medium",
    assignedTo: "Jane Smith",
    notes: "Check X and Y axis belt tension",
  },
  {
    id: 3,
    printer: "BambuLab X1",
    task: "Lubricate Rails",
    dueDate: "2023-08-05",
    status: "Upcoming",
    priority: "Low",
    assignedTo: "John Doe",
    notes: "Use PTFE lubricant on all linear rails",
  },
  {
    id: 4,
    printer: "BambuLab P1S",
    task: "Clean Build Plate",
    dueDate: "2023-07-18",
    status: "Completed",
    completedDate: "2023-07-18",
    priority: "Medium",
    assignedTo: "Jane Smith",
    notes: "Clean with isopropyl alcohol",
  },
  {
    id: 5,
    printer: "BambuLab X1C Carbon",
    task: "Full Maintenance",
    dueDate: "2023-07-15",
    status: "In Progress",
    priority: "High",
    assignedTo: "John Doe",
    notes: "Complete overhaul including firmware update",
  },
]

export function MaintenanceSchedule() {
  const getStatusBadge = (status: "Completed" | "In Progress" | "Upcoming" | "Overdue") => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
      case "In Progress":
        return <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>
      case "Upcoming":
        return <Badge variant="outline">Upcoming</Badge>
      case "Overdue":
        return <Badge className="bg-red-500 hover:bg-red-600">Overdue</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: "High" | "Medium" | "Low") => {
    switch (priority) {
      case "High":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            High
          </Badge>
        )
      case "Medium":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            Medium
          </Badge>
        )
      case "Low":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Low
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Maintenance Schedule</h2>
        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {maintenanceTasks.map((task) => (
                  <div key={task.id} className="rounded-lg border border-border p-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{task.task}</h3>
                          {getPriorityBadge(task.priority as "High" | "Medium" | "Low")}
                        </div>
                        <p className="text-sm text-muted-foreground">Printer: {task.printer}</p>
                        <p className="text-sm text-muted-foreground">Assigned to: {task.assignedTo}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm">Due: {task.dueDate}</p>
                        </div>
                        {task.completedDate && (
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <p className="text-sm">Completed: {task.completedDate}</p>
                          </div>
                        )}
                        <p className="text-sm text-muted-foreground">{task.notes}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {task.status === "Overdue" ? (
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                          ) : task.status === "In Progress" ? (
                            <Clock className="h-4 w-4 text-blue-500" />
                          ) : task.status === "Completed" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                          )}
                          <p className="text-sm">Status: {getStatusBadge(task.status as "Upcoming" | "Overdue" | "Completed" | "In Progress")}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        {task.status !== "Completed" && (
                          <Button variant="outline" size="sm">
                            Mark Complete
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {maintenanceTasks
                  .filter((task) => task.status === "Upcoming")
                  .map((task) => (
                    <div key={task.id} className="rounded-lg border border-border p-4">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{task.task}</h3>
                            {getPriorityBadge(task.priority as "High" | "Medium" | "Low")}
                          </div>
                          <p className="text-sm text-muted-foreground">Printer: {task.printer}</p>
                          <p className="text-sm text-muted-foreground">Assigned to: {task.assignedTo}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">Due: {task.dueDate}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{task.notes}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">Status: {getStatusBadge(task.status as "Upcoming" | "Overdue" | "Completed" | "In Progress")}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Mark Complete
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar content for other tabs (overdue, completed) would go here */}
        <TabsContent value="overdue" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Showing overdue maintenance tasks
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Showing completed maintenance tasks
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
