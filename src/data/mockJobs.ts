/**************************************************************
*  CJ 10/25/26
*  mockJobs.ts - 
*  For realistic client-side dataset
* will use until MongoDB REST API endpoints are wired-up
*************************************************************/
import type { JobPosting } from "../types/job";

export const mockJobs: JobPosting[] = [
    {
        id: 'job-101',
        title: 'Senior Cook',
        companyName: 'Mutare Solutions',
        location: 'Toronto, ON',
        type: 'FULL_TIME',
        salaryMin: 60000,
        salaryMax: 150000,
        currency: 'CAD',
        description: 'Cooking good food in the kitchen and supervising junior cooks',
        requirements: [
            '5+ years experience in fast paced restaurant',
            'Solid understanding og knives and stoves',
            'Ability to stand and walk for long shifts'
        ],
        postedDate: '2026-10-20',
        isFeatured: true,
    },
    {
    id: 'job-102',
    title: 'DevOps Engineer',
    companyName: 'Joburg Systems',
    location: 'Remote (Canada)',
    type: 'REMOTE',
    salaryMin: 40000,
    salaryMax: 140000,
    currency: 'CAD',
    description: 'Architecting pipelines, container orchestration with Kubernetes.',
    requirements: [
      'Kubernetes & Docker experience',
      'Proficiency in Terraform / Infrastructure as Code',
      'Experience with Microsoft Office',
    ],
    postedDate: '2026-10-22',
    isFeatured: true,
  },
  {
    id: 'job-103',
    title: 'Front-End Developer',
    companyName: 'Sibanda Enterprise Systems',
    location: 'Toronto, ON',
    type: 'CONTRACT',
    salaryMin: 35000,
    salaryMax: 200000,
    currency: 'CAD',
    description: 'Building UI component libraries and micro-frontends using React, TypeScript, and Tailwind CSS.',
    requirements: [
      'Expertise in WCAG 2.1 accessibility standards',
      'Strong state management and performance tuning skills',
      'Experience with GitHub'
    ],
    postedDate: '2026-10-24',
    isFeatured: false,
  },
  {
    id: 'job-104',
    title: 'Maintentance Technician',
    companyName: 'Kwekwe Logitics',
    location: 'Mississauga, ON',
    type: 'FULL_TIME',
    salaryMin: 50000,
    salaryMax: 300000,
    currency: 'CAD',
    description: 'Inspect, troubleshoot, repair, and perform preventative maintenance',
    requirements: [
      'Experience in n industrial, manufacturing or commercial building environment',
      'Ability to read blueprints',
      'Physical stamina to lift heavy items'
    ],
    postedDate: '2026-10-25',
    isFeatured: false,
  },
  {
    id: 'job-105',
    title: 'Customer Service Representative',
    companyName: 'Falls Station',
    location: 'Pickering, ON',
    type: 'FULL_TIME',
    salaryMin: 40000,
    salaryMax: 90000,
    currency: 'CAD',
    description: 'Assist customers with queries',
    requirements: [
      'Experience working in high paced environment',
      'Experience with Microsoft Office',
      'Team player'
    ],
    postedDate: '2026-10-26',
    isFeatured: false,
  }
]