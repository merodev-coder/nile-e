import { useEffect, useRef } from 'react';
import { Search, Link2, Handshake, FileCheck, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  { icon: Search, title: 'Tell Us What You Need', description: 'Share your requirements with our smart form' },
  { icon: Link2, title: 'We Find the Best Matches', description: 'AI scans thousands of verified listings' },
  { icon: Handshake, title: 'Connect & Visit with Confidence', description: 'Schedule viewings through our platform' },
  { icon: FileCheck, title: 'Close the Deal Smarter', description: 'Expert support from negotiation to closing' },
];

export default function HowWeHelp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ASCII Wave Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    let animationId = 0;
    let cols = 0;
    let rows = 0;
    const charSize = 16;
    const chars = '-+NE·-+';
    let mouseX = -1;
    let mouseY = -1;

    function colorForHeight(h: number): string {
      if (h > 0.7) return '#FFFFFF';
      if (h > 0.4) return '#3B82F6';
      if (h > 0.2) return '#1E3A8A';
      return '#111B37';
    }

    function resize() {
      width = container!.offsetWidth;
      height = container!.offsetHeight;
      canvas!.width = width;
      canvas!.height = height;
      cols = Math.floor(width / charSize);
      rows = Math.floor(height / charSize);
    }

    function wave(x: number, y: number, t: number, mx: number, my: number): number {
      const d1 = Math.sin(x * 0.05 + t) * Math.cos(y * 0.05 + t);
      const d2 = Math.sin(x * 0.1 - t) * Math.cos(y * 0.12 + t);
      let d3 = 0;
      if (mx >= 0) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy) + 1;
        d3 = Math.sin(dist * 0.2 - t * 2) * (10 / dist);
      }
      return (d1 + d2 + d3) / 3;
    }

    function render() {
      time += 0.02;
      ctx!.font = `${charSize}px monospace`;
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'middle';

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const posX = x * charSize + charSize / 2;
          const posY = y * charSize + charSize / 2;
          const h = wave(x, y, time, mouseX, mouseY);
          ctx!.fillStyle = colorForHeight(h);
          const charIndex = Math.floor(Math.abs(h) * chars.length) % chars.length;
          ctx!.fillText(chars[charIndex], posX, posY);
        }
      }

      animationId = requestAnimationFrame(render);
    }

    const onResize = () => resize();
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = Math.floor((e.clientX - rect.left) / charSize);
      mouseY = Math.floor((e.clientY - rect.top) / charSize);
    };
    const onMouseLeave = () => {
      mouseX = -1;
      mouseY = -1;
    };

    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    resize();
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#111B37] py-20 lg:py-24 overflow-hidden" id="services">
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Process Steps */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
              How We Help You
            </h2>
            <div className="space-y-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1E3A8A] shrink-0">
                      <span className="text-xs font-bold text-white">0{i + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-[#3B82F6]" />
                        <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-xs text-white/50">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - AI Assistant Promo */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#1E3A8A]/40 to-[#111B37] backdrop-blur-xl rounded-2xl border border-white/10 p-6 lg:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#3B82F6]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1E3A8A]/30 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src="/images/ai-mascot.png"
                    alt="NileEstate AI Assistant"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wide">AI Powered</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">NileEstate AI Assistant</h3>
                    <p className="text-xs text-white/50">Your smart real estate companion</p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {[
                    'Ask questions in natural language',
                    'Compare properties side by side',
                    'Get market insights instantly',
                    'Find your perfect match with AI',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white w-full gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat with AI Assistant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
