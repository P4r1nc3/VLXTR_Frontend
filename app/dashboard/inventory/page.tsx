"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {Filter, Plus, RefreshCcw} from "lucide-react"
import { InventoryList } from "@/components/inventory/inventory-list"
import { AddInventoryItemModal } from "@/components/inventory/add-inventory-item-modal"

export default function InventoryPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
                    <p className="text-muted-foreground">Manage product stock levels and inventory tracking</p>
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
                        <span className="hidden sm:inline">Add Item</span>
                    </Button>
                    <AddInventoryItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </div>
            </div>
            <InventoryList />
        </div>
    )
}
