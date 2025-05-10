"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PrinterList } from "@/components/printers/printer-list"
import { FilamentInventory } from "@/components/printers/filament-inventory"
import { MaintenanceSchedule } from "@/components/printers/maintenance-schedule"
import { Plus, RefreshCcw } from "lucide-react"
import { AddPrinterModal } from "@/components/printers/add-printer-modal"

export default function PrintersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddPrinter = (printerData: {
    ip: string
    serial: string
    access_code: string
  }) => {
    console.log("Adding printer:", printerData)
  }

  return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Printers</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 gap-1">
              <RefreshCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>

            <Button size="sm" className="h-9 gap-1" onClick={() => setIsModalOpen(true)}>
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Printer</span>
            </Button>

            <AddPrinterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddPrinter} />
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="printers">Printers</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="filament">Filament</TabsTrigger>
          </TabsList>

          <TabsContent value="printers" className="space-y-4">
            <PrinterList />
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
