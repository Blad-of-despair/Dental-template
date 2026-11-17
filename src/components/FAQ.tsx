import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionLabel, MixedHeading } from "./ui";
import { faqs } from "../data/yashoda";

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const isOpen = (i: number) => open === i;
  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));

  return (
    <section id="faq" className="py-24 md:py-36 px-6 bg-cool-grey">
      <div className="container">
        <div className="space-y-6 mb-12 md:mb-16">
          <FadeUp>
            <SectionLabel>FAQ</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <MixedHeading parts={[{ part: "Questions", type: "sans" }, { part: "Answered", type: "serif" }]} className="text-[44px] md:text-[64px] font-medium leading-tight mb-0 tracking-tight" />
          </FadeUp>
        </div>

        <div className="max-w-[600px] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} isOpen={isOpen(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem: React.FC<{
  faq: (typeof faqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ faq, index, isOpen, onToggle }) => (
  <motion.div
    layout
    className="card-base p-6 overflow-hidden group"
    whileHover={{ scale: 1.005 }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-3 text-left"
      aria-expanded={isOpen}
      aria-controls={`faq-${index}`}
    >
      <span className="text-base font-medium leading-tight tracking-tight">{faq.q}</span>
      <motion.span
        animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
        className="w-5 h-5 text-charcoal/50 transition-transform duration-300"
      >
        {isOpen ? <ChevronUp size={20} strokeWidth={2} /> : <ChevronDown size={20} strokeWidth={2} />}
      </motion.span>
    </button>

    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          id={`faq-${index}`}
          className="px-6 pb-6 border-t border-charcoal/10"
        >
          <p className="text-sm text-charcoal/60 leading-relaxed">{faq.a}</p>
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

export default FAQ;


