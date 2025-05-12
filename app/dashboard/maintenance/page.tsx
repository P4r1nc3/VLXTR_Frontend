"use client"

import { Button } from "@/components/ui/button"
import { MaintenanceSchedule } from "@/components/maintenance/maintenance-schedule"
import { Plus, RefreshCcw } from "lucide-react"

export default function MaintenancePage() {
  return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Maintenance Schedule</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 gap-1">
              <RefreshCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>

            <Button size="sm" className="h-9 gap-1">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Schedule Maintenance</span>
            </Button>
          </div>
        </div>

        <MaintenanceSchedule />
      </div>
  )
}
