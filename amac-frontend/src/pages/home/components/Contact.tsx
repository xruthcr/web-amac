import { Button } from '../../../components/ui/Button'
import {
  contactContent,
  contactHref,
  contactEmail,
} from '../../../data/home'
import './Contact.css'

export function Contact() {
  return (
    <section
      className="contact"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__panel">
          <div className="contact__content">
            <p className="contact__eyebrow">{contactContent.eyebrow}</p>
            <h2 className="contact__title" id="contact-title">
              {contactContent.title}
            </h2>
            <p className="contact__description">
              {contactContent.description}{' '}
              <a href={contactHref}>{contactEmail}</a>
            </p>
          </div>

          <Button
            className="contact__action"
            href={contactHref}
            variant="orange"
          >
            {contactContent.actionLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
