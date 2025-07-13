'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from './FAQSection.module.scss'

const FAQList = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)
    const t = useTranslations('faq')
    const faqs = t.raw('faqs')

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id)
    }

    return (
        <div className={styles['faq-list']}>
            {faqs.map((faq: { id: number; question: string; answer: string }) => (
                <div key={faq.id} className={`${styles['faq-item']} ${openFAQ === faq.id ? styles.open : ''}`}>
                    <button
                        className={styles['faq-question']}
                        onClick={() => toggleFAQ(faq.id)}
                        aria-expanded={openFAQ === faq.id}>
                        <span className={styles['question-text']}>{faq.question}</span>
                        <span className={styles['question-icon']}>{openFAQ === faq.id ? '−' : '+'}</span>
                    </button>
                    <div className={`${styles['faq-answer']}${openFAQ === faq.id ? ' ' + styles.open : ''}`}>
                        <div className={styles['answer-content']}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FAQList
