import volunteerImage from '../../../assets/volunteers.png'
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
          <div className="volunteer__content">
            <Badge>{volunteerContent.eyebrow}</Badge>
            <h2 className="volunteer__title" id="volunteer-title">
              {volunteerContent.title}
            </h2>
            <p className="volunteer__description">
              {volunteerContent.description}
            </p>
            <Button
              className="volunteer__action"
              href={volunteerHref}
              variant="navy"
            >
              {volunteerContent.actionLabel}
            </Button>
          </div>

          <img
            className="volunteer__image"
            src={volunteerImage}
            width="468"
            height="468"
            alt={volunteerContent.imageAlt}
          />
        </div>
      </div>
    </section>
  )
}
