import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Navbar from './Navbar';
import SocialLink, { ContactButton } from './SocialLink';
import { socialLinks, asset } from '../data';
import { transition } from './Motion';
export default function Hero() {
  const ref = useRef(null); const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const hoverX = useSpring(pointerX, { stiffness: 65, damping: 24, mass: 1.2 });
  const hoverY = useSpring(pointerY, { stiffness: 65, damping: 24, mass: 1.2 });
  const portraitY = useTransform([y, hoverY], ([scroll, hover]) => scroll + hover);
  const movePortrait = (event) => {
    if (reduced || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 6);
  };
  const resetPortrait = () => { pointerX.set(0); pointerY.set(0); };
  const portrait = asset('profile.png');
  return <section ref={ref} className="hero frame" id="top" onPointerMove={movePortrait} onPointerLeave={resetPortrait}><Navbar/>
    <h1 className="hero-name" aria-label="HI I'M ALBIN">{["HI I'M", 'ALBIN'].map((word, i) => <span className="word-mask" key={word}><motion.span className={i === 0 ? 'outline-name' : 'animated-name'} initial={{ y: reduced ? 0 : '110%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...transition, duration: 0.9, delay: 0.15 + i * 0.14 }}>{word}</motion.span></span>)}</h1>
    <div className="hero-portrait"><motion.div className="portrait-parallax" style={{ x: reduced ? 0 : hoverX, y: reduced ? 0 : portraitY }}><motion.img className="hero-profile" src={portrait} alt="Albin" loading="eager" fetchPriority="high" width="1106" height="1180" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 22, scale: reduced ? 1 : 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...transition, duration: 0.9, delay: 0.3 }}/></motion.div></div>
    <motion.div className="hero-intro" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: 0.65 }}><h2>FULL STACK<br/> DEVELOPER</h2><p>Building modern, responsive and practical web applications with clean interfaces and reliable backend systems.</p><ContactButton>Let's collaborate</ContactButton></motion.div>
    <div className="hero-socials">{socialLinks.map((social, i) => <motion.div key={social.key} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ ...transition, delay: 0.7 + i * 0.09 }}><SocialLink social={social}/></motion.div>)}</div>
    <a href="#about" className="scroll-cue"><ArrowDown size={14}/>Scroll to explore</a>
  </section>;
}






