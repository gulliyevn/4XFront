import Link from 'next/link'
import { useTranslations } from 'next-intl'

const newsIcons = ['🤖', '🏛️', '⚡', '💱']
const sourceIcons = ['📊', '📈', '💼', '🌐', '📱']

const sentimentMap = {
    bullish: { color: '#10b981', icon: '📈' },
    bearish: { color: '#ef4444', icon: '📉' },
    neutral: { color: '#6b7280', icon: '➡️' },
}

const NewsSection = () => {
    const t = useTranslations('main.newsSection')

    const newsItems = t.raw('newsItems') as Array<{
        id: number
        title: string
        excerpt: string
        category: string
        readTime: string
        timestamp: string
        sentiment: 'bullish' | 'bearish' | 'neutral'
        confidence: number
    }>

    const sentimentLabels = t.raw('sentiments') as Record<string, { label: string }>
    const sources = t.raw('sources') as Array<{ name: string }>
    const actions = t.raw('actions') as { viewAll: { label: string }; aiPredictions: { label: string } }

    return (
        <section className="news-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        {t('title')}
                        <span className="ai-badge">
                            <span className="ai-icon">🧠</span>
                            {t('aiBadge')}
                        </span>
                    </h2>
                    <p className="section-subtitle">{t('subtitle')}</p>
                </div>

                <div className="news-grid">
                    {newsItems.map((item, idx) => (
                        <article key={item.id} className="news-card">
                            <div className="news-header">
                                <div className="news-image">
                                    <span className="news-emoji">{newsIcons[idx]}</span>
                                </div>
                                <div className="news-meta">
                                    <span className="news-category">{item.category}</span>
                                    <span className="news-timestamp">{item.timestamp}</span>
                                </div>
                            </div>

                            <div className="news-content">
                                <h3 className="news-title">
                                    <Link href={`/news/${item.id}`}>{item.title}</Link>
                                </h3>
                                <p className="news-excerpt">{item.excerpt}</p>
                            </div>

                            <div className="news-footer">
                                <div className="news-stats">
                                    <span className="read-time">
                                        <span className="stat-icon">⏱️</span>
                                        {item.readTime}
                                    </span>
                                    <div className="sentiment-indicator">
                                        <span className="sentiment-icon">{sentimentMap[item.sentiment].icon}</span>
                                        <span className="sentiment-text" style={{ color: sentimentMap[item.sentiment].color }}>
                                            {sentimentLabels[item.sentiment]?.label || item.sentiment}
                                        </span>
                                    </div>
                                </div>

                                <div className="ai-confidence">
                                    <span className="confidence-label">{t('aiConfidence')}:</span>
                                    <div className="confidence-bar">
                                        <div
                                            className="confidence-fill"
                                            style={{
                                                width: `${item.confidence}%`,
                                                backgroundColor: sentimentMap[item.sentiment].color,
                                            }}></div>
                                    </div>
                                    <span className="confidence-value">{item.confidence}%</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="news-actions">
                    <Link href="/news" className="btn btn-primary">
                        <span className="btn-icon">📰</span>
                        {actions.viewAll.label}
                    </Link>
                    <Link href="/ai-insights" className="btn btn-secondary">
                        <span className="btn-icon">🔮</span>
                        {actions.aiPredictions.label}
                    </Link>
                </div>

                <div className="news-sources">
                    <p className="sources-title">{t('sourcesTitle')}</p>
                    <div className="sources-list flex gap-4">
                        {sources.map((source, idx) => (
                            <span key={idx} className="source-item">
                                <span className="source-icon">{sourceIcons[idx]}</span>
                                {source.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsSection
