document.addEventListener("DOMContentLoaded", () => {
  grabPiece()
})

let pieceToMove;
let divSquare;

const grabPiece = () => {
  let pieces = document.querySelectorAll(".piece")
  pieces.forEach(piece => {
    piece.addEventListener("click", (e) => {
      pieceToMove = e.target
      e.target.style.border = "2px solid yellow"
    })
  })
}

const movePiece = () => {
  
}
