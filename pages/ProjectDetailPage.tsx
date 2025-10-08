import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { CATEGORY_STYLES } from '../constants';
import NotFoundPage from './NotFoundPage';
import { ArrowTopRightOnSquareIcon } from '../components/icons/ArrowTopRightOnSquareIcon';
import { Category, Project } from '../types';
import { BookOpenIcon } from '../components/icons/BookOpenIcon';
import { ItchIoIcon } from '../components/icons/ItchIoIcon';

const GAME_PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231e293b' /%3E%3Cg transform='translate(400,300) scale(12)'%3E%3Cpath d='M19,6H5C3.89,6 3,6.89 3,8V16C3,17.11 3.89,18 5,18H19C20.11,18 21,17.11 21,16V8C21,6.89 20.11,6 19,6M10,13H8V11H6V9H8V7H10V9H12V11H10V13M16,13H14V11H16V13M18,11H16V9H18V11Z' fill='%2394a3b8' transform='translate(-12, -12)' /%3E%3C/g%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2394a3b8'%3EGame Project%3C/text%3E%3C/svg%3E";
const WRITING_PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231e293b' /%3E%3Cg transform='translate(400,300) scale(12)'%3E%3Cpath d='M18,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2M18,20H6V4H7V12L9.5,10.5L12,12V4H18V20Z' fill='%2394a3b8' transform='translate(-12, -12)' /%3E%3C/g%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2394a3b8'%3EWriting Project%3C/text%3E%3C/svg%3E";
const MUSIC_PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231e293b' /%3E%3Cg transform='translate(400,300) scale(12)'%3E%3Cpath d='M12,3v9.28c-0.47-0.17-0.97-0.28-1.5-0.28C8.01,12,6,14.01,6,16.5S8.01,21,10.5,21c2.31,0,4.2-1.75,4.45-4H15V6h4V3H12z' fill='%2394a3b8' transform='translate(-12, -12)' /%3E%3C/g%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2394a3b8'%3EMusic Project%3C/text%3E%3C/svg%3E";

const getCoverImageSrc = (project: Project) => {
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
      return 'data:image/svg+xml,%3Csvg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%" height="100%" fill="%231e293b" /%3E%3C/svg%3E';
  }
};

const formatDisplayDate = (dateString: string): string => {
  if (dateString.toLowerCase() === 'ongoing') {
    return 'Ongoing';
  }
  const parts = dateString.split('-');
  if (parts.length !== 2) {
    return dateString; // Fallback for unexpected formats
  }
  const [year, month] = parts;
  const date = new Date(parseInt(year), parseInt(month) - 1);
  if (isNaN(date.getTime())) {
    return dateString; // Fallback for invalid date parts
  }
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};

const ProjectContent: React.FC<{ project: Project }> = ({ project }) => {
  const isSoundCloud = project.projectUrl?.includes('soundcloud.com');
  const isDevlog = project.tags.includes('Devlog');
  const isItchGame = project.projectUrl?.includes('itch.io');

  if (isDevlog || project.category === Category.WRITING || isItchGame) {
    return null; // No embedded content for these types
  }

  if (isSoundCloud) {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-slate-200 mb-4">Listen Now</h2>
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
      </div>
    );
  }
  
  if (project.projectUrl && project.category === Category.GAME) {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-slate-200 mb-4">Play It Live!</h2>
        <div className="aspect-video w-full">
          <iframe
            src={project.projectUrl}
            title={`Live demo of ${project.title}`}
            className="w-full h-full rounded-lg shadow-md border border-slate-700"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  return null;
};

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <NotFoundPage />;
  }
  
  const categoryStyle = CATEGORY_STYLES[project.category];
  
  const isItchGame = !!project.projectUrl?.includes('itch.io');
  const isDevlog = project.tags.includes('Devlog');
  const showProjectLinkButton = project.projectUrl && (project.category === Category.GAME || project.category === Category.WRITING);

  let buttonIcon: React.ReactNode | null = null;
  let buttonText: string | null = null;

  if (project.category === Category.WRITING) {
    buttonIcon = <BookOpenIcon className="h-5 w-5" />;
    buttonText = 'Download Book';
  } else if (project.category === Category.GAME) {
    if (isDevlog) {
      buttonIcon = <ArrowTopRightOnSquareIcon className="h-5 w-5" />;
      buttonText = 'Read Devlog';
    } else if (isItchGame) {
      buttonIcon = <ItchIoIcon className="h-5 w-5" />;
      buttonText = 'View on Itch.io';
    } else {
      buttonIcon = <ArrowTopRightOnSquareIcon className="h-5 w-5" />;
      buttonText = 'Open in Fullscreen';
    }
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in" style={{ opacity: 0 }}>
      <div className="mb-8">
        <Link to="/" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
          &larr; Back to all projects
        </Link>
      </div>

      <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <div
          className="relative h-96 bg-cover bg-center p-6 sm:p-8 lg:p-12 flex flex-col justify-end items-start"
          style={{ backgroundImage: `url(${getCoverImageSrc(project)})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative z-10 w-full">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${categoryStyle.bg} ${categoryStyle.text}`}
                >
                  {project.category}
                </span>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {project.title}
                </h1>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-slate-200 font-medium text-sm mb-2">
                  {formatDisplayDate(project.releaseDate)}
                </div>
                {showProjectLinkButton && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                  >
                    {buttonIcon}
                    {buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <div className="prose prose-lg max-w-none prose-slate prose-invert">
            <p className="lead text-xl text-slate-300 mb-6">{project.shortDescription}</p>
            
            {project.longDescription.split(/\n\s*\n/).map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          <ProjectContent project={project} />
          
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
      </div>
    </div>
  );
};

export default ProjectDetailPage;