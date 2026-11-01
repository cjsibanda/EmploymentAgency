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
                <p className='job-empty-text'>
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

    return (
        <div className="applications-list">
            <div className='results-count-bar'>
              Showing <strong>{applications.length}</strong> submitted {applications.length === 1 ? 
              'application' : 'applications'}
            </div>

            {applications.map((app) => (
                <div key={app.id} className='card application-card'>
                    <div className='application-card-header'>
                        <div>
                            <h3 className='application-title'>{app.jobTitle}</h3>
                            <span className="application-company">{app.companyName}</span>
                        </div>
                        <span className='status-badge submitted'>
                            Status: {app.status}
                        </span>
                    </div>

                    <div className='application-date'>
                        Submitted on: <strong>{app.submittedAt}</strong>
                    </div>

                    {app.coverLetter && (
                        <div className='application-cover-letter'>
                            <span className='applcation-cover-letter-title'>Submitted Pitch / Cover Letter:</span>
                            <p>{app.coverLetter}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};