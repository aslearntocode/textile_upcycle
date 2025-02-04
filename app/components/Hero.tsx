export default function Hero() {
  return (
    <div className="bg-green-700 text-white py-24 px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-yellow-400">
        We Protect the Environment by Preventing Textile Waste from Reaching Landfills or Incinerators
        </h1>
        {/* <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">
          ETHICALLY<br />SOURCED
        </h2> */}
        {/* <p className="text-3xl mb-6 text-yellow-400 font-bold">
          Transforming textile waste into sustainable products
        </p> */}
        <div className="flex justify-center gap-4">
          <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-500 hover:text-black font-bold">
            Buy 100% Recycled Textile Products
          </button>
          <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-500 hover:text-black font-bold">
            Contact Us For Waste Textile Collection
          </button>
        </div>
      </div>
    </div>
  );
}
