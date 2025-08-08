import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye, Zap, Shield, Award } from 'lucide-react';

const watches = [
  {
    id: 1,
    name: 'Emerald Dynasty',
    model: 'ED-2025',
    price: '$12,999',
    originalPrice: '$15,999',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    description: 'Revolutionary emerald-accented masterpiece with next-gen Swiss movement',
    features: ['Swiss Made', 'Sapphire Crystal', '300m Water Resistant', 'Limited Edition'],
    specs: {
      movement: 'Automatic',
      power: '72h Reserve',
      case: '42mm Titanium',
      crystal: 'Sapphire'
    },
    badge: 'NEW'
  },
  {
    id: 2,
    name: 'Midnight Forest',
    model: 'MF-2025',
    price: '$15,499',
    originalPrice: '$18,999',
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    description: 'Deep forest ceramic bezel with revolutionary chronograph technology',
    features: ['Ceramic Bezel', 'Automatic Movement', 'GMT Function', 'Titanium Case'],
    specs: {
      movement: 'Chronograph',
      power: '80h Reserve',
      case: '44mm Ceramic',
      crystal: 'AR Sapphire'
    },
    badge: 'BESTSELLER'
  },
  {
    id: 3,
    name: 'Royal Sage',
    model: 'RS-2025',
    price: '$18,999',
    originalPrice: '$22,999',
    image: 'https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    description: 'Ultra-limited sage dial chronograph with 18K gold precision accents',
    features: ['18K Gold Accents', 'Chronograph', 'Limited to 500pcs', 'Premium Leather'],
    specs: {
      movement: 'Manufacture',
      power: '120h Reserve',
      case: '40mm Gold',
      crystal: 'Domed Sapphire'
    },
    badge: 'LIMITED'
  }
];

const FeaturedWatches = () => {
  const [hoveredWatch, setHoveredWatch] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedWatch, setSelectedWatch] = useState<number | null>(null);

  const toggleFavorite = (watchId: number) => {
    setFavorites(prev => 
      prev.includes(watchId) 
        ? prev.filter(id => id !== watchId)
        : [...prev, watchId]
    );
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'NEW': return 'from-emerald-500 to-green-500';
      case 'BESTSELLER': return 'from-orange-500 to-red-500';
      case 'LIMITED': return 'from-purple-500 to-pink-500';
      default: return 'from-emerald-500 to-green-500';
    }
  };

  return (
    <section id="collection" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-emerald-950 relative overflow-hidden">
      {/* Enhanced particles */}
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
            <Zap className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-300 text-sm font-medium">Featured Collection 2025</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 modern-heading">
            <span className="bg-gradient-to-r from-white via-emerald-300 to-green-400 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover our latest collection of revolutionary timepieces, where cutting-edge technology 
            meets timeless Swiss craftsmanship in perfect harmony.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Watch grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {watches.map((watch, index) => (
            <div
              key={watch.id}
              className="modern-card group relative glass-card rounded-3xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500"
              onMouseEnter={() => setHoveredWatch(watch.id)}
              onMouseLeave={() => setHoveredWatch(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge */}
              <div className={`absolute top-6 left-6 px-3 py-1 bg-gradient-to-r ${getBadgeColor(watch.badge)} rounded-full text-white text-xs font-bold z-20`}>
                {watch.badge}
              </div>

              {/* Product image */}
              <div className="product-showcase aspect-square mb-8 rounded-2xl overflow-hidden relative">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quick actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button 
                    onClick={() => toggleFavorite(watch.id)}
                    className={`interactive-element p-3 rounded-xl transition-all duration-300 ${
                      favorites.includes(watch.id) 
                        ? 'bg-red-500 text-white' 
                        : 'glass-card hover:bg-emerald-500 text-slate-300 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(watch.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="interactive-element p-3 rounded-xl glass-card hover:bg-emerald-500 text-slate-300 hover:text-white transition-all duration-300">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Specs overlay */}
                <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-emerald-400 font-medium">{watch.specs.movement}</div>
                    <div className="text-slate-300">{watch.specs.power}</div>
                    <div className="text-emerald-400 font-medium">{watch.specs.case}</div>
                    <div className="text-slate-300">{watch.specs.crystal}</div>
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(watch.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-slate-400 text-sm">({watch.rating}.0)</span>
                  </div>
                  <span className="text-slate-400 text-sm font-mono">{watch.model}</span>
                </div>

                {/* Name and description */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 modern-heading">
                    {watch.name}
                  </h3>
                  <p className="text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-300">
                    {watch.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {watch.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                      {watch.price}
                    </div>
                    <div className="text-sm text-slate-500 line-through">
                      {watch.originalPrice}
                    </div>
                  </div>
                  
                  <button className="modern-button px-6 py-3 rounded-xl font-medium text-white flex items-center group/btn">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Hover glow effect */}
              {hoveredWatch === watch.id && (
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur opacity-20 animate-pulse -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="modern-button px-12 py-4 rounded-2xl font-semibold text-white text-lg">
              View All Timepieces
            </button>
            <button className="glass-card px-12 py-4 rounded-2xl font-semibold text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 hover:text-white transition-all duration-300">
              Custom Design Service
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-8 mt-12 text-slate-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">Lifetime Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">Swiss Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">Free Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWatches;