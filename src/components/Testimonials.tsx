import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
//   const cardRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      project: 'Skyline Luxury Apartment',
      rating: 5,
      content: 'Landmark Creations transformed our dream home into reality. Their attention to detail and commitment to quality was exceptional. The project was completed on time and within budget.',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Business Owner',
      project: 'TechHub Corporate Park',
      rating: 5,
      content: 'Working with Landmark Creations for our office complex was a seamless experience. Their professional approach and innovative solutions helped us create a perfect workspace.',
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Real Estate Developer',
      project: 'Green Valley Township',
      rating: 5,
      content: 'Their expertise in township development is remarkable. Landmark Creations delivered a sustainable and well-planned community that exceeded our expectations.',
    },
    {
      id: 4,
      name: 'Sanjay Mehta',
      role: 'Government Official',
      project: 'Riverfront Bridge Project',
      rating: 5,
      content: 'The infrastructure project was completed with exceptional engineering standards. Landmark Creations demonstrated professionalism and technical excellence throughout.',
    },
    {
      id: 5,
      name: 'Neha Gupta',
      role: 'Interior Design Client',
      project: 'Heritage Villa Renovation',
      rating: 5,
      content: 'The renovation work on our heritage villa was outstanding. They preserved the historical elements while adding modern amenities. Truly remarkable craftsmanship!',
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setDirection('next');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setDirection(null);
      setIsAnimating(false);
    }, 600); // Match animation duration
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setDirection('prev');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setDirection(null);
      setIsAnimating(false);
    }, 600); // Match animation duration
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    if (index > currentIndex) {
      setDirection('next');
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex(index);
        setDirection(null);
        setIsAnimating(false);
      }, 600);
    } else {
      setDirection('prev');
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex(index);
        setDirection(null);
        setIsAnimating(false);
      }, 600);
    }
  };

  // Calculate previous and next indices for stacking
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  return (
    <section id="testimonials" className="py-16 w-full bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with us.
          </p>
        </div>

        {/* Testimonial Cards Stack */}
        <div className="flex justify-center items-center min-h-[400px] -mt-20 relative">
          {/* Stack Container */}
          <div className="relative w-full max-w-lg h-[300px] md:h-[240px]">
            
            {/* Back Card (Bottom of Stack) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-lg transform -translate-y-2 scale-95"></div>
            </div>

            {/* Previous Card (Left/Behind) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              direction === 'next' ? 'animate-slide-out-left' : 
              direction === 'prev' ? 'animate-slide-in-right' : ''
            }`}>
              <div className="w-full h-full bg-white rounded-2xl shadow-xl p-8 transform -translate-x-6 -translate-y-1 rotate-[-3deg] opacity-80">
                <div className="flex justify-center mb-3">
                  {renderStars(testimonials[prevIndex].rating)}
                </div>
                <p className="text-gray-600 text-sm italic line-clamp-4">"{testimonials[prevIndex].content}"</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-700 text-xs">{testimonials[prevIndex].name}</div>
                  <div className="text-gray-500 text-xs">{testimonials[prevIndex].role}</div>
                </div>
              </div>
            </div>

            {/* Current Card (Active - Middle) */}
            <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 ${
              direction === 'next' ? 'animate-flip-to-back' : 
              direction === 'prev' ? 'animate-flip-to-front' : ''
            }`}>
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex justify-center mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                <blockquote className="text-sm text-gray-700 text-center leading-relaxed mb-2 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="text-center border-t border-gray-100 pt-2">
                  <div className="font-bold text-gray-800 text-lg mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 text-sm mb-1">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-blue-600 font-semibold text-sm">
                    {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </div>

            {/* Next Card (Right/Behind) */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              direction === 'next' ? 'animate-slide-in-left' : 
              direction === 'prev' ? 'animate-slide-out-right' : ''
            }`}>
              <div className="w-full h-full bg-white rounded-2xl shadow-xl p-8 transform translate-x-6 -translate-y-1 rotate-[3deg] opacity-80">
                <div className="flex justify-center mb-3">
                  {renderStars(testimonials[nextIndex].rating)}
                </div>
                <p className="text-gray-600 text-sm italic line-clamp-4">"{testimonials[nextIndex].content}"</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-700 text-sm">{testimonials[nextIndex].name}</div>
                  <div className="text-gray-500 text-xs">{testimonials[nextIndex].role}</div>
                </div>
              </div>
            </div>

            {/* Far Back Card (Deeper Stack) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow transform -translate-y-4 scale-90 opacity-60"></div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute -left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-4 hover:bg-blue-50 transition-all duration-300 hover:scale-110 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed z-20"
          >
            <svg className="w-4 md:w-6 h-4 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute -right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-4 hover:bg-blue-50 transition-all duration-300 hover:scale-110 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed z-20"
          >
            <svg className="w-4 md:w-6 h-4 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isAnimating}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              } ${isAnimating ? 'cursor-not-allowed' : ''}`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-800 font-medium">Happy Clients</div>
              <div className="text-gray-600 text-sm mt-1">Served Across India</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-800 font-medium">Average Rating</div>
              <div className="text-gray-600 text-sm mt-1">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-800 font-medium">Repeat Business</div>
              <div className="text-gray-600 text-sm mt-1">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes flip-to-back {
          0% {
            transform: translateY(0) rotateY(0deg) scale(1);
            z-index: 20;
            opacity: 1;
          }
          49% {
            transform: translateY(40px) rotateY(-90deg) scale(0.95);
            z-index: 10;
            opacity: 0.7;
          }
          50% {
            transform: translateY(40px) rotateY(90deg) scale(0.95);
            z-index: 5;
            opacity: 0.7;
          }
          100% {
            transform: translateX(-60px) translateY(-10px) rotateY(0deg) scale(0.85) rotate(-3deg);
            z-index: 5;
            opacity: 0.8;
          }
        }

        @keyframes flip-to-front {
          0% {
            transform: translateX(-60px) translateY(-10px) rotateY(0deg) scale(0.85) rotate(-3deg);
            z-index: 5;
            opacity: 0.8;
          }
          49% {
            transform: translateY(40px) rotateY(90deg) scale(0.95);
            z-index: 5;
            opacity: 0.7;
          }
          50% {
            transform: translateY(40px) rotateY(-90deg) scale(0.95);
            z-index: 10;
            opacity: 0.7;
          }
          100% {
            transform: translateY(0) rotateY(0deg) scale(1);
            z-index: 20;
            opacity: 1;
          }
        }

        @keyframes slide-out-left {
          0% {
            transform: translateX(-60px) translateY(-10px) rotate(-3deg) scale(0.85);
            opacity: 0.8;
            z-index: 5;
          }
          100% {
            transform: translateX(-120px) translateY(-20px) rotate(-6deg) scale(0.75);
            opacity: 0;
            z-index: 1;
          }
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(120px) translateY(-20px) rotate(6deg) scale(0.75);
            opacity: 0;
            z-index: 1;
          }
          100% {
            transform: translateX(60px) translateY(-10px) rotate(3deg) scale(0.85);
            opacity: 0.8;
            z-index: 5;
          }
        }

        @keyframes slide-out-right {
          0% {
            transform: translateX(60px) translateY(-10px) rotate(3deg) scale(0.85);
            opacity: 0.8;
            z-index: 5;
          }
          100% {
            transform: translateX(120px) translateY(-20px) rotate(6deg) scale(0.75);
            opacity: 0;
            z-index: 1;
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(-120px) translateY(-20px) rotate(-6deg) scale(0.75);
            opacity: 0;
            z-index: 1;
          }
          100% {
            transform: translateX(-60px) translateY(-10px) rotate(-3deg) scale(0.85);
            opacity: 0.8;
            z-index: 5;
          }
        }

        .animate-flip-to-back {
          animation: flip-to-back 0.6s ease-out forwards;
        }

        .animate-flip-to-front {
          animation: flip-to-front 0.6s ease-out forwards;
        }

        .animate-slide-out-left {
          animation: slide-out-left 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        .animate-slide-out-right {
          animation: slide-out-right 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;