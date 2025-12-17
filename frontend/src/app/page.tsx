"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import BookOnlineSection from "../components/BookOnlineSection";
import OnlineOrdersSection from "../components/OnlineOrdersSection";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ChatBot from "../components/ChatBot";
import LoadingScreen from "../components/LoadingScreen";

const MENU = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "gallery", label: "Gallery" },
  { key: "bookOnline", label: "Services" },
  { key: "testimonials", label: "Testimonials" },
  { key: "contact", label: "Contact" },
];

export default function Home() {
  const [active, setActive] = useState("home");

  // Initialize Tawk.to chatbot
  useEffect(() => {
    // Tawk.to script - Replace with your actual Tawk.to property ID
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_PROPERTY_ID/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Uncomment and add your Tawk.to property ID to enable the chatbot
    // document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      const tawkScript = document.querySelector('script[src*="tawk.to"]');
      if (tawkScript) {
        document.body.removeChild(tawkScript);
      }
    };
  }, []);

  // Background color based on active section
  const getBgColor = () => {
    if (active === "home") return "hsla(78.33,19.15%,36.86%,1)";
    if (active === "contact") return "hsla(78.33,19.15%,36.86%,1)";
    if (active === "testimonials") return "#f9fafb";
    return "#ffffff";
  };

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen flex flex-col text-gray-900 font-sans" style={{ background: getBgColor() }}>
        <Header menu={MENU} active={active} setActive={setActive} />
        
        <main className="flex-1 flex flex-col items-center">
          {active === "home" && <HomeSection />}
          {active === "about" && <AboutSection />}
          {active === "gallery" && <GallerySection />}
          {active === "bookOnline" && <BookOnlineSection />}
          {active === "testimonials" && <TestimonialsSection />}
          {active === "contact" && <ContactSection />}
        </main>
        
        <Footer />
        
        {/* WhatsApp Float Button */}
        <WhatsAppFloat />
        
        {/* AI ChatBot */}
        <ChatBot />
      </div>
    </>
  );
}
