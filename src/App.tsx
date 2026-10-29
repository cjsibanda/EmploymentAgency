/*******************************************************
*  CJ 10/29/26
*  App.tsx - 
*  Assmbles modular components
*  Connects local storage persistence using React hooks
********************************************************/
import React, { useState, useEffect, useMemo } from 'react';
import type { EmployeeData } from './types/employee';
import type { JobPosting, JobFilterParams} from './types/job'; 
import type { JobApplication } from './types/application';
import { defaultEmployee, STORAGE_KEY } from './data/defaultEmployee';
import { mockJobs } from './data/mockJobs';
import { createJobApplication } from './utils/applicationFactory';
import { Header } from './components/Header';
import { ProfileView } from './components/ProfileView';
import { ProfileForm } from './components/ProfileForm';
import { JobFilter } from './components/JobFilter';
import { JobList } from './components/JobList'; 
import { ApplicationModal } from './components/ApplicationModal';
import { Footer } from './components/Footer'; 
import './styles.css';

type ActiveTab = 'PROFILE' | 'JOBS'; 

const APPLICATIONS_KEY = 'sibanda_agency_applications';

const initialFilters: JobFilterParams = {
    searchTerm: '',
    location: '',
    type: 'ALL',
};

export const App: React.FC = () => {
    //Tab Navigation State
    const [activeTab, setActiveTab] = useState<ActiveTab>('JOBS');

    //Profile State & Persistence
    const [employee, setEmployee] = useState<EmployeeData>(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) return JSON.parse(saved);
        } catch (e) {
            console.error("Failed to load saved profile:", e);
        }
        return defaultEmployee;
    });

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [tempData, setTempData] = useState<EmployeeData>(employee);

    
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(employee));
        } catch (error) {
            console.error("Failed to save employee data:", error);
        }
    }, [employee]);

    // Job Application State
    const [applications, setApplications] = useState<JobApplication[]>(() => {
        try {
            const saved = localStorage.getItem(APPLICATIONS_KEY);
            if (saved) return JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load saved applications:', e);
        }
        return [];
    });

    const [selectedJobForModal, setSelectedJobForModal] = useState<JobPosting | null>(null);

    useEffect(() => {
        try {
            localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
        } catch(error) {
            console.error('Failed to save applications:', error);
        }
    }, [applications]);

    const appliedJobIds = useMemo(() => applications.map((app) => app.jobId), [applications]);
    

    // Job Board Filtering State
    const [filters, setFilters] = useState<JobFilterParams>(initialFilters);

    const filteredJobs = useMemo(() => {
        return mockJobs.filter((job) => {
            //Searching for term matching (Title or Description)
            const matchesSearch =
              filters.searchTerm === '' ||
              job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
              job.description.toLowerCase().includes(filters.searchTerm.toLowerCase());

            //Location matches
            const matchesLocation = 
              filters.location === '' ||
              job.location.toLowerCase().includes(filters.location.toLowerCase());

            //Type matching
            const matchesType =
              !filters.type || filters.type === 'ALL' || job.type === filters.type;

            return matchesSearch && matchesLocation && matchesType;
        });
    }, [filters]);

    //handlers
    const handleEditClick = () => {
        setTempData(employee);
        setIsEditing(true);
    };

    const handleSave = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmployee(tempData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    //const handleApply = (job: JobPosting) => {
    //    alert(`Application submitted successfully for ${job.title} at ${job.companyName}!`);
    //};

    

    //const handleResetFilters = () => {
    //    setFilters(initialFilters);
    //};

    //Open Apply Modal logic
    const handleOpenApplyModal = (job: JobPosting) => {
        setSelectedJobForModal(job);
    };

    const handleCloseModal = () => {
        setSelectedJobForModal(null);
    };

    const handleSubmitApplication = (jobId: string, coverLetter: string) => {
        if (!selectedJobForModal) return;

        // --> this is constructed vis factory utility
        const newApplication = createJobApplication(
            selectedJobForModal,
            employee,
            coverLetter
        );

        setApplications((prev) => [...prev, newApplication]);
        setSelectedJobForModal(null);
    }

    return (
        <div className="page">
            <Header />

            {/* Navigation Sub-Header / Tabs */}
            <nav className="tab-navigation">
                <div className="tab-navigation-inner">
                    <button
                      className={`btn ${activeTab === 'JOBS' ? 'btn-primary' : 'btn-secondary'} tab-btn`}
                      onClick={() => setActiveTab('JOBS')}
                    >
                        Explore Jobs ({mockJobs.length})
                    </button>
                    <button
                      className={`btn ${activeTab === 'PROFILE' ? 'btn-primary' : 'btn-secondary'} tab-btn`}
                      onClick={() => setActiveTab('PROFILE')}
                    >
                        Candidate Portal
                    </button>
                </div>
            </nav>

            <main className="main-content">
                {activeTab === 'PROFILE' ? (
                  <div className="card">
                      <h2>Employee Sign-Up Profile</h2>
                      {!isEditing ? (
                          <ProfileView 
                              employee={employee} 
                              onEdit={handleEditClick} 
                          />
                      ) : (
                          <ProfileForm 
                              tempData={tempData} 
                              setTempData={setTempData} 
                              onSave={handleSave} 
                              onCancel={handleCancel} 
                          />
                      )}
                  </div>
                ) : (
                  <div>
                    <JobFilter
                      filters={filters}
                      onFilterChange={setFilters}
                      onReset={() => setFilters(initialFilters)}
                    />
                    <div className='results-count-bar'>
                        Showing <strong>{filteredJobs.length}</strong> of <strong>{mockJobs.length}</strong> positions                
                    </div>
                    <JobList 
                      jobs={filteredJobs}
                      appliedJobIds={appliedJobIds}
                      onApply={handleOpenApplyModal}
                     />
                  </div>
                )}
            </main>

            {selectedJobForModal && (
                <ApplicationModal
                  job={selectedJobForModal}
                  candidate={employee}
                  onSubmit={handleSubmitApplication}
                  onClose={handleCloseModal}
                />
            )}

            <Footer /> 
        </div>
    );
};

export default App;