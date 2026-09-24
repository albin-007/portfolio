import { Download, MapPin, GraduationCap, Building2, Award, CalendarDays, Clock3 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ease } from './Motion';
const resume = __HAS_RESUME__;
const certifications = [{ id: 'dbms', title: 'Database Management System (DBMS)', provider: 'NPTEL SWAYAM', dates: 'Jul – Sep 2025', duration: '8 weeks' }];
function AboutReveal({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduced ? 0 : 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease, delay }}>{children}</motion.div>;
}
function InfoCard({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return <AboutReveal delay={delay}><motion.div className={`information-card ${className}`} whileHover={reduced ? undefined : { y: -4, boxShadow: '0 12px 28px rgba(36,49,75,0.07)' }} transition={{ duration: 0.65, ease }}>{children}</motion.div></AboutReveal>;
}
export default function About() {
  const reduced = useReducedMotion();
  return <section id="about" className="about frame section-pad about-reference about-structured">
    <div className="about-grid">
      <div className="about-story">
        <AboutReveal>
          <div className="about-header-group">
            <span className="ghost-title about-ghost-title" aria-hidden="true">ABOUT</span>
            <h2 className="skills-style-heading">/ABOUT ME</h2>
          </div>
        </AboutReveal>
        <AboutReveal delay={0.08}><p className="about-lead">Practical thinking.<br/>Purposeful development.</p></AboutReveal>
        <AboutReveal delay={0.16}><div className="about-bio"><p>I'm <strong>Albin</strong>, an MCA graduate with a strong interest in software development and building practical web applications. I work with frontend technologies such as HTML, CSS, JavaScript and React, and backend technologies including Python and Django.</p><p>Through academic, personal and client-based projects, I have gained practical experience in building interfaces, backend logic, databases and complete web application workflows.</p></div></AboutReveal>
        <AboutReveal delay={0.24}>{resume ? <motion.a className="button button-dark about-resume" href="/Albin_Binoy_George_Resume.pdf" download whileHover={reduced ? undefined : { scale: 1.025 }} whileTap={reduced ? undefined : { scale: 0.98 }} transition={{ duration: 0.65, ease }}>Download Resume<Download size={18}/></motion.a> : <button className="button about-resume" disabled>Download Resume<Download size={18}/></button>}</AboutReveal>
        <div className="about-group location-group" aria-labelledby="location-label">
          <AboutReveal delay={0.3}><h3 className="info-group-label" id="location-label">/ LOCATION</h3></AboutReveal>
          <InfoCard className="location-card" delay={0.36}><span className="about-icon"><MapPin size={24}/></span><div><span className="eyebrow">BASED IN</span><p className="based-location">Kollam, Kerala, India</p></div><span className="remote-badge"><span className="status-dot"/>Open to Remote / On-site</span></InfoCard>
        </div>
      </div>
      <div className="about-info">
        <div className="about-group" aria-labelledby="education-label">
          <AboutReveal delay={0.08}><h3 className="info-group-label" id="education-label">/ EDUCATION</h3></AboutReveal>
          <InfoCard className="education-card" delay={0.16}>
            <div className="degree"><div className="card-heading"><span className="about-icon"><GraduationCap size={24}/></span><h4>Master of Computer Applications (MCA)</h4></div><p className="institution"><Building2 size={17}/>College of Engineering, Vadakara</p><p className="muted degree-university">APJ Abdul Kalam Technological University</p><p className="degree-date"><CalendarDays size={17}/>Aug 2024 – March 2026</p><span className="grade"><Award size={17}/>CGPA: 7.5</span></div>
            <div className="degree"><div className="card-heading"><span className="about-icon"><GraduationCap size={24}/></span><h4>B.Sc Computer Science</h4></div><p className="institution"><Building2 size={17}/>University Institute of Technology, Pathanapuram</p><p className="degree-date"><CalendarDays size={17}/>Sep 2021 – April 2024</p></div>
          </InfoCard>
        </div>
        <div className="about-group" aria-labelledby="certification-label">
          <AboutReveal delay={0.24}><h3 className="info-group-label" id="certification-label">/ CERTIFICATION</h3></AboutReveal>
          <div className="certification-list">{certifications.map((certificate, i) => <InfoCard key={certificate.id} className="certificate-card" delay={0.32 + i * 0.08}><div className="card-heading"><span className="about-icon"><Award size={24}/></span><div><h4>{certificate.title}</h4><p className="certificate-provider">{certificate.provider}</p></div></div><p className="degree-date"><CalendarDays size={17}/>{certificate.dates}</p><p className="degree-date"><Clock3 size={17}/>Duration: {certificate.duration}</p></InfoCard>)}</div>
        </div>
      </div>
    </div>
  </section>;
}
