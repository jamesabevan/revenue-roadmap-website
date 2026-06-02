const caseStudies = [
  {
    company: 'Solcoro',
    type: 'B2B SaaS Startup',
    role: 'Fractional CRO',
    result: '$0 → $200K+ ARR',
    period: 'April 2025 — Present',
    description:
      'Co-founded Solcoro and took full ownership of sales, marketing, and customer success from day one. Defined ICP, established GTM strategy, built sales process and pipeline infrastructure across new market segments. Built customer success function to drive expansion revenue, product feedback loops, and retention.',
    tags: ['GTM Strategy', 'Pipeline Build', 'Customer Success'],
  },
  {
    company: 'Brulot',
    type: 'Professional Services',
    role: 'Revenue Advisory',
    result: 'GTM playbook launched',
    period: 'May–Jun 2025 & Jan 2026',
    description:
      'Drafted and launched a new GTM playbook covering ICP mapping, inbound and outbound lead generation, full sales process design, CRM implementation, and revenue tracking infrastructure.',
    tags: ['ICP Mapping', 'Sales Process', 'CRM Implementation'],
  },
  {
    company: 'Hii-Life',
    type: 'AV Systems Integrator',
    role: 'Revenue Advisory',
    result: 'Full GTM redesign',
    period: 'June–November 2025',
    description:
      'Engaged by the Managing Director to support a scaling business ahead of PE investment. Delivered a full GTM redesign to sharpen commercial positioning and improve revenue predictability for the investment process.',
    tags: ['GTM Redesign', 'PE Readiness', 'Revenue Positioning'],
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="case-studies"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
          <span
            className="text-xs font-body uppercase tracking-widest"
            style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
          >
            Case Studies
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <h2
            className="font-display leading-tight"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              maxWidth: '28rem',
            }}
          >
            Recent work.
          </h2>
          <p
            className="font-body text-sm max-w-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            References available on request.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="p-8 flex flex-col"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              {/* Top */}
              <div className="mb-6">
                <div
                  className="text-xs font-body uppercase tracking-widest mb-1"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}
                >
                  {cs.type}
                </div>
                <h3
                  className="font-display text-xl mb-0.5"
                  style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                >
                  {cs.company}
                </h3>
                <div
                  className="text-sm font-body"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {cs.role}
                </div>
              </div>

              {/* Result */}
              <div
                className="py-4 mb-6"
                style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
              >
                <div
                  className="font-mono font-medium text-lg"
                  style={{
                    color: 'var(--gold)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {cs.result}
                </div>
                <div
                  className="text-xs font-body mt-0.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {cs.period}
                </div>
              </div>

              {/* Description */}
              <p
                className="font-body text-sm leading-relaxed mb-6 flex-grow"
                style={{ color: 'var(--text-secondary)' }}
              >
                {cs.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
