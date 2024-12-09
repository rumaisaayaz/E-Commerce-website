'use client'

import { useState } from "react"
import Image from "next/image"
import { Product } from "@/types/product"
import { QuickViewModal } from "@/components/quick-view-modal"
import { Button } from "@/components/ui/button"

interface ProductShowcaseProps {
  products: Product[]
}

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="relative min-h-screen bg-[#f5f5f5]">
    {/* Vertical Text */}
    <div className="absolute left-[-150px] top-[50%] hidden -translate-y-1/2 -rotate-90 transform whitespace-nowrap lg:block">
        <h2 className="text-xl font-medium tracking-[0.2em]  text-gray-800 font-serif">
          EXPLORE NEW AND POPULAR STYLES
        </h2>
      </div>


      {/* Product Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:ml-24 lg:grid-cols-4 lg:gap-8 lg:p-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group relative aspect-square overflow-hidden rounded-lg bg-white ${
              index === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <Image
              src={product.image} // Changed from product.image to product.imageUrl
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
              sizes={index === 0 
                ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
              <div className="absolute bottom-0 w-full translate-y-full bg-white p-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-gray-600">${product.price}</p>
                <Button
                  onClick={() => setSelectedProduct(product)}
                  variant="ghost"
                  className="mt-2 h-auto p-0 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  Quick View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <QuickViewModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}