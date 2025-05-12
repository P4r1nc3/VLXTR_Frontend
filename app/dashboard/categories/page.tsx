"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, RefreshCcw } from "lucide-react"
import { CategoryList } from "@/components/categories/category-list"
import { AddCategoryModal } from "@/components/categories/add-category-modal"

export default function CategoriesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
                    <p className="text-muted-foreground">Manage product categories and classifications</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9 gap-1">
                        <RefreshCcw className="h-4 w-4" />
                        <span className="hidden sm:inline">Refresh</span>
                    </Button>
                    <Button size="sm" className="h-9 gap-1" onClick={() => setIsModalOpen(true)}>
                        <Plus className="h-4 w-4" />
                        <span className="hidden sm:inline">Add Category</span>
                    </Button>
                </div>
            </div>

            <CategoryList />

            <AddCategoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}
