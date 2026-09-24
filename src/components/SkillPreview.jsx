import { ArrowUpRight, GitBranch, ArrowRight, Database, Boxes, Network, MonitorSmartphone } from 'lucide-react';
import { asset } from '../data';

const titles = ['CareNconnect · Web interface', 'Appointment API · Code concept', 'Appointments · Schema concept', 'Development workflow', 'Application architecture'];

import TechLogo from './TechLogo';

export default function SkillPreview({ skill, index }) {
  return <>
    <div className="skill-preview-visual">
      {index === 0 && <img src={asset('skills/carenconnect-live.png')} alt="Actual CareNconnect homepage interface" />}
      {index === 1 && <div className="skill-code"><div className="skill-editor-bar"><i/><i/><i/><span>views.py</span></div><pre><span>from</span> rest_framework <span>import</span> generics{'\n\n'}<span>class</span> AppointmentList({'\n'}  generics.ListCreateAPIView{'\n'}):{'\n'}  queryset = Appointment.objects.all(){'\n'}  serializer_class = AppointmentSerializer</pre></div>}
      {index === 2 && <div className="skill-schema"><div><b>patients</b><span>PK · id</span><span>name</span><span>email</span></div><ArrowRight size={16}/><div><b>appointments</b><span>PK · id</span><span>FK · patient_id</span><span>scheduled_at</span></div></div>}
      {index === 3 && <div className="skill-workflow"><div className="skill-workflow-title"><GitBranch size={16}/> feature / interface</div><div className="skill-flow"><span>Edit</span><ArrowRight/><span>Commit</span><ArrowRight/><span>Review</span></div><div className="skill-terminal">$ git commit -m "Refine interface"<br/><span>✓ Changes ready for review</span></div></div>}
      {index === 4 && <div className="skill-architecture"><div className="skill-flow"><span>Interface</span><ArrowRight/><span>REST API</span></div><div className="skill-architecture-line"/><div className="skill-flow"><span>Objects & logic</span><ArrowRight/><span>Database</span></div><small>Request → process → response</small></div>}
    </div>
    <div className="skill-preview-caption"><span>{titles[index]}</span><ArrowUpRight size={14}/></div>
    <div className="skill-preview-logos" aria-label="Technologies">{skill.items.map(item => <TechLogo key={item} name={item} size={24}/>)}</div>
  </>;
}
