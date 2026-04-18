import { skills } from '@/data/skills';
import { Badge } from '@/components/ui/Badge';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface SkillsProps {}

function groupSkills(): Record<string, string[]> {
  return skills.reduce<Record<string, string[]>>((groups, skill) => {
    const existingGroup = groups[skill.category] ?? [];
    groups[skill.category] = [...existingGroup, skill.name];
    return groups;
  }, {});
}

// This component renders the capability section as grouped editorial lists.
// WHY: The reference design uses quiet metadata blocks rather than loud technology walls.
export function Skills({}: SkillsProps): JSX.Element {
  const groupedSkills = groupSkills();

  return (
    <section aria-label="Skills" className="section-space border-b border-line">
      <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <SectionLabel label="Toolkit" />

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
              The systems underneath the interface.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
              I work best when product thinking, naming, state boundaries, and visual
              rhythm all support each other instead of competing for attention.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {Object.entries(groupedSkills).map(([category, items]) => (
              <article key={category} className="surface-panel p-6">
                <p className="text-[11px] uppercase tracking-eyebrow text-muted">
                  {category}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {items.map((item) => (
                    <Badge key={item} label={item} tone="muted" />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
