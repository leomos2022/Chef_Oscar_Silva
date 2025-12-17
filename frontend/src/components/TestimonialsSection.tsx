"use client";
import { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    event: "Private Anniversary Dinner",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1",
    text: "Chef Oscar made our 25th anniversary absolutely unforgettable! Every dish was a masterpiece, and the presentation was stunning. His professionalism and attention to detail were exceptional. We can't wait to book him again!",
    date: "November 2024"
  },
  {
    name: "Michael Chen",
    event: "Corporate Event",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=13",
    text: "We hired Chef Oscar for a company retreat and he exceeded all expectations. He catered to all dietary restrictions perfectly and created an amazing tasting menu. Our team is still talking about it!",
    date: "October 2024"
  },
  {
    name: "Emily Rodriguez",
    event: "Micro Wedding",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5",
    text: "Oscar catered our intimate wedding and it was the highlight of the day! The food was incredible - our guests are still raving about it months later. Thank you for making our special day even more memorable!",
    date: "September 2024"
  },
  {
    name: "David Thompson",
    event: "Birthday Celebration",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
    text: "Chef Oscar prepared a 9-course tasting menu for my 50th birthday and it was extraordinary! Each course was perfectly executed and beautifully presented. A true culinary artist!",
    date: "August 2024"
  },
  {
    name: "Lisa Martinez",
    event: "Cooking Class",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=9",
    text: "The cooking class with Chef Oscar was incredible! He's an amazing teacher and made everything so approachable. I learned techniques I'll use forever. Highly recommend!",
    date: "July 2024"
  },
  {
    name: "James Wilson",
    event: "Family Dinner",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=14",
    text: "Having Chef Oscar come to our home was the best decision! The family-style dinner brought everyone together, and the food was restaurant quality. An experience we'll never forget!",
    date: "June 2024"
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who've experienced Chef Oscar's culinary excellence
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12 min-h-[400px] flex flex-col justify-between">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-6xl text-[#e95a2a]/10">
            <FaQuoteLeft />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#e95a2a] text-2xl" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed max-w-3xl mx-auto italic">
              "{currentTestimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-20 h-20 rounded-full border-4 border-[#e95a2a]/20 mb-4 shadow-lg"
              />
              <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
              <p className="text-[#e95a2a] font-medium">{currentTestimonial.event}</p>
              <p className="text-gray-500 text-sm mt-1">{currentTestimonial.date}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-[#1a4d3a] hover:bg-[#2d6a4f] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-[#1a4d3a] hover:bg-[#2d6a4f] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-[#e95a2a] w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {TESTIMONIALS.map((testimonial, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                idx === currentIndex 
                  ? 'bg-[#1a4d3a] shadow-lg' 
                  : 'bg-white hover:bg-gray-50 shadow'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={`w-16 h-16 rounded-full mb-2 border-2 transition-all ${
                  idx === currentIndex ? 'border-[#e95a2a]' : 'border-gray-200'
                }`}
              />
              <p className={`text-xs font-semibold text-center line-clamp-1 ${
                idx === currentIndex ? 'text-white' : 'text-gray-700'
              }`}>
                {testimonial.name}
              </p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className={`text-xs ${
                    idx === currentIndex ? 'text-[#e95a2a]' : 'text-yellow-400'
                  }`} />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-4xl font-bold text-[#e95a2a] mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-4xl font-bold text-[#e95a2a] mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="text-4xl font-bold text-[#e95a2a] mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
