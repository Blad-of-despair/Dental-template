import { motion } from "framer-motion";
import { SectionLabel, MixedHeading } from "./ui";
import { whyUs } from "../data/yashoda";
import { Zap, Smile, User, Receipt, Tag, MapPin } from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  Zap,
  Smile,
  User,
  Receipt,
  Tag,
  MapPin,
};

export const WhyUs: React.FC = () => (
  <section id="why-us" className="py-24 md:py-36 px-6">
    <div className="container">
      <div className="space-y-6 mb-12 md:mb-16">
        <FadeUp>
          <SectionLabel>Why Us?</SectionLabel>
        </FadeUp>
        <FadeUp delay={0.1}>
          <MixedHeading parts={whyUs.heading} className="text-[44px] md:text-[64px] font-medium leading-tight mb-0 tracking-tight" />
        </FadeUp>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyUs.items.map((item) => {
          const Comp = ICONS[item.icon];
          return (
            <FadeUp key={item.title} className="card-base p-8">
              <div className="w-10 h-10 rounded-xl bg-charcoal/5 flex items-center justify-center mb-6 text-charcoal">
                <Comp size={20} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-medium mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
            </FadeUp>
          );
        })}
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

export default WhyUs;


