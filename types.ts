
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  url?: string;
  doi?: string;
  category?: string;
  description?: string;
  topic?: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface TeachingCourse {
  id: string;
  code: string;
  title: string;
  role: string;
  semester: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'Twitter' | 'Linkedin' | 'BookOpen' | 'GraduationCap' | 'Mail'; 
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category?: string;
  description: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  type: 'internal' | 'external'; // New field to distinguish post types
  slug?: string;     // Required for internal posts (url friendly name)
  content?: string;  // Required for internal posts (supports HTML)
  url?: string;      // Required for external posts
  imageUrl?: string;
  tags?: string[];
}
