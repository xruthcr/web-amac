import logo from '../../assets/amac-logo.png'
import { footerContent } from '../../data/home'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img
          className="footer__logo"
          src={logo}
          width="40"
          height="40"
          alt="AMAC"
        />
        <p className="footer__legal">{footerContent.legal}</p>
        <p className="footer__copyright">{footerContent.copyright}</p>
      </div>
    </footer>
  )
}
