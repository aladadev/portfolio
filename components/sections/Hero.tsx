'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface HeroProps {}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// This component renders the landing section with editorial metadata, intro copy, and portrait.
// WHY: The reference site leads with a strong personal introduction framed by compact metadata rather than a centered hero card.
export function Hero({}: HeroProps): JSX.Element {
  return (
    <section className="section-space border-b border-line pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_22rem]"
      >
        <div className="space-y-10">
          <motion.div
            variants={itemVariants}
            className="grid gap-6 border-b border-line pb-8 sm:grid-cols-2"
          >
            <div>
              <SectionLabel label="Home" />
              <p className="mt-4 text-xs uppercase tracking-role text-muted">
                {profile.role}
              </p>
            </div>
            <div className="space-y-2 text-sm leading-7 text-muted">
              <p>{profile.currentFocus}</p>
              <p>{profile.location}</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-role text-accent"
            >
              Currently available for thoughtful product work
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="max-w-4xl font-serif text-5xl leading-[1.02] text-ink sm:text-6xl xl:text-7xl"
            >
              {profile.headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-3xl text-lg leading-8 text-muted sm:text-xl"
            >
              {profile.tagline}
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href={profile.ctaPrimary.href}>{profile.ctaPrimary.label}</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Email Me
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-[11px] uppercase tracking-eyebrow text-muted">
              Domains I&apos;ve Worked In
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.workedWith.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-4 py-2 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="surface-panel h-fit overflow-hidden shadow-editorial"
        >
          <div className="border-b border-line px-5 py-4">
            <p className="text-[11px] uppercase tracking-eyebrow text-muted">
              Portrait
            </p>
          </div>
          <div className="p-4">
            <Image
              src={profile.portrait}
              alt={`Portrait illustration of ${profile.name}`}
              width={900}
              height={1100}
              priority
              className="h-auto w-full rounded-panel object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
