import { Card } from "@/components/ui/card"

const gearItems = [
  {
    name: "Alpine Pro Skis",
    category: "Skiing",
    price: "$899",
    image: "/professional-alpine-skis-on-white-background.jpg",
  },
  {
    name: "Powder Board",
    category: "Snowboarding",
    price: "$749",
    image: "/snowboard-deck-on-white-background.jpg",
  },
  {
    name: "Winter Pro Jacket",
    category: "Apparel",
    price: "$349",
    image: "/premium-ski-jacket-on-white-background.jpg",
  },
  {
    name: "Mountain Boots",
    category: "Footwear",
    price: "$599",
    image: "/ski-boots-on-white-background.jpg",
  },
]

export function FeaturedGear() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Featured Collection</p>
            <h2 className="text-4xl lg:text-5xl font-bold">Gear Up</h2>
          </div>
          <button className="hidden lg:flex items-center text-sm font-medium hover:text-primary transition-colors">
            View All
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gearItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-background border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden bg-muted/50">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{item.category}</p>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-lg font-bold">{item.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
