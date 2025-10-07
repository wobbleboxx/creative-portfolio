
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { WobblyBoxIcon } from './icons/WobblyBoxIcon';
import { WbWordmarkIcon } from './icons/WbWordmarkIcon';

const Header: React.FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'
    }`;

  return (
    <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <WobblyBoxIcon className="w-7 h-7 text-slate-100 group-hover:scale-110 transition-transform duration-300" />
            <WbWordmarkIcon className="h-5 text-slate-100" />
          </Link>
          <nav className="flex items-center space-x-6">
            <NavLink to="/" className={navLinkClass} end>
              Projects
            </NavLink>
            <NavLink to="/manifesto" className={navLinkClass}>
              Manifesto
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;