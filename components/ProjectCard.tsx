
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { CATEGORY_STYLES } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const categoryStyle = CATEGORY_STYLES[project.category];

  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-5">
        <span 
          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${categoryStyle.bg} ${categoryStyle.text}`}
        >
          {project.category}
        </span>
        <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
