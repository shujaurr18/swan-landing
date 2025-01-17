import React from 'react';
import bgHero from '../src/assets/herobg.png'
import QrCode from '../src/assets/Swan Transparent QR White PNG 1.png'
import iPhoneMockup from '../src/assets/Phone.png' // Add your iPhone mockup image
import chatImage from '../src/assets/chatImage.jpg' // Add your iPhone mockup image
import coupleImage from '../src/assets/couple.png' // Add your iPhone mockup image

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
      id: 1,
      text: "I was a bit skeptical at first because of all the corny AI apps out there but it really felt like I was talking with someone on the other side which was such a relief!",
      author: "Oliver P."
    },
    {
      id: 2,
      text: "Amazing experience! The conversations feel so natural and engaging.",
      author: "Sarah M."
    },
    // Add more testimonials as needed
  ];
  
  const TestimonialCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    //   customPaging: (i) => (
    //     <div className="h-1 w-20 bg-gray-300 rounded-full">
    //       <div className="h-full w-full bg-gray-800 rounded-full transform scale-x-0 transition-transform duration-500"></div>
    //     </div>
    //   )
    };
  
    return (
      <div className="w-full  mx-auto px-4">
        <h3 className="text-gray-600 text-xl mb-12">Don't just take it from us...</h3>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="outline-none">
              <div className="text-4xl mb-2">"</div>
              <p className="text-3xl font-medium mb-6">{testimonial.text}</p>
              <p className="text-xl font-semibold">{testimonial.author}</p>
              <div className="mt-8 flex space-x-2">
                <div className="w-16 h-1 bg-black"></div>
                <div className="w-16 h-1 bg-gray-200"></div>
                <div className="w-16 h-1 bg-gray-200"></div>
                <div className="w-16 h-1 bg-gray-200"></div>
                <div className="w-16 h-1 bg-gray-200"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">swan</div>
          <button className="bg-white text-black px-6 py-2 rounded-full">
            Download
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden">
        {/* Image Container */}
        <div className="absolute inset-0">
          <img
            src={bgHero}
            alt="Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          {/* QR Code */}
          <div className="p-4 rounded-lg mb-8">
            <div className="w-48 h-w-48 md:w-48 md:h-48">
              <img
                src={QrCode}
                alt="QR Code"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Main Text */}
          <div className="text-center px-4">
            <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-white">
              Curing the plague of human loneliness
            </h2>
            <p className="text-2xl md:text-4xl font-semibold text-white">
              through AI companionship
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="min-h-screen bg-[#F3F0F7] flex items-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - iPhone Mockup */}
          <div className="relative w-full max-w-md mx-auto">
            <img
              src={iPhoneMockup}
              alt="Swan App Interface"
              className="w-full h-auto py-14 px-16"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="text-center md:text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
              Browse, discover, and match with companions who have unique interests and backstories
            </h2>
            <button className="bg-white text-black px-8 py-3 rounded-full mt-6">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className=" h-[70vh] overflow-hidden bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left side */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Challenge yourself with difficult conversations and genuine experiences
            </h2>
            <button className="bg-[#9775FA] text-white px-8 py-1 rounded-full">
              Chat Today
            </button>
         
         
          </div>

          {/* Right side - iPhone Mockup */}
          <div className="relative w-full max-w-md mx-auto">
            <img
              src={chatImage}
              alt="Swan App Interface"
              className="w-full h-auto py-14 px-16"
            />
          </div>
        </div>
        </div>
        <div className="min-h-[60vh] bg-[#F3F0F7] flex items-center py-20">
        <TestimonialCarousel />
      </div>
      <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Vision */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">
                  <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] bg-clip-text text-transparent border-b-2 border-[#FF6B6B] pb-1">
                    Vision
                  </span>
                </h3>
                <p className="text-xl leading-relaxed">
                  We've diagnosed the world as extremely lonely. Our vision is to cure human loneliness through connection.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">
                  <span className="bg-gradient-to-r from-[#9775FA] to-[#B195FF] bg-clip-text text-transparent border-b-2 border-[#9775FA] pb-1">
                    Mission
                  </span>
                </h3>
                <p className="text-xl leading-relaxed">
                  Our mission is providing a source for meaningful relationships and genuine experiences to combat the isolation
                </p>
              </div>

              {/* Action */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">
                  <span className="bg-gradient-to-r from-[#FF69B4] to-[#FF8DC7] bg-clip-text text-transparent border-b-2 border-[#FF69B4] pb-1">
                    Action
                  </span>
                </h3>
                <p className="text-xl leading-relaxed">
                  Our actions today are building a platform that makes finding and developing companionship easy for everyone
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-6 mt-16">
              <button className="bg-[#9775FA] text-white px-8 py-1 rounded-full hover:bg-opacity-90 transition-colors">
                Contact Us
              </button>
              <button className="bg-[#9775FA] text-white px-8 py-1 rounded-full hover:bg-opacity-90 transition-colors">
                Careers
              </button>
            </div>
          </div>
        </div>
        <div className="h-screen w-full relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={coupleImage}
            alt="Romantic sunset"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover your next meaningful companionship today at{' '}
              <span className="text-pink-400">swan</span>
            </h1>
            
            <div className="flex justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;