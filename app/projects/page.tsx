import { Contact } from '@/components/sections/Contact';
import { Projects } from '@/components/sections/Projects';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface ProjectsPageProps {}

// This route renders the full project archive page.
// WHY: Separating the archive from the home page keeps the landing experience focused while still exposing the full body of work.
export default function ProjectsPage({}: ProjectsPageProps): JSX.Element {
  return (
    <>
      <section aria-label="Projects page header" className="section-space border-b border-line pt-10">
        <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <SectionLabel label="Projects" />
          <div className="space-y-5">
            <h1 className="font-serif text-5xl leading-tight text-ink sm:text-6xl">
              A growing library of Flutter-first product work.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
              These projects span fintech, productivity, logistics, and internal
              tools, each shaped by the same attention to architecture and calm user
              experience.
            </p>
          </div>
        </div>
      </section>
      <Projects
        title="A complete archive of projects across mobile product work, tooling, and experiments."
        description="Each entry reflects the same underlying bias toward clarity: cleaner state boundaries, calmer visual hierarchy, and fewer noisy decisions."
      />
      <Contact />
    </>
  );
}
