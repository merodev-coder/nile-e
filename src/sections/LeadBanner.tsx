import { Home, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LeadBanner() {
  return (
    <section className="bg-[#1E3A8A] py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Do you have a property, land, or store for sale or rent?
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                List it with NileEstate and reach thousands of serious buyers and tenants actively searching for properties like yours.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
            <Button className="bg-[#10B981] hover:bg-[#059669] text-white gap-2 font-semibold">
              List Your Property
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
