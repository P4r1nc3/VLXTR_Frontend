import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Plus } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Office",
    description: "Office organization and accessories",
    products: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Home",
    description: "Home decor and organization",
    products: 18,
    status: "Active",
  },
  {
    id: 3,
    name: "Accessories",
    description: "Phone, tablet, and computer accessories",
    products: 24,
    status: "Active",
  },
  {
    id: 4,
    name: "Kitchen",
    description: "Kitchen organization and gadgets",
    products: 8,
    status: "Active",
  },
  {
    id: 5,
    name: "Toys",
    description: "Educational and fun toys",
    products: 15,
    status: "Active",
  },
  {
    id: 6,
    name: "Seasonal",
    description: "Holiday and seasonal items",
    products: 6,
    status: "Draft",
  },
]

export function ProductCategories() {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
      case "Draft":
        return <Badge variant="outline">Draft</Badge>
      case "Archived":
        return <Badge variant="secondary">Archived</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Product Categories</h2>
        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{category.name}</CardTitle>
                {getStatusBadge(category.status)}
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm">{category.products} products</p>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
