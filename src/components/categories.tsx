"use client";
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Category {
  _id: string; // Unique identifier for the category
  title: string; // Category title
  imageUrl: string; // URL of the category image
}


export default function TopCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = await client.fetch(`
       *[_type == "categories"]{
          _id,
          title,
          "imageUrl": image.asset->url
        }
      `);
       setCategories(query);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={`/productPage`} key={category._id} className="block">
            <Card className="overflow-hidden group cursor-pointer">
              <CardContent className="p-0 relative h-[427px] w-[424px]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={urlFor(category.imageUrl).url()}
                    alt={category.title}
                    width={424}
                    height={424}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute w-[424px] h-[85px] bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <h3 className="text-lg font-medium">{category.title}</h3>
                  <p className="text-sm text-gray-300">1,240 Products</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

