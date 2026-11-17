import { motion } from "framer-motion";
import { MixedHeading } from "./ui";
import { hero } from "../data/yashoda";

export const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative h-screen w-full flex items-start justify-start overflow-hidden bg-charcoal"
  >
    <div className="absolute inset-0 z-0">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="w-full h-full object-position-[calc(50%-80px)_center] md:object-position-center object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,16,12,0.75)] via-[rgba(20,16,12,0.45)] to-transparent" />
    </div>

    <div className="relative z-10 flex flex-col h-full px-6 pt-20 md:px-12 md:pt-32 lg:max-w-[620px]">
      <div className="flex flex-col gap-4">
        <FadeUpWrapper once={true}>
          <div className="flex items-center gap-2 text-xs font-light uppercase tracking-wider text-white/80 mb-2">
            <span className="w-1 h-1 rounded-full bg-white" /> {hero.label}
          </div>
        </FadeUpWrapper>
        <FadeUpWrapper once={true}>
          <MixedHeading
            parts={hero.headline}
            className="text-[40px] sm:text-[56px] md:text-[80px] font-medium leading-[1.2] tracking-tight text-white mb-0"
          />
        </FadeUpWrapper>
        <FadeUpWrapper once={true} delay={0.1}>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-green-300 mb-4">
            ★ {hero.badge}
          </div>
        </FadeUpWrapper>
        <FadeUpWrapper once={true} delay={0.2}>
          <p className="text-sm text-white/80 leading-relaxed max-w-[420px]">
            {hero.subhead}
          </p>
        </FadeUpWrapper>
      </div>

      <div className="mt-auto mb-12 md:mb-16">
        <FadeUpWrapper once={true} delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={hero.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-btn text-white flex items-center gap-2"
            >
              📱 {hero.cta}
            </a>
            <a
              href="#contact"
              className="text-btn text-white bg-charcoal px-6 py-2.5 rounded-full flex items-center gap-2 focus-visible-ring hover:bg-charcoal/90 transition-colors"
            >
              Book Appointment <span>→</span>
            </a>
          </div>
        </FadeUpWrapper>
      </div>
    </div>
  </section>
);

const FadeUpWrapper: React.FC<{ children: React.ReactNode; once?: boolean; delay?: number }> = ({
  children,
  once = true,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={["fade-up", once ? "" : ""].join(" ")}
  >
    {children}
  </motion.div>
);

export default Hero;
