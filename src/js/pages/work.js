import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

import { EASE } from '../easings/easing'

function work() {
  if (window.innerWidth > 1024) {
    const animateHeadings = () => {
      const titles = document.querySelectorAll('.subtitle, [title-animate]')

      titles.forEach((item) => {
        let tl = gsap.timeline({ paused: true })
        tl.from(
          item,
          {
            yPercent: 100,
            duration: 1.5,
            ease: EASE,
          },
          0
        )

        ScrollTrigger.create({
          trigger: item,
          start: 'top 90%',
          end: 'bottom top',
          onEnter: () => tl.play(),
        })
      })
    }

    const animateClients = () => {
      // const clients = document.querySelectorAll('.clients_link-text')
      // clients.forEach((item) => {
      //   let tl = gsap.timeline({ paused: true })
      //   tl.from(
      //     item,
      //     {
      //       yPercent: 100,
      //       duration: 0.6,
      //       ease: 'power4.inOut',
      //     },
      //     0
      //   )
      //   ScrollTrigger.create({
      //     trigger: item,
      //     start: 'top 90%',
      //     onEnter: () => tl.play(),
      //   })
      // })
    }

    const contactAnimation = () => {
      let tl = gsap.timeline({ paused: true })
      tl.fromTo(
        '.contact_content',
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power4.out',
          duration: 1.5,
        }
      )

      ScrollTrigger.create({
        trigger: '.contact_content',
        start: 'top 60%',
        onEnter: () => tl.play(),
      })

      const tlContact = gsap.timeline({
        defaults: {
          ease: 'none',
        },
        scrollTrigger: {
          trigger: '.section_contact',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      tlContact.to('.contact_bg', {
        height: '100%',
        width: '100%',
      })
    }

    const init = () => {
      contactAnimation()
      animateHeadings()
      animateClients()

      console.log('ScrollTrigger Loaded:', gsap.plugins.ScrollTrigger)
    }

    init()
  }
}

export default work
