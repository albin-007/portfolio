import { Code2, Database, GitBranch, PanelsTopLeft, Workflow } from 'lucide-react';
import { asset } from '../data';
const icons = { Frontend: PanelsTopLeft, Backend: Code2, Database, Tools: GitBranch, 'Core Knowledge': Workflow };
export default function PreviewVisual({ item, className = '' }) {
  const Icon = icons[item.title] || Code2;
  if (item.image) return <picture className={className}>{item.optimized && <source srcSet={asset(item.optimized)} type="image/webp"/>}<img src={asset(item.image)} alt={item.imageAlt || `${item.title} project cover`} loading="lazy" decoding="async" style={{ objectPosition: item.position || 'center' }}/></picture>;
  return <div className={`neutral-preview ${className}`} role="img" aria-label={`${item.title} preview placeholder`}><Icon size={42} strokeWidth={1}/><span>{item.title}</span><small>Preview coming soon</small></div>;
}
