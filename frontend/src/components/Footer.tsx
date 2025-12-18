"use client";
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-br from-[#23281a] to-[#1a1f14] text-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">{t('headerLogo')}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footerBrandText')}
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#E4405F] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('footerQuickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerAbout')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerServices')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerGallery')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerTestimonials')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerContact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('footerServicesTitle')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerServicesDinner')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerServicesClasses')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerServicesWeddings')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerServicesCorporate')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#e95a2a] transition-colors">{t('footerServicesConsulting')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('footerContactTitle')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaPhone className="text-[#e95a2a] mt-1 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-[#e95a2a] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-[#e95a2a] mt-1 flex-shrink-0" />
                <a href="mailto:chef@oscarsilva.com" className="text-gray-300 hover:text-[#e95a2a] transition-colors">
                  chef@oscarsilva.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#e95a2a] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {t('contactArea')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Chef Oscar Silva. {t('footerCopyright')}
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span>{t('footerMadeWith')}</span>
            <FaHeart className="text-[#e95a2a] animate-pulse" />
            <span>{t('footerBy')}</span>
            <a 
              href="https://www.linkedin.com/in/leonardo-mosquera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#e95a2a] hover:text-white font-semibold transition-colors"
            >
              Leonardo Mosquera
            </a>
          </div>
          <div className="flex gap-4 text-gray-400 text-xs">
            <a href="#" className="hover:text-[#e95a2a] transition-colors">{t('footerPrivacy')}</a>
            <a href="#" className="hover:text-[#e95a2a] transition-colors">{t('footerTerms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 