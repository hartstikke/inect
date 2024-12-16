import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function nav() {
  const navbarMenu = document.querySelector('.nav_component')
  const navBackground = document.querySelector('.nav_bg')
  const offsetY = 140
  let oldScroll = 0

  window.addEventListener('load', function () {
    if (window.scrollY > offsetY) {
      navbarMenu.classList.add('is-active')
    } else {
      navbarMenu.classList.remove('is-active')
    }
  })

  const hamburgerTrigger = document.querySelector('.nav_menu-button.is-dark')

  if (hamburgerTrigger) {
    hamburgerTrigger.addEventListener('click', () => {
      let openState = hamburgerTrigger.getAttribute('aria-expanded')
      console.log(openState)
      openState === 'false'
        ? navbarMenu.classList.add('is-active')
        : navbarMenu.classList.remove('is-active')
    })
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > offsetY) {
      navbarMenu.classList.add('is-active')
      navBackground.classList.add('is-active')
    } else {
      navbarMenu.classList.remove('is-active')
      navBackground.classList.remove('is-active')
    }

    if (
      window.scrollY > oldScroll &&
      navbarMenu.classList.contains('is-active')
    ) {
      // when scrolling DOWN
      navbarMenu.classList.add('is-scrolled')
    } else {
      // when scrolling UP
      navbarMenu.classList.remove('is-scrolled')
    }

    oldScroll = window.scrollY
  })
}

export default nav
