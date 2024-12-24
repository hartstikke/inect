import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { EASE } from '../easings/easing'
gsap.registerPlugin(ScrollTrigger)

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

      ScrollTrigger.create({
        trigger: item,
        start: 'top 90%',
        end: 'bottom top',
        // markers: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.reverse(),
      })
    })
  }

  const heroAnimation = () => {
    let heroTitleTl = gsap.timeline({ paused: true })
    heroTitleTl.from('.hero_title', {
      y: 100,
      duration: 1.5,
      ease: 'power4.inOut',
    })

    ScrollTrigger.create({
      trigger: '.hero_title',
      start: 'top bottom',
      // markers: true,
      onEnter: () => heroTitleTl.play(),
      onLeaveBack: () => heroTitleTl.reverse(),
      onEnterBack: () => heroTitleTl.play(),
      onLeave: () => heroTitleTl.reverse(),
    })

    let heroTextTl = gsap.timeline({ paused: true })
    heroTextTl.from('.hero_text', {
      y: 300,
      duration: 1.5,
      ease: 'power4.inOut',
    })

    ScrollTrigger.create({
      trigger: '.hero_text',
      start: '-50% bottom',
      // markers: true,
      onEnter: () => heroTextTl.play(),
      onLeaveBack: () => heroTextTl.reverse(),
      onEnterBack: () => heroTextTl.play(),
      onLeave: () => heroTextTl.reverse(),
    })

    let heroButtonsTl = gsap.timeline({ paused: true })
    heroButtonsTl.from('.hero_buttons', {
      y: 300,
      duration: 1.5,
      ease: 'power4.inOut',
    })

    ScrollTrigger.create({
      trigger: '.hero_buttons',
      start: '-100% bottom',
      // markers: true,
      onEnter: () => heroButtonsTl.play(),
      onLeaveBack: () => heroButtonsTl.reverse(),
      onEnterBack: () => heroButtonsTl.play(),
      onLeave: () => heroButtonsTl.reverse(),
    })
    //Hero title is the scrolltrigger
  }

  const animateClients = () => {
    const clients = document.querySelectorAll('.clients_link-text')

    clients.forEach((item) => {
      let tl = gsap.timeline({ paused: true })
      tl.from(
        item,
        {
          yPercent: 100,
          duration: 0.6,
          ease: 'power4.inOut',
        },
        0
      )

      ScrollTrigger.create({
        trigger: item,
        start: 'top 90%',
        // markers: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.reverse(),
      })
    })
  }

  const createImageParallax = () => {
    const imgWraps = gsap.utils.toArray('.what_item')

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
          // markers: true, // Debug markers
        },
      })
    })
  }
  const itemsWhat = () => {
    const imgs = document.querySelectorAll('.what_item')

    imgs.forEach((item) => {
      let tl = gsap.timeline({ paused: true })
      tl.fromTo(
        item,
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

      ScrollTrigger.create({
        trigger: '.what_container',
        start: 'top 50%',
        // markers: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.reverse(),
      })
    })
  }
  const itemsAbout = () => {
    const imgs = document.querySelectorAll('.about_image')

    imgs.forEach((item) => {
      let tl = gsap.timeline({ paused: true })
      tl.fromTo(
        item,
        {
          clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power4.out',
          duration: 1,
          stagger: 1.5,
        }
      )

      ScrollTrigger.create({
        trigger: '.about_component',
        start: 'bottom bottom',
        // markers: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.reverse(),
      })
    })
  }
  const itemsValues = () => {
    const items = document.querySelectorAll('.values_item')

    items.forEach((item) => {
      let tl = gsap.timeline({ paused: true })
      tl.fromTo(
        item,
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power4.out',
          duration: 1.5,
          stagger: 0.2,
        }
      )

      ScrollTrigger.create({
        trigger: '.values_item-list',
        start: 'top 85%',
        end: 'bottom top',
        // markers: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.reverse(),
      })
    })
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
      markers: true,
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
      onEnterBack: () => tl.play(),
      onLeave: () => tl.reverse(),
    })
  }

  contactAnimation()

  animateHeadings()
  animateClients()
  heroAnimation()
  createImageParallax()
  itemsWhat()
  itemsAbout()
  itemsValues()
}

export default home
