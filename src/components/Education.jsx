import { FiAward, FiBookOpen, FiStar } from 'react-icons/fi'

const education = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science / Engineering',
    icon: '🎓',
    accent: 'var(--accent-blue)',
    accentRgb: '122, 162, 212',
    status: 'Completed',
  },
  {
    id: 'diploma',
    degree: 'Diploma',
    field: 'Technical Education',
    icon: '📜',
    accent: 'var(--accent-teal)',
    accentRgb: '143, 188, 187',
    status: 'Completed',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-surface)', paddingBlock: '6rem' }}>
      <div className="container-lg">
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Background</p>
          <h2 className="section-title">Qualifications & Achievements</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Education cards column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <FiBookOpen size={13} /> Education
            </h3>

            {education.map(edu => (
              <div
                key={edu.id}
                className="card"
                style={{
                  padding: '1.5rem',
                  borderLeft: `3px solid ${edu.accent}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{edu.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{edu.degree}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{edu.field}</div>
                  </div>
                </div>
                <span className="badge badge-green" style={{ marginTop: '0.25rem' }}>✓ {edu.status}</span>
              </div>
            ))}
          </div>

          {/* GATE Achievement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <FiStar size={13} /> Achievements
            </h3>

            <div className="gate-card" style={{ padding: '2rem' }}>
              {/* Trophy icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: 'rgba(235, 203, 139, 0.1)',
                  border: '1px solid rgba(235, 203, 139, 0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem',
                }}>
                  🏆
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>
                    National Achievement
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--accent-amber)', lineHeight: 1.2 }}>
                    GATE 2026
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    Qualified
                  </div>
                </div>
              </div>

              {/* Score */}
              <div style={{
                background: 'rgba(235, 203, 139, 0.06)',
                border: '1px solid rgba(235, 203, 139, 0.15)',
                borderRadius: 12,
                padding: '1.25rem',
                textAlign: 'center',
                marginBottom: '1rem',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: 4 }}>
                  GATE Score
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-amber)', lineHeight: 1, fontFamily: "'Outfit', sans-serif" }}>
                  495
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4 }}>
                  Graduate Aptitude Test in Engineering
                </div>
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem' }}>
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} size={14} style={{ color: i < 4 ? 'var(--accent-amber)' : 'var(--text-muted)', fill: i < 4 ? 'var(--accent-amber)' : 'none' }} />
                ))}
              </div>

              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.75rem', lineHeight: 1.5 }}>
                Nationally recognized competitive examination for engineering graduates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
