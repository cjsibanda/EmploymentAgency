export const JOB_TITLES = [
    "Gatekeeper",
    "Shut-in",
    "Media Technician",
    "Security",
    "Custodian",
    "Greeter",
    "Manager"
] as const;

export type JobTitle = typeof JOB_TITLES[number];

export interface EmployeeData {
    name: string;
    employeeID: number;
    jobTitle: JobTitle;
    imageUrl: string;
    parkingLevel: number;
}