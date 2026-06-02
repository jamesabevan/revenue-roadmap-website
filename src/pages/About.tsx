import Layout from "@/components/layout/Layout";

const credentials = [
  {
    period: 'March 2025 — Present',
    role: 'Founder & Fractional CRO',
    company: 'CROquet',
    detail: 'Fractional CRO and commercial consulting practice. Engagements include: Solcoro — fractional CRO (April 2025–present), building the full commercial function from scratch and driving ARR from $0 to $200k+; Hii-Life — GTM redesign ahead of PE investment (June–November 2025); Brulot — GTM playbook, ICP mapping, sales process design, and CRM implementation (May–June 2025 & January 2026).',
  },
  {
    period: 'November 2022 — March 2025',
    role: 'Global Head of Sales & Business Development',
    company: 'Adaptavist',
    detail: 'Full P&L across ISV licence resale (Atlassian, GitLab, Monday.com), B2B SaaS, and Professional & Managed Services. Revenue grew from £165M (FY22/23) to £225M (FY23/24). Led a global team of 100+ across NAMER, EMEA, and APAC. Built new RevOps function and led HubSpot CRM implementation.',
  },
  {
    period: 'February 2021 — November 2022',
    role: 'Head of Sales, UK/Ireland — Gloves & Antiseptics',
    company: 'Mölnlycke Healthcare',
    detail: '£35M P&L ownership across Public & Private Healthcare, B2B, and Pharma Clean Room. Led a 15-person sales team.',
  },
  {
    period: 'October 2018 — February 2021',
    role: 'Regional Business Manager — Surgical Solutions, South UK',
    company: 'Mölnlycke Healthcare',
    detail: 'Regional sales leadership across the South UK surgical portfolio.',
  },
  {
    period: 'May 2015 — October 2018',
    role: 'Healthcare Partnership Manager & Acute Account Manager',
    company: 'Mölnlycke Healthcare',
    detail: 'C-suite engagement across Wales & South West UK. Progressed from Acute Account Manager (May 2015) to Healthcare Partnership Manager (July 2017).',
  },
  {
    period: 'March 2012 — May 2015',
    role: 'Territory Business Manager',
    company: 'Crawford Healthcare',
    detail: 'Wales wound care territory. Built territory from ground up.',
  },
];

const About = () => {
  return (
    <Layout>
      <div className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
            <span
              className="text-xs font-body uppercase tracking-widest"
              style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
            >
              About
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left — bio */}
            <div className="lg:col-span-2">
              <h1
                className="font-display leading-tight mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                }}
              >
                James Bevan
              </h1>

              <div className="space-y-5 mb-12">
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  I've spent 13 years leading revenue organisations — from a 6-person startup
                  to a 100+ person global team delivering a £225M+ revenue run rate. Along the way
                  I've operated at every growth stage that matters: the zero-to-one grind,
                  the first real scaling challenge at £30–50M, and the infrastructure complexity
                  of enterprise scale.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  What I've learned is that the problems that kill revenue growth at scale are
                  almost never about effort or talent. They're structural. The wrong comp plan
                  rewarding the wrong behaviour. A sales process that worked at £2M but breaks
                  at £10M. Marketing and sales optimising for different things. RevOps that
                  can't answer the board's questions with confidence.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  In early 2025 I launched CROquet, my fractional CRO and commercial consulting
                  practice. I work with post-Series B B2B SaaS and PE-backed technology businesses
                  — diagnosing what's actually broken in the revenue engine, designing the
                  infrastructure that fixes it, and providing senior leadership through the
                  transition. Not as a full-time hire. Not as a management consultant. As a
                  working operator who has done it before.
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  I'm based in Cardiff, UK. I work remotely and can travel as required.
                </p>
              </div>

              {/* Quote */}
              <div
                className="p-6 mb-12"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--gold)',
                }}
              >
                <p
                  className="font-display text-lg italic"
                  style={{ color: 'var(--text-primary)' }}
                >
                  "I don't believe in generic strategic advice. I believe in looking at the
                  numbers, identifying where value is actually leaking, and building the
                  specific infrastructure that fixes it — for this business, at this stage."
                </p>
              </div>

              {/* Career timeline */}
              <h2
                className="font-display text-2xl mb-8"
                style={{ color: 'var(--text-primary)', fontWeight: 500 }}
              >
                Career History
              </h2>

              <div className="space-y-px" style={{ backgroundColor: 'var(--border)' }}>
                {credentials.map((c) => (
                  <div
                    key={c.role + c.company}
                    className="p-6"
                    style={{ backgroundColor: 'var(--bg-card)' }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div>
                        <div
                          className="font-mono text-xs"
                          style={{
                            color: 'var(--text-muted)',
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {c.period}
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <div
                          className="font-body text-sm font-medium mb-0.5"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {c.role}
                        </div>
                        <div
                          className="font-body text-sm mb-2"
                          style={{ color: 'var(--gold)' }}
                        >
                          {c.company}
                        </div>
                        <p
                          className="font-body text-sm leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {c.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mt-8">
                <h3
                  className="font-display text-lg mb-4"
                  style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                >
                  Education
                </h3>
                <div className="space-y-2">
                  {[
                    { year: '2007–2008', qual: 'Postgraduate Legal Practice Course (Commendation)', inst: 'The College of Law, Chester' },
                    { year: '2004–2007', qual: 'LLB (Hons) Law, 2:1', inst: 'University of Wales, Aberystwyth' },
                  ].map(e => (
                    <div key={e.qual} className="flex gap-6">
                      <span
                        className="font-mono text-xs shrink-0 mt-0.5"
                        style={{
                          color: 'var(--text-muted)',
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {e.year}
                      </span>
                      <div>
                        <div
                          className="font-body text-sm"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {e.qual}
                        </div>
                        <div
                          className="font-body text-xs"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {e.inst}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div>
              {/* Photo placeholder */}
              <div
                className="w-full aspect-square rounded mb-8 flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <span
                  className="font-display text-5xl"
                  style={{ color: 'var(--text-muted)' }}
                >
                  JB
                </span>
              </div>

              {/* Key numbers */}
              <div
                className="p-6 mb-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <p
                  className="text-xs font-body uppercase tracking-widest mb-5"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}
                >
                  By the numbers
                </p>
                <div className="space-y-4">
                  {[
                    { value: '£225M', label: 'Peak revenue run rate' },
                    { value: '100+', label: 'Global team at peak' },
                    { value: '13+', label: 'Years in commercial leadership' },
                    { value: '3', label: 'Continents managed' },
                  ].map(s => (
                    <div key={s.label} className="flex justify-between items-baseline">
                      <span
                        className="font-mono font-medium"
                        style={{
                          color: 'var(--gold)',
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {s.value}
                      </span>
                      <span
                        className="font-body text-xs text-right ml-4"
                        style={{ color: 'var(--text-secondary)', maxWidth: '9rem' }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/james-a-bevan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 w-full transition-colors"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-body text-sm">Connect on LinkedIn</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
