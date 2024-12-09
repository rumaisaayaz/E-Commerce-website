"use client";

import Image from "next/image";

import {
  Clock,
  Palette,
  Shield,
  Star,
  LucideIcon,
} from "lucide-react";
import { ProductGrid } from "@/components/product-grid";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-4 bg-[#F8F9FA]">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#006D77] bg-opacity-10 mb-3">
        <Icon className="w-5 h-5 text-[#006D77]" />
      </div>
      <h3 className="text-base font-medium text-gray-900 mb-1.5">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}



interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  category: string;
}

export default function AboutPage() {
  const features = [
    {
      icon: Clock,
      title: "Best day at comforty",
      description:
        "We deliver the best day at your door step every day in seconds",
    },
    {
      icon: Palette,
      title: "Made by true artisans",
      description:
        "Hand-crafted pieces that pass through generations of craftmanship",
    },
    {
      icon: Shield,
      title: "Unbeatable prices",
      description:
        "Quality you can trust. We deliver pieces at prices you'll love",
    },
    {
      icon: Star,
      title: "Top-notch designing",
      description:
        "Discover our flagship brand of designer furniture and upgrades",
    },
  ];

  const Products: Product[] = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: 273,
      image: "/product-10.png",
      isNew: true,
      category: "Classic",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: 253,
      image: "/product-9.png",
      isNew: true,
      category: "Classic",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: 253,
      image: "/product-8.png",
      category: "Classic",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: 253,
      image: "/product-5.png",
      category: "Classic",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 m-10 gap-4">
        <div className="bg-[#006D77] w-[672px] h-[478px] text-white p-8 md:p-10 flex flex-col justify-center">
          <div className="w-[495px] h-[161px] gap-3 mb-20">
            <h1 className="text-3xl md:text-3xl font-semibold mb-3">
              About Us - Comforty
            </h1>
            <p className="text-lg font-normal opacity-90 mb-6 leading-relaxed">
              At Comforty, we believe that the right chair can transform your
              space. With our dedication to quality craftsmanship and timeless
              aesthetics, we craft chairs that seamlessly blend style with
              functionality.
            </p>
          </div>
          <button className="text-white  top-[368px] bg-[#007580] text-sm font-medium hover:bg-opacity-90 transition-colors w-[179px] h-[56px]">
            View collection
          </button>
        </div>
        <Image
          src="/product-1.png"
          alt="Featured Chair"
          width={619}
          height={478}
          className="object-contain w-[619px] h-[478px] min-h-[300px] md:min-h-full"
        />
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-10">
          What Makes Our Brand Different
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-10">
          Our Popular Products
        </h2>
        <ProductGrid products={Products} />
      </section>
    </div>
  );
}