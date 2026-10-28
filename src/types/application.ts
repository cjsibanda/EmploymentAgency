/**************************************************************
*  CJ 10/28/26
*  application.ts - 
*  Defines strict TypeScript interface for Job applications
*  Candidate info, cover letter text, application status
*************************************************************/
import type { JobPosting } from "./job";

export type ApplicationStatus = 'SUBMITTED' | 'UNDER_REVIEW' | 'INTERVIEWING' | 'REJECTED' | 'ACCEPTED';

export interface JobApplication {
    id: string;
    jobId: string;
    jobTitle: string;
    companyName: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    coverLetter: string;
    submittedAt: string;
    status: ApplicationStatus;
}
