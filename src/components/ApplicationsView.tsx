/***************************************************************
*  CJ 11/1/26 
*  ApplicationsView.tsx - 
*  Renders a list of all the submitted applications
*  ... stored in state (localStorage now)
*  shows job titles, submission dates, cover letters, and status 
* badges
***************************************************************/
import React from 'react';
import type { JobApplication } from '../types/application';

interface ApplicationViewProps {
    applcations: JobApplication[];
    onExploreJobs: () => void;
}

explore const ApplicationsView: React.FC<ApplicationViewProps> = ({
    ///--> 
})