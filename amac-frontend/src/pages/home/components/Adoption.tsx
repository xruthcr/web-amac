import adoptionImage from '../../../assets/adoption-dog.png'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../../components/ui/Icons'
import { adoptionContent } from '../../../data/home'
import './Adoption.css'

export function Adoption() {
  return (
    <section
      className="adoption"
      id="adopcion"
      aria-labelledby="adoption-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow={adoptionContent.eyebrow}
          title={adoptionContent.title}
          titleId="adoption-title"
        />

        <figure className="adoption__figure">
          <div className="adoption__carousel">
            <img
              className="adoption__image"
              src={adoptionImage}
              width="1104"
              height="420"
              alt={adoptionContent.imageAlt}
            />

            <button
              className="adoption__arrow adoption__arrow--previous"
              type="button"
              aria-label="Ver imagen anterior"
              disabled
            >
              <ChevronLeftIcon />
            </button>

            <button
              className="adoption__arrow adoption__arrow--next"
              type="button"
              aria-label="Ver imagen siguiente"
              disabled
            >
              <ChevronRightIcon />
            </button>

            <div className="adoption__dots" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  className={[
                    'adoption__dot',
                    index === 0 ? 'is-active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  key={index}
                />
              ))}
            </div>
          </div>

          <figcaption className="adoption__caption">
            {adoptionContent.caption}
          </figcaption>
        </figure>

        <div className="adoption__requirements">
          <h3 className="adoption__requirements-title">
            {adoptionContent.requirementsTitle}
          </h3>

          <ol className="adoption__grid">
            {adoptionContent.requirements.map((requirement) => (
              <li className="adoption__card" key={requirement.number}>
                <span
                  className="adoption__number"
                  aria-hidden="true"
                >
                  {requirement.number}
                </span>
                <h4 className="adoption__card-title">
                  {requirement.title}
                </h4>
                <p className="adoption__card-description">
                  {requirement.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
