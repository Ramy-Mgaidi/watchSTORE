import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, Search, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-card shadow-2xl border-b border-emerald-500/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent modern-heading">
                CHRONOS
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <a href="#home" className="nav-link text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#collection" className="nav-link text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
              Collection
            </a>
            <a href="#about" className="nav-link text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
              Heritage
            </a>
            <a href="#services" className="nav-link text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#contact" className="nav-link text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
              Contact
            </a>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <button className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-emerald-500/10 transition-all duration-300">
              <Globe className="w-4 h-4 text-slate-400" />
              <span className="text-slate-400 text-sm">EN</span>
            </button>

            {/* Search */}
            <button className="interactive-element p-3 rounded-xl hover:bg-emerald-500/10 transition-all duration-300">
              <Search className="w-5 h-5 text-slate-300 hover:text-emerald-400" />
            </button>

            {/* User account */}
            <button className="interactive-element p-3 rounded-xl hover:bg-emerald-500/10 transition-all duration-300">
              <User className="w-5 h-5 text-slate-300 hover:text-emerald-400" />
            </button>

            {/* Shopping bag */}
            <button className="interactive-element p-3 rounded-xl hover:bg-emerald-500/10 transition-all duration-300 relative">
              <ShoppingBag className="w-5 h-5 text-slate-300 hover:text-emerald-400" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">0</span>
              </div>
            </button>

            {/* CTA Button */}
            <button className="hidden md:block modern-button px-6 py-3 rounded-xl font-medium text-white text-sm">
              Book Consultation
            </button>
            
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6 text-slate-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 glass-card rounded-2xl mt-4 border border-emerald-500/20">
            <a href="#home" className="block py-3 px-6 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all duration-300 mx-4">
              Home
            </a>
            <a href="#collection" className="block py-3 px-6 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all duration-300 mx-4">
              Collection
            </a>
            <a href="#about" className="block py-3 px-6 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all duration-300 mx-4">
              Heritage
            </a>
            <a href="#services" className="block py-3 px-6 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all duration-300 mx-4">
              Services
            </a>
            <a href="#contact" className="block py-3 px-6 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all duration-300 mx-4">
              Contact
            </a>
            <div className="px-4 pt-4 border-t border-emerald-500/20">
              <button className="modern-button w-full py-3 rounded-xl font-medium text-white">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;