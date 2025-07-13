import cls from './HeroSection.module.scss'
import Link from 'next/link'

interface HeroSectionProps {
    className?: string
    translations: {
        badge: string
        title: string
        subtitle: string
        startAI: string
        learnTrading: string
        stats: {
            aiAccuracy: string
            users: string
            volume: string
            monitoring: string
        }
    }
}

export const HeroSection = ({ className = '', translations }: HeroSectionProps) => {
    return (
        <section className={`${cls['hero-section']} ${className}`}>
            <div className="container">
                <div className={cls['hero-content']}>
                    <div className={cls['hero-text']}>
                        <div className={cls['hero-badge']}>
                            <span className="badge-icon">🚀</span>
                            <span className="badge-text">{translations.badge}</span>
                        </div>

                        <h1 className={cls['hero-title']}>
                            {translations.title}
                            <br />
                            <span className={`gradient-text ${cls['hero-subtitle-text']}`}>{translations.subtitle}</span>
                        </h1>

                        <div className={cls['hero-buttons']}>
                            <Link
                                href="/ai-insights"
                                className="btn btn-primary btn-lg btn-enhanced hover-scale animate-slide-up">
                                <span className="btn-icon">🤖</span>
                                {translations.startAI}
                            </Link>
                            <Link
                                href="/education"
                                className="btn btn-secondary btn-lg btn-enhanced hover-scale animate-slide-up">
                                <span className="btn-icon">📚</span>
                                {translations.learnTrading}
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item stagger-item hover-lift">
                                <span className="stat-number animate-glow-pulse">94.7%</span>
                                <span className="stat-label">{translations.stats.aiAccuracy}</span>
                            </div>
                            <div className="stat-item stagger-item hover-lift">
                                <span className="stat-number animate-bounce-gentle">100K+</span>
                                <span className="stat-label">{translations.stats.users}</span>
                            </div>
                            <div className="stat-item stagger-item hover-lift">
                                <span className="stat-number animate-float">$2.5B+</span>
                                <span className="stat-label">{translations.stats.volume}</span>
                            </div>
                            <div className="stat-item stagger-item hover-lift">
                                <span className="stat-number animate-wiggle">24/7</span>
                                <span className="stat-label">{translations.stats.monitoring}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
