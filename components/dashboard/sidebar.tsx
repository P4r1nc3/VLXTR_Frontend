"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  BarChart2,
  Disc,
  Printer,
  Package,
  ShoppingCart,
  Settings,
  Users,
  HelpCircle,
  Menu,
  ChevronLeft,
  LogOut,
  X,
  Wrench,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const navigationGroups = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: Home },
      { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
    ],
  },
  {
    title: "Production",
    items: [
      { name: "Printers", href: "/dashboard/printers", icon: Printer },
      { name: "Filament", href: "/dashboard/filament", icon: Disc },
      { name: "Maintenance", href: "/dashboard/maintenance", icon: Wrench },
    ],
  },
  {
    title: "Business",
    items: [
      { name: "Products", href: "/dashboard/products", icon: Package },
      { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
    ],
  },
]

const bottomNavigation = [
  { name: "Account", href: "/dashboard/account", icon: Settings },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Help", href: "/dashboard/help", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const NavItem = ({ item, isBottom = false }) => (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link
              href={item.href}
              className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  isCollapsed && "justify-center px-2",
              )}
              onClick={() => setIsMobileOpen(false)}
          >
            <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        </TooltipTrigger>
        {isCollapsed && (
            <TooltipContent side="right" className="flex items-center gap-4">
              {item.name}
            </TooltipContent>
        )}
      </Tooltip>
  )

  return (
      <TooltipProvider>
        <>
          <button
              className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background rounded-md shadow-md"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div
              className={cn(
                  "fixed inset-y-0 z-20 flex flex-col bg-card transition-all duration-300 ease-in-out lg:static",
                  isCollapsed ? "w-[72px]" : "w-64",
                  isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
              )}
          >
            <div className="border-b border-border/40">
              <div className={cn("flex h-16 items-center gap-2 px-4", isCollapsed && "justify-center px-2")}>
                {/* Logo ONLY on desktop/large screens */}
                {!isCollapsed && (
                    <Link href="/dashboard" className="hidden lg:flex items-center font-semibold">
                      <span className="text-xl font-extrabold tracking-tight">VLXTR</span>
                    </Link>
                )}
                <Button
                    variant="ghost"
                    size="sm"
                    className={cn("ml-auto h-8 w-8", isCollapsed && "ml-0")}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
                  <span className="sr-only">{isCollapsed ? "Expand" : "Collapse"} Sidebar</span>
                </Button>

                {/* Mobile close button */}
                <Button variant="ghost" size="sm" className="lg:hidden h-8 w-8" onClick={() => setIsMobileOpen(false)}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close Sidebar</span>
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto py-2 space-y-6">
              {navigationGroups.map((group) => (
                  <div key={group.title} className="px-2">
                    {!isCollapsed && (
                        <div className="mb-2 px-3 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
                          {group.title}
                        </div>
                    )}
                    <nav className="grid gap-1">
                      {group.items.map((item) => (
                          <NavItem key={item.name} item={item} />
                      ))}
                    </nav>
                  </div>
              ))}
            </div>
            <div className="border-t border-border/40 p-2">
              <nav className="grid gap-1">
                {bottomNavigation.map((item) => (
                    <NavItem key={item.name} item={item} isBottom />
                ))}
                <Link
                    href="/"
                    className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        isCollapsed && "justify-center px-2",
                    )}
                    onClick={() => setIsMobileOpen(false)}
                >
                  <LogOut className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
                  {!isCollapsed && <span>Logout</span>}
                </Link>
              </nav>
            </div>
          </div>
        </>
      </TooltipProvider>
  )
}
