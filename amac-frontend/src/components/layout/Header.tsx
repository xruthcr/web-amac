import { useCallback, useRef, useState } from 'react'
import logo from '../../assets/amac-logo.png'
import { navLinks } from '../../data/home'
import { DonationDialog } from '../ui/DonationDialog'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [donationOpen, setDonationOpen] = useState(false)
  const desktopDonateRef = useRef<HTMLButtonElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const lastDonateTriggerRef = useRef<HTMLElement | null>(null)

  const closeMenu = () => setMenuOpen(false)

  const closeDonation = useCallback(() => setDonationOpen(false), [])

  const openDonation = (trigger: HTMLElement | null) => {
    lastDonateTriggerRef.current = trigger
    setDonationOpen(true)
  }

  const openDonationFromMenu = () => {
    closeMenu()
    openDonation(menuToggleRef.current)
  }

  return (
    <>
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
            <button
              className="btn btn--orange btn--sm header__nav-donate"
              type="button"
              aria-haspopup="dialog"
              onClick={openDonationFromMenu}
            >
              Dona ahora
            </button>
          </nav>

          <button
            className="btn btn--orange btn--sm header__cta"
            ref={desktopDonateRef}
            type="button"
            aria-haspopup="dialog"
            onClick={() => openDonation(desktopDonateRef.current)}
          >
            Dona ahora
          </button>

          <button
            className={['header__toggle', menuOpen ? 'is-open' : '']
              .filter(Boolean)
              .join(' ')}
            ref={menuToggleRef}
            type="button"
            aria-label={
              menuOpen
                ? 'Cerrar menú de navegación'
                : 'Abrir menú de navegación'
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

      <DonationDialog
        open={donationOpen}
        onClose={closeDonation}
        returnFocusRef={lastDonateTriggerRef}
      />
    </>
  )
}
