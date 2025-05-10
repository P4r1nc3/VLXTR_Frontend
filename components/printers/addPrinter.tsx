"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { AddPrinterModal } from "@/components/printers/add-printer-modal"

export function AddPrinterButton() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddPrinter = (printerData: {
        ip: string
        serial: string
        access_code: string
    }) => {
        console.log("Adding printer:", printerData)
    }

    return (
        <>
            <Button size="sm" className="h-9 gap-1" onClick={() => setIsModalOpen(true)}>
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Add Printer</span>
            </Button>

            <AddPrinterModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddPrinter}
            />
        </>
    )
}
