export default function KeyProducts() {
  const products = [
    {
      id: 1,
      name: "Upcycled Coaster",
      image: "/Coasters.jpeg",
      description: "High-quality textile upcycled into coasters"
    },
    {
      id: 2,
      name: "Recycled Planks",
      image: "/products/denim.jpg",
      description: "Premium recycled denim for eco-conscious manufacturing"
    },
    {
      id: 3,
      name: "Recycled Trays",
      image: "/products/cotton-blend.jpg",
      description: "Sustainable cotton blend perfect for casual wear"
    },
    {
      id: 4,
      name: "Recycled Kids Furniture",
      image: "/products/yarn.jpg",
      description: "Recycled yarn for sustainable textile production"
    },
    {
      id: 5,
      name: "Recycled Photo Frames",
      image: "/products/wool.jpg",
      description: "Recycled wool blend for premium clothing"
    },
    {
      id: 6,
      name: "Recycled Pots",
      image: "/products/nylon.jpg",
      description: "Durable recycled nylon for sportswear"
    },
    // {
    //   id: 7,
    //   name: "Upcycled Leather",
    //   image: "/products/leather.jpg",
    //   description: "Sustainable leather alternatives for accessories"
    // },
    // {
    //   id: 8,
    //   name: "Recycled Silk Material",
    //   image: "/products/silk.jpg",
    //   description: "Premium recycled silk for luxury fashion"
    // }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Our Key Products</h2>
        
        {/* Green line decoration */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-green-700"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-800">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <button className="mt-4 w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 