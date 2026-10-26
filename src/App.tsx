import { useEffect } from 'react'
import { awards, experiences, profile, projects, skills } from './data'
import { ExperienceItem } from './components/ExperienceItem'
import { GlitchFilter } from './components/GlitchFilter'

// Wrap each listed phrase found in `text` in a <mark> tag (blue tag style)
function highlight(text: string, phrases: string[]) {
  if (phrases.length === 0) return text
  const pattern = new RegExp(`(${phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
  return text.split(pattern).map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="mark">
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

const [lead, ...rest] = profile.bio

const year = new Date().getFullYear()

function App() {
  // The sections only exist once React has rendered, so the browser can't
  // jump to a #section in the address on its own: do it after mounting
  useEffect(() => {
    if (!location.hash) return
    document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="site-header__logo" href="#top" aria-label={`${profile.name}, back to top`}>
          {profile.logo}
        </a>
        <nav aria-label="Primary">
          <ul className="site-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <GlitchFilter />
          <p className="hero__eyebrow">
            {profile.role}
            <span className="hero__sep"> / </span>
            <span className="hero__location">{profile.location}</span>
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__name">{profile.name}</span>
            <span className="hero__logo" aria-hidden="true">
              <span className="hero__logo-text">{profile.logo}</span>
            </span>
          </h1>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <h2 id="about-title" className="section__title">About</h2>
          <p className="about__lead">{highlight(lead, profile.bioHighlights)}</p>
          <div className="about__columns">
            {rest.map((p) => (
              <p key={p} className="about__text">
                {p}
              </p>
            ))}
          </div>
          <dl className="facts" aria-label="At a glance">
            <div className="fact">
              <dt className="fact__label">Years building interfaces</dt>
              <dd className="fact__value">{profile.yearsOfExperience}</dd>
            </div>
            {/* Both languages share one wide cell; each pair mirrors the fact layout */}
            <div className="fact fact--wide">
              <dt className="visually-hidden">Languages</dt>
              <dd className="fact__langs">
                {profile.languages.map((l) => (
                  <span key={l.code} className="fact__lang">
                    <span className="fact__value">{l.name}</span>{' '}
                    <span className="fact__label">{l.level}</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section__title">Side projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.name} className="project">
                <h3 className="project__name">
                  <svg
                    className="project__logo"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    {p.logoPaths.map((d) => (
                      <path key={d} d={d} />
                    ))}
                  </svg>
                  {p.name}
                </h3>
                <div className="project__blocks">
                  {p.description.map((d) => (
                    <div key={d.title} className="project__block">
                      <h4 className="project__subtitle">{d.title}</h4>
                      <p>{highlight(d.text, d.highlights)}</p>
                    </div>
                  ))}
                </div>
                <ul className="project__links">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <a className="project__link" href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                        <span className="visually-hidden">
                          {l.label.includes(p.name) ? '' : ` for ${p.name}`} (opens in a new tab)
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <h2 id="work-title" className="section__title">
            Work experience
          </h2>
          <ol className="jobs">
            {experiences.map((item, i) => (
              <ExperienceItem key={`${item.company}-${item.start}`} item={item} defaultOpen={i === 0} />
            ))}
          </ol>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <h2 id="skills-title" className="section__title">Skills</h2>
          <div className="skills">
            {skills.map((s, i) => (
              <section key={s.group} className="skills__group" aria-labelledby={`skills-${i}`}>
                <h3 id={`skills-${i}`} className="skills__title">{s.group}</h3>
                <ul className="skills__list">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="section" id="awards" aria-labelledby="awards-title">
          <h2 id="awards-title" className="section__title">Awards</h2>
          <ul className="awards">
            {awards.map((a) => (
              <li key={a.title} className="award">
                <h3 className="award__title">{a.title}</h3>
                <p className="award__year">{a.year}</p>
                <p className="award__text">{a.text}</p>
                <a className="award__link" href={a.link.href} target="_blank" rel="noreferrer">
                  {a.link.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="site-footer__title">Let’s talk</h2>
        <a className="site-footer__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <ul className="site-footer__links">
          {profile.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="site-footer__copy">© {year} {profile.name}</p>
      </footer>
    </>
  )
}

export default App
