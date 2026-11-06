import { Badge } from './Badge'
import './SectionHeading.css'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  titleId?: string
  tone?: 'dark' | 'light'
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  tone = 'dark',
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <header
      className={[
        'section-heading',
        tone === 'light' ? 'section-heading--light' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Badge>{eyebrow}</Badge>
      <h2
        className={['section-heading__title', titleClassName]
          .filter(Boolean)
          .join(' ')}
        id={titleId}
      >
        {title}
      </h2>
    </header>
  )
}
