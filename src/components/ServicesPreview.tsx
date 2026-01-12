import React from 'react';
import { Magnet, Battery, CheckCircle, Shield } from 'lucide-react';

const MaterialsSection: React.FC = () => {
  return (
    <section id="materials" className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 mt-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            OUR MATERIALS
          </span>
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium <span className="text-blue-600">Ferrous & Non-Ferrous</span> Metals
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
            We export high-quality scrap metals to industries worldwide
          </p>
          {/* <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div> */}
        </div>

        {/* Ferrous Metals Section */}
        <div className="mb-12 -mt-12">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Magnet className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ferrous Metals
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden ">
                <img 
                  src="/ferrous.png" 
                  alt="Ferrous Metals Collection"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold">Magnetic</div>
                <div className="text-sm opacity-90">Contains Iron</div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <div className="mb-6">
                <p className="md:text-lg text-gray-700 mb-4">
                  Ferrous metals are iron-based materials that are magnetic and commonly used in construction, automotive, and heavy industries. These metals are strong, durable, and perfect for structural applications.
                </p>
                <p className="text-gray-600">
                  We export various ferrous metals including heavy melting steel, cast iron scrap, shredded scrap, and steel turnings. All materials are processed, sorted, and prepared for international shipping.
                </p>
              </div>

              {/* Simple List */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Heavy Melting Steel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Cast Iron Scrap</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Shredded Scrap</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Steel Turnings</span>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="mt-8 flex items-center bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <div className="font-bold text-gray-900">Quality Certified</div>
                  <div className="text-sm text-gray-600">All materials meet international standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Ferrous Metals Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
              <Battery className="w-7 h-7 text-yellow-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Non-Ferrous Metals
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="mb-6">
                <p className="md:text-lg text-gray-700 mb-4">
                  Non-ferrous metals contain no iron and are non-magnetic. They are corrosion-resistant, lightweight, and often more valuable than ferrous metals.
                </p>
                <p className="text-gray-600">
                  These metals are essential for electronics, aerospace, plumbing, and specialty manufacturing. We export clean, sorted non-ferrous metals ready for industrial use.
                </p>
              </div>

              {/* Simple List */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Copper Scrap</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Aluminum Scrap</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Brass Scrap</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Stainless Steel</span>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="mt-8 flex items-center bg-yellow-50 p-4 rounded-lg">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <div className="font-bold text-gray-900">Premium Quality</div>
                  <div className="text-sm text-gray-600">Sorted and certified for export</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/non-ferrous.png" 
                  alt="Non-Ferrous Metals Collection"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-yellow-500 text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold">Non-Magnetic</div>
                <div className="text-sm opacity-90">No Iron Content</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;