"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

interface AddPrinterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AddPrinterModal({ isOpen, onClose }: AddPrinterModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    ip: "",
    serial: "",
    access_code: "",
  })

  const [errors, setErrors] = useState({
    ip: "",
    serial: "",
    access_code: "",
  })

  const validateForm = () => {
    const newErrors = {
      ip: "",
      serial: "",
      access_code: "",
    }

    // Validate IP address
    const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/
    if (!formData.ip) {
      newErrors.ip = "IP address is required"
    } else if (!ipPattern.test(formData.ip)) {
      newErrors.ip = "Invalid IP address format"
    }

    // Validate Serial Number
    if (!formData.serial) {
      newErrors.serial = "Serial number is required"
    } else if (formData.serial.length < 8) {
      newErrors.serial = "Serial number is too short"
    }

    // Validate Access Code
    if (!formData.access_code) {
      newErrors.access_code = "Access code is required"
    } else if (formData.access_code.length < 8) {
      newErrors.access_code = "Access code must be at least 8 characters"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
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
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Success message
        toast({
          title: "Printer added",
          description: `Printer with IP ${formData.ip} has been added to your network.`,
        })

        // Reset form and close modal
        setFormData({ ip: "", serial: "", access_code: "" })
        onClose()
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to add printer. Please try again.",
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
                <CardTitle className="text-xl">Add New Printer</CardTitle>
                <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Enter the printer details to add a new device to your network.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="ip" className="text-right">
                    IP Address
                  </Label>
                  <Input
                      id="ip"
                      name="ip"
                      value={formData.ip}
                      onChange={handleChange}
                      placeholder="192.168.33.7"
                      className={`col-span-3 ${errors.ip ? "border-destructive" : ""}`}
                  />
                  {errors.ip && <p className="text-xs text-destructive mt-1 col-start-2 col-span-3">{errors.ip}</p>}
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="serial" className="text-right">
                    Serial Number
                  </Label>
                  <Input
                      id="serial"
                      name="serial"
                      value={formData.serial}
                      onChange={handleChange}
                      placeholder="0409DA470101169"
                      className={`col-span-3 ${errors.serial ? "border-destructive" : ""}`}
                  />
                  {errors.serial && (
                      <p className="text-xs text-destructive mt-1 col-start-2 col-span-3">{errors.serial}</p>
                  )}
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="access_code" className="text-right">
                    Access Code
                  </Label>
                  <Input
                      id="access_code"
                      name="access_code"
                      value={formData.access_code}
                      onChange={handleChange}
                      placeholder="12345678"
                      className={`col-span-3 ${errors.access_code ? "border-destructive" : ""}`}
                  />
                  {errors.access_code && (
                      <p className="text-xs text-destructive mt-1 col-start-2 col-span-3">{errors.access_code}</p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-3 pt-2">
                <Button type="button" onClick={onClose} variant="outline">
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Adding..." : "Add Printer"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
  )
}
