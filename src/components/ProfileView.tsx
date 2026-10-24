/*******************************************************
*  CJ 10/24/26
*  Breaking UI into 3 components inside src/components 
*  ProfileView.tsx - 
*  for read-only display of candidate/employee details
********************************************************/
import React from 'react';
import { EmployeeData } from '../types/employee';
import { getParkingArea } from '../utils/parking';

interface ProfileViewProps {
    employee: EmployeeData;
    onEdit: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ employee, onEdit }) => {
    return (
        <div className="profile-view">
            <div className="profile-row">
                <strong>Name:</strong> {employee.name}
            </div>
            <div className="profile-row">
                <strong>Employee ID:</strong> {employee.employeeID}
            </div>
            <div className="profile-row">
                <strong>Job Title:</strong> {employee.jobTitle}
            </div>
            <div className="profile-row">
                <strong>Assigned Parking:</strong> {getParkingArea(employee.parkingLevel)} (Level {employee.parkingLevel})
            </div>
            <div className="profile-row">
                <strong>Portfolio:</strong>{' '}
                <a href={employee.imageUrl} target="_blank" rel="noreferrer">
                    {employee.imageUrl}
                </a>
            </div>

            <button className="btn" onClick={onEdit}>
                Edit Profile
            </button>
        </div>
    );
};