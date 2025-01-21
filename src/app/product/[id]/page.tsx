"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  _id: string;
  title: string;
  price: number;
  category: {
    _id: string;
    title: string;
  };
  tags: string[];
  badge: string | null;
  imageUrl: string;
  description: string;
  inventory: number;
}

type item = {id:string};

const ProductDetails: React.FC = () => {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const fetchedProduct: Product = await client.fetch(
          `*[_type == "products" && _id == $id][0]{
            _id,
            title,
            price,
            category->{
              _id,
              title
            },
            tags,
            badge,
            "imageUrl": image.asset->url,
            description,
            inventory
          }`,
          { id: productId }
        );

        setProduct(fetchedProduct);

        // Fetch related products based on category or tags
        const related: Product[] = await client.fetch(
          `*[_type == "products" && category._ref == $categoryId && _id != $id][0...4]{
            _id,
            title,
            price,
            badge,
            "imageUrl": image.asset->url
          }`,
          { categoryId: fetchedProduct.category._id, id: productId }
        );

        setRelatedProducts(related);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) {
      console.error("Product is undefined");
      return;
    }
  
    // Get the cart from localStorage or initialize it as an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    // Check if the product already exists in the cart
    const productIndex = existingCart.findIndex(
      (item:item) => item.id === product._id
    );
  
    if (productIndex !== -1) {
      // If the product exists, increment its quantity
      existingCart[productIndex].quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart
      const cartItem = {
        id: product._id,
        name: product.title,
        price: product.price,
        image: urlFor(product.imageUrl).url(),
        quantity: 1, // Start with a quantity of 1
      };
      existingCart.push(cartItem);
    }
  
    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };
  

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-300 h-12 w-12 mb-4">
          </div>
          <p className="text-lg font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-8">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-8">
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16">
        <div className="flex-1">
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={`Image of ${product.title}`}
            width={1000}
            height={1000}
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="flex-1 lg:max-w-[500px]">
          <h1 className="text-[32px] leading-tight font-medium mb-4">{product.title}</h1>
          <div className="flex justify-center items-baseline bg-[#029FAE] w-36 h-7 rounded-full mb-8">
          <p className="text-xl font-medium  text-white">${product.price}.00 USD</p>
          </div>

          <p className="text-[16px] leading-relaxed text-gray-600 mb-6">
            {product.description || 'No description available.'}
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
            <li className="flex items-center gap-2 text-gray-600">
              <Dot className="h-4 w-4" /> 
              {product.inventory > 0 ? `${product.inventory} in stock` : 'Out of stock'}
            </li>
          </ul>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="w-full md:w-auto flex flex-col items-start md:items-center">
              <span className="block md:hidden text-[16px] font-medium mb-2">Quantity</span>
              <div className="flex items-center h-12 bg-gray-100 rounded-lg overflow-hidden">
              <Button
                className="h-full px-4 bg-gray-100 hover:bg-gray-200 text-black rounded-none"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                -
              </Button>
              <span className="w-12 text-center text-lg font-medium">{quantity}</span>
              <Button
                className="h-full px-4 bg-gray-100 hover:bg-gray-200 text-black rounded-none"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </Button>
              </div>
            </div>
            <Button
              className="text-xl rounded-lg  w-full md:w-auto h-12 px-6 bg-[#029FAE] hover:bg-[#2A254B]/90"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-[24px] font-medium mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Link
              key={relatedProduct._id}
              href={`/product/${relatedProduct._id}`}
              className="group"
            >
              <div className="flex flex-col">
                <div className="relative aspect-[4/5] w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={urlFor(relatedProduct.imageUrl).url()}
                    alt={relatedProduct.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[20px] font-medium mb-2">{relatedProduct.title}</h3>
                <span className="text-[16px] text-gray-600">${relatedProduct.price}.00</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
