"use client";

type SectionHeaderProps = {
  index: string;              // "02"
  meta: string;               // "Work"
  title: string;              // "Projects"
  subtitle?: string;          // "Selected client work & own products"
  description?: string;       // optional paragraph
};

export default function SectionHeader({
  index,
  meta,
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {index} • {meta}
          </span>

          <div className="flex items-baseline gap-3">
            <h2 className="font-baumans text-4xl md:text-5xl tracking-widest leading-none">
              {title}
            </h2>

            <span className="hidden md:block h-px flex-1 bg-border" />
          </div>
        </div>

        {/* Right side */}
        {subtitle && (
          <p className="hidden md:block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      {description && (
        <p className="text-sm text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
