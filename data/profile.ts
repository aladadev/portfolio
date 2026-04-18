import type { SiteProfile } from '@/types';

// This profile object stores all personal content in one place instead of hardcoding it in components.
// WHY: Separating content from presentation mirrors clean architecture boundaries and makes personalization straightforward.
export const profile: SiteProfile = {
  name: 'Arefin Kabir',
  role: 'Flutter Developer',
  currentFocus: 'Designing and building product interfaces with Flutter while learning the web seriously.',
  headline: "Hey, I'm Arefin!",
  tagline:
    'I design and build thoughtful digital products with Flutter, a strong sense of rhythm, and a soft spot for calm interfaces.',
  location: 'Dhaka, Bangladesh',
  coordinates: '23.8041° N, 90.4152° E',
  email: 'hello@arefinkabir.dev',
  availability: 'Currently available for work',
  intro:
    'A Bangladesh-based Flutter developer who enjoys turning product ideas into mobile experiences that feel warm, stable, and genuinely human.',
  portrait: '/images/portrait.svg',
  seoDescription:
    'Personal portfolio of Arefin Kabir, a Flutter developer from Dhaka building warm, polished, and performant digital products.',
  longBio: [
    'I first found Flutter because I loved the idea of one codebase delivering the same care across multiple platforms. That quickly turned into a deeper curiosity about systems, motion, and the small product details that make software feel trustworthy.',
    'Since then I have focused on building mobile-first experiences with clear architecture, reliable state management, and UI that feels editorial instead of mechanical. I care about pacing, whitespace, and interfaces that speak like a real person.',
    'Lately I have been translating that same mindset into the web, using React and Next.js with the same discipline I bring to Flutter: component boundaries, shared design tokens, and code that teaches through its structure.'
  ],
  funFacts: [
    {
      id: '1',
      label: 'Default Focus',
      value: 'Flutter architecture, product UI, and motion that supports the story.'
    },
    {
      id: '2',
      label: 'Weekend Ritual',
      value: 'Walking through Dhaka with a camera and saving visual references for future interfaces.'
    },
    {
      id: '3',
      label: 'Favorite Build Phase',
      value: 'Turning a rough flow into a polished final screen with better hierarchy and better words.'
    }
  ],
  gallery: [
    {
      id: '1',
      title: 'FinFlow',
      caption: 'A warmer take on finance tooling.',
      src: '/images/finflow.svg',
      alt: 'FinFlow interface illustration'
    },
    {
      id: '2',
      title: 'Monsoon Notes',
      caption: 'Quiet productivity with room to breathe.',
      src: '/images/monsoon-notes.svg',
      alt: 'Monsoon Notes interface illustration'
    },
    {
      id: '3',
      title: 'Harbor Admin',
      caption: 'Operational clarity for busy teams.',
      src: '/images/harbor-admin.svg',
      alt: 'Harbor Admin interface illustration'
    },
    {
      id: '4',
      title: 'Atlas Courier',
      caption: 'Tracking and handoff moments for logistics.',
      src: '/images/atlas-courier.svg',
      alt: 'Atlas Courier interface illustration'
    }
  ],
  timeline: [
    {
      year: '2021',
      title: 'Started building with Flutter',
      description:
        'Began with small productivity apps and quickly moved into reusable component systems and Riverpod-driven state management.'
    },
    {
      year: '2023',
      title: 'Shipped client work across fintech and internal tools',
      description:
        'Worked on apps where reliability, onboarding clarity, and maintainable structure mattered as much as the visuals.'
    },
    {
      year: '2024',
      title: 'Expanded into web with Next.js',
      description:
        'Started translating Flutter design instincts into modern web frontends with strong motion, semantics, and static deployment flows.'
    }
  ],
  workedWith: ['Fintech', 'Dashboards', 'Logistics', 'Productivity'],
  updatedOn: "April '26",
  navigation: [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'Contact',
      href: '/#contact'
    }
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/arefinkabir'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/arefinkabir'
    },
    {
      label: 'Email',
      href: 'mailto:hello@arefinkabir.dev'
    }
  ],
  ctaPrimary: {
    label: 'See My Work',
    href: '/projects'
  },
  ctaSecondary: {
    label: "Let's Talk",
    href: '#contact'
  }
};
