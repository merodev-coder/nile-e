import { Building2, Facebook, Instagram, Linkedin, Youtube, Twitter, ChevronDown } from 'lucide-react';

const footerColumns = [
  {
    title: 'Explore',
    links: ['Properties', 'Requests', 'Projects', 'Areas', 'Market Insights'],
  },
  {
    title: 'Services',
    links: ['Real Estate Advisory', 'Property Management', 'Valuation Services', 'Investment Opportunities', 'Legal Support'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'News & Press', 'Contact Us'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'FAQs', 'Terms & Conditions', 'Privacy Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111B37] pt-16 pb-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white leading-none">NileEstate</span>
                <p className="text-[10px] text-white/50">Real Estate, Intelligent Future</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Egypt's premier smart real estate platform connecting buyers, sellers, and investors with intelligent technology.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#1E3A8A] transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get the App */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get the App</h4>
            <div className="flex flex-col gap-2 mb-4">
              <a href="#" className="block bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                <span className="text-[10px] text-white/50 block">Download on the</span>
                <span className="text-xs font-semibold text-white">App Store</span>
              </a>
              <a href="#" className="block bg-white/5 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                <span className="text-[10px] text-white/50 block">Get it on</span>
                <span className="text-xs font-semibold text-white">Google Play</span>
              </a>
            </div>
            <div className="w-20 h-20 rounded-lg bg-white p-1.5">
              <div className="w-full h-full bg-[#111B37] rounded flex items-center justify-center">
                <div className="grid grid-cols-5 gap-px">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-white/80 rounded-sm" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 NileEstate. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with ❤️ in Egypt
          </p>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-md bg-white/5">
              EN <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-1 text-xs text-white/50 hover:text-white px-3 py-1.5 rounded-md bg-white/5">
              EGP <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
