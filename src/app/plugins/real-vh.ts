import { debounce } from 'lodash-es'

const bootstrap = function () {
  const calcValueWithBound = debounce(() => {
    const realVh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--realVh', `${realVh}px`)
  }, 100)

  calcValueWithBound()
  window.addEventListener('resize', calcValueWithBound)
}

bootstrap()
