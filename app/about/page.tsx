import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface AboutPageProps {}

// This route renders the full about page with a page-specific header and the expanded story section.
// WHY: A dedicated page gives the personal narrative enough room to breathe without crowding the home screen.
export default function AboutPage({}: AboutPageProps): JSX.Element {
  return (
    <>
      <section aria-label="About page header" className="section-space border-b border-line pt-10">
        <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <SectionLabel label="About" />
          <div className="space-y-5">
            <h1 className="font-serif text-5xl leading-tight text-ink sm:text-6xl">
              The path from Flutter experiments to product-minded frontends.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
              A closer look at how I work, what I care about, and the milestones
              that shaped the way I build.
            </p>
          </div>
        </div>
      </section>
      <About variant="page" />
      <Contact />
    </>
  );
}
