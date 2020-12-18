startButton.addEventListener("click", () => {
    const timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert(`Your final score is ${score}`);
            let buttonHolder = document.getElementById("buttonContainer")
            let newButton = document.createElement("button")
            let x = document.createTextNode("Play Again!")
            newButton.appendChild(x)
            buttonHolder.appendChild(newButton)
            newButton.addEventListener("click", () => {
                location.reload()
            })
            newButton.addEventListener("touchstart", () => {
                location.reload()
            })
            // startButton.innerHTML = "Play Again"
        }
        timeRemainingDisplay.innerHTML = `${timeRemaining}`;
        timeRemaining --;
    }, 1000);
})