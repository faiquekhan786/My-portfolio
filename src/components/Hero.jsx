import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const RESUME_URL =
  'https://raw.githubusercontent.com/faiquekhan786/faique-shareef-resume/main/faique%20shareef%20resume.pdf'

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ paddingTop: '5rem' }}
    >
      <div className="container-lg" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          paddingBlock: '3rem',
        }}>

          {/* ── Text Side ── */}
          <div className="animate-fade-in-up" style={{ order: 1 }}>
            {/* Status badge */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="badge badge-green">
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: 'var(--accent-green)',
                  display: 'inline-block',
                  animation: 'blink 1.5s ease-in-out infinite',
                }} />
                Open to Opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="accent">Faique<br />Shareef</span>
            </h1>

            {/* Role chip */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '0.75rem',
              marginBottom: '1.25rem',
              padding: '0.35rem 0.9rem',
              background: 'rgba(122, 162, 212, 0.1)',
              border: '1px solid rgba(122, 162, 212, 0.2)',
              borderRadius: '999px',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-blue)' }} />
              <span style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem' }}>
                Web Developer
              </span>
            </div>

            {/* Tagline */}
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              maxWidth: 480,
              marginBottom: '2rem',
            }}>
              Dedicated Web Developer eager to write clean code, solve complex problems,
              and build highly responsive web applications.
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                View My Work <FiArrowRight />
              </a>

              {/* ── Resume Download Button ── */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="Faique_Shareef_Resume.pdf"
                className="btn"
                style={{
                  background: 'rgba(163, 190, 140, 0.12)',
                  color: 'var(--accent-green)',
                  border: '1px solid rgba(163, 190, 140, 0.3)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(163, 190, 140, 0.22)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(163, 190, 140, 0.18)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(163, 190, 140, 0.12)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <FiDownload size={15} /> Download Resume
              </a>

              <a
                href="#contact"
                className="btn btn-outline"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Get In Touch
              </a>
            </div>

            {/* Social quick links */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="https://github.com/faiquekhan786" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub size={16} /> GitHub
              </a>
              <a href="https://leetcode.com/u/faiquekhan" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
                <SiLeetcode size={14} /> LeetCode
              </a>
              <a href="https://vercel.com/faiques-projects" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Vercel">
                <svg width="14" height="14" viewBox="0 0 76 65" fill="currentColor"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>
                Vercel
              </a>
            </div>
          </div>

          {/* ── Avatar Side ── */}
          <div
            className="animate-float"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              order: 2,
              position: 'relative',
            }}
          >
            {/* Decorative rings */}
            <div style={{
              position: 'absolute',
              width: 300, height: 300,
              borderRadius: '50%',
              border: '1px dashed rgba(122, 162, 212, 0.15)',
            }} />
            <div style={{
              position: 'absolute',
              width: 360, height: 360,
              borderRadius: '50%',
              border: '1px dashed rgba(122, 162, 212, 0.08)',
            }} />

            {/* Avatar */}
            <div className="avatar-ring" style={{ width: 220, height: 220 }}>
              <img
                src="/profile.jpg"
                alt="Faique Shareef – Web Developer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '50%' }}
              />
            </div>

            {/* Floating achievement badge */}
            <div style={{
              position: 'absolute',
              bottom: -8,
              right: '10%',
              background: 'var(--bg-surface)',
              border: '1px solid rgba(235, 203, 139, 0.3)',
              borderRadius: 12,
              padding: '0.55rem 0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{ fontSize: '1.1rem' }}>🏆</span>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 500 }}>Achievement</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', fontWeight: 700 }}>GATE 2026 Qualified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', opacity: 0.4 }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{
              width: 24, height: 38, border: '2px solid var(--bg-border)',
              borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 6,
            }}>
              <div style={{
                width: 4, height: 8, background: 'var(--accent-blue)', borderRadius: 2,
                animation: 'float 1.5s ease-in-out infinite',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
