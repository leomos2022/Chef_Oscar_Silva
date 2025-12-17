"use client";
import { useState } from "react";
import { FaClock, FaStar, FaUtensils } from "react-icons/fa";
import BookingModal from "./BookingModal";

const SERVICES = [
  {
    title: "3 Course Plated Dinner",
    duration: "4 hr",
    price: "From CA$129",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
    description: "Elegant three-course dinner perfect for intimate gatherings",
    popular: false,
  },
  {
    title: "Cooking Class or Demonstration",
    duration: "3 hr",
    price: "CA$300",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    description: "Learn culinary secrets from a professional chef",
    popular: true,
  },
  {
    title: "Micro Weddings",
    duration: "4 hr",
    price: "TBD",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "Make your special day unforgettable with gourmet cuisine",
    popular: false,
  },
  {
    title: "Hor's Doeuvres and 3 Course Plated",
    duration: "4 hr",
    price: "CA$159",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    description: "Complete dining experience with appetizers and main courses",
    popular: false,
  },
  {
    title: "9 Course Tasting Menu",
    duration: "5 hr",
    price: "CA$199",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    description: "Ultimate culinary journey with nine exquisite courses",
    popular: true,
  },
  {
    title: "Family Style Dinner Service",
    duration: "4 hr",
    price: "From CA$99",
    image: "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80",
    description: "Casual, family-friendly dining experience",
    popular: false,
  },
];

export default function BookOnlineSection() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (service: typeof SERVICES[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#1a4d3a]/10 px-4 py-2 rounded-full text-sm font-semibold text-[#1a4d3a] mb-4">
          <FaUtensils />
          Premium Services
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Culinary Experiences
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our exclusive selection of private dining experiences, each crafted to create unforgettable memories
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 bg-[#e95a2a] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <FaStar className="text-xs" />
                  Popular
                </div>
              )}
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Content */}
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {service.description}
              </p>
              
              {/* Details */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <FaClock className="text-[#e95a2a]" />
                  {service.duration}
                </span>
              </div>
              
              {/* Price */}
              <div className="text-2xl font-bold text-[#1a4d3a] mb-4">
                {service.price}
                <span className="text-sm font-normal text-gray-500 ml-1">per person</span>
              </div>
              
              {/* Button */}
              <button 
                onClick={() => handleBookClick(service)}
                className="mt-auto bg-gradient-to-r from-[#1a4d3a] to-[#2d6a4f] hover:from-[#2d6a4f] hover:to-[#1a4d3a] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Request to Book
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-[#1a4d3a]/5 to-[#2d6a4f]/5 rounded-2xl border border-[#1a4d3a]/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#e95a2a] mb-2">24h</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#e95a2a] mb-2">100%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#e95a2a] mb-2">500+</div>
            <div className="text-sm text-gray-600">Events Catered</div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {selectedService && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedService}
        />
      )}
    </div>
  );
} 