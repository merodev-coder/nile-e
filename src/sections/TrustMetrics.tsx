import { Building2, Users, MapPin, Handshake, Star, Award } from 'lucide-react';

const metrics = [
  { icon: Building2, value: '18K+', label: 'Active Properties' },
  { icon: Users, value: '7K+', label: 'Verified Requests' },
  { icon: Award, value: '2,500+', label: 'Developers' },
  { icon: MapPin, value: '25+', label: 'Governorates' },
  { icon: Handshake, value: '120K+', label: 'Happy Clients' },
];

export default function TrustMetrics() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-[#1E3A8A]/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#111B37]">{metric.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{metric.label}</div>
                </div>
              </div>
            );
          })}

          {/* Trustpilot */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="flex items-center gap-1.5 bg-[#F4F6F8] rounded-lg px-4 py-2.5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#10B981] text-[#10B981]" />
                ))}
              </div>
              <div className="flex flex-col ml-1">
                <span className="text-xs font-bold text-[#111B37]">Excellent</span>
                <span className="text-[10px] text-gray-500">4.8/5 on Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
