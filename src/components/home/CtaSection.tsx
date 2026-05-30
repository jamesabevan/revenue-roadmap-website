const CtaSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-20 md:py-28"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">

          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
            <span
              className="text-xs font-body uppercase tracking-widest"
              style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
            >
              Let's Talk
            </span>
          </div>

          <h2
            className="font-display leading-tight mb-6"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: 'var(--text-primary)',
              fontWeight: 500,
            }}
          >
            If your revenue growth has plateaued
            and you're not sure why — let's talk.
          </h2>

          <p
            className="font-body text-base leading-relaxed mb-10"
            style={{ color: 'var(--text-secondary)', maxWidth: '36rem' }}
          >
            No pitch deck. No lengthy proposal. A direct conversation about what's
            actually happening in your revenue engine and whether there's a fit.
          </p>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 text-sm font-body font-medium transition-all"
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

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
