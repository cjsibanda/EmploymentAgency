/**************************************************************
*  CJ 10/25/26
*  JobFilter.tsx
*  For Search & Filer Controls
*  Captures candidate seach inputs and passes filter criteria
* ... up to the parent container
*************************************************************/
import React from "react";
import type { JobFilterParams } from "../types/job";

interface JobFilterProps {
    filters: JobFilterParams;
    onFilterChange: (newFilters: JobFilterParams) => void;
    onReset: () => void;
}

