export enum Category {
  GAME = 'Game Development',
  MUSIC = 'Original Music',
  WRITING = 'Creative Writing',
  OTHER = 'Miscellaneous'
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  shortDescription: string;
  coverImage?: string;
  images: string[];
  longDescription: string;
  releaseDate: string;
  tags: string[];
  projectUrl?: string;
}
