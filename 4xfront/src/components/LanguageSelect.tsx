'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useLanguage, Language } from '@/hooks/useLanguage'
import Image from 'next/image'

const languages: { code: Language; imgSrc: string; labelKey: string }[] = [
    { code: 'en', imgSrc: '/assets/united-kingdom.png', labelKey: 'languages.en' },
    { code: 'tr', imgSrc: '/assets/turkey.png', labelKey: 'languages.tr' },
    { code: 'ru', imgSrc: '/assets/russia.png', labelKey: 'languages.ru' },
]

export const LanguageSwitcher = () => {
    const t = useTranslations('navigation')
    const { language, setLanguage } = useLanguage()
    const [open, setOpen] = useState(false)
    const currentLang = languages.find((l) => l.code === language) || languages[0]

    return (
        <div className="language-dropdown">
            <button className="nav-button language-btn" onClick={() => setOpen((v) => !v)}>
                <Image className="language-flag" src={currentLang.imgSrc} alt={currentLang.code} width={24} height={24} />{' '}
                <span className="language-code">{currentLang.code.toUpperCase()}</span>
            </button>
            {open && (
                <div className="language-dropdown-menu">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-item${language === lang.code ? ' active' : ''}`}
                            onClick={() => {
                                setLanguage(lang.code)
                                setOpen(false)
                            }}>
                            <Image className="language-flag" src={lang.imgSrc} alt={lang.code} width={24} height={24} />
                            <span className="language-name">{t(lang.labelKey)}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
