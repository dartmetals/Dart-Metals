import React from 'react';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Certified",
      description: "All materials tested and certified"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliable Delivery",
      description: "On-time shipping to your location"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "UK Based",
      description: "Operating from United Kingdom"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced in metal exports"
    }
  ];

  return (
    <section id="why-choose" className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="text-center mt-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          {/* <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div> */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for metal export solutions
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 -mt-6 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-600">
                {reason.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Simple Content */}
        {/* <div className="bg-white rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Metal Export Partner</h3>
              <p className="text-gray-600 mb-4">
                We provide complete metal export solutions from sourcing to delivery. With quality materials, reliable logistics, and professional service.
              </p>
              <p className="text-gray-600">
                Focus on your business while we handle your metal supply needs with expertise and care.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-blue-600 text-white p-6 rounded-xl">
                <div className="text-2xl font-bold mb-2">UK</div>
                <div>Based Company</div>
                <div className="text-sm opacity-90 mt-2">Exporting Worldwide</div>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default WhyChooseUs;