
import React from 'react';
import { PlayIcon } from '../components/icons/PlayIcon';
import { WobblyBoxIcon } from '../components/icons/WobblyBoxIcon';
import { SparklesIcon } from '../components/icons/SparklesIcon';

const ManifestoPage: React.FC = () => {
  const principles = [
    {
      icon: PlayIcon,
      title: 'Playful Experimentation',
      text: 'Embracing the weird, the broken, and the happy accidents. The best ideas are found off the beaten path, and this workshop is a space dedicated to exploring them.',
    },
    {
      icon: WobblyBoxIcon,
      title: 'Sound is Half the Experience',
      text: "From wobbly basslines to crunchy sound effects, audio isn't an afterthought—it's a core building block of emotion and atmosphere. Every project is an excuse to make noise.",
    },
    {
      icon: SparklesIcon,
      title: 'Story in Everything',
      text: 'Every game mechanic, every melody, and every line of code has a story to tell. The goal is to find that narrative spark and bring it to life, no matter the medium.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
      <header className="text-center mb-10 border-b border-slate-700 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          The WobbleBoxx Manifesto
        </h1>
        <p className="mt-4 text-xl text-slate-400">
          A few guiding thoughts from the workshop.
        </p>
      </header>

      <div className="prose prose-lg max-w-none prose-slate prose-invert">
        <h2>What is the Workshop?</h2>
        <p>
          The WobbleBoxx Workshop is a digital playground. It's a one-person exploration into the worlds of game development, music production, and creative writing. It’s less of a brand and more of a personal commitment to the joy of making things—to tinkering, learning, and sharing the results.
        </p>
        <p>
          Everything you see here was built from a desire to create something new, to solve a puzzle, or to simply see if an idea would work. It's a testament to late nights, countless iterations, and the simple, powerful act of creative expression.
        </p>
        
        <h2 className="mt-12 pt-8 border-t border-slate-700">Core Principles</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {principles.map((principle) => (
          <div key={principle.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <div className="flex justify-center items-center mb-4">
              <principle.icon className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">{principle.title}</h3>
            <p className="text-slate-400 text-base">{principle.text}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-lg max-w-none prose-slate prose-invert mt-12 pt-8 border-t border-slate-700">
        <h2>Creative Fuel</h2>
        <p>
          The Workshop is fueled by a deep love for 8-bit nostalgia, the glowing grids of synthwave album art, the sprawling worlds of sci-fi paperbacks, and the hypnotic pulse of electronic music. It's inspired by the elegant simplicity of arcade classics and the boundless creativity of the indie scene. If it's weird, interesting, or makes a cool noise, it probably belongs here.
        </p>
      </div>
    </div>
  );
};

export default ManifestoPage;