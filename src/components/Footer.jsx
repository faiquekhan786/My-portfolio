import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-lg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {/* Brand */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }) }}
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.1rem' }}
        >
          <span style={{ color: 'var(--accent-blue)' }}>Faique</span>
          <span style={{ color: 'var(--text-muted)' }}>.dev</span>
        </a>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="https://github.com/faiquekhan786" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <FaGithub size={14} /> GitHub
          </a>
          <a href="https://leetcode.com/u/faiquekhan" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <SiLeetcode size={12} /> LeetCode
          </a>
          <a href="https://vercel.com/faiques-projects" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <svg width="11" height="11" viewBox="0 0 76 65" fill="currentColor"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>
            Vercel
          </a>
        </div>

        {/* Copyright */}
        <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          © {year} Faique Shareef · Built with
          <FiHeart size={11} style={{ color: 'var(--accent-blue)', fill: 'var(--accent-blue)' }} />
          using React & Tailwind
        </p>
      </div>
    </footer>
  )
}
