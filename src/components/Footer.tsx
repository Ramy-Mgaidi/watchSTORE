import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, Clock, ArrowRight, Star } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  const quickLinks = [
    'Timepiece Collections',
    'Limited Editions',
    'Heritage & Craftsmanship',
    'Concierge Services',
    'Warranty & Care',
    'Authenticity Verification'
  ];

  const services = [
    'Private Consultations',
    'Custom Design',
    'Watch Servicing',
    'Appraisal Services',
    'Insurance Valuation',
    'Restoration'
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="floating-element-delayed absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent modern-heading mb-4">
                CHRONOS
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Crafting exceptional timepieces since 1875. Each Chronos watch represents the pinnacle 
              of Swiss horological mastery and timeless elegance for the modern connoisseur.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300 group">
                <Phone className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">+1 (555) 123-CHRONOS</span>
              </div>
              <div className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300 group">
                <Mail className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">concierge@chronos.luxury</span>
              </div>
              <div className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300 group">
                <MapPin className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Fifth Avenue, New York</span>
              </div>
              <div className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300 group">
                <Clock className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Mon-Sat: 10AM-8PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`interactive-element w-12 h-12 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border border-emerald-500/20 rounded-xl flex items-center justify-center hover:border-emerald-400/40 transition-all duration-300 text-slate-400 ${social.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-emerald-300 modern-heading">Collections</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-emerald-300 modern-heading">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-emerald-300 modern-heading">Exclusive Updates</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Join our exclusive circle for first access to new collections, luxury events, and insider insights.
            </p>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 glass-card border border-emerald-500/30 rounded-xl text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all duration-300"
              />
              <button className="modern-button w-full py-3 rounded-xl font-medium text-white">
                Subscribe to Luxury
              </button>
            </div>

            <div className="mt-8 glass-card p-6 rounded-2xl border border-emerald-500/20">
              <h4 className="text-sm font-semibold text-emerald-300 mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2" />
                VIP Membership Benefits
              </h4>
              <ul className="text-xs text-slate-400 space-y-2">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2"></div>
                  Priority access to limited editions
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2"></div>
                  Exclusive event invitations
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2"></div>
                  Personal concierge service
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2"></div>
                  Complimentary maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-500/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-sm text-slate-400 text-center lg:text-left">
              © 2025 Chronos Luxury Timepieces. All rights reserved. | 
              <span className="text-emerald-400 ml-1">Swiss Made Excellence</span>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">Authenticity Guarantee</a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-slate-500">
            <p>Handcrafted with precision • Swiss heritage since 1875 • Limited production for exclusivity</p>
            <p className="mt-2">Experience the future of luxury timekeeping</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;