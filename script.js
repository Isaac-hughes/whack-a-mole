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
const timeRemainingDisplay = document.getElementById("timeRemainingDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");

let score = 0;
let countDownFinished = false;

// Random Mole location
var moleNumber = 0;
const moleRandomNum =  () => {
    let min = Math.ceil(1);
    let max = Math.floor(17);
    moleNumber = Math.floor(Math.random() * (max - min) + min);
    return moleNumber;
}

// Random Mole Timer
const randomTimer = () => {
    var min = 0,
      max = 1;
    var rand = (Math.random() * (max - min + 1) + min); 
    console.log('Wait for ' + rand + ' seconds');
    setTimeout(randomTimer, rand * 1000);
}


// 15 second timer
let timeLeft = 5;

const countDown = () => {
    let time = setInterval(function(){
        if(timeLeft < 0){
            clearInterval(time) 
            timeLeft = 5;
            countDownFinished = true;
        }
        timeRemainingDisplay.textContent = `${timeLeft}`;
        timeLeft -= 1;
    }, 1000)
}

// Whack a mole
const whackAMole = () => {
    let check = setInterval(function(){
        if (countDownFinished == false){
            console.log("Run Script")
            
        }else{
            console.log("It's Over")
            countDownFinished = false;
            clearInterval(check)
        }
        
    }, 100)
    
}



// Button click
startButton.addEventListener('click', () => {
    score = 0;
    countDown()
    whackAMole()
    
})


// const whackAMole = () => {
//     let check = setInterval(function(){
//         if (countDownFinished == false){
//             console.log("Run Script")
//         }else{
//             console.log("It's Over")
//             countDownFinished = false;
//             clearInterval(check)
//         }
        
//     }, 100)
    
// }