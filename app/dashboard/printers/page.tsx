"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, RefreshCcw } from "lucide-react"
import { AddPrinterModal } from "@/components/printers/add-printer-modal"
import { PrinterList } from "@/components/printers/printer-list"

export default function PrintersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddPrinter = (printerData: {
    ip: string
    serial: string
    access_code: string
  }) => {
    console.log("Adding printer:", printerData)
    // Here you would typically call an API to add the printer
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

        <PrinterList />
      </div>
  )
}
