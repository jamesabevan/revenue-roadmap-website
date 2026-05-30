const caseStudies = [
  {
    company: 'Solcoro',
    type: 'B2B SaaS Startup',
    role: 'Co-founder & CRO',
    result: '£0 → £100K ARR',
    period: '6 months',
    description:
      'Built the entire revenue function from zero — market positioning, ICP definition, outbound motion, pipeline architecture, and first enterprise close. Established the metrics and reporting framework that would underpin the Series A narrative.',
    tags: ['GTM Strategy', 'Pipeline Build', 'First Revenue'],
  },
  {
    company: 'Brulot',
    type: 'Professional Services',
    role: 'Revenue Advisory',
    result: 'Revenue architecture redesign',
    period: 'Ongoing',
    description:
      'Revenue strategy and positioning work focused on identifying the highest-value client segments and building a repeatable pipeline model. Redefined the ICP, restructured the service offer around measurable outcomes, and built the sales process from scratch.',
    tags: ['Revenue Strategy', 'ICP Definition', 'Sales Process'],
  },
  {
    company: 'HiiLife',
    type: 'B2B Technology',
    role: 'Revenue Advisory',
    result: 'GTM foundation built',
    period: 'Ongoing',
    description:
      'Go-to-market strategy development for a technology business targeting a new segment. Built the positioning framework, defined the value proposition by buyer persona, designed the outbound motion, and established the initial pipeline and conversion metrics.',
    tags: ['Go-to-Market', 'Positioning', 'Channel Strategy'],
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
