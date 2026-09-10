import { useState } from 'react'
import { FiExternalLink, FiMonitor, FiAlertCircle } from 'react-icons/fi'

/* ------------------------------------------------------------------ */
/*  Project data – real live Vercel URLs                               */
/* ------------------------------------------------------------------ */
const projects = [
  {
    id: 'figma-clone',
    title: 'Figma Clone',
    emoji: '🎨',
    category: 'Design Tool',
    description:
      'Replicated core Figma UI functionalities and state management for concurrent users. Real-time collaboration powered by WebSockets with a pixel-perfect canvas.',
    tech: ['React.js', 'Node.js', 'WebSocket', 'Canvas API'],
    liveUrl: 'https://project-figma-clone.vercel.app/',
    accentColor: 'var(--accent-purple)',
    accentRgb: '180, 142, 173',
    highlights: ['Concurrent users', 'Real-time sync', 'State management'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Website',
    emoji: '📣',
    category: 'Marketing',
    description:
      'A fully responsive digital marketing agency website with modern landing sections, service showcases, animated hero, and conversion-optimised CTAs.',
    tech: ['React.js', 'CSS3', 'Tailwind', 'SEO'],
    liveUrl: 'https://digital-marketing-website-gold.vercel.app/',
    accentColor: 'var(--accent-blue)',
    accentRgb: '122, 162, 212',
    highlights: ['Fully responsive', 'SEO optimised', 'Modern UI'],
  },
  {
    id: 'real-estate',
    title: 'OM Galaxy Real Estate',
    emoji: '🏡',
    category: 'Real Estate',
    description:
      'Luxury real estate platform — OM Galaxy — featuring property listings, precision-crafted UI, and a premium browsing experience for high-end buyers and agents.',
    tech: ['React.js', 'CSS3', 'Node.js', 'REST API'],
    liveUrl: 'https://real-estate-website-faique.vercel.app/',
    localPreview: '/preview-real-estate.png',
    accentColor: 'var(--accent-teal)',
    accentRgb: '143, 188, 187',
    highlights: ['Luxury listings', 'Premium UI', 'Responsive'],
  },
  {
    id: 'password-generator',
    title: 'React Password Generator',
    emoji: '🔐',
    category: 'Utility Tool',
    description:
      'Dynamic password generator with configurable length, character sets, and one-click clipboard copy. Built with React hooks for snappy, real-time generation.',
    tech: ['React.js', 'useState', 'useCallback', 'Clipboard API'],
    liveUrl: 'https://password-generator-faique.vercel.app/',
    localPreview: '/preview-password.png',
    accentColor: 'var(--accent-green)',
    accentRgb: '163, 190, 140',
    highlights: ['Clipboard API', 'Custom constraints', 'Dynamic state'],
  },
]

/* ------------------------------------------------------------------ */
/*  Screenshot URL via microlink (free, no API key, live screenshots)  */
/* ------------------------------------------------------------------ */
function screenshotUrl(siteUrl) {
  return `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`
}

/* ------------------------------------------------------------------ */
/*  Single project card with live preview                              */
/* ------------------------------------------------------------------ */
function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Use uploaded screenshot if provided, otherwise fetch live via Microlink
  const previewSrc = project.localPreview
    ? project.localPreview
    : screenshotUrl(project.liveUrl)

  return (
    <div
      className="project-card"
      style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}
    >
      {/* ── Live Screenshot Preview ─────────────────────────────── */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', position: 'relative', flexShrink: 0 }}
        aria-label={`Open ${project.title} live`}
      >
        {/* Accent top bar */}
        <div style={{
          height: 3,
          background: `linear-gradient(to right, ${project.accentColor}, rgba(${project.accentRgb},0.3))`,
        }} />

        {/* Browser chrome bar */}
        <div style={{
          background: 'var(--bg-elevated)',
          borderBottom: '1px solid var(--bg-border)',
          padding: '0.45rem 0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          {/* Traffic lights */}
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57', flexShrink: 0 }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e', flexShrink: 0 }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28ca41', flexShrink: 0 }} />
          {/* URL bar */}
          <div style={{
            flex: 1,
            background: 'var(--bg-surface)',
            border: '1px solid var(--bg-border)',
            borderRadius: 5,
            padding: '0.2rem 0.55rem',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {project.liveUrl.replace('https://', '')}
          </div>
          <FiExternalLink size={11} color="var(--text-muted)" style={{ flexShrink: 0 }} />
        </div>

        {/* Screenshot image */}
        <div style={{
          position: 'relative',
          height: 185,
          background: 'var(--bg-elevated)',
          overflow: 'hidden',
        }}>
          {/* Skeleton shimmer while loading */}
          {!imgLoaded && !imgError && (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, var(--bg-elevated) 25%, var(--bg-surface) 50%, var(--bg-elevated) 75%)',
              backgroundSize: '400px 100%',
              animation: 'shimmer 1.5s infinite linear',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FiMonitor size={28} color="var(--text-muted)" style={{ opacity: 0.4 }} />
            </div>
          )}

          {/* Fallback if screenshot fails */}
          {imgError && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '0.5rem',
              background: `rgba(${project.accentRgb}, 0.04)`,
            }}>
              <span style={{ fontSize: '2.5rem' }}>{project.emoji}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', padding: '0 1rem' }}>
                Click to open live project
              </span>
            </div>
          )}

          {/* Actual screenshot */}
          <img
            src={previewSrc}
            alt={`${project.title} live preview`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              display: imgError ? 'none' : 'block',
              opacity: imgLoaded ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Hover overlay with "View Live" */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `rgba(${project.accentRgb}, 0.0)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.25s ease',
          }}
            className="project-preview-overlay"
          >
            <span style={{
              opacity: 0,
              transform: 'translateY(6px)',
              transition: 'all 0.25s ease',
              background: `rgba(${project.accentRgb}, 0.9)`,
              color: '#1a1f2e',
              fontWeight: 700,
              fontSize: '0.8rem',
              padding: '0.4rem 1rem',
              borderRadius: 999,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
              className="project-view-label"
            >
              <FiExternalLink size={13} /> Open Live Site
            </span>
          </div>
        </div>
      </a>

      {/* ── Card Body ──────────────────────────────────────────────── */}
      <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <span style={{ fontSize: '1.1rem' }}>{project.emoji}</span>
            <h3 style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
              {project.title}
            </h3>
          </div>
          <span style={{
            fontSize: '0.65rem', fontWeight: 600, padding: '0.18rem 0.55rem',
            borderRadius: 999,
            background: `rgba(${project.accentRgb}, 0.1)`,
            color: project.accentColor,
            border: `1px solid rgba(${project.accentRgb}, 0.2)`,
            whiteSpace: 'nowrap',
          }}>
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.9rem', flex: 1 }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.1rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.55rem',
              borderRadius: 999,
              background: `rgba(${project.accentRgb}, 0.08)`,
              color: project.accentColor,
              border: `1px solid rgba(${project.accentRgb}, 0.18)`,
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Live Demo button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            justifyContent: 'center',
            background: `rgba(${project.accentRgb}, 0.12)`,
            color: project.accentColor,
            border: `1px solid rgba(${project.accentRgb}, 0.28)`,
            width: '100%',
            fontWeight: 700,
            fontSize: '0.83rem',
            padding: '0.6rem',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `rgba(${project.accentRgb}, 0.22)`
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = `0 8px 24px rgba(${project.accentRgb}, 0.2)`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `rgba(${project.accentRgb}, 0.12)`
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          <FiExternalLink size={13} /> View Live Project
        </a>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function Projects() {
  return (
    <section id="projects" style={{ paddingBlock: '6rem' }}>
      <div className="container-lg">
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Live Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 500, fontSize: '1rem' }}>
            Real projects deployed on Vercel — each card shows a live screenshot of the site.
            Click any card or button to open the project directly.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>

        {/* View all */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://vercel.com/faiques-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Deployments on Vercel
            <svg width="13" height="13" viewBox="0 0 76 65" fill="currentColor" style={{ marginLeft: 4 }}>
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Hover overlay CSS injected via style tag */}
      <style>{`
        .project-card:hover .project-preview-overlay {
          background: rgba(0,0,0,0.45) !important;
        }
        .project-card:hover .project-view-label {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
