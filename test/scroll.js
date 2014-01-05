var tape = require("tape")
  , scroll = require("../")

function getPageYOffset(){
  return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0
}

function getPageXOffset(){
  return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
}

tape("scroll", function(test){
  
  test.plan(8)
  
  var hugeElement = document.createElement("div")
  hugeElement.style.width = "4000px"
  hugeElement.style.height = "4000px"
  document.body.appendChild(hugeElement)
  
  scroll(1000, 100)
  setTimeout(function(){
    test.equal(getPageYOffset(), 1000, "scrolls vertically 1/2")
    test.equal(getPageXOffset(), 0, "scrolls vertically 2/2")
    
    scroll({top: 500, left: 500}, 100)
    setTimeout(function(){
      test.equal(getPageYOffset(), 500, "scrolls both ways 1/2")
      test.equal(getPageXOffset(), 500, "scrolls both ways 2/2")
      
      
      scroll({top: 0, left: 0})
      setTimeout(function(){
        test.notEqual(getPageYOffset(), 0, "default duration is 300 1/4")
        test.notEqual(getPageXOffset(), 0, "default duration is 300 2/4")
      }, 100)
      setTimeout(function(){
        test.equal(getPageYOffset(), 0, "default duration is 300 3/4")
        test.equal(getPageXOffset(), 0, "default duration is 300 4/4")
      }, 400)
      
    }, 200)

    
  }, 200)
  
})
