import React, { useState, useEffect} from 'react';
import './styles.css';

const JOB_TITLES = [
  "Gatekeeper",
  "Shut-in",
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
  imageUrl: "https://anesibanda.com",
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

  const handleSave = (e: React.SyntheticEvent<HTMLFormElement>) => {
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
            <div>
              <div><strong>Name:</strong> {employee.employeeID}</div>
              <div><strong>Employee ID:</strong> {employee.employeeID}</div>
              <div><strong>Job Title</strong {employee.jobTitle}</div>
              <div><strong>Assigned Parking:</strong> {getParkingArea(employee.parkingLevel)}(Level {employee.parkingLevel})</div>
              <div><strong>Portfolio:</strong><a href={employee.imageUrl} target="_blank" rel="noreferrer">{employee.imageUrl}</a></div>

              <button className="btn" onClick={() => { setTempData(employee); setIsEditing(true); }}>
                Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSave} className="form">
              <div>
                <label>Full Name:</label>
                <input
                  type="text"
                  value={tempData.name}
                  onChange={(e) => setTempData({...tempData, name: e.target.value})}
                  required
                />
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  )


}



