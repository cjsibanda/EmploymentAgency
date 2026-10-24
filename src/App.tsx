import React, { useState, useEffect } from 'react';
import './styles.css';

const JOB_TITLES = [
    "Gatekeeper",
    "Media Technician",
    "Security",
    "Custodian",
    "Greeter",
    "Manager"
] as const;

type JobTitle = typeof JOB_TITLES[number];

interface EmployeeData {
    name: string;
    employeeID: number;
    jobTitle: JobTitle;
    imageUrl: string;
    parkingLevel: number;
}

const STORAGE_KEY = "employee_profile";

export function getParkingArea(level: number): string {
    if (level === 1) return "GreenZone";
    if (level === 2) return "BlueZone";
    if (level === 3) return "RedZone";
    return "YellowZone";
}

const defaultEmployee: EmployeeData = {
    name: "CJ Sibanda",
    employeeID: 102012,
    jobTitle: "Greeter",
    imageUrl: "https://anesusibanda.com", 
    parkingLevel: 1,  
};

export const App = () => {
    const [employee, setEmployee] = useState<EmployeeData>(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) return JSON.parse(saved);
        } catch (e) {
            console.log("Failed to load saved profile:", e);
        }
        return defaultEmployee;
    });

    const [isEditing, setIsEditing] = useState(false);
    const [tempData, setTempData] = useState<EmployeeData>(employee);
    
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(employee));
        } catch (error) {
            console.log("Failed to save employee data:", error);
        }
    }, [employee]);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setEmployee(tempData);
        setIsEditing(false);
    };

    return (
        <div className="page">
            <header className="header">
                <div className="header-inner">
                    <div className="header-title">
                        Sibanda Employment Agency
                    </div>
                    <div className="header-subtitle">
                        Candidate Registration & Onboarding Portal
                    </div>
                </div>
            </header>
            <main className="main-content">
                <div className="card">
                    <h2>
                        Employee Sign-Up Profile
                    </h2>
                    {!isEditing ? (
                        <div className="profile-view">
                            <div className="profile-row"><strong>Name:</strong> {employee.name}</div>
                            <div className="profile-row"><strong>Employee ID:</strong> {employee.employeeID}</div>
                            <div className="profile-row"><strong>Job Title:</strong> {employee.jobTitle}</div>
                            <div className="profile-row"><strong>Assigned Parking:</strong> {getParkingArea(employee.parkingLevel)} (Level {employee.parkingLevel})</div>
                            <div className="profile-row"><strong>Portfolio:</strong> <a href={employee.imageUrl} target="_blank" rel="noreferrer">{employee.imageUrl}</a></div>
                            
                            <button className="btn" onClick={() => { setTempData(employee); setIsEditing(true); }}>
                                Edit Profile
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSave} className="form">
                            <div className="form-group">
                                <label>Full Name:</label>
                                <input 
                                    type="text" 
                                    value={tempData.name} 
                                    onChange={(e) => setTempData({...tempData, name: e.target.value})}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Employee ID:</label>
                                <input 
                                    type="number" 
                                    value={tempData.employeeID} 
                                    onChange={(e) => setTempData({...tempData, employeeID: Number(e.target.value)})}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Job Title:</label>
                                <select 
                                    value={tempData.jobTitle} 
                                    onChange={(e) => setTempData({...tempData, jobTitle: e.target.value as JobTitle})}
                                >
                                    {JOB_TITLES.map((title) => (
                                        <option key={title} value={title}>{title}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Parking Level (1-4):</label>
                                <input 
                                    type="number" 
                                    min="1" 
                                    max="4" 
                                    value={tempData.parkingLevel} 
                                    onChange={(e) => setTempData({...tempData, parkingLevel: Number(e.target.value)})}
                                />
                                <small style={{color: '#99c9ff', marginTop: '4px'}}>Zone: {getParkingArea(tempData.parkingLevel)}</small>
                            </div>

                            <div className="form-group">
                                <label>Website / Portfolio URL:</label>
                                <input 
                                    type="url" 
                                    value={tempData.imageUrl} 
                                    onChange={(e) => setTempData({...tempData, imageUrl: e.target.value})}
                                />
                            </div>

                            <div className="button-group">
                                <button type="submit" className="btn btn-primary">Save Profile</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;