"use client";
import TopCategories from "@/components/categories";
import Hero from "@/components/Hero";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FeaturedProducts } from "@/components/featured-products";
import ProductShowcase from "@/components/product-showcase"
import { ProductCard } from "@/components/product-card";
import { client } from "@/sanity/lib/client";

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

const Home = () => {
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
  
    const limit = 5;
    // Limit the products displayed
    const limitedProducts = products.slice(0, limit);
  const image = [
    { src: "/logo-0.png", alt: "company logos", width: 87, height: 87 },
    { src: "/logo-1.png", alt: "company logos", width: 107, height: 109 },
    { src: "/logo-2.png", alt: "company logos", width: 135, height: 139 },
    { src: "/logo-3.png", alt: "company logos", width: 63, height: 65 },
    { src: "/logo-4.png", alt: "company logos", width: 98, height: 101 },
    { src: "/logo-5.png", alt: "company logos", width: 113, height: 115 },
    { src: "/logo-6.png", alt: "company logos", width: 84, height: 87 },
  ];
  return (
    <div>
      <Hero />
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
        {image.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
        ))}
      </div>

      <FeaturedProducts/>
      <TopCategories/>
      <ProductShowcase products={limitedProducts} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"></section>
      <h2 className="mb-8 text-center text-2xl font-medium text-gray-900">
        Our Products
      </h2>
      <section/>
      <ProductCard/>
    </div>
  );
};

export default Home;
