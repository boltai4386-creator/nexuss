import { Instagram, Linkedin, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-gradient py-8 mt-20">
      <div className="container mx-auto px-4 footer-mobile">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand Name */}
          <h3 className="text-2xl font-bold text-white font-heading tracking-wider">
            ELEVATE X
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 text-center max-w-2xl text-sm leading-relaxed font-body">
            Transforming digital experiences through innovative design and cutting-edge technology. We create 
            solutions that elevate your brand and drive meaningful connections.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#7CFC00] hover:bg-[#7CFC00]/10 transition-all duration-300 group"
              aria-label="Website"
            >
              <Globe className="w-4 h-4 text-gray-400 group-hover:text-[#7CFC00] transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#7CFC00] hover:bg-[#7CFC00]/10 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-400 group-hover:text-[#7CFC00] transition-colors duration-300" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#7CFC00] hover:bg-[#7CFC00]/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-[#7CFC00] transition-colors duration-300" />
            </a>
          </div>
          
          {/* Copyright and Made with */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl text-xs text-gray-500 space-y-2 md:space-y-0">
            <p>© 2025 ELEVATE X. All rights reserved.</p>
            <p className="flex items-center space-x-1">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>by</span>
              <span className="text-[#7CFC00] font-medium">Hamid</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};