import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
function createScrollTrigger(triggerElement, timeline, startAnimation) {
  ScrollTrigger.create({
    trigger: triggerElement,
    start: startAnimation,
    onEnter: () => timeline.play(),
  })
}

export default createScrollTrigger
