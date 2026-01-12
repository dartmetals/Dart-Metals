import React from 'react';
import { Leaf, Shield, Recycle, Globe } from 'lucide-react';

const SustainabilityCompliance: React.FC = () => {
  return (
    <section id="sustainability" className="py-16 bg-gray-50 -mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sustainability & Compliance
          </h2>
          {/* <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div> */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Responsible metal recycling and export practices
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Sustainability */}
          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-green-600 mr-4" />
              <h3 className="text-xl font-bold text-gray-900">Sustainable Practices</h3>
            </div>
            <p className="text-gray-700 mb-4">
              We promote eco-friendly metal recycling to reduce environmental impact. Our processes minimize waste and maximize material recovery.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Recycle className="w-4 h-4 text-green-600 mr-3" />
                <span className="text-gray-700">Responsible material sourcing</span>
              </div>
              <div className="flex items-center">
                <Recycle className="w-4 h-4 text-green-600 mr-3" />
                <span className="text-gray-700">Efficient recycling processes</span>
              </div>
              <div className="flex items-center">
                <Recycle className="w-4 h-4 text-green-600 mr-3" />
                <span className="text-gray-700">Waste reduction initiatives</span>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-bold text-gray-900">Export Compliance</h3>
            </div>
            <p className="text-gray-700 mb-4">
              We follow all international export regulations and standards. Complete documentation and legal compliance for every shipment.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-blue-600 mr-3" />
                <span className="text-gray-700">International regulations</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-blue-600 mr-3" />
                <span className="text-gray-700">Legal documentation</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-blue-600 mr-3" />
                <span className="text-gray-700">Customs compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4">
            <div className="text-xl font-bold text-green-600 mb-1">Eco</div>
            <div className="text-gray-900 font-medium">Friendly</div>
          </div>
          <div className="p-4">
            <div className="text-xl font-bold text-blue-600 mb-1">Legal</div>
            <div className="text-gray-900 font-medium">Compliant</div>
          </div>
          <div className="p-4">
            <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-gray-900 font-medium">Responsible</div>
          </div>
          <div className="p-4">
            <Recycle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-gray-900 font-medium">Recycling</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCompliance;