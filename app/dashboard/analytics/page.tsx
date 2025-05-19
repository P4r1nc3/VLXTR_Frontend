import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PrinterEfficiency } from "@/components/analytics/printer-efficiency"
import { OrdersAnalytics } from "@/components/analytics/orders-analytics"
import { FilamentUsage } from "@/components/analytics/filament-usage"
import { ProductionCosts } from "@/components/analytics/production-costs"
import { StatCard } from "@/components/dashboard/stat-card"
import { Download, RefreshCcw, Calendar, BarChart2, Activity, Clock, DollarSign } from "lucide-react"

export default function AnalyticsPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Analytic</h1>
                    <p className="text-muted-foreground">Comprehensive insights into your 3D printing operations</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9 gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span className="hidden sm:inline">Last 30 Days</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-9 gap-1.5">
                        <RefreshCcw className="h-4 w-4" />
                        <span className="hidden sm:inline">Refresh Data</span>
                    </Button>
                    <Button size="sm" className="h-9 gap-1.5">
                        <Download className="h-4 w-4" />
                        <span className="hidden sm:inline">Export Report</span>
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Prints"
                    value="245"
                    changeValue="+22%"
                    changeLabel="from last month"
                    icon={BarChart2}
                />
                <StatCard
                    title="Success Rate"
                    value="94.2%"
                    changeValue="+2.1%"
                    changeLabel="from last month"
                    icon={Activity}
                />
                <StatCard
                    title="Avg. Print Time"
                    value="3h 24m"
                    changeValue="-12%"
                    changeLabel="from last month"
                    icon={Clock}
                    isPositive={false}
                />
                <StatCard
                    title="Revenue"
                    value="$12,543"
                    changeValue="+18.2%"
                    changeLabel="from last month"
                    icon={DollarSign}
                />
            </div>

            <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 shadow-sm">
                    <CardHeader>
                        <CardTitle>Printer Efficiency</CardTitle>
                        <CardDescription>Daily utilization and success rate over time</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <PrinterEfficiency />
                    </CardContent>
                </Card>
                <Card className="col-span-3 shadow-sm">
                    <CardHeader>
                        <CardTitle>Orders Analytics</CardTitle>
                        <CardDescription>Monthly order volume and revenue</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <OrdersAnalytics />
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 shadow-sm">
                    <CardHeader>
                        <CardTitle>Filament Usage</CardTitle>
                        <CardDescription>Material consumption by type</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FilamentUsage />
                    </CardContent>
                </Card>
                <Card className="col-span-3 shadow-sm">
                    <CardHeader>
                        <CardTitle>Production Costs</CardTitle>
                        <CardDescription>Breakdown of operational expenses</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ProductionCosts />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
