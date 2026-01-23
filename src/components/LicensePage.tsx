import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LicensePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // License images with direct Unsplash URLs that will definitely work
  const licenseImages = [
    {
      id: 1,
      title: "Business License Certificate",
      description: "Official business registration certificate",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      downloadUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 2,
      title: "Import-Export Code (IEC)",
      description: "International trading authorization certificate",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      downloadUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 3,
      title: "GST Registration Certificate",
      description: "Goods and Services Tax registration",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      downloadUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 4,
      title: "MSME Registration",
      description: "Micro, Small & Medium Enterprises registration",
      imageUrl: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      downloadUrl: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 5,
      title: "ISO 9001:2015 Certification",
      description: "Quality Management System certificate",
      imageUrl: "https://images.unsplash.com/photo-1589552950456-75eeaf5c5f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      downloadUrl: "https://images.unsplash.com/photo-1589552950456-75eeaf5c5f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      id: 6,
      title: "Environmental Compliance",
      description: "Environmental standards compliance certificate",
      imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      downloadUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    }
  ];

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsFullscreen(true);
  };

  const handleDownload = async (downloadUrl: string, fileName: string) => {
    try {
      // For Unsplash images, we need to fetch and create a blob
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `dart-metals-${fileName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open image in new tab
      window.open(downloadUrl, '_blank');
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Licenses & Certifications</h1>
            <p className="text-lg text-gray-600">
              Official licenses and certifications that authorize our operations
            </p>
          </div>

          <div className="p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Business License</h2>
                <p className="text-gray-600">Registration Number: DART-MET-2023-001</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Dart Metals Private Limited is a fully licensed and registered entity authorized to conduct metal trading and export operations globally. Our business license certifies that we operate in compliance with all national and international trade regulations.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Key Authorizations:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>International Metal Export License</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Import-Export Code (IEC) Certification</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>GST Registration for Tax Compliance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>MSME Registered Enterprise</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Environmental Compliance Certification</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="text-blue-800">
                  <strong>Note:</strong> All our licenses are regularly updated and renewed to maintain compliance with evolving international trade regulations and standards.
                </p>
              </div>

              <p className="mb-4">
                Our licensing ensures that all transactions conducted through Dart Metals are legally sound, transparent, and adhere to the highest standards of international trade compliance. We maintain rigorous documentation and audit trails for all our operations.
              </p>
            </div>
          </div>

          {/* License Images Gallery Section */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p- mb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">License Documents</h3>
                <p className="text-gray-600 mt-2">Click on any image to view in full size. Download buttons available for each certificate.</p>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>All documents are legally verified</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {licenseImages.map((license) => (
                <div key={license.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                  {/* Image Container */}
                  <div 
                    className="relative h-48 cursor-pointer overflow-hidden bg-white"
                    onClick={() => handleImageClick(license.imageUrl)}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-50"></div>
                    
                    {/* Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <img 
                        src={license.imageUrl} 
                        alt={license.title}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/400x300/4caf50/ffffff?text=Certificate";
                        }}
                      />
                    </div>
                    
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Zoom icon */}
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4">
                    <div className="flex items-start mb-3">
                      <div className="bg-blue-50 p-2 rounded mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">{license.title}</h4>
                        <p className="text-gray-600 text-sm">{license.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => handleImageClick(license.imageUrl)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Full Size
                      </button>
                      
                      <button
                        onClick={() => handleDownload(license.downloadUrl, license.title)}
                        className="bg-[#4caf50] hover:bg-[#2E7D32] text-white text-sm font-medium flex items-center px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-blue-800 font-medium mb-1">Important Note</p>
                  <p className="text-sm text-blue-700">
                    These are sample certificate images. For actual document verification, please contact our legal department at legal@dartmetals.com.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-gradient-to-br from-green-50 to-white">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">ISO 9001:2015</h4>
                    <p className="text-green-600 text-sm">Certification ID: ISO9001-2023-001</p>
                  </div>
                </div>
                <p className="text-gray-600">Quality Management System Certification ensuring consistent quality in all operations.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Material Test Certificates</h4>
                    <p className="text-blue-600 text-sm">Third-party Verified</p>
                  </div>
                </div>
                <p className="text-gray-600">Comprehensive material composition and quality certificates for all exported products.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Back to Previous Page
            </button>
            {/* <button
              onClick={() => navigate('/contact')}
              className="bg-[#4caf50] hover:bg-[#2E7D32] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Legal Department
            </button> */}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isFullscreen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gray-900 text-white py-3 px-4 flex justify-between items-center z-20">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">License Certificate - Full View</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={async () => {
                    try {
                      const response = await fetch(selectedImage);
                      const blob = await response.blob();
                      const blobUrl = window.URL.createObjectURL(blob);
                      
                      const link = document.createElement('a');
                      link.href = blobUrl;
                      link.download = 'dart-metals-license-fullview.jpg';
                      document.body.appendChild(link);
                      link.click();
                      
                      document.body.removeChild(link);
                      window.URL.revokeObjectURL(blobUrl);
                    } catch (error) {
                      console.error('Download failed:', error);
                      window.open(selectedImage, '_blank');
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center"
                  aria-label="Download image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
                <button
                  onClick={closeFullscreen}
                  className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full"
                  aria-label="Close fullscreen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div 
              className="w-full h-full flex items-center justify-center pt-12"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Full size license"
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/800x600/4caf50/ffffff?text=Certificate+Preview";
                }}
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-70 px-4 py-2 rounded-lg">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LicensePage;