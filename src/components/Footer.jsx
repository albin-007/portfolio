import { ArrowUpRight } from 'lucide-react';
export default function Footer() { return <footer className="footer"><span>© {new Date().getFullYear()} Albin</span><span>Made with care. Built with purpose.</span><a href="#top">Back to top<ArrowUpRight size={15}/></a></footer>; }
