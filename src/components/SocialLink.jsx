import { Github, Linkedin, Instagram, Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data';
const icons = { github: Github, linkedin: Linkedin, instagram: Instagram, email: Mail, phone: Phone, whatsapp: MessageCircle };
export default function SocialLink({ social }) {
  const Icon = icons[social.key];
  const value = profile[social.key];
  return <motion.a className={`social-pill social-pill-${social.key}`} href={value ? social.key === 'email' ? `mailto:${value}?subject=Project%20Inquiry` : social.key === 'phone' ? `tel:${value}` : value : '#contact'} aria-label={value ? social.label : `${social.label} — link coming soon`} title={value ? social.label : `${social.label} link coming soon`} {...(value && !['email', 'phone'].includes(social.key) ? { target: '_blank', rel: 'noopener noreferrer' } : {})} whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}><Icon size={16}/>{social.label}</motion.a>;
}
export function ContactButton({ children = 'Contact Me', className = '' }) {
  return <motion.a className={`button button-dark ${className}`} href={profile.email ? `mailto:${profile.email}?subject=Project%20Inquiry` : '#contact'} onClick={!profile.email ? () => window.dispatchEvent(new Event('contact-unconfigured')) : undefined} whileHover={{ scale: 1.045 }} whileTap={{ scale: 0.97 }}>{children}<ArrowUpRight size={17}/></motion.a>;
}
