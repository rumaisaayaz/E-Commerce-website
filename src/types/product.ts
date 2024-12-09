export interface Product {
    id: number
    name: string
    image: string
    imageUrl?: string
    price: number
    description?: string
    category?: string
    isNew?: boolean
    ratings?: number
  }
  export const Products: Product[] = [
    {
      id: 1,
      image: '/product-1.png',
      name: "The Dandy Chair",
      price: 250,
      description: "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
      ratings: 4.5,
    },
    {
      id: 2,
      image: '/product-2.png',
      name: "Rustic Vase Set",
      price: 115,
      description: "Add a rustic charm to your home with this beautiful vase set. Perfect for displaying fresh or dried flowers, these vases bring a touch of nature indoors.",
      ratings: 4.2,
    },
    {
      id: 3,
      image: '/product-3.png',
      name: "The Silky Vase",
      price: 125,
      description: "Sleek and modern, the Silky Vase adds a touch of elegance to any room. Its smooth surface and curved design make it a standout piece in your home decor.",
      ratings: 4.7,
    },
    {
      id: 4,
      image: '/product-4.png',
      name: "The Lucy Lamp",
      price: 399,
      description: "Illuminate your space with the Lucy Lamp. Its unique design and warm glow create a cozy atmosphere in any room. Perfect for reading nooks or as a statement piece.",
      ratings: 4.8,
    },
    {
      id: 5,
      image: '/image-1.png',
      name: "The Dandy Chair",
      price: 205,
      description: "Another variation of our iconic Dandy Chair. This version features a different upholstery color, perfect for those looking for a lighter touch in their living space.",
      ratings: 4.6,
    },
    {
      id: 6,
      image: '/product-5.png',
      name: "The Dandy Chair",
      price: 250,
      description: "Yet another variation of the Dandy Chair, this time with a darker upholstery. Ideal for those who prefer a more dramatic look in their interior design.",
      ratings: 4.4,
    },
    {
      id: 7,
      image: '/product-7.png',
      name: "The Dandy Chair",
      price: 250,
      description: "A unique take on our classic Dandy Chair. This version features a patterned upholstery, adding an extra layer of visual interest to your living space.",
      ratings: 4.3,
    },
    {
      id: 8,
      image: '/product-1.png',
      name: "The Dandy Chair",
      price: 270,
      description: "Our Dandy Chair in a bold, eye-catching color. Perfect for those who want to make a statement with their furniture choices.",
      ratings: 4.5,
    },
    {
      id: 9,
      image: '/product-10.png',
      name: "The Dandy Chair",
      price: 180,
      description: "The final variation of our Dandy Chair collection. This version combines comfort and style in a subtle, sophisticated color palette.",
      ratings: 4.7,
    },
    { id: 10, name: "The Dandy chair", price: 200, image: "/image-3.png" },
    { id: 11, name: "Rustic Vase Set", price: 155, image: "/image-1.png" },
    { id: 12, name: "The Silky Vase", price: 125, image: "/image-2.png" },
    { id: 13, name: "The Lucy Lamp", price: 399, image: "/image-3.png" },
  ]
  
  