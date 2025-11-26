import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="lg:hidden p-2 -ml-2">
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-bold tracking-tight">Alpine Edge</h1>
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#equipment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Equipment
              </a>
              <a href="#categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <Button variant="outline" className="rounded-full border-foreground/20 hover:bg-foreground/10 bg-transparent">
            Shop
          </Button>
        </div>
      </div>
    </header>
  )
}
