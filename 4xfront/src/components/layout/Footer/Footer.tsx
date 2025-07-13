import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const Footer = () => {
    const t = useTranslations('footer')
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">{t('brand')}</h3>
                        <p className="footer-description">{t('description')}</p>
                        <div className="footer-social">
                            <a href="#" className="social-link" title={t('social.email')}>
                                📧
                            </a>
                            <a href="#" className="social-link" title={t('social.phone')}>
                                📱
                            </a>
                            <a href="#" className="social-link" title={t('social.twitter')}>
                                🐦
                            </a>
                            <a href="#" className="social-link" title={t('social.linkedin')}>
                                💼
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-title">{t('platform.title')}</h4>
                        <ul className="footer-links">
                            <li>
                                <Link href="/ai-insights">{t('platform.ai')}</Link>
                            </li>
                            <li>
                                <Link href="/markets">{t('platform.markets')}</Link>
                            </li>
                            <li>
                                <Link href="/charts">{t('platform.charts')}</Link>
                            </li>
                            <li>
                                <Link href="/news">{t('platform.news')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-title">{t('education.title')}</h4>
                        <ul className="footer-links">
                            <li>
                                <Link href="/education">{t('education.academy')}</Link>
                            </li>
                            <li>
                                <Link href="/education/webinars">{t('education.webinars')}</Link>
                            </li>
                            <li>
                                <Link href="/education/ai-trading">{t('education.aiCourse')}</Link>
                            </li>
                            <li>
                                <Link href="/education/strategies">{t('education.strategies')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-title">{t('company.title')}</h4>
                        <ul className="footer-links">
                            <li>
                                <Link href="/about">{t('company.about')}</Link>
                            </li>
                            <li>
                                <Link href="/contact">{t('company.contact')}</Link>
                            </li>
                            <li>
                                <Link href="/careers">{t('company.careers')}</Link>
                            </li>
                            <li>
                                <Link href="/press">{t('company.press')}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{t('copyright')}</p>
                </div>
            </div>
        </footer>
    )
}
