import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { contactLinks, profile, asset } from '../data';
import { Availability, Reveal } from './Motion';
import SocialLink, { ContactButton } from './SocialLink';
export default function Contact() {
  const [notice, setNotice] = useState(false);
  useEffect(() => { const show = () => setNotice(true); window.addEventListener('contact-unconfigured', show); return () => window.removeEventListener('contact-unconfigured', show); }, []);
  return <section id="contact" className="contact frame"><Reveal><Availability floating/></Reveal><Reveal delay={0.1}><h2>HAVE A PROJECT IN MIND?</h2></Reveal><Reveal delay={0.2}><p>Let's create something practical, clean and impactful together. Feel free to contact me for opportunities, collaborations or development projects.</p></Reveal><Reveal delay={0.3}><ContactButton/><p className="contact-address">{profile.location} · +91 8848485663<br/><a href={`mailto:${profile.email}?subject=Project%20Inquiry`}>{profile.email}</a></p></Reveal><AnimatePresence>{notice && <motion.p role="status" className="contact-notice" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Contact details will be available soon.</motion.p>}</AnimatePresence><div className="contact-socials"><Reveal><a href="#top" className="name-pill"><img className="contact-avatar" src={asset('profile.png')} alt="" width="36" height="36" loading="lazy"/>{profile.name}</a></Reveal>{contactLinks.map((social, i) => <Reveal key={social.key} delay={0.1 + i * 0.07}><SocialLink social={social}/></Reveal>)}</div></section>;
}
