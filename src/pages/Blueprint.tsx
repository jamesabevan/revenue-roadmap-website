import { useState } from "react";

// ── Design tokens ────────────────────────────────────────────────────────────
const T = {
  bg:         '#FAFAF8',
  card:       '#F0F0EE',
  border:     '#E0E0DC',
  text:       '#0A0A0A',
  textSec:    '#6B6B6B',
  accent:     '#E84B2F',
  accentDark: '#C93E26',
};

// ── Shared style helpers ─────────────────────────────────────────────────────
const displayHeadline = (size = 'clamp(2.6rem, 5vw, 4rem)'): React.CSSProperties => ({
  fontFamily: "'Playfair Display', serif",
  fontSize: size,
  fontWeight: 500,
  color: T.text,
  lineHeight: 1.15,
});

const bodyText = (size = '1rem', color = T.textSec): React.CSSProperties => ({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: size,
  color,
  lineHeight: 1.7,
});

const monoText = (size = '0.75rem', color = T.textSec): React.CSSProperties => ({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: size,
  color,
});

const SectionLabel = ({ children }: { children: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
    <div style={{ width: '2rem', height: '2px', backgroundColor: T.accent, flexShrink: 0 }} />
    <span style={{ ...bodyText('0.68rem', T.textSec), textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 500 }}>
      {children}
    </span>
  </div>
);

// ── Contact form ─────────────────────────────────────────────────────────────
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', company: '', arr: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = new URLSearchParams({
      'form-name': 'blueprint-contact',
      name: formData.name,
      company: formData.company,
      message: formData.arr
        ? `Current ARR: ${formData.arr}\n\n${formData.message}`
        : formData.message,
    }).toString();
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    }
  };

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: T.bg,
    border: `1px solid ${T.border}`,
    borderRadius: '4px',
    padding: '10px 14px',
    color: T.text,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    ...bodyText('0.72rem', T.textSec),
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 500,
    marginBottom: '6px',
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <div style={{ ...bodyText('2rem', T.accent), marginBottom: '1rem' }}>✓</div>
        <h3 style={{ ...displayHeadline('1.5rem'), marginBottom: '0.5rem' }}>Message received.</h3>
        <p style={bodyText()}>I'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      name="blueprint-contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      <input type="hidden" name="form-name" value="blueprint-contact" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            style={fieldStyle}
            placeholder="James Bevan"
          />
        </div>
        <div>
          <label style={labelStyle}>Company name</label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
            style={fieldStyle}
            placeholder="Acme Inc."
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Current ARR</label>
        <select
          name="arr"
          value={formData.arr}
          onChange={e => setFormData({ ...formData, arr: e.target.value })}
          style={{ ...fieldStyle, cursor: 'pointer', appearance: 'none' }}
        >
          <option value="">Select a range...</option>
          <option value="Under £1M">Under £1M</option>
          <option value="£1M–£5M">£1M–£5M</option>
          <option value="£5M–£15M">£5M–£15M</option>
          <option value="£15M–£30M">£15M–£30M</option>
          <option value="£30M+">£30M+</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>What's the main revenue problem you're trying to solve?</label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          style={{ ...fieldStyle, resize: 'vertical' }}
          placeholder="Tell me what's happening..."
        />
      </div>

      {error && (
        <p style={{ ...bodyText('0.85rem', '#c0392b') }}>
          Something went wrong. Please try again or email james@thecroquet.com directly.
        </p>
      )}

      <button
        type="submit"
        style={{
          backgroundColor: T.accent,
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '4px',
          padding: '14px 32px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9rem',
          fontWeight: 500,
          cursor: 'pointer',
          alignSelf: 'flex-start',
          transition: 'background-color 0.15s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = T.accentDark)}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = T.accent)}
      >
        Send message
      </button>
    </form>
  );
};

