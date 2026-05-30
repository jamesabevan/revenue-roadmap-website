import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'rgba(11, 13, 20, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span
            className="font-display text-xl font-semibold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            James Bevan
          </span>
          <span
            className="text-xs font-body tracking-widest uppercase mt-0.5"
            style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}
          >
            Fractional CRO
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'How I Work', action: () => scrollTo('services') },
            { label: 'The Range', action: () => scrollTo('range') },
            { label: 'Case Studies', action: () => scrollTo('case-studies') },
            { label: 'About', href: '/about' },
          ].map((item) => (
            item.href
              ? <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-body transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {item.label}
                </Link>
              : <button
                  key={item.label}
                  onClick={item.action}
                  className="text-sm font-body transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {item.label}
                </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 text-sm font-body font-medium transition-all"
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

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: 'var(--text-secondary)' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden px-6 pb-6 space-y-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {[
            { label: 'How I Work', action: () => scrollTo('services') },
            { label: 'The Range', action: () => scrollTo('range') },
            { label: 'Case Studies', action: () => scrollTo('case-studies') },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="block w-full text-left py-2 text-sm font-body"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/about"
            className="block py-2 text-sm font-body"
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full mt-2 px-5 py-2.5 text-sm font-body font-medium"
            style={{
              backgroundColor: 'var(--gold)',
              color: '#0B0D14',
              borderRadius: '4px',
            }}
          >
            Book a conversation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
