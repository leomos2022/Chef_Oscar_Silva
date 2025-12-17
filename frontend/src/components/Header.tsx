"use client";
import { useState } from "react";
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

interface HeaderProps {
  menu: { key: string; label: string }[];
  active: string;
  setActive: (key: string) => void;
}

export default function Header({ menu, active, setActive }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (key: string) => {
    setActive(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white text-gray-900 shadow-md flex items-center justify-between px-4 md:px-8 py-4 md:py-6 sticky top-0 z-50 border-b border-gray-200">
      {/* Logo */}
      <div 
        className="font-extrabold text-xl md:text-3xl tracking-wide uppercase text-[#1a4d3a] cursor-pointer" 
        onClick={() => setActive('home')}
        style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.05em' }}
      >
        Chef Oscar Silva
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <ul className="flex gap-6 xl:gap-8">
          {menu.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => setActive(item.key)}
                className={`bg-transparent border-none outline-none text-base xl:text-lg font-medium tracking-wide px-2 py-1 transition-all relative
                  ${active === item.key ? "text-[#e95a2a] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#e95a2a] after:rounded" : "hover:text-[#e95a2a]"}`}
                style={{ boxShadow: "none" }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Icons */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6">
        <a href="#" className="text-xl xl:text-2xl hover:text-[#e95a2a] transition-colors" aria-label="User account"><FaUser /></a>
        <a href="#" className="text-xl xl:text-2xl hover:text-[#e95a2a] transition-colors" aria-label="Shopping cart"><FaShoppingCart /></a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-3xl text-[#1a4d3a] hover:text-[#e95a2a] transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <span className="font-bold text-lg text-[#1a4d3a]">Menu</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-gray-600 hover:text-[#e95a2a]"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="flex flex-col">
              {menu.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => handleMenuClick(item.key)}
                    className={`w-full text-left px-6 py-4 text-lg font-medium transition-colors ${
                      active === item.key 
                        ? 'bg-[#e95a2a]/10 text-[#e95a2a] border-l-4 border-[#e95a2a]' 
                        : 'hover:bg-gray-100 border-l-4 border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200 space-y-4">
            <div className="flex justify-around text-2xl">
              <a href="#" className="text-gray-600 hover:text-[#e95a2a] transition-colors" aria-label="User"><FaUser /></a>
              <a href="#" className="text-gray-600 hover:text-[#e95a2a] transition-colors" aria-label="Cart"><FaShoppingCart /></a>
            </div>
            <div className="flex justify-around text-2xl pt-2 border-t border-gray-200">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:scale-110 transition-transform" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:scale-110 transition-transform" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:scale-110 transition-transform" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 