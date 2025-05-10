import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const filaments = [
  {
    id: 1,
    type: "PLA",
    color: "Black",
    brand: "BambuLab",
    remaining: 78,
    weight: "1kg",
    status: "In Use",
    printer: "BambuLab X1C",
    purchaseDate: "2023-06-01",
    cost: "$29.99",
  },
  {
    id: 2,
    type: "PETG",
    color: "Blue",
    brand: "BambuLab",
    remaining: 45,
    weight: "1kg",
    status: "In Use",
    printer: "BambuLab P1P",
    purchaseDate: "2023-05-15",
    cost: "$34.99",
  },
  {
    id: 3,
    type: "PLA",
    color: "White",
    brand: "BambuLab",
    remaining: 92,
    weight: "1kg",
    status: "In Use",
    printer: "BambuLab X1",
    purchaseDate: "2023-06-10",
    cost: "$29.99",
  },
  {
    id: 4,
    type: "PLA",
    color: "Green",
    brand: "BambuLab",
    remaining: 23,
    weight: "1kg",
    status: "In Use",
    printer: "BambuLab P1S",
    purchaseDate: "2023-05-20",
    cost: "$29.99",
  },
  {
    id: 5,
    type: "TPU",
    color: "Clear",
    brand: "BambuLab",
    remaining: 100,
    weight: "500g",
    status: "Available",
    printer: "-",
    purchaseDate: "2023-07-01",
    cost: "$39.99",
  },
  {
    id: 6,
    type: "ABS",
    color: "Red",
    brand: "BambuLab",
    remaining: 100,
    weight: "1kg",
    status: "Available",
    printer: "-",
    purchaseDate: "2023-07-05",
    cost: "$32.99",
  },
  {
    id: 7,
    type: "PLA",
    color: "Silver",
    brand: "BambuLab",
    remaining: 15,
    weight: "1kg",
    status: "Low",
    printer: "-",
    purchaseDate: "2023-04-15",
    cost: "$29.99",
  },
  {
    id: 8,
    type: "PETG",
    color: "Black",
    brand: "BambuLab",
    remaining: 100,
    weight: "1kg",
    status: "Available",
    printer: "-",
    purchaseDate: "2023-07-10",
    cost: "$34.99",
  },
  {
    id: 9,
    type: "PLA",
    color: "Yellow",
    brand: "BambuLab",
    remaining: 100,
    weight: "1kg",
    status: "Available",
    printer: "-",
    purchaseDate: "2023-07-12",
    cost: "$29.99",
  },
  {
    id: 10,
    type: "PLA",
    color: "Orange",
    brand: "BambuLab",
    remaining: 100,
    weight: "1kg",
    status: "Available",
    printer: "-",
    purchaseDate: "2023-07-12",
    cost: "$29.99",
  },
]

export function FilamentInventory() {
  const getStatusBadge = (status: string, remaining: number) => {
    if (status === "In Use") {
      return <Badge className="bg-blue-500 hover:bg-blue-600">In Use</Badge>
    } else if (status === "Available") {
      return <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
    } else if (status === "Low" || remaining <= 20) {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Low</Badge>
    } else {
      return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Filament Inventory</h2>
        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-4 w-4" />
          Add Filament
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pla">PLA</TabsTrigger>
          <TabsTrigger value="petg">PETG</TabsTrigger>
          <TabsTrigger value="abs">ABS</TabsTrigger>
          <TabsTrigger value="tpu">TPU</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {filaments.map((filament) => (
                  <div
                    key={filament.id}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-6 items-center border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <div
                        className="h-6 w-6 rounded-full"
                        style={{
                          backgroundColor:
                            filament.color.toLowerCase() === "black"
                              ? "#000"
                              : filament.color.toLowerCase() === "white"
                                ? "#fff"
                                : filament.color.toLowerCase() === "blue"
                                  ? "#3b82f6"
                                  : filament.color.toLowerCase() === "green"
                                    ? "#22c55e"
                                    : filament.color.toLowerCase() === "red"
                                      ? "#ef4444"
                                      : filament.color.toLowerCase() === "silver"
                                        ? "#94a3b8"
                                        : filament.color.toLowerCase() === "clear"
                                          ? "#e5e7eb"
                                          : filament.color.toLowerCase() === "yellow"
                                            ? "#eab308"
                                            : filament.color.toLowerCase() === "orange"
                                              ? "#f97316"
                                              : "#888",
                          border:
                            filament.color.toLowerCase() === "white" || filament.color.toLowerCase() === "clear"
                              ? "1px solid #e5e7eb"
                              : "none",
                        }}
                      ></div>
                      <div>
                        <p className="text-sm font-medium">
                          {filament.type} - {filament.color}
                        </p>
                        <p className="text-xs text-muted-foreground">{filament.brand}</p>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Remaining: {filament.remaining}%</span>
                        <span>{filament.weight}</span>
                      </div>
                      <Progress value={filament.remaining} className="h-2" />
                    </div>
                    <div className="text-sm space-y-1">
                      <p>Cost: {filament.cost}</p>
                      <p>Purchased: {filament.purchaseDate}</p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      {getStatusBadge(filament.status, filament.remaining)}
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pla" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {filaments
                  .filter((f) => f.type === "PLA")
                  .map((filament) => (
                    <div
                      key={filament.id}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-6 items-center border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <div
                          className="h-6 w-6 rounded-full"
                          style={{
                            backgroundColor:
                              filament.color.toLowerCase() === "black"
                                ? "#000"
                                : filament.color.toLowerCase() === "white"
                                  ? "#fff"
                                  : filament.color.toLowerCase() === "blue"
                                    ? "#3b82f6"
                                    : filament.color.toLowerCase() === "green"
                                      ? "#22c55e"
                                      : filament.color.toLowerCase() === "red"
                                        ? "#ef4444"
                                        : filament.color.toLowerCase() === "silver"
                                          ? "#94a3b8"
                                          : filament.color.toLowerCase() === "clear"
                                            ? "#e5e7eb"
                                            : filament.color.toLowerCase() === "yellow"
                                              ? "#eab308"
                                              : filament.color.toLowerCase() === "orange"
                                                ? "#f97316"
                                                : "#888",
                            border:
                              filament.color.toLowerCase() === "white" || filament.color.toLowerCase() === "clear"
                                ? "1px solid #e5e7eb"
                                : "none",
                          }}
                        ></div>
                        <div>
                          <p className="text-sm font-medium">
                            {filament.type} - {filament.color}
                          </p>
                          <p className="text-xs text-muted-foreground">{filament.brand}</p>
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Remaining: {filament.remaining}%</span>
                          <span>{filament.weight}</span>
                        </div>
                        <Progress value={filament.remaining} className="h-2" />
                      </div>
                      <div className="text-sm space-y-1">
                        <p>Cost: {filament.cost}</p>
                        <p>Purchased: {filament.purchaseDate}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        {getStatusBadge(filament.status, filament.remaining)}
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar content for other tabs (PETG, ABS, TPU) would go here */}
        <TabsContent value="petg" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">Showing PETG filaments</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="abs" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">Showing ABS filaments</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tpu" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">Showing TPU filaments</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
