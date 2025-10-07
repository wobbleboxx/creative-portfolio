import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import { projects } from '../data/projects';
import { Category } from '../types';

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

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
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          WobbleBoxx Workshop
        </h1>
        <div className="mt-4 max-w-3xl mx-auto text-lg text-slate-400 space-y-4">
            <p>
                Welcome to my digital workshop—a place for building strange games, composing wobbly tunes, and telling stories. 
                It's a playground for creative experiments, driven by curiosity and a love for the craft.
            </p>
        </div>
      </div>

      <ProjectFilter 
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${Math.min(index, 10) * 75}ms`, opacity: 0 }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;