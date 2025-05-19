import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
    title: string
    value: string
    changeValue: string
    changeLabel: string
    icon: LucideIcon
    isPositive?: boolean
}

export function StatCard({ title, value, changeValue, changeLabel, icon: Icon, isPositive = true }: StatCardProps) {
    return (
        <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <div className="flex items-center mt-1">
          <span className={`text-xs font-medium ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
            {changeValue}
          </span>
                    <span className="text-xs text-muted-foreground ml-1">{changeLabel}</span>
                </div>
            </CardContent>
        </Card>
    )
}
