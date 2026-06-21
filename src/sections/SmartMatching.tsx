import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  noiseOffsetX: number;
  noiseOffsetY: number;
}

export default function SmartMatching() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0 };
    let mouseActive = false;
    let animId = 0;

    function noise(x: number, y: number): number {
      const sin = Math.sin;
      const xx = x * 0.05;
      const yy = y * 0.05;
      return (
        sin(xx + yy) * 0.5 +
        sin(xx * 0.7 - yy * 0.9 + 2.3) * 0.25 +
        sin(xx * 1.3 + yy * 1.1 - 1.7) * 0.15 +
        0.5
      );
    }

    function resize() {
      w = container!.offsetWidth;
      h = container!.offsetHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.scale(dpr, dpr);
      initParticles();
    }

    function initParticles() {
      const area = w * h;
      const density = window.innerWidth > 1024 ? 0.0002 : window.innerWidth > 768 ? 0.00015 : 0.0001;
      const count = Math.floor(area * density);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 1,
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
        });
      }
    }

    function animate(time: number) {
      animId = requestAnimationFrame(animate);
      if (prefersReduced) return;

      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = 'rgba(30, 58, 138, 0.6)';
      ctx!.strokeStyle = 'rgba(255, 255, 255, 0.15)';

      const t = time * 0.001;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouseActive) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 150 && mDist > 0) {
            const force = (150 - mDist) / 150;
            p.vx += (mdx / mDist) * force * 0.02;
            p.vy += (mdy / mDist) * force * 0.02;
          }
        }

        const noiseX = noise(p.noiseOffsetX + t * 0.5, 0);
        const noiseY = noise(0, p.noiseOffsetY + t * 0.5);
        const angleX = (noiseX - 0.5) * Math.PI * 2;
        const angleY = (noiseY - 0.5) * Math.PI * 2;

        p.vx += Math.cos(angleX) * 0.05;
        p.vy += Math.sin(angleY) * 0.05;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        else if (p.y > h) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(30, 58, 138, 0.6)';
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = 1 - dist / 100;
            ctx!.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.15})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      mouseActive = false;
    }

    const onResize = () => resize();
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouseActive = true;
    };
    const onMouseLeave = () => {
      mouseActive = false;
    };

    window.addEventListener('resize', onResize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    resize();
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#111B37] py-24 lg:py-32 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            AI-Powered Smart Matching
          </h2>
          <p className="text-base text-white/70 mb-8 leading-relaxed">
            Our engine analyzes thousands of data points to connect your property with the perfect buyer in real-time. Experience the future of property matching with machine learning algorithms that understand your needs.
          </p>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent rounded-md px-6"
          >
            Explore the Algorithm
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
