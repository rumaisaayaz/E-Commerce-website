import NewsletterInstagram from '@/components/newsletter-instagram'
import { ProductGrid } from '@/components/product-grid'
import React from 'react'
import { Products } from '@/types/product'



const ProductPage = () => {
  return (
    <div>
        <ProductGrid products={Products} />
        <NewsletterInstagram/>
    </div>
  )
}

export default ProductPage