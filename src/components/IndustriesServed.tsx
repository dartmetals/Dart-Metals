import React from 'react';
import { Factory, Car, Building, Ship } from 'lucide-react';

const IndustriesServed: React.FC = () => {
  const industries = [
    {
      icon: <Factory className="w-8 h-8" />,
      name: "Steel Mills",
      description: "Raw materials for steel production"
    },
    {
      icon: <Car className="w-8 h-8" />,
      name: "Automotive",
      description: "Components and manufacturing"
    },
    {
      icon: <Building className="w-8 h-8" />,
      name: "Construction",
      description: "Building and infrastructure"
    },
    {
      icon: <Ship className="w-8 h-8" />,
      name: "Shipbuilding",
      description: "Marine grade materials"
    }
  ];

  return (
    <section id="industries" className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="text-center mt-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Industries <span className="text-green-600">We Serve</span>
          </h2>
          {/* <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div> */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Supplying quality metals to global industries
          </p>
        </div>

        {/* Main Content Grid - 40% cards on left, 60% content on right */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Side - 4 Cards (2x2 Grid) - 40% width */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-green-600 mx-auto">
                    {industry.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-center mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Detailed Content & CTA - 60% width */}
          <div className="lg:col-span-3 -mt-6">
            <div className="rounded-2xl  p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Serving Global Industries
              </h3>
              
              <div className="space-y-6 mb-8">
                <p className="text-gray-700">
                  We supply premium-quality ferrous and non-ferrous metals to industries worldwide. Our materials are essential for manufacturing, construction, and production processes across multiple sectors.
                </p>
                
                <p className="text-gray-700">
                  From steel mills requiring raw materials to automotive manufacturers needing specialized components, we provide the right metals for each industry's unique requirements. Our materials meet strict quality standards and are delivered with complete documentation.
                </p>
                
                {/* Additional Industries */}
        <div className="mt-1 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Trusted by Industries Worldwide</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "ISO Certified", color: "bg-green-100 text-green-800" },
              { name: "Global Delivery", color: "bg-blue-100 text-blue-800" },
              { name: "Quality Materials", color: "bg-purple-100 text-purple-800" },
              { name: "UK Based", color: "bg-red-100 text-red-800" },
            //   { name: "Export Ready", color: "bg-yellow-100 text-yellow-800" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`px-5 py-2 rounded-full font-medium ${item.color}`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;