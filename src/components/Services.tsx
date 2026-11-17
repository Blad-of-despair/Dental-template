import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { MixedHeading } from "./ui/MixedHeading";
import { services } from "../data/yashoda";

const SERVICE_ICONS: Record<number, string> = {
  1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"><rect x="29" y="4" width="6" height="8" rx="1.5" stroke="#03314B" /><line x1="32" y1="12" x2="32" y2="23" stroke="#03314B" /><path d="M18 27C15 27 12 30 13 36C14 42 17 47 18 54C18.5 57.5 21 59 23 59C25 59 26.5 56 28 49C29 45 31 44 32 44C33 44 35 45 36 49C37.5 56 39 59 41 59C43 59 45.5 57.5 46 54C47 47 50 42 51 36C52 30 49 27 46 27C41 27 37 29 32 29C27 29 23 27 18 27Z" stroke="#1A84B8" /><path d="M27 29C26 35 23 44 22 53" stroke="#03314B" stroke-dasharray="3 3" /><path d="M37 29C38 35 41 44 42 53" stroke="#03314B" stroke-dasharray="3 3" /></svg>`,
  2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"><path d="M19 20C15 20 12 24 13 31C14 38 17 44 18 52C18.5 56 21 58 23.5 58C26 58 27.5 54 29 46C30 41.5 31 40.5 32 40.5C33 40.5 34 41.5 35 46C36.5 54 38 58 40.5 58C43 58 45.5 56 46 52C47 44 50 38 51 31C52 24 49 20 45 20C40 20 36.5 22.5 32 22.5C27.5 22.5 24 20 19 20Z" stroke="#1A84B8" /><path d="M18 27C18.5 24.5 20.5 23.5 23 23.5" stroke="#1A84B8" /><path d="M49 8V16M45 12H53" stroke="#03314B" /><path d="M13 10V15M10.5 12.5H15.5" stroke="#03314B" /><circle cx="53" cy="21" r="1.5" fill="#03314B" stroke="none" /></svg>`,
  3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"><path d="M19 11C17 11 15 13 15.5 17L16.5 22H47.5L48.5 17C49 13 47 11 45 11C40 11 36.5 13 32 13C27.5 13 24 11 19 11Z" stroke="#03314B" /><line x1="32" y1="25" x2="32" y2="33" stroke="#03314B" /><polyline points="28.5,29.5 32,33 35.5,29.5" stroke="#03314B" /><path d="M22 38V36C22 35 23 34 24 34H40C41 34 42 35 42 36V38H47C48.5 38 49.5 40 49 43C48 48 46 52 45 56C44.5 58 43 59 41.5 59C40 59 38.5 57 37 51C36 48 34 47 32 47C30 47 28 48 27 51C25.5 57 24 59 22.5 59C21 59 19.5 58 19 56C18 52 16 48 15 43C14.5 40 15.5 38 17 38H22Z" stroke="#1A84B8" /></svg>`,
  4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"><path d="M52 10H36C34.5 10 33.5 11 33.5 12.5V14.5C33.5 16 34.5 17 36 17H52" stroke="#03314B" /><line x1="33.5" y1="13.5" x2="29" y2="13.5" stroke="#03314B" /><line x1="29" y1="13.5" x2="29" y2="21" stroke="#03314B" /><path d="M18 24C14.5 24 12 27.5 13 34C14 40.5 17 46 18 53C18.5 56.5 21 58.5 23.5 58.5C26 58.5 27.5 55 29 47.5C30 43.5 31 42.5 32 42.5C33 42.5 34 43.5 35 47.5C36.5 55 38 58.5 40.5 58.5C43 58.5 45.5 56.5 46 53C47 46 50 40.5 51 34C52 27.5 49.5 24 46 24C41 24 37 26.5 32 26.5C27 26.5 23 24 18 24Z" stroke="#1A84B8" /><path d="M24 25.5C25.5 31 32.5 31 34 26" stroke="#03314B" stroke-dasharray="2.5 2.5" /></svg>`,
  5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48" height="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"><line x1="17" y1="10" x2="52" y2="10" stroke="#03314B" /><rect x="18" y="10" width="16" height="6" rx="1" stroke="#03314B" /><line x1="22" y1="10" x2="22" y2="16" stroke="#03314B" /><line x1="26" y1="10" x2="26" y2="16" stroke="#03314B" /><line x1="30" y1="10" x2="30" y2="16" stroke="#03314B" /><path d="M19 23C15.5 23 13 26.5 14 33C15 39.5 18 45 19 52C19.5 55.5 22 57.5 24.5 57.5C27 57.5 28.5 54 30 46.5C31 42.5 32 41.5 33 41.5C34 41.5 35 42.5 36 46.5C37.5 54 39 57.5 41.5 57.5C44 57.5 46.5 55.5 47 52C48 45 51 39.5 52 33C53 26.5 50.5 23 47 23C42 23 38 25.5 33 25.5C28 25.5 24 23 19 23Z" stroke="#1A84B8" /><circle cx="12" cy="17" r="2.2" stroke="#03314B" /><circle cx="10" cy="25" r="2.8" stroke="#03314B" /><circle cx="54" cy="24" r="2" stroke="#03314B" /></svg>`,
};

export const Services: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (id: number) => setExpanded((cur) => (cur === id ? null : id));
  const isOpen = (id: number) => expanded === id;

  return (
    <section id="services" className="py-24 md:py-36 px-6 bg-cool-grey">
      <div className="container">
        <div className="space-y-6 mb-16 md:mb-20">
          <FadeUp>
            <SectionLabel>Services</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <MixedHeading parts={services.heading} className="text-[44px] md:text-[64px] font-medium leading-tight mb-0 tracking-tight" />
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-sm text-charcoal/70 leading-relaxed max-w-[420px]">{services.text}</p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} isOpen={isOpen(item.id)} onToggle={() => toggle(item.id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{
  item: (typeof services.items)[number];
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => (
  <motion.div
    layout
    className="card-base group relative flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.01 }}
  >
    <div className="relative w-full p-8 text-center">
      <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" dangerouslySetInnerHTML={{ __html: SERVICE_ICONS[item.id] ?? "" }} />
      <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 border border-white/60 backdrop-blur-sm">
        <button
          className="text-btn text-[10px] px-0 py-0 text-charcoal/80 font-medium focus-visible-ring"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isOpen ? "–" : "+"}
        </button>
      </div>

      <span className="block text-[11px] font-light tracking-wider text-charcoal/50 mt-4 mb-3">
        {item.num}
      </span>

      <h3 className="text-lg font-medium leading-tight tracking-tight">
        {item.title.map((p, i) => (
          <span key={i} className={p.type === "serif" ? "serif italic" : "sans tracking-tight font-medium"}>
            {p.part}
            {i < item.title.length - 1 && " "}
          </span>
        ))}
      </h3>
    </div>

    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-8 pb-8 text-left"
        >
          <p className="text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FadeUp: React.FC<{ children?: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className,
  delay,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default Services;
