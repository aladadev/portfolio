import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface ContactProps {
  variant?: 'teaser' | 'full';
}

// This component renders the closing contact block with compact editorial spacing.
// WHY: The last section should feel like a direct invitation, not a generic marketing CTA.
export function Contact({
  variant = 'full'
}: ContactProps): JSX.Element {
  const isTeaser = variant === 'teaser';

  return (
    <section aria-label="Contact" id="contact" className="section-space">
      <div className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <SectionLabel label="Contact" />

        <div className="space-y-5">
          {isTeaser ? (
            <>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                If your next product needs calmer structure and sharper interface decisions,
                let&apos;s talk.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                The best work usually starts with a clear note about what feels rough,
                what already works, and what needs to become more coherent.
              </p>
            </>
          ) : (
            <>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Building something thoughtful?
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                I&apos;m especially interested in product work where architecture, motion,
                and interface tone all matter at the same time.
              </p>
            </>
          )}

          <div className="flex flex-wrap items-center gap-4">
            <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
            <p className="text-sm text-muted">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
