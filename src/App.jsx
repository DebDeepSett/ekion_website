import { useState } from 'react'
import { company, stats, services, values, team } from './data.js'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Services', '#services'],
    ['About', '#about'],
    ['Team', '#team'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__bolt">⚡</span> {company.name}
        </a>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn--sm" onClick={() => setOpen(false)}>
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">EV Charging &amp; Energy Optimization</p>
        <h1 className="hero__title">{company.tagline}</h1>
        <p className="hero__lead">{company.intro}</p>
        <div className="hero__cta">
          <a href="#contact" className="btn">Book a demo</a>
          <a href="#services" className="btn btn--ghost">Explore services</a>
        </div>
        <div className="hero__stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section__title">How we optimize your charging</h2>
        <p className="section__sub">
          We are EV charging experts, and optimization is our edge — matching every session to
          your consumption patterns, energy prices, and available capacity.
        </p>
        <div className="grid grid--3">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container about">
        <div>
          <h2 className="section__title">Optimization is our specialty</h2>
          <p>
            Ekion started with a simple conviction: the hardest part of EV charging is not the
            hardware — it is deciding when, how fast, and at what cost each vehicle charges. That
            is the problem we obsess over.
          </p>
          <p>
            Our optimization engine reads your consumption profile, live energy prices, and
            available capacity, then shares load dynamically across every charger — cutting cost
            and squeezing more charging out of the connection you already have.
          </p>
          <div className="values">
            {values.map((v) => (
              <div key={v.title} className="value">
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section__title">The people behind Ekion</h2>
        <div className="grid grid--4">
          {team.map((m) => (
            <article key={m.name} className="member">
              <div className="member__avatar">{m.initials}</div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div className="contact__info">
          <h2 className="section__title">Let&apos;s talk</h2>
          <p>Tell us about your site or fleet and we&apos;ll put together a plan.</p>
          <ul className="contact__list">
            <li><strong>Email</strong> {company.email}</li>
            <li><strong>Phone</strong> {company.phone}</li>
            <li><strong>Office</strong> {company.address}</li>
          </ul>
        </div>
        <form
          className="contact__form"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          {sent ? (
            <p className="contact__thanks">Thanks — we&apos;ll be in touch shortly. ⚡</p>
          ) : (
            <>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                How can we help?
                <textarea name="message" rows="4" required />
              </label>
              <button type="submit" className="btn">Send message</button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          <span className="nav__bolt">⚡</span> {company.name}
        </span>
        <span>© {new Date().getFullYear()} {company.name} Ltd. All rights reserved.</span>
        <span className="footer__note">Demo site — dummy content.</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
