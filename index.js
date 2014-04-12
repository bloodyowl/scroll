var win = window
  , doc = win.document
  , docEl = doc.documentElement
  , requestAnimationFrame = require("bloody-animationframe").requestAnimationFrame
  , _toString = {}.toString
  , NUMBER_CLASS = "[object Number]"

/**
 * AnimationFrame manager
 *
 * @private
 * @param {Function} fn Callback
 * @param {Integer} duration
*/
function timer(fn, duration){
  var start = +new Date()
    , end = start + duration
    , current = start
    , lastPercent = 0

  requestAnimationFrame(step)
  function step(){
    current = +new Date()
    lastPercent = (current - start) / duration
    fn(lastPercent = 1 > lastPercent ? lastPercent : 1)
    if(current > end) {
      if(lastPercent != 1) {
        requestAnimationFrame(function(){
          fn(1)
        })
      }
    } else {
      requestAnimationFrame(step)
    }
  }
}

function getFirstNumber(){
  var index = -1
    , length = arguments.length
  while(++index < length) {
    if(_toString.call(arguments[index]) == NUMBER_CLASS) {
      return arguments[index]
    }
  }
}

/**
 * A function that makes the pages scroll smoothly
 *
 * @param {Object|Integer} destination Object with `top` and `left` properties or Number (top)
 * @param {Integer} duration
 * @name document.scrollTo
 * @example
 *
 * scroll(400, 1000)
 * scroll({top:0, left:1000}, 1000)
*/
module.exports = function (destination, duration){
  var startTop = win.pageYOffset || docEl.scrollTop || doc.body.scrollTop || 0
    , startLeft = win.pageXOffset || docEl.scrollLeft || doc.body.scrollLeft || 0
    , isNumber = _toString.call(destination) == NUMBER_CLASS
    , destinationTop
    , destinationLeft

  if(isNumber) {
    destinationTop = destination
    destinationLeft = startLeft
  } else {
    destinationTop = getFirstNumber(destination.top, startTop)
    destinationLeft = getFirstNumber(destination.left, startLeft)
  }

  timer(function(i){
    win.scrollTo(
      startLeft * (1 - i) + destinationLeft * i,
      startTop * (1 - i) + destinationTop * i
    )
  }, getFirstNumber(duration, 300))
}
