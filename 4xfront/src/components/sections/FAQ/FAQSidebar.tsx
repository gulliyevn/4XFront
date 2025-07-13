import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './FAQSection.module.scss'

const FAQSidebar = () => {
    const t = useTranslations('faq.sidebar')

    return (
        <div className={styles['faq-sidebar']}>
            <div className={styles['faq-contact-card']}>
                <div className={styles['contact-header']}>
                    <span className={styles['contact-icon']}>💬</span>
                    <h3 className={styles['contact-title']}>{t('contact.title')}</h3>
                </div>
                <p className={styles['contact-description']}>{t('contact.description')}</p>
                <div className={styles['contact-actions']}>
                    <Link href="/contact" className={`${styles['contact-btn']} ${styles['primary']}`}>
                        <span className={styles['btn-icon']}>📞</span>
                        {t('contact.supportBtn')}
                    </Link>
                    <Link href="/demo" className={`${styles['contact-btn']} ${styles['secondary']}`}>
                        <span className={styles['btn-icon']}>🎥</span>
                        {t('contact.demoBtn')}
                    </Link>
                </div>
            </div>
            <div className={styles['faq-resources-card']}>
                <h3 className={styles['resources-title']}>{t('resources.title')}</h3>
                <div className={styles['resources-list']}>
                    <Link href="/education" className={styles['resource-link']}>
                        <span className={styles['resource-icon']}>📚</span>
                        <span className={styles['resource-text']}>{t('resources.academy')}</span>
                    </Link>
                    <Link href="/documentation" className={styles['resource-link']}>
                        <span className={styles['resource-icon']}>📖</span>
                        <span className={styles['resource-text']}>{t('resources.api')}</span>
                    </Link>
                    <Link href="/tutorials" className={styles['resource-link']}>
                        <span className={styles['resource-icon']}>🎬</span>
                        <span className={styles['resource-text']}>{t('resources.tutorials')}</span>
                    </Link>
                    <Link href="/community" className={styles['resource-link']}>
                        <span className={styles['resource-icon']}>👥</span>
                        <span className={styles['resource-text']}>{t('resources.community')}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FAQSidebar
