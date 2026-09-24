import { MotionConfig } from 'framer-motion';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() { return <MotionConfig reducedMotion="user"><a href="#about" className="skip-link">Skip to about me</a><div className="cloud-background" aria-hidden="true"/><main><Hero/><About/><Skills/><Portfolio/><Services/><Contact/></main><Footer/></MotionConfig>; }

