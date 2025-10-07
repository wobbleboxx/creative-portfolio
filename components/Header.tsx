
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CubeIcon } from './icons/CubeIcon';

const Header: React.FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-indigo-400' : 'text-slate-300 hover:text-indigo-400'
    }`;

  return (
    <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 text-xl font-bold text-slate-100 hover:text-indigo-400 transition-colors">
            <CubeIcon className="w-6 h-6 text-indigo-500" />
            <span>WobbleBoxx Workshop</span>
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