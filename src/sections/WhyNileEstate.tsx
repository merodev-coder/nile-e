import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Brain, Globe, MessageSquare, Lock, Bot, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified Data',
    description: 'Every listing and request is verified for accuracy by our expert team.',
  },
  {
    icon: Brain,
    title: 'Smart Matching',
    description: 'AI matches your needs with the best opportunities in real-time.',
  },
  {
    icon: Globe,
    title: 'Global Platform Local Expertise',
    description: 'International standards with in-depth local market knowledge.',
  },
  {
    icon: MessageSquare,
    title: 'Real Estate Advisory',
    description: 'Expert guidance for smarter decisions at every step.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your data is protected with enterprise-grade security.',
  },
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Ask, explore, compare, and decide with our intelligent assistant.',
  },
];

export default function WhyNileEstate() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F4F6F8] py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111B37] tracking-tight">
              Why NileEstate?
            </h2>
            <p className="text-sm text-gray-500 mt-1">The future of real estate intelligence</p>
          </div>
          <a href="#services" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:text-[#172E6E] transition-colors">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg border border-[#1E3A8A]/20 flex items-center justify-center mb-4 group-hover:bg-[#1E3A8A] group-hover:border-[#1E3A8A] transition-colors">
                  <Icon className="w-5 h-5 text-[#1E3A8A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-[#111B37] mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
