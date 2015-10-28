import scroll from ".."

const reset = () => {
  document.body.style.height = "5000px"
  document.body.style.width = "5000px"
  window.scrollTo(0, 0)
}

tape("scroll", function (test){
  reset()
  test.equal(typeof scroll({ y: 100 }).then, "function", "returns a promise")
  test.end()
})

tape("scroll promise is fulfilled when the transition is over", function (test){
  reset()
  const startDate = Date.now()
  scroll({ y: 100 })
    .then(() => {
      test.ok(Date.now() - startDate >= 300)
      test.end()
    })
})

tape("scroll promise accepts custom duration", function (test){
  reset()
  const startDate = Date.now()
  const DURATION = 500
  scroll({ y: 100 }, DURATION)
    .then(() => {
      test.ok(Date.now() - startDate >= DURATION)
      test.end()
    })
})
