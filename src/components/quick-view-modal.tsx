"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Image from "next/image"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"

interface Product {
  _id: string; // Unique identifier for the product
  title: string; // Product title
  priceWithoutDiscount: number | null; // Original price, nullable
  category: {
    _id: string; // Category ID
    title: string; // Category title
  };
  tags: string[]; // Array of tags
  price: number; // Current price
  badge: string | null; // Badge or label, nullable
  imageUrl: string; // URL of the product image
  description: string; // Product description
  inventory: number; // Number of items in stock
}

interface QuickViewModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  if (!product) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-4 top-4">
                  <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <Dialog.Title as="h3" className="text-2xl font-semibold">
                      {product.title}
                    </Dialog.Title>
                    <p className="mt-2 text-xl font-medium">${product.price}</p>
                    <p className="mt-4 text-gray-600">
                      Category: {product.category.title}
                    </p>
                    <div className="mt-8 space-y-4">
                      <Link href={`/product/${product._id}`}  >
                      <Button className="w-full mb-2">More Details</Button>
                      </Link>
                      <Link href="/productPage"  >
                      <Button variant="outline" className="w-full">
                         Related Products
                      </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

