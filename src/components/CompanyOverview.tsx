import React from 'react';
import { CheckCircle, Globe, Truck, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-gray-50 -mt-6 md:mt-0 sm:mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Side - Image (40%) */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden ">
                <img 
                  src="/about-home1.png" 
                  alt="UK Metal Export Processing Facility"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
              </div>
          </div>

          {/* Right Side - Content (60%) */}
          <div className="lg:col-span-3 mt-12">
            {/* Section Title */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
                BASED IN THE UNITED KINGDOM
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                UK's Leading <span className="text-blue-600">Scrap Metal</span> Export Specialist
              </h2>
            </div>

            {/* Single Detailed Paragraph - UK Focus */}
            <div className='-mt-4'>
              <p className="text-gray-700 leading-relaxed">
                <strong className='text-[#2e7d32]'>Dart Metals</strong> is a UK-based scrap metal export company specializing in premium-quality ferrous and non-ferrous metals. Operating from strategic UK ports, we manage the complete export chain from sourcing British and European scrap materials to processing, quality certification, and international logistics. We work with UK suppliers to ensure certified materials for global markets. Every UK-sourced shipment meets international standards through rigorous testing, ensuring clients receive materials matching their production needs.
              </p>
            </div>

            {/* Key Features Grid - UK Focus */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">UK-Based Global Exporter</h4>
                  <p className="text-sm text-gray-600">Exporting from UK ports to international markets</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Quality Standards</h4>
                  <p className="text-sm text-gray-600">ISO certified with verification for all exports</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Complete Logistics</h4>
                  <p className="text-sm text-gray-600">UK port facilities & customs clearance expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sustainable Practices</h4>
                  <p className="text-sm text-gray-600">Eco-friendly processing & responsible recycling</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            {/* <div className="mt-3">
              <button className="bg-[#4caf50] hover:bg-[#2E7D32] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center">
                Learn More About UK Exports
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;