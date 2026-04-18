interface BadgeProps {
  label: string;
  tone?: 'default' | 'accent' | 'muted';
}

// This helper maps badge tones to their visual style.
// WHY: Shared tone rules make small metadata elements feel intentional instead of inconsistent.
function getToneStyles(tone: NonNullable<BadgeProps['tone']>): string {
  if (tone === 'accent') {
    return 'border-accentSoft/60 bg-accent/10 text-accent';
  }

  if (tone === 'muted') {
    return 'border-line bg-paper text-muted';
  }

  return 'border-line bg-card text-ink';
}

// This component renders compact pill badges for tech stacks and skill labels.
// WHY: Small, reusable metadata components keep dense UI readable and consistent.
// FLUTTER DEV NOTE: Think of this like a small custom Chip widget you can reuse across different screens.
export function Badge({
  label,
  tone = 'default'
}: BadgeProps): JSX.Element {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-meta ${getToneStyles(
        tone
      )}`}
    >
      {label}
    </span>
  );
}
