import { useTranslations } from 'next-intl'
import FAQList from './FAQList'
import FAQSidebar from './FAQSidebar'
import styles from './FAQSection.module.scss'

const FAQSection = () => {
    const t = useTranslations('faq')

    return (
        <section className={styles['faq-section']}>
            <div className="container">
                <div className={styles['faq-header']}>
                    <h2 className="faq-title">{t('header.title')}</h2>
                    <p className="faq-subtitle">{t('header.subtitle')}</p>
                </div>
                <div className={styles['faq-content']}>
                    <FAQList />
                    <FAQSidebar />
                </div>
            </div>
        </section>
    )
}

export default FAQSection
