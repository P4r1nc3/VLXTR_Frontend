"use client"
import { usePathname } from "next/navigation"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/dashboard/user-nav"

export function TopNav() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Empty div for spacing on left side */}
        <div className="w-10 lg:w-0"></div>

        {/* Search bar - always visible but positioned to avoid overlap */}
        <div className="relative flex-1 max-w-md mx-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full bg-background pl-8" />
        </div>

        {/* Right side controls */}
        <div className="flex items-center justify-end space-x-3 md:space-x-4">
          <Button variant="ghost" size="icon" className="relative h-8 w-8 md:h-9 md:w-9">
            <Bell className="h-4 w-4 md:h-5 md:w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary"></span>
          </Button>

          <ModeToggle />

          <UserNav />
        </div>
      </div>
    </header>
  )
}
