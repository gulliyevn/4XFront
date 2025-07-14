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
// import { CTASection } from '@/components/sections/CTASection'

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
            <TrustIndicators />
            <LiveDataSection />
            <AiFeaturesSection />
            <InteractiveDemo />
            <MarketsSection />
            <NewsSection />
            <SocialProofSection />
            <PerformanceDashboard />
            <MobileAppSection />
            <EducationCenter />
            {/* <CTASection /> */}
            <FAQSection />
            {/* Trading Notifications */}
            {/* <TradingNotifications /> */}
        </>
    )
}
