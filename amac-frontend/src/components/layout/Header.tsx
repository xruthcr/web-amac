import { useState } from 'react'
import logo from '../../assets/amac-logo.png'
import { donationHref, navLinks } from '../../data/home'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#inicio" onClick={closeMenu}>
          <img
            className="header__logo"
            src={logo}
            width="40"
            height="40"
            alt=""
          />
          <span>AMAC</span>
        </a>

        <nav
          className={['header__nav', menuOpen ? 'is-open' : '']
            .filter(Boolean)
            .join(' ')}
          id="primary-navigation"
          aria-label="Navegación principal"
        >
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li className="header__nav-item" key={link.href}>
                <a
                  className="header__link"
                  href={link.href}
                  aria-current={
                    link.href === '#inicio' ? 'page' : undefined
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--orange btn--sm header__nav-donate"
            href={donationHref}
            onClick={closeMenu}
          >
            Dona ahora
          </a>
        </nav>

        <a className="btn btn--orange btn--sm header__cta" href={donationHref}>
          Dona ahora
        </a>

        <button
          className={['header__toggle', menuOpen ? 'is-open' : '']
            .filter(Boolean)
            .join(' ')}
          type="button"
          aria-label={
            menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header__toggle-line" />
          <span className="header__toggle-line" />
          <span className="header__toggle-line" />
        </button>
      </div>
    </header>
  )
}
