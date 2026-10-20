const { useState, useEffect } = React;

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
}

const STORAGE_KEY = "employee_profile";

//<<--- **** ------>>//
export function getParkingArea(level: number): string {
    if (level == 1) return "GreenZone";
    if (level == 2) return "BlueZone";
    if (level == 3) return "RedZone";
    return "YellowZone";
}

export const EmployeeProfile = ({ employee }: { employee: EmployeeData }) => {
    return (
        <div>

        </div>
    );
};

const defaultEmployee: EmployeeData = {
    name: "CJ Sibanda",
    employeeID: 102012,
    jobTitle: "greeter",
    imageUrl: "https://anesusibanda.com",   
};

////<<---- *** --------->>/////
export const EmployeeProfile = () => {
    const [employee, setemployee] = useState<EmployeeData>(defaultEmployee);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
        } catch (error) {
            console.log("Failed to save employee data:", error);
        }
    }, [player]);

    return (
        <div>
            <header></header>
            <main></main>
        </div>
    )
}