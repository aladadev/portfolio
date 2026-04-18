import type { Skill } from '@/types';

// This array defines the skill badges shown on the home page.
// WHY: Skill groupings belong to data because categories may evolve independently from the layout.
export const skills: Skill[] = [
  { id: '1', name: 'Flutter', category: 'Core Mobile' },
  { id: '2', name: 'Dart', category: 'Core Mobile' },
  { id: '3', name: 'Riverpod', category: 'State & Architecture' },
  { id: '4', name: 'Bloc', category: 'State & Architecture' },
  { id: '5', name: 'Clean Architecture', category: 'State & Architecture' },
  { id: '6', name: 'Firebase', category: 'Data & Services' },
  { id: '7', name: 'Supabase', category: 'Data & Services' },
  { id: '8', name: 'REST APIs', category: 'Data & Services' },
  { id: '9', name: 'Next.js', category: 'Web & Design Systems' },
  { id: '10', name: 'TypeScript', category: 'Web & Design Systems' },
  { id: '11', name: 'Tailwind CSS', category: 'Web & Design Systems' },
  { id: '12', name: 'Framer Motion', category: 'Web & Design Systems' }
];
