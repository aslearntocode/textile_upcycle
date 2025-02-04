export default function Impact() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Our Impact</h2>
        
        {/* Green line decoration */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-green-700"></div>
        </div>

        {/* Stats Container */}
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* TPA Stat */}
          <div className="bg-yellow-400 rounded-lg p-8 text-center min-w-[200px]">
            <div className="text-5xl font-bold text-white mb-2">100 MT</div>
            <div className="text-white">Reduced Carbon Emission by 2026</div>
          </div>

          {/* Suppliers Stat */}
          <div className="bg-orange-400 rounded-lg p-8 text-center min-w-[200px]">
            <div className="text-5xl font-bold text-white mb-2">100,000+</div>
            <div className="text-white">Plants Saved from Deforestation by 2026</div>
          </div>

          {/* Bottles Image
          <div className="flex justify-center min-w-[200px]">
            <div className="relative">
              <img 
                src="/bottles.png" 
                alt="2+ Billion Bottles Recycled" 
                className="h-32 object-contain"
              />
              <div className="text-center mt-2">
                <span className="font-bold">2+ Billion</span><br />
                BOTTLES RECYCLED
              </div>
            </div>
          </div> */}

          {/* Zip Codes Stat */}
          <div className="bg-green-400 rounded-lg p-8 text-center min-w-[200px]">
            <div className="text-5xl font-bold text-white mb-2">100,000+</div>
            <div className="text-white">Kgs of Textile Waste Saved from Landfill by 2026</div>
          </div>

          {/* States Stat
          <div className="bg-green-600 rounded-lg p-8 text-center min-w-[200px]">
            <div className="text-5xl font-bold text-white mb-2">20+</div>
            <div className="text-white">States</div>
          </div> */}
        </div>
      </div>
    </section>
  );
} 