type Props = {
  id: string;
  title: string;
  label?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
  labelColor?: "accent" | "pink";
  as?: "h1" | "h2";
};

/** Every section's title: a large, light, tracked uppercase title with one label line under it. */
export function SectionHeading({ id, title, label, align = "center", tone = "light", labelColor = "accent", as: Tag = "h2" }: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const labelClass = tone === "dark" ? "text-on-photo" : labelColor === "pink" ? "text-pink" : "text-accent-label";
  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <Tag id={id} className={`font-display text-title font-light uppercase ${tone === "dark" ? "text-on-photo" : "text-ink"}`}>
        {title}
      </Tag>
      {label ? <p className={`font-display text-label font-medium uppercase ${labelClass}`}>{label}</p> : null}
    </div>
  );
}
