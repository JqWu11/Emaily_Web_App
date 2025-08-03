import React from 'react';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-content">
                <div className="hero-section">
                    <h1 className="hero-title">
                        <span className="icon icon-poll hero-icon"></span>
                        SurveyMaster
                    </h1>
                    <p className="hero-subtitle">
                        Collect feedback from users with ease
                    </p>
                    <div className="hero-features">
                        <div className="feature-item">
                            <span className="icon icon-send"></span>
                            <span>Send surveys instantly</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon icon-analytics"></span>
                            <span>Track responses</span>
                        </div>
                        <div className="feature-item">
                            <span className="icon icon-security"></span>
                            <span>Secure & reliable</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;