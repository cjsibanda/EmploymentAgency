/*****************************************************************
*  CJ 11/5/26
*  EmployerDashboard.tsx - 
*  Dashboard for Recruiters to review Applications
*  Recruiters can: inspect pitches, updated application statuses
****************************************************************/
import React from 'react';
import type { JobApplication, ApplicationStatus } from '../types/application';

interface EmployerDashboardProps {
    applications: JobApplication[];
    onUpdateStatus: (applicationId: string, newStatus: ApplicationStatus) => void;
    onOpenCreateJobModal: () => void;
}

export const EmployerDashboard: React.FC<EmployerDashboardProps> = ({
    applications,
    onUpdateStatus,
    onOpenCreateJobModal,
}) => {
    return (
        <div className="employer-dashboard">
          <div className='employer-header-actions'>
            <div>
                <h2 className="employer-title">Employer Recruiter Dashboard</h2>
                <p className='job-empty-text'>Review incoming candidate applications and manage hiring pipelines.</p>
            </div>
            <button className='btn btn-primary' onClick={onOpenCreateJobModal} >
                + Post New Job Opening
            </button>
          </div>

          {applications.length === 0 ? (
            <div className='card job-empty-card'>
              <h3>No Applications Submitted Yet</h3>
              <p className='job-empty-text'>When candidates apply for open positions, their profiles and pitches will appear here.</p>
            </div>
          ) : (
            <div>
                <div className='results-count-bar'>
                    Managing <strong>{applications.length}</strong> total candidate submissions
                </div>

                {applications.map((app) => (
                    <div key={app.id} className='card application-review-card'>
                        <div className="application-card-header">
                            <div>
                                <h3 className='application-title'>{app.jobTitle}</h3>
                                <span className='application-company'>{app.companyName}</span>
                            </div>
                            <div>
                               <label className="applicant-info-label">Review Status</label>
                               <select 
                                 className='status-select'
                                 value={app.status}
                                 onChange={(e) => onUpdateStatus(app.id, e.target.value as ApplicationStatus)}
                               >
                                <option value="SUBMITTED">Submitted</option>
                                <option value="UNDER_REVIEW">Under Review</option>
                                <option value="INTERVIEWING">Interviewing</option>
                                <option value="ACCEPTED">Accepted</option>
                                <option value="REJECTED">Rejected</option>
                               </select> 
                            </div>
                        </div>

                        <div className="applicant-info-grid">
                            <div className='applicant-info-item'>
                                <span className='applicant-info-label'>Candidate Name:</span>
                                <strong>{app.candidateName}</strong>
                            </div>
                            <div className='applicant-info-item'>
                                <span className="applicant-info-label">Email Address:</span>
                                {app.candidateEmail}
                            </div>
                            <div className='applicant-info-item'>
                                <span className='applicant-info-label'>Phone:</span>
                                {app.candidatePhone}
                            </div>
                            <div className='applicant-info-item'>
                                <span className="applicant-info-label">Submitted On:</span>
                                {app.submittedAt}
                            </div>
                        </div>

                        {app.coverLetter && (
                            <div className="application-cover-letter">
                                <span className="application-cover-letter-title">
                                    Candidate Pitch / cover Letter:
                                </span>
                                <p>{app.coverLetter}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
          )}
        </div>
     );
};