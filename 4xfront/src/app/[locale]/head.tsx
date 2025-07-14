export default function Head() {
    return (
        <>
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
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: '4X Analytics',
                        description: 'Professional AI-powered trading platform with 94.7% prediction accuracy',
                        url: 'https://4xanalytics.com',
                        applicationCategory: 'FinanceApplication',
                        operatingSystem: 'Web, iOS, Android',
                        offers: {
                            '@type': 'Offer',
                            price: '29',
                            priceCurrency: 'USD',
                            priceValidUntil: '2025-12-31',
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.9',
                            ratingCount: '10000',
                        },
                        author: {
                            '@type': 'Organization',
                            name: '4X Analytics',
                        },
                    }),
                }}
            />
        </>
    )
}
