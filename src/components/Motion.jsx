import { motion, useReducedMotion } from 'framer-motion';
export const ease = [0.22, 1, 0.36, 1];
export const transition = { duration: 0.75, ease };
export function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduced ? 0 : 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...transition, delay }} {...props}>{children}</motion.div>;
}
export function Availability({ floating = false }) {
  const reduced = useReducedMotion();
  return <motion.span className="availability" animate={floating && !reduced ? { y: [0, -5, 0] } : {}} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><span className="status-dot"/>Available for New Project</motion.span>;
}
