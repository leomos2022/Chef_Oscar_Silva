"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { getAssetPath } from "@/utils/assetPath";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form Section */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get In Touch</h2>
              <p className="text-gray-600">Contact us for menu options, pricing, and availability</p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent outline-none transition-all ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent outline-none transition-all ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent outline-none transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent outline-none transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent outline-none transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your event, dietary requirements, or any questions you have..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1a4d3a] to-[#2d6a4f] hover:from-[#2d6a4f] hover:to-[#1a4d3a] text-white font-bold py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="bg-gradient-to-br from-[#1a4d3a] to-[#2d6a4f] p-6 md:p-10 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <FaPhone className="text-2xl text-[#e95a2a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+15551234567" className="hover:text-[#e95a2a] transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-2xl text-[#e95a2a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:chef@oscarsilva.com" className="hover:text-[#e95a2a] transition-colors">
                      chef@oscarsilva.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-2xl text-[#e95a2a] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Service Area</p>
                    <p className="text-white/90">Greater Los Angeles Area</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="font-semibold mb-4">Connect With Us</p>
                <div className="flex gap-4">
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-[#25D366] rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110"
                  >
                    <FaWhatsapp />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-[#E4405F] rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-[#1877F2] rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="hidden lg:block mt-8">
              <img 
                src={getAssetPath('/contact-table.jpg')} 
                alt="Elegant dining setup" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 