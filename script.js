document.addEventListener("DOMContentLoaded", () => {
  movePiece()
})

let highlightedSquare = null

const movePiece = () => {
  let squares = document.querySelectorAll(".square")
  squares.forEach(square => {
    square.addEventListener("click", (e) => {
      let target = e.target
      highlightSquare(target, e)
      
    })
  })
}

const highlightSquare = (target, e) => {
  if(Array.from(target.classList).includes("piece")) target = e.target.parentElement
  if(typeof target.childNodes[1] === "object") {
    if(highlightedSquare !== target) {
      target.childNodes[1].style.border = "4px solid yellow"
      if(highlightedSquare) highlightedSquare.childNodes[1].style.border = ""
      highlightedSquare = target
    }
  }
}
