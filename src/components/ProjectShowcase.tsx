import type { Project } from '../data'

type Props = { project: Project; id: string }

// Slim strip styled like the project's own header bar (Unframed's purple
// gradient): logo mark and wordmark, one-line description and a link to its docs.
export function ProjectShowcase({ project, id }: Props) {
  const titleId = `${id}-title`

  return (
    <section className="showcase" id={id} aria-labelledby={titleId}>
      <div className="showcase__strip">
        <h2 id={titleId} className="showcase__brand">
          <svg className="showcase__logo" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
            {project.logoPaths.map((d) => (
              <path key={d} d={d} />
            ))}
          </svg>
          {project.name}
        </h2>
        <p className="showcase__description">{project.description}</p>
        <a className="showcase__link" href={project.link.href} target="_blank" rel="noreferrer">
          {project.link.label}
          <span className="visually-hidden"> for {project.name} (opens in a new tab)</span>
        </a>
      </div>
    </section>
  )
}
