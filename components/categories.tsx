import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "Skiing",
    description: "Premium skis, boots, and poles",
    image: "/professional-skier-carving-turn-on-groomed-slope.jpg",
    badge: "New Arrivals",
  },
  {
    title: "Snowboarding",
    description: "Boards, bindings, and boots",
    image: "/snowboarder-riding-powder-in-backcountry-mountains.jpg",
    badge: "Best Sellers",
  },
  {
    title: "Winter Apparel",
    description: "Jackets, pants, and accessories",
    image: "/winter-sports-jacket-and-gear-hanging-in-snow.jpg",
    badge: "Limited Edition",
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Shop by Sport</p>
            <h2 className="text-4xl lg:text-5xl font-bold">Equipment Categories</h2>
          </div>
          <Button variant="link" className="hidden lg:flex text-foreground hover:text-primary">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full border border-border/50">
                    {category.badge}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex gap-3">
                    <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                      Shop Now
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full border-foreground/20 hover:bg-foreground/10 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
