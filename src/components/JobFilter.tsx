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

export const JobFilter: React.FC<JobFilterProps> = ({ filters, onFilterChange, onReset }) => {
    return (
        <div>
            <h3>
                Search Open Positions
            </h3>
            <div>
                {/* Search Input */}
                <div>
                    <label>Keyword Search:</label>
                    <input
                      type="text"
                      placeholder="e.g. Senior Chef, Engineer..."
                      value={filters.searchTerm}
                      onChange={(e) => onFilterChange({ ...filters, searchTerm: e.target.value})}
                    />
                </div>
                
                {/* Location Filter */}
                <div className="form-group">
                    <label>Location:</label>
                    <input 
                      type="text"
                      placeholder="e.g. Calgary, Remote..."
                      value={filters.location}
                      onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}