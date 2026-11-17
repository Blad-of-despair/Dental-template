import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel, MixedHeading } from "./ui";
import { booking } from "../data/yashoda";

export const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    timeSlot: "morning",
    message: "",
  });
  const [showEvening, setShowEvening] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement & {
      type: string;
      checked: boolean;
    };
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));

    if (name === "date") {
      const selected = new Date(value);
      const day = selected.getDay(); // 0 = Sunday
      setShowEvening(day !== 0);
      if (day === 0 && formData.timeSlot === "evening") {
        setFormData((prev) => ({ ...prev, timeSlot: "morning" }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const slotLabel = (key: string) =>
    key === "morning" ? booking.amSlot : booking.pmSlot;

  if (submitted) {
    return (
      <section id="contact" className="py-24 md:py-36 px-6 bg-cool-grey">
        <div className="container max-w-[600px] mx-auto text-center">
          <FadeUp>
            <SectionLabel>Contact</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <MixedHeading
              parts={booking.heading}
              className="text-[44px] md:text-[64px] font-medium leading-tight mb-6 tracking-tight"
            />
          </FadeUp>
          <div className="card-base p-10 rounded-[32px]">
            <p className="text-base text-green-700 font-medium mb-4">
              Thank you! Your appointment request has been received. We'll contact you shortly on WhatsApp.
            </p>
            <a
              href={booking.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-tight text-green-600 hover:opacity-80 transition-opacity"
            >
              ( Message us on WhatsApp )
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-36 px-6 bg-cool-grey">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <FadeUp>
              <SectionLabel>Contact</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <MixedHeading
                parts={booking.heading}
                className="text-[44px] md:text-[64px] font-medium leading-tight mb-0 tracking-tight"
              />
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                Fill in the form below and our team will get back to you to confirm your visit.
              </p>
            </FadeUp>
            <div className="mt-4 p-4 bg-charcoal/5 rounded-[24px] border border-charcoal/10">
              <p className="text-xs text-charcoal/50 mb-2">Clinic Hours</p>
              <p className="text-sm text-charcoal/70">{booking.amSlot}</p>
              <p className="text-sm text-charcoal/70">{booking.pmSlot}</p>
              <p className="text-sm text-charcoal/70">{`Sunday: ${slotLabel("morning")} only`}</p>
            </div>
          </div>

          <FadeUp delay={0.3}>
            <form onSubmit={handleSubmit} className="card-base p-8 md:p-10 space-y-5 max-w-[460px]">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Full name" name="name" type="text" value={formData.name} onChange={handleChange} required />
                <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>
              <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              <Field
                label="Service"
                name="service"
                as="select"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {booking.services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </Field>
              <Field label="Preferred date" name="date" type="date" value={formData.date} onChange={handleChange} required />
              <Field
                label="Time slot"
                name="timeSlot"
                as="select"
                value={formData.timeSlot}
                onChange={handleChange}
                required
              >
                <option value="morning">{slotLabel("morning")}</option>
                {showEvening && (
                  <option value="evening">{slotLabel("evening")}</option>
                )}
                {!showEvening && (
                  <option value="morning" disabled>
                    {slotLabel("evening")} (closed on Sundays)
                  </option>
                )}
              </Field>
              <Field label="Message" name="message" as="textarea" value={formData.message} onChange={handleChange} rows={3} />
              <button type="submit" className="w-full text-btn text-sm font-medium tracking-tight text-charcoal py-3 focus-visible-ring transition-opacity duration-200">
                {booking.cta}
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  as?: "select" | "textarea";
  rows?: number;
  type?: string;
  children?: React.ReactNode;
};

const Field: React.FC<FieldProps> = ({
  label,
  name,
  value,
  onChange,
  required = true,
  as = "input",
  rows,
  type = "text",
  children,
}) => {
  const Component = as === "select" ? "select" : as === "textarea" ? "textarea" : "input";
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium tracking-tight text-charcoal/70">{label}</label>
      <Component
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        type={type}
        className="w-full rounded-xl border border-charcoal/20 bg-white/60 px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
      >
        {children}
      </Component>
    </div>
  );
};

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

export default Booking;
