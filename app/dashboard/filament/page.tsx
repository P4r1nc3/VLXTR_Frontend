"use client"

import { useState } from "react"
import { FilamentList } from "@/components/filament/filament-list"
import { AddFilamentModal } from "@/components/filament/add-filament-modal"
import { Button } from "@/components/ui/button"
import {Plus, RefreshCcw} from "lucide-react"

export default function FilamentPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Filament</h1>
                    <p className="text-muted-foreground">Track and manage your printing materials</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9 gap-1">
                        <RefreshCcw className="h-4 w-4" />
                        <span className="hidden sm:inline">Refresh</span>
                    </Button>

                    <Button size="sm" className="h-9 gap-1" onClick={() => setIsModalOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" /> Add Filament
                    </Button>

                    <AddFilamentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={() => {}} />
                </div>
            </div>

            <FilamentList />
        </div>
    )
}
