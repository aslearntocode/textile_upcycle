'use client'

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* About Us content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-6">
            We are committed to transforming the textile industry through sustainable practices 
            and innovative recycling solutions. Our mission is to reduce textile waste while 
            creating high-quality products that benefit both our customers and the environment.
          </p>
        </section>

        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">1. Collection</h3>
              <p className="text-gray-700">
                We meticulously source and collect textile waste from various industries 
                and communities.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">2. Processing</h3>
              <p className="text-gray-700">
                Using advanced technology, we sort, clean, and process materials to 
                create high-quality recycled textiles.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">3. Production</h3>
              <p className="text-gray-700">
                We transform recycled materials into sustainable products for both 
                businesses and consumers.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Reduced landfill waste</li>
                <li>Lower carbon emissions</li>
                <li>Water conservation</li>
                <li>Sustainable resource management</li>
              </ul>
            </div>
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Social Impact</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Job creation in recycling sector</li>
                <li>Community engagement programs</li>
                <li>Educational initiatives</li>
                <li>Support for sustainable fashion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Want to learn more about our recycling programs or sustainable products? 
            We'd love to hear from you.
          </p>
          <button className="bg-green-700 text-white px-8 py-3 rounded-md hover:bg-green-700">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
} 