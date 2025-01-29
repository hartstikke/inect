import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { EASE } from '../easings/easing'
gsap.registerPlugin(ScrollTrigger)

function home() {
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

    const heroAnimation = () => {
      let heroTitleTl = gsap.timeline({ paused: true })
      heroTitleTl.from('.hero_title', {
        y: '100%',
        duration: 1.5,
        ease: 'power4.inOut',
      })

      ScrollTrigger.create({
        trigger: '.hero_title',
        start: 'top bottom',
        onEnter: () => heroTitleTl.play(),
      })

      let heroTextTl = gsap.timeline({ paused: true })
      heroTextTl.from('.hero_text', {
        y: '100%',
        duration: 1.5,
        ease: 'power4.inOut',
      })

      ScrollTrigger.create({
        trigger: '.hero_text',
        start: '-50% bottom',
        onEnter: () => heroTextTl.play(),
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
        onEnter: () => heroButtonsTl.play(),
      })

      if (window.innerWidth > 991) {
        const tl = gsap.timeline({
          defaults: {
            ease: 'none',
          },
          scrollTrigger: {
            trigger: '.section_clients',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        })

        tl.to('.section_hero', {
          y: '30vh',
        })
      }
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

    const createImageParallax = () => {
      const imgWraps = gsap.utils.toArray('.what_item')
      imgWraps.forEach((imgWrap) => {
        const speed = parseFloat(imgWrap.getAttribute('data-speed'))
        let tl = gsap.timeline({ paused: true })
        tl.to(imgWrap, {
          y: `${-3.8 * speed}rem `,
          ease: 'none',
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
          onEnter: () => tl.play(),
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
          onEnter: () => tl.play(),
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
          onEnter: () => tl.play(),
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

    const videoAnimation = () => {
      /* Make sure the video is 'activated' on iOS */
      function once(el, event, fn, opts) {
        var onceFn = function () {
          el.removeEventListener(event, onceFn)
          fn.apply(this, arguments)
        }
        el.addEventListener(event, onceFn, opts)
        return onceFn
      }

      if (window.innerWidth > 991) {
        console.clear()

        const video = document.querySelector('.hero_video')
        let src = video.currentSrc || video.src
        console.log(video, src)

        once(document.documentElement, 'touchstart', function () {
          video.play()
          video.pause()
        })

        gsap.registerPlugin(ScrollTrigger)

        let tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: '.section_hero',
            start: 'top -50px',
            end: 'bottom -200px',
            scrub: true,
          },
        })

        once(video, 'loadedmetadata', () => {
          tl.fromTo(
            video,
            {
              currentTime: 0,
            },
            {
              currentTime: video.duration || 1,
            }
          )
        })

        /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
        setTimeout(function () {
          if (window['fetch']) {
            fetch(src)
              .then((response) => response.blob())
              .then((response) => {
                var blobURL = URL.createObjectURL(response)

                var t = video.currentTime
                once(document.documentElement, 'touchstart', function () {
                  video.play()
                  video.pause()
                })

                video.setAttribute('src', blobURL)
                video.currentTime = t + 0.01
              })
          }
        }, 100)
      }
    }

    const init = () => {
      contactAnimation()
      videoAnimation()
      animateHeadings()
      animateClients()
      heroAnimation()
      createImageParallax()
      itemsWhat()
      itemsAbout()
      itemsValues()
    }

    init()
  }
}

export default home
