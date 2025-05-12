import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ProductList } from "@/components/products/product-list"
import { ProductCategories } from "@/components/products/product-categories"
import { ProductInventory } from "@/components/products/product-inventory"
import { Plus, RefreshCcw, Upload, Download } from "lucide-react"

export default function ProductsPage() {
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
          <Button size="sm" className="h-9 gap-1">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Product</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <ProductList />
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <ProductCategories />
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <ProductInventory />
        </TabsContent>
      </Tabs>
    </div>
  )
}
