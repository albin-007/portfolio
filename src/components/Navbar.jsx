import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data';
import { Availability, transition } from './Motion';
import { ContactButton } from './SocialLink';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <motion.header className="navbar" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
    <a className="availability-link" href="#contact"><Availability/></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.label} href={item.href}>{item.label}{item.count && <span>[{item.count}]</span>}</a>)}</nav>
    <div className="nav-action"><ContactButton>Let's Talk</ContactButton><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>
    <AnimatePresence>{open && <motion.nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={transition}>{navigation.map(item => <a href={item.href} key={item.label} onClick={() => setOpen(false)}>{item.label}<span>{item.count ? `[${item.count}]` : '↗'}</span></a>)}</motion.nav>}</AnimatePresence>
  </motion.header>;
}
