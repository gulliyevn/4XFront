'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from '@/hooks/useTheme'

export const ThemeToggle = () => {
    const t = useTranslations('navigation')
    const { isDarkMode, toggleTheme } = useTheme()

    return (
        <button
            className="nav-button theme-toggle"
            onClick={toggleTheme}
            title={isDarkMode ? t('theme.toLight') : t('theme.toDark')}
            aria-label={isDarkMode ? t('theme.toLight') : t('theme.toDark')}>
            <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
        </button>
    )
}
