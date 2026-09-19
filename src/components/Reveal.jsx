import { motion } from "framer-motion";

/**
 * Fades + slides content up as it scrolls into view.
 * Wrap a single element/section. Use `delay` to stagger siblings.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that wraps grid/card items for reveal animations. */
export function RevealGroup({ children, className = "", stagger: _stagger = 0.08 }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function RevealItem({ children, className = "", y = 18 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
