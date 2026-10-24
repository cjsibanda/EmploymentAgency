/*******************************************************
*  CJ 10/24/26
*  Breaking UI into 3 components inside src/components 
*  Profileform.tsx - 
*  for editable form controls with type safety
********************************************************/
import React from 'react';
import { EmployeeData, JOB_TITLES, JobTitle } from '../types/employee';
import { getParkingArea } from '../utils/parking';

interface ProfileFormProps {
    tempData: EmployeeData;
    setTempData: React.Dispatch<React.SetStateAction<EmployeeData>>;
    onSave: (e: React.SyntheticEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
    tempData,
    setTempData,
    onSave,
    onCancel
}) => {
    return (
        <form onSubmit={onSave} className="form">
            <div className="form-group">
                <label>Full Name:</label>
                <input
                    type="text"
                    value={tempData.name}
                    onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label>Employee ID:</label>
                <input
                    type="number"
                    value={tempData.employeeID}
                    onChange={(e) => setTempData({ ...tempData, employeeID: Number(e.target.value) })}
                    required
                />
            </div>

            <div className="form-group">
                <label>Job Title:</label>
                <select
                    value={tempData.jobTitle}
                    onChange={(e) => setTempData({ ...tempData, jobTitle: e.target.value as JobTitle })}
                >
                    {JOB_TITLES.map((title) => (
                        <option key={title} value={title}>
                            {title}
                        </option>
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
                    onChange={(e) => setTempData({ ...tempData, parkingLevel: Number(e.target.value) })}
                />
                <small style={{ color: '#99c9ff', marginTop: '4px' }}>
                    Zone: {getParkingArea(tempData.parkingLevel)}
                </small>
            </div>

            <div className="form-group">
                <label>Website / Portfolio URL:</label>
                <input
                    type="url"
                    value={tempData.imageUrl}
                    onChange={(e) => setTempData({ ...tempData, imageUrl: e.target.value })}
                />
            </div>

            <div className="button-group">
                <button type="submit" className="btn btn-primary">
                    Save Profile
                </button>
                <button type="button" className="btn btn-secondary" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};