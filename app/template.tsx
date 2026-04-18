'use client';

import { motion } from 'framer-motion';

interface TemplateProps {
  children: React.ReactNode;
}

// This template adds a subtle page transition between App Router navigations.
// WHY: Templates re-render on route change, which makes them a clean place to attach page-level motion.
export default function Template({
  children
}: TemplateProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
