;(function(root, name, output){
  if(typeof define == "function" && define.amd) return define([], output)
  if(typeof module == "object" && module.exports) module.exports = output()
  else root[name] = output()
})(this, "scroll", function(){
    
  var win = window
    , doc = win.document
    , docEl = doc.documentElement
    , requestAnimationFrame =
      win.requestAnimationFrame ||
      win.webkitRequestAnimationFrame ||
      win.mozRequestAnimationFrame ||
      win.oRequestAnimationFrame ||
      win.msRequestAnimationFrame ||
      function(callback){
        setTimeout(function(){
          callback()
        }, 1000 / 60)
      }
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
 return function (destination, duration){
    var startTop = win.pageYOffset || docEl.scrollTop || doc.body.scrollTop || 0
      , startLeft = win.pageXOffset || docEl.scrollLeft || doc.body.scrollLeft || 0
      , isNumber = _toString.call(destination) == NUMBER_CLASS
      , destinationTop = isNumber ? destination : (_toString.call(destination.top) == NUMBER_CLASS ? destination.top : startTop)
      , destinationLeft = isNumber ? startLeft : (_toString.call(destination.left) == NUMBER_CLASS ? destination.left : startLeft)
    timer(function(i){
      win.scrollTo(startLeft * (1 - i) + destinationLeft * i, startTop * (1 - i) + destinationTop * i)
    }, duration == null ? 300 : duration)
  }

})
