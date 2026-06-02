const stages = [
  {
    label: 'Stage 01',
    range: '£0 → £100K ARR',
    role: 'Co-founder & CRO',
    company: 'Solcoro',
    description:
      'Built the first revenue motion from zero. ICP definition, initial positioning, first hires, first pipeline, first close. What it actually feels like to create something from nothing — and what breaks when you try to scale it.',
    insight: 'I know what a founder asks a fractional CRO to do. Because I\'ve been both.',
  },
  {
    label: 'Stage 02',
    range: '£30M → £50M',
    role: 'Head of Sales, UK/Ireland',
    company: 'Mölnlycke Healthcare',
    description:
      'P&L responsibility for a £35M business across UK/Ireland, leading a 15-person team. The first scaling inflection: building process, structure, and incentive architecture that works at genuine team scale.',
    insight: 'The point where founder-led sales motion breaks and professional revenue infrastructure has to replace it.',
  },
  {
    label: 'Stage 03',
    range: '£165M → £225M',
    role: 'Global Head of Sales & Business Development',
    company: 'Adaptavist',
    description:
      'Full P&L ownership, 100+ person global team across NAMER, EMEA, and APAC. Built a new RevOps function, led a global CRM migration, restructured the entire go-to-market organisation. Revenue at scale requires infrastructure that most growing companies haven\'t built yet.',
    insight: 'What good looks like at the stage above where most of my clients are trying to get to.',
  },
];

const ExpertiseSection = () => {
  return (
    <section
      id="range"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
          <span
            className="text-xs font-body uppercase tracking-widest"
            style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
          >
            The Range
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
          <h2
            className="font-display leading-tight"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              maxWidth: '32rem',
            }}
          >
            I've operated at every stage
            <br />
            <span style={{ color: 'var(--text-secondary)' }}>
              you're trying to navigate.
            </span>
          </h2>
        </div>

        <p
          className="font-body text-base leading-relaxed mb-16 max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          Most advisors have operated at one revenue scale. The ability to see what's coming —
          because I've already been there — is the difference between strategic advice
          and lived experience.
        </p>

        {/* Stage cards */}
        <div className="space-y-px" style={{ backgroundColor: 'var(--border)' }}>
          {stages.map((stage) => (
            <div
              key={stage.label}
              className="p-8 md:p-10"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left — numbers */}
                <div>
                  <div
                    className="text-xs font-body uppercase tracking-widest mb-2"
                    style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}
                  >
                    {stage.label}
                  </div>
                  <div
                    className="font-mono font-medium mb-4"
                    style={{
                      color: 'var(--gold)',
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {stage.range}
                  </div>
                  <div className="mb-1">
                    <span
                      className="font-body text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {stage.role}
                    </span>
                  </div>
                  <div
                    className="font-body text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {stage.company}
                  </div>
                </div>

                {/* Middle — description */}
                <div className="lg:col-span-2">
                  <p
                    className="font-body text-sm leading-relaxed mb-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {stage.description}
                  </p>
                  <div
                    className="font-display text-base italic pl-4"
                    style={{
                      color: 'var(--text-primary)',
                      borderLeft: '2px solid var(--gold)',
                    }}
                  >
                    "{stage.insight}"
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;
