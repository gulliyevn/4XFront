'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const MobileAppSection = () => {


    const appStats = [
        { label: 'App Store Rating', value: '4.9', unit: '⭐' },
        { label: 'Downloads', value: '500K+', unit: '📱' },
        { label: 'Daily Active Users', value: '85K+', unit: '👥' },
        { label: 'Countries Available', value: '150+', unit: '🌍' },
    ]

    const testimonials = [
        {
            name: 'Alex Chen',
            role: 'Day Trader',
            avatar: '👨‍💼',
            text: 'The mobile app is incredibly fast and reliable. I can trade on the go without missing any opportunities.',
            rating: 5,
        },
        {
            name: 'Sarah Williams',
            role: 'Portfolio Manager',
            avatar: '👩‍💼',
            text: 'AI insights on mobile are game-changing. I get the same quality analysis as the desktop platform.',
            rating: 5,
        },
        {
            name: 'Mike Rodriguez',
            role: 'Crypto Investor',
            avatar: '👨‍💻',
            text: 'Biometric security gives me peace of mind. The app is both secure and user-friendly.',
            rating: 5,
        },
    ]

    return (
        <section className="mobile-app-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Trade Anywhere with Our
                        <span className="gradient-text"> Mobile App</span>
                    </h2>
                    {/* <p className="section-subtitle">
                        Experience the full power of our AI trading platform on your mobile device. Available for iOS and Android
                        with all desktop features included.
                    </p> */}
                </div>

                {/* App Statistics */}
                <div className="app-stats">
                    <h3 className="stats-title">Trusted by Traders Worldwide</h3>
                    <div className="stats-grid">
                        {appStats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon">{stat.unit}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Testimonials */}
                <div className="mobile-testimonials">
                    <h3 className="testimonials-title">What Mobile Users Say</h3>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-header">
                                    <div className="testimonial-avatar">{testimonial.avatar}</div>
                                    <div className="testimonial-info">
                                        <div className="testimonial-name">{testimonial.name}</div>
                                        <div className="testimonial-role">{testimonial.role}</div>
                                    </div>
                                    <div className="testimonial-rating">
                                        {Array.from({ length: testimonial.rating }, (_, i) => (
                                            <span key={i} className="star">
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileAppSection
