"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import CategoryFilter from "./CategoryFilter"; // Import the filter component

interface Product {
  _id: string;
  title: string;
  priceWithoutDiscount: number | null;
  category: {
    _id: string;
    title: string;
  };
  tags: string[];
  price: number;
  badge: string | null;
  imageUrl: string;
  description: string;
  inventory: number;
}

type item = {id:string};

export function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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
        setFilteredProducts(query);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategorySelect = (categoryId: string | null) => {
    if (categoryId === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category._id === categoryId
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query) ||
      product.category.title.toLowerCase().includes(query) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query))
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = existingCart.findIndex(
      (item:item) => item.id === product._id
    );

    if (productIndex !== -1) {
      existingCart[productIndex].quantity += 1;
    } else {
      const cartItem = {
        id: product._id,
        name: product.title,
        price: product.price,
        image: urlFor(product.imageUrl).url(),
        quantity: 1,
      };
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="w-[50%] rounded-lg border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <CategoryFilter onCategorySelect={handleCategorySelect} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product: Product) => (
          <Link href={`/product/${product._id}`} key={product._id} className="block">
            <div className="group relative rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                {product.badge && (
                  <Badge className="absolute left-2 top-2 bg-green-500 text-white hover:bg-green-600">
                    {product.badge}
                  </Badge>
                )}
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.title}
                  width={312}
                  height={312}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">${product.price}</p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-sm hover:bg-[#029FAE]"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
