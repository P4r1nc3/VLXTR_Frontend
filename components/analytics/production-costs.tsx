"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

const data = [
  { category: "Filament", cost: 450, percentage: 45 },
  { category: "Electricity", cost: 120, percentage: 12 },
  { category: "Maintenance", cost: 80, percentage: 8 },
  { category: "Labor", cost: 250, percentage: 25 },
  { category: "Shipping", cost: 100, percentage: 10 },
]

export function ProductionCosts() {
  const { theme } = useTheme()

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Card className="border-none shadow-lg">
          <CardContent className="p-2">
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-sm text-muted-foreground">Cost: ${payload[0].value}</p>
            <p className="text-sm text-muted-foreground">Percentage: {payload[1].value}%</p>
          </CardContent>
        </Card>
      )
    }
    return null
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium mb-1">Total Monthly Costs</h3>
          <p className="text-2xl font-bold">${data.reduce((sum, item) => sum + item.cost, 0)}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-1">Average Cost Per Print</h3>
          <p className="text-2xl font-bold">$12.45</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <XAxis
            type="number"
            stroke={theme === "dark" ? "#888888" : "#333333"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            dataKey="category"
            type="category"
            stroke={theme === "dark" ? "#888888" : "#333333"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="cost" fill={theme === "dark" ? "#adfa1d" : "#0ea5e9"} radius={[0, 4, 4, 0]} />
          <Bar dataKey="percentage" fill={theme === "dark" ? "#1e40af" : "#3b82f6"} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
