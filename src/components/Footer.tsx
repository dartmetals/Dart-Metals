import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8 mt-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-blue-400">Dart</span><span className="text-yellow-400"> Metals</span>
            </h3>
            <p className="text-gray-400 mb-4">
              UK-based scrap metal export company supplying quality ferrous and non-ferrous metals worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#materials" className="text-gray-400 hover:text-white transition-colors">Materials</a></li>
              <li><a href="#logistics" className="text-gray-400 hover:text-white transition-colors">Logistics</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Ferrous Metals Export</li>
              <li className="text-gray-400">Non-Ferrous Metals Export</li>
              <li className="text-gray-400">Global Logistics</li>
              <li className="text-gray-400">Quality Certification</li>
              <li className="text-gray-400">Export Documentation</li>
            </ul>
          </div>

         {/* Contact Info */}
<div>
  <h4 className="font-bold text-lg mb-4">Contact Info</h4>
  <div className="space-y-3">
    <div className="flex items-start">
      <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
      <div>
        <div className="text-gray-400">
          <div className="font-medium text-gray-300 mb-1">DART Metals</div>
          <div className="text-sm">
            Cambridge Vision Park,<br />
            Chivers Way, Histon,<br />
            Cambridge, CB24 9AD<br />
            United Kingdom
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center">
      <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
      <span className="text-gray-400">+44 74052 14347</span>
    </div>
    <div className="flex items-center">
      <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
      <span className="text-gray-400">info@dartmetals.com</span>
    </div>
  </div>
</div>
        </div>

        {/* Copyright & Links */}
        <div className="pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} DartMetals. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Export Compliance</a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-2 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <span>UK Registered Company</span>
            <span>•</span>
            <span>Export Licensed</span>
            <span>•</span>
            <span>ISO Certified</span>
            <span>•</span>
            <span>Environmental Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;