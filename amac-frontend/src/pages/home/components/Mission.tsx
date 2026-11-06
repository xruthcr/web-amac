import { Badge } from '../../../components/ui/Badge'
import { missionContent, stats } from '../../../data/home'
import './Mission.css'

export function Mission() {
  return (
    <section className="mission" id="mision" aria-labelledby="mission-title">
      <div className="container">
        <div className="mission__top">
          <div className="mission__aside">
            <Badge>{missionContent.eyebrow}</Badge>
            <h2 className="mission__title" id="mission-title">
              {missionContent.title}
            </h2>
            <a className="mission__link" href={missionContent.link.href}>
              {missionContent.link.label}
            </a>
          </div>

          <div className="mission__copy">
            {missionContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl className="mission__stats">
          {stats.map((stat) => (
            <div className="mission__stat" key={stat.label}>
              <dt className="mission__stat-value">{stat.value}</dt>
              <dd className="mission__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
