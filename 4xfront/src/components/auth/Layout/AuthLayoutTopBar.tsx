'use client'
import React from 'react'
import { LanguageSwitcher } from '@/components/LanguageSelect'
import dynamic from 'next/dynamic'
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle').then((mod) => mod.ThemeToggle), { ssr: false })
export const AuthLayoutTopBar = () => {
    return (
        <div className="absolute top-0 left-0 right-0 z-20 p-2">
            <div className="flex items-center justify-between">
                <div className="lg:hidden">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">4X</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}
