/**************************************************************
*  CJ 10/28/26
*  JobList.tsx
*  Renders container/list
*  manages the collections of job postings
*  ...how sequence of cards is presented to user
*  handles empty search states
***************************************************************/
import React from 'react';
import type { JobPosting } from '../types/job';
import { JobCard } from './JobCard';

interface JobListProps {
    jobs: JobPosting[];
    onApply: (job: JobPosting) => void;
}

export const JobList: React.FC<JobListProps> = ({ jobs, onApply }) => {
    if (jobs.length === 0) {
        return (
            <div className="card job-empty-card">
                <h3>No Open Positions Found</h3>
                <p className="job-empty-card">
                    Try changing search keywords or resetting job filters.
                </p>
            </div>
        );
    } 

    return (
        <div className="job-list">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={onApply} />
            ))}
        </div>
    );
};

