import raf from "raf"

const { min } = Math

const createAnimation = (func, duration = 300) => new Promise((resolve) => {
  const startDate = Date.now()
  const tick = () => {
    const progress = min(1, (Date.now() - startDate) / duration)
    func(progress)
    if(progress < 1) {
      raf(tick)
    } else {
      resolve()
    }
  }
  tick()
})

const scroll = ({
  x = window.pageXOffset,
  y = window.pageYOffset,
}, duration) => {
  const initialTop = window.pageYOffset
  const initialLeft = window.pageXOffset
  return createAnimation((progress) => {
    window.scrollTo(
      (1 - progress) * initialLeft + x * progress,
      (1 - progress) * initialTop + y * progress
    )
  }, duration)
}

export default scroll
