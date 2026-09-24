// Personal destinations: replace these empty values with your real URLs/address.
export const profile = {
  name: 'Albin',
  github: 'https://github.com/albin-007',
  linkedin: 'https://www.linkedin.com/in/albin-binoy/',
  instagram: 'https://www.instagram.com/abee.y__/',
  email: 'albinbg007@gmail.com',
  phone: '+918848485663',
  whatsapp: 'https://wa.me/918848485663',
  location: 'Kollam, Kerala, India',
};
export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', count: '04', href: '#work' },
  { label: 'Service', count: '04', href: '#services' },
  { label: 'Contact', href: '#contact' },
];
export const socialLinks = [
  { label: 'GitHub', key: 'github' }, { label: 'LinkedIn', key: 'linkedin' },
  { label: 'Instagram', key: 'instagram' }, { label: 'Email', key: 'email' },
];
export const projects = [
  { id: 'healthcare', name: 'CareNconnect', subtitle: 'Multi-Category Healthcare Appointment System', category: 'Web Application', description: 'Healthcare platform connecting patients, clinics, doctors and laboratories with appointments, prescriptions, laboratory reports and online payments.', tech: ['Django', 'React', 'Tailwind CSS', 'SQLite', 'Razorpay'], image: 'projects/carenconnect.png', number: '01' },
  { id: 'trackcart', name: 'TrackCart', subtitle: 'Inventory Management System', category: 'Web Application', description: 'Retail inventory and sales management application with products, stock tracking, billing, supplier management, expenses and reports.', tech: ['Django', 'Python', 'SQLite', 'HTML', 'CSS'], image: 'projects/trackcart.png', number: '02' },
  { id: 'rural-employment', name: 'Rural Employment Portal', subtitle: 'Connecting people with opportunity', category: 'Academic Project', description: 'Rural employment management system for Panchayath offices, ADS members and workers supporting work applications, allocation, progress, payments and complaints.', tech: ['PHP', 'CodeIgniter', 'MySQL', 'HTML', 'CSS'], image: 'projects/rural-employment.png', number: '03' },
];
export const services = [
  { title: 'Full Stack Development', description: 'Building complete responsive web applications from interface to database.', image: 'projects/carenconnect.png' },
  { title: 'Frontend Development', description: 'Creating clean, responsive and user-friendly interfaces using modern frontend technologies.', image: null },
  { title: 'Backend Development', description: 'Developing secure application logic, authentication, APIs and server-side functionality.', image: null },
  { title: 'Database & API Development', description: 'Designing structured databases and connecting applications through practical APIs.', image: null },
];
export const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'], label: 'UI & Client Side', image: null },
  { title: 'Backend', items: ['Python', 'Django', 'C#', 'C'], label: 'Server Side', image: null },
  { title: 'Database', items: ['SQL', 'SQLite', 'MySQL'], label: 'Data', image: null },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Vite'], label: 'Development Tools', image: null },
  { title: 'Deployment', items: ['Vercel', 'Render', 'Netlify'], label: 'Cloud & Hosting', image: null },
  { title: 'Core Knowledge', items: ['OOP', 'REST API Basics', 'Responsive Design'], label: 'Programming Concepts', image: null },
];
// Uploaded photographs are cover imagery, not screenshots of the applications.
const covers = [
  { image: 'projects/carenconnect.png', optimized: 'projects/carenconnect.webp', imageAlt: 'Healthcare professional — CareNconnect project cover', position: '50% 30%' },
  { image: 'projects/trackcart.png', optimized: 'projects/trackcart.webp', imageAlt: 'Warehouse worker checking packages — TrackCart project cover', position: '50% 50%' },
  { image: 'projects/rural-employment.png', optimized: 'projects/rural-employment.webp', imageAlt: 'Agricultural work — Rural Employment Portal project cover', position: '50% 64%' },
];
projects.forEach((project, i) => Object.assign(project, covers[i]));
services.forEach((service, i) => Object.assign(service, covers[i < 2 ? 0 : 1]));
projects.find(p => p.id === 'healthcare').liveUrl = 'https://carenconnect.vercel.app/';
projects.find(p => p.id === 'healthcare').subtitle = 'Multi-Category Healthcare Platform';
projects.find(p => p.id === 'trackcart').liveUrl = 'https://trackcart-five.vercel.app/';
projects.sort((a,b) => ['trackcart','healthcare','rural-employment'].indexOf(a.id) - ['trackcart','healthcare','rural-employment'].indexOf(b.id));
projects.splice(2, 0, { id: 'emi', name: 'EMI Calculator', subtitle: 'Monthly loan installment calculator', category: 'Web Application', description: 'A simple and responsive EMI calculator that allows users to calculate monthly loan installments based on loan amount, interest rate, and repayment duration.', tech: ['HTML', 'CSS', 'JavaScript'], image: 'projects/emi-calculator.png', optimized: 'projects/emi-calculator.webp', imageAlt: 'Calculator and notebook — EMI Calculator project cover', position: 'center', liveUrl: 'https://emi-calculator-amber-seven.vercel.app/' });
projects.forEach((p,i) => p.number = String(i + 1).padStart(2, '0'));
export const contactLinks = [...socialLinks, { label: 'Phone', key: 'phone' }, { label: 'WhatsApp', key: 'whatsapp' }];

const assets = import.meta.glob('./assets/**/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
export const asset = (path) => assets[`./assets/${path}`];


