import { useId, useState } from 'react'
import type { Experience } from '../data'

const fmt = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })

function formatDate(iso: string) {
  const [y, m] = iso.split('-').map(Number)
  return m ? fmt.format(new Date(y, m - 1)) : String(y)
}

type Props = { item: Experience; defaultOpen?: boolean }

// One row of the work timeline: a heading wrapping a disclosure button
// (WAI-ARIA accordion pattern) that reveals the role's highlights.
export function ExperienceItem({ item, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const end = item.end ? formatDate(item.end) : 'Present'

  return (
    <li className="job" data-open={open || undefined}>
      <h3 className="job__heading">
        <button
          type="button"
          className="job__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="job__years">
            <time className="job__start" dateTime={item.start}>
              {formatDate(item.start)}
            </time>
            <span className="job__end">
              <span aria-hidden="true">→ </span>
              <span className="visually-hidden"> to </span>
              {item.end ? <time dateTime={item.end}>{end}</time> : end}
            </span>
          </span>{' '}
          {/* Spaces between parts keep the button's accessible name readable */}
          <span className="job__main">
            <span className="job__role">{item.role}</span>{' '}
            <span className="job__tags">
              <span className="job__tag job__tag--company">{item.company}</span>{' '}
              {item.type && <span className="job__tag">{item.type}</span>}
            </span>
          </span>
          <span className="job__icon" aria-hidden="true" />
        </button>
      </h3>

      {/* Stays mounted so height can animate; CSS hides it (visibility) when closed */}
      <div id={panelId} className="job__panel">
        <div className="job__panel-inner">
          <ul className="job__highlights">
            {item.highlights.map((h) =>
              typeof h === 'string' ? (
                <li key={h}>{h}</li>
              ) : (
                <li key={h.title}>
                  <strong>{h.title}:</strong> {h.text}
                </li>
              ),
            )}
          </ul>
          {item.url && (
            <a className="job__link" href={item.url} target="_blank" rel="noreferrer">
              Visit {item.company}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </li>
  )
}
