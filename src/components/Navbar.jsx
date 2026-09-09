import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Home',       href: '#hero' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="navbar"
      style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none' }}
    >
      <div className="container-lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.01em' }}
        >
          <span style={{ color: 'var(--accent-blue)' }}>Faique</span>
          <span style={{ color: 'var(--text-secondary)' }}>.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="hidden md:flex">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={(e) => handleNav(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginLeft: '1rem', padding: '0.45rem 1.1rem' }}
            onClick={(e) => handleNav(e, '#contact')}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--bg-border)',
            borderRadius: 8,
            color: 'var(--text-primary)',
            padding: '0.4rem 0.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu md:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem', gap: '0.25rem' }}>
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                style={{
                  color: 'var(--text-secondary)',
                  padding: '0.6rem 0.75rem',
                  borderRadius: 8,
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.target.style.color = 'var(--text-primary)'; e.target.style.background = 'var(--bg-elevated)'; }}
                onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.background = 'transparent'; }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
