import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}

// This helper returns the Tailwind classes for each button variant.
// WHY: Variant logic belongs in one place so buttons stay visually consistent as the site grows.
function getVariantStyles(variant: NonNullable<ButtonProps['variant']>): string {
  if (variant === 'secondary') {
    return 'border border-line bg-transparent text-ink hover:border-accent hover:text-accent';
  }

  if (variant === 'ghost') {
    return 'border border-transparent bg-transparent text-muted hover:text-accent';
  }

  return 'border border-accent bg-accent text-obsidian hover:border-ink hover:bg-ink hover:text-obsidian';
}

// This helper decides when the button should render an anchor element instead of a Next.js Link.
// WHY: External destinations and mail links should preserve native browser behavior, while internal routes should use client-side navigation.
function isExternalHref(href: string): boolean {
  return href.startsWith('http') || href.startsWith('mailto:');
}

// This component renders reusable CTA links with shared styling.
// WHY: Centralizing buttons avoids duplicated markup and makes hierarchy choices explicit.
// FLUTTER DEV NOTE: This is like a StatelessWidget. It receives props like widget constructor parameters and renders UI from them.
// React components re-render when props change, similar to Flutter rebuilding widgets with new inputs.
export function Button({
  href,
  children,
  variant = 'primary'
}: ButtonProps): JSX.Element {
  // FLUTTER DEV NOTE: Tailwind classes are utility tokens, similar to composing padding, color, radius, and text style values directly in Flutter widgets.
  // WHY: Keeping these classes beside the markup makes layout and responsive behavior easier to read without jumping to another stylesheet.
  const className = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-button transition-all duration-300 ${getVariantStyles(
    variant
  )}`;

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
