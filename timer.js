startButton.addEventListener("click", () => {
    const timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert(`Your final score is ${score}`);
            startButton.innerHTML = "Play Again"
        }
        timeRemainingDisplay.innerHTML = `${timeRemaining}`;
        timeRemaining --;
    }, 1000);
})