"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface AddInventoryItemModalProps {
    isOpen: boolean
    onClose: () => void
}

export function AddInventoryItemModal({ isOpen, onClose }: AddInventoryItemModalProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [inventoryData, setInventoryData] = useState({
        name: "",
        sku: "",
        stock: "",
        reorderPoint: "",
        location: "",
    })

    const handleChange = (field: string, value: string) => {
        setInventoryData((prev) => ({
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
                title: "Inventory item added",
                description: `${inventoryData.name} has been added to your inventory.`,
            })

            // Reset form and close modal
            setInventoryData({
                name: "",
                sku: "",
                stock: "",
                reorderPoint: "",
                location: "",
            })
            onClose()
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to add inventory item. Please try again.",
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
                            <CardTitle className="text-xl">Add Inventory Item</CardTitle>
                            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <CardDescription>Add a new item to your inventory tracking system.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Product Name
                                </Label>
                                <Input
                                    id="name"
                                    value={inventoryData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    className="col-span-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="sku" className="text-right">
                                    SKU
                                </Label>
                                <Input
                                    id="sku"
                                    value={inventoryData.sku}
                                    onChange={(e) => handleChange("sku", e.target.value)}
                                    className="col-span-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="stock" className="text-right">
                                    Current Stock
                                </Label>
                                <Input
                                    id="stock"
                                    type="number"
                                    min="0"
                                    value={inventoryData.stock}
                                    onChange={(e) => handleChange("stock", e.target.value)}
                                    className="col-span-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="reorderPoint" className="text-right">
                                    Reorder Point
                                </Label>
                                <Input
                                    id="reorderPoint"
                                    type="number"
                                    min="0"
                                    value={inventoryData.reorderPoint}
                                    onChange={(e) => handleChange("reorderPoint", e.target.value)}
                                    className="col-span-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="location" className="text-right">
                                    Location
                                </Label>
                                <Select value={inventoryData.location} onValueChange={(value) => handleChange("location", value)}>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Warehouse A">Warehouse A</SelectItem>
                                        <SelectItem value="Warehouse B">Warehouse B</SelectItem>
                                        <SelectItem value="Storage Room">Storage Room</SelectItem>
                                        <SelectItem value="Production Floor">Production Floor</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end space-x-3 pt-2">
                            <Button type="button" variant="outline" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Adding..." : "Add Inventory Item"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}
