export interface SectionLabelProps {
  children: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => (
  <span className="section-label">{children}</span>
);


