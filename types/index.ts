// This file defines the shared TypeScript contracts used by components and data modules.
// WHY: Centralized interfaces make the data layer predictable and help components stay focused on rendering.
export interface NavigationItem {
  label: string;
  href: string;
}

// This interface models a social or contact link shown in the footer and contact areas.
// WHY: A shared shape lets the UI map over links without special-case logic.
export interface SocialLink {
  label: string;
  href: string;
}

// This interface models a single timeline entry for the about page.
// WHY: Keeping timeline content typed makes editorial sections easier to extend safely.
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

// This interface models a personality detail or fun fact.
// WHY: Separate fun-fact objects keep the content flexible and reusable in different layouts.
export interface FunFact {
  id: string;
  label: string;
  value: string;
}

// This interface models a media tile used in the editorial gallery sections.
// WHY: Treating gallery content as data keeps visual storytelling configurable instead of hardcoded into JSX.
export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
}

// This interface models a project card and the project detail grid.
// WHY: Typed project data keeps the /data layer as the single source of truth for portfolio entries.
export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  tech: string[];
  thumbnail: string;
  github: string;
  live: string | null;
  featured: boolean;
}

// This interface models one skill badge and its grouping category.
// WHY: Category-aware skill data lets the UI render grouped badges without hardcoding layout logic.
export interface Skill {
  id: string;
  name: string;
  category: string;
}

// This interface models the main profile content that powers the site.
// WHY: Moving personal content into data keeps components generic and easier to maintain.
export interface SiteProfile {
  name: string;
  role: string;
  currentFocus: string;
  headline: string;
  tagline: string;
  location: string;
  coordinates: string;
  email: string;
  availability: string;
  intro: string;
  portrait: string;
  seoDescription: string;
  longBio: string[];
  funFacts: FunFact[];
  gallery: GalleryItem[];
  timeline: TimelineItem[];
  workedWith: string[];
  updatedOn: string;
  navigation: NavigationItem[];
  socials: SocialLink[];
  ctaPrimary: NavigationItem;
  ctaSecondary: NavigationItem;
}
