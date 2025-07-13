'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/stores/authStore'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSelect'
import { ThemeToggle } from './ThemeToggle'

const Navigation = () => {
    const { user, isAuthenticated, logout } = useAuthStore()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const t = useTranslations('navigation')

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-toggle')) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

    const toggleMenu = () => setIsMenuOpen((v) => !v)
    const handleDropdownEnter = (dropdown: string) => setActiveDropdown(dropdown)
    const handleDropdownLeave = () => setActiveDropdown(null)

    return (
        <>
            <nav className={`navigation-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    {/* Logo */}
                    <Link href="/" className="nav-logo">
                        <div className="logo-content">
                            <Image src="/favicon.ico" alt="4X Logo" width={32} height={32} className="logo-icon" />
                            <div className="logo-text">
                                <span className="logo-title">{t('logo.title')}</span>
                                <span className="nav-logo-subtitle">{t('logo.subtitle')}</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav-menu">
                        {/* AI Intelligence */}
                        <li
                            className="nav-item"
                            onMouseEnter={() => handleDropdownEnter('ai')}
                            onMouseLeave={handleDropdownLeave}>
                            <button className="nav-link">
                                <span className="nav-link-icon">🤖</span>
                                {t('menu.ai.label')}
                            </button>
                            <div className={`dropdown-menu ${activeDropdown === 'ai' ? 'show' : ''}`}>
                                <Link href="/ai-insights" className="dropdown-item">
                                    <span className="dropdown-icon">🧠</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.ai.dashboard')}</span>
                                        <span className="dropdown-desc">{t('menu.ai.dashboardDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/ai-insights/predictions" className="dropdown-item">
                                    <span className="dropdown-icon">🔮</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.ai.predictions')}</span>
                                        <span className="dropdown-desc">{t('menu.ai.predictionsDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/ai-insights/sentiment-analysis" className="dropdown-item">
                                    <span className="dropdown-icon">📊</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.ai.sentiment')}</span>
                                        <span className="dropdown-desc">{t('menu.ai.sentimentDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/ai-insights/pattern-recognition" className="dropdown-item">
                                    <span className="dropdown-icon">🎯</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.ai.patterns')}</span>
                                        <span className="dropdown-desc">{t('menu.ai.patternsDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/ai-insights/risk-assessment" className="dropdown-item">
                                    <span className="dropdown-icon">⚠️</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.ai.risk')}</span>
                                        <span className="dropdown-desc">{t('menu.ai.riskDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/ai-insights/trading-signals" className="dropdown-item">
                                    <span className="dropdown-icon">📡</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.ai.signals')}</span>
                                        <span className="dropdown-desc">{t('menu.ai.signalsDesc')}</span>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        {/* Markets */}
                        <li
                            className="nav-item"
                            onMouseEnter={() => handleDropdownEnter('markets')}
                            onMouseLeave={handleDropdownLeave}>
                            <button className="nav-link">
                                <span className="nav-link-icon">📊</span>
                                {t('menu.markets.label')}
                            </button>
                            <div className={`dropdown-menu ${activeDropdown === 'markets' ? 'show' : ''}`}>
                                <Link href="/markets/stocks" className="dropdown-item">
                                    <span className="dropdown-icon">📈</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.markets.stocks')}</span>
                                        <span className="dropdown-desc">{t('menu.markets.stocksDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/markets/cryptocurrency" className="dropdown-item">
                                    <span className="dropdown-icon">₿</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.markets.crypto')}</span>
                                        <span className="dropdown-desc">{t('menu.markets.cryptoDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/markets/forex" className="dropdown-item">
                                    <span className="dropdown-icon">💱</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.markets.forex')}</span>
                                        <span className="dropdown-desc">{t('menu.markets.forexDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/markets/commodities" className="dropdown-item">
                                    <span className="dropdown-icon">🥇</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.markets.commodities')}</span>
                                        <span className="dropdown-desc">{t('menu.markets.commoditiesDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/markets/indices" className="dropdown-item">
                                    <span className="dropdown-icon">📊</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.markets.indices')}</span>
                                        <span className="dropdown-desc">{t('menu.markets.indicesDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/markets/options" className="dropdown-item">
                                    <span className="dropdown-icon">📋</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.markets.options')}</span>
                                        <span className="dropdown-desc">{t('menu.markets.optionsDesc')}</span>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        {/* Charts & Tools */}
                        <li
                            className="nav-item"
                            onMouseEnter={() => handleDropdownEnter('charts')}
                            onMouseLeave={handleDropdownLeave}>
                            <button className="nav-link">
                                <span className="nav-link-icon">📈</span>
                                {t('menu.charts.label')}
                            </button>
                            <div className={`dropdown-menu ${activeDropdown === 'charts' ? 'show' : ''}`}>
                                <Link href="/charts" className="dropdown-item">
                                    <span className="dropdown-icon">📊</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.charts.charts')}</span>
                                        <span className="dropdown-desc">{t('menu.charts.chartsDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/tools/calculators" className="dropdown-item">
                                    <span className="dropdown-icon">🧮</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.charts.calculators')}</span>
                                        <span className="dropdown-desc">{t('menu.charts.calculatorsDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/tools/screeners" className="dropdown-item">
                                    <span className="dropdown-icon">🔍</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.charts.screeners')}</span>
                                        <span className="dropdown-desc">{t('menu.charts.screenersDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/tools/alerts" className="dropdown-item">
                                    <span className="dropdown-icon">🔔</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.charts.alerts')}</span>
                                        <span className="dropdown-desc">{t('menu.charts.alertsDesc')}</span>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        {/* News & Analysis */}
                        <li
                            className="nav-item"
                            onMouseEnter={() => handleDropdownEnter('news')}
                            onMouseLeave={handleDropdownLeave}>
                            <button className="nav-link">
                                <span className="nav-link-icon">📰</span>
                                {t('menu.news.label')}
                            </button>
                            <div className={`dropdown-menu ${activeDropdown === 'news' ? 'show' : ''}`}>
                                <Link href="/news" className="dropdown-item">
                                    <span className="dropdown-icon">📰</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.news.news')}</span>
                                        <span className="dropdown-desc">{t('menu.news.newsDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/analysis" className="dropdown-item">
                                    <span className="dropdown-icon">📊</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.news.analysis')}</span>
                                        <span className="dropdown-desc">{t('menu.news.analysisDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/calendar" className="dropdown-item">
                                    <span className="dropdown-icon">📅</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.news.calendar')}</span>
                                        <span className="dropdown-desc">{t('menu.news.calendarDesc')}</span>
                                    </div>
                                </Link>
                            </div>
                        </li>

                        {/* Education */}
                        <li
                            className="nav-item"
                            onMouseEnter={() => handleDropdownEnter('education')}
                            onMouseLeave={handleDropdownLeave}>
                            <button className="nav-link">
                                <span className="nav-link-icon">📚</span>
                                {t('menu.education.label')}
                            </button>
                            <div className={`dropdown-menu ${activeDropdown === 'education' ? 'show' : ''}`}>
                                <Link href="/education" className="dropdown-item">
                                    <span className="dropdown-icon">🎓</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.education.academy')}</span>
                                        <span className="dropdown-desc">{t('menu.education.academyDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/education/ai-trading" className="dropdown-item">
                                    <span className="dropdown-icon">🤖</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.education.aiCourse')}</span>
                                        <span className="dropdown-desc">{t('menu.education.aiCourseDesc')}</span>
                                    </div>
                                </Link>
                                <Link href="/education/webinars" className="dropdown-item">
                                    <span className="dropdown-icon">🎥</span>
                                    <div>
                                        <span className="dropdown-title">{t('menu.education.webinars')}</span>
                                        <span className="dropdown-desc">{t('menu.education.webinarsDesc')}</span>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <div className="nav-actions">
                        <LanguageSwitcher />
                        <ThemeToggle />

                        {/* Login/Profile Button */}
                        {isAuthenticated ? (
                            <div
                                className="nav-item"
                                onMouseEnter={() => handleDropdownEnter('profile')}
                                onMouseLeave={handleDropdownLeave}>
                                <button className="nav-button">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">
                                                {user?.firstName?.charAt(0) || user?.name?.charAt(0) || 'U'}
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium">{user?.firstName || user?.name || 'User'}</span>
                                    </div>
                                </button>
                                <div className={`dropdown-menu ${activeDropdown === 'profile' ? 'show' : ''}`}>
                                    <Link href="/profile" className="dropdown-item">
                                        <span className="dropdown-icon">👤</span>
                                        <div>
                                            <span className="dropdown-title">{t('profile.profile')}</span>
                                            <span className="dropdown-desc">{t('profile.profileDesc')}</span>
                                        </div>
                                    </Link>
                                    <Link href="/dashboard" className="dropdown-item">
                                        <span className="dropdown-icon">📊</span>
                                        <div>
                                            <span className="dropdown-title">{t('profile.dashboard')}</span>
                                            <span className="dropdown-desc">{t('profile.dashboardDesc')}</span>
                                        </div>
                                    </Link>
                                    <Link href="/portfolio" className="dropdown-item">
                                        <span className="dropdown-icon">💼</span>
                                        <div>
                                            <span className="dropdown-title">{t('profile.portfolio')}</span>
                                            <span className="dropdown-desc">{t('profile.portfolioDesc')}</span>
                                        </div>
                                    </Link>
                                    <Link href="/trading" className="dropdown-item">
                                        <span className="dropdown-icon">📊</span>
                                        <div>
                                            <span className="dropdown-title">{t('profile.trading')}</span>
                                            <span className="dropdown-desc">{t('profile.tradingDesc')}</span>
                                        </div>
                                    </Link>
                                    <Link href="/wallet" className="dropdown-item">
                                        <span className="dropdown-icon">💰</span>
                                        <div>
                                            <span className="dropdown-title">{t('profile.wallet')}</span>
                                            <span className="dropdown-desc">{t('profile.walletDesc')}</span>
                                        </div>
                                    </Link>
                                    <button onClick={logout} className="dropdown-item">
                                        <span className="dropdown-icon">🚪</span>
                                        <div>
                                            <span className="dropdown-title">{t('profile.signOut')}</span>
                                            <span className="dropdown-desc">{t('profile.signOutDesc')}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link href="/login" className="btn btn-primary btn-sm">
                                {t('login')}
                            </Link>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle mobile menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-list">
                    <div className="mobile-menu-item">
                        <Link href="/ai-insights" className="mobile-menu-link" onClick={toggleMenu}>
                            <span className="mobile-menu-icon">🤖</span>
                            {t('mobile.ai')}
                        </Link>
                    </div>
                    <div className="mobile-menu-item">
                        <Link href="/markets" className="mobile-menu-link" onClick={toggleMenu}>
                            <span className="mobile-menu-icon">📊</span>
                            {t('mobile.markets')}
                        </Link>
                    </div>
                    <div className="mobile-menu-item">
                        <Link href="/charts" className="mobile-menu-link" onClick={toggleMenu}>
                            <span className="mobile-menu-icon">📈</span>
                            {t('mobile.charts')}
                        </Link>
                    </div>
                    <div className="mobile-menu-item">
                        <Link href="/news" className="mobile-menu-link" onClick={toggleMenu}>
                            <span className="mobile-menu-icon">📰</span>
                            {t('mobile.news')}
                        </Link>
                    </div>
                    <div className="mobile-menu-item">
                        <Link href="/education" className="mobile-menu-link" onClick={toggleMenu}>
                            <span className="mobile-menu-icon">📚</span>
                            {t('mobile.education')}
                        </Link>
                    </div>
                    {isAuthenticated ? (
                        <>
                            <div className="mobile-menu-item">
                                <Link href="/profile" className="mobile-menu-link" onClick={toggleMenu}>
                                    <span className="mobile-menu-icon">👤</span>
                                    {t('profile.profile')}
                                </Link>
                            </div>
                            <div className="mobile-menu-item">
                                <Link href="/dashboard" className="mobile-menu-link" onClick={toggleMenu}>
                                    <span className="mobile-menu-icon">📊</span>
                                    {t('profile.dashboard')}
                                </Link>
                            </div>
                            <div className="mobile-menu-item">
                                <Link href="/trading" className="mobile-menu-link" onClick={toggleMenu}>
                                    <span className="mobile-menu-icon">💹</span>
                                    Trading
                                </Link>
                            </div>
                            <div className="mobile-menu-item">
                                <Link href="/wallet" className="mobile-menu-link" onClick={toggleMenu}>
                                    <span className="mobile-menu-icon">💰</span>
                                    {t('profile.wallet')}
                                </Link>
                            </div>
                            <div className="mobile-menu-item">
                                <button
                                    onClick={() => {
                                        logout()
                                        toggleMenu()
                                    }}
                                    className="mobile-menu-link w-full text-left">
                                    <span className="mobile-menu-icon">🚪</span>
                                    {t('signOut')}
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="mobile-menu-item">
                            <Link href="/auth/login" className="mobile-menu-link" onClick={toggleMenu}>
                                <span className="mobile-menu-icon">🔐</span>
                                {t('login')}
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Backdrop */}
            <div className={`mobile-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        </>
    )
}

export default Navigation
