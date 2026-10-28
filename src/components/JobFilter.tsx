/**************************************************************
*  CJ 10/28/26
*  JobFilter.tsx
*  For Search & Filer Controls
*  Captures candidate seach inputs and passes filter criteria
* ... up to the parent container
*************************************************************/
import React from "react";
import type { EmploymentType, JobFilterParams } from "../types/job";

interface JobFilterProps {
    filters: JobFilterParams;
    onFilterChange: (newFilters: JobFilterParams) => void;
    onReset: () => void;
}

export const JobFilter: React.FC<JobFilterProps> = ({ filters, onFilterChange, onReset }) => {
    return (
        <div className="card job-filter-card">
            <h3 className="job-filter-title">
                Search Open Positions
            </h3>
            <div className="job-filter-grid">
                {/* Search Input */}
                <div className="form-group">
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

                {/* Employment Type Dropdown */}
                <div className="form-group">
                    <label>Employment Type:</label>
                    <select
                      value={filters.type || 'ALL'}
                      onChange={(e) => 
                        onFilterChange({
                            ...filters,
                            type: e.target.value as EmploymentType | 'ALL',
                        })
                      }
                    >
                        <option value="ALL">All Employment Types</option>
                        <option value="FULL">Full-Time</option>
                        <option value="REMOTE">Remote</option>
                        <option value="CONTRACT">Contract</option>
                        <option value="PART_TIME">Part-time</option>
                    </select>
                </div>
            </div>

            <div className="job-filter-actions">
                <button
                  type="button"
                  className="btn btn-secondary btn-reset"
                  onClick={onReset}
                >
                    Reset Filters
                </button>
            </div>
        </div>
    )
}