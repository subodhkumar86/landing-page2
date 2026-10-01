import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Menu,
  X,
  Check,
  ChevronDown,
  Search,
  Megaphone,
  ShoppingCart,
  PenTool,
  BarChart3,
  Sparkles,
  Target,
  Users,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import "./styles.css";

const services = [
  { title: "SEO & Organic Growth", text: "Build long-term visibility with technical SEO, content depth and authority strategy.", icon: Search },
  { title: "Paid Performance", text: "Scale demand with conversion-led ads that turn attention into qualified leads.", icon: Megaphone },
  { title: "E-commerce Growth", text: "Improve product discoverability, retargeting and purchase flow for better ROI.", icon: ShoppingCart },
  { title: "Content Marketing", text: "Create valuable brand stories that build trust, authority and stronger conversion journeys.", icon: PenTool },
  { title: "Analytics & CRO", text: "Understand where users drop off and improve each step of the funnel with data.", icon: BarChart3 },
  { title: "Audience Strategy", text: "Define who to target, what to say and how to build stronger customer intent.", icon: Users }
];

const process = [
  ["01", "Discover", "We study your market, audience, offer and gaps to find the biggest growth opportunities."],
  ["02", "Plan", "We map the right channel mix, messaging and journey so every action has purpose."],
  ["03", "Build", "We launch the experience, content and campaigns needed to move the needle faster."],
  ["04", "Improve", "We monitor results, learn fast and optimize for stronger performance over time."]
];

const testimonials = [
  ["A", "Amit Verma", "Founder", "The team helped us focus on the right channels and gave us clarity on how to build momentum without wasting spend."],
  ["N", "Neha Kapoor", "Marketing Head", "Their mix of strategy and execution gave our brand a sharper story and stronger conversion performance."],
  ["R", "Rahul Sharma", "CEO", "Xntrova feels like an extension of our business. Transparent, strategic and focused on outcomes."]
];

const faqs = [
  ["How do we know which marketing channel to prioritize?", "We start with your market, goals and funnel. Then we identify the channels with the highest potential and build a focused plan around them."],
  ["Do you work with existing teams?", "Yes. We can plug into your internal team, handle specific channels or act as your full growth partner depending on what you need."],
  ["Can you improve conversions as well as traffic?", "Absolutely. We look at both conversion path and marketing efficiency so you improve quality and performance together."],
  ["How quickly can a strategy start?", "Most projects begin with a discovery conversation and can move into planning or execution within a week or two."]
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p2-header">
      <div className="container nav-wrap">
        <a href="#top" className="nav-logo">
          <span className="logo-mark">X</span>
          <span>ntrova</span>
        </a>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#results" onClick={() => setMenuOpen(false)}>Results</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" className="primary-btn nav-btn" onClick={() => setMenuOpen(false)}>
            Start a project <ArrowRight size={16} />
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="p2-hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="bar" /> INDEPENDENT DIGITAL PARTNER</div>
          <h1>Make your next move <span>matter.</span></h1>
          <p>
            Strategy, creative direction and performance systems for brands with momentum and ambition.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="primary-btn">Plan the next move <ArrowRight size={18} /></a>
            <a href="#services" className="text-link">See what we do <ArrowRight size={16} /></a>
          </div>

          <div className="proof-row">
            <div className="avatar-stack">
              <span>AK</span>
              <span>RV</span>
              <span>MS</span>
            </div>
            <p>Trusted by teams building what is next.</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-ring ring-one" />
          <div className="visual-ring ring-two" />
          <div className="signal-card">
            <small>Growth signal</small>
            <strong>84<span>.6</span></strong>
            <p>Strong momentum across key channels</p>
            <div className="bars">
              {[30, 48, 40, 62, 58, 74, 68, 96].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="floating-badge badge-one">
            <Sparkles size={16} />
            <div>
              <b>+42%</b>
              <small>conversion lift</small>
            </div>
          </div>

          <div className="floating-badge badge-two">
            <BarChart3 size={16} />
            <div>
              <b>3.8x</b>
              <small>average ROAS</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="p2-section" id="services">
      <div className="container section-head">
        <div>
          <div className="section-tag">01 / SERVICES</div>
          <h2>Not more noise.<br /><span>More momentum.</span></h2>
        </div>
        <p>Focused digital work designed to strengthen visibility, trust and performance without adding clutter.</p>
      </div>

      <div className="container service-grid">
        {services.map(({ title, text, icon: Icon }, index) => (
          <article key={title} className="service-card">
            <span className="service-index">0{index + 1}</span>
            <div className="service-icon">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#contact">Explore <ArrowRight size={15} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="p2-section method-section" id="approach">
      <div className="container">
        <div className="section-tag light">02 / THE METHOD</div>
        <h2>Everything starts with the right signal.</h2>

        <div className="process-grid">
          {process.map(([num, title, text]) => (
            <article key={num} className="process-card">
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowRight size={16} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="results-band" id="results">
      <div className="container results-grid">
        <div><strong>+250%</strong><span>Organic traffic</span></div>
        <div><strong>+42%</strong><span>Conversion lift</span></div>
        <div><strong>3.8x</strong><span>Average ROAS</span></div>
        <div><strong>92%</strong><span>Client retention</span></div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="p2-section testimonials-section">
      <div className="container">
        <div className="section-tag">03 / CLIENT STORIES</div>
        <div className="testimonial-grid">
          {testimonials.map(([initial, name, role, quote]) => (
            <article key={name} className="testimonial-card">
              <div className="quote-mark">“</div>
              <p>{quote}</p>
              <div className="person-row">
                <div className="avatar-circle">{initial}</div>
                <div>
                  <b>{name}</b>
                  <small>{role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="p2-section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-copy">
          <div className="section-tag">04 / FAQ</div>
          <h2>Questions worth asking before the next move.</h2>
          <p>Clear answers help you choose the right direction without wasting time or resources.</p>
          <a href="#contact" className="text-link">Talk to our team <ArrowRight size={16} /></a>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div key={question} className={active === index ? "faq-item active" : "faq-item"}>
              <button onClick={() => setActive(active === index ? -1 : index)}>
                <span>{question}</span>
                <ChevronDown size={18} />
              </button>
              {active === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="p2-footer-cta" id="contact">
      <div className="container contact-wrap">
        <div className="contact-copy">
          <div className="section-tag">05 / CONTACT</div>
          <h2>Your next growth story starts here.</h2>
          <p>Tell us where you are and what you want to build next. We will help you map the right momentum.</p>

          <div className="contact-meta">
            <span><Mail size={16} /> hello@xntrova.com</span>
            <span><Phone size={16} /> +91 868 382 8646</span>
            <span><MapPin size={16} /> New Delhi, India</span>
          </div>
        </div>

        <form
          className="contact-card"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <h3>Get a free growth audit</h3>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Work email" required />
          <input type="text" placeholder="Company / website" />
          <textarea rows="4" placeholder="Tell us about your goals" required />
          <button type="submit" className="primary-btn">
            {sent ? "Request sent ✓" : "Start the conversation"} <ArrowRight size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="p2-footer">
      <div className="container footer-wrap">
        <div>
          <a href="#top" className="nav-logo footer-logo">
            <span className="logo-mark">X</span>
            <span>ntrova</span>
          </a>
          <p>Digital growth partner for ambitious brands.</p>
        </div>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Xntrova</span>
        <span>Built for growth</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="p2-app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <Results />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
