import React from 'react'
import { useTranslations } from 'next-intl'

const statIcons = ['👥', '💰', '🎯', '🌍']
const testimonialAvatars = ['👩‍💼', '👨‍💼', '👩‍💻']
const companyLogos = ['🏦', '🏛️', '⚫', '🔺', '💎', '📊']
const awardIcons = ['🏆', '🥇', '⭐']

const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
            ⭐
        </span>
    ))
}

const SocialProofSection = () => {
    const t = useTranslations('main.socialProofSection')

    const stats = t.raw('stats') as Array<{
        value: string
        label: string
        description: string
    }>
    const testimonials = t.raw('testimonials') as Array<{
        name: string
        role: string
        company: string
        rating: number
        text: string
        profit: string
        timeframe: string
    }>
    const companies = t.raw('companies') as Array<{ name: string }>
    const awards = t.raw('awards') as Array<{ name: string; organization: string }>
    const testimonialLabels = t.raw('testimonialLabels') as { profit: string; timeframe: string }

    return (
        <section className="social-proof-section">
            <div className="container">
                {/* Stats Section */}
                <div className="stats-showcase">
                    <div className="stats-header">
                        <h2 className="stats-title">{t('statsHeader.title')}</h2>
                        <p className="stats-subtitle">{t('statsHeader.subtitle')}</p>
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon">{statIcons[index]}</div>
                                <div className="stat-content">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                    <div className="stat-description">{stat.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="testimonials-showcase">
                    <div className="testimonials-header">
                        <h2 className="testimonials-title">{t('testimonialsHeader.title')}</h2>
                        <p className="testimonials-subtitle">{t('testimonialsHeader.subtitle')}</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, idx) => (
                            <div key={testimonial.name} className="testimonial-card">
                                <div className="testimonial-header">
                                    <div className="testimonial-avatar">
                                        <span className="avatar-emoji">{testimonialAvatars[idx]}</span>
                                    </div>
                                    <div className="testimonial-info">
                                        <h4 className="testimonial-name">{testimonial.name}</h4>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                        <p className="testimonial-company">{testimonial.company}</p>
                                    </div>
                                    <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
                                </div>

                                <blockquote className="testimonial-text">&quot;{testimonial.text}&quot;</blockquote>

                                <div className="testimonial-results">
                                    <div className="result-item">
                                        <span className="result-label">{testimonialLabels.profit}</span>
                                        <span className="result-value profit">{testimonial.profit}</span>
                                    </div>
                                    <div className="result-item">
                                        <span className="result-label">{testimonialLabels.timeframe}</span>
                                        <span className="result-value">{testimonial.timeframe}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Companies Section */}
                <div className="companies-showcase">
                    <h3 className="companies-title">{t('companiesTitle')}</h3>
                    <div className="companies-grid">
                        {companies.map((company, idx) => (
                            <div key={company.name} className="company-item">
                                <span className="company-logo">{companyLogos[idx]}</span>
                                <span className="company-name">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Awards Section */}
                <div className="awards-showcase">
                    <h3 className="awards-title">{t('awardsTitle')}</h3>
                    <div className="awards-grid">
                        {awards.map((award, idx) => (
                            <div key={award.name} className="award-item">
                                <span className="award-icon">{awardIcons[idx]}</span>
                                <div className="award-content">
                                    <h4 className="award-name">{award.name}</h4>
                                    <p className="award-organization">{award.organization}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialProofSection
