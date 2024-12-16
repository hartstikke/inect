import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// import nav from './nav'

function global() {
  // Animate the HERO
  const animateHero = () => {}

  // Animate the FOOTER
  const animateFooter = () => {}

  const mm = gsap.matchMedia() // Create a matchMedia instance

  const init = () => {
    mm.add('(min-width: 479px)', () => {
      animateHero()
      animateFooter()
    })
    // nav()
  }
  init()
}

export default global
