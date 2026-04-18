interface SectionLabelProps {
  label: string;
}

// This component renders the small editorial eyebrow label used at the top of sections.
// WHY: Repeating this pattern across pages creates rhythm and helps people scan the layout faster.
export function SectionLabel({ label }: SectionLabelProps): JSX.Element {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-eyebrow text-muted">
      <span className="h-px w-10 bg-accentSoft" aria-hidden="true" />
      {label}
    </span>
  );
}
