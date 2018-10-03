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
      highlightSquare(target)
      if((squareEmpty(target) === false && player === "black" && blackPiece(target)) || (squareEmpty(target) === false && player === "red" && redPiece(target))) {
        squareOne = target
        if(Array.from(target.classList).includes("piece")) squareOne = e.target.parentElement
      } else if((squareOne !== false && player === "black" && validMoveBlack(target)) || (squareOne !== false && player === "red" && validMoveRed(target))){
        if(Array.from(target.classList).includes("piece")) target = e.target.parentElement
        if(player === "black") {
          player = "red"
          target.innerHTML += "<div class='piece black-piece'></div>"
        } else if (player === "red") {
          player = "black"
          target.innerHTML += "<div class='piece red-piece'></div>"
        }
        squareOne.innerHTML = ""
        highlightedSquare = null
        squareOne = false
      }
    })
  })
}

const highlightSquare = (target) => {
  if(Array.from(target.classList).includes("piece")) target = target.parentElement
  if(typeof target.childNodes[1] === "object") {
    if(highlightedSquare !== target) {
      target.childNodes[1].style.border = "4px solid yellow"
      if(highlightedSquare) {
        if(highlightedSquare.childNodes.length > 1) highlightedSquare.childNodes[1].style.border = ""
        if(highlightedSquare.childNodes.length === 1) highlightedSquare.childNodes[0].style.border = ""
      }
      highlightedSquare = target
    }
  } else if(typeof target.childNodes[0] === "object") {
      if(highlightedSquare !== target) {
        target.childNodes[0].style.border = "4px solid yellow"
        if(highlightedSquare) {
          if(highlightedSquare.childNodes.length > 1) highlightedSquare.childNodes[1].style.border = ""
          if(highlightedSquare.childNodes.length === 1) highlightedSquare.childNodes[0].style.border = ""
      }
      highlightedSquare = target
    }
  }
}

const blackPiece = (target) => {
  if(Array.from(target.classList).includes("piece")) target = target.parentElement
  if(typeof target.childNodes[1] === "object") {
    if(Array.from(target.childNodes[1].classList).includes("black-piece")) return true
    return false
  } else if (typeof target.childNodes[0] === "object") {
    if(Array.from(target.childNodes[0].classList).includes("black-piece")) return true
    return false
  }
}

const redPiece = (target) => {
  if(Array.from(target.classList).includes("piece")) target = target.parentElement
  if(typeof target.childNodes[1] === "object") {
    if(Array.from(target.childNodes[1].classList).includes("red-piece")) return true
    return false
  } else if (typeof target.childNodes[0] === "object") {
    if(Array.from(target.childNodes[0].classList).includes("red-piece")) return true
    return false
  }
}

const squareEmpty = (target) => {
  if(Array.from(target.classList).includes("piece")) target = target.parentElement
  if (target.childNodes.length > 0) return false
  return true
}

const validMoveBlack = (target) => {
  if(Array.from(target.classList).includes("piece")) target = target.parentElement
  cordsOne = target.classList[0].split("-")
  cordsTwo = highlightedSquare.classList[0].split("-")
  squareColor = target.classList[1].split("-")[0]
  if (parseInt(cordsTwo[1]) <= parseInt(cordsOne[1])) return false
  if (squareColor === "white") return false
  if ((parseInt(cordsTwo[3]) + 1) !== parseInt(cordsOne[3]) && (parseInt(cordsTwo[3]) - 1) !== parseInt(cordsOne[3])) return false
  if (target.childNodes.length > 1) {
    if (target.childNodes[1].classList.includes("black-piece")) {
      return false
    } else {
      // jump piece
    }
  } else if(target.childNodes.length === 1) {
    if (target.childNodes[0].classList.includes("black-piece")) {
      return false
    } else {
      // jump piece
    }
  }
  return true
}

const validMoveRed = (target) => {
  if(Array.from(target.classList).includes("piece")) target = target.parentElement
  cordsOne = target.classList[0].split("-")
  cordsTwo = highlightedSquare.classList[0].split("-")
  squareColor = target.classList[1].split("-")[0]
  if (parseInt(cordsTwo[1]) >= parseInt(cordsOne[1])) return false
  if (squareColor === "white") return false
  if ((parseInt(cordsTwo[3]) + 1) !== parseInt(cordsOne[3]) && (parseInt(cordsTwo[3]) - 1) !== parseInt(cordsOne[3])) return false
  if (target.childNodes.length > 1) {
    if (target.childNodes[1].classList.includes("red-piece")) {
      return false
    } else {
      // jump piece
    }
  } else if(target.childNodes.length === 1) {
    if (target.childNodes[0].classList.includes("red-piece")) {
      return false
    } else {
      // jump piece
    }
  }
  return true
}
