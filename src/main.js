// import global from './js/global'
import clients from './js/clients'
import flipCode from './js/flipCode'
import home from './js/pages/home'
import './styles/style.css'
import software from './js/pages/software'
import whatWeDo from './js/pages/whatwedo'

// Main function to determine which scripts to run
function main() {
  const pageWrapper = document.querySelector('body')

  if (pageWrapper.classList.contains('home')) {
    flipCode()
    home()
    clients()
  } else if (pageWrapper.classList.contains('what-we-do')) {
    whatWeDo()
  } else if (pageWrapper.classList.contains('about')) {
    // about()
  } else if (pageWrapper.classList.contains('software')) {
    software()
  }
}

main()
