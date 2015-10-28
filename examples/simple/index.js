import scroll from "../../src"

import "./index.html"

document.querySelector("#To1000")
  .addEventListener("click", () => scroll({ y: 1000 }))

document.querySelector("#To20002000")
  .addEventListener("click", () => scroll({ x: 2000, y: 2000 }))

document.querySelector("#To50000")
  .addEventListener("click", () => scroll({ x: 0, y: 5000 }))

document.querySelector("#To50005000")
  .addEventListener("click", () => scroll({ x: 5000, y: 5000 }))

document.querySelector("#To05000")
  .addEventListener("click", () => scroll({ x: 0, y: 5000 }, 2000))

document.querySelector("#To30004000")
  .addEventListener("click", () => scroll({ x: 3000, y: 4000 }, 2000))
