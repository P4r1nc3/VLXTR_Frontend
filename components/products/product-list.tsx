import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye, Copy } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Desk Organizer",
    status: "Active",
    price: "$24.99",
    inventory: 45,
    category: "Office",
    sales: 128,
    rating: 4.7,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Phone Stand",
    status: "Active",
    price: "$12.99",
    inventory: 78,
    category: "Accessories",
    sales: 256,
    rating: 4.9,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Vase Mode Planter",
    status: "Active",
    price: "$18.99",
    inventory: 32,
    category: "Home",
    sales: 96,
    rating: 4.5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Headphone Stand",
    status: "Active",
    price: "$15.99",
    inventory: 54,
    category: "Accessories",
    sales: 112,
    rating: 4.6,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Cable Clips",
    status: "Active",
    price: "$8.99",
    inventory: 120,
    category: "Office",
    sales: 320,
    rating: 4.8,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Tablet Holder",
    status: "Draft",
    price: "$22.99",
    inventory: 0,
    category: "Accessories",
    sales: 0,
    rating: 0,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "Desk Lamp Base",
    status: "Active",
    price: "$19.99",
    inventory: 28,
    category: "Home",
    sales: 64,
    rating: 4.4,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    name: "Coasters (Set of 4)",
    status: "Active",
    price: "$14.99",
    inventory: 42,
    category: "Home",
    sales: 86,
    rating: 4.3,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function ProductList() {
  const getStatusBadge = (status: string) => {
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
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-32 h-32 bg-muted flex items-center justify-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="flex-1 p-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{product.name}</h3>
                    {getStatusBadge(product.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">Category: {product.category}</p>
                  <p className="text-sm font-medium">{product.price}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Inventory</p>
                  <p className="text-sm">{product.inventory} units</p>
                  {product.inventory <= 20 && product.status === "Active" && (
                    <p className="text-sm text-yellow-500">Low stock</p>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Performance</p>
                  <p className="text-sm">{product.sales} sales</p>
                  <div className="flex items-center">
                    <p className="text-sm">{product.rating > 0 ? product.rating : "No"} rating</p>
                    {product.rating > 0 && (
                      <div className="ml-1 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
