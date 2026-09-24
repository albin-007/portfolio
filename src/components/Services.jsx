import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { services, skills } from '../data';
import { Reveal, transition } from './Motion';
import SkillPreview from './SkillPreview';
const previews = [
  { index: 0, skill: { items: ['React', 'Python', 'Django', 'SQLite', 'Tailwind CSS'] } },
  { index: 0, skill: skills[0] },
  { index: 1, skill: skills[1] },
  { index: 2, skill: skills[2] },
];
export default function Services() {
  const [active, setActive] = useState(0);
  return <section id="services" className="services section-width"><Reveal><h2 className="section-heading">/SERVICE</h2></Reveal><div className="service-list">{services.map((service, i) => <Reveal key={service.title} delay={i * 0.05}><motion.article layout className={`service ${active === i ? 'is-active' : ''}`} transition={transition}>
    <button id={`service-trigger-${i}`} className="service-trigger" aria-expanded={active === i} aria-controls={`service-panel-${i}`} onClick={() => setActive(active === i ? null : i)}><span>{service.title}</span><motion.span className="service-icon" animate={{ rotate: active === i ? 90 : 0 }} transition={transition}>{active === i ? <X strokeWidth={1.2}/> : <ArrowUpRight strokeWidth={1.2}/>}</motion.span></button>
    <AnimatePresence initial={false}>{active === i && <motion.div id={`service-panel-${i}`} role="region" aria-labelledby={`service-trigger-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={transition}><motion.p initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ ...transition, delay: 0.12 }}>{service.description}</motion.p></motion.div>}</AnimatePresence>
    <AnimatePresence>{active === i && <motion.div className="service-preview service-case-preview" initial={{ opacity: 0, y: 30, rotate: -8, scale: 0.8 }} animate={{ opacity: 1, y: 0, rotate: -3, scale: 1 }} exit={{ opacity: 0, y: -20, rotate: 4, scale: 0.9 }} transition={transition}><SkillPreview {...previews[i]}/></motion.div>}</AnimatePresence>
  </motion.article></Reveal>)}</div></section>;
}
