import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LicenseImage {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageUrl2?: string; 
  // downloadUrl?: string;
}
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLicenseTooltip, setShowLicenseTooltip] = useState(false);
  const [showLicenseModal, setShowLicenseModal] = useState(false);
  const [currentLicenseIndex, setCurrentLicenseIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedLicenseIndex, setSelectedLicenseIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigate = useNavigate();
  const [currentScrapMetalImage, setCurrentScrapMetalImage] = useState(0);

  // License images with direct Unsplash URLs
  const licenseImages: LicenseImage[] = [
    {
      id: 1,
      title: "Waste Carrier Registration Certificate",
      description: "Certificate of Registration under the Waste (England and Wales) Regulations 2011 as an upper tier waste carrier, broker and dealer. Registration number: CBDU617264. Valid until 8 January 2029.",
      imageUrl: "/license-2.png",
      // downloadUrl: "/license-2.png"
    },
    {
      id: 2,
      title: "Scrap Metal Dealer Site Licence",
      description: "Licence issued by South Cambridgeshire District Council (Licence number: SMD296356). This administrative site licence was granted on 08 January 2026. Additional condition: Administrative site only – no scrap on site.",
      imageUrl: "/license-1.png",
      imageUrl2: "/license-1(2).png", // Second image for this license
      // downloadUrl: "/license-1.png"
    },
  ];

  const navLinks = [
    { name: 'Home', href: '/', id: 'hero' },
    { name: 'About Us', href: '/about-landmark-creations', id: 'about' },
    { name: 'Our Materials', href: isHomePage ? '#materials' : '/#materials', id: 'materials' },
    { name: 'Quality Control', href: isHomePage ? '#quality' : '/#quality', id: 'quality' },
    { name: 'Logistics & Export', href: isHomePage ? '#logistics' : '/#logistics', id: 'logistics' },
    { name: 'License', href: '/license', id: 'license' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', id: 'contact' },
    { name: 'Get Quote', href: isHomePage ? '#contact' : '/#contact', isCta: true, id: 'contact' }
  ];

  const openLicenseModal = () => {
    setShowLicenseModal(true);
    setCurrentLicenseIndex(0);
    setIsMobileMenuOpen(false);
  };

  const closeLicenseModal = () => {
    setShowLicenseModal(false);
    setCurrentLicenseIndex(0);
  };

  const nextLicense = () => {
    setCurrentLicenseIndex((prevIndex) => 
      prevIndex === licenseImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevLicense = () => {
    setCurrentLicenseIndex((prevIndex) => 
      prevIndex === 0 ? licenseImages.length - 1 : prevIndex - 1
    );
  };

  const openFullscreen = (imageUrl: string, licenseIndex: number, imageIndex: number = 0) => {
    setSelectedImage(imageUrl);
    setSelectedLicenseIndex(licenseIndex);
    setSelectedImageIndex(imageIndex);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
    setSelectedLicenseIndex(null);
    setSelectedImageIndex(0);
  };

  const nextFullscreenImage = () => {
    if (selectedLicenseIndex === null) return;
    
    const currentLicense = licenseImages[selectedLicenseIndex];
    
    if (currentLicense.title === "Scrap Metal Dealer Site Licence" && currentLicense.imageUrl2) {
      // If this is the scrap metal license with two images
      if (selectedImageIndex === 0) {
        // Switch to second image
        setSelectedImage(currentLicense.imageUrl2);
        setSelectedImageIndex(1);
      } else {
        // Switch back to first image
        setSelectedImage(currentLicense.imageUrl);
        setSelectedImageIndex(0);
      }
    } else {
      // For other licenses, just close and open next license
      closeFullscreen();
      const nextIndex = (selectedLicenseIndex + 1) % licenseImages.length;
      setTimeout(() => {
        openFullscreen(licenseImages[nextIndex].imageUrl, nextIndex, 0);
      }, 100);
    }
  };

  const prevFullscreenImage = () => {
    if (selectedLicenseIndex === null) return;
    
    const currentLicense = licenseImages[selectedLicenseIndex];
    
    if (currentLicense.title === "Scrap Metal Dealer Site Licence" && currentLicense.imageUrl2) {
      // If this is the scrap metal license with two images
      if (selectedImageIndex === 1) {
        // Switch to first image
        setSelectedImage(currentLicense.imageUrl);
        setSelectedImageIndex(0);
      } else {
        // Switch to second image
        setSelectedImage(currentLicense.imageUrl2);
        setSelectedImageIndex(1);
      }
    } else {
      // For other licenses, just close and open previous license
      closeFullscreen();
      const prevIndex = selectedLicenseIndex === 0 ? licenseImages.length - 1 : selectedLicenseIndex - 1;
      setTimeout(() => {
        openFullscreen(licenseImages[prevIndex].imageUrl, prevIndex, 0);
      }, 100);
    }
  };


  // const handleDownload = async (downloadUrl: string, fileName: string) => {
  //   try {
  //     const response = await fetch(downloadUrl);
  //     const blob = await response.blob();
  //     const blobUrl = window.URL.createObjectURL(blob);
      
  //     const link = document.createElement('a');
  //     link.href = blobUrl;
  //     link.download = `dart-metals-${fileName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  //     document.body.appendChild(link);
  //     link.click();
      
  //     document.body.removeChild(link);
  //     window.URL.revokeObjectURL(blobUrl);
  //   } catch (error) {
  //     console.error('Download failed:', error);
  //     window.open(downloadUrl, '_blank');
  //   }
  // };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (!isHomePage) return;
    
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
      const sectionTop = targetSection.offsetTop;
      const headerHeight = 80;
      const scrollPosition = sectionTop - headerHeight + 80;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const finalScrollPosition = Math.min(scrollPosition, maxScroll);
      
      window.scrollTo({
        top: finalScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // const handleLicenseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   setIsMobileMenuOpen(false);
  //   if (isHomePage) {
  //     openLicenseModal();
  //   } else {
  //     navigate('/license');
  //   }
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentLicense = licenseImages[currentLicenseIndex];

  return (
    <>
      <header className={isHomePage ? "fixed top-0 left-0 w-full z-50" : "fixed top-0 left-0 w-full z-50 bg-white shadow-lg"}>
        <div className="w-full h-[120px] px-4 sm:px-6 lg:px-8">
          
          {isHomePage && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[100%] h-[calc(100%-2rem)] bg-white"></div>
          )}
          
          {!isHomePage && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-full "></div>
          )}
          
          <div className={`flex justify-between items-center w-full relative z-10 py-3 md:py-4`}>
            
            <div className="flex items-center space-x- md:space-x-">
              <div className="mt-6 md:mt-2 flex flex-col">
                <h3 onClick={()=>navigate('/')} className="text-4xl font-bold mb-4 cursor-pointer">
                  <span className="text-blue-400">Dart</span><span className="text-yellow-400"> Metals</span>
                </h3>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                if (link.name === 'License') {
                  return (
                    <button
                      key={link.name}
                      onClick={openLicenseModal}
                      className="font-bold transition-colors duration-200 cursor-pointer whitespace-nowrap text-gray-800 hover:text-[#4caf50] text-med"
                    >
                      {link.name}
                    </button>
                  );
                }
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.id)}
                    className={`font-bold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                      link.isCta
                        ? 'bg-[#4caf50] text-white px-5 py-2.5 rounded-lg hover:bg-[#2E7D32] shadow-md hover:shadow-lg transition-all duration-200 text-med'
                        : isHomePage ? 'text-gray-800 hover:text-[#4caf50] text-med' : 'text-gray-800 hover:text-[#4caf50] text-sm'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-20"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-gray-800' : isHomePage ? 'bg-gray-800' : 'bg-gray-800'
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-opacity duration-200 ${
                  isMobileMenuOpen ? 'opacity-0 bg-gray-800' : isHomePage ? 'bg-gray-800 opacity-100' : 'bg-gray-800 opacity-100'
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-transform duration-200 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-gray-800' : isHomePage ? 'bg-gray-800' : 'bg-gray-800'
                }`}
              ></span>
            </button>
          </div>

          <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden relative z-10 ${
              isMobileMenuOpen ? 'pb-4' : 'max-h-0'
            }`}
          >
            <nav className={`flex flex-col space-y-4 rounded-lg p-6 mt-4 ${
              isHomePage ? 'bg-white shadow-xl' : 'bg-white shadow-xl'
            }`}>
              {navLinks.map((link) => {
                if (link.name === 'License') {
                  return (
                    <button
                      key={link.name}
                      onClick={openLicenseModal}
                      className="font-lg transition-colors duration-200 text-center py-3 cursor-pointer text-gray-800 hover:text-[#4caf50] border-b border-gray-100 last:border-b-0"
                    >
                      {link.name}
                    </button>
                  );
                }
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.id)}
                    className={`font-lg transition-colors duration-200 text-center py-3 cursor-pointer ${
                      link.isCta
                        ? 'bg-[#4caf50] text-white px-4 py-3 rounded-lg hover:bg-[#4caf50] shadow-md'
                        : 'text-gray-800 hover:text-[#4caf50] border-b border-gray-100 last:border-b-0'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Floating License Icon */}
      <div 
        className="fixed bottom-6 right-6 z-50 "
        onMouseEnter={() => setShowLicenseTooltip(true)}
        onMouseLeave={() => setShowLicenseTooltip(false)}
      >
        <button
          onClick={openLicenseModal}
          className="bg-[#4caf50]  hover:bg-[#2E7D32] text-sm font-bold text-white rounded-3xl w-32 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-lg duration-200 cursor-pointer"
          aria-label="View License Information"
        >
          View Licenses
        </button>
        
        {showLicenseTooltip && (
          <div className="absolute bottom-full right-0 mb-2 w-64 p-2 bg-white rounded-lg shadow-xl border border-gray-200">
            <p className="text-sm text-gray-700">
              Dart Metals operates with all required government licenses and certifications for metal export and trading, ensuring legal compliance and quality assurance in all our operations.
            </p>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        )}
      </div>

      {/* License Modal/Popup */}
      {showLicenseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-8">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 md:p-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Licenses & Certifications</h2>
                  <p className="text-sm md:text-base text-gray-600">View our official licenses and certificates</p>
                </div>
              </div>
              <button
                onClick={closeLicenseModal}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content - Desktop: Left & Right Layout, Mobile/Tab: Above & Below Layout */}
            <div className="p-4 md:p-8">
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* Content Section - Left on desktop, Top on mobile */}
                <div className="lg:w-1/2">
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">{currentLicense.title}</h3>
                    <p className="text-gray-600 md:text-lg mb-4 md:mb-6">{currentLicense.description}</p>
                    
                    {/* Show image navigation for Scrap Metal License */}
                    {/* {currentLicense.title === "Scrap Metal Dealer Site Licence" && (
                      <div className="mb-4">
                        <div className="flex justify-center space-x-4 mb-3">
                          <button
                            onClick={() => setCurrentScrapMetalImage(0)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              currentScrapMetalImage === 0 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            Front Side
                          </button>
                          <button
                            onClick={() => setCurrentScrapMetalImage(1)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              currentScrapMetalImage === 1 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            Back Side
                          </button>
                        </div>
                        <div className="text-center text-sm text-gray-600">
                          Viewing: {currentScrapMetalImage === 0 ? "Front of licence" : "Back of licence"}
                        </div>
                      </div>
                    )} */}
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-3 md:p-4 rounded-r-lg mb-4 md:mb-6">
                      <p className="text-blue-800 text-sm md:text-base">
                        <strong>Note:</strong> All licenses are regularly updated and renewed to maintain compliance with evolving international trade regulations and standards.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {/* In the View Document button onClick handler */}
<button
  onClick={() => openFullscreen(
    currentLicense.title === "Scrap Metal Dealer Site Licence" && currentLicense.imageUrl2
      ? (currentScrapMetalImage === 0 ? currentLicense.imageUrl : currentLicense.imageUrl2)
      : currentLicense.imageUrl,
    currentLicenseIndex,
    currentLicense.title === "Scrap Metal Dealer Site Licence" ? currentScrapMetalImage : 0
  )}
  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 md:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
  View Document
</button>
                  </div>
                </div>

                {/* Image Section - Right on desktop, Bottom on mobile */}
                <div className="lg:w-1/2">
                  <div className="relative h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                    <img 
                      src={
                        currentLicense.title === "Scrap Metal Dealer Site Licence" 
                          ? (currentScrapMetalImage === 0 ? currentLicense.imageUrl : currentLicense.imageUrl2)
                          : currentLicense.imageUrl
                      } 
                      alt={currentLicense.title}
                      className="w-full h-full object-contain p-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/400x300/4caf50/ffffff?text=Certificate";
                      }}
                    />
                    
                    {/* Show additional navigation for Scrap Metal License images */}
                    {currentLicense.title === "Scrap Metal Dealer Site Licence" && (
                      <>
                        <button
                          onClick={() => setCurrentScrapMetalImage(currentScrapMetalImage === 0 ? 1 : 0)}
                          className="absolute right-2 md:right-4 top-2 md:top-4 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200"
                          title="Switch to other side"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </button>
                      </>
                    )}
                    
                    {/* Navigation Arrows for switching between different licenses */}
                    <button
                      onClick={prevLicense}
                      className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-6 md:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextLicense}
                      className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Dots indicator for current license */}
                  <div className="flex justify-center mt-3 md:mt-4 space-x-3 md:space-x-4">
                    {licenseImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentLicenseIndex(index);
                          if (licenseImages[index].title === "Scrap Metal Dealer Site Licence") {
                            setCurrentScrapMetalImage(0);
                          }
                        }}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                          index === currentLicenseIndex 
                            ? 'bg-[#4caf50] scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 p-4 md:p-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{currentLicenseIndex + 1}</span> of <span className="font-medium">{licenseImages.length}</span> certificates
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={prevLicense}
                    className="text-gray-700 hover:text-[#4caf50] font-medium flex items-center text-sm md:text-base"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  <button
                    onClick={nextLicense}
                    className="text-gray-700 hover:text-[#4caf50] font-medium flex items-center text-sm md:text-base"
                  >
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {isFullscreen && selectedImage && selectedLicenseIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-[101] flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeFullscreen}
        >
          <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-xl overflow-hidden my-8">
            <div className="sticky top-0 bg-gray-900 text-white py-3 px-4 flex justify-between items-center z-20">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">
                  {licenseImages[selectedLicenseIndex].title} - Full View
                  {licenseImages[selectedLicenseIndex].title === "Scrap Metal Dealer Site Licence" && 
                    ` (${selectedImageIndex === 0 ? "Front" : "Back"})`}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={closeFullscreen}
                  className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div 
              className="w-full h-full flex items-center justify-center p-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation arrows for fullscreen view */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevFullscreenImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-200 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <img 
                src={selectedImage} 
                alt="Full size license"
                className="max-w-full max-h-[70vh] object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/800x600/4caf50/ffffff?text=Certificate+Preview";
                }}
              />
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextFullscreenImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 md:p-4 shadow-lg transition-all duration-200 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Image indicator for Scrap Metal License */}
            {licenseImages[selectedLicenseIndex].title === "Scrap Metal Dealer Site Licence" && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <div className={`w-3 h-3 rounded-full ${selectedImageIndex === 0 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                <div className={`w-3 h-3 rounded-full ${selectedImageIndex === 1 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
              </div>
            )}
            
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-70 px-4 py-2 rounded-lg">
              Click anywhere outside the image to close
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;