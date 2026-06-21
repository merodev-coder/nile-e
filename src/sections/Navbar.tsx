import { useState, useEffect } from 'react';
import { Heart, Menu, X, ChevronDown, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  'Home', 'Properties', 'Requests', 'Projects',
  'Areas', 'Market Insights', 'Services', 'About', 'Contact'
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${scrolled ? 'bg-[#1E3A8A]' : 'bg-white/20'}`}>
              <Building2 className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight leading-none ${scrolled ? 'text-[#111B37]' : 'text-white'}`}>
                NileEstate
              </span>
              <span className={`text-[10px] font-medium leading-none ${scrolled ? 'text-[#111B37]/60' : 'text-white/70'}`}>
                Real Estate, Intelligent Future
              </span>
            </div>
          </div>

          {/* Center Nav Links - Desktop */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? 'text-[#111B37]/70 hover:text-[#1E3A8A] hover:bg-[#F4F6F8]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-3">
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${scrolled ? 'text-[#111B37]/70 hover:text-[#111B37]' : 'text-white/80 hover:text-white'}`}>
              EN <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${scrolled ? 'text-[#111B37]/70 hover:text-[#111B37]' : 'text-white/80 hover:text-white'}`}>
              EGP <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className={`p-2 rounded-md transition-colors ${scrolled ? 'text-[#111B37]/70 hover:text-[#111B37] hover:bg-[#F4F6F8]' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
              <Heart className="w-5 h-5" />
            </button>
            <a
              href="#signin"
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-[#111B37]/70 hover:text-[#111B37]' : 'text-white/80 hover:text-white'}`}
            >
              Sign In
            </a>
            <Button className="bg-[#1E3A8A] hover:bg-[#172E6E] text-white text-sm font-semibold px-5 py-2 rounded-md h-auto">
              Add Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`xl:hidden p-2 rounded-md ${scrolled ? 'text-[#111B37]' : 'text-white'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg rounded-b-xl mb-4">
            <div className="py-3 px-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-[#111B37]/80 hover:text-[#1E3A8A] hover:bg-[#F4F6F8] rounded-md"
                >
                  {link}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2 px-4">
                <div className="flex items-center gap-4 text-sm text-[#111B37]/70">
                  <span>EN</span>
                  <span>EGP</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 text-sm">
                    Sign In
                  </Button>
                  <Button className="flex-1 bg-[#1E3A8A] hover:bg-[#172E6E] text-sm">
                    Add Property
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
