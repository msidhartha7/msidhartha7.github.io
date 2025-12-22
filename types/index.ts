export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  status: 'completed' | 'in-progress' | 'idea';
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  image?: string;
  featured?: boolean;
  year?: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  status: 'reading' | 'completed' | 'want-to-read';
  rating?: number;
  review?: string;
  cover?: string;
  startedDate?: string;
  completedDate?: string;
  genre?: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'personal' | 'professional' | 'learning';
  status: 'not-started' | 'in-progress' | 'completed';
  progress?: number; // 0-100
  targetDate?: string;
  completedDate?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  techStack: string[];
  achievements?: string[];
  logo?: string;
}

export interface Travel {
  id: string;
  location: string;
  country: string;
  date: string;
  description: string;
  images: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  tags?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime?: number;
  content: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
