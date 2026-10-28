/**************************************************************
*  CJ 10/25/26
*  JobCard.tsx
*  Structured Information Rendering: 
*  Displays core job data: Job Title, Company, Location, S Range
*  Status Indicators: FULL_TIME, REMOTE, CONTRACT, PART_TIME...
*  Provides the "Apply Now" button
*************************************************************/
import React from 'react';
import type { JobPosting } from '../types/job';

interface JobCardProps {
  job: JobPosting;
  onApply: (job: JobPosting) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  const cardClassName = `card job-card ${job.isFeatured ? 'featured' : ''}`;
  const badgeClassName = `job-badge ${job.type === 'REMOTE' ? 'remote' : ''}`;

  return (
    <div className={cardClassName}>
      <div className="job-card-header">
        <div>
          <h3 className="job-card-title">{job.title}</h3>
          <span className="job-card-company">{job.companyName}</span>
          <span className="job-card-dot">•</span>
          <span className="job-card-location">{job.location}</span>
        </div>
        <span className={badgeClassName}>{job.type}</span>
      </div>

      <p className="job-card-description">{job.description}</p>

      <div className="job-card-requirements">
        <strong className="job-card-req-title">Key Requirements:</strong>
        <ul className="job-card-req-list">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="job-card-footer">
        <span className="job-card-salary">
          ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()} {job.currency} / yr
        </span>
        <button className="btn btn-primary" onClick={() => onApply(job)}>
          Apply Now
        </button>
      </div>
    </div>
  );
};