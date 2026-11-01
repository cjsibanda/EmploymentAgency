/***************************************************************
*  CJ 11/1/26 
*  ApplicationsView.tsx - 
*  Renders a list of all the submitted applications
*  ... stored in state (localStorage now)
*  shows job titles, submission dates, cover letters, and status 
* badges
***************************************************************/
import React from 'react';
import type { JobApplication } from '../types/application';

interface ApplicationViewProps {
    applications: JobApplication[];
    onExploreJobs: () => void;
}

export const ApplicationsView: React.FC<ApplicationViewProps> = ({
    applications,
    onExploreJobs,
}) => {
    if (applications.length === 0) {
        return (
            <div className="card job-empty-card">
                <h3>No Submitted Applications Yet</h3>
                <p>
                    You have not submitted any job applications yet. Look at the Job board for roles
                </p>
                <button
                    className="btn btn-primary"
                    onClick={onExploreJobs}
                    style={{ marginTop: '16px' }}
                >
                    Explore Open Positions
                </button>
            </div>
        );
    }
}