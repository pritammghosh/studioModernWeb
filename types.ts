export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: 'strategy' | 'design' | 'code' | 'scale';
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}