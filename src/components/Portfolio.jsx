import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { projects, asset } from '../data';
import { Reveal, transition } from './Motion';
import ProjectCard from './ProjectCard';
import PreviewVisual from './PreviewVisual';
const filters = ['All', 'Web Application', 'Academic Project'];
export default function Portfolio() {
  const [filter, setFilter] = useState('All'); const [selected, setSelected] = useState(null); const dialog = useRef(null);
  useEffect(() => { if (selected && !dialog.current.open) dialog.current.showModal(); }, [selected]);
  function close() { dialog.current.close(); setSelected(null); }
  return <section id="work" className="portfolio frame section-pad"><Reveal className="section-title centered"><span className="ghost-title" aria-hidden="true">PORTFOLIO</span><h2>/SELECTED WORK</h2></Reveal>
    <Reveal className="work-toolbar"><div className="filters" aria-label="Filter projects">{filters.map(item => <button aria-pressed={filter === item} onClick={() => setFilter(item)} key={item}>{filter === item && <motion.span className="active-filter" layoutId="active-filter" transition={transition}/>}<span>{item}</span></button>)}</div><button className="button view-all" onClick={() => setFilter('All')}>View All Work<ArrowUpRight size={16}/></button></Reveal>
    <motion.div layout className="project-grid"><AnimatePresence mode="popLayout">{projects.filter(p => filter === 'All' || p.category === filter).map((project, index) => <ProjectCard index={index} key={project.id} project={project} onOpen={setSelected}/>)}</AnimatePresence></motion.div>
    <dialog ref={dialog} className="project-dialog" onCancel={close} onClick={e => e.target === dialog.current && close()} onClose={() => setSelected(null)}>{selected && <div className="dialog-content"><button className="dialog-close" onClick={close} aria-label="Close project details" autoFocus><X/></button><PreviewVisual item={selected} className="dialog-cover"/><span className="eyebrow">{selected.category} / {selected.number}</span><h2>{selected.name}</h2><h3>{selected.subtitle}</h3><p>{selected.description}</p><div className="tech-list">{selected.tech.map(t => <span key={t}>{t}</span>)}</div>{selected.liveUrl && <a className="button live-project" href={selected.liveUrl} target="_blank" rel="noopener noreferrer">Live Project<ArrowUpRight size={16}/></a>}<small>Project cover photograph</small></div>}</dialog>
  </section>;
}

