import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PrinterList } from "@/components/printers/printer-list"
import { FilamentInventory } from "@/components/printers/filament-inventory"
import { MaintenanceSchedule } from "@/components/printers/maintenance-schedule"
import { RefreshCcw } from "lucide-react"
import { AddPrinterButton } from "@/components/printers/addPrinter";

export default function PrintersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Printers</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1">
            <RefreshCcw className="h-4 w-4" />
            <span className="hidden sm:inline">Refresh</span>
          </Button>
          <AddPrinterButton />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Printers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="idle">Idle</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="filament">Filament</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <PrinterList />
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Printers</CardTitle>
              <CardDescription>Printers currently running print jobs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10 text-muted-foreground">Active printers will be displayed here</div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="idle" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Idle Printers</CardTitle>
              <CardDescription>Printers ready for new print jobs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10 text-muted-foreground">Idle printers will be displayed here</div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <MaintenanceSchedule />
        </TabsContent>

        <TabsContent value="filament" className="space-y-4">
          <FilamentInventory />
        </TabsContent>
      </Tabs>
    </div>
  )
}
