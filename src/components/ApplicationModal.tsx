/***************************************************************
*  CJ 10/28/26 
*  ApplicationModal.tsx - 
*  A pop-up overlay modal that shows candidate profile data
*  data is from EmployeeData in types/employee.ts
*  allows user to submit a custom letter and apply to position
***************************************************************/
import React, { useState } from "react";
import type { JobPosting } from '../types/job';
import type { EmployeeData } from "../types/employee";

interface ApplicationModalProps {
    job: JobPosting;
    candidate: EmployeeData;
    onSubmit: (jobID: string, coverLetter: string) => void;
    onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
    job,
    candidate,
    onSubmit,
    onclose,
}) => {
    const [coverLetter, setCoverLetter] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(job.id, coverLetter);
    };
}
