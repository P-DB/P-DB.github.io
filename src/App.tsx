import { awards, experiences, profile, skills } from './data'
import { ExperienceItem } from './components/ExperienceItem'
import { GlitchFilter } from './components/GlitchFilter'

function App() {
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
            {profile.role} / {profile.location}
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__name">{profile.name}</span>
            <span className="hero__logo" aria-hidden="true">
              <span className="hero__logo-text">
                {profile.logo}
              </span>
            </span>
          </h1>
          <p className="hero__intro">{profile.intro}</p>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <h2 id="about-title" className="section__title">About</h2>
          <div className="about">
            {profile.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h3 className="about__subtitle">Languages</h3>
            <ul className="about__languages">
              {profile.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
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
              <li key={a.title} className="awards__item">
                <span className="awards__year">{a.year}</span>
                <div>
                  <h3 className="awards__title">{a.title}</h3>
                  <p>{a.text}</p>
                </div>
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
        <p className="site-footer__copy">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  )
}

export default App
