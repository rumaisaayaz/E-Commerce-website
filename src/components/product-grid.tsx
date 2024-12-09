import { Product } from "@/types/product"
import { ProductCard } from "./product-card" 
import Link from "next/link"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="block">
          <ProductCard key={product.id} product={product} />
        </Link>
        ))}
      </div>
    </section>
  )
}

