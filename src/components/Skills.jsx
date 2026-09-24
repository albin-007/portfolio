import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { Reveal, transition } from './Motion';
import TechLogo, { brandColors } from './TechLogo';

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="skills frame">
      <Reveal className="skills-inner">
        <header className="skills-header">
          <span className="ghost-title" aria-hidden="true">SKILLS</span>
          <h2>/SKILLS</h2>
          <span>FULL STACK DEVELOPMENT</span>
        </header>

        {/* Clean Categorized Skills List with Grayscale to Color Hover Transition */}
        <div className="skill-list">
          {skills.map((skill, i) => {
            const isHovered = active === i;

            return (
              <motion.div
                className={`skill-row ${isHovered ? 'hovered' : ''}`}
                key={skill.title}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...transition, delay: i * 0.065 }}
              >
                <div className="skill-row-main">
                  <div className="skill-title-group">
                    <h3>{skill.title}</h3>
                    <span className="skill-label">{skill.label}</span>
                  </div>

                  <div className="skill-badges">
                    {skill.items.map((name) => {
                      const color = brandColors[name] || '#60A5FA';
                      return (
                        <motion.div
                          key={name}
                          className="skill-badge"
                          style={{
                            '--badge-brand-color': color,
                            '--badge-brand-color-shadow': `${color}40`,
                          }}
                          whileHover={{ scale: 1.06, y: -2 }}
                          transition={{ duration: 0.25 }}
                        >
                          <TechLogo name={name} size={19} />
                          <span className="skill-badge-name">{name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <motion.div
                  className="skill-divider"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.07 }}
                />
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
