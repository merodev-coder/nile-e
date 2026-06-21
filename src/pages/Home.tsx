import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import TrustMetrics from '../sections/TrustMetrics'
import WhyNileEstate from '../sections/WhyNileEstate'
import SmartMatching from '../sections/SmartMatching'
import BuyerRequests from '../sections/BuyerRequests'
import FeaturedProperties from '../sections/FeaturedProperties'
import MarketInsights from '../sections/MarketInsights'
import HowWeHelp from '../sections/HowWeHelp'
import LeadBanner from '../sections/LeadBanner'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustMetrics />
      <WhyNileEstate />
      <SmartMatching />
      <BuyerRequests />
      <FeaturedProperties />
      <MarketInsights />
      <HowWeHelp />
      <LeadBanner />
      <Footer />
    </div>
  )
}
