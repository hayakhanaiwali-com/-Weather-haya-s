import React from 'react';
import { FilterType } from '../types';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  onClearCompleted: () => void;
  hasCompleted: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  currentFilter, 
  onFilterChange, 
  activeCount,
  onClearCompleted,
  hasCompleted
}) => {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 gap-4 mt-6 px-1">
      <span className="font-medium text-slate-500">{activeCount} items left</span>
      
      <div className="flex p-1 bg-slate-900/60 rounded-lg border border-slate-800/50 backdrop-blur-sm">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`
              px-4 py-1.5 rounded-md transition-all duration-200 font-medium
              ${currentFilter === filter.value 
                ? 'bg-slate-700/80 text-cyan-400 shadow-sm' 
                : 'hover:text-slate-200 hover:bg-slate-800/40'}
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={!hasCompleted}
        className={`
          font-medium transition-colors duration-200 
          ${hasCompleted ? 'text-slate-400 hover:text-rose-400 cursor-pointer' : 'text-slate-700 cursor-default'}
        `}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FilterBar;
