// DRAGGABLE INTERACTION
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger)

function clients() {
  function updateActive(currentItem, onLeave = false) {
    let currentIndex = currentItem.index()
    let lastIndex = $('.work_item').last().index() // Get the last index
    let isLastIndex = currentIndex === lastIndex // Check if it's the last index

    if (onLeave && isLastIndex) {
      $('.box').removeClass('active')
      $('.work_item').removeClass('active')
    } else {
      $('.box').removeClass('active')
      $('.work_item').removeClass('active')

      currentItem.addClass('active')
      $('.box').eq(currentIndex).addClass('active')
    }
  }

  // Scroll into view trigger
  $('.work_item').each(function () {
    let triggerElement = $(this)
    gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          updateActive(triggerElement)
        },
        onEnterBack: () => {
          updateActive(triggerElement)
        },
        onLeave: () => {
          updateActive(triggerElement, true)
        },
      },
    })
  })
}
export default clients
