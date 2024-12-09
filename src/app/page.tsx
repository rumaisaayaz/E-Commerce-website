import TopCategories from "@/components/categories";
import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";
import { FeaturedProducts } from "@/components/featured-products";

import ProductShowcase from "@/components/product-showcase"
import { Product } from "@/types/product"
import { ProductGrid } from "@/components/product-grid";

const Products : Product[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 273,
    image: "/product-1.png",
    isNew: true,
    category:"Classic",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 253,
    image: "/product-2.png",
    isNew: true,
    category:"Classic",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 253,
    image: "/product-3.png",
    category:"Classic",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 253,
    image: "/product-4.png",
    category:"Classic",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: 273,
    image: "/image-1.png",
    isNew: true,
    category:"Classic",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: 253,
    image: "/product-5.png",
    isNew: true,
    category:"Classic",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: 253,
    image: "/product-7.png",
    category:"Classic",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: 253,
    image: "/product-1.png",
    category:"Classic",
  },
]


const showcaseproducts: Product[] = [
  {
    id: 1,
    name: "Modern Orange Chair",
    image: "/product-3.png",
    price: 299,
    category: "Modern",
  },
  {
    id:2,
    name: "Classic White Chair",
    image: "/product-4.png",
    price: 399,
    category: "Classic",
  },
  {
    id:3,
    name: "Vintage Wood Chair",
    image: "/product-1.png",
    price: 249,
    category: "Vintage",
  },
  {
    id: 4,
    name: "Grey Dining Chair",
    image: "/product-5.png",
    price: 349,
    category: "Modern",
  },
  {
    id: 5,
    name: "Grey Dining Chair",
    image: "/product-1.png",
    price: 349,
    category: "Modern",
  }, 
]


const Home = () => {
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
      <ProductShowcase products={showcaseproducts} />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"></section>
      <h2 className="mb-8 text-center text-2xl font-medium text-gray-900">
        Our Products
      </h2>
      <section/>
      <ProductGrid products={Products} />
    </div>
  );
};

export default Home;
