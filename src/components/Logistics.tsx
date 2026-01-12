import React from 'react';
import { Ship, Plane, Truck } from 'lucide-react';

const Logistics: React.FC = () => {
  const shippingMethods = [
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Sea Freight",
      description: "Bulk shipping for large volumes"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Air Cargo",
      description: "Fast delivery for urgent shipments"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Land Transport",
      description: "Overland and local delivery"
    }
  ];

  return (
    <section id="logistics" className="mt-4 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Logistics & Export
          </h2>
          {/* <div className="w-20 h-1 bg-blue-600 mx-auto mb-2"></div> */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete shipping solutions from UK to global destinations
          </p>
        </div>

        {/* Shipping Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-4">
          {shippingMethods.map((method, index) => (
            <div key={index} className="text-center p-2 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {method.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Simple Content */}
        {/* <div className="grid md:grid-cols-2 gap- items-center mb"> */}
  {/* Left Side - Blur effect container */}
  {/* <div className="w-full flex justify-center">
    <div className="relative"> */}
      {/* Blur background (40% effect) */}
      {/* <div className="absolute inset-0 w-full h-full flex justify-center items-center -z-10">
        <div className="w-2/5 h-4/5 bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-lg rounded-2xl blur-lg"></div>
      </div> */}
      
      {/* Content box */}
      {/* <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg relative z-10">
        <Globe className="w-12 h-12 mx-auto mb-2" />
        <div className="font-bold">Worldwide</div>
        <div className="text-sm opacity-90">Export Service</div>
      </div>
    </div>
  </div> */}
  
  {/* Right Side - Content (60%) */}
  {/* <div className="w-full">
    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Shipping</h3>
    <p className="text-gray-600 mb-2">
      We handle complete logistics from UK ports to destinations worldwide. Our team manages shipping, documentation, and customs clearance.
    </p>
    <p className="text-gray-600">
      With established port partners and shipping lines, we ensure reliable and timely delivery of your materials.
    </p>
  </div>
</div> */}
       

        {/* Simple Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="text-xl font-bold text-blue-600 mb-1">30+</div>
            <div className="text-gray-900 font-medium">Countries</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-bold text-green-600 mb-1">24/7</div>
            <div className="text-gray-900 font-medium">Tracking</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-bold text-purple-600 mb-1">Door-to-Door</div>
            <div className="text-gray-900 font-medium">Service</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-bold text-yellow-600 mb-1">Full Docs</div>
            <div className="text-gray-900 font-medium">Included</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Logistics;