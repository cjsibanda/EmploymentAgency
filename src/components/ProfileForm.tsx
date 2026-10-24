/*******************************************************
*  CJ 10/24/26
*  Breaking UI into 3 components inside src/components 
*  Profileform.tsx - 
*  for editable form controls with type safety
********************************************************/
import React from 'react';
import { EmployeeData, JOB_TITLES, JobTitle} from '../types/employee';
import { getParkingArea } from '../utils/parking';

interface ProfileFormProps {
    tempData: employeeData;
    setTempData: React.Dispatch<React.SetStateAction<EmployeeData>>;
    onSave: (e: React.SyntheticEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}