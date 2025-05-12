"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Plus, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function AddMaintenanceModal() {
    const [date, setDate] = useState<Date>()
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    return (
        <>
            <Button size="sm" className="h-9 gap-1" onClick={handleOpen}>
                <Plus className="mr-2 h-4 w-4" />
                Add Maintenance
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
                    <div className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                        <Card className="border shadow-lg">
                            <CardHeader className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-xl">Add Maintenance Task</CardTitle>
                                    <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8 rounded-full">
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                                <CardDescription>Create a new maintenance task for your 3D printer.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="task" className="text-right">
                                        Task
                                    </Label>
                                    <Input id="task" placeholder="Nozzle Replacement" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="printer" className="text-right">
                                        Printer
                                    </Label>
                                    <Select>
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
                                    <Label htmlFor="due-date" className="text-right">
                                        Due Date
                                    </Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "col-span-3 justify-start text-left font-normal",
                                                    !date && "text-muted-foreground",
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="priority" className="text-right">
                                        Priority
                                    </Label>
                                    <Select>
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
                                    <Label htmlFor="assigned" className="text-right">
                                        Assigned To
                                    </Label>
                                    <Input id="assigned" placeholder="John Doe" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="notes" className="text-right">
                                        Notes
                                    </Label>
                                    <Textarea id="notes" placeholder="Additional details..." className="col-span-3" />
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end space-x-3 pt-2">
                                <Button type="button" onClick={handleClose} variant="outline">
                                    Cancel
                                </Button>
                                <Button type="submit">Add Task</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            )}
        </>
    )
}
