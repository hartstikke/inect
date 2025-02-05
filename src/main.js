// import global from './js/global'
import clients from './js/clients'
import clientsWork from './js/clientsWork'
import flipCode from './js/flipCode'
import home from './js/pages/home'
import './styles/style.css'
import software from './js/pages/software'
import whatWeDo from './js/pages/whatwedo'
import work from './js/pages/work'

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
  } else if (pageWrapper.classList.contains('work')) {
    work()
    clientsWork()
  }
}

main()
