import { Adoption } from './components/Adoption'
import { Contact } from './components/Contact'
import { Editorial } from './components/Editorial'
import { Hero } from './components/Hero'
import { Mission } from './components/Mission'
import { Values } from './components/Values'
import { Volunteer } from './components/Volunteer'
import './Home.css'

export function Home() {
  return (
    <div className="home">
      <Hero />
      <Mission />
      <Values />
      <Adoption />
      <Editorial />
      <Volunteer />
      <Contact />
    </div>
  )
}
