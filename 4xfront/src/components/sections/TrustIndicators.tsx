import { useTranslations } from 'next-intl'

type Badge = {
    icon: string
    title: string
    description: string
}
const TrustIndicators = () => {
    const t = useTranslations('main.trustIndicators')
    const trustBadges = t.raw('trustBadges') as Badge[]
    const certifications = t.raw('certifications') as Array<{
        name: string
        logo: string
    }>

    return (
        <section className="trust-indicators-section">
            <div className="container">
                <div className="trust-content">
                    <div className="trust-badges">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="trust-badge">
                                <div className="trust-icon">{badge.icon}</div>
                                <div className="trust-info">
                                    <h4 className="trust-title">{badge.title}</h4>
                                    <p className="trust-description">{badge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="certifications">
                        <h3 className="certifications-title">{t('certificationsTitle')}</h3>
                        <div className="certifications-grid">
                            {certifications.map((cert, index) => (
                                <div key={index} className="certification-item">
                                    <span className="cert-logo">{cert.logo}</span>
                                    <span className="cert-name">{cert.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustIndicators
