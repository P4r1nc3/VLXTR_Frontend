import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Package, MapPin, Calendar, Eye } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const shipments = [
  {
    id: "SHP-001",
    orderId: "ORD-003",
    customer: "Charlie Brown",
    status: "In Transit",
    carrier: "FedEx",
    trackingNumber: "FDX1234567890",
    estimatedDelivery: "2023-07-18",
    shippedDate: "2023-07-13",
    progress: 50,
    location: "Chicago, IL",
  },
  {
    id: "SHP-002",
    orderId: "ORD-002",
    customer: "Bob Smith",
    status: "Preparing",
    carrier: "UPS",
    trackingNumber: "UPS0987654321",
    estimatedDelivery: "2023-07-19",
    shippedDate: "-",
    progress: 10,
    location: "Warehouse",
  },
  {
    id: "SHP-003",
    orderId: "ORD-001",
    customer: "Alice Johnson",
    status: "Preparing",
    carrier: "USPS",
    trackingNumber: "USPS5678901234",
    estimatedDelivery: "2023-07-20",
    shippedDate: "-",
    progress: 5,
    location: "Warehouse",
  },
  {
    id: "SHP-004",
    orderId: "ORD-004",
    customer: "Diana Martinez",
    status: "Delivered",
    carrier: "FedEx",
    trackingNumber: "FDX0123456789",
    estimatedDelivery: "2023-07-15",
    shippedDate: "2023-07-12",
    deliveredDate: "2023-07-15",
    progress: 100,
    location: "New York, NY",
  },
]

export function ShippingStatus() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Preparing":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Preparing</Badge>
      case "In Transit":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">In Transit</Badge>
      case "Out for Delivery":
        return <Badge className="bg-purple-500 hover:bg-purple-600">Out for Delivery</Badge>
      case "Delivered":
        return <Badge className="bg-green-500 hover:bg-green-600">Delivered</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Shipping Status</CardTitle>
          <CardDescription>Track your shipments and deliveries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {shipments.map((shipment) => (
              <div key={shipment.id} className="rounded-lg border border-border p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Shipment {shipment.id}</h3>
                      {getStatusBadge(shipment.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">Order: {shipment.orderId}</p>
                    <p className="text-sm text-muted-foreground">Customer: {shipment.customer}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm">Carrier: {shipment.carrier}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm">Tracking: {shipment.trackingNumber}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm">Location: {shipment.location}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm">Shipped: {shipment.shippedDate}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm">Est. Delivery: {shipment.estimatedDelivery}</p>
                    </div>
                    {shipment.deliveredDate && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm">Delivered: {shipment.deliveredDate}</p>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{shipment.progress}%</span>
                      </div>
                      <Progress value={shipment.progress} className="h-2" />
                    </div>
                    <div className="flex items-center justify-end">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Track
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
