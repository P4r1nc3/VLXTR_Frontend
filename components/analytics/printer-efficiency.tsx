"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
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
  const isDark = theme === "dark"

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
          <Card className="border-none shadow-lg">
            <CardContent className="p-3">
              <p className="text-sm font-semibold mb-1">
                {label
                    ? new Date(label).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
                    : ""}
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: isDark ? "#adfa1d" : "#0ea5e9" }}></div>
                  <p className="text-sm">
                    Utilization: <span className="font-medium">{payload[0].value}%</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: isDark ? "#1e40af" : "#3b82f6" }}></div>
                  <p className="text-sm">
                    Success Rate: <span className="font-medium">{payload[1].value}%</span>
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
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} />
            <XAxis
                dataKey="date"
                stroke={isDark ? "#888888" : "#333333"}
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
                tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                label={{
                  value: "Date",
                  position: "insideBottom",
                  offset: -5,
                  fontSize: 12,
                  fill: isDark ? "#888888" : "#333333",
                }}
            />
            <YAxis
                stroke={isDark ? "#888888" : "#333333"}
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}
                tickFormatter={(value) => `${value}%`}
                domain={[50, 100]}
                label={{
                  value: "Percentage (%)",
                  angle: -90,
                  position: "insideLeft",
                  fontSize: 12,
                  fill: isDark ? "#888888" : "#333333",
                }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} formatter={(value) => <span className="text-sm">{value}</span>} />
            <Line
                type="monotone"
                dataKey="utilization"
                stroke={isDark ? "#adfa1d" : "#0ea5e9"}
                strokeWidth={2.5}
                dot={{ r: 3, strokeWidth: 1, fill: isDark ? "#adfa1d" : "#0ea5e9" }}
                activeDot={{ r: 5, strokeWidth: 0 }}
                name="Printer Utilization"
            />
            <Line
                type="monotone"
                dataKey="success"
                stroke={isDark ? "#1e40af" : "#3b82f6"}
                strokeWidth={2.5}
                dot={{ r: 3, strokeWidth: 1, fill: isDark ? "#1e40af" : "#3b82f6" }}
                activeDot={{ r: 5, strokeWidth: 0 }}
                name="Success Rate"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
  )
}
