// import global from './js/global'
import home from './js/pages/home'
import './styles/style.css'

// Main function to determine which scripts to run
function main() {
  const pageWrapper = document.querySelector('body')
  // global()

  if (pageWrapper.classList.contains('home')) {
    home()
  } else if (pageWrapper.classList.contains('product')) {
    // product()
  } else if (pageWrapper.classList.contains('about')) {
    // about()
  } else if (pageWrapper.classList.contains('configurator')) {
    // configurator()
  }
}

main()
