
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from './icons/BookOpenIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-slate-800 hover:text-indigo-600 transition-colors">
            <BookOpenIcon className="w-6 h-6 text-indigo-500" />
            <span>My Creative Portfolio</span>
          </Link>
          <nav>
            {/* Future navigation links could go here */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
