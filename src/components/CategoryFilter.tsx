"use client";

import { useState, useEffect } from "react";

interface Category {
  _id: string;
  title: string;
}

interface CategoryFilterProps {
  onCategorySelect: (categoryId: string | null) => void;
}

export default function CategoryFilter({ onCategorySelect }: CategoryFilterProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = await fetch("https://giaic-hackathon-template-08.vercel.app/api/categories"); // Adjust API route to your setup
        const data = await query.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    onCategorySelect(categoryId);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-center gap-4 flex-wrap">
        <button
          className={`px-6 py-2 rounded-full border text-sm font-medium ${
            selectedCategory === null
              ? "bg-[#029FAE] text-white border-[#029FAE]"
              : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
          }`}
          onClick={() => handleCategoryChange(null)}
        >
          Show All Products
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            className={`px-6 py-2 rounded-full border text-sm font-medium ${
              selectedCategory === category._id
                ? "bg-[#029FAE] text-white border-[#029FAE]"
                : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange(category._id)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}
