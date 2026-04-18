import Image from 'next/image';

import { profile } from '@/data/profile';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface GalleryProps {}

// This component renders a compact visual gallery inspired by the reference site's creative section.
// WHY: A portfolio benefits from visual breathing room between dense text sections.
export function Gallery({}: GalleryProps): JSX.Element {
  return (
    <section aria-label="Visual notes" className="section-space border-b border-line">
      <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <SectionLabel label="Visual Notes" />

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
              An experimental strip for the interfaces and moods behind the work.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
              These images are not case studies. They are fragments of the kind of
              visual tone, surface treatment, and pacing I keep returning to.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {profile.gallery.map((item) => (
              <article key={item.id} className="surface-panel overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="h-56 w-full object-cover"
                />
                <div className="space-y-2 p-5">
                  <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
