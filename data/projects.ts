import type { Project } from '@/types';

// This array is the single source of truth for project cards and the projects page.
// WHY: Adding a new project should mean editing data, not touching UI code in multiple places.
export const projects: Project[] = [
  {
    id: '1',
    title: 'FinFlow',
    year: '2024',
    category: 'Mobile App',
    description:
      'A calm digital banking experience built with Flutter and Firebase, focused on trust-building details, transaction clarity, and lightweight budgeting.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    thumbnail: '/images/finflow.svg',
    github: 'https://github.com/arefinkabir/finflow',
    live: null,
    featured: true
  },
  {
    id: '2',
    title: 'Monsoon Notes',
    year: '2024',
    category: 'Productivity App',
    description:
      'A note-taking workspace for journaling, sketches, and quick capture, with offline-first storage and a serene reading-focused interface.',
    tech: ['Flutter', 'Hive', 'Bloc', 'Figma'],
    thumbnail: '/images/monsoon-notes.svg',
    github: 'https://github.com/arefinkabir/monsoon-notes',
    live: 'https://arefinkabir.github.io/monsoon-notes',
    featured: true
  },
  {
    id: '3',
    title: 'Harbor Admin',
    year: '2023',
    category: 'Operations Dashboard',
    description:
      'An internal operations dashboard with cross-team reporting, approval flows, and cleaner information hierarchy for busy support teams.',
    tech: ['Flutter', 'Dart', 'Supabase', 'GoRouter'],
    thumbnail: '/images/harbor-admin.svg',
    github: 'https://github.com/arefinkabir/harbor-admin',
    live: null,
    featured: true
  },
  {
    id: '4',
    title: 'Atlas Courier',
    year: '2023',
    category: 'Logistics App',
    description:
      'A delivery tracking app that simplified route visibility, status updates, and driver handoff moments for small logistics teams.',
    tech: ['Flutter', 'Mapbox', 'REST API', 'Provider'],
    thumbnail: '/images/atlas-courier.svg',
    github: 'https://github.com/arefinkabir/atlas-courier',
    live: null,
    featured: false
  }
];
