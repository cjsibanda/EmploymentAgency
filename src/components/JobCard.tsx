/**************************************************************
*  CJ 10/25/26
*  JobCard.tsx
*  Structured Information Rendering: 
*  Displays core job data: Job Title, Company, Location, S Range
*  Status Indicators: FULL_TIME, REMOTE, CONTRACT, PART_TIME...
*  Provides the "Apply Now" button
*************************************************************/
import React from 'react';
import type { JobPosting} from '../types/job';

interface JobCardProps {
    job: JobPosting;
    onApply: (job: JobPosting) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
    return (
        <div>
            <div>
                <div>
                    <h3>{job.title}</h3>
                    <span>{job.companyName}</span>
                    <span>.</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                </div>

                <p>{job.description}</p>

                <div>
                    <strong>Key Requirements:</strong>
                    <ul>
                        /* job requirements must be defined */
                        {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span>
                        ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()} {job.currency} / yr
                    </span>
                    <button onClick={() => onApply(job)}>
                        Apply Now
                    </button>
                </div>

            </div>
        </div>
    );
};