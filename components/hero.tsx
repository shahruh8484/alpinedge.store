import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/snowboarder-performing-trick-in-mountain-powder-sn.jpg"
          alt="Snowboarder in action"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Premium Winter Equipment</p>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-balance">Conquer the Mountain</h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            {
              "Discover premium equipment designed for peak performance. From powder runs to park sessions, gear up with the best."
            }
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Shop Equipment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-foreground/20 hover:bg-foreground/10 bg-transparent"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
