import React from 'react';
import { Shield, Wrench, Truck, Crown, Clock, Gem, Award, Users, Zap, Star, Globe, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: 'Concierge Service',
      description: 'Personal luxury advisor with 24/7 premium support',
      features: ['One-on-one consultation', 'Custom recommendations', 'Private showings', 'VIP treatment'],
      price: 'Complimentary',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Comprehensive coverage for all Chronos timepieces',
      features: ['Movement guarantee', 'Water resistance', 'Material defects', '24/7 support'],
      price: 'Included',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Wrench,
      title: 'Master Servicing',
      description: 'Expert maintenance by certified Swiss horologists',
      features: ['Annual check-ups', 'Precision calibration', 'Authenticity verification', 'Performance testing'],
      price: 'From $299',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Truck,
      title: 'White Glove Delivery',
      description: 'Secure, insured delivery worldwide with ceremony',
      features: ['Personal delivery', 'Secure packaging', 'Global shipping', 'Unboxing experience'],
      price: 'Complimentary',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const premiumServices = [
    {
      icon: Gem,
      title: 'Custom Design',
      description: 'Create your unique timepiece with our master craftsmen',
      metric: '100%'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Official authentication and valuation services',
      metric: '24h'
    },
    {
      icon: Users,
      title: 'Collectors Circle',
      description: 'Exclusive access to limited editions and events',
      metric: 'VIP'
    },
    {
      icon: Clock,
      title: 'Heritage Restoration',
      description: 'Restore and preserve vintage Chronos timepieces',
      metric: '150+'
    }
  ];

  const supportFeatures = [
    { icon: Globe, title: 'Global Network', desc: '50+ countries' },
    { icon: Headphones, title: '24/7 Support', desc: 'Always available' },
    { icon: Star, title: 'Expert Team', desc: '500+ specialists' },
    { icon: Zap, title: 'Fast Response', desc: '< 2 hours' }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-emerald-950 relative overflow-hidden">
      {/* Enhanced particles */}
      <div className="particles absolute inset-0">
        {[...Array(30)].map((_, i) => (
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
            <Crown className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-300 text-sm font-medium">Premium Services</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 modern-heading">
            <span className="bg-gradient-to-r from-white via-emerald-300 to-green-400 bg-clip-text text-transparent">
              Exceptional
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Service
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our commitment to excellence extends beyond our timepieces to every aspect of your Chronos experience. 
            Discover world-class service that redefines luxury standards.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="modern-card group glass-card rounded-3xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative">
                {/* Service icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 premium-glow`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Price badge */}
                <div className="absolute top-0 right-0 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <span className="text-emerald-400 text-sm font-semibold">{service.price}</span>
                </div>
              </div>

              {/* Service content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 modern-heading">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Services Section */}
        <div className="glass-card rounded-3xl p-12 border border-emerald-500/20 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 modern-heading">Exclusive Offerings</h3>
            <p className="text-emerald-300 max-w-3xl mx-auto text-lg">
              Premium services reserved for our most distinguished clients and collectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumServices.map((service, index) => (
              <div
                key={service.title}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {service.metric}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="modern-card glass-card p-6 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h5 className="text-white font-semibold mb-1">{feature.title}</h5>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="modern-button px-12 py-4 rounded-2xl font-semibold text-white text-lg">
              Schedule Your Consultation
            </button>
            <button className="glass-card px-12 py-4 rounded-2xl font-semibold text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 hover:text-white transition-all duration-300">
              Learn More About Services
            </button>
          </div>
          
          <p className="text-slate-400 mt-8 max-w-2xl mx-auto">
            Experience the difference of true luxury service. Our dedicated team is ready to provide 
            you with personalized assistance and exclusive access to our finest timepieces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;