// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

/* ═══════════════════════════════════════════════════════════════════
   SKILL ICONS — using Devicon CDN
   ═══════════════════════════════════════════════════════════════════ */
const TECH_SKILLS = [
  { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'C++',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Postman',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'JUnit',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg' },
  { name: 'Selenium',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
  { name: 'Pytest',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg' },
  { name: 'Jenkins',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg' },
  { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Linux',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
];

/* ── predefined positions for floating icons (% based) ─────────── */
const POSITIONS = [
  { x: 12, y: 22 }, { x: 55, y: 15 }, { x: 82, y: 28 },
  { x: 25, y: 55 }, { x: 68, y: 48 }, { x: 8,  y: 78 },
  { x: 45, y: 72 }, { x: 78, y: 70 }, { x: 35, y: 38 },
  { x: 60, y: 85 }, { x: 18, y: 90 }, { x: 88, y: 55 },
];

/* ═══════════════════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════════════════ */

/* Scroll reveal — adds 'visible' class when element enters viewport */
function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ═══════════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">
          IRUOBE<span>.</span>
        </a>

        <div className="navbar-links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>

        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      <div className="hero-content">
        <div className="hero-badge">Software Engineering Graduate</div>
        <h1 className="hero-title">Iruobe<br />Akpatason</h1>
        <p className="hero-tagline">
          Building reliable software through clean code and thorough testing.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ABOUT
   ═══════════════════════════════════════════════════════════════════ */
function About() {
  const ref = useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about-inner scroll-reveal" ref={ref}>
        <div className="about-image">
          <span className="about-image-placeholder">Coming Soon</span>
          <div className="about-image-accent" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a motivated Software Engineering graduate with a focus on
            building high-quality, scalable applications. My passion lies in
            bridging the gap between elegant user experiences and robust,
            well-tested backend logic.
          </p>
          <p>
            With experience spanning web and mobile development, I leverage
            tools like Jenkins and Selenium to ensure every line of code meets
            industry standards for reliability and performance.
          </p>
          {/* <div className="about-badge">
            <div className="about-badge-icon">✓</div>
            NTU Software Engineering Graduate
          </div> */}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FLOATING TECH FIELD — icons float & react to mouse
   ═══════════════════════════════════════════════════════════════════ */
function FloatingTechField() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const iconRefs = useRef([]);
  const animFrameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  /* Animation loop: push icons away from cursor */
  useEffect(() => {
    const animate = () => {
      const mouse = mouseRef.current;
      const container = containerRef.current;
      if (!container) return;

      iconRefs.current.forEach((el) => {
        if (!el) return;

        if (mouse.active) {
          const rect = el.getBoundingClientRect();
          const contRect = container.getBoundingClientRect();
          const iconCenterX = rect.left - contRect.left + rect.width / 2;
          const iconCenterY = rect.top - contRect.top + rect.height / 2;

          const dx = iconCenterX - mouse.x;
          const dy = iconCenterY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 40;
            const angle = Math.atan2(dy, dx);
            const tx = Math.cos(angle) * force;
            const ty = Math.sin(angle) * force;
            el.style.transform = `translate(${tx}px, ${ty}px)`;
          } else {
            el.style.transform = 'translate(0, 0)';
          }
        } else {
          el.style.transform = 'translate(0, 0)';
        }
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  return (
    <div
      className="tech-field"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tech-field-title">
         Technical Proficiencies
      </div>

      {TECH_SKILLS.map((skill, i) => {
        const pos = POSITIONS[i];
        const floatClass = `float-anim-${(i % 6) + 1}`;

        return (
          <div
            key={skill.name}
            className={`floating-icon ${floatClass}`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            ref={(el) => (iconRefs.current[i] = el)}
          >
            <div className="floating-icon-img">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <span className="floating-icon-label">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SKILLS SECTION
   ═══════════════════════════════════════════════════════════════════ */
const SOFT_SKILLS = [
  'Team Collaboration',
  'Remote Communication',
  'Analytical Debugging',
  'Adaptability',
  'Continuous Learner',
];

function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="skills" id="skills">
      <div className="skills-inner scroll-reveal" ref={ref}>
        <h2>Expertise &amp; Skills</h2>
        <p className="skills-subtitle">
          Tools, technologies, and qualities I bring to every project.
        </p>

        <div className="skills-grid">
          <FloatingTechField />

          <div className="soft-skills-card">
            <h3> Soft Skills</h3>
            <div>
              {SOFT_SKILLS.map((s) => (
                <span key={s} className="soft-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PROJECT CARD
   ═══════════════════════════════════════════════════════════════════ */
function ProjectCard({ title, desc, tags, gradient }) {
  const ref = useScrollReveal();

  return (
    <div className="project-card scroll-reveal" ref={ref}>
      <div className="project-card-image" style={{ background: gradient }}>
        {title} Preview
      </div>
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PROJECTS SECTION
   ═══════════════════════════════════════════════════════════════════ */
function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <h2>Selected Projects</h2>
        <p className="projects-subtitle">
          Showcasing my technical approach to software development and testing.
        </p>

        
        <div className="projects-grid">
          <a href='https://github.com/Iruobe/HangOut' className="projects-link1">
          <ProjectCard
            title="Hangout"
            desc="A mobile application built with Java and Firebase. Focused heavily on shift-left testing methodologies and rigorous defect tracking during development."
            tags={['Java', 'Android Studio', 'Firebase', 'JUnit']}
            gradient="linear-gradient(135deg, rgba(40,72,104,0.15), rgba(247,220,161,0.2))"
          /></a>
        
          <a href='https://github.com/Iruobe/HandyApp' className="projects-link2">
          <ProjectCard
            title="Handy"
            desc="Dual-role mobile application featuring user authentication, real-time messaging, and specialised UI states for different user types."
            tags={['React Native', 'Firebase', 'Real-time Messaging']}
            gradient="linear-gradient(135deg, rgba(247,220,161,0.25), rgba(40,72,104,0.1))"
          /></a>
        </div>

        {/* Live & Upcoming */}
        <h3 className="live-heading">Live &amp; Upcoming</h3>

        <div className="live-grid">
          <a href="https://www.candourresidences.com/" className="live-card">
            <div>
              <h4>Candour Residence</h4>
              <p>Professional property leasing website with responsive UI.</p>
            </div>
            <span className="live-card-arrow">→</span>
          </a>

          <div className="live-card-disabled">
            <div className="live-card-disabled-content">
              <h4>Plant IT</h4>
              <p>Eco-conscious tracking application.</p>
            </div>
            <div className="coming-soon-badge">
              <span>COMING SOON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   EXPERIENCE / TIMELINE
   ═══════════════════════════════════════════════════════════════════ */
const TIMELINE = [
  {
    icon: '💼',
    title: 'Holiday Inn',
    role: 'Receptionist / Bar',
    time: '09/2025 – Present',
    desc: 'First-line guest support, booking systems, troubleshooting and escalation in high-pressure environments.',
  },
  {
    icon: '🎓',
    title: 'Nottingham Trent University',
    role: 'BSc(H) Software Engineering',
    time: 'Graduated 2024',
    desc: 'Focused on software lifecycle, architecture, and automated testing frameworks.',
  },
  {
    icon: '👥',
    title: 'NTU Student Mentor',
    role: 'Academic Mentorship',
    time: '09/2022 – 06/2023',
    desc: 'Guided incoming students with programming concepts and navigating university challenges.',
  },
];

function TimelineItem({ item }) {
  const ref = useScrollReveal();

  return (
    <div className="timeline-item scroll-reveal" ref={ref}>
      <div className="timeline-dot">{item.icon}</div>
      <div className="timeline-card">
        <div className="timeline-card-header">
          <strong>{item.title}</strong>
          <time>{item.time}</time>
        </div>
        <div className="timeline-card-role">{item.role}</div>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-inner">
        <h2>Timeline</h2>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════════════════════════════ */
function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="contact" id="contact">
      <div className="contact-glow" />

      <div className="contact-inner scroll-reveal" ref={ref}>
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm currently looking for new opportunities in Software Engineering
            and QA Automation. Feel free to reach out for collaborations or just
            a friendly tech chat.
          </p>

          <div className="contact-link">
            <div className="contact-link-icon">✉</div>
            <div>
              <div className="contact-link-label">Email</div>
              <a href="mailto:iruobe20@gmail.com" className="contact-link-value">
                iruobe20@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-link">
            <div className="contact-link-icon">🔗</div>
            <div>
              <div className="contact-link-label">LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/iruobe-a-816591b1"
                target="_blank"
                rel="noreferrer"
                className="contact-link-value"
              >
                Iruobe Akpatason
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form-row">
            <div>
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
          </div>
          <div className="contact-form-group">
            <label>Message</label>
            <textarea rows={4} placeholder="How can I help you?" />
          </div>
          <button className="btn-submit">Send Message</button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">© 2025 Iruobe Akpatason. Built with clean code.</span>

      <div className="footer-socials">
        {/* GitHub */}
        <a href="#" className="footer-social-link" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
              fill="#284868"
            />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/iruobe-a-816591b1" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM6.84 20.452H3.834V9H6.84v11.452Z"
              fill="#284868"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   APP ROOT
   ═══════════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}