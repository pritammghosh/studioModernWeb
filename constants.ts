import { Project, ProcessStep, Service, Metric, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const BELIEF_STATEMENTS = [
  "Design is a business tool.",
  "Technology should reduce friction.",
  "Products must justify their existence."
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'SaaS Platform',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Redefining financial clarity for enterprise users.'
  },
  {
    id: '2',
    title: 'Lumina Health',
    category: 'Mobile Application',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Patient-centric care coordination at scale.'
  },
  {
    id: '3',
    title: 'Arkitekt',
    category: 'E-Commerce',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Minimalist architecture supplies for the modern builder.'
  },
  {
    id: '4',
    title: 'Nexus Logistics',
    category: 'Web App',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Real-time supply chain visualization.'
  },
  {
    id: '5',
    title: 'Vanguard Audio',
    category: 'Brand Site',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Immersive auditory web experience.'
  },
  {
    id: '6',
    title: 'Elevate',
    category: 'Product Design',
    image: 'https://picsum.photos/800/600?random=6',
    description: 'Next-gen productivity tools for remote teams.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business model, audience, and market constraints.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'define',
    number: '02',
    title: 'Define',
    description: 'Translating raw insights into a clear, actionable product strategy.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    description: 'Creating systems, not just screens. Scalable UI/UX that builds trust.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'build',
    number: '04',
    title: 'Build',
    description: 'Engineering robust frontend and backend solutions that scale.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Product Strategy',
    description: 'Market analysis, MVP definition, and roadmap planning.',
    icon: 'strategy'
  },
  {
    title: 'UX/UI Design',
    description: 'Design systems, prototyping, and high-fidelity interfaces.',
    icon: 'design'
  },
  {
    title: 'Engineering',
    description: 'Full-stack development using modern React and Node architectures.',
    icon: 'code'
  },
  {
    title: 'Growth & Scale',
    description: 'Performance optimization and conversion rate engineering.',
    icon: 'scale'
  }
];

export const METRICS: Metric[] = [
  { label: 'Projects Shipped', value: '150', suffix: '+' },
  { label: 'Client Valuation', value: '$2B', suffix: '+' },
  { label: 'Years Experience', value: '12' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Studio transformed our vague concept into a market-leading product in under 12 weeks. Their strategic depth is unmatched.",
    author: "Alex V.",
    role: "Founder",
    company: "FinTech Global"
  },
  {
    id: '2',
    quote: "The level of craft and attention to detail they bring is rare. They didn't just build what we asked for, they built what we needed.",
    author: "Sarah J.",
    role: "VP of Product",
    company: "Lumina Health"
  },
  {
    id: '3',
    quote: "A true partner in every sense. They navigated complex technical constraints while delivering a world-class user experience.",
    author: "David L.",
    role: "CTO",
    company: "Arkitekt"
  }
];