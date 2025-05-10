"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

const data = [
  { date: "2023-07-01", utilization: 65, success: 92 },
  { date: "2023-07-02", utilization: 72, success: 95 },
  { date: "2023-07-03", utilization: 78, success: 94 },
  { date: "2023-07-04", utilization: 74, success: 91 },
  { date: "2023-07-05", utilization: 80, success: 93 },
  { date: "2023-07-06", utilization: 85, success: 96 },
  { date: "2023-07-07", utilization: 82, success: 95 },
  { date: "2023-07-08", utilization: 79, success: 94 },
  { date: "2023-07-09", utilization: 76, success: 92 },
  { date: "2023-07-10", utilization: 81, success: 93 },
  { date: "2023-07-11", utilization: 83, success: 95 },
  { date: "2023-07-12", utilization: 85, success: 96 },
  { date: "2023-07-13", utilization: 84, success: 94 },
  { date: "2023-07-14", utilization: 82, success: 93 },
]

export function PrinterEfficiency() {
  const { theme } = useTheme()

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <Card className="border-none shadow-lg">
          <CardContent className="p-2">
            <p className="text-sm font-semibold">{label ? new Date(label).toLocaleDateString() : "Invalid Date"}</p>
            <p className="text-sm text-muted-foreground">Utilization: {payload[0].value}%</p>
            <p className="text-sm text-muted-foreground">Success Rate: {payload[1].value}%</p>
          </CardContent>
        </Card>
      )
    }
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          stroke={theme === "dark" ? "#888888" : "#333333"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
        />
        <YAxis
          stroke={theme === "dark" ? "#888888" : "#333333"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="utilization"
          stroke={theme === "dark" ? "#adfa1d" : "#0ea5e9"}
          strokeWidth={2}
          dot={false}
          name="Utilization"
        />
        <Line
          type="monotone"
          dataKey="success"
          stroke={theme === "dark" ? "#1e40af" : "#3b82f6"}
          strokeWidth={2}
          dot={false}
          name="Success Rate"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
