import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import automatedTabs from './helpers/automatedTabs'
import moduleTabs from './helpers/moduleTabs'
import nav from './nav'

function global() {
  // Animate the HERO
  const animateHero = () => {}

  // Animate the FOOTER
  const animateFooter = () => {
    const frame = document.querySelector('.block.is-footer')

    gsap
      .timeline({
        defaults: {
          ease: 'none',
        },
        scrollTrigger: {
          trigger: frame,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      .from(frame, {
        yPercent: -35,
        startAt: { filter: 'brightness(100%)' },
        filter: 'brightness(30%)',
      })
  }

  const mm = gsap.matchMedia() // Create a matchMedia instance

  const init = () => {
    mm.add('(min-width: 479px)', () => {
      animateHero()
      animateFooter()
    })
    nav()
    automatedTabs()
    moduleTabs()
  }
  init()
}

export default global
