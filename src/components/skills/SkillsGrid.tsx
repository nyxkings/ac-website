import { Tag } from "@/components/ui/Tag";
import {
  SKILL_LEVEL_LABELS,
  type Skill,
  type SkillGroup,
  type SkillLevel,
} from "@/types";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Boxes,
  Code2,
  Database,
  GitBranch,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const groupIcons: Record<string, LucideIcon> = {
  programming: Code2,
  "data-science": Boxes,
  visualization: BarChart3,
  database: Database,
  development: Wrench,
  devops: GitBranch,
};

const levelFill: Record<SkillLevel, number> = {
  familiar: 1,
  working: 2,
  core: 3,
};

function LevelDots({ level, name }: { level: SkillLevel; name: string }) {
  const filled = levelFill[level];
  return (
    <span
      className="inline-flex items-center gap-1"
      title={SKILL_LEVEL_LABELS[level]}
      aria-label={`${name}: ${SKILL_LEVEL_LABELS[level]}`}
    >
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            n <= filled ? "bg-accent" : "bg-line",
          )}
          aria-hidden
        />
      ))}
    </span>
  );
}

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-line py-2.5 last:border-0">
      <span className="flex items-center gap-2.5 text-sm text-ink">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-line bg-bg font-mono text-[10px] tracking-wide text-muted uppercase"
          aria-hidden
        >
          {skill.name.slice(0, 2)}
        </span>
        {skill.name}
      </span>
      <LevelDots level={skill.level} name={skill.name} />
    </li>
  );
}

export function SkillsGrid({
  groups,
  compact = false,
}: {
  groups: SkillGroup[];
  compact?: boolean;
}) {
  return (
    <div>
      {!compact ? (
        <div className="mb-8 flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-surface px-4 py-3 text-xs text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 sm:px-5">
          <span className="font-mono tracking-wide uppercase">Legend</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {(Object.keys(SKILL_LEVEL_LABELS) as SkillLevel[]).map((level) => (
              <span key={level} className="inline-flex items-center gap-2">
                <LevelDots level={level} name={SKILL_LEVEL_LABELS[level]} />
                {SKILL_LEVEL_LABELS[level]}
              </span>
            ))}
          </div>
          <span className="text-[11px] leading-snug sm:ml-auto sm:max-w-xs sm:text-right">
            Indicators show relative comfort — not years of experience or %
            mastery.
          </span>
        </div>
      ) : null}

      <div
        className={cn(
          "grid gap-5",
          compact ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {groups.map((group) => {
          const Icon = groupIcons[group.id] ?? Boxes;
          return (
            <section
              key={group.id}
              className="rounded-[var(--radius-card)] border border-line bg-surface p-5 sm:p-6"
              aria-labelledby={`skill-group-${group.id}`}
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-control)] border border-line text-accent">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <h3
                    id={`skill-group-${group.id}`}
                    className="font-display text-lg font-semibold text-ink"
                  >
                    {group.title}
                  </h3>
                  {group.description && !compact ? (
                    <p className="mt-1 text-sm text-muted">{group.description}</p>
                  ) : null}
                </div>
              </div>

              {compact ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill.name}>{skill.name}</Tag>
                  ))}
                </div>
              ) : (
                <ul className="mt-5">
                  {group.skills.map((skill) => (
                    <SkillRow key={skill.name} skill={skill} />
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
