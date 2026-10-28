/*******************************************************
*  CJ 10/25/26
*  Breaking UI into 3 components inside src/components 
*  Header.tsx - Public navigation banner
********************************************************/
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-title">
                    Sibanda Employment Agency
                </div>
                <div className="header-subtitle">
                    Candidate Registration & Onboarding Portal
                </div>
            </div>
        </header>
    );
};