import { profile } from '@/data/profile';

interface FooterProps {
  currentYear: number;
}

// This component renders the closing site metadata block.
// WHY: The reference design ends with compact studio metadata rather than a conventional wide footer, so the footer now mirrors that rhythm.
export function Footer({ currentYear }: FooterProps): JSX.Element {
  return (
    <footer aria-label="Footer" className="border-t border-line py-10">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-muted">
            Designed For
          </p>
          <p className="mt-3 text-sm text-ink">Thoughtful digital products</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-muted">
            Built With
          </p>
          <p className="mt-3 text-sm text-ink">Next.js, TypeScript, Tailwind</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-muted">
            Updated On
          </p>
          <p className="mt-3 text-sm text-ink">{profile.updatedOn}</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-muted">
            Copyright
          </p>
          <p className="mt-3 text-sm text-ink">
            © {currentYear} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
