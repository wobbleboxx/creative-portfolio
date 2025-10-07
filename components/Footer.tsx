import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Wobbleboxx. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;