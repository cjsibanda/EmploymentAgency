/*******************************************************
*  CJ 10/27/26
*  App.tsx - 
*  Assmbles modular components
*  Connects local storage persistence using React hooks
********************************************************/
import React, { useState, useEffect } from 'react';
import type { EmployeeData } from './types/employee';
import type { JobPosting, JobFilterParams} from './types/job'; 
import { defaultEmployee, STORAGE_KEY } from './data/defaultEmployee';
import { mockJobs } from './data/mockJobs';
import { Header } from './components/Header';
import { ProfileView } from './components/ProfileView';
import { ProfileForm } from './components/ProfileForm';
import { JobFilter } from './components/JobFilter';
import { JobList } from './components/JobList'; 
import { Footer } from './components/Footer'; 
import './styles.css';

type ActiveTab = 'PROFILE' | 'JOBS'; 

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

    // Job Board Filtering State
    const [filters, setFilters] = useState<JobFilterParams>(initialFilters);

    const filteredJobs = useMemo(() => {
        return mockJobs.filter((job) => {
            //Searching for term matching (Title or Description)
            const matchesSearch =
              filters.searchTerm === '' ||
              job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
              job.description.toLowerCase().includes(filters.searchTerm.toLowerCase());

            
        })
    })

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

    return (
        <div className="page">
            <Header />
            <main className="main-content">
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
            </main>
            <Footer /> {/* Renders Footer */}
        </div>
    );
};

export default App;