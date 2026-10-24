/*******************************************************
*  CJ 10/24/26
*  App.tsx - 
*  Assmbles modular components
*  Connects local storage persistence using React hooks
********************************************************/
import React, { useState, useEffect } from 'react';
import type { EmployeeData } from './types/employee';
import { defaultEmployee, STORAGE_KEY } from './data/defaultEmployee';
import { Header } from './components/Header';
import { ProfileView } from './components/ProfileView';
import { ProfileForm } from './components/ProfileForm';
import './styles.css';

export const App: React.FC = () => {
    // Lazy initial state load from LocalStorage
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

    // Sync state to LocalStorage on change
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(employee));
        } catch (error) {
            console.error("Failed to save employee data:", error);
        }
    }, [employee]);

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
        </div>
    );
};

export default App;