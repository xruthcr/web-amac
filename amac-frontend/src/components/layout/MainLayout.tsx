import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './MainLayout.css'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">{children}</main>
      <Footer />
    </div>
  )
}
