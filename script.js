document.addEventListener("DOMContentLoaded", () => {
  movePiece()
})

let highlightedSquare = null
let squareOne = false
let squareTwo = false
let player = "black"
validMove = true

const movePiece = () => {
  let squares = document.querySelectorAll(".square")
  squares.forEach(square => {
    square.addEventListener("click", (e) => {
      let target = e.target
      highlightSquare(target, e)

      blackPiece(target, e)
      if((squareEmpty(target, e) === false && player === "black" && blackPiece(target, e)) || (squareEmpty(target, e) === false && player === "red" && redPiece(target, e))) {
        squareOne = target
        if(Array.from(target.classList).includes("piece")) squareOne = e.target.parentElement
      } else if(squareOne !== false && validMove){
        if(Array.from(target.classList).includes("piece")) target = e.target.parentElement
        if(player === "black") target.innerHTML += "<div class='piece black-piece'></div>"
        if(player === "red") target.innerHTML += "<div class='piece red-piece'></div>"
        squareOne.innerHTML = ""
        highlightedSquare = null
        squareOne = false
      }
    })
  })
}

const highlightSquare = (target, e) => {
  if(Array.from(target.classList).includes("piece")) target = e.target.parentElement
  if(typeof target.childNodes[1] === "object") {
    if(highlightedSquare !== target) {
      target.childNodes[1].style.border = "4px solid yellow"
      if(highlightedSquare) {
        highlightedSquare.childNodes[1].style.border = ""
      }
      highlightedSquare = target
    }
  } else if(typeof target.childNodes[0] === "object") {
      if(highlightedSquare !== target) {
        target.childNodes[0].style.border = "4px solid yellow"
        if(highlightedSquare) {
        highlightedSquare.childNodes[0].style.border = ""
      }
      highlightedSquare = target
    }
  }
}

const blackPiece = (target, e) => {
  if(Array.from(target.classList).includes("piece")) target = e.target.parentElement
  if(typeof target.childNodes[1] === "object") {
    if(Array.from(target.childNodes[1].classList).includes("black-piece")) return true
    return false
  } else if (typeof target.childNodes[0] === "object") {
    if(Array.from(target.childNodes[0].classList).includes("black-piece")) return true
    return false
  }
}

const redPiece = (target, e) => {
  if(Array.from(target.classList).includes("piece")) target = e.target.parentElement
  if(typeof target.childNodes[1] === "object") {
    if(Array.from(target.childNodes[1].classList).includes("red-piece")) return true
    return false
  } else if (typeof target.childNodes[0] === "object") {
    if(Array.from(target.childNodes[0].classList).includes("red-piece")) return true
    return false
  }
}

const squareEmpty = (target, e) => {
  if(Array.from(target.classList).includes("piece")) target = e.target.parentElement
  if (target.childNodes.length > 0) return false
  return true
}
