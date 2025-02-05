'use client'
import { useState } from 'react'
import Image from 'next/image'

interface Product {
  title: string
  description: string
  image: string
  price: number
}

const products: Product[] = [
  {
    title: "Upcycled Coaster",
    description: "High-quality textile upcycled into beautiful coasters",
    image: "/Coasters.jpeg",
    price: 1499
  },
  {
    title: "Recycled Planks",
    description: "Premium recycled denim for eco-conscious manufacturing",
    image: "/planks.jpg",
    price: 2499
  },
  {
    title: "Recycled Trays",
    description: "Sustainable cotton blend perfect for casual wear",
    image: "/trays.jpg",
    price: 1999
  },
  {
    title: "Upcycled Coaster",
    description: "High-quality textile upcycled into beautiful coasters",
    image: "/Coasters.jpeg",
    price: 1499
  },
  {
    title: "Recycled Planks",
    description: "Premium recycled denim for eco-conscious manufacturing",
    image: "/planks.jpg",
    price: 2499
  },
  {
    title: "Recycled Trays",
    description: "Sustainable cotton blend perfect for casual wear",
    image: "/trays.jpg",
    price: 1999
  }
]

export default function KeyProducts() {
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleAddToCart = (title: string): void => {
    setQuantities(prev => ({
      ...prev,
      [title]: (prev[title] || 0) + 1
    }))
  }

  const updateQuantity = (title: string, delta: number): void => {
    setQuantities(prev => {
      const newQuantity = Math.max(0, (prev[title] || 0) + delta)
      return {
        ...prev,
        [title]: newQuantity
      }
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-12">Our Key Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.title} className="bg-white rounded-lg shadow-lg p-6">
            <Image 
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-green-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-green-800 font-bold mb-4">{formatPrice(product.price)}</p>

            {!quantities[product.title] ? (
              <button
                onClick={() => handleAddToCart(product.title)}
                className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center justify-between bg-gray-100 rounded p-2">
                <button
                  onClick={() => updateQuantity(product.title, -1)}
                  className="bg-green-600 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-green-700"
                >
                  -
                </button>
                <span className="font-bold">{quantities[product.title]}</span>
                <button
                  onClick={() => updateQuantity(product.title, 1)}
                  className="bg-green-600 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-green-700"
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 