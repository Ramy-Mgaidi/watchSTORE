import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Star } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950">
      {/* Dynamic background with parallax */}
      <div 
        className="absolute inset-0 modern-gradient"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="floating-element-delayed absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-green-400/8 rounded-full blur-3xl"></div>
        <div className="floating-element absolute bottom-1/4 right-1/3 w-64 h-64 bg-teal-400/12 rounded-full blur-2xl"></div>
      </div>

      {/* Enhanced particles */}
      <div className="particles absolute inset-0">
        {[...Array(40)].map((_, i) => (
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

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-left lg:text-left">
            <div className={`mb-8 ${isVisible ? 'fade-in-left' : ''}`}>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                <Star className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-emerald-300 text-sm font-medium">Swiss Luxury Collection</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 modern-heading">
                <span className="hero-text">CHRONOS</span>
              </h1>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 text-emerald-300 modern-subheading fade-in-left delay-200">
                Precision Redefined
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-12 fade-in-left delay-400">
                Experience the future of luxury timekeeping. Each Chronos watch represents the pinnacle of 
                Swiss engineering, crafted for those who demand excellence in every detail.
              </p>
            </div>

            {/* Action buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 mb-12 ${isVisible ? 'fade-in-left delay-600' : ''}`}>
              <button className="modern-button group px-10 py-5 rounded-2xl font-semibold text-white text-lg hover:shadow-2xl transform transition-all duration-300">
                <span className="flex items-center justify-center">
                  Explore Collection
                  <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </button>
              
              <button className="glass-card group px-10 py-5 rounded-2xl font-semibold text-emerald-300 hover:text-white border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-3" />
                Watch Story
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-8 ${isVisible ? 'fade-in-left delay-800' : ''}`}>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">Years Heritage</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">Master Craftsmen</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-emerald-400 mb-2">50k+</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">Global Clients</div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Watch */}
          <div className={`relative ${isVisible ? 'scale-in delay-300' : ''}`}>
            <div className="watch-container mx-auto relative">
              {/* Glow effect behind watch */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
              
              <div className="watch-3d relative z-10">
                <div className="watch-face">
                  <div className="watch-bezel"></div>
                  <div className="watch-dial">
                    <div className="hour-markers">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="hour-marker" style={{ transform: `rotate(${i * 30}deg)` }}></div>
                      ))}
                    </div>
                    <div className="hands">
                      <div className="hour-hand"></div>
                      <div className="minute-hand"></div>
                      <div className="second-hand"></div>
                      <div className="center-dot"></div>
                    </div>
                  </div>
                  <div className="watch-glass"></div>
                </div>
              </div>
              
              {/* Floating info cards */}
              <div className="absolute -top-8 -left-8 glass-card p-4 rounded-2xl border border-emerald-500/20 floating-element">
                <div className="text-emerald-400 font-bold text-lg">Swiss Made</div>
                <div className="text-slate-300 text-sm">Certified Excellence</div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 glass-card p-4 rounded-2xl border border-emerald-500/20 floating-element-delayed">
                <div className="text-emerald-400 font-bold text-lg">Limited</div>
                <div className="text-slate-300 text-sm">500 Pieces Only</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className={`mt-20 ${isVisible ? 'fade-in-up delay-1000' : ''}`}>
          <div className="flex flex-col items-center">
            <p className="text-slate-400 mb-4 text-sm uppercase tracking-wider">Scroll to discover</p>
            <ChevronDown className="w-8 h-8 text-emerald-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;