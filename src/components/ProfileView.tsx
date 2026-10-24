/*******************************************************
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

