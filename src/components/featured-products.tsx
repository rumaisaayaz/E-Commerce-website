"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

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

export function FeaturedProducts() {
  // const featuredProducts: Product[] = [
  //   {
  //     id: "1",
  //     name: "Library Stool Chair",
  //     price: 20,
  //     image: "/product-1.png",
  //     category: "Chairs",
  //     badge: {
  //       text: "New",
  //       variant: "success"
  //     }
  //   },
  //   {
  //     id: "2",
  //     name: "Library Stool Chair",
  //     price: 20,
  //     originalPrice: 80,
  //     image: "/product-2.png",
  //     category: "Chairs",
  //     badge: {
  //       text: "Sales",
  //       variant: "destructive"
  //     }
  //   },
  //   {
  //     id: "3",
  //     name: "Library Stool Chair",
  //     price: 20,
  //     image: "/product-3.png",
  //     category: "Chairs",
  //   },
  //   {
  //     id: "4",
  //     name: "Library Stool Chair",
  //     price: 20,
  //     image: "/product-4.png",
  //     category: "Chairs",
  //   },
  // ]

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = await client.fetch(`
            *[_type == "products"]{
              _id,
              title,
              priceWithoutDiscount,
              category->{
                _id,
                title
              },
              tags,
              price,
              badge,
              "imageUrl": image.asset->url,
              description,
              inventory
            }
  
  
        `);
        setProducts(query);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const limit = 4;
  // Limit the products displayed
  const limitedProducts = products.slice(0, limit);

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-2xl font-bold text-[#1D1D1B]">
          Featured Products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {limitedProducts.map((product) => (
            <Link
              href={`/product/${product._id}`}
              key={product._id}
              className="block"
            >
              <div
                key={product._id}
                className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-square">
                  {product.badge && (
                    <Badge
                      className={`absolute left-4 top-4 z-10 ${
                        product.badge === "new"
                          ? "bg-[#00B207] hover:bg-[#00B207]/90"
                          : product.badge !== "new"
                            ? "bg-[#FF8A00] hover:bg-[#FF8A00]/90"
                            : ""
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <Image
                    src={urlFor(product.imageUrl).url()}
                    alt={product.title}
                    width={312}
                    height={312}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium text-[#1D1D1B]">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#1D1D1B]">
                        ${product.price}
                      </span>
                      {product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.priceWithoutDiscount}
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
  );
}
