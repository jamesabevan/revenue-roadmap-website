const stats = [
  { value: '£225M', label: 'Peak revenue responsibility' },
  { value: '100+', label: 'Person global team led' },
  { value: '3', label: 'Distinct growth stages operated across' },
];

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative py-24 md:py-36"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
          opacity: 0.4,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="h-px w-12"
              style={{ backgroundColor: 'var(--gold)' }}
            />
            <span
              className="text-xs font-body uppercase tracking-widest"
              style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
            >
              Fractional CRO
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display leading-tight mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--text-primary)',
              fontWeight: 500,
            }}
          >
            Your revenue motion worked.
            <br />
            <span style={{ color: 'var(--text-secondary)' }}>
              Then you scaled.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            I work with post-Series B B2B SaaS and PE-backed technology businesses
            to diagnose and fix the revenue infrastructure problems that emerge
            between £5M and £50M ARR — before the board starts asking questions
            nobody can answer.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button
              onClick={scrollToContact}
              className="px-7 py-3.5 text-sm font-body font-medium transition-all"
              style={{
                backgroundColor: 'var(--gold)',
                color: '#0B0D14',
                borderRadius: '4px',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--gold)')}
            >
              Book a conversation
            </button>
            <button
              onClick={scrollToServices}
              className="px-7 py-3.5 text-sm font-body font-medium transition-all"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--text-muted)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              See how I work
            </button>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {stats.map((stat) => (
              <div key={stat.value}>
                <div
                  className="font-mono text-3xl md:text-4xl font-medium mb-1"
                  style={{ color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-body uppercase tracking-wide"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
