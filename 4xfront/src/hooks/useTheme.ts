import { useEffect, useState, useCallback } from 'react'

const THEME_KEY = '4x-theme'
const MANUAL_KEY = '4x-theme-manual'

export function useTheme() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false
        const saved = localStorage.getItem(THEME_KEY)
        if (saved) return saved === 'dark'
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark
    })

    const applyTheme = useCallback((dark: boolean) => {
        const root = document.documentElement
        root.setAttribute('data-theme', dark ? 'dark' : 'light')
        root.classList.toggle('dark', dark)
        root.classList.toggle('light', !dark)
        localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
    }, [])

    useEffect(() => {
        applyTheme(isDark)
    }, [isDark, applyTheme])

    useEffect(() => {
        if (typeof window === 'undefined') return
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        const onSystemTheme = (e: MediaQueryListEvent) => {
            const lastManual = +(localStorage.getItem(MANUAL_KEY) || 0)
            const now = Date.now()
            if (!lastManual || now - lastManual > 86400000) {
                setIsDark(e.matches)
            }
        }
        mq.addEventListener('change', onSystemTheme)
        return () => mq.removeEventListener('change', onSystemTheme)
    }, [])

    const toggleTheme = useCallback(() => {
        setIsDark((prev) => {
            const next = !prev
            localStorage.setItem(MANUAL_KEY, Date.now().toString())
            return next
        })
    }, [])

    return { isDarkMode: isDark, toggleTheme }
}
