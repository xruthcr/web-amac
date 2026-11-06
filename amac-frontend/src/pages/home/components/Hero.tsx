import adoptaBadge from '../../../assets/adopta-badge.png'
import heroImage from '../../../assets/hero-dog.png'
import { Button } from '../../../components/ui/Button'
import { heroContent } from '../../../data/home'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            <span>{heroContent.badge}</span>
          </p>

          <h1 className="hero__title" id="hero-title">
            {heroContent.title.slice(0, -heroContent.titleAccent.length)}
            <span className="hero__title-accent">
              {heroContent.titleAccent}
            </span>
          </h1>

          <p className="hero__description">{heroContent.description}</p>

          <div className="hero__actions">
            <Button
              href={heroContent.primaryAction.href}
              size="lg"
              variant="primary"
            >
              {heroContent.primaryAction.label}
            </Button>
            <Button
              href={heroContent.secondaryAction.href}
              size="lg"
              variant="outline"
            >
              {heroContent.secondaryAction.label}
            </Button>
          </div>
        </div>

        <div className="hero__media">
          <img
            className="hero__image"
            src={heroImage}
            width="536"
            height="670"
            alt="Perro feliz esperando ser adoptado"
          />
          <img
            className="hero__adopta"
            src={adoptaBadge}
            width="92"
            height="81"
            alt="Adopta"
          />
        </div>
      </div>
    </section>
  )
}
