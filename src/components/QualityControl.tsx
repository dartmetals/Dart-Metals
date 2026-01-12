import React from 'react';
import { CheckCircle, Shield, FileCheck, Eye } from 'lucide-react';

const QualityControl: React.FC = () => {
  const qualityPoints = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Inspection",
      description: "Every material undergoes thorough visual checking for quality and purity"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Testing & Analysis",
      description: "Scientific testing to verify composition and meet specifications"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Certification",
      description: "Complete documentation and certificates with every shipment"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Final Verification",
      description: "Last check before packaging to ensure quality standards"
    }
  ];

  return (
    <section id="quality" className="bg-gray-50 py-8 -mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mt-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our <span className="text-blue-600">Quality Control</span>
          </h2>
          {/* <div className="w-20 h-1 bg-blue-600 mx-auto mb-2"></div> */}
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            We ensure every shipment meets the highest standards with our simple, effective quality process
          </p>
        </div>

        {/* Quality Process */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Process Steps */}
            <div>
              <div className="space-y-6">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-blue-600">
                        {point.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="text-center">
                <div className="inline-block bg-blue-600 text-white p-4 rounded-lg mb-4">
                  <Shield className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  All materials are tested and certified before export
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Quality Standards */}
        <div className="bg-gray-50 rounded-xl p-2 -mt-2">
          {/* <div className="text-center mb-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Standards</h3>
            <p className="text-gray-600">We follow international quality requirements</p>
          </div> */}
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center ">
              <div className="text-2xl font-bold text-blue-600 ">ISO</div>
              <div className="text-gray-900 font-medium">Certified</div>
            </div>
            <div className="text-center ">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-gray-900 font-medium">Tested</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">SGS</div>
              <div className="text-gray-900 font-medium">Verified</div>
            </div>
            <div className="text-center ">
              <div className="text-2xl font-bold text-yellow-600 ">Trace</div>
              <div className="text-gray-900 font-medium">Tracked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;