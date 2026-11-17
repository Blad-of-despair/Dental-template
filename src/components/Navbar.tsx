import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { TextButton } from "./ui/TextButton";
import { clinic, navLinks } from "../data/yashoda";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={[
          "fixed",
          "top-0",
          "left-0",
          "right-0",
          "z-50",
          "px-6",
          "py-5",
          scrolled ? "bg-white/85 backdrop-blur-md border-b border-black/10" : "bg-transparent",
          "transition-all",
          "duration-300",
        ].join(" ")}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
    <div
      className={[
        "sans",
        scrolled ? "text-charcoal" : "text-white",
        "text-base",
        "md:text-lg",
        "font-light",
        "uppercase",
        "tracking-wider",
      ].join(" ")}
      style={{ letterSpacing: "0.15em" }}
    >
      {clinic.name}
    </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-tight">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={[
                  scrolled ? "text-charcoal" : "text-white/90",
                  "hover:opacity-60",
                  "transition-opacity",
                  "duration-200",
                  "focus-visible-ring",
                ].join(" ")}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <TextButton
              className={[
                scrolled ? "text-charcoal" : "text-white",
                scrolled ? "hover:opacity-60" : "hover:text-white/70",
              ].join(" ")}
              onClick={() => setOpen(false)}
            >
              ( Book an Appointment )
            </TextButton>
          </div>

          <button
            className={[
              "md:hidden",
              scrolled ? "text-charcoal" : "text-white",
              "focus-visible-ring",
            ].join(" ")}
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
          >
            {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal flex flex-col items-center justify-center gap-6 p-8 text-center md:gap-10 md:p-12"
            onClick={() => setOpen(false)}
          >
            <div className="absolute top-6 right-6">
              <button
                className="text-white/60 hover:text-white transition-colors focus-visible-ring"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-col items-center gap-3 md:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[22px] md:text-[32px] font-light tracking-tight text-white hover:text-white/80 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-3 md:gap-6 mt-8 md:mt-12">
              <TextButton className="text-white" onClick={() => setOpen(false)}>
                ( Book an Appointment )
              </TextButton>
              <div className="flex gap-4 text-white/70 text-xs">
                <a href={`tel:${clinic.phone}`} className="hover:text-white transition-colors">
                  <Phone size={14} /> {clinic.phone}
                </a>
                <a href={`mailto:${clinic.email}`} className="hover:text-white transition-colors">
                  <Mail size={14} /> {clinic.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


