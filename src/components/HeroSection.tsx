import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hero-bg5.png",
      title: "Global Scrap Metal Export Experts",
      subtitle: "Ferrous & Non-Ferrous Materials"
    },
    {
      image: "/hero-bg2.png",
      title: "Premium Quality Metal Scrap Supply",
      subtitle: "Certified Export-Grade Materials"
    },
    {
      image: "/hero-bg3.png",
      title: "Worldwide Metal Scrap Export Logistics",
      subtitle: "Safe, Timely Global Deliveries"
    },
    {
      image: "/hero-bg4.png",
      title: "Sustainable Scrap Metal Recycling Solutions",
      subtitle: "Responsible Sourcing & Processing"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="/" className="relative w-full  overflow-hidden">
      
      {/* Slides Container */}
      <div className="relative w-full h-[85vh] min-h-[600px] max-h-[900px]">
        {slides.map((slide, index) => {
          const slidePosition = index - currentSlide;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                slidePosition === 0 
                  ? "translate-x-0 opacity-100" 
                  : slidePosition > 0 
                    ? "translate-x-full opacity-0" 
                    : "-translate-x-full opacity-0"
              }`}
            >
              {/* Background Image */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

              {/* Title and Subtitle Container */}
              <div
                className={`absolute top-96 md:top-96 md:left-16 z-30 md:w-1/2 transition-all duration-1000 ease-out delay-300 ${
                  slidePosition === 0 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-10"
                }`}
              >
                {/* Title with perfect rectangular radius */}
                <div className="bg-blue-700/85 ml-6 md:ml-0 backdrop-blur-sm p-2 md:p-2 rounded-md mb-1 border border-blue-300/50 shadow-xl inline-block">
                  <h2 className="ml-5 text-med md:text-2xl font-semibold text-white">
                    {slide.title}
                  </h2>
                </div>
                
                {/* Subtitle with perfect rectangular radius */}
                <div className="bg-gray-900/85 ml-6 md:ml-0 backdrop-blur-sm p-2 md:p-2 rounded-lg border border-gray-400/50 mb-1 shadow-2xl inline-block">
                  <h1 className="ml-3 text-sm md:text-xl font-bold text-white">
                    {slide.subtitle}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows in Corners */}
      {/* Previous Arrow - Bottom Left Corner */}
      <button
        onClick={prevSlide}
        className="absolute md:bottom-32 left-2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded- border border-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Next Arrow - Bottom Right Corner */}
      <button
        onClick={nextSlide}
        className="absolute md:bottom-32 right-2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 border border-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

    </section>
  );
};

export default HeroSection;