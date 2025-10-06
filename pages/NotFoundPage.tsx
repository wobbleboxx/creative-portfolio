
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <h1 className="text-9xl font-black text-slate-300">404</h1>
      <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Uh-oh! Page not found.
      </p>
      <p className="mt-4 text-slate-600">We can't seem to find the page you're looking for.</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
