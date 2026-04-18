'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { profile } from '@/data/profile';

interface NavbarProps {
  email: string;
}

// This component renders the primary site rail, collapsing into a compact header on smaller screens.
// WHY: The left-side editorial rail is one of the biggest structural shifts in the redesign, so it belongs in one shared component.
export function Navbar({ email }: NavbarProps): JSX.Element {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="lg:sticky lg:top-8 lg:h-fit"
    >
      <div className="surface-panel overflow-hidden">
        <div className="border-b border-line px-5 py-5 sm:px-6">
          <div className="flex items-start justify-between gap-4 lg:block">
            <div className="space-y-2">
              <Link href="/" className="inline-block font-serif text-2xl text-ink">
                {profile.name}
              </Link>
              <div className="space-y-1 text-xs uppercase tracking-section text-muted">
                <p>{profile.role}</p>
                <p>{profile.coordinates}</p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex rounded-full border border-line px-4 py-2 text-xs uppercase tracking-section text-ink lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} px-5 py-5 sm:px-6 lg:block`}>
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-eyebrow text-muted">
                Creations
              </p>
              <nav aria-label="Primary navigation" className="space-y-2">
                {profile.navigation.map((item) => {
                  const isContactLink = item.href.includes('#contact');
                  const targetPath = isContactLink ? '/' : item.href;
                  const isActive =
                    !isContactLink &&
                    (targetPath === '/' ? pathname === '/' : pathname.startsWith(targetPath));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block text-sm ${
                        isActive ? 'text-ink' : 'text-muted'
                      } hover:text-accent`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-eyebrow text-muted">
                Socials
              </p>
              <div className="space-y-2 text-sm">
                {profile.socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="block text-muted hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 border-t border-line pt-5">
              <p className="text-[11px] uppercase tracking-eyebrow text-muted">
                Contact
              </p>
              <p className="text-sm leading-7 text-muted">{profile.location}</p>
              <a
                href={`mailto:${email}`}
                className="inline-flex rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
