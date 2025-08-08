import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Globe, Calendar, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Concierge Hotline',
      details: '+1 (555) 123-CHRONOS',
      subtitle: '24/7 Luxury Service',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Mail,
      title: 'Private Email',
      details: 'concierge@chronos.luxury',
      subtitle: 'Response within 2 hours',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Flagship Boutique',
      details: 'Fifth Avenue, New York',
      subtitle: 'By appointment only',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Consultation Hours',
      details: 'Mon - Sat: 10AM - 8PM',
      subtitle: 'Sunday: Private appointments',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const benefits = [
    'Priority access to limited editions',
    'Complimentary worldwide shipping',
    'Private viewing appointments',
    'Lifetime authenticity guarantee',
    'Dedicated personal advisor',
    'Exclusive collector events'
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-emerald-950 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="particles absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Globe className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-300 text-sm font-medium">Global Concierge</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 modern-heading">
            <span className="bg-gradient-to-r from-white via-emerald-300 to-green-400 bg-clip-text text-transparent">
              Experience
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Luxury Service
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our dedicated concierge team is ready to provide you with personalized assistance and 
            exclusive access to our finest timepieces. Experience service that exceeds expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact methods */}
            <div className="glass-card p-8 rounded-3xl border border-emerald-500/20">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center modern-heading">
                <User className="w-8 h-8 text-emerald-400 mr-3" />
                Premium Contact
              </h3>
              
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="modern-card flex items-start space-x-4 glass-card p-6 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-emerald-300 font-medium">
                        {info.details}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="glass-card p-8 rounded-3xl border border-emerald-500/20">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-emerald-400 mr-3" />
                Exclusive Benefits
              </h4>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-slate-300 group hover:text-emerald-300 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-2xl border border-emerald-500/20 text-center">
                <div className="text-2xl font-bold text-emerald-400">24/7</div>
                <div className="text-slate-400 text-sm">Support</div>
              </div>
              <div className="glass-card p-4 rounded-2xl border border-emerald-500/20 text-center">
                <div className="text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-slate-400 text-sm">Countries</div>
              </div>
              <div className="glass-card p-4 rounded-2xl border border-emerald-500/20 text-center">
                <div className="text-2xl font-bold text-emerald-400">2h</div>
                <div className="text-slate-400 text-sm">Response</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl border border-emerald-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center mb-8">
                <MessageSquare className="w-8 h-8 text-emerald-400 mr-3" />
                <h3 className="text-3xl font-bold text-white modern-heading">Request Consultation</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 glass-card border border-emerald-500/30 rounded-xl text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 glass-card border border-emerald-500/30 rounded-xl text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-emerald-300 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 glass-card border border-emerald-500/30 rounded-xl text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-emerald-300 mb-3">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 glass-card border border-emerald-500/30 rounded-xl text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">Private Consultation</option>
                    <option value="purchase">Timepiece Purchase</option>
                    <option value="service">Watch Servicing</option>
                    <option value="appraisal">Appraisal Service</option>
                    <option value="custom">Custom Design</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-300 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 glass-card border border-emerald-500/30 rounded-xl text-white placeholder-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your luxury timepiece interests..."
                />
              </div>

              <button
                type="submit"
                className="modern-button w-full py-4 rounded-xl font-semibold text-white text-lg flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                Send Exclusive Request
              </button>

              <div className="flex items-center justify-center space-x-6 pt-4 text-slate-400 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>Same-day response</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>100% Confidential</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;