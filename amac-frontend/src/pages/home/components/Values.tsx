import {
  BookOpenIcon,
  HeartScanIcon,
  UsersIcon,
} from '../../../components/ui/Icons'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { valuesContent } from '../../../data/home'
import './Values.css'

const iconMap = {
  'heart-scan': HeartScanIcon,
  users: UsersIcon,
  'book-open': BookOpenIcon,
}

export function Values() {
  return (
    <section
      className="values"
      id="valores"
      aria-labelledby="values-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow={valuesContent.eyebrow}
          title={valuesContent.title}
          titleId="values-title"
          tone="light"
        />

        <ul className="values__grid">
          {valuesContent.items.map((item) => {
            const Icon = iconMap[item.icon]

            return (
              <li className="values__item" key={item.title}>
                <Icon className="values__icon" />
                <h3 className="values__title">{item.title}</h3>
                <p className="values__description">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
