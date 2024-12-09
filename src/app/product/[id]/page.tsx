'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dot } from 'lucide-react';
import { useParams } from 'next/navigation';

// Assuming Products is imported from somewhere
import { Products } from '@/types/product';

const ProductDetails: React.FC = () => {
  const params = useParams();
  const productId = parseInt(params.id as string, 10);
  const product = Products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product) {
      console.error("Product is undefined");
      return;
    }
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-8">
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16">
        <div className="flex-1">
          <Image
            src={product.image}
            alt={`Image of ${product.name}`}
            width={1000}
            height={1000}
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="flex-1 lg:max-w-[500px]">
          <h1 className="text-[32px] leading-tight font-medium mb-4">{product.name}</h1>
          <p className="text-[20px] font-medium mb-8">PKR {product.price}</p>

          <span className="text-[16px] font-medium mb-3 block">Description</span>
          <p className="text-[16px] leading-relaxed text-gray-600 mb-6">
            {product.description || 'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.'}
          </p>

          <ul className="flex flex-col gap-2 mb-8">
            <li className="flex items-center gap-2 text-gray-600">
              <Dot className="h-4 w-4" /> Premium material
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <Dot className="h-4 w-4" /> Handmade upholstery
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <Dot className="h-4 w-4" /> Quality timeless classic
            </li>
          </ul>

          <h2 className="text-[16px] font-medium mb-4">Dimensions</h2>
          <div className="flex flex-col gap-4 mb-8">
            <ul className="flex gap-16">
              <li className="text-gray-600 w-16">Height</li>
              <li className="text-gray-600 w-16">Width</li>
              <li className="text-gray-600 w-16">Depth</li>
            </ul>
            <ul className="flex gap-16">
              <li className="font-medium w-16">100cm</li>
              <li className="font-medium w-16">75cm</li>
              <li className="font-medium w-16">50cm</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="w-full md:w-auto">
              <span className="block md:hidden text-[16px] font-medium mb-2">Quantity</span>
              <div className="flex items-center h-12 bg-gray-100">
                <Button
                  className="h-full px-4 rounded-none bg-gray-100 hover:bg-gray-200 text-black"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  className="h-full px-4 rounded-none bg-gray-100 hover:bg-gray-200 text-black"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            <Button
              className="w-full md:w-auto h-12 px-8 rounded-none bg-[#2A254B] hover:bg-[#2A254B]/90"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16 py-16 bg-[#F9F9F9]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <h2 className="text-[24px] font-medium mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group">
                <div className="flex flex-col">
                  <div className="relative aspect-[4/5] w-full mb-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="text-[20px] font-medium mb-2">{product.name}</h3>
                  <span className="text-[16px] text-gray-600">PKR {product.price}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button className="h-12 px-8 rounded-none bg-[#F9F9F9] hover:bg-gray-200 text-black border border-black">
              View collection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

