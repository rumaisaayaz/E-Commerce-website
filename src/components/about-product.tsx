import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <Link href="#" className="group">
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        <Image
          src={image}
          alt={name}
          width={305}
          height={375}
          className="object-cover w-[305px] h-[375px] transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
    </Link>
  )
}

