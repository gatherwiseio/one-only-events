type Props = {
  id: string;
  title: string;
  label?: string;
  align?: "center" | "start";
  /** `inherit`: title follows the section's text color, label uses the section's `--section-label`. */
  tone?: "light" | "dark" | "inherit";
  labelColor?: "accent" | "pink" | "light-gold";
  as?: "h1" | "h2";
};

const titleTone = { light: "text-ink", dark: "text-on-photo", inherit: "text-inherit" };

/** Every section's title (centered titles are left-aligned on phones): a large, light, tracked uppercase title with one label line under it. */
export function SectionHeading({ id, title, label, align = "center", tone = "light", labelColor = "accent", as: Tag = "h2" }: Props) {
  const alignment = align === "center" ? "items-start text-left md:items-center md:text-center" : "items-start text-left";
  const labelClass =
    tone === "inherit"
      ? "text-(--section-label)"
      : labelColor === "light-gold"
        ? "text-accent-on-dark"
        : tone === "dark"
          ? "text-on-photo"
          : labelColor === "pink"
            ? "text-pink"
            : "text-accent-label";
  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <Tag id={id} className={`font-display text-title font-normal uppercase ${titleTone[tone]}`}>
        {title}
      </Tag>
      {label ? <p className={`font-display text-label font-medium text-balance uppercase ${labelClass}`}>{label}</p> : null}
    </div>
  );
}
