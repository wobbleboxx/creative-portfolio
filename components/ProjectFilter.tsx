import React from 'react';
import { Category } from '../types';

interface ProjectFilterProps {
  categories: (Category | 'All')[];
  activeFilter: Category | 'All';
  onFilterChange: (filter: Category | 'All') => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 ${
            activeFilter === category
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;