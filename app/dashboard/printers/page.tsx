"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PrinterList } from "@/components/printers/printer-list"
import { Plus, RefreshCcw } from "lucide-react"
import { AddPrinterModal } from "@/components/printers/add-printer-modal"

export default function PrintersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [statusFilter, setStatusFilter] = useState("all")

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

        <Tabs defaultValue="all" className="space-y-4" onValueChange={setStatusFilter}>
          <TabsList>
            <TabsTrigger value="all">All Printers</TabsTrigger>
            <TabsTrigger value="Printing">Printing</TabsTrigger>
            <TabsTrigger value="Idle">Idle</TabsTrigger>
            <TabsTrigger value="Paused">Paused</TabsTrigger>
            <TabsTrigger value="Maintenance">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <PrinterList statusFilter="all" />
          </TabsContent>
          <TabsContent value="Printing" className="space-y-4">
            <PrinterList statusFilter="Printing" />
          </TabsContent>
          <TabsContent value="Idle" className="space-y-4">
            <PrinterList statusFilter="Idle" />
          </TabsContent>
          <TabsContent value="Paused" className="space-y-4">
            <PrinterList statusFilter="Paused" />
          </TabsContent>
          <TabsContent value="Maintenance" className="space-y-4">
            <PrinterList statusFilter="Maintenance" />
          </TabsContent>
        </Tabs>
      </div>
  )
}
