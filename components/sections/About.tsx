import Image from 'next/image';
import Link from 'next/link';

import { profile } from '@/data/profile';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface AboutProps {
  variant?: 'home' | 'page';
}

// This component renders the personal story section in short and long forms.
// WHY: The reference site gives the story real breathing room, so this section is structured more like editorial content than a sidebar bio.
export function About({
  variant = 'home'
}: AboutProps): JSX.Element {
  const isFullPage = variant === 'page';

  return (
    <section aria-label="About" className="section-space border-b border-line">
      <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <SectionLabel label={isFullPage ? 'About' : 'Where It All Started'} />

        <div className="space-y-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="space-y-5">
              <h2 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Building digital products with the same care I want to feel as a user.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
                {profile.intro}
              </p>
            </div>

            <div className="surface-panel overflow-hidden">
              <Image
                src={profile.portrait}
                alt={`Editorial portrait of ${profile.name}`}
                width={960}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            {profile.longBio
              .slice(0, isFullPage ? profile.longBio.length : 2)
              .map((paragraph) => (
                <p key={paragraph} className="max-w-3xl text-base leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {profile.funFacts.map((fact) => (
              <article key={fact.id} className="surface-panel p-5">
                <p className="text-[11px] uppercase tracking-eyebrow text-muted">
                  {fact.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-ink">{fact.value}</p>
              </article>
            ))}
          </div>

          {isFullPage ? (
            <div className="space-y-6">
              <SectionLabel label="Timeline" />
              {profile.timeline.map((item) => (
                <article
                  key={item.year}
                  className="grid gap-3 border-t border-line py-5 sm:grid-cols-[7rem_minmax(0,1fr)]"
                >
                  <p className="text-sm text-muted">{item.year}</p>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                    <p className="text-sm leading-7 text-muted sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <Link
              href="/about"
              className="inline-flex text-sm font-medium text-ink hover:text-accent"
            >
              Read the full story
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
