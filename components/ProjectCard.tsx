import React from 'react';
import { Link } from 'react-router-dom';
import { Project, Category } from '../types';
import { CATEGORY_STYLES } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const GAME_PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231e293b' /%3E%3Cg transform='translate(400,300) scale(12)'%3E%3Cpath d='M19,6H5C3.89,6 3,6.89 3,8V16C3,17.11 3.89,18 5,18H19C20.11,18 21,17.11 21,16V8C21,6.89 20.11,6 19,6M10,13H8V11H6V9H8V7H10V9H12V11H10V13M16,13H14V11H16V13M18,11H16V9H18V11Z' fill='%2394a3b8' transform='translate(-12, -12)' /%3E%3C/g%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2394a3b8'%3EGame Project%3C/text%3E%3C/svg%3E";
const WRITING_PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231e293b' /%3E%3Cg transform='translate(400,300) scale(12)'%3E%3Cpath d='M18,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2M18,20H6V4H7V12L9.5,10.5L12,12V4H18V20Z' fill='%2394a3b8' transform='translate(-12, -12)' /%3E%3C/g%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2394a3b8'%3EWriting Project%3C/text%3E%3C/svg%3E";
const MUSIC_PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231e293b' /%3E%3Cg transform='translate(400,300) scale(12)'%3E%3Cpath d='M12,3v9.28c-0.47-0.17-0.97-0.28-1.5-0.28C8.01,12,6,14.01,6,16.5S8.01,21,10.5,21c2.31,0,4.2-1.75,4.45-4H15V6h4V3H12z' fill='%2394a3b8' transform='translate(-12, -12)' /%3E%3C/g%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2394a3b8'%3EMusic Project%3C/text%3E%3C/svg%3E";


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const categoryStyle = CATEGORY_STYLES[project.category];

  const getCoverImageSrc = () => {
    if (project.coverImage) {
      return project.coverImage;
    }

    switch (project.category) {
      case Category.GAME:
        return GAME_PLACEHOLDER_SVG;
      case Category.WRITING:
        return WRITING_PLACEHOLDER_SVG;
      case Category.MUSIC:
        return MUSIC_PLACEHOLDER_SVG;
      default:
        // A generic fallback for OTHER or future categories
        return 'data:image/svg+xml,%3Csvg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%" height="100%" fill="%231e293b" /%3E%3C/svg%3E';
    }
  };

  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block bg-slate-800 rounded-lg shadow-md hover:shadow-lg hover:shadow-indigo-500/10 transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative">
        <img 
          src={getCoverImageSrc()} 
          alt={project.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-5">
        <span 
          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${categoryStyle.bg} ${categoryStyle.text}`}
        >
          {project.category}
        </span>
        <h3 className="mt-3 text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400 line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;