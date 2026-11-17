import editorialImage from '../../../assets/editorial-rescue.png'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { editorialContent } from '../../../data/home'
import './Editorial.css'

export function Editorial() {
  return (
    <section
      className="editorial"
      id="informacion"
      aria-labelledby="editorial-title"
    >
      <div className="container">
        <div className="editorial__intro">
          <SectionHeading
            className="editorial__heading"
            eyebrow={editorialContent.eyebrow}
            title={editorialContent.title}
            titleId="editorial-title"
            tone="light"
          />
          <p className="editorial__description">
            {editorialContent.description}
          </p>
        </div>

        <div className="editorial__cards">
          {editorialContent.cards.map((card) =>
            card.variant === 'image' ? (
              <a
                className="editorial__card editorial__card--image"
                href={card.href}
                id={card.id}
                key={card.id}
                aria-label={`${card.title}. ${card.linkLabel}`}
              >
                <img
                  className="editorial__card-image"
                  src={editorialImage}
                  width="1000"
                  height="700"
                  alt={card.imageAlt}
                  loading="lazy"
                />
                <span className="editorial__card-overlay" aria-hidden="true" />
                <div className="editorial__card-content">
                  <p className="editorial__card-eyebrow">{card.eyebrow}</p>
                  <h3 className="editorial__card-title">{card.title}</h3>
                  <p className="editorial__card-link">{card.linkLabel}</p>
                </div>
              </a>
            ) : (
              <a
                className="editorial__card editorial__card--light"
                href={card.href}
                id={card.id}
                key={card.id}
                aria-label={`${card.title}. ${card.linkLabel}`}
              >
                <p className="editorial__card-eyebrow">{card.eyebrow}</p>
                <h3 className="editorial__card-title">{card.title}</h3>
                <p className="editorial__card-description">
                  {card.description}
                </p>
                <p className="editorial__card-link">{card.linkLabel}</p>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
