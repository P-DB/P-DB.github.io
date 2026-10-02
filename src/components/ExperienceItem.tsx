import type { Experience } from '../data'

const fmt = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })

function formatDate(iso: string) {
  const [y, m] = iso.split('-').map(Number)
  return m ? fmt.format(new Date(y, m - 1)) : String(y)
}

type Props = { item: Experience; index: number }

export function ExperienceItem({ item, index }: Props) {
  const headingId = `job-${index}`
  const end = item.end ? formatDate(item.end) : 'Present'

  return (
    <li className="job">
      <article aria-labelledby={headingId}>
        <div className="job__meta">
          <span className="job__index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="job__dates">
            <time dateTime={item.start}>{formatDate(item.start)}</time>
            {' – '}
            {item.end ? <time dateTime={item.end}>{end}</time> : end}
          </p>
          {item.type && <p className="job__type">{item.type}</p>}
        </div>

        <div className="job__body">
          <h3 id={headingId} className="job__title">
            {item.role}{' '}
            <span className="job__company">
              @{' '}
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.company}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ) : (
                item.company
              )}
            </span>
          </h3>
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
        </div>
      </article>
    </li>
  )
}
