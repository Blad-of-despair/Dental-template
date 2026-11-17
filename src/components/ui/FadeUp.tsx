import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export const FadeUp: React.FC<FadeUpProps> = ({ children, className, threshold = 0.12, once = true }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <motion.div
      ref={ref}
      className={["fade-up", visible ? "visible" : "", className].filter(Boolean).join(" ")}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 24 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


