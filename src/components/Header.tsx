import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigate=useNavigate()

  const navLinks = [
    { name: 'Home', href: '/', id: 'hero' },
    { name: 'About Us', href: '/about-landmark-creations', id: 'about' },
    { name: 'Our Materials', href: isHomePage ? '#materials' : '/#materials', id: 'materials' },
    { name: 'Quality Control', href: isHomePage ? '#quality' : '/#quality', id: 'quality' },
    { name: 'Logistics & Export', href: isHomePage ? '#logistics' : '/#logistics', id: 'logistics' },
    { name: 'Why Choose Us', href: isHomePage ? '#why-choose' : '/#why-choose', id: 'why-choose' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', id: 'contact' },
    { name: 'Get Quote', href: isHomePage ? '#contact' : '/#contact', isCta: true, id: 'contact' }
  ];

  // Function to handle smooth scrolling to the TOP of the section
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // If not on homepage, let the Link handle navigation
    if (!isHomePage) return;
    
    e.preventDefault();
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // Find the target section
    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
      // Get the exact top position of the section
      const sectionTop = targetSection.offsetTop;
      
      // Calculate offset for fixed header - increased to hide previous section completely
      const headerHeight = 80; // Increased header height offset
      
      // Calculate scroll position - add extra offset to ensure previous section is not visible
      const scrollPosition = sectionTop - headerHeight + 80; // Extra 20px buffer
      
      // Ensure we don't scroll past the document bottom
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const finalScrollPosition = Math.min(scrollPosition, maxScroll);
      
      // Smooth scroll to the top of the section
      window.scrollTo({
        top: finalScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={isHomePage ? "absolute top-0 left-0 w-full z-50" : "fixed top-0 left-0 w-full z-50 bg-white shadow-lg"}>
      <div className="w-full h-[120px] px-4 sm:px-6 lg:px-8">
        
        {/* White rectangular box for homepage */}
        {isHomePage && (
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[100%] h-[calc(100%-2rem)] bg-white"></div>
        )}
        
        {/* White rectangular box for other pages */}
        {!isHomePage && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-full bg-white rounded-b-2xl shadow-lg"></div>
        )}
        
        <div className={`flex justify-between items-center w-full relative z-10 py-3 md:py-4`}>
          
          {/* Logo and Title Container */}
          <div className="flex items-center space-x- md:space-x-">
            {/* Logo */}
            {/* <div className="flex-shrink-0">
              <img 
                src="/logo-transparent-png.png" 
                alt="DART Metals Logo"
                className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
              />
            </div> */}
            
            {/* Title and Tagline */}
            <div className="mt-6 md:mt-2 flex flex-col">
              <h3 onClick={()=>navigate('/')} className="text-4xl font-bold mb-4">
              <span className="text-blue-400">Dart</span><span className="text-yellow-400"> Metals</span>
            </h3>
              {/* <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                Private Limited
              </p>
              <p className="text-xs text-gray-500 mt-1 hidden md:block">
                Global Metal Export Solutions
              </p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
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
            ))}
          </nav>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden relative z-10 ${
            isMobileMenuOpen ? 'pb-4' : 'max-h-0'
          }`}
        >
          <nav className={`flex flex-col space-y-4 rounded-lg p-6 mt-4 ${
            isHomePage ? 'bg-white shadow-xl' : 'bg-white shadow-xl'
          }`}>
            {navLinks.map((link) => (
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
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;