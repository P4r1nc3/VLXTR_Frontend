"use client"

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend, Sector } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useState } from "react"

const data = [
  { name: "PLA", value: 45, description: "Standard printing material" },
  { name: "PETG", value: 25, description: "Durable and chemical resistant" },
  { name: "ABS", value: 15, description: "Heat resistant engineering plastic" },
  { name: "TPU", value: 10, description: "Flexible material" },
  { name: "Other", value: 5, description: "Specialty materials" },
]

const COLORS = ["#0ea5e9", "#3b82f6", "#8b5cf6", "#ec4899", "#f97316"]
const DARK_COLORS = ["#adfa1d", "#1e40af", "#7c3aed", "#db2777", "#ea580c"]

export function FilamentUsage() {
  const { theme } = useTheme()
  const colors = theme === "dark" ? DARK_COLORS : COLORS
  const [activeIndex, setActiveIndex] = useState(0)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props

    return (
        <g>
          <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius + 6}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
          />
        </g>
    )
  }

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
          <Card className="border-none shadow-lg">
            <CardContent className="p-3">
              <p className="text-sm font-semibold mb-1">{payload[0].name}</p>
              <div className="space-y-1">
                <p className="text-sm">
                  Usage: <span className="font-medium">{payload[0].value}%</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {data.find((item) => item.name === payload[0].name)?.description}
                </p>
              </div>
            </CardContent>
          </Card>
      )
    }
    return null
  }

  const renderLegendText = (value: string) => {
    const item = data.find((d) => d.name === value)
    return (
        <span className="text-sm">
        {value} ({item?.value}%)
      </span>
    )
  }

  return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                  <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                      stroke={theme === "dark" ? "#1e1e1e" : "#ffffff"}
                      strokeWidth={2}
                  />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                formatter={renderLegendText}
                iconSize={10}
                iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
  )
}
