"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

interface AddFilamentModalProps {
    isOpen: boolean
    onClose: () => void
}

const filamentTypes = ["PLA", "PETG", "ABS", "TPU", "HIPS", "Nylon", "PC", "ASA", "PVA"]
const filamentColors = [
    "Black",
    "White",
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Gray",
    "Silver",
    "Gold",
    "Clear",
]

export function AddFilamentModal({ isOpen, onClose }: AddFilamentModalProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        brand: "",
        type: "PLA",
        color: "Black",
        weight: "",
        cost: "",
    })

    const [errors, setErrors] = useState({
        brand: "",
        weight: "",
        cost: "",
    })

    const validateForm = () => {
        const newErrors = {
            brand: "",
            weight: "",
            cost: "",
        }

        // Validate Brand
        if (!formData.brand) {
            newErrors.brand = "Brand is required"
        }

        // Validate Weight
        if (!formData.weight) {
            newErrors.weight = "Weight is required"
        } else if (!/^\d+$/.test(formData.weight)) {
            newErrors.weight = "Weight must be a number in grams"
        }

        // Validate Cost
        if (!formData.cost) {
            newErrors.cost = "Cost is required"
        } else if (!/^\$?\d+(\.\d{1,2})?$/.test(formData.cost)) {
            newErrors.cost = "Invalid cost format (e.g. $29.99 or 29.99)"
        }

        setErrors(newErrors)
        return !Object.values(newErrors).some((error) => error)
    }

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            setIsLoading(true)

            try {
                // Format cost to include $ if not already present
                const formattedCost = formData.cost.startsWith("$") ? formData.cost : `$${formData.cost}`

                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 1000))

                // Success message
                toast({
                    title: "Filament added",
                    description: `${formData.type} - ${formData.color} has been added to your filament inventory.`,
                })

                // Reset form and close modal
                setFormData({
                    brand: "",
                    type: "PLA",
                    color: "Black",
                    weight: "",
                    cost: "",
                })
                onClose()
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Failed to add filament. Please try again.",
                    variant: "destructive",
                })
            } finally {
                setIsLoading(false)
            }
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <Card className="border shadow-lg">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">Add New Filament</CardTitle>
                            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        <CardDescription>Enter the filament details to add it to your inventory.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="brand" className="text-right">
                                    Brand
                                </Label>
                                <Input
                                    id="brand"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={(e) => handleChange("brand", e.target.value)}
                                    placeholder="BambuLab"
                                    className={`col-span-3 ${errors.brand ? "border-destructive" : ""}`}
                                />
                                {errors.brand && <p className="text-xs text-destructive mt-1 col-start-2 col-span-3">{errors.brand}</p>}
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="type" className="text-right">
                                    Filament Type
                                </Label>
                                <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {filamentTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="color" className="text-right">
                                    Color
                                </Label>
                                <Select value={formData.color} onValueChange={(value) => handleChange("color", value)}>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select color" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {filamentColors.map((color) => (
                                            <SelectItem key={color} value={color}>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="h-4 w-4 rounded-full"
                                                        style={{
                                                            backgroundColor:
                                                                color.toLowerCase() === "black"
                                                                    ? "#000"
                                                                    : color.toLowerCase() === "white"
                                                                        ? "#fff"
                                                                        : color.toLowerCase() === "blue"
                                                                            ? "#3b82f6"
                                                                            : color.toLowerCase() === "green"
                                                                                ? "#22c55e"
                                                                                : color.toLowerCase() === "red"
                                                                                    ? "#ef4444"
                                                                                    : color.toLowerCase() === "yellow"
                                                                                        ? "#eab308"
                                                                                        : color.toLowerCase() === "orange"
                                                                                            ? "#f97316"
                                                                                            : color.toLowerCase() === "purple"
                                                                                                ? "#9333ea"
                                                                                                : color.toLowerCase() === "pink"
                                                                                                    ? "#ec4899"
                                                                                                    : color.toLowerCase() === "brown"
                                                                                                        ? "#a16207"
                                                                                                        : color.toLowerCase() === "gray"
                                                                                                            ? "#6b7280"
                                                                                                            : color.toLowerCase() === "silver"
                                                                                                                ? "#94a3b8"
                                                                                                                : color.toLowerCase() === "gold"
                                                                                                                    ? "#eab308"
                                                                                                                    : color.toLowerCase() === "clear"
                                                                                                                        ? "#e5e7eb"
                                                                                                                        : "#888",
                                                            border:
                                                                color.toLowerCase() === "white" || color.toLowerCase() === "clear"
                                                                    ? "1px solid #e5e7eb"
                                                                    : "none",
                                                        }}
                                                    ></div>
                                                    {color}
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="weight" className="text-right">
                                    Weight (grams)
                                </Label>
                                <Input
                                    id="weight"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={(e) => handleChange("weight", e.target.value)}
                                    placeholder="1000"
                                    className={`col-span-3 ${errors.weight ? "border-destructive" : ""}`}
                                />
                                {errors.weight && (
                                    <p className="text-xs text-destructive mt-1 col-start-2 col-span-3">{errors.weight}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="cost" className="text-right">
                                    Cost
                                </Label>
                                <Input
                                    id="cost"
                                    name="cost"
                                    value={formData.cost}
                                    onChange={(e) => handleChange("cost", e.target.value)}
                                    placeholder="29.99"
                                    className={`col-span-3 ${errors.cost ? "border-destructive" : ""}`}
                                />
                                {errors.cost && <p className="text-xs text-destructive mt-1 col-start-2 col-span-3">{errors.cost}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end space-x-3 pt-2">
                            <Button type="button" onClick={onClose} variant="outline">
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Adding..." : "Add Filament"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}
