// Variable declaration
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");
const box6 = document.getElementById("box-6");
const box7 = document.getElementById("box-7");
const box8 = document.getElementById("box-8");
const box9 = document.getElementById("box-9");
const box10 = document.getElementById("box-10");
const box11 = document.getElementById("box-11");
const box12 = document.getElementById("box-12");
const box13 = document.getElementById("box-13");
const box14 = document.getElementById("box-14");
const box15 = document.getElementById("box-15");
const box16 = document.getElementById("box-16");
const startButton = document.getElementById("startButton");
let timeRemainingDisplay = document.getElementById("timeRemainingDisplay");
let scoreDisplay = document.getElementById("scoreDisplay");

let timeRemaining = 0;
let score = 0;
let holes = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16]

// Random Mole location
let moleNumber = 0;
const moleRandomNum =  () => {
    let min = Math.ceil(1);
    let max = Math.floor(16);
    moleNumber = Math.floor(Math.random() * (max - min) + min);
    return moleNumber;
}

// Pic number
let picNumber = 0;
const picRandomNum =  () => {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    picNumber = Math.floor(Math.random() * (max - min) + min);
    return picNumber;
}

// Score count
const scoreCount = () => {
    score++
    scoreDisplay.innerHTML = `${score}`
}

// Button click
startButton.addEventListener('click', () => {
    score = 0;
    timeRemaining = 30;
    startButton.remove();
    scoreDisplay.innerHTML = 0;
    const whackAMole = setInterval(() => {
        if (timeRemaining <= 1){
            clearInterval(whackAMole);
        }
        let num = moleRandomNum()
        let num2 = picRandomNum()
        holes[num].style.backgroundImage = `url("/images/boris${num2}.jpg")`;
        console.log(holes[num].style.backgroundImage)
        holes[num].addEventListener('click', scoreCount)
        const removeImg = setTimeout(() => {
            holes[num].style.backgroundImage = 'url("./images/home.jpg")';
            holes[num].removeEventListener('click', scoreCount)
        }, 750)
    }, 1000)

})
