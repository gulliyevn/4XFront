import { Inter, JetBrains_Mono, Poppins } from 'next/font/google'
import './globals.css'
import './page-styles.css'
import './enhanced-styles.css'
import './responsive-styles.css'
// import { ToastProvider } from '../src/components/ToastProvider'
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
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
  const p = await params;
  const data = await generateMetaData({ params: p });
  return data;
}

export default async function RootLayout({
  children,
  params
}: {
    children: React.ReactNode,
    params: Promise<{locale: string}>;

  }) {
    const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00d4aa" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="4X Analytics" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#00d4aa" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "4X Analytics",
              "description": "Professional AI-powered trading platform with 94.7% prediction accuracy",
              "url": "https://4xanalytics.com",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "29",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "10000"
              },
              "author": {
                "@type": "Organization",
                "name": "4X Analytics"
              }
            })
          }}
        />
      </head>
      <body className="font-inter">
        <ToastProvider>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ToastProvider>
      </body>
    </html>
  )
} 