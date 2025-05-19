import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PrinterStatus } from "@/components/dashboard/printer-status"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { StatCard } from "@/components/dashboard/stat-card"
import { Printer, Wrench, ShoppingCart, Disc } from "lucide-react"

export default function DashboardPage() {
  return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your 3D printing operations</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
              title="Active Printers"
              value="4/5"
              changeValue="+2"
              changeLabel="from last month"
              icon={Printer}
          />
          <StatCard
              title="Pending Orders"
              value="12"
              changeValue="+7"
              changeLabel="since yesterday"
              icon={ShoppingCart}
          />
          <StatCard
              title="Maintenance"
              value="2"
              changeValue="-1"
              changeLabel="from last week"
              icon={Wrench}
          />
          <StatCard
              title="Filament Usage"
              value="1.2 kg"
              changeValue="+0.3 kg"
              changeLabel="from yesterday"
              icon={Disc}
          />
        </div>

        {/* Printer Status and Recent Orders */}
        <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 shadow-sm">
            <CardHeader>
              <CardTitle>Printer Status</CardTitle>
              <CardDescription>Current status of all connected printers</CardDescription>
            </CardHeader>
            <CardContent>
              <PrinterStatus />
            </CardContent>
          </Card>
          <Card className="col-span-3 shadow-sm">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest orders from Allegro</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentOrders />
            </CardContent>
          </Card>
        </div>
      </div>
  )
}
