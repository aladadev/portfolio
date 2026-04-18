'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface CardProps {
  project: Project;
}

// This component renders a wide editorial project row with image, metadata, and actions.
// WHY: The redesign moves away from symmetric card grids toward more portfolio-like project listings.
export function Card({ project }: CardProps): JSX.Element {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="surface-panel overflow-hidden"
    >
      <div className="grid gap-0 xl:grid-cols-[18rem_minmax(0,1fr)]">
        <div className="border-b border-line xl:border-b-0 xl:border-r">
          <Image
            src={project.thumbnail}
            alt={`${project.title} project thumbnail`}
            width={1200}
            height={900}
            className="h-64 w-full object-cover xl:h-full"
          />
        </div>

        <div className="p-6 sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[8rem_minmax(0,1fr)]">
            <div className="space-y-3 text-sm text-muted">
              <p>{project.year}</p>
              <Badge label={project.category} tone="accent" />
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  {project.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <Badge key={item} label={item} tone="muted" />
                ))}
              </div>

              <div className="flex flex-wrap gap-5 text-sm font-medium text-ink">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                  View GitHub
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    Open Live Site
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
