'use client'
import { useState } from 'react'
import Image from 'next/image'

interface ProductProps {
  title: string
  description: string
  image: string
  price: number
}

export default function Product({ title, description, image, price }: ProductProps) {
  const [quantity, setQuantity] = useState(0)
  const [showQuantityControls, setShowQuantityControls] = useState(false)

  const handleAddToCart = () => {
    setQuantity(1)
    setShowQuantityControls(true)
  }

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <Image 
        src={image} 
        alt={title}
        width={400}
        height={300}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-green-800 font-bold mb-4">${price}</p>

      {!showQuantityControls ? (
        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center justify-between bg-gray-100 rounded p-2">
          <button
            onClick={() => updateQuantity(quantity - 1)}
            className="bg-green-600 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-green-700"
          >
            -
          </button>
          <span className="font-bold">{quantity}</span>
          <button
            onClick={() => updateQuantity(quantity + 1)}
            className="bg-green-600 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-green-700"
          >
            +
          </button>
        </div>
      )}
    </div>
  )
} 