import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    stage: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = Array.from(data.entries())
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v.toString())}`)
      .join('&');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    padding: '10px 14px',
    color: 'var(--text-primary)',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '14px',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontFamily: "'DM Sans', sans-serif",
    color: 'var(--text-muted)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    marginBottom: '8px',
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
          <span
            className="text-xs font-body uppercase tracking-widest"
            style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}
          >
            Get in Touch
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — context */}
          <div>
            <h2
              className="font-display leading-tight mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                color: 'var(--text-primary)',
                fontWeight: 500,
              }}
            >
              Book a conversation.
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Tell me a little about your business and where you're seeing friction
              in the revenue engine. I'll come to the call having already thought
              about it.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: 'What to expect',
                  text: 'A 30-minute call. No pitch. A direct conversation about your specific situation and whether there\'s a fit worth exploring.',
                },
                {
                  label: 'Who this is for',
                  text: 'CEOs, CROs, and RevOps leaders at post-Series B B2B SaaS or PE-backed tech businesses with a revenue infrastructure problem.',
                },
                {
                  label: 'Response time',
                  text: 'I respond to every enquiry personally within 24 hours.',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div
                    className="h-px w-4 mt-2.5 shrink-0"
                    style={{ backgroundColor: 'var(--gold)' }}
                  />
                  <div>
                    <div
                      className="font-body text-sm font-medium mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.label}
                    </div>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 pt-8"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <p
                className="text-xs font-body uppercase tracking-widest mb-3"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}
              >
                Or reach out directly
              </p>
              <a
                href="mailto:james@thecroquet.com"
                className="font-body text-sm transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                james@thecroquet.com
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="p-8 rounded"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="font-mono text-4xl mb-4"
                  style={{ color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  ✓
                </div>
                <h3
                  className="font-display text-xl mb-3"
                  style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                >
                  Message received.
                </h3>
                <p
                  className="font-body text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  I'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Required by Netlify for JS-rendered forms */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      placeholder="James Bevan"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle}
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    placeholder="james@company.com"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Current ARR stage</label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={e => setFormData({ ...formData, stage: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Select range...</option>
                    <option value="<2m">Under £2M</option>
                    <option value="2-10m">£2M – £10M</option>
                    <option value="10-30m">£10M – £30M</option>
                    <option value="30-100m">£30M – £100M</option>
                    <option value="100m+">£100M+</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>What's the revenue problem?</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Tell me what's happening in your revenue engine..."
                  />
                </div>

                {error && (
                  <p className="font-body text-sm" style={{ color: '#e05c5c' }}>
                    Something went wrong — please try again or email james@thecroquet.com directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 text-sm font-body font-medium transition-all"
                  style={{
                    backgroundColor: 'var(--gold)',
                    color: '#0B0D14',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--gold-light)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--gold)')}
                >
                  Send message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
