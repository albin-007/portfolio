import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { transition } from './Motion';
import PreviewVisual from './PreviewVisual';
export default function ProjectCard({ project, onOpen, index = 0 }) {
  const reduced = useReducedMotion();
  return <motion.article layout className="project-card" initial={{ opacity: 0, y: reduced ? 0 : 48, scale: 1 }} whileInView={{ opacity: 1, y: 0, scale: 1, transition: { ...transition, duration: 0.85, delay: (index % 2) * 0.12 } }} exit={{ opacity: 0, scale: 0.96 }} viewport={{ once: true, amount: 0.2 }} transition={transition} whileHover={reduced ? undefined : { y: -7, transition: { ...transition, duration: 0.65 } }}>
    <button className="project-image-button" onClick={() => onOpen(project)} aria-label={`View ${project.name} project details`}><motion.div className="project-image" initial={{ scale: reduced ? 1 : 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...transition, duration: 0.9 }}><PreviewVisual item={project}/></motion.div><span className="project-category">{project.category}</span><span className="project-arrow"><ArrowUpRight size={26}/></span></button>
    <div className="project-copy"><span className="project-number">/{project.number}</span><button className="project-title" onClick={() => onOpen(project)}>{project.name}<span>{project.subtitle}</span></button><div className="tech-list">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>{project.liveUrl && <motion.a className="button live-project" href={project.liveUrl} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>Live Project<ArrowUpRight size={16}/></motion.a>}</div>
  </motion.article>;
}
