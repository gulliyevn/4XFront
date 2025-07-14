const EducationCenter = () => {
    return (
        <section className="education-center-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="title-icon">🎓</span>
                        Trading Education Center
                    </h2>
                    <p className="section-subtitle">
                        Master the markets with our comprehensive courses, live webinars, and interactive learning tools. From
                        beginner basics to advanced AI strategies.
                    </p>
                </div>

                {/* CTA Section */}
                <div className="education-cta">
                    <div className="cta-content">
                        <h3 className="cta-title">Ready to Start Your Trading Journey?</h3>
                        <p className="cta-description">
                            Join thousands of successful traders who started with our education platform. Get access to premium
                            courses, live mentorship, and exclusive trading tools.
                        </p>
                        <div className="cta-buttons">
                            <button className="btn btn-primary btn-lg">
                                <span className="btn-icon">🎓</span>
                                Start Learning Free
                            </button>
                            <button className="btn btn-secondary btn-lg">
                                <span className="btn-icon">💎</span>
                                Upgrade to Premium
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationCenter
