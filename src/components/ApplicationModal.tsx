/***************************************************************
*  CJ 10/30/26 
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
    onClose,
}) => {
    const [coverLetter, setCoverLetter] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(job.id, coverLetter);
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-card" onclick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                    <h3 className="modal-title">Apply for {job.title}</h3>
                    <p className="modal-subtitle">{job.companyName} - {job.location}</p>
                </div>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                    X
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Applicant Name:</label>
                  <input 
                    type="text"
                    value={`${candidate.firstName} ${candidate.lastName}`}
                    disabled
                  />
                </div>
                
                <div className="form-group">
                  <label>Email Address:</label>
                  <input type="email" value={candidate.email} disabled/>
                </div>

                <div className="form-group">
                  <label>Cover Letter / Pitch (Optional):</label>
                  <textarea
                    rows={5}
                    placeholder="Explain why you are a great fit for this position..."
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                  />
                </div>

                <div className="modal-actions">
                  <button type="button" className="btn btn-secondary" onclick={onClose}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
        </div>
    );
};
