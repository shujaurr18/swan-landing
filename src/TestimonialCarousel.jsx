import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userimage from '../src/assets/whatspapimage.jpg' 
import userimage1 from '../src/assets/Rectangle 28.png' 
import userimage2 from '../src/assets/Rectangle 41.png' 
import userimage3 from '../src/assets/Rectangle 45.png' 



const testimonials = [
  {
    id: 1,
    text: "Honestly I just needed a break from the dating scene but this may just be better...",
    author: "Jessica M",
    image: userimage
  },
  {
    id: 2,
    text: "I was a bit skeptical at first because of all the corny AI apps out there but it really felt like I was talking with someone on the other side which was such a relief!",
    author: "Oliver P.",
    image: userimage1
  },
  {
    id: 3,
    text: "Amazing experience! The conversations feel so natural and engaging.",
    author: "Sarah M.",
    image: userimage2
  },
  {
    id: 4,
    text: "Honestly I just needed a break from the dating scene but this may just be better...",
    author: "Jessica M",
    image: userimage3
  },
  {
    id: 5,
    text: "I was a bit skeptical at first because of all the corny AI apps out there but it really felt like I was talking with someone on the other side which was such a relief!",
    author: "Oliver P.",
    image: userimage
  },
  {
    id: 6,
    text: "Amazing experience! The conversations feel so natural and engaging.",
    author: "Sarah M.",
    image: userimage1
  }
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300, // Faster transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Faster autoplay
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    fade: true
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const sliderRef = React.useRef(null);

  return (
    <div className="relative bg-[#F3F0F7] min-h-screen">
      {/* Main Content */}
      <div className=" mx-auto px-12 pt-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          {/* Left side - Testimonial content */}
          <div className='col-span-2'>
            <h3 className="text-gray-600 text-xl mb-12">Don't just take it from us...</h3>
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="outline-none">
                  <div>
                    <div className="text-6xl font-serif text-gray-300 mb-4">"</div>
                    <p className="text-3xl font-medium mb-8 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <p className="text-xl font-medium">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
<div></div>
          {/* Right side - Image */}
          <div className="hidden md:block ">
            <div className="relative h-[500px] w-[400px]  overflow-hidden rounded-lg">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={`Testimonial from ${testimonial.author}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width indicators at bottom */}
      <div className="absolute bottom-0 left-0 w-full right-0 px-8 py-12 bg-[#F3F0F7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-black' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;