export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "QA & Testing"
  | "Test Automation"
  | "Programming"
  | "Tools & Platforms"
  | "Methodologies";

export interface Experience {
  company: string;
  url?: string;
  role: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  achievement?: string;
  techStack?: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  url?: string;
}

export interface Education {
  institution: string;
  url?: string;
  degree: string;
  startYear: string;
  endYear: string;
  gpa?: string;
  location: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface UIStrings {
  hiIm: string;
  downloadCV: string;
  getInTouch: string;
  resume: string;
  aboutHeading: string;
  skillsHeading: string;
  skillCategories: Record<SkillCategory, string>;
  experienceHeading: string;
  educationHeading: string;
  certAndEduHeading: string;
  certHeading: string;
  eduHeading: string;
  contactHeading: string;
  contactSubtext: string;
  emailLabel: string;
  phoneLabel: string;
  viewProfile: string;
  allRightsReserved: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formNamePlaceholder: string;
  formEmailPlaceholder: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formSending: string;
  formSuccess: string;
  formError: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  email: string;
  phone: string;
  navLinks: NavLink[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  socialLinks: SocialLink[];
  ui: UIStrings;
}
