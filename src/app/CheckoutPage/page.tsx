"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (
      !customerDetails.name ||
      !customerDetails.email ||
      !customerDetails.address ||
      !customerDetails.city ||
      !customerDetails.postalCode
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    alert(
      "Order placed successfully! Thank you for shopping with us."
    );

    // Clear the cart and form
    localStorage.removeItem("cart");
    setCartItems([]);
    setCustomerDetails({
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you havent added anything to your cart yet.
          </p>
          <Link href="/productPage">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold mb-8">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-base font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Customer Details */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={customerDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={customerDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={customerDetails.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={customerDetails.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={customerDetails.postalCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </Card>
          <div className="mt-6">
            <Button
              className="w-full bg-teal-500 hover:bg-teal-600"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
