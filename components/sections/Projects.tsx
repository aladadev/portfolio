import Link from 'next/link';

import { projects } from '@/data/projects';
import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface ProjectsProps {
  featuredOnly?: boolean;
  title?: string;
  description?: string;
}

function selectProjects(featuredOnly: boolean) {
  return featuredOnly ? projects.filter((project) => project.featured) : projects;
}

// This component renders project listings with an editorial section intro.
// WHY: The redesign needs the section to behave like a curated archive rather than a generic card grid.
export function Projects({
  featuredOnly = false,
  title,
  description
}: ProjectsProps): JSX.Element {
  const visibleProjects = selectProjects(featuredOnly);

  return (
    <section aria-label="Projects" className="section-space border-b border-line">
      <div className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <SectionLabel label={featuredOnly ? 'Work' : 'All Projects'} />
          <div className="space-y-4">
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
              {title ?? 'A curated collection of product work shaped by structure, motion, and restraint.'}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {description ??
                'These are the projects where I practiced the balance I care about most: solid architecture underneath, calm interface decisions on the surface.'}
            </p>
            {featuredOnly ? (
              <Link
                href="/projects"
                className="inline-flex text-sm font-medium text-ink hover:text-accent"
              >
                Browse the archive
              </Link>
            ) : null}
          </div>
        </div>

        <div className="space-y-6">
          {visibleProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
