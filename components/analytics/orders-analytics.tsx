"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
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
  const isDark = theme === "dark"

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
          <Card className="border-none shadow-lg">
            <CardContent className="p-3">
              <p className="text-sm font-semibold mb-1">{label}</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: isDark ? "#adfa1d" : "#0ea5e9" }}></div>
                  <p className="text-sm">
                    Orders: <span className="font-medium">{payload[0].value}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: isDark ? "#1e40af" : "#3b82f6" }}></div>
                  <p className="text-sm">
                    Revenue: <span className="font-medium">${payload[1].value}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
      )
    }
    return null
  }

  return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} />
            <XAxis
                dataKey="month"
                stroke={isDark ? "#888888" : "#333333"}
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
                label={{
                  value: "Month",
                  position: "insideBottom",
                  offset: -5,
                  fontSize: 12,
                  fill: isDark ? "#888888" : "#333333",
                }}
            />
            <YAxis
                yAxisId="left"
                orientation="left"
                stroke={isDark ? "#888888" : "#333333"}
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
                tickFormatter={(value) => `${value}`}
                label={{
                  value: "Orders",
                  angle: -90,
                  position: "insideLeft",
                  fontSize: 12,
                  fill: isDark ? "#888888" : "#333333",
                }}
            />
            <YAxis
                yAxisId="right"
                orientation="right"
                stroke={isDark ? "#888888" : "#333333"}
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
                tickFormatter={(value) => `$${value}`}
                label={{
                  value: "Revenue ($)",
                  angle: 90,
                  position: "insideRight",
                  fontSize: 12,
                  fill: isDark ? "#888888" : "#333333",
                }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} formatter={(value) => <span className="text-sm">{value}</span>} />
            <Bar
                yAxisId="left"
                dataKey="orders"
                fill={isDark ? "#adfa1d" : "#0ea5e9"}
                radius={[4, 4, 0, 0]}
                name="Orders"
                barSize={20}
            />
            <Bar
                yAxisId="right"
                dataKey="revenue"
                fill={isDark ? "#1e40af" : "#3b82f6"}
                radius={[4, 4, 0, 0]}
                name="Revenue"
                barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
  )
}
