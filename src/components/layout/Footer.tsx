const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          <div className="max-w-xs">
            <div className="mb-3">
              <span className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                James Bevan
              </span>
              <div className="text-xs tracking-widest uppercase mt-0.5 font-body" style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}>
                Fractional CRO
              </div>
            </div>
            <p className="text-sm font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Senior revenue leadership for post-Series B B2B SaaS and PE-backed technology businesses.
            </p>
            <a
              href="https://www.linkedin.com/in/james-a-bevan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-body transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-body uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
                Navigation
              </p>
              <ul className="space-y-3">
                {[
                  { label: 'How I Work', href: '/#services' },
                  { label: 'The Range', href: '/#range' },
                  { label: 'Case Studies', href: '/#case-studies' },
                  { label: 'About', href: '/about' },
                ].map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-body transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-body uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:james@thecroquet.com"
                    className="text-sm font-body transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    james@thecroquet.com
                  </a>
                </li>
                <li>
                  <span className="text-sm font-body" style={{ color: 'var(--text-secondary)' }}>
                    Cardiff, UK
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div
          className="mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>
            © {year} James Bevan. All rights reserved.
          </p>
          <p className="text-xs font-body" style={{ color: 'var(--text-muted)' }}>
            thecroquet.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
