const services = [
  {
    number: '01',
    title: 'Revenue Diagnostic',
    description:
      'A structured analysis of your entire revenue engine: pipeline health, conversion rates, team structure, compensation design, CAC:LTV ratios, and channel efficiency. You get a clear picture of where value is leaking and exactly what to fix first.',
    deliverable: 'Diagnostic report + prioritised action plan',
  },
  {
    number: '02',
    title: 'Revenue Infrastructure Design',
    description:
      'Building the structural foundations your business needs to scale past its current ceiling: sales methodology, territory and team design, comp architecture that drives the right behaviour, RevOps framework, and forecasting that your board will trust.',
    deliverable: 'Design documents + implementation roadmap',
  },
  {
    number: '03',
    title: 'Fractional CRO Leadership',
    description:
      'Part-time, senior revenue leadership for companies that need C-suite capability without the full-time cost or commitment. I sit in leadership meetings, challenge the assumptions, hold the team to the plan, and act as the revenue voice in board conversations.',
    deliverable: 'Ongoing engagement, typically 1–3 days per week',
  },
  {
    number: '04',
    title: 'Board & Investor Readiness',
    description:
      'Preparing the revenue narrative for Series C conversations and beyond. The metrics that matter, the infrastructure story, the efficiency ratios, and the honest answers to the hard questions before the investor starts asking them.',
    deliverable: 'Revenue narrative + board deck support',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
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
            How I Work
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
            Not what I offer.
            <br />
            <span style={{ color: 'var(--text-secondary)' }}>What I fix.</span>
          </h2>
          <p
            className="font-body text-sm max-w-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            Every engagement starts with understanding the actual problem, not the symptom.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {services.map((service) => (
            <div
              key={service.number}
              className="p-8 transition-colors"
              style={{ backgroundColor: 'var(--bg-card)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--bg-card)')}
            >
              <div
                className="font-mono text-sm mb-6"
                style={{
                  color: 'var(--gold)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {service.number}
              </div>
              <h3
                className="font-display text-xl mb-3"
                style={{ color: 'var(--text-primary)', fontWeight: 500 }}
              >
                {service.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >
                {service.description}
              </p>
              <div
                className="text-xs font-body py-2 px-3 inline-block rounded"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {service.deliverable}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
