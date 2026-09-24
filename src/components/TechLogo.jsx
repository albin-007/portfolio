import { Database, Boxes, Network, MonitorSmartphone, Code2, Server, Cloud } from 'lucide-react';

const logoFiles = import.meta.glob('../assets/technology/*.svg', { eager: true, query: '?url', import: 'default' });

export const technologyLogos = {
  React: 'react',
  JavaScript: 'javascript',
  HTML: 'html5',
  CSS: 'css3',
  'Tailwind CSS': 'tailwindcss',
  Python: 'python',
  Django: 'django',
  'C#': 'csharp',
  SQLite: 'sqlite',
  MySQL: 'mysql',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'vscode',
  Vite: 'vitejs',
};

export const brandColors = {
  React: '#61DAFB',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#1572B6',
  'Tailwind CSS': '#06B6D4',
  Python: '#387EB8',
  Django: '#44B78B',
  'C#': '#A179DC',
  C: '#659AD2',
  SQL: '#38BDF8',
  SQLite: '#003B57',
  MySQL: '#4479A1',
  Git: '#F05032',
  GitHub: '#FFFFFF',
  'VS Code': '#007ACC',
  'Visual Studio': '#9B4F96',
  Vite: '#646CFF',
  Vercel: '#FFFFFF',
  Render: '#46E3B7',
  Netlify: '#00C7B7',
  OOP: '#F59E0B',
  'REST API Basics': '#8B5CF6',
  'Responsive Design': '#EC4899',
};

// Custom SVG components for C, Visual Studio, Vercel, Render, Netlify
const CustomIcons = {
  C: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.31 14.53c-1.18 1.01-2.69 1.57-4.3 1.57-3.66 0-6.63-2.97-6.63-6.63s2.97-6.63 6.63-6.63c1.61 0 3.12.56 4.3 1.57l-1.4 1.59c-.79-.68-1.78-1.06-2.9-1.06-2.5 0-4.53 2.03-4.53 4.53s2.03 4.53 4.53 4.53c1.12 0 2.11-.38 2.9-1.06l1.4 1.59z" />
    </svg>
  ),
  'Visual Studio': ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 24L24 18.5V5.5L17.5 0L1 11.5L6.5 15.5L17.5 4.5V19.5L6.5 8.5L1 12.5L17.5 24Z" />
    </svg>
  ),
  Vercel: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  ),
  Render: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.5 8.5 12 12.2 4.5 8.5 12 4.8zM4.5 10.8L11 14v6.2l-6.5-3.2v-6.2zm15 6.2L13 14v6.2l6.5-3.2v-6.2z" />
    </svg>
  ),
  Netlify: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.34 1.5A1.5 1.5 0 004.85 3l.87 3.51A1.5 1.5 0 007.2 7.71l9.6 2.4a1.5 1.5 0 001.8-1.12l.87-3.51a1.5 1.5 0 00-1.47-1.85L6.34 1.5zM2.85 10.5A1.5 1.5 0 001.35 12l.87 3.51a1.5 1.5 0 001.48 1.14l9.6-2.4a1.5 1.5 0 001.12-1.8l-.87-3.51a1.5 1.5 0 00-1.85-1.12L2.85 10.5z" />
    </svg>
  ),
};

export const conceptIcons = {
  SQL: Database,
  OOP: Boxes,
  'REST API Basics': Network,
  'Responsive Design': MonitorSmartphone,
};

export default function TechLogo({ name, size = 20, className = '' }) {
  const Icon = conceptIcons[name];
  const CustomIcon = CustomIcons[name];
  const logoKey = technologyLogos[name];
  const brandColor = brandColors[name] || '#60A5FA';

  if (CustomIcon) {
    return (
      <span
        className={`tech-logo-icon ${className}`}
        style={{ color: brandColor, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        title={name}
      >
        <CustomIcon size={size} />
      </span>
    );
  }

  if (Icon) {
    return (
      <span
        className={`tech-logo-icon ${className}`}
        style={{ color: brandColor, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        title={name}
      >
        <Icon size={size} aria-hidden="true" />
      </span>
    );
  }

  if (logoKey && logoFiles[`../assets/technology/${logoKey}.svg`]) {
    const src = logoFiles[`../assets/technology/${logoKey}.svg`];
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        className={`tech-logo-img ${className}`}
        style={{ width: size, height: size, objectFit: 'contain', flexShrink: 0 }}
        title={name}
      />
    );
  }

  return (
    <span className={`tech-logo-fallback ${className}`} style={{ color: brandColor }}>
      <Code2 size={size} />
    </span>
  );
}
