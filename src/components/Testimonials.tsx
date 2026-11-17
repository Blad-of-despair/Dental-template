import { motion } from "framer-motion";
import { MixedHeading } from "./ui";
import { testimonials } from "../data/yashoda";

const stars = (count: number) => Array.from({ length: count }, (_, i) => i);

export const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-24 md:py-36 px-6 bg-cool-grey">
    <div className="container">
      <div className="text-center mb-16 md:mb-20">
        <FadeUp>
          <div className="flex items-center justify-center gap-2 text-xs font-light uppercase tracking-wider text-charcoal mb-4">
            <span className="w-1 h-1 rounded-full bg-charcoal" /> {testimonials.label}
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <MixedHeading
            parts={testimonials.heading}
            className="text-[44px] md:text-[72px] font-medium leading-tight mb-4 tracking-tight"
          />
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-sm text-charcoal/70 leading-relaxed max-w-[520px] mx-auto">
            {testimonials.subtext}
          </p>
        </FadeUp>
      </div>

      <div className="relative">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {/* Large image card spanning 2 cols */}
            <div className="lg:col-span-2">
              <img
                src="/assets/dentist with patient.png"
                alt="Dentist treating patient"
                className="w-full h-[360px] rounded-[32px] object-cover shadow-lg"
                loading="lazy"
              />
            </div>

            {testimonials.reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}

            {testimonials.reviews.slice(3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

const ReviewCard: React.FC<{ review: (typeof testimonials.reviews)[number] }> = ({ review }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="card-base p-6 flex flex-col gap-3"
  >
    <div className="flex gap-1 text-[10px] text-yellow-500">
      {stars(review.rating).map((i) => (
        <span key={i} className="text-[10px]">
          ★
        </span>
      ))}
    </div>
    <p className="text-sm text-charcoal/60 leading-relaxed italic">{review.text}</p>
    <div className="mt-auto flex items-center gap-3 pt-3 border-t border-charcoal/10">
      <img
        src={review.avatar}
        alt={`${review.name} avatar`}
        className="w-8 h-8 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <span className="text-xs font-medium tracking-tight">{review.name}</span>
        <br />
        <span className="text-[10px] text-charcoal/50 tracking-tight uppercase">{review.tag}</span>
      </div>
    </div>
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

export default Testimonials;


