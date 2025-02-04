export interface Resume {
  selectedTemplate: number;
  headings: Headings;
  basics: Basics;
  education: Education[];
  work: Work[];
  skills: Skill[];
  projects: Project[];
  awards: Award[];
  sections: string[];
}

export interface Headings {
  work: string;
  education: string;
  skills: string;
  projects: string;
  awards: string;
}

export interface Basics {
  name: string;
  email: string;
  phone: string;
  website: string;
  location: Location;
}

export interface Location {
  address: string;
}

export interface Education {
  institution: string;
  location: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Work {
  company: string;
  location: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

export interface Project {
  name: string;
  description: string;
  url: string;
  keywords: string[];
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}
