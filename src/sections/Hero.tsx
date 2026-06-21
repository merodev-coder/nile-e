import { useState } from 'react';
import { Search, SlidersHorizontal, Sparkles, Bed, Bath, Maximize, Home, KeyRound, TrendingUp, Building, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const tabs = [
  { id: 'buy', label: 'Buy', icon: Home },
  { id: 'rent', label: 'Rent', icon: KeyRound },
  { id: 'requests', label: 'Requests', icon: Building },
  { id: 'projects', label: 'Projects', icon: Building2 },
  { id: 'investment', label: 'Investment', icon: TrendingUp },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('buy');
  // Budget state reserved for future slider implementation
  void 0;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,27,55,0.6)] via-[rgba(17,27,55,0.7)] to-[rgba(17,27,55,0.95)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Text */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-4">
            The Smart Real Estate Decision Platform
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            We connect your intent with the right opportunities
          </p>
        </div>

        {/* Search Widget */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-[1000px] mx-auto">
          {/* Tab Bar */}
          <div className="flex border-b border-gray-100 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? 'border-[#1E3A8A] text-[#1E3A8A]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Fields */}
          <div className="p-5">
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Location
                </label>
                <Input
                  placeholder="Where do you want? e.g. New Cairo..."
                  className="h-11 border-gray-200 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]/20"
                />
              </div>
              <div className="lg:w-44">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Property Type
                </label>
                <select className="w-full h-11 px-3 border border-gray-200 rounded-md text-sm bg-white focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                  <option>Retail</option>
                  <option>Land</option>
                </select>
              </div>
              <div className="lg:w-44">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Purpose
                </label>
                <select className="w-full h-11 px-3 border border-gray-200 rounded-md text-sm bg-white focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20">
                  <option>Buy</option>
                  <option>Rent</option>
                  <option>Investment</option>
                </select>
              </div>
              <div className="lg:w-56">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Budget Range
                </label>
                <div className="flex items-center gap-2 h-11">
                  <select className="flex-1 h-full px-2 border border-gray-200 rounded-md text-xs bg-white focus:border-[#1E3A8A] focus:outline-none">
                    <option>Min</option>
                    <option>500K</option>
                    <option>1M</option>
                    <option>2M</option>
                    <option>5M</option>
                  </select>
                  <span className="text-gray-400 text-xs">-</span>
                  <select className="flex-1 h-full px-2 border border-gray-200 rounded-md text-xs bg-white focus:border-[#1E3A8A] focus:outline-none">
                    <option>Max</option>
                    <option>5M</option>
                    <option>10M</option>
                    <option>20M</option>
                    <option>50M+</option>
                  </select>
                </div>
              </div>
              <div className="flex items-end">
                <Button className="bg-[#1E3A8A] hover:bg-[#172E6E] text-white h-11 px-6 font-semibold gap-2 w-full lg:w-auto">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="max-w-[1000px] mx-auto mt-3">
          <div className="flex flex-wrap items-center gap-2 bg-[rgba(17,27,55,0.5)] backdrop-blur-sm rounded-lg px-4 py-2.5">
            <button className="flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              More Filters
            </button>
            <div className="w-px h-5 bg-white/20" />
            <button className="flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors">
              <Maximize className="w-3.5 h-3.5" />
              Area (m²)
            </button>
            <button className="flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors">
              <Bed className="w-3.5 h-3.5" />
              Bedrooms
            </button>
            <button className="flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors">
              <Bath className="w-3.5 h-3.5" />
              Bathrooms
            </button>
            <button className="flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors">
              Furnishing
            </button>
            <div className="ml-auto">
              <button className="flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-1.5 rounded-md bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#172E6E] hover:to-[#2563EB] transition-all shadow-lg shadow-blue-500/25">
                <Sparkles className="w-3.5 h-3.5" />
                Smart Search (AI)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
