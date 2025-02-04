'use client'

import { useRouter } from 'next/navigation';

export default function B2BProducts() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">B2B Recycled Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Card */}
        <div className="border rounded-lg overflow-hidden">
          <img 
            src="/product1.jpg" 
            alt="Recycled Textile" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Recycled Textile Bulk</h3>
            <p className="text-gray-600 mb-4">
              High-quality recycled textile materials suitable for manufacturing. Available in various grades and quantities.
            </p>
            <button 
              className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-700"
              onClick={() => router.push('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Add more product cards as needed */}
      </div>
    </div>
  );
} 