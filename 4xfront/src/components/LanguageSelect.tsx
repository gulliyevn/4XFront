'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useLanguage, Language } from '@/hooks/useLanguage' // путь скорректируйте по проекту

const languages: { code: Language; flag: string; labelKey: string }[] = [
    { code: 'en', flag: '🇺🇸', labelKey: 'languages.en' },
    { code: 'tr', flag: '🇹🇷', labelKey: 'languages.tr' },
    { code: 'ru', flag: '🇷🇺', labelKey: 'languages.ru' },
]

export const LanguageSwitcher = () => {
    const t = useTranslations('navigation')
    const { language, setLanguage } = useLanguage()
    const [open, setOpen] = useState(false)
    const currentLang = languages.find((l) => l.code === language) || languages[0]

    return (
        <div className="language-dropdown">
            <button className="nav-button language-btn" onClick={() => setOpen((v) => !v)}>
                <span className="language-flag">{currentLang.flag}</span>
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
                            <span className="language-flag">{lang.flag}</span>
                            <span className="language-name">{t(lang.labelKey)}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
