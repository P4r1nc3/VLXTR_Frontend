"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend, Cell } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

const data = [
  { category: "Filament", cost: 450, percentage: 45 },
  { category: "Labor", cost: 250, percentage: 25 },
  { category: "Electricity", cost: 120, percentage: 12 },
  { category: "Shipping", cost: 100, percentage: 10 },
  { category: "Maintenance", cost: 80, percentage: 8 },
]

export function ProductionCosts() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const COLORS = ["#0ea5e9", "#3b82f6", "#8b5cf6", "#ec4899", "#f97316"]
  const DARK_COLORS = ["#adfa1d", "#1e40af", "#7c3aed", "#db2777", "#ea580c"]

  const colors = isDark ? DARK_COLORS : COLORS

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
          <Card className="border-none shadow-lg">
            <CardContent className="p-3">
              <p className="text-sm font-semibold mb-1">{label}</p>
              <div className="space-y-1">
                <p className="text-sm">
                  Cost: <span className="font-medium">${payload[0].value}</span>
                </p>
                <p className="text-sm">
                  Percentage: <span className="font-medium">{payload[0].payload.percentage}%</span>
                </p>
              </div>
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
            <p className="text-2xl font-bold">${data.reduce((sum, item) => sum + item.cost, 0).toLocaleString()}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Average Cost Per Print</h3>
            <p className="text-2xl font-bold">$12.45</p>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                  horizontal={true}
              />
              <XAxis
                  type="number"
                  stroke={isDark ? "#888888" : "#333333"}
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
                  domain={[0, 500]}
                  label={{
                    value: "Cost ($)",
                    position: "insideBottom",
                    offset: -5,
                    fontSize: 12,
                    fill: isDark ? "#888888" : "#333333",
                  }}
              />
              <YAxis
                  dataKey="category"
                  type="category"
                  stroke={isDark ? "#888888" : "#333333"}
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
                  width={100}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="top" height={36} formatter={() => <span className="text-sm">Monthly Cost</span>} />
              <Bar dataKey="cost" name="Monthly Cost" radius={[0, 4, 4, 0]} barSize={30}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-5 gap-2 mt-2">
          {data.map((item, index) => (
              <div key={index} className="text-center">
                <div
                    className="w-4 h-4 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: colors[index % colors.length] }}
                ></div>
                <p className="text-xs font-medium">{item.percentage}%</p>
                <p className="text-xs text-muted-foreground truncate">{item.category}</p>
              </div>
          ))}
        </div>
      </div>
  )
}
