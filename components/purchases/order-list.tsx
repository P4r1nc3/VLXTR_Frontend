"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const orders = [
  {
    id: "ORD-001",
    customer: "Alice Johnson",
    status: "Pending",
    products: ["Desk Organizer", "Phone Stand"],
    total: "$45.99",
    date: "2023-07-15",
  },
  {
    id: "ORD-002",
    customer: "Bob Smith",
    status: "Processing",
    products: ["Vase Mode Planter", "Cable Clips"],
    total: "$32.50",
    date: "2023-07-14",
  },
  {
    id: "ORD-003",
    customer: "Charlie Brown",
    status: "Shipped",
    products: ["Headphone Stand", "Tablet Holder"],
    total: "$58.75",
    date: "2023-07-13",
  },
  {
    id: "ORD-004",
    customer: "Diana Martinez",
    status: "Delivered",
    products: ["Desk Lamp Base", "Coasters (Set of 4)"],
    total: "$37.25",
    date: "2023-07-12",
  },
]

export function OrderList() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            Pending
          </Badge>
        )
      case "Processing":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Processing
          </Badge>
        )
      case "Shipped":
        return (
          <Badge variant="outline" className="border-purple-500 text-purple-500">
            Shipped
          </Badge>
        )
      case "Delivered":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Delivered
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id} className="p-4">
          <CardContent className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{order.customer}</p>
              <p className="text-xs text-muted-foreground">{order.date}</p>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusBadge(order.status)}
              <span className="font-bold">{order.total}</span>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
