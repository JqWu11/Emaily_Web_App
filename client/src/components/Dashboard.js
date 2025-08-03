import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2 className="dashboard-title">
                    <span className="icon icon-dashboard icon-left"></span>
                    Survey Dashboard
                </h2>
                <p className="dashboard-subtitle">
                    Manage and create your surveys with ease
                </p>
            </div>
            
            <div className="dashboard-content">
                <div className="dashboard-card main-card">
                    <div className="card-content">
                        <h3 className="card-title">
                            <span className="icon icon-list icon-left"></span>
                            Your Surveys
                        </h3>
                        <p className="card-description">
                            View and manage all your created surveys. Track responses and analyze results.
                        </p>
                        <div className="card-actions">
                            <Link to="/surveys/new" className="btn-primary">
                                <span className="icon icon-add icon-left"></span>
                                Create New Survey
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="dashboard-card secondary-card">
                    <div className="card-content">
                        <h3 className="card-title">
                            <span className="icon icon-analytics icon-left"></span>
                            Survey Analytics
                        </h3>
                        <p className="card-description">
                            Get insights into your survey performance and respondent engagement.
                        </p>
                        <div className="card-actions">
                            <button className="btn-secondary" disabled>
                                <span className="icon icon-trending-up icon-left"></span>
                                View Analytics
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="floating-action-btn">
                <Link to="/surveys/new" className="fab-button">
                    <span className="icon icon-add"></span>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;