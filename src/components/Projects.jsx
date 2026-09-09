import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 'figma-clone',
    title: 'Figma Clone',
    emoji: '🎨',
    description:
      'Replicated core Figma UI functionalities and state management for concurrent users. Supports real-time collaboration powered by WebSockets.',
    tech: ['React.js', 'Node.js', 'WebSocket', 'Canvas API'],
    liveUrl: 'https://vercel.com/faiques-projects',
    accentColor: 'var(--accent-purple)',
    accentRgb: '180, 142, 173',
    highlights: ['Concurrent users', 'Real-time sync', 'State management'],
  },
  {
    id: 'finance-manager',
    title: 'Personal Finance Manager',
    emoji: '💰',
    description:
      'Full-stack application with REST APIs and optimized SQL database queries, reducing load times by 30%. Complete income/expense tracking with analytics.',
    tech: ['Node.js', 'Express.js', 'SQL', 'REST API', 'React.js'],
    liveUrl: 'https://vercel.com/faiques-projects',
    accentColor: 'var(--accent-green)',
    accentRgb: '163, 190, 140',
    highlights: ['30% faster loads', 'REST APIs', 'Full-stack'],
  },
  {
    id: 'password-generator',
    title: 'React Password Generator',
    emoji: '🔐',
    description:
      'Dynamic password generator built with React. Features custom UI constraints, configurable length/character sets, and one-click clipboard integration.',
    tech: ['React.js', 'useState', 'useCallback', 'Clipboard API'],
    liveUrl: 'https://vercel.com/faiques-projects',
    accentColor: 'var(--accent-teal)',
    accentRgb: '143, 188, 187',
    highlights: ['Clipboard API', 'Dynamic state', 'Custom constraints'],
  },
]

function TechChip({ label, color }) {
  return (
    <span style={{
      fontSize: '0.72rem',
      fontWeight: 600,
      padding: '0.25rem 0.65rem',
      borderRadius: 999,
      background: `rgba(${color}, 0.1)`,
      border: `1px solid rgba(${color}, 0.22)`,
      color: `rgba(${color}, 1)`,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="project-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Color accent bar */}
      <div style={{ height: 4, background: `linear-gradient(to right, ${project.accentColor}, transparent)` }} />

      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12,
              background: `rgba(${project.accentRgb}, 0.1)`,
              border: `1px solid rgba(${project.accentRgb}, 0.2)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem',
            }}>
              {project.emoji}
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
              {project.title}
            </h3>
          </div>
          <span className="badge badge-blue" style={{ flexShrink: 0 }}>Live</span>
        </div>

        {/* Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.highlights.map(h => (
            <span key={h} style={{
              fontSize: '0.72rem',
              padding: '0.2rem 0.55rem',
              borderRadius: 6,
              background: 'var(--bg-elevated)',
              color: 'var(--text-muted)',
              border: '1px solid var(--bg-border)',
            }}>
              ✓ {h}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tech.map(t => (
            <TechChip key={t} label={t} color={project.accentRgb} />
          ))}
        </div>

        {/* CTA */}
        <a
          id={`project-live-${project.id}`}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{
            justifyContent: 'center',
            background: `rgba(${project.accentRgb}, 0.15)`,
            color: project.accentColor,
            border: `1px solid rgba(${project.accentRgb}, 0.3)`,
            width: '100%',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `rgba(${project.accentRgb}, 0.25)`
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = `0 8px 24px rgba(${project.accentRgb}, 0.2)`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `rgba(${project.accentRgb}, 0.15)`
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <FiExternalLink size={15} /> Live Demo on Vercel
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ paddingBlock: '6rem' }}>
      <div className="container-lg">
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Live Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, fontSize: '1rem' }}>
            A selection of real-world projects deployed on Vercel—click any card to see it live.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>

        {/* View all CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://vercel.com/faiques-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Deployments on Vercel
            <svg width="13" height="13" viewBox="0 0 76 65" fill="currentColor" style={{ marginLeft: 4 }}><path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
