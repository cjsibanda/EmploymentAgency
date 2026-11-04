/*******************************************************
*  CJ 11/3/26
*  CreateJobModal.tsx - 
*  The 'Job Posting Creator'
*  A form for recruiters to publish new positions into state
*  has: title, company, location, salary range, type, etc
********************************************************/
import React, { useState } from 'react';
import type { JobPosting, EmploymentType } from '../types/job';

interface CreateJobModalProps {
    onAddJob: (newJob: JobPosting) => void;
    onClose: () => void;
}

export const CreateJobModal: React.FC<CreateJobModalProps> = 
({onAddJob, onClose }) => {
    const [title, setTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState<EmploymentType>('FULL_TIME');
    const [salaryMin, setSalaryMin] = useState<number>(75000);
    const [salaryMax, setSalaryMax] = useState<number>(110000);
    const [description, setDescription] = useState('');
    const [requirementsText, setRequirementsText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const requirements = requirementsText
           .split('\n')
           .map((req) => req.trim())
           .filter((req) => req.length > 0);
        
        const createdJob: JobPosting = {
            id: `job-${Date.now()}`,
            title,
            companyName,
            location,
            type,
            salaryMin,
            salaryMax,
            currency: 'CAD',
            description,
            requirements: requirements.length > 0 ? requirements : ['General technical experience'],
            isFeatured: false,
            postedDate: new Date().toISOString().split('T')[0],
        };

        onAddJob(createdJob);
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-card">
                <div className='modal-header'>
                    <div>
                        <h3>Post a New Job Opening</h3>
                        <p>Publish a Position to the Agency Job Board</p>
                    </div>
                    <button className="modal-close-btn">
                        Close 
                    </button>
                </div>

                <form onSubmit={handeSubmit}>
                    <div>
                        //...
                        //...
                    </div>
                </form>
            </div>
        </div>
    )
}