"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

const data = [
  { month: "Jan", orders: 45, revenue: 1200 },
  { month: "Feb", orders: 52, revenue: 1350 },
  { month: "Mar", orders: 61, revenue: 1500 },
  { month: "Apr", orders: 58, revenue: 1450 },
  { month: "May", orders: 63, revenue: 1600 },
  { month: "Jun", orders: 72, revenue: 1800 },
  { month: "Jul", orders: 68, revenue: 1700 },
]

export function OrdersAnalytics() {
  const { theme } = useTheme()

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <Card className="border-none shadow-lg">
          <CardContent className="p-2">
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-sm text-muted-foreground">Orders: {payload[0].value}</p>
            <p className="text-sm text-muted-foreground">Revenue: ${payload[1].value}</p>
          </CardContent>
        </Card>
      )
    }
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="month"
          stroke={theme === "dark" ? "#888888" : "#333333"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke={theme === "dark" ? "#888888" : "#333333"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke={theme === "dark" ? "#888888" : "#333333"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar yAxisId="left" dataKey="orders" fill={theme === "dark" ? "#adfa1d" : "#0ea5e9"} radius={[4, 4, 0, 0]} />
        <Bar yAxisId="right" dataKey="revenue" fill={theme === "dark" ? "#1e40af" : "#3b82f6"} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
