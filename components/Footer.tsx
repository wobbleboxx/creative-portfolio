import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { SoundCloudIcon } from './icons/SoundCloudIcon';
import { BloggerIcon } from './icons/BloggerIcon';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/wobbleboxx',
    icon: GitHubIcon,
  },
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/wobbleboxx',
    icon: SoundCloudIcon,
  },
  {
    name: 'Blogger',
    href: 'https://citycoinops.blogspot.com/',
    icon: BloggerIcon,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              aria-label={item.name}
            >
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Wobbleboxx. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;