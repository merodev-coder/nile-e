import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, MapPin, BarChart3, ArrowDownToLine, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const dataCards = [
  {
    title: 'Average Price / m²',
    value: 'EGP 18,500',
    change: '+12.5%',
    trend: 'up',
    icon: TrendingUp,
    color: '#10B981',
    data: [30, 45, 35, 55, 48, 65, 58, 75, 68, 85],
  },
  {
    title: 'Rental Index',
    value: '142.8',
    change: '+3.2%',
    trend: 'up',
    icon: TrendingUp,
    color: '#3B82F6',
    data: [50, 52, 55, 53, 58, 60, 65, 62, 68, 72],
  },
  {
    title: 'Top Performing Area',
    value: 'New Cairo',
    change: '+18.7%',
    trend: 'up',
    icon: MapPin,
    color: '#8B5CF6',
    data: [20, 30, 45, 55, 65, 70, 80, 85, 90, 95],
  },
  {
    title: 'Market Activity',
    value: '8,420',
    change: '-2.1%',
    trend: 'down',
    icon: BarChart3,
    color: '#F59E0B',
    data: [60, 55, 65, 70, 68, 75, 72, 78, 70, 65],
  },
];

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 100 100" className="w-full h-16" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <polygon
        points={`0,100 ${points} 100,100`}
        fill={color}
        opacity="0.08"
      />
    </svg>
  );
}

export default function MarketInsights() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.insight-card', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-24" id="market-insights">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111B37] tracking-tight mb-10">
          Market Insights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Data Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dataCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="insight-card bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color: card.color }} />
                      <span className="text-xs font-medium text-gray-500">{card.title}</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        card.trend === 'up' ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'
                      }`}
                    >
                      {card.change} vs last 6 months
                    </span>
                  </div>
                  <div className="text-xl font-bold text-[#111B37] mb-3">{card.value}</div>
                  <MiniChart data={card.data} color={card.color} />
                </div>
              );
            })}
          </div>

          {/* Report CTA Card */}
          <div className="insight-card bg-[#111B37] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E3A8A]/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3B82F6]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <LineChart className="w-5 h-5 text-[#3B82F6]" />
                <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wide">Monthly Report</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Market Report – May 2025: Egypt Real Estate Market Overview
              </h3>
              <ul className="space-y-2 mb-8">
                {['Price trends & forecasts', 'Area performance ranking', 'Supply & demand insights', 'Investment opportunity analysis'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10">
              <Button className="bg-[#1E3A8A] hover:bg-[#172E6E] text-white w-full gap-2">
                <ArrowDownToLine className="w-4 h-4" />
                Download Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
