import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import { projects } from '../data/projects';
import { Category } from '../types';

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  // FIX: Explicitly type `categories` to match the expected prop type in `ProjectFilter`.
  // TypeScript was inferring `(string | Category)[]` which is wider than `('All' | Category)[]`.
  const categories: (Category | 'All')[] = useMemo(() => {
    const allCategories = projects.map(p => p.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Welcome to My Workshop
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
          A collection of games, music, writing, and other creations.
        </p>
      </div>

      <ProjectFilter 
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;