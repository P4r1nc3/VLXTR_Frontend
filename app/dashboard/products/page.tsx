"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProductList } from "@/components/products/product-list"
import { AddProductModal } from "@/components/products/add-product-modal"
import { Plus, RefreshCcw } from "lucide-react"

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground">Browse and manage your product catalog</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 gap-1">
              <RefreshCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button size="sm" className="h-9 gap-1" onClick={() => setIsModalOpen(true)}>
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Product</span>
            </Button>
          </div>
        </div>

        <ProductList />

        <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
  )
}
