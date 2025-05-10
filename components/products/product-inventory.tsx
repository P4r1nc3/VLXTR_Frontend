import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Plus } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const inventory: {
  id: number;
  name: string;
  sku: string;
  stock: number;
  reorderPoint: number;
  status: "In Stock" | "Out of Stock" | "Low Stock";
  location: string;
}[] = [
  {
    id: 1,
    name: "Desk Organizer",
    sku: "DO-001",
    stock: 45,
    reorderPoint: 20,
    status: "In Stock",
    location: "Warehouse A",
  },
  {
    id: 2,
    name: "Phone Stand",
    sku: "PS-002",
    stock: 78,
    reorderPoint: 25,
    status: "In Stock",
    location: "Warehouse A",
  },
  {
    id: 3,
    name: "Vase Mode Planter",
    sku: "VP-003",
    stock: 32,
    reorderPoint: 15,
    status: "In Stock",
    location: "Warehouse B",
  },
  {
    id: 4,
    name: "Headphone Stand",
    sku: "HS-004",
    stock: 54,
    reorderPoint: 20,
    status: "In Stock",
    location: "Warehouse A",
  },
  {
    id: 5,
    name: "Cable Clips",
    sku: "CC-005",
    stock: 120,
    reorderPoint: 50,
    status: "In Stock",
    location: "Warehouse B",
  },
  {
    id: 6,
    name: "Tablet Holder",
    sku: "TH-006",
    stock: 0,
    reorderPoint: 15,
    status: "Out of Stock",
    location: "Warehouse A",
  },
  {
    id: 7,
    name: "Desk Lamp Base",
    sku: "DL-007",
    stock: 12,
    reorderPoint: 15,
    status: "Low Stock",
    location: "Warehouse B",
  },
  {
    id: 8,
    name: "Coasters (Set of 4)",
    sku: "CO-008",
    stock: 42,
    reorderPoint: 20,
    status: "In Stock",
    location: "Warehouse A",
  },
]

export function ProductInventory() {
  const getStatusBadge = (status: "In Stock" | "Low Stock" | "Out of Stock") => {
    switch (status) {
      case "In Stock":
        return <Badge className="bg-green-500 hover:bg-green-600">In Stock</Badge>
      case "Low Stock":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Low Stock</Badge>
      case "Out of Stock":
        return <Badge className="bg-red-500 hover:bg-red-600">Out of Stock</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const getStockPercentage = (stock: number, reorderPoint: number) => {
    // Calculate percentage based on reorder point (100% = 2x reorder point)
    const percentage = (stock / (reorderPoint * 2)) * 100
    return Math.min(percentage, 100) // Cap at 100%
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Inventory Management</h2>
        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          Add Inventory
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
          <CardDescription>Manage your product stock levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventory.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 gap-4 sm:grid-cols-6 items-center border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">SKU: {item.sku}</p>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Stock: {item.stock} units</span>
                    <span>Reorder at: {item.reorderPoint}</span>
                  </div>
                  <Progress value={getStockPercentage(item.stock, item.reorderPoint)} className="h-2" />
                </div>
                <div className="text-sm">{item.location}</div>
                <div className="flex items-center justify-end gap-2">
                  {getStatusBadge(item.status)}
                  {(item.status === "Low Stock" || item.status === "Out of Stock") && (
                    <div className="text-yellow-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span className="text-xs">Reorder</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
