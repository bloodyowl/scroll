;(function(window, document){
  
  var requestAnimationFrame = (function(){
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame 
        || window.oRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function(callback){ 
            window.setTimeout(function(){
              callback()
            }, 1000 / 60)
          }
  })()
  , yOffset = "pageYOffset" in window
  
  function absoluteOffset(el){
    var value = el.offsetTop
    while(el && (el = el.offsetParent)) value += el.offsetTop
    return value
  }
  
  function scroll(to, duration) {
    var origin = yOffset ? window.pageYOffset : document.documentElement.scrollTop
      , start = +new Date()
      , end = start + (duration || 500)
      , direction
    
    if(typeof to == "object" && "nodeName" in to) to = absoluteOffset(to)
    to = document.height < (to + window.innerHeight) ? document.height - window.innerHeight : to
      
    direction = to - origin < 0
     
    function handler(){
      var now = +new Date()
      if (now <= end) {
        if(direction) scrollTo(0, origin - (now - start) / (end - start) * origin + to)
        else scrollTo(0, origin + (now - start) / (end - start) * (to - origin))
        requestAnimationFrame(handler)
      } else {
        scrollTo(0, to)
      }
    }

    requestAnimationFrame(handler)
  }
  
  document.scrollTo = scroll

})(this, this.document)