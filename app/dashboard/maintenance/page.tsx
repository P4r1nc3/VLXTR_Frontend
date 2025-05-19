"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MaintenanceList } from "@/components/maintenance/maintenance-list"
import { AddMaintenanceModal } from "@/components/maintenance/add-maintenance-modal"
import { Filter, Plus, RefreshCcw } from "lucide-react"

export default function MaintenancePage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Maintenance</h1>
                    <p className="text-muted-foreground">Plan and track printer maintenance activities</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9 gap-1">
                        <Filter className="h-4 w-4" />
                        <span className="hidden sm:inline">Filter</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-9 gap-1">
                        <RefreshCcw className="h-4 w-4" />
                        <span className="hidden sm:inline">Refresh</span>
                    </Button>
                    <Button size="sm" className="h-9 gap-1" onClick={() => setIsModalOpen(true)}>
                        <Plus className="h-4 w-4" />
                        <span className="hidden sm:inline">Add Maintenance</span>
                    </Button>
                    <AddMaintenanceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
            <MaintenanceList />
        </div>
    )
}
