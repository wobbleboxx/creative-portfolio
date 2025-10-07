import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { CATEGORY_STYLES } from '../constants';
import NotFoundPage from './NotFoundPage';
import { ArrowTopRightOnSquareIcon } from '../components/icons/ArrowTopRightOnSquareIcon';
import { Category } from '../types';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <NotFoundPage />;
  }
  
  const categoryStyle = CATEGORY_STYLES[project.category];
  const isSoundCloud = project.projectUrl?.includes('soundcloud.com');
  const isDevlog = project.tags.includes('Devlog');

  return (
    <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
      <div className="mb-8">
        <Link to="/" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
          &larr; Back to all projects
        </Link>
      </div>

      <header className="mb-6 border-b border-slate-700 pb-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${categoryStyle.bg} ${categoryStyle.text}`}>
              {project.category}
            </span>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
              {project.title}
            </h1>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-slate-400 font-medium text-sm mb-2">
                {project.releaseDate}
            </div>
            {project.projectUrl && project.category === Category.GAME && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                {isDevlog ? 'Read Devlog' : 'Open in Fullscreen'}
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none prose-slate prose-invert">
        <p className="lead text-xl text-slate-300">{project.shortDescription}</p>
        
        {project.longDescription.split(/\n\s*\n/).map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>

      {project.projectUrl && !isDevlog && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">{isSoundCloud ? 'Listen Now' : 'Play It Live!'}</h2>
          {isSoundCloud ? (
             <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={project.projectUrl}
              title={`SoundCloud player for ${project.title}`}
              className="rounded-lg shadow-md border border-slate-700"
            ></iframe>
          ) : (
            <div className="aspect-video w-full">
              <iframe
                src={project.projectUrl}
                title={`Live demo of ${project.title}`}
                className="w-full h-full rounded-lg shadow-md border border-slate-700"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
      
      {project.images.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-full" 
              />
            ))}
          </div>
        </div>
      )}

      {project.tags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-slate-700">
          <h3 className="text-lg font-semibold text-slate-200 mb-3">Technologies & Skills</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-slate-700 text-slate-300 px-3 py-1 text-sm font-medium rounded-full border border-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;