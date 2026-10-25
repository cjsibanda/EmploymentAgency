/**************************************************************
*  CJ 10/25/26
*  JobList.tsx
*  Renders container/list
*  manages the collections of jop postings
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

