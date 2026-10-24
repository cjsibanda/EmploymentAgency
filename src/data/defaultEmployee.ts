/**********************************************************
*  defaultEmployee.ts: for baseline data and local storage
***********************************************************/

import type { EmployeeData } from '../types/employee';

export const STORAGE_KEY = "employee_profile";

export const defaultEmployee: EmployeeData = {
    name: "CJ Sibanda",
    employeeID: 102012,
    jobTitle: "Greeter",
    imageUrl: "https://anesusibanda.com", 
    parkingLevel: 1,  
};