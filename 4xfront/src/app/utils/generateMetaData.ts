import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetaData({ params }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale: params.locale, namespace: 'metadata' });

    const keywords = t.raw('keywords') as string[];

    return {
        title: t('title'),
        description: t('description'),
        keywords,
        authors: [{ name: '4X Analytics Team' }],
        creator: '4X Analytics',
        publisher: '4X Analytics',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL('https://4xanalytics.com'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en',
                'tr-TR': '/tr',
                'ru-RU': '/ru',
            },
        },
        openGraph: {
            title: t('openGraphTitle'),
            description: t('openGraphDescription'),
            url: 'https://4xanalytics.com',
            siteName: '4X Analytics',
            images: [
                {
                    url: '/images/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: '4X Analytics - AI Trading Platform',
                },
            ],
            locale:
                params.locale === 'en' ? 'en_US' :
                    params.locale === 'ru' ? 'ru_RU' :
                        params.locale === 'tr' ? 'tr_TR' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('twitterTitle'),
            description: t('twitterDescription'),
            images: ['/images/twitter-image.jpg'],
            creator: '@4xanalytics',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: 'your-google-verification-code',
            yandex: 'your-yandex-verification-code',
        },
        category: 'finance',
        classification: 'Business',
        other: {
            'apple-mobile-web-app-capable': 'yes',
            'apple-mobile-web-app-status-bar-style': 'black-translucent',
            'apple-mobile-web-app-title': '4X Analytics',
            'mobile-web-app-capable': 'yes',
            'msapplication-TileColor': '#667eea',
            'theme-color': '#667eea',
        },
    }
}
   
