export function fadeIn (element) {
  element.style.opacity = 0

  let last = +new Date()
  function tick () {
    element.style.opacity = +element.style.opacity + (new Date() - last) / 400
    last = +new Date()

    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  }

  tick()
}

export function hide (element) {
  element.style.display = 'none'
}

export function show (element) {
  element.style.display = ''
}
