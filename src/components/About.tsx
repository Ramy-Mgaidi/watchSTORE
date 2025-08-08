import React from 'react';
import { Award, Clock, Gem, Users, Shield, Crown, Zap, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Clock,
      title: 'Swiss Heritage',
      description: 'Over 150 years of revolutionary watchmaking excellence',
      stat: '1875',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Gem,
      title: 'Master Craftsmanship',
      description: 'Each timepiece crafted by certified master artisans',
      stat: '500+',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Excellence Awards',
      description: 'Recognized by international horological institutions',
      stat: '250+',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Exclusive Club',
      description: 'Limited production ensuring unique masterpieces',
      stat: '50k+',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const achievements = [
    { 
      icon: Shield, 
      title: 'Swiss Made Certification', 
      desc: 'Official Swiss quality guarantee',
      metric: '100%'
    },
    { 
      icon: Crown, 
      title: 'Royal Appointments', 
      desc: 'Timekeeper to European royalty',
      metric: '12+'
    },
    { 
      icon: Zap, 
      title: 'Innovation Patents', 
      desc: 'Cutting-edge horological technology',
      metric: '150+'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-emerald-950 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-400/8 rounded-full blur-3xl"></div>
        <div className="floating-element-delayed absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                <Target className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-emerald-300 text-sm font-medium">Our Legacy</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-bold mb-8 modern-heading">
                <span className="bg-gradient-to-r from-white via-emerald-300 to-green-400 bg-clip-text text-transparent">
                  Crafted for
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Eternity
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                At Chronos, we don't just create timepieces – we engineer the future of luxury. 
                Every watch represents a revolutionary leap in Swiss horological mastery, combining 
                traditional craftsmanship with cutting-edge innovation.
              </p>
              
              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                Our commitment to excellence transcends mere timekeeping. Each Chronos timepiece 
                is a testament to precision engineering, designed to accompany you through life's 
                most significant moments and be treasured for generations.
              </p>
            </div>
            
            {/* Achievements grid */}
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="modern-card flex items-center space-x-6 glass-card p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-emerald-300 font-bold text-lg">{achievement.title}</h4>
                    <p className="text-slate-400">{achievement.desc}</p>
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">
                    {achievement.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            {/* Main image */}
            <div className="product-showcase aspect-square rounded-3xl overflow-hidden border border-emerald-500/20 relative">
              <img
                src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Master Craftsman at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>
              
              {/* Overlay content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-3xl font-bold text-white mb-2 modern-heading">Swiss Precision</h4>
                <p className="text-emerald-300 text-lg">Where tradition meets innovation</p>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-8 -right-8 glass-card rounded-2xl p-6 border border-emerald-500/30 floating-element">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-slate-300 text-sm">Precision Rate</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-card rounded-2xl p-6 border border-emerald-500/30 floating-element-delayed">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-slate-300 text-sm">Global Support</div>
              </div>
            </div>
            
            {/* Glow effects */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Feature cards section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4 modern-heading">Why Choose Chronos</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover what sets our timepieces apart in the world of luxury horology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="modern-card group glass-card p-8 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-emerald-400 mb-4">{feature.stat}</div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;