const squares = document.querySelectorAll("div");
const handleIntersection = (square) => {
    if (square.isIntersecting) {
        square.target.classList.add("visible")
    } else {
        square.target.classList.remove("visible")
    }
}
const observer = new IntersectionObserver((squares) => {
    console.log(squares)
    squares.forEach(handleIntersection)
})

squares.forEach((square) => observer.observe(square))

