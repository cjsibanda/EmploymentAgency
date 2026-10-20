const { useState, useEffect } = React;

const JOB_TITLES = [
    "Gatekeeper",
    "Shut-in",
    "Media Technician",
    "Security",
    "Greeter"
] as const;

type JobTitle = typeof JOB_TITLES[number];

interface EmployeeData {
    name: string;
    employeeID: number;
    jobTitle: JobTitle;
}