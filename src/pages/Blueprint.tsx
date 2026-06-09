const Blueprint = () => {
  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50"
        style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <span className="font-display" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              James Bevan
            </span>
            <span style={{ color: 'var(--text-muted)' }}> · </span>
            <span className="font-display" style={{ color: 'var(--gold)', fontWeight: 500 }}>
              CROquet
            </span>
          </div>
          <button
            onClick={scrollToBook}
            className="font-body text-sm font-medium px-5 py-2.5 transition-all"
            style={{ backgroundColor: 'var(--gold)', color: '#0B0D14', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--gold)')}
          >
            Book a call
          </button>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6">

          <div
            className="inline-flex items-center mb-8 px-3 py-1.5"
            style={{ border: '1px solid var(--border)', borderRadius: '4px' }}
          >
            <span
              className="font-mono text-xs"
              style={{ color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}
            >
              Fixed price · 15 working days
            </span>
          </div>

          <h1
            className="font-display leading-tight mb-6"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            The Revenue Blueprint
          </h1>

          <p
            className="font-body text-lg leading-relaxed mb-10"
            style={{ color: 'var(--text-secondary)', maxWidth: '36rem' }}
          >
            A structured diagnostic and fix roadmap for B2B SaaS businesses that have
            outgrown their current revenue motion. You get a clear picture of what's
            breaking — and the specific steps to fix it.
          </p>

          <button
            onClick={scrollToBook}
            className="font-body font-medium px-8 py-4 text-base transition-all"
            style={{ backgroundColor: 'var(--gold)', color: '#0B0D14', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--gold)')}
          >
            Book the diagnostic — £3,500
          </button>

          <p className="font-body text-sm mt-4" style={{ color: 'var(--text-muted)' }}>
            15 working days from kickoff · Fixed price · No ongoing commitment required
          </p>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-8 text-center">
          {[
            { value: '£225M', label: 'peak revenue led' },
            { value: '£0→£2M', label: 'GTM built from scratch' },
            { value: '3 stages', label: 'startup to enterprise' },
          ].map(stat => (
            <div key={stat.label}>
              <div
                className="font-mono font-medium mb-1"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                {stat.value}
              </div>
              <div className="font-body text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-body uppercase tracking-widest" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
              The problem
            </span>
          </div>
          <h2
            className="font-display leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Your revenue motion worked. Then you scaled.
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            CAC creeping up, attainment inconsistent, board asking questions nobody can answer.
            The motion that got you here won't get you to Series C.
          </p>
        </div>
      </section>

      {/* ── DELIVERABLES ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-body uppercase tracking-widest" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
              What you get
            </span>
          </div>
          <h2
            className="font-display leading-tight mb-12"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            One document. Everything you need to fix it.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--border)' }}>
            {[
              { term: 'Diagnostic scores', detail: 'Ten revenue infrastructure areas scored and explained' },
              { term: 'Root cause analysis', detail: 'Why each problem exists, not just that it exists' },
              { term: 'Fix roadmap', detail: 'Specific steps prioritised by impact and effort' },
              { term: '90-day action plan', detail: 'What to do first, second, and third — and why' },
            ].map(item => (
              <div key={item.term} className="p-8" style={{ backgroundColor: 'var(--bg-card)' }}>
                <div className="font-body text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.term}
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-body uppercase tracking-widest" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
              How it works
            </span>
          </div>
          <h2
            className="font-display leading-tight mb-12"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            Four steps. 15 working days.
          </h2>

          <div className="space-y-px" style={{ backgroundColor: 'var(--border)' }}>
            {[
              { num: '01', label: 'Pre-work', detail: 'You complete a structured intake document. Revenue data, comp plan, org chart, attainment history.' },
              { num: '02', label: 'Interviews', detail: 'Four 45-minute interviews. CEO, VP Sales, Head of Marketing, RevOps or Finance lead.' },
              { num: '03', label: 'Analysis', detail: 'I analyse the ten diagnostic areas against your data and interview findings.' },
              { num: '04', label: 'Delivery', detail: 'Written report delivered. Followed by a 60-minute walkthrough call.' },
            ].map(step => (
              <div key={step.num} className="p-6 flex gap-6 items-start" style={{ backgroundColor: 'var(--bg-card)' }}>
                <div
                  className="font-mono text-sm shrink-0"
                  style={{ color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", minWidth: '2rem' }}
                >
                  {step.num}
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{step.label}</span>
                  {' '}— {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-body uppercase tracking-widest" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
              Who it's for
            </span>
          </div>
          <h2
            className="font-display leading-tight mb-10"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', fontWeight: 500 }}
          >
            This is for you if...
          </h2>

          <div className="space-y-px" style={{ backgroundColor: 'var(--border)' }}>
            {[
              "You're a B2B SaaS business between £3M and £30M ARR",
              "Revenue growth has plateaued or become less efficient despite more headcount",
              "You're approaching a Series C conversation and the revenue narrative isn't clean yet",
              "You know something is structurally broken but can't identify exactly what",
            ].map(item => (
              <div key={item} className="flex gap-4 items-start p-5" style={{ backgroundColor: 'var(--bg-card)' }}>
                <div className="h-px w-4 mt-2.5 shrink-0" style={{ backgroundColor: 'var(--gold)' }} />
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT JAMES ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-body uppercase tracking-widest" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
              About James
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div
              className="aspect-square rounded flex items-center justify-center"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                maxWidth: '22rem',
              }}
            >
              <span className="font-display text-6xl" style={{ color: 'var(--text-muted)' }}>JB</span>
            </div>

            {/* Bio */}
            <div className="space-y-5">
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Operated at three distinct growth stages. Zero to first revenue as a founder.
                £30–50M as a sales leader. £165–225M global revenue operation.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                No generic consulting background. Every recommendation comes from having
                lived this at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING + CTA ───────────────────────────────────────────────── */}
      <section id="book" className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="p-10"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '4px' }}
          >
            <div
              className="font-mono font-medium mb-6"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                color: 'var(--text-primary)',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              £3,500 · Fixed price · 15 working days
            </div>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              No retainer. No ongoing commitment. A single fixed-price engagement with a
              defined deliverable. If you want help implementing the roadmap, that's
              available — but the blueprint stands completely on its own.
            </p>
            <a
              href="mailto:james@thecroquet.com?subject=Revenue Blueprint — Book the Diagnostic"
              className="inline-block font-body font-medium px-8 py-4 text-base transition-all"
              style={{ backgroundColor: 'var(--gold)', color: '#0B0D14', borderRadius: '4px', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--gold)')}
            >
              Book the diagnostic
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            © James Bevan · CROquet · thecroquet.com
          </p>
          <a
            href="mailto:james@thecroquet.com"
            className="font-body text-xs transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            james@thecroquet.com
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Blueprint;
