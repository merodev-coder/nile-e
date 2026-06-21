import { useState } from 'react';
import { ArrowRight, Bed, Bath, Maximize, Heart } from 'lucide-react';

const categories = ['All', 'Apartments', 'Villas', 'Offices', 'Retail', 'Land'];

const properties = [
  {
    id: 1,
    title: 'Twin House Villa',
    location: 'Mostakbal City, Cairo',
    image: '/images/property-1.jpg',
    tag: 'Featured',
    tagColor: '#1E3A8A',
    area: '320 m²',
    beds: 4,
    baths: 3,
    finishing: 'Fully Finished',
    price: 'EGP 12,500,000',
    period: '',
    type: 'Villas',
  },
  {
    id: 2,
    title: 'Premium Office Suite',
    location: 'New Cairo, Egypt',
    image: '/images/property-2.jpg',
    tag: 'Hot Deal',
    tagColor: '#EF4444',
    area: '180 m²',
    beds: 0,
    baths: 2,
    finishing: 'Shell & Core',
    price: 'EGP 45,000',
    period: '/ month',
    type: 'Offices',
  },
  {
    id: 3,
    title: 'Retail Storefront',
    location: 'Sheikh Zayed',
    image: '/images/property-3.jpg',
    tag: 'Investment',
    tagColor: '#F59E0B',
    area: '95 m²',
    beds: 0,
    baths: 1,
    finishing: 'Fitted',
    price: 'EGP 3,800,000',
    period: '',
    type: 'Retail',
  },
  {
    id: 4,
    title: 'Luxury Apartment',
    location: 'New Cairo',
    image: '/images/property-4.jpg',
    tag: 'New Launch',
    tagColor: '#10B981',
    area: '220 m²',
    beds: 3,
    baths: 2,
    finishing: 'Super Lux',
    price: 'EGP 8,900,000',
    period: '',
    type: 'Apartments',
  },
  {
    id: 5,
    title: 'Penthouse Suite',
    location: 'Downtown Cairo',
    image: '/images/property-5.jpg',
    tag: 'Prime Location',
    tagColor: '#8B5CF6',
    area: '350 m²',
    beds: 5,
    baths: 4,
    finishing: 'Ultra Lux',
    price: 'EGP 25,000,000',
    period: '',
    type: 'Apartments',
  },
  {
    id: 6,
    title: 'Beachfront Villa',
    location: 'North Coast',
    image: '/images/property-6.jpg',
    tag: 'Hot Deal',
    tagColor: '#EF4444',
    area: '450 m²',
    beds: 5,
    baths: 4,
    finishing: 'Fully Finished',
    price: 'EGP 32,000,000',
    period: '',
    type: 'Villas',
  },
];

export default function FeaturedProperties() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? properties
    : properties.filter((p) => p.type === activeCategory);

  return (
    <section className="bg-[#F4F6F8] py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111B37] tracking-tight">
            Featured Properties
          </h2>
          <a href="#properties" className="flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:text-[#172E6E]">
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#1E3A8A] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide text-white"
                  style={{ backgroundColor: property.tagColor }}
                >
                  {property.tag}
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[#111B37] mb-0.5">{property.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{property.location}</p>

                {/* Features */}
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  {property.beds > 0 && (
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5" /> {property.beds}
                    </span>
                  )}
                  {property.baths > 0 && (
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5" /> {property.baths}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Maximize className="w-3.5 h-3.5" /> {property.area}
                  </span>
                </div>

                <div className="text-[10px] text-gray-400 mb-3 uppercase tracking-wide">
                  {property.finishing}
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <span className="text-base font-bold text-[#111B37]">{property.price}</span>
                  {property.period && (
                    <span className="text-xs text-gray-500">{property.period}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
