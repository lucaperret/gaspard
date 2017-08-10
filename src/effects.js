/***
 * Effects Module
 * @module effects
 */

/**
 * Fade in or out the element.
 * @private
 *
 * @param {Element} element A DOM node
 * @param {number} [duration=400] A number determining how long the animation will run
 * @param {boolean} isFadeIn Determine fadeIn or fadeOut
 */
function fade (element, duration = 400, isFadeIn) {
  const opacity = isFadeIn ? 0 : 1
  element.style.opacity = opacity

  let last = +new Date()
  function tick () {
    const timeDifference = (new Date() - last) * (isFadeIn ? 1 : -1)
    element.style.opacity = +element.style.opacity + timeDifference / duration
    last = +new Date()

    const targetOpacity = isFadeIn ? +element.style.opacity < 1 : +element.style.opacity > 0
    if (targetOpacity) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    } else {
      element.style.opacity = isFadeIn ? 1 : 0
    }
  }

  tick()
}

/**
 * Display the elements by fading them to opaque.
 *
 * @param {Element} element A DOM node
 * @param {number} [duration=400] A number determining how long the animation will run
 */
export function fadeIn (element, duration) {
  fade(element, duration, true)
}

/**
 * Hide the element by fading them to transparent.
 *
 * @param {Element} element A DOM node
 * @param {number} [duration=400] A number determining how long the animation will run
 */
export function fadeOut (element, duration) {
  fade(element, duration, false)
}

/**
 * Hide the element.
 *
 * @param {Element} element A DOM node
 */
export function hide (element) {
  element.style.display = 'none'
}

/**
 * Show the element.
 *
 * @param {Element} element A DOM node
 */
export function show (element) {
  element.style.display = ''
}
