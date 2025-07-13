import cls from './AiFeaturesSection.module.scss'
import { useTranslations } from 'next-intl'

export const AiFeaturesSection = () => {
    const t = useTranslations('main')
    const cards = t.raw('aiFeatures.cards') as Array<{
        badge: string
        title: string
        description: string
        highlights: string[]
        stats: string[]
    }>

    return (
        <section className={cls.aiFeaturesSection}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        {t.rich('aiFeatures.title', {
                            span: (chunks) => <span className="gradient-text">{chunks}</span>,
                        })}
                    </h2>
                    <p className="section-subtitle">{t('aiFeatures.subtitle')}</p>
                </div>

                <div className={cls.aiFeaturesGrid}>
                    {cards.map((card, idx) => (
                        <div className={cls.aiFeatureCard} key={card.title}>
                            <div className="feature-header">
                                <div className="feature-icon">
                                    {idx === 0 && '🔮'}
                                    {idx === 1 && '📊'}
                                    {idx === 2 && '🎯'}
                                </div>
                                <div className="feature-badge">{card.badge}</div>
                            </div>
                            <h3 className="feature-title">{card.title}</h3>
                            <p className="feature-description">{card.description}</p>
                            <div className="feature-highlights">
                                {card.highlights.map((highlight) => (
                                    <div className="highlight-item" key={highlight}>
                                        <span className="highlight-icon">✓</span>
                                        <span className="highlight-text">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="feature-stats">
                                {idx === 0 && (
                                    <>
                                        <div className="stat-item">
                                            <span className="stat-value">1M+</span>
                                            <span className="stat-label">{card.stats[0]}</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">50+</span>
                                            <span className="stat-label">{card.stats[1]}</span>
                                        </div>
                                    </>
                                )}
                                {idx === 1 && (
                                    <>
                                        <div className="stat-item">
                                            <span className="stat-value">1M+</span>
                                            <span className="stat-label">{card.stats[0]}</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">24/7</span>
                                            <span className="stat-label">{card.stats[1]}</span>
                                        </div>
                                    </>
                                )}
                                {idx === 2 && (
                                    <>
                                        <div className="stat-item">
                                            <span className="stat-value">87%</span>
                                            <span className="stat-label">{card.stats[0]}</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-value">50+</span>
                                            <span className="stat-label">{card.stats[1]}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
