"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface AddMaintenanceModalProps {
    isOpen: boolean
    onClose: () => void
}

export function AddMaintenanceModal({ isOpen, onClose }: AddMaintenanceModalProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [maintenanceData, setMaintenanceData] = useState({
        task: "",
        printer: "",
        priority: "",
        assignedTo: "",
        notes: "",
    })

    const handleChange = (field: string, value: string) => {
        setMaintenanceData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Success message
            toast({
                title: "Maintenance task added",
                description: `${maintenanceData.task} has been added to your maintenance schedule.`,
            })

            // Reset form and close modal
            setMaintenanceData({
                task: "",
                printer: "",
                priority: "",
                assignedTo: "",
                notes: "",
            })
            onClose()
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to add maintenance task. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <Card className="border shadow-lg">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">Add Maintenance Task</CardTitle>
                            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <CardDescription>Create a new maintenance task for your 3D printer.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="task" className="text-right">
                                    Task
                                </Label>
                                <Input
                                    id="task"
                                    value={maintenanceData.task}
                                    onChange={(e) => handleChange("task", e.target.value)}
                                    placeholder="Nozzle Replacement"
                                    className="col-span-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="printer" className="text-right">
                                    Printer
                                </Label>
                                <Select value={maintenanceData.printer} onValueChange={(value) => handleChange("printer", value)}>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select printer" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="x1c">BambuLab X1C</SelectItem>
                                        <SelectItem value="p1p">BambuLab P1P</SelectItem>
                                        <SelectItem value="x1">BambuLab X1</SelectItem>
                                        <SelectItem value="p1s">BambuLab P1S</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="priority" className="text-right">
                                    Priority
                                </Label>
                                <Select value={maintenanceData.priority} onValueChange={(value) => handleChange("priority", value)}>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="low">Low</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="assignedTo" className="text-right">
                                    Assigned To
                                </Label>
                                <Input
                                    id="assignedTo"
                                    value={maintenanceData.assignedTo}
                                    onChange={(e) => handleChange("assignedTo", e.target.value)}
                                    placeholder="John Doe"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="notes" className="text-right">
                                    Notes
                                </Label>
                                <Textarea
                                    id="notes"
                                    value={maintenanceData.notes}
                                    onChange={(e) => handleChange("notes", e.target.value)}
                                    placeholder="Additional details..."
                                    className="col-span-3"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end space-x-3 pt-2">
                            <Button type="button" variant="outline" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Adding..." : "Add Task"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}
