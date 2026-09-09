import { FiMapPin, FiCalendar, FiTrendingUp } from 'react-icons/fi'

const bullets = [
  {
    icon: '⚡',
    stat: '+25%',
    statLabel: 'Page Speed',
    text: 'Designed and built robust website architectures with HTML, CSS, and React.js, boosting page load speeds by 25%.',
    accent: 'var(--accent-blue)',
    accentRgb: '122, 162, 212',
  },
  {
    icon: '🖥️',
    stat: '-15%',
    statLabel: 'Server Response',
    text: 'Handled frontend and backend functionality utilizing Node.js and SQL, reducing server response times by 15%.',
    accent: 'var(--accent-teal)',
    accentRgb: '143, 188, 187',
  },
  {
    icon: '📈',
    stat: '+20%',
    statLabel: 'Organic Traffic',
    text: 'Performed foundational Technical SEO optimizations, increasing organic user traffic by 20%.',
    accent: 'var(--accent-green)',
    accentRgb: '163, 190, 140',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ paddingBlock: '6rem' }}>
      <div className="container-lg">
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Work Experience</h2>
        </div>

        {/* Timeline entry */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* Timeline indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
            <div className="timeline-dot" />
            <div className="timeline-line" />
          </div>

          {/* Card */}
          <div style={{ flex: 1, paddingBottom: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              {/* Role & Meta */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <span className="badge badge-blue">Current Role</span>
                  <span className="badge badge-green">Full-Time</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Web Developer
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    <FiMapPin size={13} style={{ color: 'var(--accent-blue)' }} />
                    Digital Marketing Agency · Lucknow
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                    <FiCalendar size={13} style={{ color: 'var(--accent-blue)' }} />
                    2026 – Present
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--bg-border)', marginBottom: '1.5rem' }} />

              {/* Bullets with stat callouts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {bullets.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--bg-border)',
                      borderRadius: 12,
                      borderLeft: `3px solid ${b.accent}`,
                    }}
                  >
                    {/* Stat badge */}
                    <div style={{
                      flexShrink: 0,
                      minWidth: 62,
                      textAlign: 'center',
                      padding: '0.3rem 0.4rem',
                      background: `rgba(${b.accentRgb}, 0.08)`,
                      border: `1px solid rgba(${b.accentRgb}, 0.15)`,
                      borderRadius: 8,
                    }}>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: b.accent, lineHeight: 1 }}>{b.stat}</div>
                      <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: 2 }}>{b.statLabel}</div>
                    </div>
                    {/* Text */}
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech used */}
              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['HTML', 'CSS', 'React.js', 'Node.js', 'SQL', 'Technical SEO'].map(t => (
                  <span key={t} className="skill-pill" style={{ fontSize: '0.73rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
