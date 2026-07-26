export type Lang = 'EN' | 'HI' | 'KN' | 'MR';

export interface Project {
  id: string;
  title: Record<Lang, string>;
  category: 'health' | 'protection' | 'education' | 'emergency';
  location: Record<Lang, string>;
  image: string;
  images?: string[]; // Multiple images for slideshow
  description: Record<Lang, string>;
  goal: number;
  raised: number;
  impactLabel: Record<Lang, string>;
}

export interface NewsItem {
  id: string;
  title: Record<Lang, string>;
  date: string;
  category: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string>;
  image: string;
}

export interface EventItem {
  id: string;
  title: Record<Lang, string>;
  date: string;
  location: Record<Lang, string>;
  time: string;
  type: Record<Lang, string>;
}

export interface TestimonialItem {
  id: string;
  quote: Record<Lang, string>;
  author: string;
  role: Record<Lang, string>;
  location: Record<Lang, string>;
  image: string;
}

export interface CommitteeMember {
  id: string;
  name: Record<Lang, string>;
  role: Record<Lang, string>;
  subtitle?: Record<Lang, string>;
  cell?: string;
  category: 'executive' | 'founder' | 'trustee' | 'invitee';
}

