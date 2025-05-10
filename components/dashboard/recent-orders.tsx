import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const orders = [
  {
    id: "ORD-001",
    customer: {
      name: "Alice Johnson",
      email: "alice@example.com",
      avatar: "A",
    },
    status: "Pending",
    products: ["Desk Organizer", "Phone Stand"],
    total: "$45.99",
    date: "2023-07-15",
  },
  {
    id: "ORD-002",
    customer: {
      name: "Bob Smith",
      email: "bob@example.com",
      avatar: "B",
    },
    status: "Processing",
    products: ["Vase Mode Planter", "Cable Clips"],
    total: "$32.50",
    date: "2023-07-14",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Charlie Brown",
      email: "charlie@example.com",
      avatar: "C",
    },
    status: "Shipped",
    products: ["Headphone Stand", "Tablet Holder"],
    total: "$58.75",
    date: "2023-07-13",
  },
  {
    id: "ORD-004",
    customer: {
      name: "Diana Martinez",
      email: "diana@example.com",
      avatar: "D",
    },
    status: "Delivered",
    products: ["Desk Lamp Base", "Coasters (Set of 4)"],
    total: "$37.25",
    date: "2023-07-12",
  },
]

export function RecentOrders() {
  const getStatusBadge = (status) => {
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
        <div key={order.id} className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={`https://avatar.vercel.sh/${order.customer.name}`} alt={order.customer.name} />
              <AvatarFallback>{order.customer.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{order.customer.name}</p>
              <p className="text-sm text-muted-foreground">{order.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {getStatusBadge(order.status)}
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium">{order.total}</p>
              <p className="text-sm text-muted-foreground">{order.date}</p>
            </div>
            <Button variant="ghost" size="sm">
              View
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        View all orders
      </Button>
    </div>
  )
}
