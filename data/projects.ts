
import { Project, Category } from '../types';

export const projects: Project[] = [
  {
    id: 'city-coin-ops',
    title: 'City Coin Ops',
    category: Category.GAME,
    shortDescription: 'A vending and arcade machine tycoon game. Manage machines, stock, and explore the town.',
    coverImage: 'https://image2url.com/images/1759837979269-289c7025-8e05-4908-9823-991693b1fc62.png',
    images: [],
    longDescription: `City Coin Ops is a vending and arcade machine tycoon game where players build their empire using different machines for vending items and playable arcade machines.
    
Key features include:
- **Empire Building:** Strategically place machines to grow your business.
- **Arcade & Vending Management:** Maintain arcade cabinets and vending machines to maximize revenue.
- **Stock Management:** Keep your inventory levels high to satisfy customer demand.
- **Town Exploration:** Explore the city to discover new locations and opportunities.

This playable prototype marks the conclusion of the City Coin-Ops Devlog.`,
    releaseDate: '2025-12',
    tags: ['Tycoon', 'Simulation', 'Management', 'Web Game', 'Indie Game'],
    projectUrl: 'https://citycoinops.netlify.app',
  },
  {
    id: 'voxel-box-editor',
    title: 'Voxel Box Editor',
    category: Category.VISUAL_FX,
    shortDescription: 'A free, browser-based voxel editor for creating 3D pixel art. Build, save, and export your creations.',
    coverImage: 'https://image2url.com/images/1761904375225-dbd59e80-cb2f-484a-b2dd-ca1a870de2bf.png',
    images: [],
    longDescription: `Voxel Box Editor is a simple yet powerful tool for creating 3D art directly in your web browser. Inspired by the blocky aesthetic of classic games and pixel art, this editor provides an intuitive interface to build anything you can imagine, one voxel at a time. It's completely free to use, and you can easily save your progress or export your models to use in other projects. Perfect for hobbyists, game developers, and anyone looking to dip their toes into 3D creation.`,
    releaseDate: '2024-09',
    tags: ['Voxel Art', '3D Modeling', 'Creative Tool', 'Web App', 'React'],
    projectUrl: 'https://iridescent-lollipop-1b8107.netlify.app/',
  },
  {
    id: 'golden-ratio-phyllotaxis',
    title: 'Golden Ratio Seed Spender',
    category: Category.VISUAL_FX,
    shortDescription: 'A mesmerizing visualization of phyllotaxis, creating natural spiral patterns seen in sunflowers and pinecones.',
    coverImage: 'https://image2url.com/images/1761904413748-c496f7ba-9f82-4095-ba45-4758ee0c3640.png',
    images: [],
    longDescription: `A mesmerizing visualization of phyllotaxis. A central emitter rotates and shoots seeds at the golden angle (≈137.5°), creating a natural spiral pattern seen in sunflowers and pinecones.`,
    releaseDate: '2024-08',
    tags: ['Creative Coding', 'Visualization', 'Generative Art', 'Math', 'p5.js'],
    projectUrl: 'https://illustrious-bublanina-59b476.netlify.app/',
  },
  {
    id: 'liminale-zeilenzwischenraeume',
    title: 'Liminale Zeilenzwischenräume',
    category: Category.WRITING,
    shortDescription: 'A German-language book exploring the quiet, often overlooked spaces in our lives, thoughts, and environments.',
    coverImage: 'https://image2url.com/images/1759867002172-38615cfb-9be4-4e80-82fb-3dc8fa526ae3.png',
    images: [],
    longDescription: `A book written in German, "Liminale Zeilenzwischenräume" (roughly translated as "Liminal Spaces Between Lines") is an exploration of the moments in-between. It delves into the quiet, often overlooked spaces in our lives, thoughts, and environments, capturing the feeling of transition and ambiguity.

This book is offered on a "name your price" model. You can download it by setting a price you feel is fair, with a minimum of $0.99 to help cover platform costs. Any additional support is deeply appreciated and directly contributes to future creative projects from the workshop. Thank you for reading!`,
    releaseDate: '2025-02',
    tags: ['German', 'Book', 'Creative Writing', 'Name Your Price', 'Indie Publishing'],
    projectUrl: 'https://wobbleboxx.gumroad.com/l/liminale_zeilenzwischenraeume',
  },
  {
    id: 'city-coin-ops-devlog',
    title: 'City Coin-Ops Devlog',
    category: Category.GAME,
    shortDescription: 'A development blog chronicling the creation of the City Coin Ops tycoon game.',
    coverImage: 'https://image2url.com/images/1759837979269-289c7025-8e05-4908-9823-991693b1fc62.png',
    images: [],
    longDescription: `Follow the journey of developing 'City Coin Ops' from scratch. The devlog offers a behind-the-scenes look at the creative process, from initial concepts and design documents to programming challenges and art asset creation.`,
    releaseDate: '2025-09 - 2025-12',
    tags: ['Game Development', 'Devlog', 'Blogger', 'Indie Game'],
    projectUrl: 'https://citycoinops.blogspot.com/',
  },
    {
    id: 'primitive-survival',
    title: 'Primitive Survival: The Game',
    category: Category.GAME,
    shortDescription: 'A prototype survival game built with Godot 4, inspired by primitive technology. Craft tools, hunt for food, and survive the wilderness.',
    coverImage: 'https://image2url.com/images/1759914607777-71e3e49a-6587-4213-9fea-09d4dafe01b4.png',
    images: [],
    longDescription: `This project was created in honor of Duong's inspiring YouTube series where he builds huts and a garden from scratch using only a machete. Watching the series was a great learning experience, and this game is an attempt to capture some of those lessons in an interactive format. While the primary goal was to learn the Godot engine, the project remains a bare prototype and was never fully developed.`,
    releaseDate: '2024-04',
    tags: ['Godot 4', 'Survival', 'Crafting', 'itch.io', 'Prototype'],
    projectUrl: 'https://wobbleboxx.itch.io/primitive-survival-the-game',
  },
  {
    id: 'cosmic-plinko',
    title: 'Cosmic Plinko',
    category: Category.GAME,
    shortDescription: 'A High-Octane Descent into Neon Chaos.',
    coverImage: 'https://image2url.com/images/1759823451041-9b4d7959-9cab-4638-8e50-42e2788a9077.png',
    images: [],
    longDescription: `Ever wondered what would happen if you launched a pachinko machine into a synthwave black hole? You'd get Cosmic Plinko, an adrenaline-fueled arcade game that transforms the classic game of chance into a frantic test of skill, reflexes, and survival.

This isn't your grandma's Plinko. Take control of a high-energy orb and hurtle through an endless, procedurally generated cosmos. Your only tool for survival? A limited supply of powerful dashes. Smash through crimson energy gates, ricochet off reality-bending pegs, and navigate treacherous fields of bumpers, spinners, and gravity wells. Every descent is a unique, unpredictable gauntlet where one wrong move could send you into the void.

Can you handle the cosmic chaos?

Dash to Survive: Use your tactical dashes to break through barriers and steer through danger. But be warned: when you're out of dashes, it's game over.
An Ever-Changing Universe: With procedurally generated levels featuring shifting walls, dizzying funnels, and mind-bending portals, no two runs are ever the same.
Unleash Epic Power-ups: Grab collectibles to slow down time, transform into an unstoppable Power Ball, or trigger a chaotic multiball frenzy.
Face the Serpent: Plunge deep enough and you'll awaken the Cosmic Serpent, a colossal boss that will hunt you through the void. Do you have the skill to defeat it?
Mesmerizing Visuals: Immerse yourself in a vibrant, neon-drenched world with a retro-futuristic aesthetic that pulsates with every bounce.
Ready to test your mettle against the infinite? Sharpen your reflexes, manage your dashes, and see how deep you can go.`,
    releaseDate: '2025-09',
    tags: ['React', 'Game Development', 'Physics', 'Web App'],
    projectUrl: 'https://stunning-kheer-33bbaa.netlify.app/',
  },
  {
    id: 'nowyago',
    title: 'NowYaGo',
    category: Category.MUSIC,
    shortDescription: 'A high-energy electronic track with driving basslines and wobbly synths.',
    coverImage: 'https://image2url.com/images/1759853916700-373739fc-c140-4883-a139-7bc927804848.jpg',
    images: [],
    longDescription: `An energetic electronic music piece from WobbleBoxx. "NowYaGo" features a driving beat, heavy bass, and signature synth sounds that create a dynamic and engaging listening experience. This track showcases a classic sound from the artist's earlier work.`,
    releaseDate: '2011-06',
    tags: ['Electronic', 'SoundCloud', 'Bass Music', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/44423467&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'time-to-evolution',
    title: 'Time to evolution',
    category: Category.MUSIC,
    shortDescription: 'An evolving electronic track that builds in complexity and energy.',
    coverImage: 'https://image2url.com/images/1759853881190-a554b8c8-ad70-401d-95c4-56b2edeec9f6.jpg',
    images: [],
    longDescription: `Another classic from WobbleBoxx, 'Time to evolution' takes the listener on a sonic journey. The track builds from a simple melodic idea into a complex and energetic arrangement, showcasing the artist's signature sound design and production style.`,
    releaseDate: '2011-05',
    tags: ['Electronic', 'SoundCloud', 'Bass Music', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/43339247&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'synth-core',
    title: 'Synth Core',
    category: Category.MUSIC,
    shortDescription: 'An energetic electronic track focused on powerful synth melodies.',
    coverImage: 'https://image2url.com/images/1759853520293-2df005ff-6230-4208-9764-1ec1ebf20c4c.jpg',
    images: [],
    longDescription: `This track, "Synth Core," is a high-energy piece from WobbleBoxx. It's features prominent, powerful synth melodies over a driving electronic beat, creating an intense and melodic experience for the listener.`,
    releaseDate: '2013-06',
    tags: ['Electronic', 'SoundCloud', 'Synthwave', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/98120150&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'rage-rave',
    title: 'Rage Rave (Aggressive Ventilation)',
    category: Category.MUSIC,
    shortDescription: 'An aggressive and intense electronic track designed for high-energy moments.',
    coverImage: 'https://image2url.com/images/1759853652085-76f5c79b-264c-46b6-bd03-9c155a4d0e13.jpg',
    images: [],
    longDescription: `This track, 'Rage Rave (Aggressive Ventilation),' is a powerful and aggressive electronic piece from WobbleBoxx. It's designed to be an intense auditory experience, perfect for high-energy moments and what the artist calls 'aggressive ventilation'.`,
    releaseDate: '2013-08',
    tags: ['Electronic', 'SoundCloud', 'Aggressive', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89206170&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'holy-smoked-some',
    title: 'Holy Smoked Some',
    category: Category.MUSIC,
    shortDescription: 'A heavy-hitting track with a smoky, atmospheric vibe and intense bass drops.',
    coverImage: 'https://image2url.com/images/1759853793360-0dba133b-1706-48f2-aff2-884ae0cf0b01.jpg',
    images: [],
    longDescription: `"Holy Smoked Some" delivers a potent mix of atmospheric pads and aggressive basslines. This WobbleBoxx track creates a dense, hazy soundscape before unleashing a powerful, rhythmically complex drop that's characteristic of the artist's style.`,
    releaseDate: '2013-08',
    tags: ['Electronic', 'SoundCloud', 'Dubstep', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106017401&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'sunset-vibes',
    title: 'Sunset Vibes (Feel Good Mix)',
    category: Category.MUSIC,
    shortDescription: 'An uplifting and melodic track with a warm, feel-good energy perfect for a summer evening.',
    coverImage: 'https://image2url.com/images/1759853753129-a8c0fa38-2484-49cf-8509-2a948daa24bb.jpg',
    images: [],
    longDescription: `Capturing the warmth of a setting sun, "Sunset Vibes (Feel Good Mix)" is a departure into more melodic territory for WobbleBoxx. The track features bright synth leads, a smooth bassline, and a relaxed tempo, creating an uplifting and positive atmosphere.`,
    releaseDate: '2013-07',
    tags: ['Electronic', 'SoundCloud', 'Melodic', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/101742427&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'happy-runtime',
    title: 'Happy Runtime',
    category: Category.MUSIC,
    shortDescription: 'A cheerful and quirky electronic tune with playful melodies and a bouncy rhythm.',
    coverImage: 'https://image2url.com/images/1759839571931-77c6eea9-d661-435d-bf84-eb0eeacfe5f6.png',
    images: [],
    longDescription: `"Happy Runtime" is an upbeat and playful track from WobbleBoxx. It combines chiptune-inspired melodies with a driving electronic beat, resulting in a fun and energetic piece that feels both nostalgic and modern.`,
    releaseDate: '2017-10',
    tags: ['Electronic', 'SoundCloud', 'Chiptune', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/366658322&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'tempering',
    title: 'Tempering',
    category: Category.MUSIC,
    shortDescription: 'A darker, more experimental track that builds tension with intricate sound design.',
    coverImage: 'https://image2url.com/images/1759906122665-6f01d92e-3e3d-43e7-96da-de171849e5e3.jpg',
    images: [],
    longDescription: `"Tempering" showcases a more experimental side of WobbleBoxx. The track is built around a tense, evolving soundscape with metallic textures and a syncopated rhythm. It's a piece that focuses on atmosphere and intricate sound design, building slowly to a complex climax.`,
    releaseDate: '2017-10',
    tags: ['Electronic', 'SoundCloud', 'Experimental', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367166153&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: '3-elements',
    title: '3 Elements',
    category: Category.MUSIC,
    shortDescription: 'A dynamic composition that weaves together three distinct sonic ideas into a cohesive whole.',
    coverImage: 'https://image2url.com/images/1759906154878-2a151e65-13e6-49ab-a9cf-3036aca19408.jpeg',
    images: [],
    longDescription: `As the title suggests, "3 Elements" is a track built from three core sonic ideas that are introduced and developed throughout the piece. WobbleBoxx masterfully weaves these distinct melodies and rhythms together, creating a dynamic and progressive electronic composition.`,
    releaseDate: '2017-10',
    tags: ['Electronic', 'SoundCloud', 'Progressive', 'Wobbleboxx'],
    projectUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/367230194&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  },
  {
    id: 'level-up-power-up-coin-get',
    title: 'Level up, Power up, Coin get (13 Sounds)',
    category: Category.GAME,
    shortDescription: 'A free collection of 13 retro arcade sound effects released under CC0.',
    coverImage: "data:image/svg+xml,%3Csvg width='800' height='600' viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%231e293b' /%3E%3Cg transform='translate(400,300) scale(15)'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' fill='%2394a3b8' transform='translate(-12, -12)' /%3E%3C/g%3E%3Ctext x='50%25' y='85%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2394a3b8'%3ESound Effects%3C/text%3E%3C/svg%3E",
    images: [],
    longDescription: `On November 16, 2014, I created 13 sounds and submitted them to OpenGameArt.org under the CC0 license.
    
This pack contains retro-style sound effects suitable for arcade games, platformers, or any project needing classic audio feedback. The sounds cover common game events:
    
- Level Up
- Power Up
- Coin Pickup / Item Get
    
Since they are CC0 (Creative Commons Zero), you are free to use them in personal or commercial projects without any requirements for attribution. Enjoy!`,
    releaseDate: '2014-11',
    tags: ['Sound Effects', 'OpenGameArt', 'CC0', 'Retro', 'Game Assets'],
    projectUrl: 'https://opengameart.org/content/level-up-power-up-coin-get-13-sounds',
  }
];
