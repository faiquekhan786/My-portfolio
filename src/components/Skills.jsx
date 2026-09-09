const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '🖥️',
    accent: 'var(--accent-blue)',
    accentRgb: '122, 162, 212',
    skills: [
      { name: 'HTML5',       icon: '🟠' },
      { name: 'CSS3',        icon: '🔵' },
      { name: 'JavaScript',  icon: '🟡' },
      { name: 'React.js',    icon: '⚛️' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    icon: '⚙️',
    accent: 'var(--accent-teal)',
    accentRgb: '143, 188, 187',
    skills: [
      { name: 'Node.js',     icon: '🟢' },
      { name: 'Express.js',  icon: '🔲' },
      { name: 'SQL',         icon: '🗄️' },
      { name: 'REST APIs',   icon: '🔗' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Concepts',
    icon: '🛠️',
    accent: 'var(--accent-purple)',
    accentRgb: '180, 142, 173',
    skills: [
      { name: 'Git',                 icon: '🔀' },
      { name: 'GitHub',              icon: '🐙' },
      { name: 'Canva',               icon: '🎨' },
      { name: 'SEO',                 icon: '📈' },
      { name: 'C++',                 icon: '⚡' },
      { name: 'Java',                icon: '☕' },
      { name: 'Algorithms',          icon: '🧠' },
      { name: 'Computer Networks',   icon: '🌐' },
    ],
  },
]

function SkillChip({ skill, accent, accentRgb }) {
  return (
    <div
      className="skill-pill"
      style={{ cursor: 'default' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent
        e.currentTarget.style.color = accent
        e.currentTarget.style.background = `rgba(${accentRgb}, 0.08)`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = ''
        e.currentTarget.style.color = ''
        e.currentTarget.style.background = ''
      }}
    >
      <span style={{ fontSize: '0.9rem' }}>{skill.icon}</span>
      {skill.name}
    </div>
  )
}

function SkillCategory({ cat }) {
  return (
    <div className="card" style={{ padding: '1.75rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: 42, height: 42, borderRadius: 10, fontSize: '1.2rem',
          background: `rgba(${cat.accentRgb}, 0.1)`,
          border: `1px solid rgba(${cat.accentRgb}, 0.2)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {cat.icon}
        </div>
        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{cat.title}</h3>
      </div>

      {/* Accent bar */}
      <div style={{
        height: 2, borderRadius: 2,
        background: `linear-gradient(to right, ${cat.accent}, transparent)`,
        marginBottom: '1.25rem',
      }} />

      {/* Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {cat.skills.map(s => (
          <SkillChip key={s.name} skill={s} accent={cat.accent} accentRgb={cat.accentRgb} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-surface)', paddingBlock: '6rem' }}>
      <div className="container-lg">
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 460, fontSize: '1rem' }}>
            A curated toolkit built across frontend, backend, and engineering fundamentals.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {skillCategories.map(cat => <SkillCategory key={cat.id} cat={cat} />)}
        </div>
      </div>
    </section>
  )
}
