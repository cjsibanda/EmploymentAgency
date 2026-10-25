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