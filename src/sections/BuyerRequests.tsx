import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Building2, Store, TreePine, ArrowRight, ChevronLeft, ChevronRight, MapPin, Maximize, Banknote, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const requests = [
  {
    id: 1,
    category: 'Apartment',
    icon: Home,
    color: '#10B981',
    bgColor: '#ECFDF5',
    location: 'New Cairo',
    area: '180 m²',
    budget: 'EGP 4,500,000',
    purpose: 'Buy',
    posted: '2 hours ago',
  },
  {
    id: 2,
    category: 'Office',
    icon: Building2,
    color: '#F59E0B',
    bgColor: '#FFFBEB',
    location: 'Sheikh Zayed',
    area: '250 m²',
    budget: 'EGP 35,000/mo',
    purpose: 'Rent',
    posted: '5 hours ago',
  },
  {
    id: 3,
    category: 'Retail',
    icon: Store,
    color: '#3B82F6',
    bgColor: '#EFF6FF',
    location: '6th of October',
    area: '120 m²',
    budget: 'EGP 2,800,000',
    purpose: 'Investment',
    posted: '1 day ago',
  },
  {
    id: 4,
    category: 'Villa',
    icon: Home,
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
    location: 'North Coast',
    area: '400 m²',
    budget: 'EGP 18,000,000',
    purpose: 'Buy',
    posted: '3 hours ago',
  },
  {
    id: 5,
    category: 'Land',
    icon: TreePine,
    color: '#EC4899',
    bgColor: '#FDF2F8',
    location: 'New Administrative Capital',
    area: '600 m²',
    budget: 'EGP 6,000,000',
    purpose: 'Investment',
    posted: '12 hours ago',
  },
  {
    id: 6,
    category: 'Apartment',
    icon: Home,
    color: '#10B981',
    bgColor: '#ECFDF5',
    location: 'Maadi',
    area: '150 m²',
    budget: 'EGP 3,200,000',
    purpose: 'Buy',
    posted: '6 hours ago',
  },
];

export default function BuyerRequests() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111B37] tracking-tight">
              Real Buyer & Tenant Requests
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-lg">
              Verified requests from serious buyers and tenants looking for properties like yours.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#requests" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:text-[#172E6E]">
              View All Requests
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {requests.map((req) => {
            const Icon = req.icon;
            return (
              <div
                key={req.id}
                className="min-w-[300px] max-w-[300px] rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="p-5 pb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: req.bgColor }}
                    >
                      <Icon className="w-5 h-5" style={{ color: req.color }} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: req.color }}>
                        Looking for {req.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {req.location}
                      </div>
                    </div>
                  </div>

                  {/* Data Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-[#F4F6F8] rounded-lg p-2.5">
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">
                        <Maximize className="w-3 h-3" /> Area
                      </div>
                      <span className="text-xs font-semibold text-[#111B37]">{req.area}</span>
                    </div>
                    <div className="bg-[#F4F6F8] rounded-lg p-2.5">
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">
                        <Banknote className="w-3 h-3" /> Budget
                      </div>
                      <span className="text-xs font-semibold text-[#111B37]">{req.budget}</span>
                    </div>
                    <div className="bg-[#F4F6F8] rounded-lg p-2.5">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">Purpose</div>
                      <span className="text-xs font-semibold text-[#111B37]">{req.purpose}</span>
                    </div>
                    <div className="bg-[#F4F6F8] rounded-lg p-2.5">
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">
                        <Calendar className="w-3 h-3" /> Posted
                      </div>
                      <span className="text-xs font-semibold text-[#111B37]">{req.posted}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5">
                  <Button
                    className="w-full text-xs font-semibold h-9"
                    style={{
                      backgroundColor: req.color,
                      color: 'white',
                    }}
                  >
                    I Have a Matching Property
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
