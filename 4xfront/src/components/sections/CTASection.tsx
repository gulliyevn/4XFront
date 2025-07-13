import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const CTASection = () => {
    const t = useTranslations('main.ctaSection')

    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">{t('title')}</h2>
                    <p className="cta-subtitle">{t('subtitle')}</p>
                    <div className="cta-buttons">
                        <Link href="/ai-insights" className="btn btn-primary btn-lg">
                            <span className="btn-icon">🚀</span>
                            {t('startTrial')}
                        </Link>
                        <Link href="/education" className="btn btn-ghost btn-lg">
                            <span className="btn-icon">📞</span>
                            {t('contactSales')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
