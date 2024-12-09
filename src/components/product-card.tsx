import Image from "next/image"
import { ShoppingCart } from 'lucide-react'
import { Product } from "@/types/product"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}


export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} key={product.id} className="block">
    <div className="group relative rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        {product.isNew && (
          <Badge className="absolute left-2 top-2 bg-green-500 text-white hover:bg-green-600">
            New
          </Badge>
        )}
        <Image
          src={product.imageUrl || product.image}
          alt={product.name}
          width={312}
          height={312}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">${product.price}</p>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 rounded-sm hover:bg-[#029FAE]"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>
    </div>
    </Link>
  )
}

