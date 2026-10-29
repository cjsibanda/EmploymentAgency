/**********************************************************************
*  CJ 10/29/26
*  applicationFactory.ts - 
*  Utility File
*  constructs a standardized jobApplication object from job posting
*  has candidate profile and candidate cover letter
*********************************************************************/
import type { JobPosting } from '../types/job';
import type { EmployeeData } from '../types/employee';
import type { JobApplication } from '../types/application';

export const createJobApplication = (
    job: JobPosting,
    candidate: EmployeeData,
    coverLetter: string
) : JobApplication => {
   return {
     id: `app-${Date.now()}`,
     jobId: job.id,
     jobTitle: job.title,
     companyName: job.companyName,
     candidateName: `${candidate.firstName} ${candidate.lastName}`,
     candidateEmail: candidate.email,
     candidatePhone: candidate.phone,
     coverLetter,
     submittedAt: new Date().toISOString().split('T')[0],
     status: 'SUBMITTED',
    };
};