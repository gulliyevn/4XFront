// import { DemoToggle } from '../src/components/DemoToggle'
import { DemoToggle } from '@/components/DemoToggle'
import EducationCenter from '@/components/sections/EducationCenter'
import FAQSection from '@/components/sections/FAQ/FAQSection'
import InteractiveDemo from '@/components/sections/InteractiveDemo'
import LiveDataSection from '@/components/sections/LiveDataSection'
import MobileAppSection from '@/components/sections/MobileAppSection'
import NewsSection from '@/components/sections/NewsSection'
import PerformanceDashboard from '@/components/sections/PerformanceDashboard'
import SocialProofSection from '@/components/sections/SocialProofSection'
import TrustIndicators from '@/components/sections/TrustIndicators'
// import { TradingNotifications } from '@/components/TradingNotifications'
import { MarketTicket } from '@/components/sections/MarketTicket/MarketTicket'
import { getTranslations } from 'next-intl/server'
import { HeroSection } from '@/components/sections/HeroSection/HeroSection'
import { AiFeaturesSection } from '@/components/sections/AIFeaturesSection/AiFeaturesSection'
import { MarketsSection } from '@/components/sections/MarketsSection/MarketsSection'
import { CTASection } from '@/components/sections/CTASection'

export default async function HomePage() {
    const t = await getTranslations('main')

    return (
        <>
            {/* Market Ticker */}
            <MarketTicket
                translations={{
                    markets: t('marketTicket.markets'),
                    open: t('marketTicket.open'),
                    closed: t('marketTicket.closed'),
                }}
            />
            {/* Hero Section */}
            <HeroSection translations={t.raw('heroSections')} />
            {/* Demo Toggle Section */}
            <section className="demo-section py-16 demo-section-gradient relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tr from-indigo-400 to-cyan-400 rounded-full opacity-10 blur-3xl"></div>
                </div>
                <div className="container max-w-6xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            <span className="demo-text-shimmer">Experience Risk-Free Trading</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Try our complete trading platform with virtual funds. No risk, all features, real market data.
                        </p>
                    </div>
                    <DemoToggle />
                </div>
            </section>
            {/* NEW: Trust Indicators Section */}
            <TrustIndicators />
            {/* NEW: Live Data Section */}
            <LiveDataSection />
            {/* AI Features Section */}
            <AiFeaturesSection />
            {/* Interactive Demo */}
            <InteractiveDemo />
            {/* Markets Section */}
            <MarketsSection />
            {/* NEW: News Section */}
            <NewsSection />
            {/* NEW: Social Proof Section */}
            <SocialProofSection />
            {/* NEW: Performance Dashboard */}
            <PerformanceDashboard />
            {/* NEW: Mobile App Section */}
            <MobileAppSection />
            {/* NEW: Education Center */}
            <EducationCenter />
            {/* CTA Section */}
            <CTASection />
            {/* FAQ Section */}
            <FAQSection />
            {/* Demo Floating Button */}
            {/* <DemoFloatingButton /> */}
            {/* Trading Notifications */}
            {/* <TradingNotifications /> */}
        </>
    )
}
