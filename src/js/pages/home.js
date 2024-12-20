import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import { EASE } from '../easings/easing'
import createScrollTrigger from '../helpers.js/createScrollTrigger'

function home() {
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

      createScrollTrigger(item, tl, 'top bottom')
    })
  }

  const createImageParallax = () => {
    const imgWraps = gsap.utils.toArray('.what_img')

    // Define individual timelines for better control
    imgWraps.forEach((imgWrap) => {
      const speed = parseFloat(imgWrap.getAttribute('data-speed'))
      gsap.to(imgWrap, {
        y: `${-3.8 * speed}rem `,
        ease: 'none',
        scrollTrigger: {
          trigger: '.what_container', // Use individual triggers
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          markers: true, // Debug markers
        },
      })
    })
  }

  const initWhat = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.what_container',
        start: 'top 50%',
        markers: true,
      },
    })

    tl.fromTo(
      '.what_item',
      {
        clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power4.out',
        duration: 1,
        stagger: 0.2,
      }
    )
  }

  animateHeadings()
  createImageParallax()
  initWhat()
}

export default home
