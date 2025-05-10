"use client"

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

const data = [
  { name: "PLA", value: 45 },
  { name: "PETG", value: 25 },
  { name: "ABS", value: 15 },
  { name: "TPU", value: 10 },
  { name: "Other", value: 5 },
]

const COLORS = ["#0ea5e9", "#3b82f6", "#8b5cf6", "#ec4899", "#f97316"]
const DARK_COLORS = ["#adfa1d", "#1e40af", "#7c3aed", "#db2777", "#ea580c"]

export function FilamentUsage() {
  const { theme } = useTheme()
  const colors = theme === "dark" ? DARK_COLORS : COLORS

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <Card className="border-none shadow-lg">
          <CardContent className="p-2">
            <p className="text-sm font-semibold">{payload[0].name}</p>
            <p className="text-sm text-muted-foreground">{payload[0].value}% of total usage</p>
          </CardContent>
        </Card>
      )
    }
    return null
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
