const symptoms = [
  'CAC is creeping up but nobody can pinpoint why',
  'Win rates are falling despite more headcount',
  'Top performers are leaving and you suspect the comp plan',
  'Marketing and sales are misaligned on what a good lead looks like',
  'The board is asking revenue efficiency questions nobody can answer confidently',
  'The VP of Sales who got you to £3M probably isn\'t the person to get you to £15M',
];

const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
              <span
                className="text-xs font-body uppercase tracking-widest"
                style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
              >
                The Problem
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
              You've hired the team.
              The process is documented.
              The CRM is set up.
              <br />
              <span style={{ color: 'var(--text-secondary)' }}>
                So why is revenue growth getting harder?
              </span>
            </h2>

            <p
              className="font-body text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              At £2M ARR, you could sell. At £20M, the same motion breaks. It's not
              a motivation problem or a headcount problem. It's a revenue
              infrastructure problem — and most companies don't realise it until
              they're already burning too much capital to get too little growth.
            </p>

            <p
              className="font-body text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              The root causes are almost always structural: the wrong comp plan
              rewarding the wrong behaviour, marketing and sales pulling in
              different directions, a sales process that scaled to £5M but
              can't get to £20M, and a board conversation that reveals gaps
              in the revenue narrative before the next round.
            </p>
          </div>

          {/* Right — symptoms */}
          <div>
            <p
              className="text-xs font-body uppercase tracking-widest mb-6"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}
            >
              Sound familiar?
            </p>
            <ul className="space-y-4">
              {symptoms.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span
                    className="font-mono text-xs pt-0.5 shrink-0"
                    style={{
                      color: 'var(--gold)',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
