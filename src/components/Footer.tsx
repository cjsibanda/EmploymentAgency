/*******************************************************
*  CJ 10/24/26
*  Breaking UI into 3 components inside src/components 
*  Footer.tsx - 
*  Professional looking Footer component
*  copyright year, quick links ...
********************************************************/
import React from 'react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span className="footer-logo-text">Sibanda Employment Agency</span>
                        <p className="footer-description">
                             Candidate Onboarding & Placement Platform
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-col">
                            <h4>Platform</h4>
                            <ul>
                                <li><a href="#jobs">Job Board</a></li>
                                <li><a href="#candidates">Candidate Portal</a></li>
                                <li><a href="#recruiters">Recruiter Dashboard</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Governance & Security</h4>
                            <ul>
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#terms">Terms of Service</a></li>
                                <li><a href="#compliance">SOC2 / WCAG Compliance</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-meta">
                        © {currentYear} Sibanda Systems Inc. All rights reserved.
                    </div>
                    <div className="footer-status">
                        <span className="status-indicator"></span>
                        <span className="status-text">All Systems Operational (v1.0.0-release)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};