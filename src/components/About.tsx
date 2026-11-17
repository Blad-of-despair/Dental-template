import { motion } from "framer-motion";
import { SectionLabel, MixedHeading } from "./ui";
import { about } from "../data/yashoda";

export const About: React.FC = () => (
  <section id="about" className="py-24 md:py-36 px-6 bg-cool-grey">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <FadeUp>
            <SectionLabel>About</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <MixedHeading parts={about.heading} className="text-[44px] md:text-[64px] font-medium leading-tight mb-0 tracking-tight" />
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-sm text-charcoal/70 leading-relaxed max-w-[420px]">{about.text}</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="bg-white p-6 rounded-[24px] border border-charcoal/10 mt-4">
              <p className="text-sm text-charcoal/60 leading-relaxed mb-3">{about.doctorPlaceholder}</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {about.stats.map((s) => (
              <FadeUp key={s.value} className="flex flex-col gap-1">
                <span className="text-[32px] font-light tracking-tight">{s.value}</span>
                <span className="text-xs font-light uppercase tracking-wider text-charcoal/60">{s.label}</span>
              </FadeUp>
            ))}
          </div>
        </div>
        <div className="relative">
          <FadeUp className="relative">
            <img
              src={about.image}
              alt={about.imageAlt}
              className="w-full rounded-[32px] object-cover shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
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

export default About;


