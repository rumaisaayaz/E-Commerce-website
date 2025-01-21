'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Function to calculate the total quantity of items in the cart
    const calculateCartItemCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const count = cart.reduce(
        (total: number, item: { quantity: number }) => total + item.quantity,
        0
      );
      setCartItemCount(count);
    };

    // Calculate cart items on component mount
    calculateCartItemCount();

    // Add a custom event listener for cart updates
    const handleStorageChange = () => calculateCartItemCount();
    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  },[]);

  return (
    <header className={cn('w-full bg-white border-b', className)}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <Image
              src="/logo-icon.png"
              alt="Comforty Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-medium">Comforty</span>
        </Link>

        <Link href="/cart">
          <Button
            variant="ghost"
            size="icon"
            className="w-[120px] h-[44px] rounded-[8px] gap-3"
            aria-label={`Shopping cart with ${cartItemCount} items`}
          >
            <ShoppingCart className="w-6 h-6" />
            Cart
            {cartItemCount > 0 && (
              <span className="w-5 h-5 flex items-center justify-center bg-[#46AFB3] text-white text-xs rounded-full">
                {cartItemCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
}
