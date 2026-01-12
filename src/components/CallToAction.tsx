import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight, Shield, Package, Globe, MapPin } from 'lucide-react';

const CallToAction: React.FC = () => {
  
  // Contact data with clickable links
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Quick Response",
      details: "info@dartmetals.com",
      note: "Send requirements for quotation",
      link: "mailto:info@dartmetals.com?subject=Metal Export Inquiry&body=Hello, I would like to inquire about your metal export services.",
      bgColor: "bg-green-600/30",
      textColor: "text-green-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "24/7 Support",
      details: "+44 74052 14347",
      note: "Office hours: Mon-Fri 9AM-6PM GMT",
      link: "tel:+447405214347",
      bgColor: "bg-teal-600/30",
      textColor: "text-teal-400"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Instant Chat",
      details: "+44 74052 14347",
      note: "Business inquiries & quotes",
      link: "https://wa.me/447405214347",
      bgColor: "bg-emerald-600/30",
      textColor: "text-emerald-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "United Kingdom",
      details: "London, UK",
      note: "Headquarters & Operations",
      link: "https://www.google.com/maps/place/Regus+-+Cambridge+Vision+Park/@52.2444343,0.1070053,17z/data=!3m2!4b1!5s0x47d8712549594435:0x95f2bfb040b426f3!4m6!3m5!1s0x47d871254858ba3d:0xa48f9af395432576!8m2!3d52.244431!4d0.1095802!16s%2Fg%2F1vntj4cw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
      bgColor: "bg-blue-600/30",
      textColor: "text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content with 70% Left, 30% Right Layout */}
        <div className="grid lg:grid-cols-10 gap-8 items-start mb-6">
          
          {/* Left Side - Content & Details (70%) */}
          <div className="lg:col-span-7">
            <div className="space-y-2">
              {/* Main Heading */}
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Start Your Metal Export Journey
              </h2>
              
              {/* Features Grid - Horizontal Layout */}
<div className="flex flex-col md:flex-row gap-3 mb-2">
  <div className="flex-1 flex items-start p-2">
    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
      <Shield className="w-4 h-4 text-green-400" />
    </div>
    <div>
      <div className="font-bold text-lg md:text-xl mb-1 text-green-300">Quality Assured</div>
      <div className="text-green-200 text-sm md:text-base">Certified materials with testing reports</div>
    </div>
  </div>
  
  <div className="flex-1 flex items-start  p-2">
    <div className="w-8 h-8 bg-teal-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
      <Package className="w-4 h-4 text-teal-400" />
    </div>
    <div>
      <div className="font-bold text-lg md:text-xl mb-1 text-teal-300">Complete Logistics</div>
      <div className="text-green-200 text-sm md:text-base">Door-to-door shipping worldwide</div>
    </div>
  </div>
  
  <div className="flex-1 flex items-start p-2">
    <div className="w-8 h-8 bg-emerald-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
      <Globe className="w-4 h-4 text-emerald-400" />
    </div>
    <div>
      <div className="font-bold text-lg md:text-xl mb-1 text-emerald-300">Global Reach</div>
      <div className="text-green-200 text-sm md:text-base">Exporting to 30+ countries</div>
    </div>
  </div>
</div>
              
              {/* Description Paragraph */}
              <p className="text-green-100 text-sm md:text-lg">
                Get premium quality ferrous and non-ferrous metals with complete export solutions. 
                Our team handles everything from sourcing to delivery.
              </p>
              
              {/* UK Based Operations */}
              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-7 h-7 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">UK Based Operations</h3>
                </div>
                <p className="text-sm text-green-200">
                  Operating from our headquarters in London, United Kingdom, we manage global metal exports 
                  with strategic port partnerships across the UK. Our location provides direct access to 
                  major international shipping routes and customs facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Call Now Button (30%) */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-4 text-center shadow-2xl">
                <Phone className="w-8 h-8 mx-auto mb-6 text-white" />
                <h3 className="text-2xl font-bold mb-4">Call Now</h3>
                <p className="text-green-200 mb-6">Get instant quote for your metal export needs</p>
                {/* <a 
                  href="tel:+442012345678"
                  className="block w-full bg-white text-green-700 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 mb-4"
                >
                  +44 20 1234 5678
                </a> */}
                {/* <div className="text-green-300 text-sm mb-6">Response within 2 hours</div> */}
                
                {/* <div className="border-t border-green-700/50 pt-6">
                  <p className="text-green-200 mb-4">Or send us an email</p>
                  <a 
                    href="mailto:info@metalexportpro.com?subject=Metal Export Quote Request&body=Hello, I would like to request a quote for metal export services."
                    className="inline-flex items-center text-white hover:text-green-300 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Quote
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards with Full Width */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              target={method.title === "WhatsApp" || method.title === "Location" ? "_blank" : "_self"}
              rel={method.title === "WhatsApp" || method.title === "Location" ? "noopener noreferrer" : ""}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/15 hover:border-green-400/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center mb-2">
                <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mr-4 ${method.textColor} group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <div>
                  <div className="font-bold text-lg">{method.title}</div>
                  <div className="text-green-200 text-sm">{method.description}</div>
                </div>
              </div>
              <div className="text-xl font-bold group-hover:text-green-300 transition-colors">
                {method.details}
              </div>
              <div className="text-white text-sm mt-2">{method.note}</div>
              <div className="mt-4 flex items-center text-green-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4 mr-2" />
                {method.title === "Email" ? "Send email" : 
                 method.title === "Phone" ? "Call now" : 
                 method.title === "WhatsApp" ? "Chat on WhatsApp" : 
                 "View location"}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;