import { FaWhatsapp, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg-surface)', paddingBlock: '6rem' }}>
      <div className="container-lg">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Quick Connect</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', fontSize: '1rem' }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          maxWidth: 780,
          margin: '0 auto 3rem',
        }}>
          {/* WhatsApp */}
          <a
            id="contact-whatsapp"
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{
              width: 46, height: 46, borderRadius: 12, flexShrink: 0,
              background: 'rgba(37, 211, 102, 0.12)',
              border: '1px solid rgba(37, 211, 102, 0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FaWhatsapp size={22} color="#25d366" />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>WhatsApp</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Direct Message</div>
            </div>
          </a>

          {/* Email */}
          <a
            id="contact-email"
            href="mailto:faiquekhan786@gmail.com"
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{
              width: 46, height: 46, borderRadius: 12, flexShrink: 0,
              background: 'rgba(122, 162, 212, 0.1)',
              border: '1px solid rgba(122, 162, 212, 0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FaEnvelope size={20} color="var(--accent-blue)" />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Email</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Send a Mail</div>
            </div>
          </a>

          {/* Phone */}
          <a
            id="contact-phone"
            href="tel:+919999999999"
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{
              width: 46, height: 46, borderRadius: 12, flexShrink: 0,
              background: 'rgba(143, 188, 187, 0.1)',
              border: '1px solid rgba(143, 188, 187, 0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FaPhone size={18} color="var(--accent-teal)" />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Phone</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Direct Call</div>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Find me online
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a
              id="social-github"
              href="https://github.com/faiquekhan786"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub size={18} /> github.com/faiquekhan786
            </a>
            <a
              id="social-leetcode"
              href="https://leetcode.com/u/faiquekhan"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <SiLeetcode size={16} /> leetcode.com/u/faiquekhan
            </a>
            <a
              id="social-vercel"
              href="https://vercel.com/faiques-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="14" height="14" viewBox="0 0 76 65" fill="currentColor"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>
              Vercel Deployments
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
