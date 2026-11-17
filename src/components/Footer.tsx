import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinic, footer } from "../data/yashoda";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => (
  <footer className="bg-charcoal text-white px-6 pt-24 md:pt-32 pb-10">
    <div className="container relative overflow-hidden">
      {/* Huge faded wordmark */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-5">
        <span
          className="sans text-[160px] md:text-[220px] font-light tracking-[0.2em] uppercase text-white"
          style={{ letterSpacing: "0.2em" }}
        >
          {clinic.nameDisplay}
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20">
        <div className="col-span-2 md:col-span-1">
          <div className="sans text-xs font-light tracking-[0.15em] uppercase text-white/70 mb-4">
            {clinic.name}
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-[260px]">
            {footer.description}
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href={clinic.links.justdial}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors focus-visible-ring"
              aria-label="Justdial"
            >
              J
            </a>
            <a
              href={clinic.links.magicpin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors focus-visible-ring"
              aria-label="Magicpin"
            >
              M
            </a>
          </div>
        </div>

        <LinkColumn title="Quick links" links={footer.quickLinks} />
        <LinkColumn title="Services" links={footer.servicesLinks} />
        <ContactColumn />
      </div>

      <div className="border-t border-white/10 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <span>&copy; {CURRENT_YEAR} {clinic.nameDisplay}. All rights reserved.</span>
        <a href="#privacy" className="hover:text-white transition-colors focus-visible-ring">
          {footer.privacy}
        </a>
      </div>
    </div>
  </footer>
);

const LinkColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div className="flex flex-col gap-2">
    <span className="text-xs font-medium uppercase tracking-wider text-white/80 mb-2">{title}</span>
    {links.map((l) => (
      <a
        key={l}
        href="#"
        className="text-sm text-white/60 hover:text-white transition-colors focus-visible-ring"
      >
        {l}
      </a>
    ))}
  </div>
);

const ContactColumn: React.FC = () => (
  <div className="flex flex-col gap-3">
    <span className="text-xs font-medium uppercase tracking-wider text-white/80 mb-2">{footer.contactLabel}</span>
    <ContactRow Icon={MapPin} text={clinic.address} />
    <ContactRow Icon={Phone} text={`tel:${clinic.phone}`} label={clinic.phone} />
    <ContactRow Icon={Phone} text={`tel:${clinic.phoneAlt}`} label={clinic.phoneAlt} />
    <ContactRow Icon={Mail} text={`mailto:${clinic.email}`} label={clinic.email} />
    <ContactRow Icon={Clock} text={`${clinic.hours.morning} | ${clinic.hours.evening}`} />
    <ContactRow Icon={Clock} text={clinic.hours.sunday} className="text-white/50" />
  </div>
);

const ContactRow: React.FC<{ Icon: React.ElementType; text: string; label?: string; className?: string }> = ({
  Icon,
  text,
  label,
  className,
}) => (
  <a
    href={text.startsWith("http") || text.startsWith("tel") || text.startsWith("mailto") ? text : "#"}
    className={["flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors focus-visible-ring", className].join(" ")}
  >
    <Icon size={14} strokeWidth={1.5} />
    <span>{label || text}</span>
  </a>
);
