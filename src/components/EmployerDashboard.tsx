/*****************************************************************
*  CJ 11/4/26
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
 
        </div>
    )
}