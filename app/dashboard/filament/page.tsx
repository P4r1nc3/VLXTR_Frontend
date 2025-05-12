"use client"

import { Button } from "@/components/ui/button"
import { FilamentInventory } from "@/components/filament/filament-inventory"
import { Plus, RefreshCcw } from "lucide-react"
import { useState } from "react"
import { AddFilamentModal } from "@/components/filament/add-filament-modal"

export default function FilamentPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddFilament = (filamentData: {
        type: string
        color: string
        weight: string
        manufacturer: string
    }) => {
        console.log("Adding filament:", filamentData)
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Filament Inventory</h1>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9 gap-1">
                        <RefreshCcw className="h-4 w-4" />
                        <span className="hidden sm:inline">Refresh</span>
                    </Button>

                    <Button size="sm" className="h-9 gap-1" onClick={() => setIsModalOpen(true)}>
                        <Plus className="h-4 w-4" />
                        <span className="hidden sm:inline">Add Filament</span>
                    </Button>

                    <AddFilamentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddFilament} />
                </div>
            </div>

            <FilamentInventory />
        </div>
    )
}
