import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  badge?: {
    text: string
    variant: "default" | "success" | "destructive" | "secondary"
  }
}

export function FeaturedProducts() {
  const featuredProducts: Product[] = [
    {
      id: "1",
      name: "Library Stool Chair",
      price: 20,
      image: "/product-1.png",
      category: "Chairs",
      badge: {
        text: "New",
        variant: "success"
      }
    },
    {
      id: "2",
      name: "Library Stool Chair",
      price: 20,
      originalPrice: 80,
      image: "/product-2.png",
      category: "Chairs",
      badge: {
        text: "Sales",
        variant: "destructive"
      }
    },
    {
      id: "3",
      name: "Library Stool Chair",
      price: 20,
      image: "/product-3.png",
      category: "Chairs",
    },
    {
      id: "4",
      name: "Library Stool Chair",
      price: 20,
      image: "/product-4.png",
      category: "Chairs",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-2xl font-bold text-[#1D1D1B]">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="block">       
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-square">
                {product.badge && (
                  <Badge
                    className={`absolute left-4 top-4 z-10 ${
                      product.badge.variant === "success" 
                        ? "bg-[#00B207] hover:bg-[#00B207]/90" 
                        : product.badge.variant === "destructive"
                        ? "bg-[#FF8A00] hover:bg-[#FF8A00]/90"
                        : ""
                    }`}
                  >
                    {product.badge.text}
                  </Badge>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={312}
                  height={312}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-medium text-[#1D1D1B]">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#1D1D1B]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-10 w-10 rounded-lg bg-[#F2F2F2] hover:bg-[#029FAE]"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

