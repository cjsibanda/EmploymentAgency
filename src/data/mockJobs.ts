/**************************************************************
*  CJ 10/25/26
*  mockJobs.ts - 
*  For realistic client-side dataset
* will use until MongoDB REST API endpoints are wired-up
*************************************************************/
import type { JobPosting } from "../types/job";

export const mockJobs: JobPosting[] = [
    {
        id: 'job-1',
        title: 'Senior Cook',
        companyName: 'Mutare Solutions',
        location: 'Toronto, ON',
        type: 'FULL_TIME',
        salaryMin: 60000,
        salaryMax: 150000,
        currency: 'CAD',
        description: 'Cooking good food in the Kitchen and supervising Junior cooks',
        requirements: [
            '5+ years experience in fact paced restaurant',
            'Solid understand on knives and stoves',
            'Ability to stand and walk for long shifts'
        ],
        postedDate: '2026-10-20',
        isFeatured: true,
    }
]