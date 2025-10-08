
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import { projects as unsortedProjects } from '../data/projects';
import { Category } from '../types';
import { EnvelopeIcon } from '../components/icons/EnvelopeIcon';

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const sortedProjects = useMemo(() => {
    return [...unsortedProjects].sort((a, b) => {
      // Treat "Ongoing" as the most recent
      const dateA = a.releaseDate.toLowerCase() === 'ongoing' ? '9999-12' : a.releaseDate;
      const dateB = b.releaseDate.toLowerCase() === 'ongoing' ? '9999-12' : b.releaseDate;
      // Sort descending
      return dateB.localeCompare(dateA);
    });
  }, []);

  const categories: (Category | 'All')[] = useMemo(() => {
    const allCategories = unsortedProjects.map(p => p.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return sortedProjects;
    }
    return sortedProjects.filter(project => project.category === activeFilter);
  }, [activeFilter, sortedProjects]);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          WobbleBoxx Workshop
        </h1>
        <div className="mt-4 max-w-3xl mx-auto text-lg text-slate-400 space-y-4">
            <p>
                Welcome to my digital workshop! A place for building strange games, composing wobbly tunes, and telling stories. 
                It's a playground for creative experiments, driven by curiosity and a love for the craft.
            </p>
        </div>
      </div>
      
      <div className="bg-slate-800/50 rounded-lg p-8 text-center border border-slate-700 animate-fade-in" style={{ opacity: 0, animationDelay: '100ms' }}>
        <h2 className="text-2xl font-bold text-slate-100">Join the Workshop</h2>
        <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
          Get occasional updates when new games, music, or stories are released. No spam, just creative experiments sent straight to your inbox.
        </p>
        <a 
          href="https://wobbleboxx.gumroad.com/subscribe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Subscribe
        </a>
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
