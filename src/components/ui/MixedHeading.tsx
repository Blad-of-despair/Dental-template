type TextPart = { part: string; type: "sans" | "serif" };

interface MixedHeadingProps {
  parts: TextPart[];
  className?: string;
}

export const MixedHeading: React.FC<MixedHeadingProps> = ({ parts, className }) => (
  <h1 className={["sans", className].filter(Boolean).join(" ")}>
    {parts.map((p, i) => (
      <span key={i} className={p.type === "serif" ? "serif italic" : "sans font-medium tracking-tight"}>
        {p.part}
        {i < parts.length - 1 && " "}
      </span>
    ))}
  </h1>
);
