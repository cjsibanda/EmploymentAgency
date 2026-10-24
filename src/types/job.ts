/*******************************************************
*  CJ 10/24/26
*  Breaking UI into 3 components inside src/components 
*  job.ts -
*  Job Types & Schema
*  Defines strict Typescript interfaces for Job Listings
* ... Job Categories
* ... Employment Types (Full-time, Remote, Contract)
* Search Query Filters
********************************************************/
export type EmploymentType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE';

export interface JobPosting {
  id: string;
  title: string;
  companyName: string;
  location: string;
  type: EmploymentType;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  description: string;
  requirements: string[];
  postedDate: string;
  isFeatured?: boolean;
}

export interface JobFilterParams {
  searchTerm: string;
  location: string;
  type?: EmploymentType | 'ALL';
  minSalary?: number;
}