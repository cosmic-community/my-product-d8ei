export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name?: string;
    description?: string;
    short_summary?: string;
    screenshot?: CosmicImage;
    tech_stack?: string;
    live_url?: string;
    github_url?: string;
    featured?: boolean;
  };
}

export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    skill_name?: string;
    category?: string;
    proficiency?: string;
    years_experience?: number;
  };
}

export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    job_title?: string;
    company?: string;
    company_logo?: CosmicImage;
    start_date?: string;
    end_date?: string;
    current?: boolean;
    description?: string;
    location?: string;
  };
}

export interface Profile extends CosmicObject {
  type: 'profile';
  metadata: {
    full_name?: string;
    job_title?: string;
    profile_photo?: CosmicImage;
    bio?: string;
    email?: string;
    location?: string;
    github_url?: string;
    linkedin_url?: string;
    twitter_url?: string;
    resume?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}