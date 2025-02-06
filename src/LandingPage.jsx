import React from 'react';
import bgHero from '../src/assets/bggig.gif'
import QrCode from '../src/assets/Swan Transparent QR White PNG 1.png'
import iPhoneMockup from '../src/assets/Phone.png' // Add your iPhone mockup image
import chatImage from '../src/assets/chatImage.jpg' // Add your iPhone mockup image
import coupleImage from '../src/assets/couple.png' // Add your iPhone mockup image
import bgseccond from '../src/assets/bgseccond.png' // Add your iPhone mockup image
import chatrightimage from '../src/assets/chatrightimage.png' // Add your iPhone mockup image
import userimage from '../src/assets/whatspapimage.jpg' 


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAppleWhole } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa';

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
      <div className=" mx-auto px-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left side - Testimonial content */}
        <div className="w-full col-span-2">
          <h3 className="text-gray-600 text-xl mb-12">Don't just take it from us...</h3>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="outline-none pr-8">
                <div className="text-6xl font-serif text-gray-300 mb-4">"</div>
                <p className="text-3xl font-medium mb-8 leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="text-xl font-medium">{testimonial.author}</p>
                
                {/* Progress indicators */}
                <div className="flex gap-2 mt-8">
                  <div className="w-32 h-1 bg-black rounded-full" />
                  <div className="w-32 h-1 bg-gray-200 rounded-full" />
                  <div className="w-32 h-1 bg-gray-200 rounded-full" />
                  <div className="w-32 h-1 bg-gray-200 rounded-full" />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right side - User Image */}
        <div className="hidden md:block relative h-full">
          <div className="relative w-full h-[500px]  overflow-hidden rounded-lg">
            <img
              src={userimage}
              alt="User testimonial"
              className="w-full h-full object-cover"
            />
      
      
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-4xl font-bold text-white font-baloo">swan</div>
          <button className="bg-white flex items-center gap-3 text-black px-6 py-2 rounded-full">
       <FaApple/>      Download
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden">
        {/* Image Container */}
      <div className="absolute inset-0">
          <div className="w-full h-full" style={{
            background: `url(${bgHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'seamlessLoop 0.01s steps(1) infinite',
            WebkitAnimation: 'seamlessLoop 0.01s steps(1) infinite',
          }} />
          <style jsx>{`
            @keyframes seamlessLoop {
              0% { opacity: 1; }
              99.99% { opacity: 1; }
              100% { opacity: 1; }
            }
          `}</style>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
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
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
              Curing the plague of human loneliness
            </h2>
            <p className="text-2xl md:text-4xl font-bold text-white">
              through AI companionship
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#F3F0F7] py-20 flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side - Text Content */}
        <div className="text-center  z-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 text-black leading-tight">
            Browse, discover, and match with companions who have unique interests and backstories
          </h2>
          <button className="bg-white border-2 border-black text-black px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Explore Now
          </button>
        </div>

        {/* Right side - iPhone Mockup */}
        <div className="relative flex justify-center md:justify-end items-center z-20">
          <img
            src={iPhoneMockup}
            alt="Swan App Interface"
            className="w-full max-w-[380px]  h-auto object-contain"
          />
        </div>
      </div>

      {/* Background water and swans image - positioned absolutely */}
      <img
        src={bgseccond}
        alt="Water and Swans"
        className="absolute bottom-0 left-0 right-0 w-full object-cover z-10"
      />
    </div>
  
      <div className="relative h-[70vh] overflow-hidden bg-white flex items-center">
        <div className="z-10  max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Right side - iPhone Mockup */}
        <div className="relative w-full max-w-md mx-auto">
            <img
              src={chatImage}
              alt="Swan App Interface"
              className="w-full h-auto py-14 px-16"
            />
          </div>
          {/* Left side */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Challenge yourself with difficult conversations and genuine experiences
            </h2>
            <button className="bg-[#A082B7] text-white px-8 py-1 rounded-full">
              Chat Today
            </button>
         
         
          </div>

        
        </div>
        <img src={chatrightimage} className='absolute right-0 ' alt="" />
        </div>
        <div className="min-h-[60vh] bg-[#F3F0F7] flex items-center py-20">
        <TestimonialCarousel />
      </div>
      <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold mb-16 ">
          Why <span className="text-[#B195FF] font-baloo">swan</span>?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="relative bg-[#F3F0F7] rounded-3xl p-8 overflow-hidden">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-[#FF6B6B] border-b-2 border-[#FF6B6B] pb-1">
                Vision
              </span>
            </h3>
            <p className="text-xl leading-relaxed text-gray-800">
              We've diagnosed the world as extremely lonely. Our vision is to cure human loneliness through connection.
            </p>
            {/* Decorative heart */}
            <div className="absolute bottom-4 right-4 opacity-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="#FF6B6B">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-[#F3F0F7] rounded-3xl p-8 overflow-hidden">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-[#9775FA] border-b-2 border-[#9775FA] pb-1">
                Mission
              </span>
            </h3>
            <p className="text-xl leading-relaxed text-gray-800">
              Our mission is providing a source for meaningful relationships and genuine experiences to combat the isolation.
            </p>
            {/* Decorative heart */}
            <div className="absolute top-2  opacity-10 ">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="#FF6B6B">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* Action Card */}
          <div className="relative bg-[#F3F0F7] rounded-3xl p-8 overflow-hidden">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-[#FF69B4] border-b-2 border-[#FF69B4] pb-1">
                Action
              </span>
            </h3>
            <p className="text-xl leading-relaxed text-gray-800">
              Our actions today are building a platform that makes finding and developing companionship easy for everyone.
            </p>
            {/* Decorative heart */}
            <div className="absolute top-4 right-4 opacity-10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="#FF6B6B">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>


     
      <div className="h-screen w-full relative overflow-hidden bg-[#1D1D1D]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={coupleImage}
          alt="Romantic sunset"
          className="w-full h-full object-cover brightness-50"
        />
      </div>


      <div className="h-screen w-full relative overflow-hidden bg-[#1D1D1D]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={coupleImage}
          alt="Romantic sunset"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content Grid */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 lg:px-24">
        {/* Left Column */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Discover your next meaningful companionship today at{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-baloo">swan</span>
            </h1>
            <button className="mt-8 bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download
            </button>
          </div>
        </div>

        {/* Right Column - Subscription Form */}
        <div className="hidden md:block md:w-2/3 lg:w-1/2 xl:w-2/5">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
            <p className="mb-8 text-lg opacity-90">
              Subscribe to receive the latest news and updates about Swan.
              We promise not to spam you!
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 pr-28"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-[#A082B7] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

  
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0  text-white flex flex-wrap pb-24 px-20 justify-between items-center">
        <div className="text-sm opacity-80">
          Copyright © 2024 <span className="font-medium">Swan</span>. All Rights Reserved.
        </div>
        <div className="flex gap-6 text-sm opacity-80">
          <a href="#" className="hover:opacity-100">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:opacity-100">Privacy Policy</a>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default LandingPage;