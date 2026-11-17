import volunteerImage from '../../../assets/volunteer-foster.png'
import { Badge } from '../../../components/ui/Badge'
import { Button } from '../../../components/ui/Button'
import { volunteerContent, volunteerHref } from '../../../data/home'
import './Volunteer.css'

export function Volunteer() {
  return (
    <section
      className="volunteer"
      id="voluntariado"
      aria-labelledby="volunteer-title"
    >
      <div className="container">
        <div className="volunteer__panel">
          <div className="volunteer__media">
            <img
              className="volunteer__image"
              src={volunteerImage}
              width="1000"
              height="1200"
              alt={volunteerContent.imageAlt}
              loading="lazy"
            />
            <span className="volunteer__chip">{volunteerContent.chip}</span>
          </div>

          <div className="volunteer__content">
            <Badge className="volunteer__badge">
              {volunteerContent.eyebrow}
            </Badge>
            <h2 className="volunteer__title" id="volunteer-title">
              {volunteerContent.title}
            </h2>
            <div className="volunteer__body">
              <p className="volunteer__text">
                <strong>{volunteerContent.lead}</strong>{' '}
                {volunteerContent.paragraph}
              </p>
              <p className="volunteer__text">
                {volunteerContent.secondaryParagraph}
              </p>
            </div>
            <Button
              className="volunteer__action"
              href={volunteerHref}
              variant="navy"
            >
              {volunteerContent.actionLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
