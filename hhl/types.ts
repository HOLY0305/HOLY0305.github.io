export enum Language {
  EN = 'EN',
  CN = 'CN'
}

export interface Material {
  type: 'image' | 'pdf' | 'link';
  url: string; // Path to file in public/assets or external URL
  title: string;
  thumbnail?: string; // Optional thumbnail for PDFs/Links
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description?: string;
  image?: string; // Main display image
  materials?: Material[]; // Folder of extra proofs
  category: 'Competition' | 'Scholarship' | 'Certification';
}

export interface Project {
  id: string;
  title: string;
  role?: string;
  period: string;
  description: string;
  techStack: string[];
  image?: string;
  demoLink?: string;
  materials?: Material[]; // Folder of extra proofs
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  category: 'internship' | 'campus'; // New field for filtering
  achievements?: string[];
  materials?: Material[]; // Folder of extra proofs (e.g. internship cert)
}

export interface EducationItem {
  school: string;
  major: string;
  degree: string;
  period: string;
  gpa?: string;
  courses?: string;
  honors?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  summary: string;
  skills: {
    category: string;
    items: string[];
  }[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
}

export interface ContentData {
  [Language.EN]: ProfileData;
  [Language.CN]: ProfileData;
}