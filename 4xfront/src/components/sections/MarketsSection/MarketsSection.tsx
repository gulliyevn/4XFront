import Link from 'next/link'
import { useTranslations } from 'next-intl'
import cls from './MarketSection.module.scss'

export const MarketsSection = () => {
    const t = useTranslations('main.marketsSection')
    const cards = t.raw('cards') as Array<{
        badge: string
        title: string
        description: string
        stats: string[]
    }>

    const hrefs = ['/markets/stocks', '/markets/cryptocurrency', '/markets/forex', '/markets/commodities']
    const icons = ['📈', '₿', '💱', '🥇']
    const statValues = [
        ['50+', '10,000+'],
        ['5,000+', '500+'],
        ['100+', '20+'],
        ['50+', '200+'],
    ]

    return (
        <section className="markets-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t('title')}</h2>
                    <p className="section-subtitle">{t('subtitle')}</p>
                </div>

                <div className={cls.marketsGrid}>
                    {cards.map((card, idx) => (
                        <Link href={hrefs[idx]} className={cls.marketCard} key={card.title}>
                            <div className="market-header">
                                <div className="market-icon">{icons[idx]}</div>
                                <div className="market-badge">{card.badge}</div>
                            </div>
                            <h3 className={cls.marketTitle}>{card.title}</h3>
                            <p className={cls.marketDescription}>{card.description}</p>
                            <div className="market-stats">
                                <div className="market-stat">
                                    <span className="stat-label">{card.stats[0]}</span>
                                    <span className="stat-value">{statValues[idx][0]}</span>
                                </div>
                                <div className="market-stat">
                                    <span className="stat-label">{card.stats[1]}</span>
                                    <span className="stat-value">{statValues[idx][1]}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
