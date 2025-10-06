import { Project, Category } from '../types';

export const projects: Project[] = [
  {
    id: 'cosmic-plinko',
    title: 'Cosmic Plinko',
    category: Category.GAME,
    shortDescription: 'A High-Octane Descent into Neon Chaos.',
    coverImage: '/public/images/cosmic_plinko.png',
    images: ['/public/images/cosmic-plinko-gallery-1.svg'],
    longDescription: `Ever wondered what would happen if you launched a pachinko machine into a synthwave black hole? You'd get Cosmic Plinko—an adrenaline-fueled arcade game that transforms the classic game of chance into a frantic test of skill, reflexes, and survival.

This isn't your grandma's Plinko. Take control of a high-energy orb and hurtle through an endless, procedurally generated cosmos. Your only tool for survival? A limited supply of powerful dashes. Smash through crimson energy gates, ricochet off reality-bending pegs, and navigate treacherous fields of bumpers, spinners, and gravity wells. Every descent is a unique, unpredictable gauntlet where one wrong move could send you into the void.

Can you handle the cosmic chaos?

Dash to Survive: Use your tactical dashes to break through barriers and steer through danger. But be warned—when you're out of dashes, it's game over.
An Ever-Changing Universe: With procedurally generated levels featuring shifting walls, dizzying funnels, and mind-bending portals, no two runs are ever the same.
Unleash Epic Power-ups: Grab collectibles to slow down time, transform into an unstoppable Power Ball, or trigger a chaotic multiball frenzy.
Face the Serpent: Plunge deep enough and you'll awaken the Cosmic Serpent—a colossal boss that will hunt you through the void. Do you have the skill to defeat it?
Mesmerizing Visuals: Immerse yourself in a vibrant, neon-drenched world with a retro-futuristic aesthetic that pulsates with every bounce.
Ready to test your mettle against the infinite? Sharpen your reflexes, manage your dashes, and see how deep you can go.`,
    releaseDate: 'September 2025',
    tags: ['React', 'Game Development', 'Physics', 'Web App'],
    projectUrl: 'https://stunning-kheer-33bbaa.netlify.app/',
  },
  {
    id: 'echoes-of-the-void',
    title: 'Echoes of the Void',
    category: Category.MUSIC,
    shortDescription: 'An ambient electronic album exploring themes of space, isolation, and discovery.',
    coverImage: '/public/images/echoes-of-the-void-cover.svg',
    images: ['/public/images/echoes-of-the-void-gallery-1.svg'],
    longDescription: `Echoes of the Void is a full-length concept album created using a mix of analog synthesizers and modern digital audio workstations. Each track represents a different stage of a solitary journey through deep space. From the hopeful launch to the awe of discovering new worlds and the melancholy of cosmic solitude, the album aims to evoke a powerful emotional response.

I experimented with generative music techniques for some of the atmospheric textures, allowing for a sense of organic randomness. The production process involved extensive sound design, field recordings (manipulated to sound otherworldly), and a focus on creating a vast, immersive soundscape. The album is available on all major streaming platforms.`,
    releaseDate: 'March 2024',
    tags: ['Ableton Live', 'Synthesizers', 'Ambient', 'Sound Design', 'Electronic'],
  },
  {
    id: 'the-last-scribe',
    title: 'The Last Scribe',
    category: Category.WRITING,
    shortDescription: 'A fantasy novella about a librarian tasked with preserving knowledge in a world that has forgotten how to read.',
    coverImage: '/public/images/the-last-scribe-cover.svg',
    images: ['/public/images/the-last-scribe-gallery-1.svg'],
    longDescription: `In a world where magic has replaced the written word, The Last Scribe tells the story of Elara, the final curator of the Great Library of Aethel. When a creeping magical blight begins to erase memories and histories, Elara must embark on a perilous journey to find the source of literacy and restore the world's collective past.
    
This story explores themes of cultural memory, the power of stories, and the conflict between tradition and progress. It was a wonderful challenge to build a world where the act of reading and writing is a form of forbidden magic. The novella was self-published and has received positive reviews for its world-building and unique premise.`,
    releaseDate: 'June 2022',
    tags: ['Fantasy', 'Novella', 'World-Building', 'Self-Publishing'],
  },
  {
    id: 'procedural-planet-generator',
    title: 'Procedural Planet Generator',
    category: Category.GAME,
    shortDescription: 'A real-time 3D planet generator built with WebGL and noise algorithms.',
    coverImage: '/public/images/procedural-planet-generator-cover.svg',
    images: ['/public/images/procedural-planet-generator-gallery-1.svg', '/public/images/procedural-planet-generator-gallery-2.svg'],
    longDescription: `This project was a deep dive into procedural content generation (PCG) and rendering techniques. Using various layers of simplex and fractal noise, this tool can generate unique and detailed planets in real-time directly in the browser.
    
Users can tweak parameters such as sea level, terrain roughness, color palettes, and atmospheric density to create a wide variety of celestial bodies, from arid desert worlds to lush earth-like planets. The rendering pipeline includes features like a custom terrain shader, atmospheric scattering, and dynamic cloud layers. This was a fantastic learning experience in graphics programming and optimization.`,
    releaseDate: 'January 2023',
    tags: ['WebGL', 'Three.js', 'Procedural Generation', 'Shaders', 'JavaScript'],
  },
  {
    id: 'forgotten-melodies',
    title: 'Forgotten Melodies',
    category: Category.MUSIC,
    shortDescription: 'A collection of solo piano pieces composed in a neo-classical style.',
    coverImage: '/public/images/forgotten-melodies-cover.svg',
    images: [],
    longDescription: `Forgotten Melodies is a return to my roots as a classical pianist. This collection of ten short pieces was composed over a year and reflects a more intimate and contemplative side of my musical work. The compositions are inspired by the works of Chopin and Satie, but with a modern harmonic sensibility.
    
Each piece tells a small story or captures a fleeting emotion. The entire collection was recorded on a beautifully restored Steinway grand piano to capture the warmth and richness of the instrument. The sheet music for all pieces is available for download alongside the recordings.`,
    releaseDate: 'August 2021',
    tags: ['Piano', 'Composition', 'Neo-classical', 'Sheet Music'],
  }
];