// ── Page ─────────────────────────────────────────────────────────────────────
const Blueprint = () => {
  const scrollToBook = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  const section = (extra: React.CSSProperties = {}): React.CSSProperties => ({
    backgroundColor: T.bg,
    padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
    ...extra,
  });

  return (
    <div style={{ backgroundColor: T.bg, minHeight: '100vh' }}>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: T.bg,
        borderBottom: `1px solid ${T.border}`,
      }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: T.text, fontSize: '1.05rem' }}>
              James Bevan
            </span>
            <span style={{ color: T.border, margin: '0 0.4rem' }}>·</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: T.accent, fontSize: '1.05rem' }}>
              CROquet
            </span>
          </div>
          <button
            onClick={scrollToBook}
            style={{
              backgroundColor: T.accent,
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              padding: '9px 20px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = T.accentDark)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = T.accent)}
          >
            Book a call
          </button>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ ...section(), padding: 'clamp(5rem, 10vw, 9rem) 1.5rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            border: `1px solid ${T.border}`,
            borderRadius: '4px',
            padding: '6px 12px',
            marginBottom: '2rem',
          }}>
            <span style={monoText('0.72rem', T.textSec)}>Fixed price · 15 working days</span>
          </div>

          <h1 style={{ ...displayHeadline(), marginBottom: '1.5rem' }}>
            The Revenue Blueprint
          </h1>

          <p style={{ ...bodyText('1.1rem'), maxWidth: '34rem', marginBottom: '2.5rem' }}>
            A structured diagnostic and fix roadmap for B2B SaaS businesses that have
            outgrown their current revenue motion. You get a clear picture of what's
            breaking, and the specific steps to fix it.
          </p>

          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: '#B0B0AA', textDecoration: 'line-through', marginBottom: '0.2rem' }}>
              £4,999
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 600, color: T.accent, marginBottom: '0.3rem' }}>
              £3,500
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: '#B0B0AA' }}>
              Introductory rate — limited availability
            </div>
          </div>

          <button
            onClick={scrollToBook}
            style={{
              backgroundColor: T.accent,
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              padding: '16px 36px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              marginBottom: '1rem',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = T.accentDark)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = T.accent)}
          >
            Book a call
          </button>

          <p style={bodyText('0.85rem', T.textSec)}>
            15 working days from kickoff · Fixed price · No ongoing commitment required
          </p>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ──────────────────────────────────────────────── */}
      <div style={{ borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, backgroundColor: T.card }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '2.5rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {[
            { value: '£225M', label: 'peak revenue led' },
            { value: '£0→£2M', label: 'GTM built from scratch' },
            { value: '3 stages', label: 'startup to enterprise' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: T.accent, marginBottom: '0.3rem' }}>
                {stat.value}
              </div>
              <div style={bodyText('0.78rem', T.textSec)}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section style={section()}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <SectionLabel>The problem</SectionLabel>
          <h2 style={{ ...displayHeadline('clamp(1.9rem, 3.5vw, 2.8rem)'), marginBottom: '1.25rem' }}>
            Your revenue motion worked.<br />Then you scaled.
          </h2>
          <p style={{ ...bodyText('1rem'), maxWidth: '36rem' }}>
            CAC creeping up, attainment inconsistent, board asking questions nobody
            can answer. The motion that got you here won't get you to Series C.
          </p>
        </div>
      </section>

      {/* ── DELIVERABLES ──────────────────────────────────────────────────── */}
      <section style={{ ...section(), backgroundColor: T.card }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <SectionLabel>What you get</SectionLabel>
          <h2 style={{ ...displayHeadline('clamp(1.9rem, 3.5vw, 2.8rem)'), marginBottom: '3rem' }}>
            One document. Everything you need to fix it.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', backgroundColor: T.border }}>
            {[
              { term: 'Diagnostic scores', detail: 'Ten revenue infrastructure areas scored and explained' },
              { term: 'Root cause analysis', detail: 'Why each problem exists, not just that it exists' },
              { term: 'Fix roadmap', detail: 'Specific steps prioritised by impact and effort' },
              { term: '90-day action plan', detail: 'What to do first, second, and third, and in what order' },
            ].map(item => (
              <div key={item.term} style={{ backgroundColor: T.bg, padding: '2rem' }}>
                <div style={{ ...bodyText('0.85rem', T.text), fontWeight: 600, marginBottom: '0.5rem' }}>
                  {item.term}
                </div>
                <p style={bodyText('0.875rem')}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section style={section()}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <SectionLabel>How it works</SectionLabel>
          <h2 style={{ ...displayHeadline('clamp(1.9rem, 3.5vw, 2.8rem)'), marginBottom: '3rem' }}>
            Four steps. 15 working days.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: T.border }}>
            {[
              { num: '01', label: 'Pre-work', detail: 'You complete a structured intake document. Revenue data, comp plan, org chart, attainment history.' },
              { num: '02', label: 'Interviews', detail: 'Four 45-minute interviews. CEO, VP Sales, Head of Marketing, RevOps or Finance lead.' },
              { num: '03', label: 'Analysis', detail: 'I analyse the ten diagnostic areas against your data and interview findings.' },
              { num: '04', label: 'Delivery', detail: 'Written report delivered. Followed by a 60-minute walkthrough call.' },
            ].map(step => (
              <div key={step.num} style={{ backgroundColor: T.bg, padding: '1.5rem 2rem', display: 'flex', gap: '1.75rem', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: T.accent, flexShrink: 0, paddingTop: '0.15rem' }}>
                  {step.num}
                </div>
                <p style={bodyText('0.9rem')}>
                  <span style={{ color: T.text, fontWeight: 600 }}>{step.label}:</span>
                  {' '}{step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────────────────── */}
      <section style={{ ...section(), backgroundColor: T.card }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <SectionLabel>Who it's for</SectionLabel>
          <h2 style={{ ...displayHeadline('clamp(1.9rem, 3.5vw, 2.8rem)'), marginBottom: '2.5rem' }}>
            This is for you if...
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: T.border }}>
            {[
              "You're a B2B SaaS business between £3M and £30M ARR",
              "Revenue growth has plateaued or become less efficient despite more headcount",
              "You're approaching a Series C conversation and the revenue narrative isn't clean yet",
              "You know something is structurally broken but can't identify exactly what",
            ].map(item => (
              <div key={item} style={{ backgroundColor: T.bg, padding: '1.25rem 2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '1.25rem', height: '2px', backgroundColor: T.accent, flexShrink: 0 }} />
                <p style={bodyText('0.9rem', T.text)}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT JAMES ───────────────────────────────────────────────────── */}
      <section style={section()}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <SectionLabel>About James</SectionLabel>

          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4rem', alignItems: 'center', marginTop: '2.5rem' }}>
            {/* Photo placeholder */}
            <div style={{
              width: '14rem',
              aspectRatio: '1',
              backgroundColor: T.card,
              border: `1px solid ${T.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: T.textSec, fontWeight: 400 }}>JB</span>
            </div>

            {/* Bio */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={bodyText('1rem')}>
                Operated at three distinct growth stages. Zero to first revenue as a
                founder. £30–50M as a sales leader. £165–225M global revenue operation.
              </p>
              <p style={bodyText('1rem')}>
                No generic consulting background. Every recommendation comes from having
                lived this at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING + CTA ─────────────────────────────────────────────────── */}
      <section style={{ ...section(), backgroundColor: T.card }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <SectionLabel>Pricing</SectionLabel>

          <div style={{ backgroundColor: T.bg, border: `1px solid ${T.border}`, borderRadius: '4px', padding: '2.5rem' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: '#B0B0AA', textDecoration: 'line-through', marginBottom: '0.2rem' }}>
                £4,999
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 600, color: T.accent, marginBottom: '0.3rem' }}>
                £3,500
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: '#B0B0AA' }}>
                Introductory rate — limited availability
              </div>
            </div>
            <p style={{ ...bodyText(), marginBottom: '2rem' }}>
              No retainer. No ongoing commitment. A single fixed-price engagement with a
              defined deliverable. If you want help implementing the roadmap, that's
              available, but the blueprint stands completely on its own.
            </p>
            <button
              onClick={scrollToBook}
              style={{
                backgroundColor: T.accent,
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '4px',
                padding: '14px 32px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = T.accentDark)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = T.accent)}
            >
              Book a call
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ──────────────────────────────────────────────────── */}
      <section id="book" style={section()}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <SectionLabel>Get in touch</SectionLabel>
          <h2 style={{ ...displayHeadline('clamp(1.9rem, 3.5vw, 2.8rem)'), marginBottom: '0.75rem' }}>
            Book a call.
          </h2>
          <p style={{ ...bodyText(), marginBottom: '2.5rem' }}>
            Tell me a little about your business. I'll come to the call having already
            thought about it.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${T.border}`, backgroundColor: T.card }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          <p style={bodyText('0.78rem', T.textSec)}>
            © James Bevan · CROquet · thecroquet.com
          </p>
          <a
            href="mailto:james@thecroquet.com"
            style={{ ...bodyText('0.78rem', T.textSec), textDecoration: 'none', transition: 'color 0.15s ease' }}
            onMouseEnter={e => (e.currentTarget.style.color = T.accent)}
            onMouseLeave={e => (e.currentTarget.style.color = T.textSec)}
          >
            james@thecroquet.com
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Blueprint;
