export default function B2CProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Sustainable Fashion Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product Card */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/product1.jpg" 
            alt="Recycled Fashion" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Recycled Denim Jacket</h3>
            <p className="text-gray-600 mb-2">
              Sustainably crafted from recycled denim materials.
            </p>
            <p className="text-green-800 font-bold mb-4">$89.99</p>
            <button 
              className="w-full bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Card */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/product2.jpg" 
            alt="Eco Bag" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Eco-Friendly Tote Bag</h3>
            <p className="text-gray-600 mb-2">
              Made from 100% recycled textile materials.
            </p>
            <p className="text-green-800 font-bold mb-4">$29.99</p>
            <button 
              className="w-full bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Card */}
        <div className="border rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/product3.jpg" 
            alt="Recycled Scarf" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Upcycled Silk Scarf</h3>
            <p className="text-gray-600 mb-2">
              Beautiful scarves made from reclaimed silk materials.
            </p>
            <p className="text-green-800 font-bold mb-4">$39.99</p>
            <button 
              className="w-full bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 