import { Inter, JetBrains_Mono, Poppins } from 'next/font/google'
import './globals.css'
import './page-styles.css'
import './enhanced-styles.css'
import './responsive-styles.css'
// import { ToastProvider } from '../src/components/ToastProvider'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { generateMetaData } from '../utils/generateMetaData'
import { ToastProvider } from '@/components/ToastProvider'

// Основной шрифт для интерфейса - Inter (отличная читаемость, современный)
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

// Моноширинный шрифт для цифр и данных - JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
})

// Шрифт для заголовков - Poppins (современный, привлекательный)
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-poppins',
    display: 'swap',
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const p = await params
    const data = await generateMetaData({ params: p })
    return data
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }
    return (
        <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable}`}>
            <body className="font-inter">
                <ToastProvider>
                    <NextIntlClientProvider>{children}</NextIntlClientProvider>
                </ToastProvider>
            </body>
        </html>
    )
}
