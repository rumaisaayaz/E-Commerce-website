import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function TopCategories() {
  const categories = [
    {
      id: 11,
      title: "Wing Chair",
      products: "1,534 Products",
      image: "/image-1.png",
      href: "#",
    },
    {
      id:12,
      title: "Wooden Chair",
      products: "157 Products",
      image: "/image-2.png",
      href: "#",
    },
    {
      id:13,
      title: "Desk Chair",
      products: "154 Products",
      image: "/image-3.png",
      href: "#",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={`/product/${category.id}`} key={category.id} className="block">
            <Card className="overflow-hidden group cursor-pointer">
              <CardContent className="p-0 relative h-[427px] w-[424px]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={424}
                    height={424}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute w-[424px] h-[85px] bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <h3 className="text-lg font-medium">{category.title}</h3>
                  <p className="text-sm text-gray-300">{category.products}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

